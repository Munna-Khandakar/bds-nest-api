import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Role {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ type: String })
  reportsTo: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
