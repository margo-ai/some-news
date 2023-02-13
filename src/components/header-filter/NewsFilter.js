import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../pages/newsSlice';

const FilterList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 20px;
    border: 1px solid #6C6C6C;    
    @media (max-width: 600px) {
        margin-top: 12px;
    }
    @media (max-width: 530px) {
        margin-top: 10px;
    }
    @media (max-width: 400px) {
        margin-top: 8px;
    }
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
        @media (max-width: 600px) {
            padding: 8px 0;
        }
        @media (max-width: 530px) {
            padding: 5px 0;
        }
        @media (max-width: 400px) {
            padding: 5px 0;
        }
    }

    @media (max-width: 1100px) {
        font-size: 16px;
    }
    @media (max-width: 850px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }
    @media (max-width: 530px) {
        font-size: 10px;
    }
    @media (max-width: 400px) {
        font-size: 8px;
    }
`;

const NewsFilter = () => {

    const dispatch = useDispatch();

    function handleCategory(category) {
        dispatch(selectCategory(category));
        localStorage.setItem("category", category);
        // console.log(category);
    }    

    return (
        <FilterList>
            {/* <FilterItem>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? '#fff' : 'inherit', backgroundColor: isActive ? '#000' : 'inherit'})}
                    to="/health"
                    onClick={() => handleCategory('health')}>Health</NavLink>
            </FilterItem> */}
            <FilterItem>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? '#fff' : 'inherit', backgroundColor: isActive ? '#000' : 'inherit'})}
                    to="/technology"
                    onClick={() => handleCategory('technology')}>Technology</NavLink>
            </FilterItem>
            <FilterItem>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? '#fff' : 'inherit', backgroundColor: isActive ? '#000' : 'inherit'})}
                    to="/sports"
                    onClick={() => handleCategory('sports')}>Sports</NavLink>
            </FilterItem>
            <FilterItem>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? '#fff' : 'inherit', backgroundColor: isActive ? '#000' : 'inherit'})}
                    to="/entertainment"
                    onClick={() => handleCategory('entertainment')}>Entertainment</NavLink>
            </FilterItem>
            <FilterItem>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? '#fff' : 'inherit', backgroundColor: isActive ? '#000' : 'inherit'})}
                    to="/business"
                    onClick={() => handleCategory('business')}>Business</NavLink>
            </FilterItem>
        </FilterList>
    );
};

export default NewsFilter;