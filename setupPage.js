function add(row, col) {
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "");
    var buttonName =  "button" + row + col;
    element.setAttribute("name", buttonName);
    var funcCall = "clicked(" +  row + ", " + col + ")";
    element.setAttribute("onclick", funcCall);
    var docID = "div"+row+col;
    var currentTD = document.getElementById(docID);
    currentTD.appendChild(element);
}

function addButtonsToTable()
{
    add(0, 0);
    add(0, 1);
    add(0, 2);
    add(1, 0);
    add(1, 1);
    add(1, 2);
    add(2, 0);
    add(2, 1);
    add(2, 2);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}



function setupPage()
{
    addButtonsToTable()
    
//    var number = getUrlVars()["x"];
  //  var mytext = getUrlVars()["text"];
    
}