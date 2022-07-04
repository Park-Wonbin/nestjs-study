import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  save(dto: CreateUserDto) {
    return dto;
  }

  find() {
    return '';
  }

  findOne(uuid: string) {
    return uuid;
  }
}
