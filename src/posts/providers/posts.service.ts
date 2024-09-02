import {
  BadRequestException,
  Body,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { GetPostsDto } from '../dtos/get-post.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { ActiveUserData } from 'src/auth/interfaces/acitve-user.interface';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,

    @InjectRepository(Post)
    private readonly postRepostitory: Repository<Post>,

    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
    private readonly tagsService: TagsService,
    private readonly paginationProvider: PaginationProvider,
    private readonly createPostProvider: CreatePostProvider,
  ) {}

  public async findAll(postQuery: GetPostsDto): Promise<Paginated<Post>> {
    const posts = await this.paginationProvider.paginateQuery(
      { limit: postQuery.limit, page: postQuery.page },
      this.postRepostitory,
    );

    return posts;
  }

  public async update(patchPostDto: PatchPostDto) {
    let tags = undefined;
    let post = undefined;
    try {
      tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'error connection to database',
        },
      );
    }

    if (!tags || tags.length !== patchPostDto.tags.length) {
      throw new BadRequestException(
        'check your tags id and ensure thats is correct',
      );
    }

    try {
      post = await this.postRepostitory.findOneBy({
        id: patchPostDto.id,
      });
    } catch (error) {
      throw new BadRequestException(
        'check your tags id and ensure thats is correct',
      );
    }

    if (!post) {
      throw new BadRequestException('the post id does not exist');
    }

    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;
    post.tags = tags;

    try {
      await this.postRepostitory.save(post);
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'error connection to database',
        },
      );
    }
    return post;
  }

  public async delete(id: number) {
    await this.postRepostitory.delete(id);
    return { deleted: true, id };
  }

  public async create(
    @Body() createPostDto: CreatePostDto,
    user: ActiveUserData,
  ) {
    return this.createPostProvider.create(createPostDto, user);
  }

  public patchPost(patchPostDto: PatchPostDto) {
    return patchPostDto;
  }
}
