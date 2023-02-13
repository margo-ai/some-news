import React from 'react';
import MenuSection from '../menu-section/MenuSection';
import NewsFilter from '../header-filter/NewsFilter';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
    padding: 10px 0;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    & a {
        text-decoration: none;
        color: #000;
    }
    @media (max-width: 850px) {
        font-size: 22px;
    }
    @media (max-width: 700px) {
        font-size: 20px;
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
    @media (max-width: 530px) {
        font-size: 15px;
    }
    @media (max-width: 530px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    padding: 8px;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    margin-right: 8px;
    @media (max-width: 600px) {
        padding: 5px;
        margin-right: 4px;
    }
`;



const HeaderSection = ({setCategory}) => {
    return (
        <>
            <Header>
                <Title>
                    <Link to="/main">
                        <Span>Some</Span>News
                    </Link>
                </Title>
                {/* <MenuSection /> */}
            </Header>
            <NewsFilter setCategory={setCategory}/>
        </>
    );
};

export default HeaderSection;