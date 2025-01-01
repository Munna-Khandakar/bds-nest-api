import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class File {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: true, type: String })
  currentLocation: number;
  @Prop({ required: true, type: String })
  status: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
