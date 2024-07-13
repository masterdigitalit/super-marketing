import React from "react";
import style from "./footer.module.scss";
import { links } from "./config";

export default function Footer() {
	return (
		<footer>
			<div className={style["line-1"]}>
				<div className={style.logo}>
					<img src={require("../../../images/logo.svg").default} alt="" />
				</div>
				{/* <div className={style["partners-logo"]}>
					<img src={require("../../../images/partners-logo.svg").default} alt="" />
				</div> */}
			</div>
			<hr />
			<div className={style["line-2"]}>
				<nav>
					{links.map((el) => (
						<div className={style.link}>{el.title}</div>
					))}
				</nav>
				<div className={style["social-media"]}>
					<div className={style.items}>
						<a href="https://t.me/" target="_blank" rel="noreferrer">
							<img src={require("../../../images/Telegram.svg").default} alt="" />
						</a>
						<a href="https://vk.com/" target="_blank"   rel="noreferrer">
							<img src={require("../../../images/svgexport-10.svg").default} alt="" />
						</a>
						<a href="https://www.youtube.com/" target="_blank"  rel="noreferrer">
							<img src={require("../../../images/youtube-color-svgrepo-com (1).svg").default} alt="" />
						</a>
					</div>
				</div>
			</div>
			<hr />
			<div className={style['line-3']}>
				{["© ООО «SM Super Marketing», 2024", "Согласие на обработку персональных данных"].map((el) => (
					<div className={style.document}>{el}</div>
				))}
			</div>
		</footer>
	);
}
