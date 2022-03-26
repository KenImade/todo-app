import Task from "./task"
import { isToday, isThisWeek } from 'date-fns'

export default class Project {
    constructor(name) {
        this.name = name
        this.projectItems = []
    }

    getName() {
        return this.name
    }

    getTodaysProjecs() {
        let todayProjectList = []

        for(task in this.projectItems) {
            if (isToday(task.getDueDate)) {
                todayProjectList.push(task)
            }
        }
        return todayProjectList
    }

    getThisWeeksProjects() {
        let weeksProjectList = []

        for (task in this.projectItems) {
            if (isThisWeek(task.getDueDate)) {
                weeksProjectList.push(task)
            }
        }
        return weeksProjectList
    }

    getProjects() {
        return this.projectItems
    }

    addTaskToProject(name, desc) {
        task = new Task(name, desc)
        this.projectItems.push(task)
    }

    getTaskFromProject(name) {
        for (task in this.projectItems) {
            if (task.name === name) {
                return task
            }
        }
    }

    deleteTaskFromProject(name) {
        for (let i = 0; i < this.projectItems+1; i++ ) {
            if (this.projectItems[i].name === name) {
                this.projectItems.splice(i, 1)
            }
        }
    }
}