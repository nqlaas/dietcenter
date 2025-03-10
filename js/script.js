// Die nachfolgende Funktion ist dafür da, dass die Einstellungen, dass die Klasse
// Darkmode im Localcache des Computers gespeichert wird, damit beim Neuladen der
// Seite der Darkmode bleibt. Ausserdem bleibt die Klasse des Icons auch nach Neuladen
// geändert, damit man eben immer das richtige Icon für den Darkmode hat.

window.onload = function () {
    var darkModeStatus = localStorage.getItem("darkMode");
    if (darkModeStatus === "enabled") {
        var x = document.getElementById("sitebody");
        x.classList.add("darkmode");
    }

    var buttonStatus = localStorage.getItem("buttonStatus");
    var changebutton = document.getElementById("changebutton");

    if (buttonStatus === "sun") {
        changebutton.classList.remove("fa-moon");
        changebutton.classList.add("fa-sun");
    } else {
        changebutton.classList.remove("fa-sun");
        changebutton.classList.add("fa-moon");
    }
};

// Die nachfolgende Funktion fügt die Klasse burger hinzu, was der Animation
// Des Burger-Menüs dient.

function burger() {
	var x = document.getElementById("icon-navi");
	if (x.className === "icon-nav") {
		x.className += " burger";
	} else {
		x.className = "icon-nav";
	}
}

// Die nachfolgende Funktion fügt die Klasse opened hinzu, was dem Erscheinen
// bzw. öffnen der Navigation dient.

function addmobile() {
	var x = document.getElementById("navbar");
	if (x.className === "navbar") {
		x.className += " opened";
	} else {
		x.className = "navbar";
	}
}

// Die nachfolgende Funktion brauchen wir nur dafür, dass auch nach dem scrollen
// das Burger-nav icon und der Darkmode Schalter die Hintergrundfarbe weiss hat.
// Dies muss so kompliziert umgesetzt werden, da diese immer eine andere Hintergrundfarbe
// brauchen. Beispielsweise auf der Startseite über dem Bild weiss, nach dem scrollen orange usw.

function openednavigation() {
	var x = document.getElementById("navigation");
	if (x.className === "") {
		x.className += "openednav";
	} else {
		x.className = "";
	}
}

// Die nachfolgende Funktion fügt dem Body die klasse darkmode hinzu.
// Per Css wird dann der Hintergrund der Seite auf schwarz geändert.

function changemode() {
    var x = document.getElementById("sitebody");
    if (x.className === "") {
        x.className += " darkmode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        x.className = "";
        localStorage.removeItem("darkMode");
    }
}

// Die nachfolgende Funktion ändert die Klasse des Darkmode Schalters
// so, dass mittels FontAwesome ein anderes Icon erscheint.

function changebutton() {
    var x = document.getElementById("changebutton");
    if (x.classList.contains("fa-moon")) {
        x.classList.remove("fa-moon");
        x.classList.add("fa-sun");
        localStorage.setItem("buttonStatus", "sun");
    } else {
        x.classList.remove("fa-sun");
        x.classList.add("fa-moon");
        localStorage.setItem("buttonStatus", "moon");
    }
}

// Die nachfolgende Funktion fügt dem Header sobald man 50 gescrollt ist
// die Klasse scroll-header hinzu, mit der er per CSS anderes styling bekommt.

window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
});