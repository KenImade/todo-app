import Project from "./project";
import Task from "./task";

export default class Controller {

    static overlayContainer = document.getElementById('overlay')

    static createAddProjectForm() {
        const projectForm = document.createElement('form')
        projectForm.classList.add('add-project-form')
        projectForm.innerHTML = 
            `<label for='pname'>Project Name: </label>
             <input type= 'text' id='pname' name='pname'>
            `
    
        return projectForm
    }

    static createTaskForm() {

    }

    static openAddProjectForm() {
        const form = this.createAddProjectForm()
        this.overlayContainer.innerHTML = ''
        this.overlayContainer.appendChild(form)
        this.openOverlayContainer()
    }

    static openOverlayContainer() {
        this.overlayContainer.style.display = "block";
        this.overlayContainer.addEventListener('click', this.closeOverlayContainer)
    }

    static closeOverlayContainer() {
        let overlay = document.getElementById('overlay')
        overlay.style.display = "none";
        overlay.innerHTML = ''
    }
}