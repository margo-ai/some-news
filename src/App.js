import HeaderSection from './components/header-section/HeaderSection';
import Footer from './components/footer/Footer';
import './App.css';

import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from './components/pages/CategoryPage';
import MainNewsPage from './components/pages/MainNewsPage';
import SingleNewsPage from './components/pages/SingleNewsPage';


function App() {
	// useEffect(() => {
	//  	fetch('https://newsapi.org/v2/top-headlines/?country=us&apiKey=0d128bf4661a476f88c003d0589b245a')
	//  		.then((response) => response.json())
	//  		.then((data) => data.articles.map(news => console.log(news)))
	  
	// }, [])

	// const [category, setCategory] = useState(null);
	
	// useEffect(() => {
	// 	// const categoryNews = localStorage.getItem('category');
	// 	// if (categoryNews) {
	// 	// 	dispatch(selectCategory(categoryNews));
	// 	// }
	// }, [])
	
	
	// console.log(category);
	
	return (
		<div className="App">
			<BrowserRouter>			
				<HeaderSection/>			
				<Routes>
					<Route path="/main" element={<MainNewsPage />} />
					<Route path="/main/:newsId" element={<SingleNewsPage />}/>
					<Route 
						path=":category" 
						element={<CategoryPage />}/>
					<Route path="/:category/:newsId" element={<SingleNewsPage />}/>
					<Route path="*" element={<MainNewsPage />}/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
