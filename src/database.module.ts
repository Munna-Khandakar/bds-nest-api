import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://munnashisad:ZDKnQVdXP3KnlVh5@cluster0.krmgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'bds-primary',
      },
    ),
  ],
})
export class DatabaseModule {}
