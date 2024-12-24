import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvidesService } from './provides.service';
import { ProvidesController } from './provides.controller';
import { Provide, ProvideSchema } from './entities/provide.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Provide.name, schema: ProvideSchema }]),
  ],
  controllers: [ProvidesController],
  providers: [ProvidesService],
})
export class ProvidesModule {}

