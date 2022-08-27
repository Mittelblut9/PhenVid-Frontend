export default class Errormessage {
    errorDiv = null;

    constructor(message, beforeLoad = false) {
        if(!message) return false;
        this.message = message;
        this.beforeLoad = beforeLoad || false;
        
        this.errorDiv = document.createElement('div');
        this.errorDiv.classList.add('errormessage');

        this.errorDiv.style.margin = "10px"

        if(beforeLoad) {
            this.errorDiv.style.fontWeight = "700";
            this.errorDiv.style.fontFamily = "'Poppins', sans-serif";
        }else {
            this.errorDiv.classList.add('absolute', 'right-0');
            this.errorDiv.style.top = "10%"
        }

        let errorSpan = document.createElement('span');
        errorSpan.innerHTML = message;

        this.errorDiv.append(errorSpan);
        document.body.appendChild(this.errorDiv);
    }
}