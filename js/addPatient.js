function addPatient() {
    var username = document.getElementById("username").value;
    var duedate = document.getElementById("duedate").value;
    var age = document.getElementById("age").value;
    var temperature = document.getElementById("temperature").value;
    var pressure = document.getElementById("pressure").value;
    var sugar = document.getElementById("sugar").value;
    var bmi = document.getElementById("bmi").value;

  

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 
  var raw = JSON.stringify({
    data: {
      patient: {
        username: username,
        duedate: duedate,
        age: age,
        temperature: temperature,
        pressure: pressure,
        sugar: sugar,
        bmi: bmi,
      },
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://us-central1-final-27d03.cloudfunctions.net/enterPatient",
    requestOptions
  )
    .then((result) => {
      console.log(result);
      alert("Patient Sucessfully Added !");
    })
    .catch((error) => {
      console.log("error", error);
      alert("Patient not added, please try again !");
    });
};

var validatePressure = function(event) {
    var value = event.target.value;
    if(value < 80) {
        alert("That is low blood pressure.Please meet Dr. Anya at Raj Chikitsa Hospital");
    }
    else if(value>120){
        alert("That is high blood pressure.Please meet Dr. Anya at Raj Chikitsa Hospital");
    }
    
}
var validateSugar = function(event) {
    var value = event.target.value;
    if(value < 95) {
        alert("That is low sugar level. Please visit Dr. Radhika at Raj Chikitsa Hospital");
    }
    else if(value>140){
        alert("That is high sugar level. Please visit Dr. Radhika at Raj Chikitsa Hospital");
    }
    
}
var validatebmi = function(event) {
    var value = event.target.value;
    if(value < 18) {
        alert("That is low bmi. Include nuts,butter,vegetable oil in your diet");
    }
    else if(value>23){
        alert("That is high bmi. Decrease sugar and fat intake");
    }
    
}


