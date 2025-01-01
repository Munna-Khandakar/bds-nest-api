import { Injectable } from '@nestjs/common';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Workflow } from './entities/workflow.entity';

@Injectable()
export class WorkflowService {
  constructor(
    @InjectModel(Workflow.name) private readonly workFlowModel: Model<Workflow>,
  ) {}

  async create(createWorkflowDto: CreateWorkflowDto) {
    return this.workFlowModel.create(createWorkflowDto);
  }

  async findAll() {
    return this.workFlowModel.find().exec();
  }

  async findOne(id: string) {
    return this.workFlowModel.findById(id).exec;
  }

  async update(id: string, updateWorkflowDto: UpdateWorkflowDto) {
    return this.workFlowModel
      .findByIdAndUpdate(id, updateWorkflowDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.workFlowModel.findByIdAndDelete(id).exec();
  }
}
