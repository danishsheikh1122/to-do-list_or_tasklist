const btn_add = document.querySelector("#btn_add");
const input_text = document.querySelector("#add_text");
const parent_div = document.querySelector("#list_of_tasks");
const temp_disp = document.querySelector("#temp_disp");
// temp_disp.style.color = "pink";
let text_value = "";
let temp = 1;
let flag = 0;
let task_completed = 0;
btn_add.addEventListener("click", () => {
  if (flag == 0) {
    input_text.style.display = "block";
    input_text.focus();
    flag = 1;
  } else {
    input_text.style.display = "none";

    if (input_text.value == "") {
      alert("please enter some text");
      input_text.style.display = "block";
      text_value = "";
      input_text.focus();
    } else {
      text_value = input_text.value;
      console.log(text_value);
      fun_create_elems();
    }
    flag = 0;
    input_text.value = "";
  }
});

const fun_create_elems = () => {
  parent_div.style.display = "flex";
  parent_div.style.flexDirection = "column";
  parent_div.style.alignItems = "center";
  parent_div.style.gap = "8px";
  const div = document.createElement("div");
  const div_for_btns = document.createElement("div");
  div.setAttribute("class", "new_created");
  div_for_btns.setAttribute("class", "for_btns");
  const txt = document.createElement("span");
  txt.textContent = text_value;
  txt.setAttribute("class", "txt");
  const btn_complete = document.createElement("input");
  const btn_delete = document.createElement("input");

  div.setAttribute("id", `id-${temp}`);
  temp++;
  let check = 0;
  btn_complete.addEventListener("click", () => {
    let hash = "#" + div.id;
    let to_decorate = document.querySelector(hash);
    if (check == 0) {
      // alert(div.id)
      // to_decorate.firstChild.style.color = "red";
      to_decorate.firstChild.style.fontFamily = "zen tokyo zoo";
      to_decorate.firstChild.style.textTransform = "uppercase";
      to_decorate.firstChild.style.fontSize = "2rem";
      to_decorate.firstChild.style.wordSpacing = "0.1rem";
      to_decorate.firstChild.style.textDecoration = "line-through";
      check = 1;
      let parent_div_of_btns = div.childNodes[1];
      let input_btn_complete = parent_div_of_btns.children[0];
      input_btn_complete.setAttribute("value", "undo");
      task_completed++;
      reverse_fun();
      temp_disp.textContent = task_completed + "task completed";
    } else {
      let parent_div_of_btns = div.childNodes[1];
      let input_btn_complete = parent_div_of_btns.children[0];
      input_btn_complete.setAttribute("value", "done");
      to_decorate.firstChild.style.fontFamily = "montserrat";
      to_decorate.firstChild.style.textTransform = "capitalize";
      to_decorate.firstChild.style.fontSize = "2.4rem";
      to_decorate.firstChild.style.wordSpacing = "0.4rem";
      to_decorate.firstChild.style.textDecoration = "none";
      check = 0;
      task_completed--;
      reverse_fun();
      temp_disp.textContent = task_completed + "task completed";
    }
    // console.log(to_decorate);
  });

  btn_delete.addEventListener("click", () => {
    let hash = "#" + div.id;
    let to_remove = document.querySelector(hash);
    to_remove.remove();
    task_completed--;
    reverse_fun();
    temp_disp.textContent = task_completed + "task completed";
  });

  const reverse_fun = () => {
    if(task_completed==-1){
      task_completed=0;
    }
    setTimeout(() => {
      temp_disp.textContent = "task list";
    }, 2000);
  };

  btn_complete.setAttribute("class", "btn");
  btn_complete.setAttribute("type", "button");
  btn_complete.setAttribute("value", "done");

  btn_delete.setAttribute("class", "btn");
  btn_delete.setAttribute("type", "button");
  btn_delete.setAttribute("value", "delete");

  div_for_btns.appendChild(btn_complete);

  div_for_btns.appendChild(btn_delete);
  div.appendChild(txt);
  div.appendChild(div_for_btns);
  // div.textContent=text_value;
  parent_div.appendChild(div);
};

