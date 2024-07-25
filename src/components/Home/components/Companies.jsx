import React from 'react'
import style from "../../../styles/Companies.module.scss";


export default function Companies() {
	return (
		<div className={style.companies}>
							<div className={style.point}>
		<div className={style.bool}></div>
	</div>
			<div className={style.title}>Компании партнеры</div>
			<div className={style.container}>
				{['svgexport-11.svg','svgexport-12.svg','svgexport-13.svg','svgexport-14.svg','svgexport-15.svg','svgexport-17.svg','svgexport-18.svg','svgexport-19.svg','svgexport-20.svg',].map((el)=>(
					<div className={style.item}><img src={require('../../../images/companies/'+ el)} alt="" /></div>
				))}
			</div>
		</div>
	)
}
