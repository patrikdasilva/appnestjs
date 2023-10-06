import { Injectable } from '@nestjs/common';
import { CreateBruxoDto } from './dto/create-bruxo.dto';
import { UpdateBruxoDto } from './dto/update-bruxo.dto';
import { BruxosRepositoryI } from './repository/bruxo.repository.implements';

@Injectable()
export class BruxosService {

  constructor(private bruxoRepository: BruxosRepositoryI) {}

  create(name: string, house: string, patrono: string) {
    this.bruxoRepository.create(name, house, patrono);
  }

  findAll() {
    return this.bruxoRepository.findAll()
  }
}
