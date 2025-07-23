interface IProps {
    colors: string[];
    onColorClick?: (color: string) => void;
}

export default function ColorsRound(props: IProps) {
    const { colors, onColorClick } = props;
    return (
        <div className={`${colors.length === 0 ? "inline" : "flex items-center gap-2"} my-3`}>
            {colors && colors.map((color) => (
                <span
                    key={color}
                    className="w-5 h-5 rounded-full cursor-pointer transition-transform hover:scale-110"
                    style={{
                        backgroundColor: color,
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
                    }}
                    onClick={() => onColorClick?.(color)}
                />
            ))}
            {colors.length === 0 && (
                <span className="text-gray-500">No colors available</span>
            )}
        </div>
    )
}

