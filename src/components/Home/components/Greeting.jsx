import React from "react";
import style from "../../../styles/Greeting.module.scss";

export default function Greeting() {
	return (
		<div className={style.greeting}>
			<div className={style["container-1"]}>
				<div className={style.icon}><img src={require('../../../images/person.png')} alt="" /></div>
				<div className={style.circle}>Обсудить проект</div>
				<div className={style.block}>
					<div className={style.title}>Глобальная ИТ‑компания</div>
					<div className={style.text}>
					Аутсорс‑команда с экспертизой и ресурсами для реализации вашего проекта</div>
				</div>
			</div>
			<div className={style["container-2"]}>
				<img src={require('../../../images/greetings-icon.png')} alt="" />
			</div>
		</div>
	);
}
