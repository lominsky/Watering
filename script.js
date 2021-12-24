console.log("hello!");
document.body.innerHTML = "<h1 id='name'></h1><h6 id='time' style='color:grey'></h6><p id='temp'></p><p id='cap'></p>";
var intervalID = setInterval(updateData(), 10000);
          

function getData()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "data", false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function updateData() {
  let d = getData();  
  let now = new Date();
  document.getElementById("name").innerText = d.name;
  document.getElementById("time").innerText = "Updated " + now.toLocaleString();
  document.getElementById("temp").innerText = "Temperature: " + d.temp + "º C";
  document.getElementById("cap").innerText = "Capacitance (~100-2000): " + d.cap;
}
