import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BruxosModule } from './bruxos/bruxos.module';
import { BruxosService } from './bruxos/bruxos.service';
import { BruxosRepository } from './bruxos/repository/bruxo.repository';
import { BruxosController } from './bruxos/bruxos.controller';
import { BruxosRepositoryI } from './bruxos/repository/bruxo.repository.implements';
import { PrismaService } from './prisma.service';

@Module({
  imports: [BruxosModule],
  controllers: [AppController, BruxosController],
  providers: [AppService, BruxosService, BruxosRepositoryI, PrismaService],
})
export class AppModule {}
