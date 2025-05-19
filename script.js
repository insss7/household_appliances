function dialog() {
  let test; 

  do {
      test = parseInt(prompt("Оціни наш магазин від 1 до 10:"));
  } while (isNaN(test) || test < 1 || test > 10);

  if (test >= 5) {
      alert("Дякуємо за високу оцінку! Ми раді, що вам сподобалося 🛒");
  } else {
      alert("Шкода, що ми не виправдали очікувань. Обіцяємо стати кращими!");
  }
}


function Info(lastName, firstName, position = "web-developer") {
  alert("Розробник сторінки:" + "\nІм'я: " + firstName + "\nПрізвище: " + lastName + "\nПосада: " + position);
}

function compare() {
  str1 = prompt("введи перший рядок");
  str2 = prompt("введи другий рядок");

  if (str1.length > str2.length) {
    alert("цей рядок довше: " + str1);
  } else if (str2.length > str1.length) {
    alert("цей рядок довше: " + str2);
  } else {
    alert("вони однакові");
  }
}

function change() {
  const originalColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "#fff0ff"; 

  setTimeout(function () {
      document.body.style.backgroundColor = originalColor;
  }, 30000); 
}

function change_page() {
  location.href = "https://rozetka.com.ua/";
}

// Кнопка 1 — працює лише при подвійному кліку
function handleDoubleClick() {
  alert("💬 Задоволений клієнт - успіх магазину");
}
document.getElementById("button1").ondblclick = handleDoubleClick;

// Кнопка 2 — обробка по черзі при кожному кліку
let clickCount = 0;

function handleSequentialClick() {
  clickCount++;
  if (clickCount === 1) {
    alert("✅ Найприємніші ціни!");
  } else if (clickCount === 2) {
    alert("✅ Найкраща якість");
    clickCount = 0;  
  }
}

document.getElementById("button2").addEventListener("click", handleSequentialClick);
document.getElementById("button2").addEventListener("click", function () {
  console.log("📌 Це додатковий обробник для кнопки 2");
});

let eventHandlerObject = {
  handleEvent: function(event) {
    alert("Даруємо знижку 15% на наступне замовлення! 😉");
    
    event.currentTarget.removeEventListener("click", this);
  }
};

document.getElementById("button3").addEventListener("click", eventHandlerObject);

function handleAttributeClick() {
  alert("🇺🇦 Дякуємо, що підтримуєте вітчизняного виробника!");
}

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("questionlist");

  const lis = Array.from(list.querySelectorAll("li")).slice(0, 4); 

  list.onclick = function (event) {
    const li = event.target.closest("li");
    if (!li || !lis.includes(li)) return;

    lis.forEach(item => item.classList.remove("active"));
    li.classList.add("active");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const actionButtons = document.querySelectorAll("[data-action]");

  const actions = {
    dialog,
    info: () => Info('Непрон', 'Анастасія'),
    compare,
    change,
    change_page,
  };

  actionButtons.forEach(button => {
    button.addEventListener("click", function () {
      const action = this.dataset.action;
      if (action && actions[action]) {
        actions[action]();
      }
    });
  });
});
 
let targetElement = document.getElementById('target');
let logElement = document.getElementById('log');
let colorChangedLogged = false;

targetElement.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'lightgreen';
});

targetElement.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = 'lightblue';
    
    if (!colorChangedLogged) {
        logElement.innerText = `colour is changed`;
        colorChangedLogged = true;
    }
});

let dragElement = document.getElementById("dragElement");
let dropZone = document.getElementById("dropZpone");
let offsetX, offsetY;

dragElement.addEventListener ("mousedown", dragStart);

function dragStart(e) {
  document.addEventListener("mousemove", dragging); 
  document.addEventListener("mouseup", dragEnd);

offsetX = e.clientX - dragElement.offsetLeft;
offsetY = e.clientY - dragElement.offsetTop;
}

function dragging(e) {
dragElement.style.left = e.clientX - offsetX + "px";
dragElement.style.top = e.clientY - offsetY + "px";
}

function dragEnd() {
  document.removeEventListener("mousemove", dragging); 
  document.removeEventListener ("mouseup", dragEnd);

// Check if the element has been dropped into the drop zone
let dropRect = dropZone.getBoundingClientRect();
let dragRect = dragElement.getBoundingClientRect();
if (dragRect.left >= dropRect. left && 
  dragRect.right <= dropRect.right && 
  dragRect.top >= dropRect.top &&
  dragRect.bottom <= dropRect.bottom) {
alert ("Element has been dropped into the drop zone!");
}
}