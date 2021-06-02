import './sass/main.scss';
import ImagesApiService from './js/async/apiService';
import cardTemplate from './templates/card-image';
import LoadBtn from './js/async/components/load-btn';

/*import { alert, Stack} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/material.css';
import 'material-design-icons/iconfont/material-icons.css';*/


let l = console.log;

/*function messageChangeInput(message) {
    
    alert({
        text: message,,
        styling: 'material',
        icons: 'material',
    });
}*/

const refs = {
    gallery: document.querySelector('.gallery'),
    searchInput: document.querySelector('.search-form input'),
}

const loadMoreBtn = new LoadBtn('[data-action="load-more"]');
loadMoreBtn.hidden();
loadMoreBtn.enable();

const loadSearchBtn = new LoadBtn('[data-action="search"]');
loadSearchBtn.show();
loadSearchBtn.disable();

const imagesApiService = new ImagesApiService();

refs.searchInput.addEventListener('input', onInputSearch);

function onInputSearch() {
    if (refs.searchInput.value !== '') {
        loadSearchBtn.enable();
    } else {
        loadSearchBtn.disable();
        loadMoreBtn.hidden();
        imagesApiService.resetPage();
        imagesApiService.resetSearchQuery();
    }
}

loadSearchBtn.buttonEls.forEach(button => button.addEventListener('click', onClickSearch))

function onClickSearch() {
    loadSearchBtn.buttonEls.forEach(button => button.textContent = 'Load...');
    imagesApiService.resetPage();
    clearGalleryContainer();
    addMarkup();
};
    
function clearGalleryContainer() {
    refs.gallery.innerHTML = '';
}

async function addMarkup() {
    imagesApiService.searchQuery = refs.searchInput.value;
    
    const data = await imagesApiService.fetchImage();

    const isSearchBad = data.hits.length === 0 && imagesApiService.page === 1;
    if (isSearchBad) {
        alert('No matches found. Please enter another request!');
        loadSearchBtn.buttonEls.forEach(button => button.textContent = 'Search');
        refs.searchInput.value = '';//messageChangeInput('Too many matches found. Pleas enter a more specific query!');
        return;
    }
    const isImagesEnd = data.hits.length === 0 && imagesApiService.page > 1;
    if (isImagesEnd) {
        alert('There are no more images for this request!');
        loadMoreBtn.buttonEls.forEach(button => button.textContent = 'Load more');
        loadMoreBtn.hidden();
        return;
    }
    
    const markup = cardTemplate(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    loadSearchBtn.buttonEls.forEach(button => button.textContent = 'Search');
    loadMoreBtn.buttonEls.forEach(button => button.textContent = 'Load more');

    loadMoreBtn.show();
    scrollDown(data.hits[2].id);
    imagesApiService.incrementPage();
    loadMoreBtn.buttonEls.forEach(button => button.addEventListener('click', onClickMore));
}
    
function onClickMore() {
    loadMoreBtn.buttonEls.forEach(button => button.textContent = 'Load...');
    addMarkup();
}

function scrollDown(myElementSelector) {
    const element = document.getElementById(myElementSelector);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}
