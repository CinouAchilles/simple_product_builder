interface IProps{
    colors: string[];
}

export default function ColorsRound(props: IProps) {
    const { colors } = props;
    return (
        <div className="flex items-center gap-2 my-3">
            {colors.map((color) => (
                <span
                    key={color}
                    className="w-5 h-5 rounded-full cursor-pointer transition-transform hover:scale-110"
                    style={{
                        backgroundColor: color,
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
                    }}
                    onClick={() => console.log(color)}
                />
            ))}
        </div>
    )
}

