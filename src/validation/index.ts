interface IValidationInput {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
}

export const validateInput = (data: IValidationInput) => {
    const errors: Partial<IValidationInput> = {};

    // Name: only letters, numbers, spaces, and basic punctuation
    const nameRegex = /^[\w\s.,'-]{5,50}$/;
    if (!data.name.trim()) {
        errors.name = "Name is required";
    } else if (data.name.trim().length < 5 || data.name.trim().length > 50) {
        errors.name = "Name must be 5-50 characters long";
    } else if (!nameRegex.test(data.name.trim())) {
        errors.name = "Name contains invalid characters";
    }

    // Description: allow most printable characters, min 10, max 500
    const descriptionRegex = /^[\s\S]{10,500}$/;
    if (!data.description.trim()) {
        errors.description = "Description is required";
    } else if (data.description.trim().length < 10 || data.description.trim().length > 500) {
        errors.description = "Description must be 10-500 characters long";
    } else if (!descriptionRegex.test(data.description.trim())) {
        errors.description = "Description contains invalid characters";
    }

    // Image URL: must be a valid URL (basic check)
    const urlRegex = /^(https?|ftp):\/\/[^\s]+$/i;
    if (!data.imageUrl.trim()) {
        errors.imageUrl = "Image URL is required";
    } else if (!urlRegex.test(data.imageUrl.trim())) {
        errors.imageUrl = "Image URL must be valid";
    }

    // Price: must be a positive number (integer or decimal)
    const priceRegex = /^(?:[1-9]\d*|0)?(?:\.\d{1,2})?$/;
    if (!data.price.toString().trim()) {
        errors.price = "Price is required";
    } else if (isNaN(Number(data.price)) || Number(data.price) <= 0) {
        errors.price = "Price must be a positive number";
    } else if (!priceRegex.test(data.price.toString().trim())) {
        errors.price = "Price format is invalid";
    }

    return errors;
};