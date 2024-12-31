import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
