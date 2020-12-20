const newtask: HTMLInputElement = (document.getElementById("myInput") as HTMLInputElement);

let amount: number = 0;
// Enter Funktion
newtask.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
            newtask.value = "";
        }
    });

// Neue Task
function addTask(): void { 

        let container: HTMLDivElement = document.createElement("div");
        container.className = "container";

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkOff";

        let label: HTMLLabelElement = document.createElement("label"); 
        label.innerHTML = newtask.value; 
        label.className = "taskText";

        let trash: HTMLElement = document.createElement("i");
        trash.className = "fas fa-trash-alt";

        document.getElementById("todo").appendChild(container);
        container.appendChild(checkbox); 
        container.appendChild(label);
        container.appendChild(trash);

        trash.addEventListener("click", function (): void {
            removeTask(container);
        });

        checkbox.addEventListener("click", function (): void {
            if (checkbox.classList.contains("done")) {
                checkbox.classList.remove("done");
                label.classList.remove("crossedout");
            } else {
                checkbox.classList.add("done");
                label.classList.add("crossedout");
            }
        });

        amount++;
        updateAmount();
    }
// Tasks löschen
function removeTask(container: HTMLDivElement): void {
        container.remove();

        amount--;
        updateAmount();
    }

// Offene Tasks anzeigen 
function updateAmount(): void {
        document.getElementById("Opentasks").innerText = amount + " open tasks";
    }







