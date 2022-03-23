import './styles/main.scss'

function initializeWebsite() {
    const content = document.getElementById('container')

    content.innerHTML = 'Hello World'

    return content
}

initializeWebsite()