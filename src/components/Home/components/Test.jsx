import {useEffect} from 'react'
import style from './components.module.scss'
export default function Test() {
	useEffect(() => {
		
		const dom = 	document.querySelectorAll('.'+ style.mini_card)
	
async function show(){


		for(let i = 0; i < dom.length; i++){
			 await new Promise(resolve => setTimeout(resolve, 50));
			 dom[i].classList.add(style.active)
	
		}
	}
	show()
	
	}, []);

	return (
		<div className={style.test}>
			<div className={style.card}>
				jfjfjjfjf
				<div className={style['pre-card']}>
				
					{new Array(50).fill('.').map((el)=>{
	 						return <div className={style.mini_card}></div>
					})}
				</div>
			</div>
			<div class={style.container}>
			<div class={style["typed-out"]}>Web Developer</div></div>
		
		</div>
	)
}
