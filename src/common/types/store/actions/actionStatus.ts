import { ActionType } from '../../../../store/actions/actions'

interface ActionStatus<T extends ActionType> {
	type: T
	payload: string
}

export type ActionStatusWalks = ActionStatus<ActionType.STATUS>

export type ActionStatusDraw = ActionStatus<ActionType.STATUS_DRAW>

export type ActionStatusVictory = ActionStatus<ActionType.STATUS_VICTORY>
