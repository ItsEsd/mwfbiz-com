/* mwfbiz.COM  */
$(document).ready(function(){
    document.getElementById('premiumpromo').innerHTML=" <p>👑 Membership (BIZ Admin) 720K/- ** Initial Fee - 7200/- 👑</p>";
    });

$('#promodiv_l').click(function(){
    $('#promodiv').slideUp('fast');
    document.getElementById('promodiv').style.height = '0px';
});
$('#showpromodiv').click(function(){
    $('#promodiv').slideDown('fast');
    document.getElementById('promodiv').style.height = '100%';
});
