import React, { useEffect, useMemo} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector , useDispatch} from 'react-redux';
import { cutContent } from '../../helpers/transformData';

import { transformPublishingTime } from '../../helpers/transformData';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 56px;
    @media (max-width: 1100px) {
        margin-top: 40px;
    }
    @media (max-width: 850px) {
        margin-top: 30px;
    }
    @media (max-width: 700px) {
        margin-top: 20px;
    }
    @media (max-width: 600px) {
        margin-top: 15px;
    }
`;

const Title = styled.h2`
    margin-top: 20px;
    font-size: 32px;

    @media (max-width: 1100px) {
        font-size: 28px;
    }
    @media (max-width: 850px) {
        font-size: 22px;
    }
    @media (max-width: 700px) {
        font-size: 24px;
    }
    @media (max-width: 600px) {
        margin-top: 10px;
        font-size: 20px;
    }
`;

const Image = styled.div`
    width: 600px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    
    & img {
        width: 100%;        
    }

    @media (max-width: 1100px) {
        width: 550px;
    }
    @media (max-width: 700px) {
        margin-top: 22px;
        width: 480px;
    }
    @media (max-width: 600px) {
        margin-top: 15px;
        width: 400px;
    }
`;

const Content = styled.p`
    margin-top: 20px; 
    font-size: 20px;

    @media (max-width: 1100px) {
        font-size: 18px;
    }
    @media (max-width: 700px) {
        margin-top: 15px;
        font-size: 17px;
    }
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const InfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-top: 50px;
    color: #808080;
    @media (max-width: 1100px) {
        margin-top: 44px;
    }
    @media (max-width: 850px) {
        margin-top: 32px;
        font-size: 16px;
    }
    @media (max-width: 700px) {
        margin-top: 28px;
        font-size: 14px;
    }
    @media (max-width: 600px) {
        margin-top: 15px;
        font-size: 12px;
    }
`;

const NewsUrl = styled.a`
    width: 25%;
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
    @media (max-width: 1192px) {
        font-size: 18px;
    }
    @media (max-width: 1040px) {
        font-size: 16px;
        padding: 7px;
    }
    @media (max-width: 850px) {
        font-size: 14px;
        margin-top: 40px;
    }
    @media (max-width: 700px) {
        font-size: 12px;
        margin-top: 35px;
        padding: 6px;
    }
    @media (max-width: 600px) {
        font-size: 10px;
        padding: 4px;
        margin-top: 25px;
    }
`;

const BackButton = styled.button`
    width: 15%;
    margin-left: auto;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    font-size: 18px;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
    transition: all 0.5s ease-out;
    &:hover {
        color: #fff;
        background-color: #000;
    }

    @media (max-width: 1100px) {
        font-size: 16px;
        padding: 8px;
    }
    @media (max-width: 850px) {
        font-size: 14px;
    }
    @media (max-width: 700px) {
        font-size: 13px;
        padding: 6px;
        width: 17%;
    }
    @media (max-width: 600px) {
        font-size: 12px;
        padding: 4px;
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
    const navigate = useNavigate();
    
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
                <BackButton onClick={() => navigate(-1)}>Back to all</BackButton>      
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