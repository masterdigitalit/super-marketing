import React from "react";
import style from "../../../styles/News.module.scss";
import { InfoArr } from "./config";
import { Link } from "react-router-dom";


export default function News() {
	return (
		<div className={style.news}>
				<div className={style.title}>Новости</div>
		<div className={style.info}>
	
			{InfoArr.map((el) => (
				<Link to={'/article/1'} > 
				<div className={style.block}>
					<div className={style.card}>
						<div className={style.image}>
							<img src={require("../../../" + el.image)} alt="" />
						</div>
						<div className={style.text}>
							<div className={style.date}>{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short', timeStyle:'short'} ).format(Date.now()) }</div>
							<div className={style.title}>{el.title}</div>
							<div className={style.description}>{el.text}</div>
						</div>
					</div>
					<div className={style.link}>Подробнее</div>
					</div>
					</Link>
			))}
		</div>
		</div>
	);
}
