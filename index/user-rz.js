/* ©️ mwfbiz.COM */ var options = {
  key: "rzp_live_zeJJQym7llbiEc",
  amount: "720000",
  currency: "INR",
  name: "mwfbiz.COM - Check Out",
  image: "../image/mwfbizlogo.png",
  callback_url: "https://mwfbiz.com/privacy-policy/",
  handler: function (response) {
    var payid = response.razorpay_payment_id;
    var peid = $("#emailid").val();
    var psign = $("#fname").val() + " " + $("#lname").val();
    var refid =
      "rpc" +
      Math.random().toString(36).substring(2, 8) +
      Math.random().toString(36).substring(2, 10);
    var d = new Date();
    var currentTime = d.toLocaleString();
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 =
      "AKfycbxpVqtT4y1MDj4B1oc-VWI4-fhV3kqDJxzUSyNnkJ_wmQYajdXlU3qtjHdvYzDNEorJ5g";
    var url =
      ur1 +
      ur2 +
      "/exec" +
      "?callback=ctrlqpcheck&tstamp=" +
      currentTime +
      "&tpid=" +
      payid +
      "&torid=" +
      peid +
      "&tpsign=" +
      psign +
      "&refid=" +
      refid +
      "&action=paycheck";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
    document.getElementById("formsign").style.display = "none";
    document.getElementById("veremail").style.display = "none";
    document.getElementById("createpass").style.display = "block";
  },
  theme: { color: "#dd1d16" },
};
var rzp1 = new Razorpay(options);
