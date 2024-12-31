import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: true, type: String, unique: true })
  phone: number;
  @Prop({ required: true, type: String })
  role: string;
  @Prop({ required: true, type: String })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
