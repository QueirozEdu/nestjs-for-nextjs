import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    if (!user || info instanceof JsonWebTokenError) {
      throw new UnauthorizedException('You need to log in first');
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
