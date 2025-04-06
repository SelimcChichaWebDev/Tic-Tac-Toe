import { InitialStateStore } from '../types/store/store'

export const initialState: InitialStateStore = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	status: '',
	isGameEnded: false,
	isDraw: false,
}
