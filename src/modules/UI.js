import todoImg from '../assets/to-do.png'
import Project from './project'
import ProjectList from './projectList'
import Task from './task'

import voca from 'voca'
import {isToday, format, parseISO} from 'date-fns'


export default class UI {

    static content = document.getElementById('display')

    static today = format(new Date(), 'yyyy-MM-dd')

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
        UI.resetContentBox()
        const inboxPage = this.createProjectPage('Inbox')
        this.content.appendChild(inboxPage)
        
        
        let taskDiv = document.getElementById('task-list')
        taskDiv.innerHTML = ''

        let inboxProject = this.projectList.getProject('Inbox')
        let inboxTasks = inboxProject.getAllTasks()
        
        for(let i = 0; i < inboxTasks.length; i++) {
            let task = inboxTasks[i]
            taskDiv.appendChild(UI.createTaskCard(task))
        }
        
        console.log(inboxProject)
        console.log(inboxTasks)

        UI.loadAddTaskBtn()        
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
        if (name === 'Inbox') return
        let newProject = new Project(name)
        this.projectList.addProject(newProject)
        console.log('creating project!')
        console.log(this.projectList)

        UI.displayProjects()
    }

    static closeProjectForm() {
        let form = document.getElementById('add-project-form')
        let projectName = document.getElementById('pname')
        projectName.value = ''
        form.classList.remove('open')
    }

    static submitProjectForm() {
        let formInput = document.getElementById('pname')
        let projectName = voca.capitalize(formInput.value.trim())
        UI.addToProjectList(projectName)
        UI.closeProjectForm()
        UI.openProjectPage(projectName)
        formInput.value = ''
    }

    static getProjects() {
        let allProjects = this.projectList.getAllProjects()
        return allProjects
    }

    static displayProjects() {
        let projectDisplayDiv = document.getElementById('project-list')
        let listOfProjects = this.getProjects()
        projectDisplayDiv.innerHTML = ''
        for (let i = 0; i < listOfProjects.length; i++) {
            let project = listOfProjects[i]
            console.log(project)
            if (project.getName() !== 'Inbox') {
                let projectBtn = document.createElement('button')
                projectBtn.classList.add('project-btn')
                projectBtn.innerHTML = 
                    `<div class = 'project-info' id = 'project-info'>
                        <i class="fa-solid fa-list-ul"></i>
                        <span class='project-name' id = 'project-name'>${project.getName()}</span>
                    </div>
                    <div class = 'trash-icon' id = 'trash-icon'>
                        <i class="fa-solid fa-trash"></i>
                    </div>`
                projectDisplayDiv.appendChild(projectBtn)
            }
        }
        UI.loadProjectBtns()
    }

    static openProjectPage(name) {
        const container = document.getElementById('display')

        container.innerHTML = ''

        const projectPage = this.createProjectPage(name)
        container.appendChild(projectPage)
        UI.loadAddTaskBtn()
    }

    static createTaskBtn() {
        let taskBtn = document.createElement('button')
        taskBtn.classList.add('add-task-btn')
        taskBtn.id = 'add-task-btn'

        taskBtn.innerHTML = `
        <div>
            <i class="fa-solid fa-plus"></i>
            <span>Add Task</span>
        </div>`

        return taskBtn
    }

    static createProjectPage(name) {
        let projectPage = document.createElement('div')
        let projectPageTitle = document.createElement('h3')
        let taskListDiv = document.createElement('div')
        
        projectPage.classList.add('project-page')
        projectPage.id = 'project-page'
        projectPageTitle.id = 'project-title'
        projectPageTitle.classList.add('project-title')
        taskListDiv.classList.add('task-list')
        taskListDiv.id = 'task-list'
        

        projectPageTitle.innerHTML = name

        projectPage.appendChild(projectPageTitle)
        projectPage.appendChild(taskListDiv)
        projectPage.appendChild(this.createTaskBtn())

        return projectPage
    }

    static loadProjectBtns() {
        const projectBtns = document.querySelectorAll('.project-btn')
        projectBtns.forEach((button => button.addEventListener('click', (ev) => {
            if (ev.target.tagName === 'SPAN') {
                UI.openProjectPage(ev.target.innerHTML)
            } else if (ev.target.parentNode.id === 'trash-icon') {
                console.log(ev.target.parentNode.parentNode.querySelector('#project-name').textContent)
                let projectName = ev.target.parentNode.parentNode.querySelector('#project-name').textContent
                this.projectList.deleteProject(projectName)
                UI.displayProjects()
                UI.loadInbox()
            } else {
                return
            }
        })))
    }

    static loadAddTaskBtn() {
        const addTaskBtn = document.getElementById('add-task-btn')
        addTaskBtn.addEventListener('click', () => {
            console.log('getting task button!')
            addTaskBtn.classList.add('hide')
            UI.openAddTaskForm()
        })        
    }

    static openAddTaskForm() {
        let taskDiv = document.getElementById('task-list')
        taskDiv
        taskDiv.appendChild(UI.createAddTaskForm())

        this.loadTaskBtns()
    }

    static loadTaskBtns() {
        const saveTaskBtn = document.getElementById('task-form-submit-btn')
        saveTaskBtn.addEventListener('click', () => {
            console.log('saving task')
            let taskName = document.getElementById('taskname').value
            let dueDate = document.getElementById('taskdate').value

            if (taskName !== '') {
                let projectTitle = document.getElementById('project-title').textContent
                let project = this.projectList.getProject(projectTitle)
             
                project.addTaskToProject(taskName, dueDate)
            }
        })

        const cancelTaskBtn = document.getElementById('task-form-cancel-btn')
        cancelTaskBtn.addEventListener('click', () => {
            console.log('cancelling task')
        })
    }

    static createAddTaskForm() {
        let form = document.createElement('div')
        form.id = 'add-task-form'
        form.classList.add('add-task-form')

        form.innerHTML = 
            `
            <div>
                <input type = 'text' id='taskname' name='taskname' class= 'task-name' required>
                <input type = 'date' id='taskdate' name='taskdate' class= 'task-date' min= '${this.today}' required>
            </div>
            <div class = 'task-form-btns'>
                <button class = 'task-form-submit-btn btn' id = 'task-form-submit-btn'>Submit</button>
                <button class = 'task-form-cancel-btn btn' id = 'task-form-cancel-btn'>Cancel</button>
            </div>
            `
        return form 
    }

    static createTaskCard() {
        let taskCard = document.createElement('div')

        return taskCard
    }
}
