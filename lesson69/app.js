var result, w, h, newWindow;
result = document.querySelector("#result");
w = window.innerWidth;
h = window.innerHeight;

result.innerHTML = "Width of boruzer " + w + "<br>" + "Height of brouzer " + h;

function openWindow () {
    newWindow = window.open("https://cdn2.yamaha-motor.eu/prod/product-assets/2021/YZFR6RACE/2021-Yamaha-YZFR6RACE-EU-Icon_Blue-Static-001-03.jpg","newWindow","width = 200 , height = 200");
    // newWindow.document.write("This is one of my whish")
}

function resizeWindow () {
    newWindow.resizeTo(1000,800)
}

function moveWindow () {
    newWindow.moveTo(50,350)
}

moveWindow () 

function closeWindow () {
    newWindow.close()
}
