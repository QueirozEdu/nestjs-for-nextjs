import {
  IsString,
  Length,
  IsNotEmpty,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Title must be a string' })
  @Length(10, 150, { message: 'Title must be 10 to 150 characters long' })
  title: string;

  @IsString({ message: 'Excerpt must be a string' })
  @Length(10, 200, { message: 'Excerpt must be 10 to 200 characters long' })
  excerpt: string;

  @IsString({ message: 'Content must be a string' })
  @IsNotEmpty({ message: 'Content can not be empty' })
  content: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  coverImageUrl: string;
}
