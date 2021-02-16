/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*Variabele voor de wish buttons*/
var hearts = document.querySelectorAll("button.wish");

/* Functie addToFavorites wordt hier gekoppeld aan click event van elke wish button */
for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", addToFavorites);
}

/* Bepaal welke status de wish button heeft, schakel tegenovergestelde status in. Roep daarna de functie updateWishlist aan om de hoofdteller bij te werken. */
function addToFavorites(event) {
    var clickedHeart = event.target;

    if (clickedHeart.innerHTML == "🧡") {
        clickedHeart.innerHTML = "✅";
        updateWishlist("plus");
        document.querySelector('div').classList = ("");
        setTimeout(function () {
            document.querySelector('div').classList.add("like_anim");
        }, 0);
    } else {
        clickedHeart.innerHTML = "🧡";
        updateWishlist("min");
        document.querySelector('div').classList = ("");
        setTimeout(function () {
            document.querySelector('div').classList.add("remove_anim");
        }, 0);
    }
}

/* Werk de hoofdteller bij door eerst de huidige waarde op te halen en dan afhankelijk van het argument de waarde op te hogen of te verlagen */
function updateWishlist(action) {
    let wishlist = document.querySelector(".wishlist");
    let wishlistAmount = wishlist.querySelector("span");

    let currentAmount = wishlistAmount.innerHTML;
    currentAmount = parseInt(currentAmount);

    let newAmount;

    if (action == "plus") {
        newAmount = currentAmount + 1;
    } else {
        newAmount = currentAmount - 1;
    }

    wishlistAmount.innerHTML = newAmount;

}
