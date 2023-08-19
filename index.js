import {
  CAPS_ROW,
  FUNCTIONS,
  KEYS,
  NUM,
  SHIFT_ROW,
  TAB_ROW,
  CTRL_ROW,
  ARROWS_1,
  ARROWS_2,
  INSERT_ROW,
  PRINT_ROW,
  DELETE_ROW,
  NUM_LOCK_ROW,
  NUM_ROW_1,
  NUM_ROW_2,
  NUM_ROW_3,
  NUM_ROW_4,
} from "./keys.js";


const inputField = document.getElementById('text-area');

function onDivClick(key) {
  document.getElementById('text-area').value += key.value;
}

document.addEventListener("keydown", (event) => {
  console.log("This key is pressed", event.which);
});

function renderKeys(keyVariant, parentId, className) {
  console.log("renderFunctionalKeys");
  console.log(FUNCTIONS);
  console.log(KEYS);
  if (keyVariant && KEYS) {
    const parent = document.getElementById(parentId);
    const functionKeys = keyVariant;
    functionKeys.map((key) => {
      const div = document.createElement("div");
      div.setAttribute("role", "presentation");
      div.id = `${key}`;
      if (!KEYS[key].value2) {
        div.classList.add("basic-key", className[0]);
      } else {
        div.classList.add("basic-key", ...className);
      }
      div.addEventListener("click", () => onDivClick(KEYS[key]));
      if (!KEYS[key].value2) {
        const value = KEYS[key].value;
        if (typeof value === "string") {
          div.textContent = value;
        } else if (value instanceof Node) {
          div.appendChild(value);
        }
      } else {
        console.log("KEYS[key] value:", KEYS[key].value2);
        const div1 = document.createElement("div");
        const value1 = KEYS[key].value2;
        if (typeof value1 === "string") {
          div1.textContent = value1;
        } else if (value1 instanceof Node) {
          div1.appendChild(value1);
        }
        const div2 = document.createElement("div");
        const value2 = KEYS[key].value;
        if (typeof value2 === "string") {
          div2.textContent = value2;
        } else if (value2 instanceof Node) {
          div2.appendChild(value2);
        }
        div.appendChild(div1);
        div.appendChild(div2);
      }
      parent.appendChild(div);
    });
  }
}

renderKeys(FUNCTIONS, "functional", ["functional-key"]);
renderKeys(NUM, "number", ["num-key", "num-key-multi"]);
renderKeys(TAB_ROW, "qwerty-1", ["querty-keys", "querty-keys-multi"]);
renderKeys(CAPS_ROW, "qwerty-2", ["querty-keys", "querty-keys-multi"]);
renderKeys(SHIFT_ROW, "qwerty-3", ["querty-keys", "querty-keys-multi"]);
renderKeys(CTRL_ROW, "qwerty-4", ["querty-keys", "querty-keys-multi"]);
renderKeys(ARROWS_1, "arrow-row1", ["querty-keys", "querty-keys-multi"]);
renderKeys(ARROWS_2, "arrow-row2", ["querty-keys", "querty-keys-multi"]);
renderKeys(PRINT_ROW, "control1", ["control-keys", "querty-keys-multi"]);
renderKeys(INSERT_ROW, "control2", ["control-keys", "querty-keys-multi"]);
renderKeys(DELETE_ROW, "control3", ["control-keys", "querty-keys-multi"]);
renderKeys(NUM_LOCK_ROW, "numpad1", ["querty-keys", "querty-keys-multi"]);
renderKeys(NUM_ROW_1, "numpad2", ["querty-keys", "querty-keys-multi"]);
renderKeys(NUM_ROW_2, "numpad3", ["querty-keys", "querty-keys-multi"]);
renderKeys(NUM_ROW_3, "numpad4", ["querty-keys", "querty-keys-multi"]);
renderKeys(NUM_ROW_4, "numpad5", ["querty-keys", "querty-keys-multi"]);
