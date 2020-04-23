var imagesClass0 = ["photos/BOA.jpg"];
var imagesClass1 = ["photos/imgHorz1.JPG"];
var imagesClass2 = ["photos/atlskyline.jpg"];
var imagesClass3 = ["photos/25park.jpg"];
var imagesClass4 = ["photos/teleskyline.jpg"];
var imagesClass5 = ["photos/moon.jpg"];
var imagesClass6 = ["imgHorz2.JPG"];
var imagesClass7 = ["imgHorz2.JPG"];
var imagesClass8 = ["imgHorz2.JPG"];
var imagesClass9 = ["imgHorz2.JPG"];
var imageArray = [imagesClass0, imagesClass1, imagesClass2, imagesClass3, imagesClass4, imagesClass5, imagesClass6, imagesClass7, imagesClass8, imagesClass9];
document.getElementById("shuffle").addEventListener("click", function(){ shuffle(); } );

function shuffle(){    
    numberOfSections = document.getElementsByClassName("imgSection").length;
    selectedArray = [[], [], [], [], [], [], [], [], [], []];
    for (sectionNumber = 0; sectionNumber < numberOfSections; sectionNumber++){
        for (imgClass = 0; imgClass < 10; imgClass++){  
            randomIndex = Math.random() * imageArray[imgClass].length | 0;
            selectedImage = imageArray[imgClass][randomIndex];
            selectedArray[imgClass].push(selectedImage);
            imageArray[imgClass].splice(randomIndex, 1);
            containerIndex = imgClass + (sectionNumber * 10);
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
    }
}