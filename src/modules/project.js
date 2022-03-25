import Task from "./task"
import { isToday, isThisWeek } from 'date-fns'

export default class Project {
    constructor() {
        this.projectList = []
    }

    getTodaysProjecs() {
        let todayProjectList = []

        for(task in this.projectList) {
            if (isToday(task.getDueDate)) {
                todayProjectList.push(task)
            }
        }
        return todayProjectList
    }

    getThisWeeksProjects() {
        let weeksProjectList = []

        for (task in this.projectList) {
            if (isThisWeek(task.getDueDate)) {
                weeksProjectList.push(task)
            }
        }
        return weeksProjectList
    }

    getProjects() {
        return this.projectList
    }

    addTaskToProject(name, desc) {
        task = new Task(name, desc)
        this.projectList.push(task)
    }

    getTaskFromProject(name) {
        for (task in this.projectList) {
            if (task.name === name) {
                return task
            }
        }
    }

    deleteTaskFromProject(name) {
        for (let i = 0; i < this.projectList+1; i++ ) {
            if (this.projectList[i].name === name) {
                this.projectList.splice(i, 1)
            }
        }
    }
}