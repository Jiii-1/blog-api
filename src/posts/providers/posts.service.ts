import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,

    @InjectRepository(Post)
    private readonly postRepostitory: Repository<Post>,

    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'title 1',
        content: 'content 1',
      },
      {
        user: user,
        title: 'title 2',
        content: 'content 2',
      },
    ];
  }

  public async create(@Body() createPostDto: CreatePostDto) {
    const metaOption = createPostDto.metaOptions
      ? this.metaOptionRepository.create(createPostDto.metaOptions)
      : null;
    if (metaOption) {
      await this.metaOptionRepository.save(metaOption);
    }

    const post = this.postRepostitory.create(createPostDto);
    if (metaOption) {
      post.metaOptions = metaOption;
    }
    console.log(post.publishOn);

    return await this.postRepostitory.save(post);
  }

  public patchPost(patchPostDto: PatchPostDto) {
    return patchPostDto;
  }
}
