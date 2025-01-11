import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Department {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: String })
  departmentHead: string;

  @Prop({ type: String })
  location: string;

  @Prop({ type: String })
  subDepartments: string[];

  @Prop({ type: String })
  description: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
