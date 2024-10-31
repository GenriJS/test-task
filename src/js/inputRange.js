document.addEventListener("DOMContentLoaded", function () {

  const rangeSlider = document.querySelector(".applicaction__range-input");
  const rangeValue = document.querySelector(".applicaction__range-percent");

  rangeSlider.addEventListener('input', () => {
    const value = rangeSlider.value;
    rangeValue.textContent = `${value} %`;
  });

});