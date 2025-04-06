import { ActionRoot } from '../../common/types/store/actions/actionRoot'
import { InitialStateStore } from '../../common/types/store/store'
import { ActionStatusInfo, ActionType } from './actions'

// Action Status Game
export const isDrawHandler = (): ActionRoot => ({
	type: ActionType.STATUS_DRAW,
	payload: ActionStatusInfo.DRAW,
})

export const isGameEndedHandler = (currentPlayer: string): ActionRoot => ({
	type: ActionType.STATUS_VICTORY,
	payload: `${ActionStatusInfo.VICTORY} ${currentPlayer}`,
})

export const isStatusPlayerWalkHandler = (
	currentPlayer: string
): ActionRoot => ({
	type: ActionType.STATUS,
	payload: `${ActionStatusInfo.WALK} ${currentPlayer}`,
})

// Restart ===================

export const restartHandler = (state: InitialStateStore): ActionRoot => ({
	type: ActionType.RESTART,
	payload: state,
})

// FieldLayout

export const gameEndedHandler = (
	field: string[],
	index: number,
	currentPlayer: string
): ActionRoot => ({
	type: ActionType.GAME_ENDED,
	payload: { field, index, currentPlayer },
})

export const winnerHandler = (isGameEnded: boolean): ActionRoot => ({
	type: ActionType.WINNER,
	payload: { isGameEnded },
})

export const gameFinish = (
	isDraw: boolean,
	isGameEnded: boolean
): ActionRoot => ({
	type: ActionType.GAME_FINISH,
	payload: { isDraw, isGameEnded },
})

export const nextPlayerHandler = (currentPlayer: string): ActionRoot => ({
	type: ActionType.NEXT_PLAYER,
	payload: { currentPlayer },
})
