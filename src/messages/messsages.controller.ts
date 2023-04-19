import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './DTOS/create-message.dto';

@Controller('messsages')
export class MesssagesController {
  @Get()
  listMessages() {
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body)
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id)
  }
}
