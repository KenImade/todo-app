import todoImg from '../assets/to-do.png'

function createHeader() {
    const header = document.createElement('header')
    let logoLink = document.createElement('a')
    let img = document.createElement('img')
    img.src = todoImg
    img.classList.add('logo-img')
    logoLink.appendChild(img)

    let logoText = document.createElement('div')
    logoText.classList.add('logo-text')
    logoText.innerHTML = 'ToDo App'
    

    header.appendChild(logoLink)
    header.appendChild(logoText)
    return header
}


function createUI() {
    const content = document.getElementById("container");
    content.appendChild(createHeader());

    return content
}

export default createUI;