const photo_area = document.getElementById("coolimages");
//const photo = photo_area.getelementById("coolimages");

var currentImageIndex = 0;
var imageChangingInterval = 10000;

var photos = new Array("image/1.jpg", "image/2.jpg", "image/3.jpg", 
                        "image/4.jpg", "image/5.jpg", "image/6.jpg",
                         "image/7.jpg", "image/8.jpg", "image/9.jpg", 
                          "image/10.jpg");

function changeImage()
{
    var nextImageIndex = 0;
    while( true )
    {
        nextImageIndex = Math.floor( Math.random() * 10 );
        if(currentImageIndex !== nextImageIndex)
            break;
    }
    
    photo_area.className += "fadeOut";
    setTimeout(function(){
        photo_area.src = photos[nextImageIndex];
        photo_area.className = "";
    }, 1000);
}

function init()
{
    currentImageIndex = nextImageIndex = Math.floor( Math.random() * 10 );
    photo_area.src = photos[nextImageIndex];
    setInterval(changeImage, imageChangingInterval);
}


init();