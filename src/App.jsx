import "./App.scss";
import Header from "./components/widgets/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/widgets/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Articles/Article";
import Test from "./components/Home/components/Test";

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
				<Route path="/test" element={<Test />}></Route>
			</Routes> 
			<Footer />
		</>
	);
}

export default App;
