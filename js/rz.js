/* mwfbiz.COM  */
var options = {
    "key": "rzp_live_zeJJQym7llbiEc",
    "amount": "2500000",
    "currency": "INR",
    "name": "M W F - Sponsor",
    "image": "../image/mwfbizlogo.png",
    "handler": function(response) {
      var payid = response.razorpay_payment_id;
      var peid = "Diamond Sponsor";
      var psign= "Diamond Sponsor";
      var refid = "rpc"+Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date(); var currentTime = d.toLocaleString();
      var ur1='https://script.google.com/macros/s/';
var ur2='AKfycbxpVqtT4y1MDj4B1oc-VWI4-fhV3kqDJxzUSyNnkJ_wmQYajdXlU3qtjHdvYzDNEorJ5g';
var url= ur1+ur2+'/exec'+'?callback=ctrlqpcheck&tstamp='+currentTime+ '&tpid='+payid+  '&torid='+peid+ 
'&tpsign='+psign+ '&refid='+refid+  '&action=paycheck';
var request = jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
});
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#4628f0"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function(response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  document.getElementById('diamondsp').onclick = function(e) {
    rzp1.open();
    e.preventDefault();
  }

var optionsP = {
  "key": "rzp_live_zeJJQym7llbiEc",
  "amount": "2000000",
  "currency": "INR",
  "name": "M W F - Sponsor",
  "image": "../image/mwfbizlogo.png",
  "handler": function(response) {
    var payid = response.razorpay_payment_id;
      var peid = "Platinum Sponsor";
      var psign= "Platinum Sponsor";
      var refid = "rpc"+Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date(); var currentTime = d.toLocaleString();
      var ur1='https://script.google.com/macros/s/';
var ur2='AKfycbxpVqtT4y1MDj4B1oc-VWI4-fhV3kqDJxzUSyNnkJ_wmQYajdXlU3qtjHdvYzDNEorJ5g';
var url= ur1+ur2+'/exec'+'?callback=ctrlqpcheck&tstamp='+currentTime+ '&tpid='+payid+  '&torid='+peid+ 
'&tpsign='+psign+ '&refid='+refid+  '&action=paycheck';
var request = jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
});
  },
  "notes": {
    "address": "Razorpay Corporate Office"
  },
  "theme": {
    "color": "#414040"
  }
};
var rzp2 = new Razorpay(optionsP);
rzp2.on('payment.failed', function(response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});
document.getElementById('platinumsp').onclick = function(e) {
  rzp2.open();
  e.preventDefault();
}

var optionsG = {
  "key": "rzp_live_zeJJQym7llbiEc",
  "amount": "1500000",
  "currency": "INR",
  "name": "M W F - Sponsor",
  "image": "../image/mwfbizlogo.png",
  "handler": function(response) {
    var payid = response.razorpay_payment_id;
      var peid = "Gold Sponsor";
      var psign= "Gold Sponsor";
      var refid = "rpc"+Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date(); var currentTime = d.toLocaleString();
      var ur1='https://script.google.com/macros/s/';
var ur2='AKfycbxpVqtT4y1MDj4B1oc-VWI4-fhV3kqDJxzUSyNnkJ_wmQYajdXlU3qtjHdvYzDNEorJ5g';
var url= ur1+ur2+'/exec'+'?callback=ctrlqpcheck&tstamp='+currentTime+ '&tpid='+payid+  '&torid='+peid+ 
'&tpsign='+psign+ '&refid='+refid+  '&action=paycheck';
var request = jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
});
  },
  "notes": {
    "address": "Razorpay Corporate Office"
  },
  "theme": {
    "color": "#ef9115"
  }
};
var rzp3 = new Razorpay(optionsG);
rzp3.on('payment.failed', function(response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});
document.getElementById('goldsp').onclick = function(e) {
  rzp3.open();
  e.preventDefault();
}

var optionsS = {
  "key": "rzp_live_zeJJQym7llbiEc",
  "amount": "500000",
  "currency": "INR",
  "name": "M W F - Sponsor",
  "image": "../image/mwfbizlogo.png",
  "handler": function(response) {
    var payid = response.razorpay_payment_id;
      var peid = "Silver Sponsor";
      var psign= "Silver Sponsor";
      var refid = "rpc"+Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date(); var currentTime = d.toLocaleString();
      var ur1='https://script.google.com/macros/s/';
var ur2='AKfycbxpVqtT4y1MDj4B1oc-VWI4-fhV3kqDJxzUSyNnkJ_wmQYajdXlU3qtjHdvYzDNEorJ5g';
var url= ur1+ur2+'/exec'+'?callback=ctrlqpcheck&tstamp='+currentTime+ '&tpid='+payid+  '&torid='+peid+ 
'&tpsign='+psign+ '&refid='+refid+  '&action=paycheck';
var request = jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
});
  },
  "notes": {
    "address": "Razorpay Corporate Office"
  },
  "theme": {
    "color": "#7c7e7e"
  }
};
var rzp4 = new Razorpay(optionsS);
rzp4.on('payment.failed', function(response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});
document.getElementById('silversp').onclick = function(e) {
  rzp4.open();
  e.preventDefault();
}