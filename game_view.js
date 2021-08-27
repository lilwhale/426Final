export let View = class {
    constructor(model) {
        this.model = model;
    }
    restartClickHandler() {
        // Change the view and reset the model.
        document.getElementById("fact_div").style.display = "none";
        document.getElementById("info_div").style.display = "none";
        document.getElementById("reset_button").style.display = "none";
        this.model.resetData();
        var cell = document.getElementById("api");
        cell.remove();
        document.getElementById("choice_div").style.display = "flex";
        document.getElementById("api_buttons").style.display = "flex";
    }
    showDataView() {
        // Change the view.
        document.getElementById("choice_div").style.display = "none";
        document.getElementById("api_buttons").style.display = "none";
        document.getElementById("fact_div").style.display = "flex";
        document.getElementById("info_div").style.display = "flex";
        document.getElementById("reset_button").style.display = "flex";
    }
    async insertFactClickHandler(select) {
        var cell = document.getElementById("api_div");
        var image = new Image(600,600);
        image.id = "api"
        var url = await this.model.getData(select);
        image.src = url;
        cell.appendChild(image);
        return cell;
    }
}