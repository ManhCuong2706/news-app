'use strict'

const newsContainer = $('#news-container')
const btnPrev = $('#btn-prev')
const btnNext = $('#btn-next')
const pageNum = $('#page-num')

let totalPages = 0
let currentPage = 1
let perPage = 5



// Render News function
function renderNews(data) {
    const articles = data.articles

    let html = articles.map(a => {
        return `<div class="card flex-row flex-wrap">
					<div class="card mb-3" style="">
						<div class="row no-gutters">
							<div class="col-md-4">
								<img
                                    src="${a.urlToImage ? a.urlToImage : './img/not_photo.jpg'}"
                                    class="card-img"
									alt="${a.title ? a.title : 'Non Title'}">
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">${a.title ? a.title : 'Non Title'}</h5>
									<p class="card-text">${a.description ? a.description : 'Non Description'}</p>
									<a href="${a.url}" class="btn btn-primary" target="_blank">View</a>
								</div>
							</div>
						</div>
					</div>
				</div>`
    }).join('\n')
    newsContainer.innerHTML = html
}

// Render pagination function
function renderPageNum() {
    if (currentPage === 1) {
        btnPrev.style.display = 'none'
    } else {
        btnPrev.style.display = 'block'
    }
    if (currentPage === totalPages) {
        btnNext.style.display = 'none'
    } else {
        btnNext.style.display = 'block'
    }
    pageNum.textContent = currentPage
}

// Get Data from API
const getData = async (country, page) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category ? currentUser.category : 'general'}&pageSize=${currentUser.pageSize ? currentUser.pageSize : 5}&page=${page}&apiKey=${API_KEY}`)
        const data = await response.json()
        console.log(data);
        if(data.status !== 'ok'|| !data) throw new Error('Could not load this page!')

        totalPages = Math.ceil(data.totalResults / (currentUser.pageSize || perPage))
        
        renderNews(data)
        renderPageNum()

    } catch (err) {
        console.log(err.message);
    }
}
getData('us', 1)

// Handle events next page
btnNext.onclick = () => {
    currentPage++
    getData('us', currentPage)
}
// Handle events previous page
btnPrev.onclick = () => {
    currentPage--
    getData('us', currentPage)
}