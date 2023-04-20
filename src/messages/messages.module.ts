import { Module } from '@nestjs/common';
import { MessagesController } from './messsages.controller';

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
