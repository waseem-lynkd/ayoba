import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  signToken(userId: number, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email: email,
    };

    return this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: 'secret',
    });
  }
}
