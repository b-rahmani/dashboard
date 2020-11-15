const toggleMenu = document.querySelector(".fix-menu__toggle");
const rightNav = document.querySelector(".right-nav");
const leftSide = document.querySelector(".left__side");
const showAlerts = document.querySelectorAll(".show-alerts");
const alertMassage = document.querySelectorAll(".alert-massage");
const backdrop = document.querySelector(".backdrop");

let flag = true;
const mediaPhone = window.matchMedia("(max-width:460px)");
const deliveryStatus = document.querySelectorAll(".deliveryStatus");
const deliveryToggle = document.querySelectorAll(".deliveryToggle");


const btnAnswer = document.querySelectorAll(".btn-answer");
// touch phone left or right

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      !flag ? toggledMenu() : null;

      overflow();
    } else {
      /* right swipe */
      flag ? toggledMenu() : null;

      overflow();
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

toggledMenu = () => {
  rightNav.classList.toggle("out");
  backdrop.classList.toggle("display-toggle");
  flag = !flag;
};
// right navbar toggle close and open
toggleMenu.addEventListener("click", () => {
  rightNav.classList.toggle("out");
  leftSide.classList.toggle("full");
  backdrop.classList.toggle("display-toggle");
  flag = !flag;
  overflow();
  // flag?document.body.style.overflowY="hidden":document.body.style.overflowY="scroll";
});

backdrop.addEventListener("click", () => {
  backdrop.classList.toggle("display-toggle");
  rightNav.classList.toggle("out");
  flag = !flag;
  overflow();
});

if (mediaPhone.matches) {
  if (flag) {
    rightNav.classList.toggle("out");
    flag = !flag;
    backdrop.classList.toggle("display-toggle");
  }
}
const overflow = () => {
  if (mediaPhone.matches) {
    flag
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }
};

// icons preview massage

function showAlertMenuHandler(i) {
  if (alertMassage[i].classList.contains("isvisible")) {
    alertMassage[i].classList.remove("isvisible");
  } else {
    for (let i = 0; i < showAlerts.length; i++) {
      alertMassage[i].classList.remove("isvisible");
    }
    alertMassage[i].classList.add("isvisible");
  }
}

for (let i = 0; i < showAlerts.length; i++) {
  showAlerts[i].addEventListener("click", function () {
    showAlertMenuHandler(i);
  });
}

//
document.querySelector(".main").onclick = () => {
  for (let i = 0; i < showAlerts.length; i++) {
    alertMassage[i].classList.remove("isvisible");
  }
};



//change deliveryStatue when checked deliveryToggle

for (let i = 0; i < deliveryToggle.length; i++){
  deliveryToggle[i].onchange = () => {
    if (deliveryToggle[i].checked) {
      deliveryStatus[i].textContent = "فعال";
      deliveryStatus[i].classList.replace("deactive","active") ;
     
    } else {
      
      deliveryStatus[i].textContent = "غیر فعال";
      deliveryStatus[i].classList.replace("active", "deactive");
       
    }

  }
};






// set active class in right nav menu
//
// const rightNavLinks=rightNav.querySelectorAll("li a");
//
// for (let i = 0; i < rightNavLinks.length; i++) {
//     rightNavLinks[i].addEventListener("click", function() {
//         const current = rightNav.getElementsByClassName("active");
//
//         current[0].classList.remove("active");
//         this.classList.add("active");
//   });
// }
