let stat = document.getElementById("status");
let circleCoordinates = [];
let intersecting = false;

addEventListener("click", (event) => { 
    checkAndRemoveCircles();
    drawCircle(event);
});


function checkAndRemoveCircles(){
    let totalCirclesCount = document.querySelectorAll(".circle");
    if(totalCirclesCount.length === 2){
        totalCirclesCount.forEach((circle) => {
            document.body.removeChild(circle);
        })
        circleCoordinates = [];
        intersecting = false;
    }
}

function drawCircle(clickEvent){
    const x_cord = clickEvent.clientX;
    const y_cord = clickEvent.clientY;
    
    const radius = (Math.random() * 100) + 25;

    // create a div and assign a class "circle" to it;
    const divv = document.createElement("div");
    divv.classList.add("circle");
    document.body.appendChild(divv);

    // set the position to fixed;
    divv.style.position = "fixed";

    // set height and width of div to make it a square;
    divv.style.height = radius*2 + "px";
    divv.style.width = radius*2 + "px";

    // apply border-radius to div element to make it a circle;
    divv.style.borderRadius = 50 + "%";
    divv.style.border = 1 + "px solid red";
    divv.style.background = "red";
    divv.style.opacity = 50 + "%";

    // set the position to center of pointer;
    divv.style.left = x_cord - radius + "px";
    divv.style.top = y_cord - radius + "px";

    circleCoordinates.push({x_cord, y_cord, radius});

    let totalCircles = document.querySelectorAll(".circle");
    if(totalCircles.length === 2){
        checkIntersection();
    }
}

function checkIntersection(){
    let x1 = circleCoordinates[0].x_cord;
    let x2 = circleCoordinates[1].x_cord;
    let y1 = circleCoordinates[0].y_cord;
    let y2 = circleCoordinates[1].y_cord;
    let r1 = circleCoordinates[0].radius;
    let r2 = circleCoordinates[1].radius;

    // Calculate the distance between the two centers;
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if(distance <= r1 + r2){
        intersecting = true;
        console.log("Intersecting:", intersecting);
        stat.innerHTML = "TRUE";
    }
    else {
        console.log("Intersecting:", intersecting);
        stat.innerHTML = "FALSE";
    }
    
}


