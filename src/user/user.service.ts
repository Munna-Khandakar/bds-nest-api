import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password || createUserDto.phone,
      10,
    );

    return await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user' + createUserDto;
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: number) {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new NotFoundException('User not found !');
    }

    return user;
  }

  async findByPhone(phone: string) {
    return await this.userModel.find({ phone }).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found !');
    }

    return updatedUser;
  }

  async remove(id: number) {
    const user = await this.userModel.findByIdAndDelete(id).exec();

    if (!user) {
      throw new NotFoundException('User not found !');
    }

    return user;
  }
}
