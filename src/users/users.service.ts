import { Injectable } from '@nestjs/common';
import { data } from 'src/data';


@Injectable()
export class UsersService {
  getData(): {id?: number;email:string; name: string;type:string; job: string; salary: number}[] {
    return data;
  }

  create(newpost: { id?: number;email:string; name: string;type:string; job: string; salary: number }={
      type: "user",
      email: '',
      name: '',
      job: '',
      salary: 0
  }):
    | {
        id?: number;
        name: string;
        email:string;
        type:string;
        job: string;
        salary: number;
      }[]
    | object {
    try {
      newpost.id = data[data.length - 1].id + 1;
      newpost.type = "user";
      data.push(newpost);
      return data;
    } catch (error) {
      return { message: 'invalid command' };
    }
  }

  findById(id: string):
    | {
        id?: number;
        name: string;
        email:string;
        type:string;
        job: string;
        salary: number;
      }
    | object {
    try {
      let index: number = data.findIndex((e) => e.id == Number(id));

      if (index >= 0) {
        let obj: { id?: number; name: string; job: string; salary: number } =
          data[index];

        return obj;
      } else {
        return { message: 'not found' };
      }
    } catch (error) {
      return { message: error };
    }
  }

  findByIdandUpdate(id:string,update:{
    
        name: string;
        email:string;
        type:string;
        job: string;
        salary: number;
  }):{
        id?: number;
        name: string;
        email:string;
        type:string;
        job: string;
        salary: number;
  }|object{
    try {
        let index: number = data.findIndex((e) => e.id == Number(id));
        if (index >= 0) {
              data[index]=update;
              data[index].id = +id
    
            return data[index];
          } else {
            return { message: 'Not Found' };
          }
        
    } catch (error) {
        return { message: error };
    }
  }

  findByIdAndDelete(id:string):Array<object>|object{
    try {
        let index: number = data.findIndex((e) => e.id == Number(id));
        if (index >= 0) {
             data.splice(index,1)
    
            return data;
          } else {
            return { message: 'Not Found' };
          }
    } catch (error) {
        return { message: error };
    }
  }

}
