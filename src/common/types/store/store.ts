import { store } from '../../../store/store'

export type InitialStateStore = {
	field: string[]
	currentPlayer: string
	status: string
	isGameEnded: boolean
	isDraw: boolean
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
