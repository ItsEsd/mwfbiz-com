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
