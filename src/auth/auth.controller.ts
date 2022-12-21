import { Body, Controller, Get, Options, Post, Req, Res } from '@nestjs/common';
import { request } from 'http';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post()
    login(@Body() auth:{email:string},@Res({passthrough:true}) request:any){
        return this.authService.login(auth,request);
    }

}
