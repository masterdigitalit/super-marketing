import { useEffect } from "react";
import $ from "jquery";
import React from "react";
import style from "../../../styles/blog.module.scss";

export default function Blog() {
	useEffect(() => {
		$(window).scroll(function () {
			
		
			for (let i = 0; i < document.querySelectorAll("." + style.block).length; i++) {
				if (checkVisible(document.querySelectorAll("." + style.block)[i])) {
					document.querySelectorAll("." + style.block)[i].classList.add(style.active);
				}

				// !  если хотите назад затемнять элементы , включите код снизу
				// else{
				// 	document.querySelectorAll("." + style.block)[i].classList.remove(style.active);
				// }
				
			}
		});
	}, []);

	function checkVisible(elm) {
		var rect = elm.getBoundingClientRect();
		var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

		if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
			elm.classList.add("active");
		}
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

	return (
	<div className={style.blog} >
		<div className={style.title}>Преимущества на глаза</div>
	
		<div className={style.Container}>
				
			<div className={style.block}>
				<img src={require("../../../images/work/1.jpg")} alt="фото" />
				<div className={style.text}>Весь функционал в телеграмме</div>
			</div>
			<div className={style.block}>
				<img src={require("../../../images/work/2.jpg")} alt="фото" />
				<div className={style.text}>Легко отслеживать статистику за каждым продавцом</div>
			</div>
			<div className={style.block}>
				<img src={require("../../../images/work/3.jpg")} alt="фото" />
				<div className={style.text}>бла бла бла не придумал</div>
			</div>

		</div>
		</div>
	);
}
