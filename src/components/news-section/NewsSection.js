import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
// import NewsItem from '../news-item/NewsItem';
import useNewsService from '../../services/NewsService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Oval } from 'react-loader-spinner';

const Container = styled.div`
    /* margin-top: 56px; */
`;

const Title = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    line-height: 42px;
`;

const NewsList = styled.ul`
    list-style: none;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px 30px;
`;

const LoadNews = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 200px;
    height: 50px;
     
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    border: none;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    &:hover {
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
        transition: all 0.5s ease;
    }
`;

const NewsItem = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 435px;
    
    &:hover h3 {
        opacity: 0.5;
        transition: all 0.5s ease;
    }
    &:hover div img {
        transform: scale(1.1);
        filter: grayscale(100%);
        transition: all 0.5s ease;
    }
`;

const NewsImage = styled.div`
    margin-bottom: 16px;

    overflow: hidden;
    & img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
    }  
  
`;

const ItemTitle = styled.h3`
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: auto;
`;

const SomeInfo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: #949494;
    display: flex;
    justify-content: space-between;
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

const NewsSection = () => {

    const [newsList, setNewsList] = useState([]);

    const {getNews, loading, error} = useNewsService();
   
    useEffect(() => {
		getNews()
			.then(setNewsList)

	}, [])
    console.log(newsList);



    function renderItems(arr) {
        const items = arr.map((item) => {
            function findTime() {
                let now = new Date();
                let nowHour = now.getHours();
                let newsDate = new Date(item.publishedTime);
                let newsHour = newsDate.getHours();
                return nowHour - newsHour;      
            }
            
            let timeAgo = findTime();          

            return (
                <NewsItem key={item.id}>
                    <NewsImage>
                        <img src={item.image} alt="News Image" />
                    </NewsImage>                    
                    <ItemTitle>{item.title}</ItemTitle>
                    <SomeInfo>
                        <span style={{marginRight: 16}}>
                        {timeAgo > 1
                        ? `${timeAgo} hours ago` 
                        : `${timeAgo} hour ago`
                        }
                        </span>
                        <span>{item.source}</span>
                    </SomeInfo>
                </NewsItem>    
            )
        });

        return (
            <NewsList>
                {items}
            </NewsList>
        )
    };

    const items = renderItems(newsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading 
    ? <SpinnerWrapper>
        <Oval
        height={80}
        width={80}
        color="#000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#A8A8A8"
        strokeWidth={2}
        strokeWidthSecondary={2}  
        />
    </SpinnerWrapper>
    : null;

    return (
        <Container>
            <Title>Latest News</Title>
            {errorMessage}
            {spinner}
            {items}
            {/* <LoadNews>More news</LoadNews> */}
        </Container>
    );
};

export default NewsSection;