import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentModel.create(createDepartmentDto);
  }

  async findAll() {
    return await this.departmentModel.find().exec();
  }

  async findOne(id: string) {
    return await this.departmentModel.findById(id).exec();
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentModel
      .findByIdAndUpdate(id, updateDepartmentDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.departmentModel.findByIdAndDelete(id).exec();
  }
}
