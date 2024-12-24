import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Category extends Document {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  name: string;

  // Relación con Product
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
  products: Types.ObjectId[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);

