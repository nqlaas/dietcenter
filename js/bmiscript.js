// START CODE FOR BMI CALCULATOR

const btn = document.getElementById('calculate'); //wir sprechen den Button an

btn.addEventListener('click', function(){ //sagt, dass wir die Funktion, die wir unten definieren per klick ausführen sollen
    let height = document.querySelector('#height').value; //Definiert den Wert welcher im HTML mit der ID height definiert worden ist
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') { //sagt das wenn eins der Felder (Gewicht oder Grösse) leer sind, kommt die meldung das man beide Felder ausfüllen muss.
        alert('Bitte Fülle alle Felder aus');
        return
    } 

    //BMI = Gewicht in KG / (height in m * height in m)

    height = height / 100 // höhe in meter umwandeln

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2); //nur noch 2 Kommastallen


    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if (BMI < 18.5) {
        status = 'Untergewichtig';
    } 
    if (BMI >= 18.5 && BMI < 25) {
        status = 'Normalgewichtig';
    } 
    if (BMI >= 25 && BMI < 30) {
        status = 'Übergewichtig';
    } 
    if (BMI >= 30) {
        status = 'Sehr Übergewichtig';
    }

    document.querySelector('.comment').innerHTML = `
    Du bist <span id='comment'>${status}</span>`;

});

// END CODE FOR BMI CALCULATOR