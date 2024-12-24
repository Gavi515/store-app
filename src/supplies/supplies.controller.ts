import { Controller, Get, Post, Body, Patch, Param, Delete, } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';

@Controller('supplies')
export class SuppliesController {
  constructor(private readonly suppliesService: SuppliesService) {}

  @Post()
  async create(@Body() createSupplyDto: CreateSupplyDto) {
    return await this.suppliesService.create(createSupplyDto);
  }

  @Get()
  async findAll() {
    return await this.suppliesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.suppliesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSupplyDto: UpdateSupplyDto,
  ) {
    return await this.suppliesService.update(id, updateSupplyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.suppliesService.remove(id);
  }
}
