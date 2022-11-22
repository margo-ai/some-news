import HeaderSection from './components/header-section/HeaderSection';
import MainPage from './components/pages/MainPage';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import './App.css';
import useNewsService from './services/NewsService';


function App() {
	// useEffect(() => {
	//  	fetch('https://newsapi.org/v2/top-headlines/?country=us&apiKey=0d128bf4661a476f88c003d0589b245a')
	//  		.then((response) => response.json())
	//  		.then((data) => data.articles.map(news => console.log(news)))
	  
	// }, [])

	

	
	return (
		<div className="App">
			<HeaderSection />
			<MainPage />
			<Footer />
		</div>
	);
}

export default App;
