import { Controller, Get } from '@nestjs/common';
import { User } from '../model/user.model';
import { UserId } from '../decorators/user-id.decorator';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async me(@UserId() id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
