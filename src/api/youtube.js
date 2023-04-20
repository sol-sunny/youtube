import axios from "axios";

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_KEY },
        });
    }

    async relatedVideos(id) {
        return this.httpClient
            .get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    relatedToVideo: id
                },
            })
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    }

    async channelImgURL(id) {
        return this.httpClient
            .get('channels', {
                params: {
                    part: 'snippet',
                    id: id
                },
            })
            .then((res) => res.data.items[0].snippet.thumbnails.default.url);

    }
    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword) {
        return this.httpClient
            .get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    q: keyword
                },
            })
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    }
    async #mostPopular() {
        return this.httpClient
            .get('videos', {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    chart: 'mostPopular'
                },
            })
            .then((res) => res.data.items);
    }

}