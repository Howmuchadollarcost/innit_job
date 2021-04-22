import React from 'react'
import {Loading} from '../../components/';

export default function WelcomeScreen() {
	const [open, setOpen] = React.useState(true)

	React.useEffect(() => {
		setTimeout(() => { setOpen(true); }, 1700);
		setTimeout(() => { setOpen(false); }, 2000);
	}, [])

	return (
		<div
			style={{
				zIndex: 200,
				display: open ? 'flex' : 'none',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				background: '#0D0D0D',
				height: '100%'
			}}
		>
			<Loading name={"Innit Movie"} white={'white'}/>
		</div>
	)
}
