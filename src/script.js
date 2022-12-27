// Button 1
function moveRight(){
    let id = null;
    const elem = document.getElementById("btnSlide");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 150);
    function frame(){
        if (pos == 40)
           clearInterval(id);
        pos ++;
        elem.style.left = pos + 'rem';
    }
}

//Button 3
function myFunction(){
    const x = 10;
    for (let i = 1; i < x; i ++){
        let para = document.createElement("button");
        let node = document.createTextNode("Replicate Me " + i);
        para.appendChild(node);
        let element = document.getElementById("btnRep");
        element.appendChild(para);
    }
}