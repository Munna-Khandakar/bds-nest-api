import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly departmentHead: string;

  @IsString()
  @IsOptional()
  readonly location: string;

  @IsArray()
  @IsOptional()
  readonly subDepartments: string[];

  @IsString()
  @IsOptional()
  readonly description: string;
}
