import { Document} from "mongoose";

export interface IVolunteer {
    name: string;
    phone:number;
    address:string;
    email: string;
    community: string; //Community.id
    image?: string; //linked from Facebook
    description: string;
    restrictions: []; //Restriction[]
    authorized: boolean;
    token:string;
   
  }
  
  export interface UserDocument extends IVolunteer, Document {}
