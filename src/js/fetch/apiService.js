const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21866495-a4c1c3569eb1cc45a894346f5';
const DEFAULT_COUNT_PAGE = 12;


export default class ImagesApiService  {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImage() {
        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${DEFAULT_COUNT_PAGE}&key=${KEY}`)
        .then(res => res.json())
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    resetSearchQuery() {
        this.searchQuery = '';
    }
    
};
