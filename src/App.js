import HeaderSection from './components/header-section/HeaderSection';
import MainSection from './components/main-section/MainSection';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import './App.css';




function App() {
	// useEffect(() => {
	// 	fetch('https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=0d128bf4661a476f88c003d0589b245a')
	// 		.then((response) => response.json())
	// 		.then((data) => data.articles.map(news => console.log(news.source)))
	  
	// }, [])
	
	return (
		<div className="App">
			<HeaderSection />
			<MainSection />
			<Footer />
		</div>
	);
}

export default App;
