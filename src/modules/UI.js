import todoImg from '../assets/to-do.png'
import Project from './project'


export default class UI {

    static loadApp() {
        UI.loadInbox()
    }

    static loadInbox() {
        const content = document.getElementById('display')
        const inboxPage = document.createElement('div')
        const inboxTitle = document.createElement('h3')
        inboxTitle.innerHTML = 'Inbox'
        
        inboxPage.appendChild(inboxTitle)

        content.innerHTML = ''
        content.appendChild(inboxPage)
        return content
    }

    static createAddTaskBtn() {
        const btn = document.createElement('button')

    }

    static loadTodayTasks() {
        const content = document.getElementById('display')
        const todayPage = document.createElement('div')
        const todayTitle = document.createElement('h3')
        inboxTitle.innerHTML = 'Today'

        todayPage.appendChild(todayTitle)
        content.appendChild(todayPage)
        return content
    }

    static loadThisWeeksTasks() {
        const content = document.getElementById('display')
        const inboxPage = document.createElement('div')
        const inboxTitle = document.createElement('h3')
        inboxTitle.innerHTML = 'This Week'

        todayPage.appendChild(todayTitle)
        content.appendChild(todayPage)
        return content
    }
}
