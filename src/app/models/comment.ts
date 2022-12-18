import { User } from "./user";

export class Comment {
  id!:number;
  postId!: number;
  text!:string;
  date!: Date;
  edited!: boolean;
  sender!: User;
  likes!:User[];





  }

