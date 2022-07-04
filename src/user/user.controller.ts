import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  save(@Body() dto: CreateUserDto) {
    return this.userService.save(dto);
  }

  @Get()
  find() {
    return this.userService.find();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.userService.findOne(uuid);
  }
}
