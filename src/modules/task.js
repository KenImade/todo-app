export default class Task {
    constructor(title, dueDate='') {
        this.title = title;
        this.dueDate = dueDate;
        this.completeStatus;
    }

    getTitle() {
        return this.title
    }

    getDueDate() {
        return this.dueDate
    }
}