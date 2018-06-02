


function identifyById() {
    console.log(document.getElementById('para1'));
    
}

function identifyByClass() {
console.log(document.getElementsByClassName("class1"));
}

function byTag() {
console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    document.getElementById("block1").style.background="blue";
}

function increaseFont() {
    document.getElementById("block2").style.fontSize = "xx-large";
}

function changeFontColor() {
    document.getElementById("block3").style.color = "green";

}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hide() {
    document.getElementById("block4").style.visibility = "hidden";
}


function changeBackColor(x,y)

{
document.getElementsByClassName("box1").style.background="blue";

}


function animated()
{
    
    console.log("hi");
    alert("hi");
    document.getElementById('box5').style.position ="relative";
    document.getElementById('box5').style.animation="myanimation"
    document.getElementById('box5').style.animationDuration='2s';


}


function numbersOnly(event)

{

    var iKeyCode = (event.which) ? event.which : eventt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}

function addAdjacent() {
    var para = document.createElement("p");
    var node = document.createTextNode("I got generated on the fly...");
    para.appendChild(node);
    
    var element = document.getElementById("para2");
    element.appendChild(para);

}

function removePara() {

    var child = document.getElementById("para4");
    child.parentNode.removeChild(child);

}

function animatePara() {
    function myMove()
    {var elem = document.getElementById("box5"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
    }

}
function mouseup()
{

var str=document.getElementById("inputBox1");
str.value=str.value.toUpperCase();
}
function mouseup2()
{

    var str=document.getElementById("inputBox2");
    str.value=str.value.toUpperCase();


}
function CamelCase() {
    var str=document.getElementById("inputBox3");
    str.value=str.value.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
}
          
    
function val() {
    d = document.getElementById("browsers").value;
    alert(d);
}
    

function change()
{


    document.getElementById("final").style.background = "black";
}