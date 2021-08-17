export let View = class {
    constructor(model) {
        this.model = model;
    }
    restartClickHandler() {
        // Change the view and reset the model.
        document.getElementById("fact_div").style.display = "none";
        this.model.resetData();
        document.getElementById("choice_div").style.display = "flex";
    }
    showDataView() {
        // Change the view.
        document.getElementById("choice_div").style.display = "none";
        document.getElementById("fact_div").style.display = "flex";
    }
    insertFactClickHandler(select) {
        var cell = document.getElementById("info_div");
        //might be issue here because I don't reset div anywhere
        var fact = document.createElement('div');
        var text = this.model.getData(select);
        fact.innerText = text;
        cell.append(fact);
        return cell;
    }
}