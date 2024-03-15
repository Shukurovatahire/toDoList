const myForm = document.getElementById("form");
const box = document.getElementById("box");
const box2 = document.getElementById("box2");
let counter = 1;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(myForm);
  const arr = [];

  for (let [key, value] of data.entries()) {
    const formValue = {};
    formValue[key] = value;
    console.log("formvalue", formValue);
    arr.push(formValue);

    const addTask = (taskValue) => {
      const paragraf = document.createElement("p");
      box2.appendChild(paragraf);
      paragraf.innerHTML = `${counter}. ${taskValue}`;
      counter++;
    };

    console.log("arr", arr);
    addTask(value);
  }
});
