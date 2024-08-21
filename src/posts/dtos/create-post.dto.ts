import { Type } from 'class-transformer';
import { PostType } from '../enums/postType.enum';
import { Status } from '../enums/status.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-option.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
  MinLength,
  Matches,
  IsJSON,
  IsUrl,
  ValidateNested,
  MaxLength,
  IsISO8601,
} from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'this is the title for the blog post',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  @MaxLength(512)
  title: string;

  @ApiProperty({
    enum: PostType,
  })
  @IsNotEmpty()
  @IsEnum(PostType)
  postType: PostType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "My-url',
  })
  slug: string;

  @ApiProperty({
    enum: Status,
  })
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional()
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'string',
          description: 'the metaValue is json string',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto | null;
}
