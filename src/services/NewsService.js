// import { UseHttp } from '../components/hooks/http.hook';
import {v4 as uuidv4} from 'uuid';


const useNewsService = () => {
    // const {loading, request, error, clearError} = UseHttp();

    // // top-headlines?country=jp&category=technology&

    
    // const _apiCategory = 'category=';

    // const getTopNews = async () => {
    //     const res = await request(`${_apiBase}&${_apiKey }`);
    //     return res.articles.map(_transformNews)
    // }


    // const _transformNews = (newsPath) => {
    //     return {
    //         content: newsPath.content,
    //         description: newsPath.description,
    //         title: newsPath.title,
    //         source: newsPath.source.name

    //     }
    // }

    const _apiBase = 'https://newsapi.org/v2/top-headlines/?country=us';
    const _apiKey = 'apiKey=0d128bf4661a476f88c003d0589b245a';

    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        return await res.json();
    }

    const getNews = async () => {
        const res = await getResource(`${_apiBase}&${_apiKey }`);
        return res.articles.map(_transformNews);
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

    return {getNews}

};

export default useNewsService;