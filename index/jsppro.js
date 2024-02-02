/* ©️ mwfbiz.COM  */
$(document).ready(function () {
  var url1 = "https://script.google.com/macros/s/";
  var url2 =
    "AKfycbyh_N5MPDhyZGl8AHn1qT-VLC0Urz0sy_S3RA2kkN6shjf0Qky75gVwey9UDai_Njpo";
  var url = url1 + url2 + "/exec" + "?action=read";
  $.getJSON(url, function (json) {
    for (var a = [], i = 0; i < json.records.length - 1; ++i) a[i] = i;
    function shuffle(array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    }
    a = shuffle(a);
    var fin;
    for (var d = 0; d < a.length; d++) {
      fin = a[d];
      document.getElementById("PProfile").innerHTML +=
        '<div class="item-border-wrap">' +
        "<a href=" +
        json.records[fin].PLink +
        ' target="_blank">' +
        '<div class="item">' +
        '<div align="center" >' +
        "<img src=" +
        json.records[fin].ImageLink +
        ">" +
        "<b>" +
        '<div class="Name">' +
        json.records[fin].Name +
        "</b>" +
        "<b>" +
        '<div class="Bio">' +
        json.records[fin].Bio +
        "</b>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
    }
    document.getElementById("ppholdercon").style.backgroundImage = "none";
    var hh = json.records.length;
    var divlen = hh * 250;
    let ball = document.getElementById("PProfile");
    var myVar = setInterval(spostaDiv, 180);
    var margin = 0;
    let l = window.screen.width;
    let w = divlen;
    function spostaDiv() {
      if (w <= 0) {
        w = divlen;
        margin = 0;
      } else if (w >= 0) {
        ball.style.marginLeft = margin + "px";
        margin = margin - 10;
        w = w - 10;
      }
    }
  });
});
