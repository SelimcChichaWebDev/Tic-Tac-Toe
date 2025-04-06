import { ActionType } from '../../../../store/actions/actions'

export interface ActionGameEnded {
	type: typeof ActionType.GAME_ENDED
	payload: {
		field: string[]
		index: number
		currentPlayer: string
	}
}

export interface ActionCheckWin {
	type: typeof ActionType.WINNER
	payload: { isGameEnded: boolean }
}

export interface ActionGameFinish {
	type: typeof ActionType.GAME_FINISH
	payload: {
		isGameEnded: boolean
		isDraw: boolean
	}
}

export interface ActionNextPlayer {
	type: typeof ActionType.NEXT_PLAYER
	payload: { currentPlayer: string | boolean }
}

export interface ActionRestartGame {
	type: typeof ActionType.RESTART
	payload: {
		field: string[]
		currentPlayer: string
		isDraw: boolean
		isGameEnded: boolean
		status: string
	}
}
