import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicAPI } from './decorators/public-api.decorator';

@PublicAPI()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/api')
  redirect(): void {
    /** redirects to api document */
  }
}
