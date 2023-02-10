import {v4 as uuidv4} from 'uuid';

export const _transformNews = (news) => {
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

export const filterNewsBySource = (articles) => {
    let filteredNews = articles.filter(function(news) {
        return news.source.name !== "BBC News" && news.source.name !== "Google News" && news.source.name !== "YouTube" && news.source.name !== "WCVB Boston";
    });
    return filteredNews;
}

export const findTime = (publishedTime) => {
    let now = new Date();
    let nowHour = now.getHours();
    let newsDate = new Date(publishedTime);
    let newsHour = newsDate.getHours();
    return nowHour - newsHour;      
}

export const cutContent = (text) => {
    let to = text.indexOf('[');
    return text.slice(0, to);
}