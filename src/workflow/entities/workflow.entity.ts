import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Workflow {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ type: String })
  description: string;
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);
