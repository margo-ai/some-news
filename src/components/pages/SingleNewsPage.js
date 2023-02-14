import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector , useDispatch} from 'react-redux';
import errorImg from '../../assets/img/imageNotFound.jpg';
import { cutContent, transformPublishingTime } from '../../helpers/transformData';

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
    @media (max-width: 400px) {
        margin-top: 10px;
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
    @media (max-width: 530px) {
        margin-top: 10px;
        font-size: 16px;
    }
    @media (max-width: 400px) {
        margin-top: 8px;
        font-size: 13px;
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
    @media (max-width: 530px) {
        margin-top: 12px;
        width: 330px;
    }
    @media (max-width: 400px) {
        margin-top: 8px;
        width: 240px;
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
    @media (max-width: 530px) {
        margin-top: 10px;
        font-size: 12px;
    }
    @media (max-width: 400px) {
        margin-top: 8px;
        font-size: 9px;
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
    @media (max-width: 530px) {
        margin-top: 10px;
        font-size: 10px;
    }
    @media (max-width: 400px) {
        margin-top: 10px;
        font-size: 8px;
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
        margin-top: 40px;
        font-size: 14px;
    }
    @media (max-width: 700px) {
        margin-top: 35px;
        font-size: 12px;
        padding: 6px;
    }
    @media (max-width: 600px) {
        margin-top: 25px;
        font-size: 11px;
        padding: 4px;
    }
    @media (max-width: 530px) {
        margin-top: 15px;
        font-size: 9px;
        padding: 3px;
    }
    @media (max-width: 400px) {
        margin-top: 10px;
        font-size: 9px;
        padding: 3px;
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
    @media (max-width: 530px) {
        font-size: 10px;
        padding: 3px;
    }
    @media (max-width: 400px) {
        font-size: 8px;
        width: 16%;
    }
    
`;

const SingleNewsPage = () => {

    const navigate = useNavigate();
    
    function getOneNews() {
        const selectedId = localStorage.getItem('newsId');
        const allNews = JSON.parse(localStorage.getItem('newsList'));
        // selectedId ? dispatch(setNews(selectedId)) : dispatch(setNews(newsId))
        return allNews.find((item => item.id === selectedId));
    }
    
    const newsData = getOneNews();

    function renderNews(news) {
       const {content, image, source, title, url, publishedTime} = news;

        const newContent = cutContent(content);
        const publishingTime = transformPublishingTime(publishedTime);

        function checkImageUrl(imageUrl) {
            return imageUrl ? imageUrl : errorImg;
        }

        return (
            <Container> 
                <BackButton onClick={() => navigate(-1)}>Back to all</BackButton>      
                <InfoBlock>                    
                    <span>{publishingTime}</span>
                    <span>{source}</span>
                </InfoBlock>         
                <Title>{title}</Title>
                <Image>
                    <img src={checkImageUrl(image)} />
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