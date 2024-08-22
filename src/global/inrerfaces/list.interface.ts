import { IListItem } from "./item.interface";

export interface IList {
    id: number,
    items: IListItem[],
    date: Date,
    sum?: number,

}