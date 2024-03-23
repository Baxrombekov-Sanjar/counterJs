// set initial count
let count = 0;

// select value & buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.textContent = count;
      value.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      value.textContent = count;
      value.style.color = "green";
    } else {
      count = 0;
      value.textContent = count;
      value.style.color = "#222";
    }
  });
});
