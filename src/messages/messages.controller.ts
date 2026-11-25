import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto.js';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'listMessages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);

    return 'createMessage';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);

    return 'getMessage';
  }
}
