import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import errorImg from '../../assets/img/notfound.gif';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from './newsSlice';

import { transformPublishingTime } from '../../helpers/transformData';
import { Container, Title, NewsList, NewsItem, NewsImage, ItemTitle, SomeInfo, SpinnerWrapper } from './pagesStyles';



const MainNewsPage = () => {

    const dispatch = useDispatch();
    const newsLoadingStatus = useSelector(state => state.news.newsLoadingStatus);
    const newsList = useSelector(state => state.news.news);


    console.log(newsLoadingStatus);
    console.log(newsList);

    useEffect(() => {
        localStorage.clear();
        dispatch(fetchNews());
	}, [])

    function handleNews(newsId) {
        // dispatch(setNews(newsId));
        localStorage.setItem("newsId", newsId);
        localStorage.setItem("newsList", JSON.stringify(newsList))
    }

    function renderItems(arr) {
        const items = arr.map((item) => {
            
            const {id, image, title, publishedTime, source} = item;

            const publishingTime = transformPublishingTime(publishedTime);
            
            return (
                <NewsItem key={id}>                    
                    <Link to={`/main/${id}`} onClick={() => handleNews(id)}>
                        <NewsImage>
                            <img src={image} alt="News Image" />
                        </NewsImage>  
                        <ItemTitle>{title}</ItemTitle>
                        <SomeInfo>
                            <span>
                            {publishingTime}
                            </span>
                            <span>{source}</span>
                        </SomeInfo>
                    </Link>
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

    const errorMessage = (newsLoadingStatus === "error") ? <ErrorMessage/> : null;
    const spinner = (newsLoadingStatus === "loading") 
    ? <SpinnerWrapper>
        <Oval
        height={60}
        width={60}
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
        </Container>
    );
};

export default MainNewsPage;