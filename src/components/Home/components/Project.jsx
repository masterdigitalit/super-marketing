import React from "react";
import style from "../../../styles/Projects.module.scss";
import { Projects } from "./config";

export default function Project() {
	return (
		<div className={style.projects}>
			<div className={style.title}>Проекты</div>
			<div className={style.container}>
			{Projects.map((el) => (
				<div className={style.project}>
					<div className={style.reaction}>
						<img src={require("../../../" + el.reaction)} alt="" />
					</div>
					<div className={style.icon}>
						<img src={require("../../../" + el.icon)} alt="" />
					</div>
					<div className={style.info}>
						<div className={style.title}>{el.title}</div>
						<div className={style.link}>Подробнее</div>
					</div>
				</div>
			))}
			</div>
		</div>
	);
}
