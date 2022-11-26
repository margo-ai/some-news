// import { useHttp } from '../components/hooks/http.hook';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


const useNewsService = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const _apiBase = 'https://newsapi.org/v2/top-headlines/?country=us';
    const _apiKey = 'apiKey=0d128bf4661a476f88c003d0589b245a';

    const getResource = async (url) => {
        
        setLoading(true);

        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await res.json();

            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }                
    }

    const getNews = async () => {
        const res = await getResource(`${_apiBase}&${_apiKey }`);
        const filteredBySources = res.articles.filter(function(news) {
            return news.source.name !== "BBC News" && news.source !== "Google News";
        });
        return filteredBySources.map(_transformNews);
    }

    const getNewsByCategory = async (category) => {
        const res = await getResource(`${_apiBase}&category=${category}&${_apiKey }`);
        return res.articles.map(_transformNews);
    }

    // const getSportsNews = async () => {
    //     const res = await getResource(`${_apiBase}&category=sports&${_apiKey }`);
    //     return res.articles.map(_transformNews);
    // }

    // const getTechnologyNews = async () => {
    //     const res = await getResource(`${_apiBase}&category=technology&${_apiKey }`);
    //     return res.articles.map(_transformNews);
    // }

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

    return {getNews, getNewsByCategory, loading, error};

};

export default useNewsService;