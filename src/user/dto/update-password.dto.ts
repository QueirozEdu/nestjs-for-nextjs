import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'Current password shoulb be a string' })
  @IsNotEmpty({ message: 'Current password should not be empty' })
  currentPassword: string;

  @IsString({ message: 'New password shoulb be a string' })
  @IsNotEmpty({ message: 'New password should not be empty' })
  @MinLength(6, { message: 'New password must be at least 6 characters long' })
  newPassword: string;
}
