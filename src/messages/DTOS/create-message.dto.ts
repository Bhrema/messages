import { IsNumber, IsString } from 'class-validator';

export class CreateMessageDto{
    @IsString()
    content: string;
}