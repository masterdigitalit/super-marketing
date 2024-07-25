import {useEffect} from "react";
import Block from "./components/Blocks";
import AboutPage from "./components/About";
import Contacts from "./components/Contacts";
import Companies from "./components/Companies";
import Greeting from "./components/Greeting";
import Blog from "./components/Blog";
import { useLocation } from 'react-router-dom'
import Select from "./components/Select";
import Video from "./components/Video";
import style from '../../styles/Home.module.scss'

export default function Home() {
	const location = useLocation()
	useEffect(() => {
		if(location.hash !== ''){
				document.getElementById(location.hash.slice(1)).scrollIntoView({
			behavior: "smooth",
		});
		}
	
	}, [location.hash]);

	useEffect(() => {
		
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
					e.preventDefault();
	
					document.querySelector(this.getAttribute('href')).scrollIntoView({
							behavior: 'smooth'
					});
			});
	});
	}, []);
	
	return (
		<>
		<div className={style.home}>
		<div className={style.components}>


		 <section><Greeting/></section>
		 <section>	<Companies/></section> 
	
				<section id="blog">	<Blog/></section> 
				
			<section  id="services">	<Block /></section>

			<section>	<Select/></section>
			<Video/>
		


			<section id="about">	<AboutPage /></section>
			
			<section id="contacts">	<Contacts/></section> 
			</div>
			<div className={style.line}></div>
			</div>
		</>
	);
}
		{/* <Advantage/> */}	
		{/* <Reviews/> */}	
		{/* <section>	<Project /></section> */}
