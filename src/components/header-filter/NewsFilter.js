import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FilterList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 20px;
    border: 1px solid #6C6C6C;    
`;

const FilterItem = styled.li`
    text-align: center;
    width: 20%;
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

const NewsFilter = ({setCategory}) => {

    function handleCategory(category) {
        setCategory(category);
        localStorage.setItem("category", category);
        // console.log(category);
    }

    useEffect(() => {
        
    }, [])
    

    return (
        <FilterList>
            <FilterItem>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? '#fff' : 'inherit', backgroundColor: isActive ? '#000' : 'inherit'})}
                    to="/general"
                    onClick={() => handleCategory('general')}>General</NavLink>
            </FilterItem>
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
                    to="/science"
                    onClick={() => handleCategory('science')}>Science</NavLink>
            </FilterItem>
        </FilterList>
    );
};

export default NewsFilter;