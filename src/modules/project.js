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

    getTodaysTasks() {
        let todayProjectList = []

        for(task in this.projectItems) {
            if (isToday(task.getDueDate)) {
                todayProjectList.push(task)
            }
        }
        return todayProjectList
    }

    getThisWeeksTasks() {
        let weeksProjectList = []

        for (task in this.projectItems) {
            if (isThisWeek(task.getDueDate)) {
                weeksProjectList.push(task)
            }
        }
        return weeksProjectList
    }

    getAllTasks() {
        return this.projectItems
    }

    addTaskToProject(name, date) {
        let task = new Task(name, date)
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