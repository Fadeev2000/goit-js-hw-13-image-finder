const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21866495-a4c1c3569eb1cc45a894346f5';
const DEFOLT_COUNT_PAGE = 12;

export default class ImagesApiService  {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImage() {
        const response = await fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${DEFOLT_COUNT_PAGE}&key=${KEY}`);
        const result = response.json();
        return result;
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
