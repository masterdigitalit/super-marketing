import React from "react";
import style from "./components.module.scss";

export default function Advantage() {
	return (
		<div className={style.advantages}>
			<div className={style.title}>Наши плюсы</div>
			<div className={style.title}>
				<h3>Наш сервис полностью сохраняет функционал телеграма</h3>
			</div>
			<div className={style.list}>
				<div className={style.item}>
					<div className={style.title}>Возможность использовать голосовые</div>

					<div className={style.background}>
						{" "}
						<img src={require("../../../images/blob.svg").default} alt="" />
					</div>
					<div className={style.example}>
						<img src={require("../../../images/voice.svg").default} alt="" />
					</div>
				</div>
				<div className={style.item}>
					<div className={style.title}>Возможность использовать кружочки</div>

					<div className={style.background}>
						{" "}
						<img src={require("../../../images/blob (1).svg").default} alt="" />
					</div>
					<div className={style.example}>
						<img src={require("../../../images/video.svg").default} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
