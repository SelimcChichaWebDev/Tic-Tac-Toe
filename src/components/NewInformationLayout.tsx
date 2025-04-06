import { Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import {
	InformationLayoutCommonProps,
	InformationLayoutMappedProps,
} from '../common/types/components/components.interface'
import { RootState } from '../common/types/store/store'
import {
	isDrawHandler,
	isGameEndedHandler,
	isStatusPlayerWalkHandler,
} from '../store/actions/actionCreater'

class InformationLayout extends Component<InformationLayoutCommonProps> {
	componentDidUpdate(): void {
		const { isGameEnded, isDraw, currentPlayer, dispatch } = this.props

		if (isDraw) {
			dispatch(isDrawHandler())
		} else if (isGameEnded) {
			dispatch(isGameEndedHandler(currentPlayer))
		} else {
			dispatch(isStatusPlayerWalkHandler(currentPlayer))
		}
	}

	render(): ReactNode {
		const { status } = this.props

		return (
			<div className='info__layout'>
				<h1>{status}</h1>
			</div>
		)
	}
}

const mapStateToProps = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	status,
}: RootState): InformationLayoutMappedProps => ({
	isDraw,
	isGameEnded,
	currentPlayer,
	status,
})

export default connect(mapStateToProps)(InformationLayout)
