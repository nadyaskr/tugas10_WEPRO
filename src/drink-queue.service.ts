import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class DrinkQueueService {
  constructor(private prisma: PrismaService) {}

  async create(data: { customerName: string; drinkName: string; qty?: number; status?: string }) {
    const lastQueue = await this.prisma.drinkQueue.findFirst({
      orderBy: { queueNumber: 'desc' },
    });
    const nextQueueNumber = lastQueue ? lastQueue.queueNumber + 1 : 1;

    return this.prisma.drinkQueue.create({
      data: {
        queueNumber: nextQueueNumber,
        customerName: data.customerName,
        drinkName: data.drinkName,
        qty: data.qty ?? 1,
        status: data.status ?? 'waiting',
      },
    });
  }

  findAll() {
    return this.prisma.drinkQueue.findMany({
      orderBy: { queueNumber: 'asc' },
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.drinkQueue.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Antrian tidak ditemukan');
    return item;
  }

  async update(id: number, data: Partial<{ customerName: string; drinkName: string; qty: number; status: string }>) {
    await this.findOne(id);
    return this.prisma.drinkQueue.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.drinkQueue.delete({ where: { id } });
  }

  countByStatus(status: string) {
    return this.prisma.drinkQueue.count({
      where: { status },
    });
  }
}