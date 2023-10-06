import { BruxosRepository } from "./bruxo.repository";
import { PrismaService } from "src/prisma.service";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";
import { Bruxo } from "@prisma/client";

@Injectable()
export class BruxosRepositoryI implements BruxosRepository {
    constructor(private prisma: PrismaService){}

    async create(name: string, house: string, patrono: string): Promise<void> {
        await this.prisma.bruxo.create({
            data: {
                id: randomUUID(),
                name,
                house,
                patrono
            }
        })
    }

    async findAll(): Promise<Bruxo[]> {
        return await this.prisma.bruxo.findMany();
    }
}