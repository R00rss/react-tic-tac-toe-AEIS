import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../functions/ManageGame";

const DEFAULT_SQUARES = Array(9).fill(null);
// const DEFAULT_SQUARES = [null,null,...null]

export default function Board() {
    const [isXTurn, setIsXTurn] = useState(false)
    const [squares, setSquares] = useState(DEFAULT_SQUARES);
    console.log({ squares })

    //winner se va a ir actualizando en cada render
    const winner = calculateWinner(squares)
    console.log(winner)

    function handleClick(position) {
        console.log("Square clicked")
        console.log("Square Number: ", position)

        //null, "X", "O"
        if (winner) {
            alert("Ya existe un ganador")
            return
        }
        // aqui se valida si la posicion ya esta ocupada o tiene contenido
        if (squares[position]) {
            alert(`Esta posición ya esta ocupada por ${squares[position]}`)
            return //early return
        }
        // Si el dato del estado es un array: [] o un objecto: {}
        // es mejor crear un clon de la variable
        const cloneSquares = squares.slice()

        // if (isXTurn) {
        //     cloneSquares[position] = "X"
        // } else {
        //     cloneSquares[position] = "O"
        // }

        //Usando operador ternario 
        cloneSquares[position] = isXTurn ? "X" : "O"

        setIsXTurn(prev => !prev)
        setSquares(cloneSquares)
        // [...squares]
    }
    return (
        <>
            {winner && <h1 className="text-center text-slate-200">Felicidades el ganador es: {winner}</h1>}
            <div className="flex flex-col justify-center items-center gap-1">
                <div className="flex flex-row justify-center items-center gap-1">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </>
    )
}