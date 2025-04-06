import { Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import {
	FiledLayoutProps,
	FiledLayoutStateProps,
} from '../common/types/components/components.interface'
import { RootState } from '../common/types/store/store'
import { checkWin } from '../common/utils/checkWin'
import {
	gameEndedHandler,
	gameFinish,
	nextPlayerHandler,
	winnerHandler,
} from '../store/actions/actionCreater'

// StateLess
class FieldLayout extends Component<FiledLayoutProps> {
	clickPlayerHandle = (player: string, index: number) => {
		const { isGameEnded, isDraw, currentPlayer, field, dispatch } = this.props

		if (!isGameEnded && player === '') {
			dispatch(gameEndedHandler(field, index, currentPlayer))

			const updatedField = [...field]
			updatedField[index] = currentPlayer

			if (checkWin(updatedField, currentPlayer)) {
				dispatch(winnerHandler(isGameEnded))
			} else if (updatedField.every(cell => cell !== '')) {
				dispatch(gameFinish(isDraw, isGameEnded))
			} else {
				dispatch(nextPlayerHandler(currentPlayer))
			}
		}
	}
	render(): ReactNode {
		return (
			<div className='field__layout'>
				{this.props.field.map((item, index) => (
					<button
						onClick={() => this.clickPlayerHandle(item, index)}
						key={index}
					>
						<span>{item}</span>
					</button>
				))}
			</div>
		)
	}
}

const mapStateToProps = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
}: RootState): FiledLayoutStateProps => ({
	field,
	isGameEnded,
	isDraw,
	currentPlayer,
})

export default connect(mapStateToProps)(FieldLayout)
