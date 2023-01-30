const $boxes = document.querySelectorAll(".box");
// console.log($boxes);

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  $boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();
