import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller()
export class ViewController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get('usuarios')
  @Render('users')
  async users() {
    const users = await this.usersService.findAll();
    return { users };
  }
}
