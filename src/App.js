import HeaderSection from './components/header-section/HeaderSection';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import './App.css';

import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from './components/pages/CategoryPage';
import MainNewsPage from './components/pages/MainNewsPage';



function App() {
	// useEffect(() => {
	//  	fetch('https://newsapi.org/v2/top-headlines/?country=us&apiKey=0d128bf4661a476f88c003d0589b245a')
	//  		.then((response) => response.json())
	//  		.then((data) => data.articles.map(news => console.log(news)))
	  
	// }, [])

	const [category, setCategory] = useState(null);
	
	
	useEffect(() => {
		const categoryNews = localStorage.getItem('category');
		if (categoryNews) {
			setCategory(categoryNews)
		}
	}, [])
	
	
	// console.log(category);
	
	return (
		<div className="App">
			<BrowserRouter>			
				<HeaderSection setCategory={setCategory}/>			
				<Routes>
					<Route path="/main" element={<MainNewsPage />} />
					<Route path="/main/:id" />
					<Route 
						path=":category" 
						element={<CategoryPage category={category} />}/>
					<Route path="*" element={<MainNewsPage />}/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
