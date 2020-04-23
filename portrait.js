// images to be used during shuffle for each class/size of image container
var imagesClass0 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass1 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass2 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass3 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass4 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass5 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass6 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass7 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass8 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass9 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imagesClass10 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG", "img1.JPG", "img5.JPG", "img6.JPG", "img10.JPG"];
var imageArray = [imagesClass0, imagesClass1, imagesClass2, imagesClass3, imagesClass4, imagesClass5, imagesClass6, imagesClass7, imagesClass8, imagesClass9, imagesClass10];

// listener that starts the shuffle
document.getElementById("shuffle").addEventListener("click", function(){ shuffle(); } );

function shuffle(){    
    // number of Sections of images (11 images in a section)
    numberOfSections = document.getElementsByClassName("imgSection").length;

    // array to save the images randomly selected from the arrays
    selectedArray = [[], [], [], [], [], [], [], [], [], [], []];

    // for loops that make the source of each image a file from that container's array of images
    for (sectionNumber = 0; sectionNumber < numberOfSections; sectionNumber++){
        for (imgClass = 0; imgClass < 11; imgClass++){  

            // image selected randomly from image array for that container
            randomIndex = Math.random() * imageArray[imgClass].length | 0;
            selectedImage = imageArray[imgClass][randomIndex];
            selectedArray[imgClass].push(selectedImage);
            
            // selected image is removed from the image array so it is not reused
            imageArray[imgClass].splice(randomIndex, 1);

            // gets the id number to put the image source into
            containerIndex = imgClass + (sectionNumber * 11);
            document.getElementById("img" + containerIndex).src = selectedImage;
        }
    }

    // after shuffle is complete, all selected images are returned to their arrays for use in the next shuffle
    for (sectionNumber = 0; sectionNumber < numberOfSections; sectionNumber++){
        imagesClass0.push(selectedArray[0][sectionNumber]);
        imagesClass1.push(selectedArray[1][sectionNumber]);
        imagesClass2.push(selectedArray[2][sectionNumber]);
        imagesClass3.push(selectedArray[3][sectionNumber]);
        imagesClass4.push(selectedArray[4][sectionNumber]);
        imagesClass5.push(selectedArray[5][sectionNumber]);
        imagesClass6.push(selectedArray[6][sectionNumber]);
        imagesClass7.push(selectedArray[7][sectionNumber]);
        imagesClass8.push(selectedArray[8][sectionNumber]);
        imagesClass9.push(selectedArray[9][sectionNumber]);
        imagesClass10.push(selectedArray[10][sectionNumber]);
    }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg");
//img += document.getElementsByClassName("img2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var which=0;
for(i=0;i< img.length;i++){    
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
	    which=this.alt;
        if(which<img.length) 
            Nextt.src=img[which].src;
	    Prevv.src=img[which-2].src;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
   modal.style.display = "none";
}
var Nextt = document.getElementsByClassName("Next")[0];
Nextt.onclick = function() { 
	
	var img = document.getElementsByClassName("myImg");
	triggerEvent(img[which],'click');
}
var Prevv= document.getElementsByClassName("Prev")[0];
Prevv.onclick = function() { 
	
	var img = document.getElementsByClassName("myImg");
	triggerEvent(img[which-2],'click');
}

function triggerEvent( elem, event ) {
  var clickEvent = new Event( event ); // Create the event.
  elem.dispatchEvent( clickEvent );    // Dispatch the event.
}