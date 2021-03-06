  
import { Model } from "./game_model.js";
import { View } from "./game_view.js";
import { Controller } from "./game_controller.js";

window.addEventListener("load", async () => {
    let model = new Model();
    let view = new View(model);
    let controller = new Controller(model, view);
    let body = document.querySelector('body');
    body.append(view.div);

    // API choice buttons.
    document.getElementById("cat_button").addEventListener("click", () => {
        view.insertFactClickHandler(1);
        view.showDataView();
    });

    document.getElementById("dog_button").addEventListener("click", () => {
        view.insertFactClickHandler(2);
        view.showDataView();
    });

    document.getElementById("face_button").addEventListener("click", () => {
        view.insertFactClickHandler(3);
        view.showDataView();
    });

    document.getElementById("random_button").addEventListener("click", () => {
        view.insertFactClickHandler(4);
        view.showDataView();
    });

    document.getElementById("reset_button").addEventListener("click", () => {
        view.restartClickHandler();
    });
});