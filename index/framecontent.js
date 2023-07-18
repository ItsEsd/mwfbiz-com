$('#monolg').click(function(){
    $('#frmcontnt').slideDown();
document.getElementById('bizframe').src="https://imi.mwfbiz.com";
// document.getElementById('bizframe').src="http://127.0.0.1:5503/";
document.getElementById('opnintb').href="https://imi.mwfbiz.com";
});
$('#bizgen').click(function(){
    $('#frmcontnt').slideDown();
document.getElementById('bizframe').src="/genesis";
document.getElementById('opnintb').href="/genesis";

});
$('#bizfeat').click(function(){
    $('#frmcontnt').slideDown();
document.getElementById('bizframe').src="/featured";
document.getElementById('opnintb').href="/featured";
});
$('#bizrr').click(function(){
    $('#frmcontnt').slideDown();
document.getElementById('bizframe').src="/reel-random";
document.getElementById('opnintb').href="/reel-random";
});
$('#clsbizfrm').click(function(){
    $('#frmcontnt').slideUp();document.getElementById('bizframe').src="";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function opentrrnt() {
    var modal = document.getElementById("trntmodal");
    modal.style.display = "block";
    document.getElementById('trntln').src="/widgets/torrentz/";
  }
  
  function closetrrnt() {
    var modal = document.getElementById("trntmodal");
    modal.style.display = "none";
    document.getElementById('trntln').src="";
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("trntmodal");
    modal.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });
  });