import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ViewController],
})
export class ViewModule {}
