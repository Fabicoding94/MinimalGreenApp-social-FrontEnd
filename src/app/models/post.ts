import { User } from "./user";
import { Comment } from "./comment";

export class Post {

  id!: number;
  author!: User;
  title!: string;
  text!: string;
  date!: Date;
  edited!: boolean;
  likes!: User[];
  comments!: Comment[];


}
