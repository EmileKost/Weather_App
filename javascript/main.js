console.log('hello world!');

//data ophalen Atlanta
function getDataAtlanta() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=3b4a4ee478f17695c6ad24052431fd68';
    console.log(url);
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderDataAtlanta(data);
    })
    .catch(err => {
        console.log(err);
     }) 
    }

function getDataMumbai() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=3b4a4ee478f17695c6ad24052431fd68'
    console.log(url);
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(dataMumbai => {
        renderDataMumbai(dataMumbai);
    })
    .catch(err => {
        console.log(err);
    })
}

// Aanroepen getData() functies
getDataAtlanta();
getDataMumbai();

//data renderen Atlanta
function renderDataAtlanta(data) {
    const content = document.querySelector('main');
    const celsius = Math.floor(data.main.temp_min - 273);
    content.insertAdjacentHTML('beforeend', 
    `
    <article>
    <h3>${data.name}, ${data.sys.country}</h3>
    <ul>
     <li>Humidity: ${data.main.humidity}%</li>
     <li>Minimum temprature: ${celsius} degrees</li>
     <li>Wind temprature: ${data.wind.deg} degrees</li>
     </ul>
     </article>
    `
    );
} 


function renderDataMumbai(dataMumbai) {
    const contentMumbai = document.querySelector('main');
    const celsius = Math.floor(dataMumbai.main.temp_min - 273);
    contentMumbai.insertAdjacentHTML('beforeend', 
    `
    <article>
    <h3>${dataMumbai.name}, ${dataMumbai.sys.country}</h3>
    <ul>
     <li>Humidity: ${dataMumbai.main.humidity}%</li>
     <li>Minimum temprature: ${celsius} degrees</li>
     <li>Wind temprature: ${dataMumbai.wind.deg} degrees</li>
     </ul>
     </article>
    `
    )
}


// // Zoekfunctie 

function searchData(searchValue) {
    const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=3b4a4ee478f17695c6ad24052431fd68`;
    console.log(searchUrl);
    fetch(searchUrl)
     .then(function(response){
         return response.json();
     })
     .then(function(dataSearch){
         console.log('You searched ' + searchValue);
         renderSearchData(dataSearch, searchUrl);
     })
     .catch((error) => {
         console.log(error);
     })
}

function renderSearchData(dataSearch, searchUrl) {
    const searchContent = document.querySelector('main');
    const celsius = Math.floor(dataSearch.main.temp_min - 273);
    searchContent.insertAdjacentHTML('beforeend', 
    `
    <article>
    <h3>${dataSearch.name}, ${dataSearch.sys.country}</h3>
    <ul>
     <li>Humidity: ${dataSearch.main.humidity}%</li>
     <li>Minimum temprature: ${celsius} degrees</li>
     <li>Wind temprature: ${dataSearch.wind.deg} degrees</li>
     </ul>
     </article>
    `
    )
}
  
document.querySelector('form').addEventListener('submit', function(prevent){
    prevent.preventDefault();
    const searchBalk = document.querySelector('#searchBalk');
    let searchValue = searchBalk.value;
    function removeContent() {
        let allContent = document.querySelectorAll('main > article');
            for(var i = 0, l = allContent.length; i < l; i++) {
                allContent[i].remove()
            }
    }
    searchData(searchValue);
    removeContent();
})

