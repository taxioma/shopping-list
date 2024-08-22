export interface IListItem {
    id: number,
    title: string,
    status: boolean,
    url?: string,
    shop?: string[],
    cost?: string
}