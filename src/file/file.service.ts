import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<File>,
  ) {}

  async create(createFileDto: CreateFileDto) {
    return await this.fileModel.create(createFileDto);
  }

  async findAll() {
    return await this.fileModel.find().populate('departments').exec();
  }

  async findOne(id: string) {
    return await this.fileModel.findById(id).exec();
  }

  async update(id: string, updateFileDto: UpdateFileDto) {
    return await this.fileModel
      .findByIdAndUpdate(id, updateFileDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.fileModel.findByIdAndDelete(id).exec();
  }
}
