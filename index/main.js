$(document).ready(function(){
    document.getElementById('premiumpromo').innerHTML=" <p>👑 OBDM User (BIZ Admin) 7,200/- per year</p>";
    });

$('#promodiv_l').click(function(){
    $('#promodiv').slideUp('fast');
    document.getElementById('promodiv').style.height = '0px';
});
$('#showpromodiv').click(function(){
    $('#promodiv').slideDown('fast');
    document.getElementById('promodiv').style.height = '100%';
});