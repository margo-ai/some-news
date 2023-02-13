import {v4 as uuidv4} from 'uuid';
import { DateTime } from 'luxon';

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


export const cutContent = (text) => {

    if (text === null) {
        return 'Content wasn\'t found'
    }

    let to = text.indexOf('[');
    return text.slice(0, to);
}

export const transformPublishingTime = (time) => {
    let publishingTime = DateTime.fromISO(time).setLocale('ru').setLocale('ru').toFormat('dd.LL.yyyy HH:mm');
    return publishingTime;
}