import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/widgets/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/widgets/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Article from "./components/Articles/Article";

function App() {
	var link = document.createElement('meta');
  link.setAttribute('property', 'og:url');
  link.content = document.location;
  document.getElementsByTagName('head')[0].appendChild(link);
	


	
	document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fffff");
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/article/:id" element={<Article />}></Route>
			</Routes> 
			<Footer />
		</>
	);
}

export default App;
