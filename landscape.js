var imagesClass0 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass1 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass2 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass3 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass4 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass5 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass6 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass7 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass8 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass9 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imagesClass10 = ["imgHorz1.JPG", "imgHorz2.JPG", "imgHorz3.JPG", "imgAbout.JPG"];
var imageArray = [imagesClass0, imagesClass1, imagesClass2, imagesClass3, imagesClass4, imagesClass5, imagesClass6, imagesClass7, imagesClass8, imagesClass9, imagesClass10];
document.getElementById("shuffle").addEventListener("click", function(){ shuffle(); } );

function shuffle(){    
    numberOfSections = document.getElementsByClassName("imgSection").length;
    selectedArray = [[], [], [], [], [], [], [], [], [], [], []];
    for (sectionNumber = 0; sectionNumber < numberOfSections; sectionNumber++){
        for (imgClass = 0; imgClass < 11; imgClass++){  
            randomIndex = Math.random() * imageArray[imgClass].length | 0;
            selectedImage = imageArray[imgClass][randomIndex];
            selectedArray[imgClass].push(selectedImage);
            imageArray[imgClass].splice(randomIndex, 1);
            containerIndex = imgClass + (sectionNumber * 11);
            document.getElementById("img" + containerIndex).src = selectedImage;
        }
    }

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