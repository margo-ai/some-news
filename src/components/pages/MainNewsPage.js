import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/ErrorMessage';
import errorImg from '../../assets/img/notfound.gif';
import { Oval } from 'react-loader-spinner';
import { findTime } from '../../helpers/transformData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from './newsSlice';

const Container = styled.div`
    margin-top: 56px;
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

// const LoadNews = styled.button`
//     display: block;
//     margin: 0 auto;
//     margin-top: 50px;
//     width: 200px;
//     height: 50px;
     
//     cursor: pointer;
//     font-family: 'Playfair Display', serif;
//     font-size: 20px;
//     font-weight: 700;
//     border: none;
//     color: #fff;
//     background-color: #000;
//     border-radius: 4px;
//     &:hover {
//         color: #000;
//         background-color: #fff;
//         border: 1px solid #000;
//         transition: all 0.5s ease;
//     }
// `;

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
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 435px;
        text-decoration: none;
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
           
            const timeAgo = findTime(item.publishedTime);     
            
            return (
                <NewsItem key={item.id}>                    
                    <Link to={`/main/${item.id}`} onClick={() => handleNews(item.id)}>
                        <NewsImage>
                            <img src={item.image} alt="News Image" />
                        </NewsImage>  
                        <ItemTitle>{item.title}</ItemTitle>
                        <SomeInfo>
                            <span style={{marginRight: 16}}>
                            {timeAgo > 1
                            ? `${timeAgo} hours ago` 
                            : timeAgo == 1 ? `${timeAgo} hour ago`
                            : 'Yesterday'
                            }
                            </span>
                            <span>{item.source}</span>
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

export default MainNewsPage;