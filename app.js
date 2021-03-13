$(document).ready(function () {
  var stockName = "TSLA";
  // https://financialmodelingprep.com/developer/docs
  var url =
    "https://financialmodelingprep.com/api/v3/company/profile/" +
    stockName +
    "";

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    crossDomain: true,
    success: function (response) {
      let resp = [response.profile];
      console.log(response);

      for (var key in response) {
        if ((key = "profile")) {
          console.log(key);
          console.log(response[key].address);
          console.log(response[key].website);
          var des = response[key].description;
          $("#lists").html(des);
        }
      }
    },

    // error: function (xhr, status) {
    //   alert("error");
    // },
  });
});
