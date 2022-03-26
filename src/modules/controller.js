import Project from "./project";
import Task from "./task";

export default class Controller {

    static overlayContainer = document.getElementById('overlay')

    

    static createAddProjectForm() {
        const projectForm = document.createElement('form')
        projectForm.classList.add('add-project-form')

        this.overlayContainer.appendChild(projectForm)
        return this.overlayContainer
    }

    static createTaskForm() {

    }

    static openOverlayContainer() {
        this.overlayContainer.style.display = "block";
        this.overlayContainer.addEventListener('click', this.closeOverlayContainer)
    }

    static closeOverlayContainer() {
        document.getElementById('overlay').style.display = "none";
    }
}