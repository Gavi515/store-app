import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provide } from './entities/provide.entity';
import { CreateProvideDto } from './dto/create-provide.dto';
import { UpdateProvideDto } from './dto/update-provide.dto';

@Injectable()
export class ProvidesService {
  constructor(
    @InjectModel(Provide.name)
    private readonly provideModel: Model<Provide>,
  ) {}

  async create(createProvideDto: CreateProvideDto): Promise<Provide> {
    try {
      const provide = new this.provideModel(createProvideDto);
      return await provide.save();
    } catch (error) {
      throw new BadRequestException('Error creating provide');
    }
  }

  async findAll(): Promise<Provide[]> {
    return this.provideModel.find().exec();
  }

  async findOne(id: string): Promise<Provide> {
    const provide = await this.provideModel.findById(id).exec();
    if (!provide) {
      throw new NotFoundException(`Provide with ID "${id}" not found`);
    }
    return provide;
  }

  async update(id: string, updateProvideDto: UpdateProvideDto): Promise<Provide> {
    const provide = await this.provideModel.findByIdAndUpdate(
      id,
      updateProvideDto,
      { new: true, runValidators: true },
    ).exec();

    if (!provide) {
      throw new NotFoundException(`Provide with ID "${id}" not found`);
    }
    return provide;
  }

  async remove(id: string): Promise<void> {
    const result = await this.provideModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Provide with ID "${id}" not found`);
    }
  }
}

