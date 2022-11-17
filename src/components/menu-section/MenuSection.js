
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/img/search.svg';

const Container = styled.div`
    display: flex;
`;

const Search = styled.div`
    width: 30px;
    height: auto;
    margin-right: 30px;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Menu = styled.div`
    width: 30px;
    height: auto;
    position: relative;
    cursor: pointer;
`;

const BurgerLine = styled.span`
    width: 23px;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;

    &:nth-child(2) {
        top: calc(50% - 7px);
    }

    &:nth-child(3) {
        top: calc(50% + 7px);
    }

`;

const MenuSection = () => {
    return (
        <Container>
            <Search>
                <Button>
                    <img src={SearchIcon} alt="Searc icon"/>
                </Button>
            </Search>
            <Menu>                
                <BurgerLine />
                <BurgerLine />
                <BurgerLine />                
            </Menu>
        </Container>
    );
};

export default MenuSection;