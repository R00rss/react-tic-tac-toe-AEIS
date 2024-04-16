const POSITIONS_TO_WIN = [
    [0, 1, 2],//horizontal
    [3, 4, 5],//horizontal
    [6, 7, 8],//horizontal
    [0, 3, 6],//vertical
    [1, 4, 7],//vertical
    [2, 5, 8],//vertical
    [0, 4, 8],//diag
    [2, 4, 6],//diag
]

/**
funcion para calcular el ganador del juego
@param {Array} squares
*/
export function calculateWinner(squares) {
    for (let i = 0; i < POSITIONS_TO_WIN.length; i++) {
        const [pos1, pos2, pos3] = POSITIONS_TO_WIN[i];
        if (
            squares[pos1] &&
            squares[pos1] === squares[pos2] &&
            squares[pos2] === squares[pos3]
        )
            return squares[pos1]
    }
    // POSITIONS_TO_WIN.forEach(
    //     (pos) => {
    //         const [pos1, pos2, pos3] = pos;

    //         if (
    //             squares[pos1] &&
    //             squares[pos1] === squares[pos2] &&
    //             squares[pos2] === squares[pos3]
    //         )
    //             return squares[pos1] este return no hace earlyreturn
    //          
    //     }
    // )
    return null
}