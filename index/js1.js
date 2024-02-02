/* ©️ mwfbiz.COM  */
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("lds-spinner").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
document.addEventListener("fullscreenchange", (event) => {
  if (document.fullscreenElement) {
    document.getElementById("myModal").style.display = "block";
  } else {
    document.getElementById("myModal").style.display = "none";
  }
});
jQuery(document).ready(function () {
  jQuery("#ng").click(function () {
    jQuery("#ogame").toggle();
  });
});
jQuery(document).ready(function () {
  jQuery('[data-toggle="tooltip"]').tooltip();
});

jQuery(document).ready(function () {
  jQuery('[data-toggle="tooltip"]').tooltip();
});

jQuery(document).ready(function () {
  jQuery("#box").hScroll(40);
});

function openNav() {
  $("#mySidenav").slideDown("slow");
  $("#imgcon").show("slow");
}

function closeNav() {
  $("#mySidenav").slideUp("slow");
  $("#imgcon").hide("slow");
}

window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.pause();
  audio.loop = true;
});

window.onscroll = function () {
  scrollFunction();
  scrollFunctionhead();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    $("#fdbackhm").slideDown("slow");
    $("#radiomwf").hide("slow");
  } else {
    $("#fdbackhm").slideUp("slow");
    $("#radiomwf").show("slow");
  }
}

function scrollFunctionhead() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $("#head").slideUp("slow");
    $(".qb").hide();
  } else {
    $("#head").slideDown("slow");
    $(".qb").show();
  }
}

$("#closespon").click(function () {
  $("#spons").hide();
  $("#sponsec").hide();
  $("#backspon").hide();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
$("#clsintroc").click(function () {
  $("#intross").slideUp();
  $("#introcon").slideUp();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
$(".dogespan").click(function () {
  $("#intross").show();
  $("#introcon").show();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

$("#feedbackBtn").click(function () {
  const modal = document.getElementById("bzfd-modal");

  if (modal) {
    modal.style.display = "block";
    return;
  }

  const bzfdElements = document.querySelectorAll('[id^="bzfd"], .bzfd-class');

  let highestZIndex = 0;
  bzfdElements.forEach((element) => {
    const zIndex = parseInt(window.getComputedStyle(element).zIndex);
    if (zIndex > highestZIndex) {
      highestZIndex = zIndex;
    }
  });

  const modalElement = document.createElement("div");
  modalElement.setAttribute("id", "bzfd-modal");
  modalElement.setAttribute(
    "style",
    "display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.9); z-index: " +
      (highestZIndex + 1) +
      ";"
  );

  const closeButton = document.createElement("button");
  closeButton.setAttribute("id", "bzfd-closeBtn");
  closeButton.setAttribute(
    "style",
    "position: absolute; top: 5px; right: 5px; background-color: white; border: none; font-size: 18px; cursor: pointer;color:red;"
  );
  closeButton.innerHTML = "&#10006;";

  modalElement.appendChild(closeButton);

  const loadingMessage = document.createElement("h4");
  loadingMessage.innerText = "Loading...";
  loadingMessage.setAttribute(
    "style",
    "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);font-family:courier;"
  );

  modalElement.appendChild(loadingMessage);

  const iframeContent = document.createElement("iframe");
  iframeContent.setAttribute("id", "bzfd-iframeContent");
  iframeContent.setAttribute("src", "/feedback/");
  iframeContent.setAttribute("frameborder", "0");
  iframeContent.setAttribute(
    "style",
    "width: 100%; height: 100%; display: none;"
  );

  modalElement.appendChild(iframeContent);

  document.body.appendChild(modalElement);

  iframeContent.addEventListener("load", function () {
    loadingMessage.style.display = "none";
    iframeContent.style.display = "block";
  });

  modalElement.style.display = "block";
});

document.addEventListener("click", function (event) {
  const modal = document.getElementById("bzfd-modal");
  if (
    (!modal.contains(event.target) && event.target.id !== "feedbackBtn") ||
    event.target.id === "bzfd-closeBtn"
  ) {
    modal.style.display = "none";
  }
});

function opnbznwsts() {
  $("#nwfrmwdgt").show();
  $("#mksspstbz").hide();
  document.getElementsByClassName("clsbizfd")[0].classList.add("activebzfd");
  document.getElementsByClassName("clsbizfd")[1].classList.remove("activebzfd");
}
function opnbzpst() {
  $("#mksspstbz").show();
  $("#nwfrmwdgt").hide();
  document.getElementsByClassName("clsbizfd")[0].classList.remove("activebzfd");
  document.getElementsByClassName("clsbizfd")[1].classList.add("activebzfd");
}
