import { useEffect, useState } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
	const [bar, SetBar] = useState(false);
	const [scroll, SetScroll] = useState(0);

	window.addEventListener('scroll', scrollBar)
	function scrollBar(){

		let scroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = scroll / height ;

		SetScroll(scrolled)
	}
	
	useEffect(() => {
		if (bar) {
			document.querySelectorAll("." + style.bar)[0].classList.add(style.active);
			document.querySelectorAll("#burger")[0].classList.add(style.active);
			document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
		} else {
			document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
			document.querySelectorAll("." + style.bar)[0].classList.remove(style.active);
			document.querySelectorAll("#burger")[0].classList.remove(style.active);
		}
	}, [bar]);
	useEffect(() => {
		var scrollTimer = -1;
		var oldScrollY = 0;
		let div = document.getElementById("header");
		if (!bar && window.innerWidth < 541) {
		window.onscroll = function () {
			bodyScroll()
		

			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			var dY = scrolled - oldScrollY;
			if (window.pageYOffset <= 20) {
				document.getElementById("root").style.paddingTop = "50px";
				div.classList.remove(style.closed);
				div.classList.add(style.showed);
			} else {
				if (dY >= 0) {
					div.classList.remove(style.showed);
					div.classList.add(style.closed);
					document.getElementById("root").style.paddingTop = "0px";
				} else {
					document.getElementById("root").style.paddingTop = "50px";
					div.classList.remove(style.closed);
					div.classList.add(style.showed);
				}
			}

			oldScrollY = scrolled;
		};
	}


		function bodyScroll() {
			div.classList.remove(style.showed);
			div.classList.add(style.closed);
			document.getElementById("root").style.paddingTop = "0px";
	
			if (scrollTimer !== -1)
				clearTimeout(scrollTimer);
	
			scrollTimer = window.setTimeout(scrollFinished, 500);
		}
	
		function scrollFinished() {
			document.getElementById("root").style.paddingTop = "50px";
			div.classList.remove(style.closed);
			div.classList.add(style.showed);
		}
	}, []);


	return (
		<div className={style.header} id="header">
			<div className={style.bar}>
				<nav>
					<ul>
						<li
							onClick={(el) => {
								SetBar(!bar);
							}}
						>
							{" "}
							<Link to={"/#about"} onClick={() => {}}>
							<img src={require('../../../images/about-icon.svg').default} alt="" />
							<div className={style.title}>Про нас</div>
							</Link>
						</li>
						<li
							onClick={(el) => {
								SetBar(!bar);
							}}
						>
							{" "}
							<Link to={"/#services"}>  <img src={require('../../../images/gear.svg').default} alt="" /><div className={style.title}>Услуги</div></Link>
						</li>

						<li
							onClick={(el) => {
								SetBar(!bar);
							}}
						>
							<Link to={"/#blog"}>
							<img src={require('../../../images/star.svg').default} alt="" />
							<div className={style.title}> Блог</div></Link>
						</li>
						<li
							onClick={(el) => {
								SetBar(!bar);
							}}
						>
							<Link to={"/#contacts"}>
							<img src={require('../../../images/phone.svg').default} alt="" />		<div className={style.title}>Контакты</div> 
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={style.container}>
				<label className={style.burger} for="burger">
					<input
						type="checkbox"
						id="burger"
						defaultChecked={false}
						onClick={(el) => {
							SetBar(!bar);
						}}
					/>
					<span></span>
					<span></span>
					<span></span>
				</label>
				<div className={style.logo}>
					<Link to={"/"}>
						<img src={require("../../../images/logo.svg").default} alt="" />
					</Link>
				</div>
				<nav>
					<ul>
						<li>
							{" "}
							<Link
								to={"/#about"}
								onClick={() => {
									document.getElementById("about").scrollIntoView();
								}}
							>
								{" "}
								Про нас
							</Link>
						</li>
						<li>
							{" "}
							<Link
								to={"/#services"}
								onClick={() => {
									document.getElementById("services").scrollIntoView();
								}}
							>
								{" "}
								Услуги
							</Link>
						</li>

						<li>
							<Link
								to={"/#blog"}
								onClick={() => {
									document.getElementById("blog").scrollIntoView();
								}}
							>
								{" "}
								Блог
							</Link>
						</li>
						<li>
							<Link
								to={"/#contacts"}
								onClick={() => {
									document.getElementById("contacts").scrollIntoView();
								}}
							>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
				<div className={style.contact}>
					<div className={style.phone}>
						<a href="tel:+792xxxxxx93">
							{" "}
							<div className={style.icon}>
								<img src={require("../../../images/+7 (499) 677-60-40.svg").default} alt="" />
							</div>{" "}
							<div className={style.number}>+792xxxxxx93</div>
						</a>
					</div>
					<div className={style.telegram}>
						<a href="https://t.me/" target="_blank" rel="noreferrer">
							<img src={require("../../../images/Telegram.svg").default} alt="" />
						</a>
					</div>
					<div className={style["nav-btn"]}>
						<img src={require("../../../images/svgexport-9.svg").default} alt="" /> <div className={style.text}> связаться с нами</div>
					</div>
				</div>
			</div>
			<div className={style.scrollBar}>
			<div className={style.line} style={{'width': scroll * 100 + '%'}}></div>

			</div>
		</div>
	);
}
