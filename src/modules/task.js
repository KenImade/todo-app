export default class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.dueDate;
        this.completeStatus;
    }

    setTitle(title) {
        this.title = title
    }

    setDescription(description) {
        this.description = description
    }

    setDueDate(date) {
        this.dueDate = date
    }

    setCompleteStatus(completeStatus) {
        this.completeStatus = completeStatus
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getDueDate() {
        return this.dueDate
    }

    getCompleteStatus() {
        return this.completeStatus
    }
}