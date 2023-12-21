export interface Moment{
    id?: number,
    title: string,
    description:string,
    image: string,
    created_ad?: string,
    updated_ad?: string,
    coments?: [{text: string; username: string}]
}