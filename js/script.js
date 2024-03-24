{
    const tasks = [
        {
            content: "wyrzucić śmieci",
            done: false,
        },

    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class= "list__item">
            <button class="button button__done js-done">
            ${task.done ? " ✔" : ""}</button>
            <span class="task__content ${task.done ? "task__done" : ""}">${task.content}</span>
            <button class="button button__remove js-remove"><img class="trashcan" src="images/trashcan.png" alt="Trash can icon"></button>
            </li>
            <hr noshade class="hr">
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        const inputField = document.querySelector(".js-newTask");
        document.getElementById("inputField").focus();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");



        form.addEventListener("submit", onFormSubmit);
    };

    init();
}