const counterNumber = document.querySelectorAll(".counter-num");

counterNumber.forEach((counter) => {
  let interval = setInterval(counterUp, 5);
  let i = 0;
  const countTarget = +(counter.innerText);
  
  function counterUp() {
    i++;
    if (i > countTarget) {
      clearInterval(interval);
    }
    else{
      counter.innerHTML = `${i}`;
    }
  }

});
