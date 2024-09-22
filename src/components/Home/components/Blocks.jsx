import React from "react";
import style from "../../../styles/Blocks.module.scss";
import { Blocks } from "./config";



export default function Block() {
	return (
		<div className={style.blocks}  >
							<div className={style.point}>
		<div className={style.bool}></div>
	</div>
			<div className={style.title}>Услуги</div>
			<div className={style.container}>
				{Blocks.map((el) => (
					<div className={style.block}>
						<div className={style.text}>{el.title}</div>
						
						<div className={style.link}>Подробнее</div>
					</div>
				))}
			</div>
		</div>
	);
}
