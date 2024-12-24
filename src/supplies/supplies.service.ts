import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { Supply } from './entities/supply.entity';

@Injectable()
export class SuppliesService {
  constructor(
    @InjectModel(Supply.name) private readonly supplyModel: Model<Supply>,
  ) {}

  async create(createSupplyDto: CreateSupplyDto): Promise<Supply> {
    const newSupply = new this.supplyModel(createSupplyDto);
    return await newSupply.save();
  }

  async findAll(): Promise<Supply[]> {
    return await this.supplyModel.find().exec();
  }

  async findOne(id: string): Promise<Supply> {
    const supply = await this.supplyModel.findById(id).exec();
    if (!supply) {
      throw new NotFoundException(`Supply with ID ${id} not found`);
    }
    return supply;
  }

  async update(id: string, updateSupplyDto: UpdateSupplyDto): Promise<Supply> {
    const updatedSupply = await this.supplyModel
      .findByIdAndUpdate(id, updateSupplyDto, { new: true })
      .exec();
    if (!updatedSupply) {
      throw new NotFoundException(`Supply with ID ${id} not found`);
    }
    return updatedSupply;
  }

  async remove(id: string): Promise<void> {
    const result = await this.supplyModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Supply with ID ${id} not found`);
    }
  }
}
