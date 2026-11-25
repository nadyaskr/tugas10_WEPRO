import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { DrinkQueueService } from './drink-queue.service';

@Controller('drink-queue')
export class DrinkQueueController {
  constructor(private readonly drinkQueueService: DrinkQueueService) {}

  @Post()
  create(@Body() body: { customerName: string; drinkName: string; qty?: number; status?: string }) {
    return this.drinkQueueService.create(body);
  }

  @Get()
  findAll() {
    return this.drinkQueueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.drinkQueueService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<{ customerName: string; drinkName: string; qty: number; status: string }>,
  ) {
    return this.drinkQueueService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.drinkQueueService.remove(id);
  }
}