import './sass/main.scss';
import ImagesApiService from './js/apiService';
//import { consts } from './js/consts';
import cardTemplate from './templates/card-image';
import LoadBtn from './js/components/load-btn';


let l = console.log;

//l('consts', consts);


const refs = {
    gallery: document.querySelector('.gallery'),
    //searchBtn: document.querySelector('button[data-action="search"]'),
    searchInput: document.querySelector('.search-form input'),
    //loadBtn: document.querySelector('.load-button'),
}

//const { BASE_URL, numberPage, KEY, refs } = consts;

//l(LoadMoreBtn);



const loadMoreBtn = new LoadBtn('[data-action="load-more"]');
loadMoreBtn.hidden();
loadMoreBtn.enable();
const loadSearchBtn = new LoadBtn('[data-action="search"]', 'Search', 'Load...');
loadSearchBtn.show();
loadSearchBtn.disable();

/*loadMoreBtn.buttonEls.forEach(button => button.addEventListener('click', onCM))
function onCM(e) {
    l('clk', e.currentTarget);
}
//loadMoreBtn.buttonEl.addEventListener('click', onClickMore);*/
loadSearchBtn.lg();

//const searchQuery = refs.searchInput.value;
    const imagesApiService = new ImagesApiService();

//l(loadSearchBtn);

refs.searchInput.addEventListener('input', onInputSearch);

//refs.loadBtn.addEventListener('click', ()=>alert)

//refs.searchInput.addEventListener('input', onInputSearch);

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

//loadSearchBtn.buttonEl.addEventListener('click', onClickSearch);
loadSearchBtn.buttonEls.forEach(button => button.addEventListener('click', onClickSearch))

function onClickSearch() {
    //loadSearchBtn.buttonEl.textContent = 'Load...';
    loadSearchBtn.buttonEls.forEach(button => button.textContent = 'Load...');
    imagesApiService.resetPage();
    clearGalleryContainer();
    addMarkup();
};
    
function clearGalleryContainer() {
refs.gallery.innerHTML = '';
}

function addMarkup() {
    //imagesApiService.incrementPage();
   imagesApiService.searchQuery = refs.searchInput.value;
    
    //imagesApiService.incrementPage();
    imagesApiService.fetchImage().then(data => data).then(images => {
        l(images);
        const markup = cardTemplate(images.hits);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
        //loadSearchBtn.buttonEl.textContent = 'Search';
        loadSearchBtn.buttonEls.forEach(button => button.textContent = 'Search');
        loadMoreBtn.buttonEls.forEach(button => button.textContent = 'Load more');
        loadMoreBtn.show();

        //l(images.hits[0].id);
        scrollDown(images.hits[2].id);
        /*const myElementSelector = String(images.hits[0].id);
        l(myElementSelector);
        const element = document.getElementById(myElementSelector);
        l(element);
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});*/
        
            imagesApiService.incrementPage();
             l(imagesApiService.page);
        //loadMoreBtn.buttonEl.addEventListener('click', onClickMore);
        loadMoreBtn.buttonEls.forEach(button => button.addEventListener('click', onClickMore));

    })
        //.catch(error => console.log(error));
    ;
    //});
    }
    
    function onClickMore() {
        //l('333');
        loadMoreBtn.buttonEls.forEach(button => button.textContent = 'Load...');
        addMarkup();
    }

function scrollDown(myElementSelector) {
        //const myElementSelector = String(images.hits[0].id);
        //l(myElementSelector);
        const element = document.getElementById(myElementSelector);
        l(element);
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
    }






/*class FetchImages {
    constructor() { }

    getFetch() {
        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${numberPage}&per_page=12&key=${KEY}`)
    .then(res => {
        l('res', res);
        return res.json();
    })
    .then(data => {
        l('data', data);
    });
        //l('answer', answer);
    }
}
//l(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${numberPage}&per_page=12&key=${KEY}`);

const fetchImages = new FetchImages();

const rrr = fetchImages.getFetch().then(res => l(res));
l('rrr', rrr);*/




/*function fetchImages() {
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${numberPage}&per_page=12&key=${KEY}`)
        .then(res => res.json())
        //.then(data => l(data)))
}*/


















