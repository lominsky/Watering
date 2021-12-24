console.log("hello!");
document.body.append("<h1 id='name'></h1><p id='temp'></p><p id='cap'></p>");
var intervalID = setInterval(updateData(), 30000);
          

function getData()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "data", false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function updateData() {
  let d = getData();  
  document.getElementById("name") = d.name;
  document.getElementById("temp") = "Temperature: " + d.temp + "º C";
  document.getElementById("temp") = "Capacitance (~100-2000): " + d.cap;
}
