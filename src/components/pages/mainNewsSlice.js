import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import {v4 as uuidv4} from 'uuid';

// import useNewsService from "../../services/NewsService";

// const {getNews} = useNewsService();
const initialState = {
    news: [],
    newsLoadingStatus: 'idle'
}

const _transformNews = (news) => {
    return {
        id: uuidv4(),
        title: news.title,
        image: news.urlToImage,
        content: news.content,
        source: news.source.name,
        publishedTime: news.publishedAt,
        url: news.url
    }
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        // const {request} = useHttp();
        // return await request('https://newsapi.org/v2/top-headlines/?country=us&pageSize=25&apiKey=0d128bf4661a476f88c003d0589b245a');
        let response = await fetch('https://newsapi.org/v2/top-headlines/?country=us&pageSize=25&apiKey=0d128bf4661a476f88c003d0589b245a')
        let data = await response.json();
        return data.articles.map(_transformNews);
    }
    
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, state => {state.newsLoadingStatus = 'loading'})
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.newsLoadingStatus = 'idle';
                state.news = action.payload;
            })
            .addCase(fetchNews.rejected, state => {
                state.newsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {reducer} = newsSlice;



export default reducer;
