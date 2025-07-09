interface Iprops extends React.HTMLAttributes<HTMLButtonElement> {
    classname: string;
    btntext: string;
    children?: React.ReactNode;
}

export default function ButtonComp(props: Iprops) {
    const { classname, btntext, children , ...rest} = props;
    return (
        <button className={`text-white px-4 py-2 rounded transition-colors duration-300 w-full cursor-pointer ${classname}`} {...rest}>
            {btntext}
            {children}
        </button>
    )
}
