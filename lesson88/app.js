function getDOM() {
    var findElement, i, message='';
    findElement = document.forms['frmDOM']
    for(i=0;i<findElement.length;i++) {
        message += findElement[i].value + ",";
    }
    result = document.querySelector('#result')
    result.innerHTML = message;
}

function printAlert() {
    alert(document.anchors[1].innerHTML)
    alert(document.body.innerHTML)
}

