import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
class Contact {
  @Prop({ required: true })
  cell_phone: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;
}
export const ContactSchema = SchemaFactory.createForClass(Contact);

@Schema()
export class Provide extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ type: ContactSchema, required: true })
  contact: Contact;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Supply' }] })
  supplies: Types.ObjectId[]; // Relación con Supply
}

export const ProvideSchema = SchemaFactory.createForClass(Provide);

