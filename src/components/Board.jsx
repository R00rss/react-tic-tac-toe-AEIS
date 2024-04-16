import Square from "./Square";

export default function Board() {
    function handleClick(position) {
        console.log("Square clicked")
        console.log("Square Number: ", position)
    }
    return (
        <div className="border border-yellow-300 flex flex-col justify-center items-center">
            <div>
                <Square onSquareClick={() => handleClick(1)} />
                <Square onSquareClick={() => handleClick(2)} />
                <Square onSquareClick={() => handleClick(3)} />
            </div>
            <div>
                <Square onSquareClick={() => handleClick(4)} />
                <Square onSquareClick={() => handleClick(5)} />
                <Square onSquareClick={() => handleClick(6)} />
            </div>
            <div>
                <Square onSquareClick={() => handleClick(7)} />
                <Square onSquareClick={() => handleClick(8)} />
                <Square onSquareClick={() => handleClick(9)} />
            </div>
        </div>)
}