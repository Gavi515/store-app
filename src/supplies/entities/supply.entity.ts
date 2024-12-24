import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Supply extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  amount: number;

  @Prop({ type: Types.ObjectId, ref: 'Provide', required: true })
  provider: Types.ObjectId; // Relación con Provide

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Types.ObjectId; // Relación con Product
}

export const SupplySchema = SchemaFactory.createForClass(Supply);

