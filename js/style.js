$('#home_hero_silder').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:30,
    nav:true,
     items: 1,
     navText: ['<img src="images/Right-Angle.png">', '<img src="images/Left-Angle.png">'],
   
})

//******demo slider part start***/
$('#share-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
//****Demo slider part ends*****//