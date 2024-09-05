

const SquareBox = () => {
    return (
        <div className="relative flex flex-col gap-1 p-2 h-full">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-1">
                    {[...Array(2)].map((_, j) => (
                        <div key={j} className="w-2 h-2 bg-neutral-600 rounded-sm" />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SquareBox;
