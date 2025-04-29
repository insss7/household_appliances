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

function demo() {
  const info = document.getElementById("info");
  alert("innerHTML: " + info.innerHTML); 
  info.innerHTML = "Цей текст змінено за допомогою innerHTML.";

  alert("outerHTML: " + info.outerHTML); 

  const paragraphs = document.querySelectorAll(".desc");
  paragraphs.forEach((el, index) => {
      alert("Рядок " + (index + 1) + ": " + el.textContent);
  });

  const span = document.getElementById("text-node");
  const textNode = span.firstChild;
  alert("nodeValue: " + textNode.nodeValue);
  alert("data: " + textNode.data);

  textNode.nodeValue = "Новий текст вузла!";
}

// Додаємо новий заголовок через document.write (НЕ рекомендується в реальних проектах, але для демонстрації)
document.write('<h2 style="text-align:center;">Спеціальна пропозиція для вас!</h2>');

// Створюємо новий елемент відгуку
const newReview = document.createElement('div');
newReview.className = 'review';
const reviewText = document.createTextNode('Наталя: "Чудовий сервіс та швидка доставка! Обов\'язково замовлю ще!"');
newReview.append(reviewText);

// Додаємо новий відгук у кінець сторінки перед кнопками
const buttonsDiv = document.querySelector('.buttons');
buttonsDiv.before(newReview);

// Додаємо текст на початок секції "info"
const infoDiv = document.getElementById('info');
const prependText = document.createElement('p');
prependText.textContent = "🔥 Акція тижня: знижки до 30%!";
infoDiv.prepend(prependText);

// Створюємо ще один елемент і вставляємо його після заголовка h1
const specialOffer = document.createElement('p');
specialOffer.textContent = "Не пропустіть наші спеціальні пропозиції!";
const mainTitle = document.querySelector('h1');
mainTitle.after(specialOffer);

// Замінюємо перший відгук новим текстом
const firstReview = document.querySelector('.review');
const replacement = document.createElement('div');
replacement.className = 'review';
replacement.textContent = "Олег: \"Широкий вибір товарів і доступні ціни. Рекомендую!\"";
firstReview.replaceWith(replacement);

// Видаляємо останній відгук через 5 секунд
setTimeout(() => {
    const allReviews = document.querySelectorAll('.review');
    const lastReview = allReviews[allReviews.length - 1];
    lastReview.remove();
}, 5000);