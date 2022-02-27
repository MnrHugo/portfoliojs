//images qui slide

$(window).scroll(function() {

    var scrollPos = $(this).scrollTop();
    //console.log(scrollPos);
    
    $('.steve').css({
        'width' : 50 - scrollPos/40 + '%'
    })

    $('.steve').css({
        'margin-left' : 26 + scrollPos/85 + '%'
    })
    $('.steve').css({
        'margin-top' : 7 + scrollPos/19 + '%'
    })
    $('.toshop').css({
        'margin-top' : -60 + scrollPos/10 + '%'
    })
    $('.alvolt').css({
        'margin-top' : -60 + scrollPos/10 + '%'
    })
    $('.logo').css({
        'margin-top' : -80 + scrollPos/8.67 + '%'
    })

    $('.kalbasse').css({
        'margin-left' : 200 - scrollPos/9.7 + '%'
    })

    $('.chat').css({
        'margin-left' : -70 + scrollPos/14.6 + '%'
    })
    $('.fastmont').css({
        'margin-top' : 180 - scrollPos/12.7 + '%'
    })
    $('.cock').css({
        'margin-top' : 130 - scrollPos/26.6 + '%'
    })
    $('.drop').css({
        'margin-left' : -60 + scrollPos/14.1+ '%'
    })
    $('.flowz').css({
        'margin-left' : 180 - scrollPos/11.8 + '%'
    })
    $('.cock').css({
        'margin-top' : 150 - scrollPos/18.6 + '%'
    })
    $('.header').css({
        'margin-top' : 0 + scrollPos/1 + '%'
    })
    $('.projettxt').css({
        'margin-top' : -80 + scrollPos/8.8 + '%'
    })

})
//les constant
const imglogo = document.querySelector('.imglogoal');

const imgoutils = document.querySelector('.imgoutils');

const imgcharte = document.querySelector('.imgcharte');

const imganalyse = document.querySelector('.imgpersona');

const imgmaq= document.querySelector('.imgmaq');



//la magie


function magie (nom) {


window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = nom.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        nom.classList.add('active')
    }
})
}

// utiliser function

magie (imglogo)
magie (imgoutils);
magie (imgcharte);
magie (imganalyse);
magie (imgmaq)

//le formulaire


let myForm = document.getElementById('myform');


myForm.addEventListener('submit', function(e) {
    let myInput = document.getElementById('username');
    let myRegex = /^[a-zA-Z-\s]+$/;

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le champs username est requis";

        e.preventDefault()
    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Le noms doit comporter des lettres et tirets";

        e.preventDefault()
    }

});


//le H1 qui bouge au index
var typed = new Typed('#typed', {
    strings: ["Étudiant", "Designer", "Milliardaire"],
    typeSpeed : 100,
    backSpeed : 50,
    loop: true,
    showCursor: false
});