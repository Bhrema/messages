import { Module } from '@nestjs/common';
import { MessagesController } from './messsages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({
  controllers: [MessagesController],

  //coisas que podem ser usadas como dependências por outras classes
  providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {}
