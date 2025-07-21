import type { InputHTMLAttributes } from "react";

export default function InputForm(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            {...props}
        />
    );
}