import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuppliesService } from './supplies.service';
import { SuppliesController } from './supplies.controller';
import { Supply, SupplySchema } from './entities/supply.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Supply.name, schema: SupplySchema }]),
  ],
  controllers: [SuppliesController],
  providers: [SuppliesService],
})
export class SuppliesModule {}

