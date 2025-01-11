import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

class Step {
  @Prop({ required: true, type: String })
  department: string;

  @Prop({ required: true, type: String })
  subDepartment: string;

  @Prop({ required: true, type: Number })
  timeLimit: number;

  @Prop({ required: true, type: Boolean })
  requiredApproval: boolean;

  @Prop({ required: true, type: Boolean })
  parallelProcessing: boolean;
}

@Schema({
  timestamps: true,
})
export class Workflow {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ type: String })
  description: string;

  @Prop({ type: [Step], required: true })
  steps: Step[];
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);
