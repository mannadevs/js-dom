'use strict';

let w;
function startWorker() {
    if(typeof Worker !== 'undefined') {
        if(typeof w == 'undefined') {
            w = new Worker ('worker.js');              
        }


        w.onmessage = function (event) {
            document.getElementById('display').innerHTML = event.data;
        } 
    } else {
        alert('your browser does not support web workers!');
    }
}



function stopWorker() {
    if(typeof Worker !== 'undefined') {
        w.terminate();
        w = undefined;
    } else {
        alert('your browser does not support ');
    }
}