import { IAuthor } from "./IAuthor";

export interface IComment {
    id: number;
    author: IAuthor;
    textComment: string
}