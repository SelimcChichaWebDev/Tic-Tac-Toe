import { FC } from 'react'
import { useAppSelector } from '../hooks/store/useApp'

// StateLess
export const InformationLayout: FC = () => {
	const status = useAppSelector(state => state.status.status)
	return (
		<div className='info__layout'>
			<h1>{status}</h1>
		</div>
	)
}
