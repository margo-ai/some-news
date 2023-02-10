import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Oval } from 'react-loader-spinner';
import { findTime, transformPublishingTime } from '../../helpers/transformData';

import { fetchNewsByCategory } from './newsSlice';

const Container = styled.div`
    margin-top: 56px;
`;

const Title = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    line-height: 42px;
    text-transform: capitalize;
`;

const NewsList = styled.ul`
    list-style: none;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px 30px;
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
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 435px;
        text-decoration: none;
    }
`;

const NewsImage = styled.div`
    margin-bottom: 16px;
    height: 200px;
    overflow: hidden;
    border-radius: 5px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }  
`;

const ItemTitle = styled.h3`
    font-size: 22px;
    line-height: 29px;
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


const CategoryPage = () => {
    // const [newsList, setNewsList] = useState([]);
    
    // const {getNewsByCategory, loading, error} = useNewsService();
    // console.log(category);

    const dispatch = useDispatch();
    const newsLoadingStatus = useSelector(state => state.news.newsLoadingStatus);
    const newsList = useSelector(state => state.news.news);
    const category = useSelector(state => state.news.category);

    console.log(newsLoadingStatus);
    console.log(newsList);
    console.log(category);

    useEffect(() => {
        const categoryNews = localStorage.getItem('category');
		categoryNews ? dispatch(fetchNewsByCategory(categoryNews)) : dispatch(fetchNewsByCategory(category));	
	}, [category])


    console.log(category);
    console.log(newsList);

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
                    <Link to={`/${category}/${id}`} onClick={() => handleNews(id)}>
                        <NewsImage>
                            <img src={image} alt="News Image" />
                        </NewsImage>                    
                        <ItemTitle>{title}</ItemTitle>
                        <SomeInfo>
                            <span style={{marginRight: 16}}>
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
            <Title>{category} News</Title>
            {errorMessage}
            {spinner}
            {items}
        </Container>
    );
};

export default CategoryPage;