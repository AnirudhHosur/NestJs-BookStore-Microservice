import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'Anirudh',
      lastName: 'Hosur',
      age: 25
    },

    {
      id: 2,
      firstName: 'Sampada',
      lastName: 'Hosur',
      age: 18
    },

  ]

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): UserDto[]{
    return this.users;
  }
}
