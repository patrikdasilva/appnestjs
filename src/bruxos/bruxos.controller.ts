import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BruxosService } from './bruxos.service';
import { CreateBruxoDto } from './dto/create-bruxo.dto';
import { UpdateBruxoDto } from './dto/update-bruxo.dto';
import { Bruxo } from './entities/bruxo.entity';

@Controller('bruxos')
export class BruxosController {
  constructor(private readonly bruxosService: BruxosService) {}

  @Post()
  create(@Body() createBruxoDto: CreateBruxoDto) {
    const {name, house, patrono} = createBruxoDto;

    return this.bruxosService.create(name, house, patrono);
  }

  @Get()
  async findAll(): Promise<any>{
    return this.bruxosService.findAll();
  }
}
