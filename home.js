var vertSlides = ["imgVert1.jpg", "imgVert2.jpg", "imgVert3.jpg"];
var horzSlides = ["photos/imgHorz3.jpg", "photos/imgHorz4.jpg", "photos/imgHorz5.jpg", "photos/imgHorz6.jpg", "photos/imgHorz2.jpg", "photos/imgHorz1.jpg"];
var slides;
var slideCurrentIndex = 0;
var slide = document.getElementById("slide");
document.getElementById("back").addEventListener("click", function(){ lastSlide();} );
document.getElementById("next").addEventListener("click", function(){ nextSlide();} );

//slides = (checkMobile()) ? vertSlides : horzSlides;
slides = horzSlides;
slide.src = slides[0];

/*
if (checkMobile()){
    slide.style.height = "100%";
    slide.style.width = "100vw";
    document.getElementById("back").style.top = "75vw";
    document.getElementById("back").style.left = "1vw";
    document.getElementById("next").style.top = "75vw";
    document.getElementById("next").style.right = "1vw";
    document.getElementById("arrows").style.fontSize = "5vw";
}
else { // is not mobile browser
    */
    slide.style.height = "45vw";
    slide.style.width = "100%";
    document.getElementById("back").style.top = "25vw";
    document.getElementById("back").style.left = ".6vw";
    document.getElementById("next").style.top = "25vw";
    document.getElementById("next").style.right = ".6vw";

function checkMobile() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

function nextSlide(){
    var link;
    if (slideCurrentIndex < slides.length - 1)
        link = slides[++slideCurrentIndex];
    else{
        slideCurrentIndex = 0;
        link = slides[0];
    }
    slide.src = link;
}

function lastSlide(){
    var link;
    if (slideCurrentIndex > 0)
        link = slides[--slideCurrentIndex];
    else{
        slideCurrentIndex = slides.length - 1;
        link = slides[slides.length - 1];
    }
    slide.src = link;
}

/*
email section
*/

senderName = document.getElementById("name");
email = document.getElementById("email");
subject = document.getElementById("subject");
description = document.getElementById("description");

if (localStorage.getItem("name") !== null)
    senderName.value = localStorage.getItem("name");   
if (localStorage.getItem("email") !== null)
    email.value = localStorage.getItem("email");   
if (localStorage.getItem("subject") !== null)
    subject.value = localStorage.getItem("subject");
if (localStorage.getItem("description") !== null)
    description.innerHTML = localStorage.getItem("description");   

if (localStorage.getItem("name") == null)
    localStorage.setItem("name", "");

if (localStorage.getItem("email") == null)
    localStorage.setItem("email", "");

if (localStorage.getItem("subject") == null)
    localStorage.setItem("subject", "");

if (localStorage.getItem("description") == null)
    localStorage.setItem("description", "");

senderName.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) 
        localStorage.setItem("name", localStorage.getItem("name") + String.fromCharCode(charCode));
};

email.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) 
        localStorage.setItem("email", localStorage.getItem("email") + String.fromCharCode(charCode));
};

subject.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) 
        localStorage.setItem("subject", localStorage.getItem("subject") + String.fromCharCode(charCode));
};

description.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode)
        localStorage.setItem("description", localStorage.getItem("description") + String.fromCharCode(charCode));
};
                    
document.getElementById("submit").addEventListener("click", function(){
    body = localStorage.getItem("description") + "%0D%0A%0D%0AName: " + localStorage.getItem("name") + "%0D%0AContact Email: " + localStorage.getItem("email");
    window.open("mailto:riteshbish540@gmail.com?subject=" + localStorage.getItem("subject") + "&body=" + body);
});

document.getElementById("reset").addEventListener("click", function(){
    description.value = "";
    localStorage.clear();
});
