import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionFilter } from './filters/custom-exception.filter';
import { FileModule } from './file/file.module';
import { WorkflowModule } from './workflow/workflow.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [DatabaseModule, UserModule, FileModule, WorkflowModule, RoleModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
