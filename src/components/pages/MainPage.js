import React from 'react';
import TopNews from '../topnews/TopNews';
import NewsSection from '../news-section/NewsSection';

import styled from 'styled-components';

const Container = styled.div`
    margin-top: 56px; 
`;


const MainPage = () => {
    return (
        <Container>
            {/* <TopNews /> */}
            <NewsSection />
        </Container>
    );
};

export default MainPage;