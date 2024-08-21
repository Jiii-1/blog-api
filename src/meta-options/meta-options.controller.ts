import { Controller, Post, Body } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-option.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionService: MetaOptionsService) {}
  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return this.metaOptionService.create(createPostMetaOptionsDto);
  }
}
