import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class AuthResponseDto {
  access_token: string;
}
