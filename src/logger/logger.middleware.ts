import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: any, res: any, next: () => void) {
    let jwt = this.jwtService.sign(req.body);
    console.log(jwt);
    
    next();
  }
}
