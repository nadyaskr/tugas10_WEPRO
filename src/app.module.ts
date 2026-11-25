import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DrinkQueueController } from './drink-queue.controller';
import { DrinkQueueService } from './drink-queue.service';

@Module({
  imports: [],
  controllers: [DrinkQueueController],
  providers: [PrismaService, DrinkQueueService],
})
export class AppModule {}