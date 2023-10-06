import { Module } from '@nestjs/common';
import { BruxosService } from './bruxos.service';
import { BruxosController } from './bruxos.controller';
import { BruxosRepositoryI } from './repository/bruxo.repository.implements';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BruxosController],
  providers: [BruxosService, BruxosRepositoryI, PrismaService],
})
export class BruxosModule {}
