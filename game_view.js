export let View = class {
    constructor(model) {
        this.model = model;
    }
    restartClickHandler() {
        // Change the view and reset the model.
        document.getElementById("fact_div").style.display = "none";
        this.model.resetData();
        var cell = document.getElementById("api_div");
        cell.removeChild();
        document.getElementById("choice_div").style.display = "flex";
    }
    showDataView() {
        // Change the view.
        document.getElementById("choice_div").style.display = "none";
        document.getElementById("fact_div").style.display = "flex";
    }
    insertFactClickHandler(select) {
        var cell = document.getElementById("info_div");
        var fact = document.createElement('api_div');
        //
        // Doing something wrong with the dispay of the API or get request?
        //
        var fact = new Image(100, 200);
        fact.src = this.model.getData(select);
        cell.appendChild(fact);
        return cell;
    }
}