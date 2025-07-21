export interface IProduct {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string | number;
    stockStatus: 'In Stock' | 'Out of Stock';
    colors: string[];
    category: {
        name: string,
        imageUrl: string
    };
}
export interface IinputField{
    id: string;
    name: "name" | "description" | "imageUrl" | "price",
    type: string;
    label: string;
}
