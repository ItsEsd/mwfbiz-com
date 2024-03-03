/* mwfbiz.COM  */
$(document).ready(function () {
  document.getElementById("premiumpromo").innerHTML =
    " <p>&#128081; BIZ Admin (OBDM): <a href='https://mwfbiz.com/feedback'>Contact Desk</a> ** Admin Trial - 7200/- &#128081;</p>";
});

$("#promodiv_l").click(function () {
  $("#promodiv").slideUp("fast");
  document.getElementById("promodiv").style.height = "0px";
});
$("#showpromodiv").click(function () {
  $("#promodiv").slideDown("fast");
  document.getElementById("promodiv").style.height = "100%";
});
