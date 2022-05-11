$(document).ready(function(){
    document.getElementById('premiumpromo').innerHTML=" <p>👑 OBDM User (BIZ Admin) 720K/- ** Initial Pay: 7,200/-<br>😎 Visitor Pass: 99/- a day</p>";
    });

$('#promodiv_l').click(function(){
    $('#promodiv').slideUp('fast');
    document.getElementById('promodiv').style.height = '0px';
});
$('#showpromodiv').click(function(){
    $('#promodiv').slideDown('fast');
    document.getElementById('promodiv').style.height = '100%';
});