import { Document} from "mongoose";

export interface IUser {
    name: string;
    phone:number;
    address:string;
    email: string;
    community: string; //Community.id
    image?: string; //linked from Facebook
    description: string;
    restrictions: []; //Restriction[]
    authorized: boolean;
   
  }
  
  export interface UserDocument extends IUser, Document {}
