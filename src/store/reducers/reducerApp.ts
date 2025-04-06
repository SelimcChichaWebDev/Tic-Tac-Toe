import { ActionRoot } from '../../common/types/store/actions/actionRoot'
import { InitialStateStore } from '../../common/types/store/store'
import { initialState } from '../../common/utils/initial'
import { ActionType } from '../actions/actions'

export const reducerApp = (
	state = initialState,
	action: ActionRoot
): InitialStateStore => {
	const { type, payload } = action

	switch (type) {
		case ActionType.GAME_ENDED:
			if (
				!payload ||
				typeof payload.index !== 'number' ||
				!Array.isArray(payload.field)
			) {
				throw new Error('Invalid payload for GAME_ENDED action.')
			}

			return {
				...state,
				field: payload.field.map((prevItem, i) =>
					i === payload.index ? state.currentPlayer : prevItem
				),
			}

		case ActionType.WINNER:
			if (!payload || typeof payload.isGameEnded !== 'boolean') {
				throw new Error('Invalid payload for Winner action.')
			}

			return { ...state, isGameEnded: true }

		case ActionType.GAME_FINISH:
			if (
				!payload ||
				(typeof payload.isDraw !== 'boolean' &&
					typeof payload.isGameEnded !== 'boolean')
			) {
				throw new Error('Invalid payload for Game Finish action.')
			}

			return {
				...state,
				isDraw: !!payload.isDraw,
				isGameEnded: !!payload.isGameEnded,
			}

		case ActionType.NEXT_PLAYER:
			if (!payload || typeof payload.currentPlayer !== 'string') {
				throw new Error('Invalid payload for Next Player action.')
			}
			return {
				...state,
				currentPlayer: payload.currentPlayer === 'X' ? '0' : 'X',
			}

		case ActionType.STATUS_DRAW:
		case ActionType.STATUS_VICTORY:
		case ActionType.STATUS:
			return { ...state, status: payload }

		case ActionType.RESTART:
			return {
				field: initialState.field,
				currentPlayer: initialState.currentPlayer,
				isDraw: initialState.isDraw,
				isGameEnded: initialState.isGameEnded,
				status: initialState.status,
			}

		default:
			return state
	}
}
