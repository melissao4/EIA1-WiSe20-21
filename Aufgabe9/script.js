var newtask = document.getElementById("myInput");
var amount = 0;
// Enter Funktion
newtask.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        addTask();
        newtask.value = "";
    }
});
// Neue Task
function addTask() {
    console.log("task added");
    var container = document.createElement("div");
    container.className = "container";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkOff";
    var label = document.createElement("label");
    label.innerHTML = newtask.value;
    label.className = "taskText";
    var trash = document.createElement("i");
    trash.className = "fas fa-trash-alt";
    document.getElementById("todo").appendChild(container);
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(trash);
    trash.addEventListener("click", function () {
        console.log("task deleted");
        removeTask(container);
    });
    checkbox.addEventListener("click", function () {
        if (checkbox.classList.contains("done")) {
            checkbox.classList.remove("done");
            label.classList.remove("crossedout");
            console.log("undone");
        }
        else {
            checkbox.classList.add("done");
            label.classList.add("crossedout");
            console.log("done");
        }
    });
    amount++;
    updateAmount();
}
// Tasks löschen
function removeTask(container) {
    container.remove();
    amount--;
    updateAmount();
}
// Offene Tasks anzeigen 
function updateAmount() {
    document.getElementById("Opentasks").innerText = amount + " open tasks";
}
//# sourceMappingURL=script.js.map