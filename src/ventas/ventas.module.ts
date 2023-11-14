import { Module } from '@nestjs/common';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VentaSchema } from '../schemas/venta.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Venta', schema: VentaSchema }])],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
