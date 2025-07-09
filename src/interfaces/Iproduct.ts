export interface IProduct {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    stockStatus: 'In Stock' | 'Out of Stock';
    colors: string[];
    category: {
        name: string,
        imageUrl: string
    };
}