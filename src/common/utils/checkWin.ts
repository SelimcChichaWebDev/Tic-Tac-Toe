import { WIN_PATTERNS } from '../utils/winPattern'

export const checkWin = (field: string[], currentPlayer: string) =>
	WIN_PATTERNS.some(winPattern =>
		winPattern.every(cellIndex => field[cellIndex] === currentPlayer)
	)
