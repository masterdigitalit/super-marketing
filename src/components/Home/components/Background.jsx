import React from 'react'
import style from '../../../styles/Background.module.scss'
export default function Background() {
	const width = window.innerWidth
	const height = window.innerHeight
	const length = Math.ceil(((width / ((width / 10) - 10) ) * (height / ((height / 10) - 10) )))
	Array(length).fill('1').map((el)=>{
		console.log(1)
	}

	)

	
	return (
		<div className={style.Background}>
		{Array(length).fill('').map((el)=>{
return <div className={style.item}>{el}</div>
		})}
			<div className=""></div>
		</div>
	)
}
