export enum ActionType {
	GAME_ENDED = 'IS_GAME_ENDED',
	WINNER = 'CHECK_WIN',
	GAME_FINISH = 'GAME_FINISH',
	NEXT_PLAYER = 'NEXT_PLAYER',
	RESTART = 'RESTART',
	STATUS = 'STATUS_WALKS',
	STATUS_DRAW = 'STATUS_DRAW',
	STATUS_VICTORY = 'STATUS_VICTORY',
}

export enum ActionStatusInfo {
	DRAW = 'Draw',
	VICTORY = 'Victory:',
	WALK = 'Walk:',
}
