import { v4 as uuid } from "uuid";
import type { IinputField, IProduct } from "../interfaces/Iproduct";

export const dummyProducts: IProduct[] = [
    {
        id: uuid(),
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation.',
        imageUrl: 'https://placehold.co/300x200?text=Headphones',
        price: 99.99,
        stockStatus: 'In Stock',
        colors: ['Black', 'White', 'Blue'],
        category: { name: 'Electronics', imageUrl: 'https://placehold.co/100x100?text=Electronics' }
    },
    {
        id: uuid(),
        name: 'Running Shoes',
        description: 'Lightweight running shoes for all terrains.',
        imageUrl: 'https://placehold.co/300x200?text=Shoes',
        price: 79.99,
        stockStatus: 'Out of Stock',
        colors: ['Red', 'Black'],
        category: { name: 'Footwear', imageUrl: 'https://placehold.co/100x100?text=Footwear' }
    },
    {
        id: uuid(),
        name: 'Smart Watch',
        description: 'Stay connected and monitor your fitness with this smart watch.',
        imageUrl: 'https://placehold.co/300x200?text=Smart+Watch',
        price: 149.99,
        stockStatus: 'In Stock',
        colors: ['Silver', 'Black'],
        category: { name: 'Wearables', imageUrl: 'https://placehold.co/100x100?text=Wearables' }
    },
    {
        id: uuid(),
        name: 'Gaming Mouse',
        description: 'Ergonomic mouse with RGB lighting for pro gamers.',
        imageUrl: 'https://placehold.co/300x200?text=Gaming+Mouse',
        price: 49.99,
        stockStatus: 'In Stock',
        colors: ['Black', 'Gray'],
        category: { name: 'Accessories', imageUrl: 'https://placehold.co/100x100?text=Accessories' }
    },
    {
        id: uuid(),
        name: 'Eco Water Bottle',
        description: 'Reusable stainless steel water bottle.',
        imageUrl: 'https://placehold.co/300x200?text=Water+Bottle',
        price: 25.0,
        stockStatus: 'In Stock',
        colors: ['Green', 'Blue', 'Black'],
        category: { name: 'Lifestyle', imageUrl: 'https://placehold.co/100x100?text=Lifestyle' }
    },
    {
        id: uuid(),
        name: 'Eco Water Bottle',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://placehold.co/400x400?text=Water+Bottle',
        price: 25000.0,
        stockStatus: 'In Stock',
        colors: ['Green', 'Blue', 'Black' , "Red" , "Yellow", "Pink", "Purple", "Orange", "Gray", "White" , "Brown", "Cyan", "Magenta", "Lime", "Teal", "Navy", "Olive", "Maroon", "Silver", "Gold"],
        category: { name: 'Lifestyle', imageUrl: 'https://placehold.co/100x100?text=Lifestyle' }
    }
];

export const inputFieldList: IinputField[] = [
    {
        id: "title",
        name: "title",
        type: "text",
        label: "Title",
    },
    {
        id: "description",
        name: "description",
        type: "text",
        label: "Description",
    },
    {
        id: "imageUrl",
        name: "imageUrl",
        type: "text",
        label: "Image URL",
    },
    {
        id: "price",
        name: "price",
        type: "string",
        label: "Price",
    },
    

]