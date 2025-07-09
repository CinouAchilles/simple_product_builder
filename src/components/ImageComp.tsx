interface Iprops {
    imageUrl: string;
    altText: string;
    classname?: string;
}

export default function ImageComp(props: Iprops) {
    const { imageUrl, altText } = props;
    return (
        <img
            src={imageUrl}
            alt={altText}
            className={props.classname ? props.classname : ""}
        />
    )
}   
