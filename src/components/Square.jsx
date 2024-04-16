import Circle from "../Icons/Circle";
import Cross from "../Icons/Cross";

const DEFAULT_WIDTH = "100%"; //constant
const DEFAULT_HEIGH = "100%";
const DEFAULT_COLOR = "#ffffff";

export default function Square({ onSquareClick }) {
    return (
        <button
            onClick={onSquareClick}
            className="w-12 h-12 border border-blue-500"
        >
            <Cross width={DEFAULT_WIDTH} height={DEFAULT_HEIGH} color={DEFAULT_COLOR} />
            {/* <Circle width={DEFAULT_WIDTH} height={DEFAULT_HEIGH} color={DEFAULT_COLOR} /> */}
        </button>
    )
}