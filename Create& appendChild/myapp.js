var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; background:blue;";

element.onclick = function() { alert('hello'); };

//document.body.appendChild(element);


var target = document.getElementById('yellow');

document.body.insertBefore(element, target); // now the blue the div element is on top of the yellow one.