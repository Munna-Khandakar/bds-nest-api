import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsNumber,
  IsArray,
} from 'class-validator';

export class StepDto {
  @IsString()
  department: string;

  @IsString()
  subDepartment: string;

  @IsNumber()
  timeLimit: number;

  @IsBoolean()
  requiredApproval: boolean;

  @IsBoolean()
  parallelProcessing: boolean;
}

export class CreateWorkflowDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsArray()
  steps: StepDto[];
}
