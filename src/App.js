import HeaderSection from './components/header-section/HeaderSection';
import Footer from './components/footer/Footer';


import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from './components/pages/CategoryPage';
import MainNewsPage from './components/pages/MainNewsPage';
import SingleNewsPage from './components/pages/SingleNewsPage';

import styled from 'styled-components';

const AppWrapper = styled.div`
	font-size: 24px;
	padding: 30px 125px;

	@media (max-width: 1100px) {
		padding: 30px 90px;
	}
	@media (max-width: 850px) {
		padding: 20px 65px;
	}
	@media (max-width: 530px) {
		padding: 20px 40px;
	}
	@media (max-width: 400px) {
		padding: 10px 20px;
	}
`;

function App() {
	
	return (
		<AppWrapper>
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
		</AppWrapper>
	);
}

export default App;
