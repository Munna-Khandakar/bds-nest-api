import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: Model<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create(createRoleDto);
  }

  async findAll() {
    return this.roleModel.find().exec();
  }

  async findOne(id: string) {
    return this.roleModel.findById(id).exec;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleModel
      .findByIdAndUpdate(id, updateRoleDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.roleModel.findByIdAndDelete(id).exec();
  }
}
