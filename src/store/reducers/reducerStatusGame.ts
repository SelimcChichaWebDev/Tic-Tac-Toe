import { ActionRoot } from '../../common/types/store/actions/actionRoot'
import { InitialStateStatusType } from '../../common/types/store/store'
import { InitialStateStatus } from '../../common/utils/initial'
import { ActionType } from '../actions/actions'

export const reducerStatusGame = (
	state = InitialStateStatus,
	action: ActionRoot
): InitialStateStatusType => {
	const { type, payload } = action

	switch (type) {
		case ActionType.STATUS_DRAW:
		case ActionType.STATUS_VICTORY:
		case ActionType.STATUS:
			return { ...state, status: payload }
		default:
			return state
	}
}
