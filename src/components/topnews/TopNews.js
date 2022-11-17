import React from 'react';
import styled from 'styled-components';
import bcgImage from '../../assets/img/main-bg.jpg';

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;  
    font-size: 48px;
    font-weight: 700;
`;

const NewsBlock = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`;

const ImgBlock = styled.div`
    width: 72%;
    height: 400px;
    position: relative;
`;

const TextBlock = styled.p`
    width: 30%;
    margin-left: 30px;
    font-size: 18px;
    line-height: 32.4px;
`;

const NewsInfo = styled.div`
    width: 50%;
    position: absolute;
    bottom: 32px;
    left: 32px;
`;

const NewsTitle = styled.h3`
    font-size: 32px;
    color: #fff;
    line-height: 48px;
    margin-bottom: 16px;
`;

const SomeInfo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
`;


const TopNews = () => {
    return (
        <div>
            <Title>Hot Topics</Title>
            <NewsBlock>
                <ImgBlock style={{backgroundImage: `url(${bcgImage})`, backgroundRepeat: 'no-repeat'}}>
                    <NewsInfo>
                        <NewsTitle>
                            Massa tortor nibh nulla condimentum imperdiet scelerisque...
                        </NewsTitle>
                        <SomeInfo>
                            <span style={{marginRight: 27}}>2 hours ago</span>
                            <span>CNN Indonesia</span>
                        </SomeInfo>
                    </NewsInfo>
                </ImgBlock>
                <TextBlock>
                    Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
                </TextBlock>
            </NewsBlock>
        </div>
    );
};

export default TopNews;