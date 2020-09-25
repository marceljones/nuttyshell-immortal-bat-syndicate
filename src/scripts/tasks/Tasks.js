import { getTasks } from "./TasksData.js";
import { TaskForm } from "./TasksForm.js";
import { TasksList } from "./TasksList.js";

const eventHub = document.querySelector("body");

const contentTarget = document.querySelector("#main");

eventHub.addEventListener("taskStateChanged", (e) => {
  getTasks().then((_) => {
    const contentTarget = document.querySelector(".tasksContainer");
    contentTarget.innerHTML = "";
    TaskForm();
    TasksList();
  });
});

export const TasksSetup = () => {
  sessionStorage.setItem("userId", 1);
  contentTarget.innerHTML += `
  <h3>Tasks</h3>
  <div class="tasksForm"></div>
  <div class="tasksContainer"></div>
  `;
  const contentTarget2 = document.querySelector(".tasksContainer");
  contentTarget2.innerHTML = "";
};

export const TasksHTML = () => {};

//This gets the tasks list, then generates the information on the DOM
getTasks().then((_) => {
  TasksSetup();
  TaskForm();
  TasksList();
});