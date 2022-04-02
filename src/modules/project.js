import Task from "./task"
import { isToday, isThisWeek, parseISO } from 'date-fns'

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

        for(let i = 0; i < this.projectItems.length; i++) {
            let task = this.projectItems[i]
            if (isToday(parseISO(task.getDueDate()))) {
                todayProjectList.push(task)
            }
        }
        return todayProjectList
    }

    getThisWeeksTasks() {
        let weeksProjectList = []

        for(let i = 0; i < this.projectItems.length; i++) {
            let task = this.projectItems[i]
            if (isThisWeek(parseISO(task.getDueDate()))) {
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

    deleteTaskFromProject(name) {
        for (let i = 0; i < this.projectItems.length; i++ ) {
            if (this.projectItems[i].getTitle() === name) {
                this.projectItems.splice(i, 1)
            }
        }
    }
}