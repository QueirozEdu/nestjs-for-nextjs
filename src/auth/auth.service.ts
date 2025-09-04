import { LoginDto } from './dto/login.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  doLogin(LoginDto: LoginDto) {
    console.log(LoginDto.email);
    return LoginDto;
  }
}
