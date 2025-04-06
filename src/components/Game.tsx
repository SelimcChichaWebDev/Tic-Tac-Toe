// React + Types
import { Component, ReactNode } from 'react'
// Tools Style
import { motion } from 'framer-motion'
import FieldLayout from './FieldLayout'
import InformationLayout from './NewInformationLayout'
import Restart from './Restart'

class Game extends Component {
	render(): ReactNode {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 1, damping: 10 }}
				className='game__layout'
			>
				<InformationLayout />
				<FieldLayout />
				<Restart />
			</motion.div>
		)
	}
}

export default Game
