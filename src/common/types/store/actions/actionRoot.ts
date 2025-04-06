import {
	ActionCheckWin,
	ActionGameEnded,
	ActionGameFinish,
	ActionNextPlayer,
	ActionRestartGame,
} from './actionApp'

import {
	ActionStatusDraw,
	ActionStatusVictory,
	ActionStatusWalks,
} from './actionStatus'

export type ActionAppRoot =
	| ActionGameEnded
	| ActionCheckWin
	| ActionGameFinish
	| ActionNextPlayer
	| ActionRestartGame

export type ActionStatusRoot =
	| ActionStatusWalks
	| ActionStatusDraw
	| ActionStatusVictory

export type ActionRoot = ActionAppRoot | ActionStatusRoot
