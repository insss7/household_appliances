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
    clickCount = 0;  // Скидаємо лічильник, щоб почати знову
  }
}

document.getElementById("button2").addEventListener("click", handleSequentialClick);

document.getElementById("button2").addEventListener("click", function () {
  console.log("📌 Це додатковий обробник для кнопки 2");
});

//Створення обʼєкта, який містить метод handleEvent
let eventHandlerObject = {
  handleEvent: function(event) {
    alert("Даруємо знижку 15% на наступне замовлення! 😉");
    
    // Видаляємо обробник події, щоб кнопка більше не реагувала на кліки
    event.currentTarget.removeEventListener("click", this);
  }
};

// Призначення обробника події для кнопки "button3"
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
 