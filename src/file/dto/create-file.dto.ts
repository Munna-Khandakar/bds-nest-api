import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFileDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly currentLocation: string;

  @IsOptional()
  @IsString()
  readonly status: string;
}
