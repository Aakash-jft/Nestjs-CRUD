import { Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { data } from 'src/data';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(auth: { email: string } ,response:any) {
    try {
        console.log(auth);
        
    let user = data.find(e=>e.email==auth.email);
    console.log(user)
    if(user==undefined){
        return "not found"
    }else{
        let jwt = await this.jwtService.sign({user});
        await response.cookie("jft",jwt,{httpOnly:true});
        return jwt;
    }
     
    } catch (error) {
      return response.send(error);
    }
  }
}
