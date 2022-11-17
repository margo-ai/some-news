import React from 'react';
import MenuSection from '../menu-section/MenuSection';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
`;

const Span = styled.span`
    padding: 8px;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    margin-right: 8px;
`;



const HeaderSection = () => {
    return (
        <Header>
            <Title>
                <Span>Some</Span>News
            </Title>
            <MenuSection />
        </Header>
    );
};

export default HeaderSection;