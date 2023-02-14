import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ErrorMessage from '../errorMessage/ErrorMessage';
import { Oval } from 'react-loader-spinner';
import { transformPublishingTime, checkImageUrl } from '../../helpers/transformData';

import { fetchNewsByCategory } from './newsSlice';
import { Container, Title, NewsList, NewsItem, NewsImage, ItemTitle, SomeInfo, SpinnerWrapper } from './pagesStyles';

const CategoryPage = () => {

    const dispatch = useDispatch();
    const newsLoadingStatus = useSelector(state => state.news.newsLoadingStatus);
    const newsList = useSelector(state => state.news.news);
    const category = useSelector(state => state.news.category);

    useEffect(() => {
        const categoryNews = localStorage.getItem('category');
		categoryNews ? dispatch(fetchNewsByCategory(categoryNews)) : dispatch(fetchNewsByCategory(category));	
	}, [category])

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
                            <img src={checkImageUrl(image)} alt="News Image" />
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

    function checkCategory() {
        if (category) {
            return `${category} News`;
        } else {
            const category = localStorage.getItem('category');
            return `${category} News`;
        }
    }

    
    return (
        <Container>
            <Title>{checkCategory()}</Title>
            {errorMessage}
            {spinner}
            {items}
        </Container>
    );
};

export default CategoryPage;