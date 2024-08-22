import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,

    @InjectRepository(Post)
    private readonly postRepostitory: Repository<Post>,

    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
    private readonly tagsService: TagsService,
  ) {}

  public async findAll() {
    const posts = await this.postRepostitory.find({
      relations: {
        metaOptions: true,
        author: true,
        tags: true,
      },
    });

    return posts;
  }

  public async update(patchPostDto: PatchPostDto) {
    const tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    const post = await this.postRepostitory.findOneBy({
      id: patchPostDto.id,
    });
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;
    post.tags = tags;

    return await this.postRepostitory.save(post);
  }

  public async delete(id: number) {
    await this.postRepostitory.delete(id);
    return { deleted: true, id };
  }

  public async create(@Body() createPostDto: CreatePostDto) {
    const author = await this.usersService.findOneById(createPostDto.authorId);
    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    const post = this.postRepostitory.create({
      ...createPostDto,
      author: author,
      tags: tags,
    });
    return await this.postRepostitory.save(post);
  }

  public patchPost(patchPostDto: PatchPostDto) {
    return patchPostDto;
  }
}
