window.onload = (function() {
    $(".main").hide();
    var tank = document.getElementById("fishTank");
    var rfish = document.getElementById("red");
    var gfish = document.getElementById("green");
    var bfish = document.getElementById("blue");
    var yfish = document.getElementById("yellow");
    var farr = new Array();                

    add = function(cid){
        if (cid == "1") {
            this.nfish = rfish.cloneNode("true");
        } else if (cid == "2") {
            this.nfish = gfish.cloneNode("true");
        } else if (cid == "3") {
            this.nfish = bfish.cloneNode("true");
        } else if (cid == "4") {
            this.nfish = yfish.cloneNode("true");
        };

        mx = Math.round(Math.random()*568);
        my = Math.round(Math.random()*268);
        this.nfish.style.position = "absolute";
        this.nfish.style.left = mx + "px";
        this.nfish.style.top = my + "px";
        tank.appendChild(this.nfish);                 
        farr.push(this.nfish);                    
        move(farr.length-1);

        this.amount = document.getElementById("mainAmount");
        if (farr.length == 1) {
            amount.innerHTML = "There is " + farr.length + " fish in tank";
        } else {
            amount.innerHTML = "There are " + farr.length + " fish in tank";
        }
    } 

    function move(i) {               
        zx = Math.round(Math.random()*568);
        zy = Math.round(Math.random()*268);

        if (farr[i].className == "flipped" && parseInt(farr[i].style.left, 10) < zx) {
            $(farr[i]).removeClass("flipped");							
        } else if (farr[i].className == "" && parseInt(farr[i].style.left, 10) > zx) {
            $(farr[i]).addClass("flipped");
        }                         

        $(farr[i]).animate({left:zx + "px", top:zy+ "px"}, 3000, function(){
            if (farr.length > i) {
                move(i)
            }
        });
    }          

    unfish = function(){
        $(tank).fadeOut(1500, function() {
            $(tank).fadeIn(1500)
        });
        amount.innerHTML = "Aquarium is empty"
        $(tank).empty();
        farr = [];
    }                
});	

function showMore() {
    $(".details").fadeToggle("slow");
}

function showTank() {
    $(".main").css("visibility", "visible");
    $(".main").slideToggle("slow");
}