import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { data } from 'src/data';

@Injectable()
export class IsadminMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: any, res: any, next: () => void) {
    try {
      let cookie =req.cookies["jft"];
    let jwt = await this.jwtService.verifyAsync(cookie);
      let admin = data.find(e=>jwt.user.email==e.email);
      console.log(admin);
      
    if(admin.type=="admin"){
      next();
    }
    else{
      return res.send({message:"unauthorize"})
    }
      
    } catch (error) {
      return res.send({message:error})
    }
    
    
  }
}
