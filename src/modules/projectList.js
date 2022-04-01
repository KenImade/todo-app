import Project from "./project"

export default class ProjectList {
    constructor () {
        this.projectList = []
        this.projectList.push(new Project('Inbox'))
    }

    addProject(project) {
        this.projectList.push(project)
    }

    getAllProjects() {
        return this.projectList
    }

    getProject(name) {
        for(let i = 0; i < this,this.projectList.length; i++) {
            let project = this.projectList[i]
            if (project.getName() === name) {
                return this.projectList[i]
            }
        }
    }

    deleteProject(name) {
        for(let i = 0; i < this.projectList.length; i++) {
            let project = this.projectList[i]
            if (project.getName() === name) {
                this.projectList.splice(i, 1)
            }
        }
    }
}