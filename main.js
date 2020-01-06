function openTab(evt, cityName) {

    $(".welcome-text").hide();

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


var romanianToys = [];
var japaneseToys = [];
var frenchToys = [];
var spanishToys = [];

var cart = []

function addToCartRomania() {

    $('#Romania input[type=checkbox]').each(function () {
        if (this.checked) {
            if (!cart.includes($(this).val())) {
                cart.push($(this).val())
            }
        }
    });

    console.log(romanianToys);
    console.log(cart);
}


function addToCartJapan() {

    $('#Japanese input[type=checkbox]').each(function () {
        if (this.checked) {
            if (!cart.includes($(this).val())) {
                cart.push($(this).val())
            }
        }
    });
    console.log(cart);
}


function addToCartFrench() {


    $('#French input[type=checkbox]').each(function () {
        if (this.checked) {
            if (!cart.includes($(this).val())) {
                cart.push($(this).val())
            }
        }
    });
    console.log(cart);
}

function addToCartSpain() {

    $('#Spanish input[type=checkbox]').each(function () {
        if (this.checked) {
            if (!cart.includes($(this).val())) {
                cart.push($(this).val())
            }
        }
    });

    console.log(cart);
}

function createModal() {


    $(".modal-body").empty();
    if (cart.length == 0) {
        $(".modal-body").append("  <h1> Your cart empty :(  </h1> ");
    }
    else {

        $(".modal-body").append("  <h1> Your cart is:  </h1> ");

        $(".modal-body").append('  <ul class="list-group"> ');
        for (i in cart) {
            $(".modal-body").append(' <li class="list-group-item">' + cart[i] + '</li>')
        }

    }

}

function submitPurchase(){
    alert("Your list has been sent!")
    $(".modal-body").empty();
}