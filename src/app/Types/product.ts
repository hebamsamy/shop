export interface IProduct{
    id:number,
    name:string,
    imgURL:string,
    rate:number,
    categoryID:number,
    quantity:number,
    price:number
}
export interface IProductAPI{
    id:number,
    name:string,
    description:string,
    rate:number,
    categoryID:number,
    categoryName:string,
    quantity:number,
    price:number,
    images:Array<string>
}

