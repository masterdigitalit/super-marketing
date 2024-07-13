import {useEffect} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import style from "./article.module.scss";


export default function Article() {
	useEffect(() => {
		
		window.scrollTo(0, 0)
	}, []);

  const history = useNavigate();

	var link = document.createElement('meta');
  link.setAttribute('property', 'og:title');
  link.content = 'super marketing. crm it ит super marketing. crm it ит super marketing. crm it ит super marketing. crm it ит ';
  document.getElementsByTagName('head')[0].appendChild(link);


	const { id } = useParams();


	return (
		<div className={style.article}>
			<div className={style.arrow}><img src={require('../../images/arrow.svg').default} alt="" srcset="" onClick={()=>{history(-1)}} /></div>
			<div className={style.header}>
			{/* <div className={style.title}><h1>В разработке</h1></div> */}
				<div className={style.icon}>
					<img src={require("../../images/seo1.png")} alt="" />
				</div>
				
				<div className={style.title}>высококлассных ИТ-⁠специалистов</div>
			</div>
			<div className={style.description}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
			<div className={style.alike}>
			<Link to={'/article/1'} > 
				<div className={style.block}>
					<div className={style.card}>
						<div className={style.image}>
							<img src={require("../../images/seo.png" )} alt="" />
						</div>
						<div className={style.text}>
							<div className={style.date}>{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short', timeStyle:'short'} ).format(Date.now()) }</div>
							<div className={style.title}> высококлассных ИТ-⁠специалистов</div>
							<div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</div>
						</div>
					</div>
					<div className={style.link}>Подробнее</div>
					</div>
					</Link>
					<Link to={'/article/1'} > 
				<div className={style.block}>
					<div className={style.card}>
						<div className={style.image}>
							<img src={require("../../images/seo.png" )} alt="" />
						</div>
						<div className={style.text}>
							<div className={style.date}>{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short', timeStyle:'short'} ).format(Date.now()) }</div>
							<div className={style.title}> высококлассных ИТ-⁠специалистов</div>
							<div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</div>
						</div>
					</div>
					<div className={style.link}>Подробнее</div>
					</div>
					</Link>
			</div>
		</div>
	);
}
