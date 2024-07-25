import React from "react";
import style from "../../../styles/About.module.scss";
import { About } from "./config";

export default function AboutPage() {
	return (
		<div className={style.about} >
				<div className={style.point}>
		<div className={style.bool}></div>
	</div>
			<div className={style.title}>О компании</div>
			<div className={style.conteiner}>

				<img src={   require("../../../images/about.svg").default} alt="" />  
				<div className={style.text}>
					<p>
						
					</p>
					<p></p>
				</div>
			</div>
			<div className={style.blocksItems}>
				{About.map((el) => (
					<div className={style.block}>
						<div className={style.value}>{el.value}</div>
						<div className={style.text}> {el.text}</div>
						{/* <div className={style.arrow}><img src={require('../../../images/arrow.svg').default} alt="" /></div> */}
					</div>
				))}
			</div>
		</div>
	);
}
