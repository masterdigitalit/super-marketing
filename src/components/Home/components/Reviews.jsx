import {useEffect} from 'react'
import style from "./components.module.scss";
import { ReviewsArray } from "./config";


export default function Reviews() {
	useEffect(() => {
		
		
		const dom = document.querySelectorAll('.' + style.item)
		dom[0].classList.add(style.active)

		setTimeout(()=>{
			dom[0].classList.remove(style.active)
			dom[1].classList.add(style.active)
			dom[0].classList.add(style.passive)

		}, 5000)

	}, []);
	return (
		<div className={style.reviews}>
			{
				ReviewsArray.map((el)=>(
				<div className={style.item}>
					{el.title}
					<img src={require('../../../'+ el.img)} alt="" />
					</div>
				))
			}
		</div>
	)
}
