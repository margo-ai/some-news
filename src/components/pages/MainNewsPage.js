import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/ErrorMessage';
import errorImg from '../../assets/img/notfound.gif';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from './newsSlice';

import { transformPublishingTime } from '../../helpers/transformData';

const Container = styled.div`
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

const Title = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    line-height: 42px;

    @media (max-width: 1100px) {
        font-size: 30px;
    }
    @media (max-width: 850px) {
        font-size: 25px;
    }
    @media (max-width: 700px) {
        font-size: 22px;
    }
    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 30px;
    }
    @media (max-width: 530px) {
        font-size: 15px;
        line-height: 25px;
    }
    @media (max-width: 400px) {
        font-size: 12px;
        line-height: 15px;
    }
`;

const NewsList = styled.ul`
    list-style: none;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px 30px;

    @media (max-width: 1340px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 60px 40px;
        margin-top: 45px;
    }
    @media (max-width: 850px) {
        gap: 40px 30px;
        margin-top: 30px;
    }
    @media (max-width: 700px) {
        margin-top: 20px;
    }
    @media (max-width: 600px) {
        margin-top: 15px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 400px) {
        margin-top: 12px;
        gap: 30px 20px;
    }
    
`;

const NewsItem = styled.li`    
    
    &:hover h3 {
        opacity: 0.5;
        transition: all 0.5s ease;
    }
    &:hover div img {
        transform: scale(1.1);
        filter: grayscale(100%);
        transition: all 0.5s ease;
    }

    & a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 450px;

        @media (max-width: 1340px) {
            min-height: 400px;
        }
        @media (max-width: 1100px) {
            min-height: 330px;
        }
        @media (max-width: 850px) {
            min-height: 300px;
        }
        @media (max-width: 700px) {
            min-height: 270px;
        }
        @media (max-width: 600px) {
            min-height: 250px;
        }
        @media (max-width: 530px) {
            min-height: 220px;
        }
        @media (max-width: 400px) {
            min-height: 180px;
        }
        
    }
`;

const NewsImage = styled.div`
    height: 200px;
    margin-bottom: 16px;
    border-radius: 5px;
    overflow: hidden;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }  

    @media (max-width: 1340px) {
        height: 175px;
    }
    @media (max-width: 1100px) {
        height: 150px;
    }
    @media (max-width: 850px) {
        height: 130px;
    }
    @media (max-width: 700px) {
        height: 120px;
    }
    @media (max-width: 530px) {
        margin-bottom: 12px;
        height: 110px;
    }
    @media (max-width: 400px) {
        margin-bottom: 10px;
        height: 100px;
    }
    
  
`;

const ItemTitle = styled.h3`
    font-size: 22px;
    line-height: 29px;
    font-weight: 700;
    margin-bottom: auto;

    @media (max-width: 1340px) {
        font-size: 20px;
    }

    @media (max-width: 1100px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media (max-width: 850px) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 700px) {
        font-size: 12px;
        line-height: 18px;
    }
    @media (max-width: 530px) {
        font-size: 10px;
        line-height: 15px;
    }
    @media (max-width: 400px) {
        font-size: 8px;
        line-height: 12px;
    }
`;

const SomeInfo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: #949494;
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
        font-size: 10px;
    }
    @media (max-width: 700px) {
        font-size: 8px;
    }
    @media (max-width: 400px) {
        font-size: 6px;
    }
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

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