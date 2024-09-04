import { Body, Controller, Post } from '@nestjs/common';
import { GoogleAuthService } from './providers/google-auth.service';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { AuthType } from '../enums/auth-type.enum';
import { Auth } from '../decorators/auth.decorator';

@Auth(AuthType.None)
@Controller('auth/google-auth')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Post()
  public authenticate(@Body() googleTokenDto: GoogleTokenDto) {
    return this.googleAuthService.authentication(googleTokenDto);
  }
}
