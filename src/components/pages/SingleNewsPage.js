import React, { useEffect, useMemo} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector , useDispatch} from 'react-redux';
import { findTime, cutContent } from '../../helpers/transformData';

import { transformPublishingTime } from '../../helpers/transformData';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 56px;
`;

const Title = styled.h2`
    margin-top: 20px;
`;

const Image = styled.div`
    width: 600px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    
    & img {
        width: 100%;        
}
`;

const Content = styled.p`
    margin-top: 20px; 
    font-size: 20px;
`;

const InfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-top: 30px;
    color: #808080;
`;

const NewsUrl = styled.a`
    width: 20%;
    display: block;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    transition: all 0.5s ease-out;
    &:hover {
        background-color: #808080;
    }
`;

const SingleNewsPage = () => {
    
        // id: uuidv4(),
    //     title: news.title,
    //     image: news.urlToImage,
    //     content: news.content,
    //     source: news.source.name,
    //     publishedTime: news.publishedAt,
    //     url: news.url
    
    const {newsId} = useParams();
    const newsList = useSelector(state => state.news.news);
    const dispatch = useDispatch();
    // const newsData= useSelector(state => state.news.selectedNews);
    // console.log(newsData);
    
    function getOneNews() {
        const selectedId = localStorage.getItem('newsId');
        const allNews = JSON.parse(localStorage.getItem('newsList'));
        // selectedId ? dispatch(setNews(selectedId)) : dispatch(setNews(newsId))
        return allNews.find((item => item.id === selectedId));
    }

    // useEffect(() => {
    //     const news = getOneNews();
    //     dispatch(setNews(news));
    //     console.log(newsData);
	// }, [])
    
    const newsData = getOneNews();
    console.log(newsData);

    function renderNews(news) {
       const {content, image, source, title, url, publishedTime} = news;

        const newContent = cutContent(content);
        const publishingTime = transformPublishingTime(publishedTime);

        return (
            <Container>       
            <InfoBlock>                    
                    <span>{publishingTime}</span>
                    <span>{source}</span>
                </InfoBlock>         
                <Title>{title}</Title>
                <Image>
                    <img src={image} />
                </Image>
                <Content>{newContent}</Content>
                <NewsUrl href={url}>Read at the source</NewsUrl>
                
            </Container>    
        )
    }

    const news = renderNews(newsData);

    return (
        <>
            {news}
        </>
    );
};

export default SingleNewsPage;