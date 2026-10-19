var lastImageClicked = document.getElementById('firstImage')
function clickImage(event) {
    const target = event.target
    const mainImage = document.getElementById('mainImage')
                
    const newImageURL = target.getAttribute('src') 

    mainImage.setAttribute('src', newImageURL)

    lastImageClicked.classList.remove('active')
    target.classList.add('active')
    lastImageClicked = target
}