function handleAttributeClick() {
  alert("🇺🇦 Дякуємо, що підтримуєте вітчизняного виробника!");
}
 
let targetElement = document.getElementById('target');
let logElement = document.getElementById('log');
let colorChangedLogged = false;

targetElement.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'lightgreen';
});

targetElement.addEventListener('mouseout', function(event) {
  const from = event.relatedTarget;
  if (!targetElement.contains(from)) {
      event.target.style.backgroundColor = 'lightblue';
      if (!colorChangedLogged) {
          logElement.innerText = `цей день буде чудовим!`;
          colorChangedLogged = true;
      }
  }
});

let dragElement = document.getElementById("dragElement");
let dropZone = document.getElementById("dropZone");
let offsetX, offsetY;

dragElement.addEventListener ("mousedown", dragStart);

function dragStart(e) {
  e.preventDefault(); 
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