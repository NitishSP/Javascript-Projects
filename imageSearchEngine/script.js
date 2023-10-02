const accessKey = "BQJAUDaE0LOyzqw2U34XRCBJXkkhi1OfpJy6Uh4awCQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("Search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const searchedItems1 = document.getElementById("searched-items1");
const searchedItems2 = document.getElementById("searched-items2");
const searchedItems3 = document.getElementById("searched-items3");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const accessKey = "BQJAUDaE0LOyzqw2U34XRCBJXkkhi1OfpJy6Uh4awCQ";

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=50`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    // console.log(data);

    searchedItems1.innerHTML = "";
    searchedItems2.innerHTML = "";
    searchedItems3.innerHTML = "";

    for(let i=0; i<results.length; i++){
        const image = document.createElement("img");
        image.src = results[i].urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = results[i].links.html;
        imageLink.appendChild(image);
        
        if (i % 3 === 0) {
            searchedItems1.appendChild(imageLink);
        } else if (i % 3 === 1) {
            searchedItems2.appendChild(imageLink);
        } else {
            searchedItems3.appendChild(imageLink);
        }
    }

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})


showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})


