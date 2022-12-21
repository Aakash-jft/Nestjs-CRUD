import { Body, Controller, Get, Patch, Post, Req } from '@nestjs/common';
import { get } from 'http';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get()
    async login(@Req() req:any){
         return await this.profileService.get(req)
    }
    @Patch()
    async update(@Req() req:any, @Body() update:{name:string,email:string;type:"user";job:string,salary:number}){
        return  await this.profileService.update(update,req);
    }
}
