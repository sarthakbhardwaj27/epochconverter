// function calculate(){
//     console.log("hello")
// }


function calculate(){
    var userInput = document.getElementById("userinput").value;
    
    //check input size
    //check if it is in seconds or milli seconds ....can be dependent on the size
    //confirm if a number is only there
    var result  = new Date(userInput*1000);
    console.log(result)

    var resultdiv = document.getElementById("result");
    resultdiv.innerHTML = `human readable: ${result}`;
}
// function convertEpoch() {
//     // Get the epoch timestamp from the input field
//     var epochInput = document.getElementById("epochInput").value;
  
//     // Check if the input is not empty
//     if (epochInput.trim() === "") {
//       alert("Please enter a valid epoch timestamp.");
//       return;
//     }
  
//     // Convert the epoch timestamp to a Date object
//     var date = new Date(parseInt(epochInput) * 1000);
  
//     // Display the converted date and time
//     var resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "Converted Date and Time: " + date.toUTCString();
//   }
  