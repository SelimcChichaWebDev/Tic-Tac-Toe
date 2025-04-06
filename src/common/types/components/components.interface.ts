import { Dispatch } from 'redux'
import { ActionRoot } from '../store/actions/actionRoot'
import { InitialStateStore } from '../store/store'

export interface GameStateMappedProps {
	isDraw: boolean
	isGameEnded: boolean
	currentPlayer: string
}

export interface GameDispatchProps {
	dispatch: Dispatch<ActionRoot>
}

export interface GameDispatchProps {
	isDrawHandler?: () => void
	isGameEndedHandler?: (currentPlayer: string) => void
	isStatusPlayerWalkHandler?: (currentPlayer: string) => void
}

export type GameStateProps = GameStateMappedProps & GameDispatchProps

// Status
interface InformationLayoutProps {
	status: string
}

export type InformationLayoutCommonProps = GameStateProps &
	InformationLayoutProps

export interface InformationLayoutMappedProps extends GameStateMappedProps {
	status: string
}

// Restart

export interface RestartGameHandlerProps {
	restartHandler?: ({
		field,
		currentPlayer,
		isDraw,
		isGameEnded,
		status,
	}: InitialStateStore) => void
}

export type RestartStateProps = InitialStateStore &
	RestartGameHandlerProps &
	GameDispatchProps

// FiledLayout

export interface FiledLayoutStateProps {
	isGameEnded: boolean
	isDraw: boolean
	currentPlayer: string
	field: string[]
}

export type FiledLayoutProps = FiledLayoutStateProps & GameDispatchProps
