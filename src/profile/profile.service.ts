import { Injectable, Res } from '@nestjs/common';
import { data } from 'src/data';

@Injectable()
export class ProfileService {
    get(req){
        console.log(req.user,"controller")
        let obj = data.find(e=>Number(req.user.id)==Number(e.id))

        return obj;
    }

    update( body:{id?:number;email:string;type:string;name:string,job:string,salary:number}, req:any){

        try {
            let index = data.findIndex(e=>Number(req.user.id) ==Number(e.id));
            console.log(index);
            
            if(index>=0){
                data[index] = body
                data[index].id=req.user.id;
                data[index].type=req.user.type;
                return data[index];
            }
            else{
                return {message:"not found"}
            }

        
            
        } catch (error) {
            return {message:{error}}
        }
        
    }


}
