import todoImg from '../assets/to-do.png'
import Project from './project'


export default class UI {

    static content = document.getElementById('display')

    static resetContentBox() {
        this.content.innerHTML = ''
    }

    static loadApp() {
        UI.loadInbox()
        UI.loadButtons()
    }

    static loadButtons() {
        let inboxBtn = document.getElementById('inbox-btn')
        inboxBtn.addEventListener('click', () => {
            console.log('hello')
            this.loadInbox()
        })

        let todayBtn = document.getElementById('today-btn')
        todayBtn.addEventListener('click', () => {
            console.log('today')
            this.loadTodayTasks()
        })

        let thisweekBtn = document.getElementById('week-btn')
        thisweekBtn.addEventListener('click', () => {
            console.log('week')
            this.loadThisWeeksTasks()
        })

        let addProjectBtn = document.getElementById('add-project-btn')
        addProjectBtn.addEventListener('click', () => {
            console.log('adding project!!!')
        })
    }

    static loadInbox() {
        const inboxPage = document.createElement('div')
        const inboxTitle = document.createElement('h3')
        inboxTitle.innerHTML = 'Inbox'
        
        inboxPage.appendChild(inboxTitle)

        UI.resetContentBox()
        this.content.appendChild(inboxPage)
        return this.content
    }

    static loadTodayTasks() {
        const todayPage = document.createElement('div')
        const todayTitle = document.createElement('h3')
        todayTitle.innerHTML = 'Today'

        todayPage.appendChild(todayTitle)
        UI.resetContentBox()
        this.content.appendChild(todayPage)
        return this.content
    }

    static loadThisWeeksTasks() {
        const thisweekPage = document.createElement('div')
        const thisweekTitle = document.createElement('h3')
        thisweekTitle.innerHTML = 'This Week'

        thisweekPage.appendChild(thisweekTitle)
        UI.resetContentBox()

        this.content.appendChild(thisweekPage)
        return this.content
    }
}
