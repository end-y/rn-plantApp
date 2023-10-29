export interface QuestionProps{
    id: number,
    title: string,
    image_uri: string,
    uri: string,
}
export interface CategoryProps{
    id: number,
    title: string,
    image:ImageProps
}

interface ImageProps{
    url:string,
    height:number,
    width:number
}