import React from 'react';
import styled from 'styled-components';


const Container = styled.footer`
    padding: 31px 0;
    background-color: #FDFDFD;
    display: flex;
    justify-content: center;
`;

const Copyryght = styled.div`
    font-size: 16px;
    color: #949494;
`;

const Footer = () => {

    return (
        <Container>
           <Copyryght>Copyright 2021 Some News</Copyryght>
        </Container>
    );
};

export default Footer;