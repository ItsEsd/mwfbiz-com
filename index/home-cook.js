/* ©️ mwfbiz.COM  */
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      var cookstr = ca[i].split(name);
      var cook = cookstr[1].split(".");
      var paem = window.atob(cook[1]);
      userprofetch(paem);
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var user = getCookie("_ybizc0");
var usergu = getCookie("_ybizv0");
var userel = getCookie("_ybize0");
var userm = getCookie("_ybizm0");

if (user != "" || userel != "" || userm != "") {
  document.getElementById("falsebacksigup").style.display = "none";
  document.getElementById("sigcontainer").style.display = "none";
} else if (usergu != "") {
  document.getElementById("bizprost").style.display = "none";
  document.getElementById("sgoutmw").style.display = "none";
  setTimeout(function () {
    document.getElementById("falsebacksigup").style.display = "block";
    document.getElementById("sigcontainer").style.display = "block";
  }, 7200000);
} else {
  window.stop();
  window.open("../", "_self");
}
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie =
      name +
      "=true;" +
      "expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=mwfbiz.com";
  }
  setTimeout(function () {
    location.reload();
  }, 2000);
}

function userprofetch(paem) {
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbws_LnpAxZ6MMQK568aMZSOTAFsA2hdFDJkaB9m8aXcwZ9pciuZehl8ocXkRWADIH2dRA";
  var ul1 = ur1 + ur2 + "/exec";
  var url = ul1 + "?callback=profetch&usrd=" + paem + "&action=bizbid";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
}

function profetch(e) {
  var res = e.records;
  if (res != "ID not found!") {
    document.getElementById("bizuserin").innerHTML =
      "<div class='bizusrp'>BIZ user: " +
      res[0].FirstName +
      " " +
      res[0].LastName +
      "<br>User email: " +
      res[0].Email +
      "</div>";
    document.getElementById("bizprost").style.backgroundImage = "none";
  }
}
