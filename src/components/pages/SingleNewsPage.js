import React, { useEffect, useMemo} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector , useDispatch} from 'react-redux';
import { findTime, cutContent } from '../../helpers/transformData';


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
    margin-top: 40px;
    color: #808080;
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

        function cutContent(text) {
            let to = text.indexOf('[');
            // let to = text.length - 1;
            return text.slice(0, to);
        }
        
        const newContent = cutContent(content);
        const timeAgo = findTime(publishedTime);

        return (
            <Container>                
                <Title>{title}</Title>
                <Image>
                    <img src={image} />
                </Image>
                <Content>{newContent}</Content>
                <InfoBlock>                    
                    <span>
                        {timeAgo > 1
                            ? `${timeAgo} hours ago` 
                            : timeAgo == 1 ? `${timeAgo} hour ago`
                            : 'Yesterday'
                        }
                    </span>
                    <span>{source}</span>
                </InfoBlock>
                
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