import Circle from "../Icons/Circle";
import Cross from "../Icons/Cross";

const DEFAULT_WIDTH = "100%"; //constant
const DEFAULT_HEIGH = "100%";
const DEFAULT_COLOR = "#ffffff";


// JSDOCS
/**
 * @param {Object} props
 * @param {Function} props.onSquareClick
 * @param {String} props.value
 * Value can be "X", "O" or null
 */
export default function Square({ onSquareClick, value }) {
    let icon = <></>
    if (value === "X") icon = <Cross width={DEFAULT_WIDTH} height={DEFAULT_HEIGH} color={DEFAULT_COLOR} />
    else if (value === "O") icon = <Circle width={DEFAULT_WIDTH} height={DEFAULT_HEIGH} color={DEFAULT_COLOR} />

    return (
        <button
            onClick={onSquareClick}
            className="w-12 h-12 bg-slate-500/60 shadow-[2px_2px_10px_-4px] rounded-md hover:scale-110 duration-300"
        >
            {icon}
        </button>
    )
}