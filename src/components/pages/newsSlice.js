import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { _transformNews, filterNewsBySource } from "../../helpers/transformData";


// import useNewsService from "../../services/NewsService";

// const {getNews} = useNewsService();
const initialState = {
    news: [],
    category: '',
    newsLoadingStatus: 'idle',
    selectedNews: null
}

const _apiBase = 'https://newsapi.org/v2/top-headlines/?country=us';
const _apiKey = 'apiKey=0d128bf4661a476f88c003d0589b245a';



export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        // const {request} = useHttp();
        // return await request('https://newsapi.org/v2/top-headlines/?country=us&pageSize=25&apiKey=0d128bf4661a476f88c003d0589b245a');
        const response = await fetch(`${_apiBase}&pageSize=50&${_apiKey}`);
        const data = await response.json();
        const filteredBySources = filterNewsBySource(data.articles);
        return filteredBySources.map(_transformNews);
    }
);

export const fetchNewsByCategory = createAsyncThunk(
    'news/fetchCategoryNews',
    async (category) => {
        const response = await fetch(`${_apiBase}&pageSize=25&category=${category}&${_apiKey }`);
        const data = await response.json();
        const filteredBySources = filterNewsBySource(data.articles);
        return filteredBySources.map(_transformNews);
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.category = action.payload;
        },
        setNews: (state, action) => {
            state.selectedNews = action.payload;
        }
    },
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
            .addCase(fetchNewsByCategory.pending, state => {state.newsLoadingStatus = 'loading'})
            .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
                state.newsLoadingStatus = 'idle';
                state.news = action.payload;
            })
            .addCase(fetchNewsByCategory.rejected, state => {
                state.newsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = newsSlice;
export const {selectCategory, setNews} = actions;

export default reducer;
