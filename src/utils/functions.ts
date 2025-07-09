export function formatTextSlicing(text: string , maxLength: number = 50 ){
    if (text.length <= maxLength){
        return text;
    }
    return text.slice(0, maxLength) + "...";
}
export function formatColorsSlicing(colors: string[], maxColors: number =4){
    if (colors.length <= maxColors){
        return colors;
    }
    // return [...colors.slice(0, maxColors), "..."];
    return colors.slice(0 , maxColors).concat("...");
}