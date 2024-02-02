/* ©️ mwfbiz.COM  */
$(document).ready(function () {
  var url1 = "https://script.google.com/macros/s/";
  var url2 =
    "AKfycbw3nGG_Xrl9zy7I-gDdCX4C2qNwDju7ee8-EZlb2T86p_oU5_BWmebT7zhm6Ype-97bWA";
  var url = url1 + url2 + "/exec" + "?action=read";

  function loadsphi() {
    $.getJSON(url, function (json) {
      var m = Math.floor(Math.random() * (json.records.length - 1));
      if (m === 0) {
        m = 1;
      }
      document.getElementById("HappyIndex").classList.remove("backhifood");
      document.getElementById("IFpost").classList.remove("backhifood");

      document.getElementById("FDpost").innerHTML =
        '<div class="refpst">' +
        '<a href="' +
        json.records[m].postLink +
        '" target="_blank">' +
        '<img style="cursor:pointer;" src="' +
        json.records[m].postPic +
        '">' +
        '<h4 style="color:#FFD703;">' +
        json.records[m].postTitle +
        "</h4>" +
        "</a>" +
        "<hr></div>";

      var iframeCode = json.records[m].IFpost;
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = iframeCode;
      var iframeElement = tempDiv.querySelector("iframe");

      if (iframeElement) {
        var src = iframeElement.getAttribute("src");
        var width = iframeElement.getAttribute("width");
        var height = iframeElement.getAttribute("height");

        var containerfrm = document.getElementById("ldfrmcon");
        containerfrm.innerHTML = "";
        document.getElementById("IFpost").style.height = height;
        var newIframe = document.createElement("iframe");

        if (!width) {
          width = "100%";
          newIframe.style.background = "#f6f6f6";
        } else {
          newIframe.style.background = "transparent";
        }
        newIframe.src = src;
        newIframe.width = width;
        newIframe.height = height;
        newIframe.style.border = "none";
        newIframe.style.overflow = "hidden";
        newIframe.style.scroll = "no";
        newIframe.frameborder = 0;
        newIframe.allowfullscreen = "true";
        newIframe.allow =
          "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
        containerfrm.appendChild(newIframe);
      }

      document.getElementById("HappyIndex").innerHTML =
        '<div align="center" style="color:#DD161D; font-size:20px;">' +
        json.records[m].HappyIn +
        "</div>";
      document.getElementById("reldphi").style.backgroundColor = "#850404";
      document.getElementById("reldphi").style.cursor = "pointer";
    });
    var urlbzfd = url1 + url2 + "/exec" + "?action=readbzpst";
    $.getJSON(urlbzfd, function (json) {
      document.getElementById("mwfbzfds").innerHTML = "";
      var htmsrc = "";
      for (var gk = 0; gk < json.records.length - 1; gk++) {
        htmsrc += json.records[gk].BIZpst_fd;
      }
      document.getElementById("mwfbzfds").innerHTML =
        '<div class="bizpstfn">' + htmsrc + "</div>";
    });
  }
  loadsphi();
  $("#reldphi").click(function () {
    document.getElementById("reldphi").style.backgroundColor = "#2b2b2b";
    document.getElementById("reldphi").style.cursor = "progress";
    loadsphi();
  });
  $("#myModal").slideDown("slow");
});
