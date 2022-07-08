const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  // change the theme of the website

  document.body.classList.toggle("dark"); /* toggle ile change olduğunda body'e dark class'ını ekleriz. tekrar tıklandığında sileriz. */
});
