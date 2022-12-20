import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getDeta(): { name: string;email:string;type:string; job: string; salary: number }[] {
    return this.userService.getData();
  }
  @Get(':id')
  getById(@Param('id') id:string){
    return this.userService.findById(id);
  }

  @Post()
  create(@Body() createUserDto: {id?:number; name: string;email:string;type:string; job: string; salary: number }) {
    return this.userService.create(createUserDto);
  }
  @Patch(':id')
  findByIdandUpdate(@Param('id') id:string , @Body() update:{name:string,email:string;type:"user";job:string,salary:number}){
    return this.userService.findByIdandUpdate(id,update);
  }
  @Delete(':id')
  findByIdAndDelete(@Param('id') id:string){
    return this.userService.findByIdAndDelete(id)
  }

}
