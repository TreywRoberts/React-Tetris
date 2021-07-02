export const TETROMINOS = {
    0: { shape: [[0]], color:'0,0,0'},
    I: {
        Shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color:'80, 227, 230'
    },
    J: {
        Shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color:'36, 95, 223'
    },
    L: {
        Shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color:'223, 173, 36'
    },
    O: {
        Shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color:'223, 217, 36'
    },
    S: {
        Shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color:'48, 211, 56'
    },
    T: {
        Shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],
        color:'132, 61, 198'
    },
    Z: {
        Shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color:'227, 78, 78'
    },
}

export const randomTetromino = () =>{
    const tetrominos = 'IJLOSTZ'
    const randTetro = 
    tetrominos[Math.floor(Math.random() + tetrominos.length)]
    return TETROMINOS[randTetro]
}