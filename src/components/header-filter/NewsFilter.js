import React from 'react';
import styled from 'styled-components';

const FilterList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 20px;
    border: 1px solid #6C6C6C;    
`;

const FilterItem = styled.li`
    text-align: center;
    width: 25%;
    font-size: 20px;   
    border-right: 1px solid #000;
    &:last-child {
        border-right: none;
    }
    & a {
        display: block;
        width: 100%;
        text-decoration: none;  
        color: #000;
        padding: 10px 0;
        &:hover {
        background-color: #000;
        color: #fff;
        transition: all 0.5s ease;
    }
    }
`;

const NewsFilter = () => {
    return (
        <FilterList>
            <FilterItem>
                <a href="#">Business</a>
            </FilterItem>
            <FilterItem>
                <a href="#">Technology</a>
            </FilterItem>
            <FilterItem>
                <a href="#">Sports</a>
            </FilterItem>
            <FilterItem>
                <a href="#">Entertainment</a>
            </FilterItem>
        </FilterList>
    );
};

export default NewsFilter;