import { useEffect, useState } from "react";
import style from "../../../styles/Contacts.module.scss";
import { ReviewsArray } from "./config";

export default function Contacts() {
	const width = window.innerWidth;
	const [List, SetList] = useState(false);

	useEffect(() => {

		if (width >= 1000) {
			SetList(true);
		}
	});

	useEffect(() => {
		if (List) {
			document.querySelectorAll("." + style.title)[0].classList.add(style.open);
			document.querySelectorAll("." + style.container)[0].classList.add(style.open);

		} else {
			document.querySelectorAll("." + style.title)[0].classList.remove(style.open);
			document.querySelectorAll("." + style.container)[0].classList.remove(style.open);

		}
	}, [List]);
	return (
		<div className={style.contacts}>
			<div className={style.container}>
				<div
					className={style.title}
					onClick={() => {
						SetList(!List);
					}}
				>
					Контакты <img src={    require("../../../images/arrowDark.svg").default} alt="" />
				</div>

				<div className={style.block}>
					<div className={style.title}>Офис</div>
					<div className={style.phone}>телефон</div>
					<div className={style.adress}>адрес</div>
				</div>
				<div className={style.block}>
					<div className={style.title}>Офис</div>
					<div className={style.phone}>телефон</div>
					<div className={style.adress}>адрес</div>
				</div>
			</div>
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ac92d321ec751d81b6a2d3a2b4b97e721394d74229fa25d6c9f30eeedbbb8d2&amp;source=constructor"
				width="500"
				height="400"
				frameborder="0"
			></iframe>
		</div>
	);
}
