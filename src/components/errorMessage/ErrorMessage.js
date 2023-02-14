import React from 'react';
import img from '../../assets/img/pageNotFound.jpg';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 50%;
    & img {
        width: 100%;
    }
`;

const ErrorMessage = () => {
    return (
        <Container>
            <img src={img} alt="Error"/>   
        </Container>
    );
};

export default ErrorMessage;