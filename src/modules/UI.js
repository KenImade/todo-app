import todoImg from '../assets/to-do.png'
import Project from './project'
import ProjectList from './projectList'


export default class UI {

    static content = document.getElementById('display')

    static projectList = new ProjectList()

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
            this.loadInbox()
        })

        let todayBtn = document.getElementById('today-btn')
        todayBtn.addEventListener('click', () => {
            this.loadTodayTasks()
        })

        let thisweekBtn = document.getElementById('week-btn')
        thisweekBtn.addEventListener('click', () => {
            this.loadThisWeeksTasks()
        })

        let openProjectFormBtn = document.getElementById('add-project-btn')
        openProjectFormBtn.addEventListener('click', () => {
            let form = document.getElementById('add-project-form')
            form.classList.add('open')
        })

        let closeProjectFormBtn = document.getElementById('project-form-cancel-btn')
        closeProjectFormBtn.addEventListener('click', () => {
            UI.closeProjectForm()
        })

        let submitProjectFormBtn = document.getElementById('project-form-submit-btn')
        submitProjectFormBtn.addEventListener('click', () => {
            UI.submitProjectForm()
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

    static addToProjectList(name) {
        let newProject = new Project(name)
        this.projectList.addProject(newProject)
        console.log('creating project!')
        console.log(this.projectList)

        UI.displayProjects()
    }

    static closeProjectForm() {
        let form = document.getElementById('add-project-form')
        form.classList.remove('open')
    }

    static submitProjectForm() {
        let formInput = document.getElementById('pname')
        let projectName = formInput.value
        this.addToProjectList(projectName)
        UI.closeProjectForm()
        formInput.value = ''
    }

    static displayProjects() {
        let projectDisplayDiv = document.getElementById('project-list')
        for (let i = 0; i < this.projectList.getProjects().length+1; i++) {
            console.log('got to loop')
            let project = this.projectList.getProjects()[i]
            let projectBtn = document.createElement('button')
            projectBtn.innerHTML = project.getName()
            projectDisplayDiv.appendChild(projectBtn)
        }
    }
}
