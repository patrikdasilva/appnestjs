import { Injectable } from '@nestjs/common';
import { Bruxo, Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateBruxoDto } from '../dto/create-bruxo.dto';

@Injectable()
export class BruxosRepository {
    async create(name: string, house: string, patrono: string): Promise<void> {}
    async findAll(): Promise<any> {}
}
