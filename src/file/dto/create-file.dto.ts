import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFileDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  currentLocation: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  nid: string;

  @IsOptional()
  @IsString({ each: true })
  workflow: string[];

  @IsOptional()
  @IsString()
  applicantName: string;
}
