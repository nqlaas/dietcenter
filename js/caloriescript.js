// START CODE FOR CALORIES CALCULATOR

function calculateCalories() {
    var gender = document.getElementById('getgender').value; //hier nehme ich die werte aus dem HTML file und wandle sie in eine Variable um
    var age = document.getElementById('getage').value;
    var weight = document.getElementById('getweight').value;
    var height = document.getElementById('getheight').value;
    var activityLevel = document.getElementById('activityLevel').value;


    var bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var dailyCalories = bmr * activityLevel;

    document.getElementById('getresult').innerHTML = 'Du darfst täglich etwa ' + dailyCalories.toFixed(2) + ' Kalorien essen.';
}

// END CODE FOR CALORIES CALCULATOR