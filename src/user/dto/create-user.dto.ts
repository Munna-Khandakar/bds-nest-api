import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserRole } from '../../enums/UserRole';

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

  @IsEnum(UserRole)
  @IsNotEmpty()
  readonly role: UserRole;
}
