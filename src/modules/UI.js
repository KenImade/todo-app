import todoImg from '../assets/to-do.png'
import inImg from '../assets/inbox.png'
import tdImg from '../assets/calendar.png'
import wkImg from '../assets/next-week.png'

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

function createBody() {
    const appBody = document.createElement('section')
    appBody.classList.add('app-body')
    appBody.appendChild(createSideMenu())
    appBody.appendChild(createTaskDisplay())
    return appBody
}

function createSideMenu() {
    const sideBar = document.createElement('div')
    sideBar.classList.add('sidebar')

    let inboxDiv = document.createElement('div')
    inboxDiv.classList.add('sidebar-box')
    let inboxText = document.createElement('p')
    let inboxImg = document.createElement('img')
    inboxImg.src = inImg
    inboxImg.classList.add('sidebar-img')
    inboxText.innerHTML = 'Inbox'
    inboxDiv.appendChild(inboxImg)
    inboxDiv.appendChild(inboxText)

    let todayDiv = document.createElement('div')
    let todayText = document.createElement('p')
    todayDiv.classList.add('sidebar-box')
    let todayImg = document.createElement('img')
    todayImg.src = tdImg
    todayImg.classList.add('sidebar-img')
    todayText.innerHTML = 'Today'
    todayDiv.appendChild(todayImg)
    todayDiv.appendChild(todayText)

    let weekDiv = document.createElement('div')
    let weekText = document.createElement('p')
    let weekImg = document.createElement('img')
    weekImg.src = wkImg
    weekDiv.classList.add('sidebar-box')
    weekImg.classList.add('sidebar-img')
    weekText.innerHTML = 'This week'
    weekDiv.appendChild(weekImg)
    weekDiv.appendChild(weekText)

    sideBar.appendChild(inboxDiv)
    sideBar.appendChild(todayDiv)
    sideBar.appendChild(weekDiv)
    return sideBar
}

function createTaskDisplay() {
    const taskDisplay = document.createElement('div')
    taskDisplay.classList.add('task-display')
    return taskDisplay
}



function createUI() {
    const content = document.getElementById("container");
    content.appendChild(createHeader());
    content.appendChild(createBody())
    return content
}

export default createUI;