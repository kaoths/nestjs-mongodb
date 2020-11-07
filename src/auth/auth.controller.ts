import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './auth.dto';
import { User } from '../model/user.model';
import { PublicAPI } from '../decorators/public-api.decorator';

@PublicAPI()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credential: AuthCredentialsDto) {
    return this.authService.login(credential);
  }

  @Post('register')
  async register(@Body() user: User) {
    return this.authService.register(user);
  }
}
