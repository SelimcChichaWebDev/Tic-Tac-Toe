import { Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import { RestartStateProps } from '../common/types/components/components.interface'
import { InitialStateStore, RootState } from '../common/types/store/store'
import { restartHandler } from '../store/actions/actionCreater'

class RestartGame extends Component<RestartStateProps> {
	gameRestart = () => {
		const { field, currentPlayer, isDraw, isGameEnded, status, dispatch } =
			this.props
		dispatch(
			restartHandler({
				field,
				currentPlayer,
				isDraw,
				isGameEnded,
				status,
			})
		)
	}

	render(): ReactNode {
		return (
			<button onClick={this.gameRestart} className='btn__new-game'>
				Start again
			</button>
		)
	}
}

const mapStateToProps = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	status,
}: RootState): InitialStateStore => ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	status,
})

export default connect(mapStateToProps)(RestartGame)
