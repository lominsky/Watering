console.log("hello!");
console.log(getData());

function getData()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "data", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
