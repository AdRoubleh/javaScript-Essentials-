let element = document.getElementsByName('cssProperty'); //global
let el = document.getElementById('modify'); // global




function set() {
    for (let i = 0; i < element.length; i++) {

        let cssProperty = element[i].getAttribute('id');
        let cssValue = element[i].value;

        modify(cssProperty, cssValue); // this is the new parameters 

    }

};

function modify(x, y) {

    el.style[x] = y;

}

document.getElementById('set').addEventListener('click', set);