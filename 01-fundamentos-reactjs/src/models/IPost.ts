import { IAuthor } from "./IAuthor";
import { IComment } from "./IComment";

export interface IPost {
    id: number;
    author: IAuthor;
    content: string;
    comments: IComment[];
}