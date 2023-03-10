import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { data } from 'src/data';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: any, res: any, next: () => void) {
    try {
      let cookie =req.cookies["jft"];
    let jwt = await this.jwtService.verifyAsync(cookie);
    
    let user = data.find(e=>e.email==jwt.user.email)
    req.user = user

    console.log(req.user,"middleware");
    
    next();
      
    } catch (error) {
      return res.send({message:error});
    }
    
  }
}
