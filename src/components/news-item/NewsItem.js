import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/img/news-img.jpg';


const Item = styled.li`
    max-width: 270px;
`;

const NewsImage = styled.img`
    margin-bottom: 16px;
`;

const Title = styled.h3`
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 24px;
`;

const SomeInfo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: #949494;
`;

const NewsItem = () => {
    return (
        <Item>
            <NewsImage src={Img} alt="News Image" />
            <Title>News Title Lorem Ipsum Dolor Sit Amet</Title>
            <SomeInfo>
                <span style={{marginRight: 16}}>1 Hour Ago</span>
                <span>CNN Indonesia</span>
            </SomeInfo>
        </Item>
    );
};

export default NewsItem;