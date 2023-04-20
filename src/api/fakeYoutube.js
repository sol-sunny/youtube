import axios from "axios";

export default class FakeYoutube {
    constructor() { }

    async channelImgURL(id) {
        return axios
            .get(`videos/channel.json`)
            .then((res) => res.data.items[0].snippet.thumbnails.default.url);
    }

    async relatedVideos(id) {
        return axios
            .get(`videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword) {
        return axios
            .get(`videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    }
    async #mostPopular() {
        return axios
            .get(`videos/popular.json`)
            .then((res) => res.data.items);
    }

}
