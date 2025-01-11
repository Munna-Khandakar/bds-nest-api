import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly reportsTo: string;

  @IsOptional()
  readonly permissions: string[];
}
