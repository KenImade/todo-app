import Project from "./project"

export default class ProjectList {
    constructor () {
        this.projectList = []
        this.projectList.push(new Project('inbox'))
    }

    addProject(project) {
        this.projectList.push(project)
    }

    getProjects() {
        return this.projectList
    }
}