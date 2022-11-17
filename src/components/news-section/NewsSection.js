import React from 'react';
import styled from 'styled-components';
import NewsItem from '../news-item/NewsItem';

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
    row-gap: 60px;
    column-gap: 30px;
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

const NewsSection = () => {
    return (
        <Container>
            <Title>Latest News</Title>
            <NewsList>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </NewsList>
            <LoadNews>More news</LoadNews>
        </Container>
    );
};

export default NewsSection;