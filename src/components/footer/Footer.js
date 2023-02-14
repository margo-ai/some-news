import React from 'react';
import styled from 'styled-components';


const Container = styled.footer`
    margin-top: 20px;
    padding: 31px 0;
    background-color: #FDFDFD;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
        padding: 25px 0;
    }
    @media (max-width: 850px) {
        padding: 20px 0;
    }
    @media (max-width: 600px) {
        padding: 18px 0;
    }
    @media (max-width: 530px) {
        padding: 15px 0;
    }
    @media (max-width: 400px) {
        padding: 12px 0;
    }
`;

const Copyryght = styled.div`
    font-size: 16px;
    color: #949494;
    @media (max-width: 850px) {
        font-size: 15px;
    }
    @media (max-width: 700px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        font-size: 13px;
    }
    @media (max-width: 530px) {
        font-size: 11px;
    }
    @media (max-width: 400px) {
        font-size: 9px;
    }
`;

const Footer = () => {
    return (
        <Container>
           <Copyryght>Copyright 2023 Some News</Copyryght>
        </Container>
    );
};

export default Footer;