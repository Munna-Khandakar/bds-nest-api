import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Department } from '../../department/entities/department.entity';

@Schema({
  timestamps: true,
})
export class File {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  applicantName: string;
  @Prop({ type: String })
  description: number;
  @Prop({ type: String })
  currentLocation: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  department: Department;
  @Prop({ type: String })
  status: string;
  @Prop({ type: String })
  nid: string;
  @Prop({ type: [String] })
  workflow: [string];
  @Prop({ type: String })
  priority: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
