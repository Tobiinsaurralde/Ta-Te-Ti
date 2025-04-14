export const saveGameToStorage = ( {board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
   windows.localStorage.removeItem('board')
   windows.localStorage.removeItem('turn')
}