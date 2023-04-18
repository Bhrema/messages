import { Module } from '@nestjs/common';
import { MesssagesController } from './messsages.controller';

@Module({
  controllers: [MesssagesController],
})
export class MessagesModule {}
