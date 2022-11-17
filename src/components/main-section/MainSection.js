import React from 'react';
import TopNews from '../topnews/TopNews';
import NewsSection from '../news-section/NewsSection';

import styled from 'styled-components';

const Main = styled.main`
    margin-top: 56px; 
`;


const MainSection = () => {
    return (
        <Main>
            <TopNews />
            <NewsSection />
        </Main>
    );
};

export default MainSection;