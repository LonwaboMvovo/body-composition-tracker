const name = document.querySelector('#name');
const age = document.querySelector('#age');
const gender = document.getElementsByName('gender');
const height = document.querySelector('#height');
const height_unit = document.querySelector('#height_unit');
const weight = document.querySelector('#weight'); 
const weight_unit = document.querySelector('#weight_unit');
const body_fat = document.querySelector('#body_fat');
const visceral_fat = document.querySelector('#visceral_fat');
const muscle_mass = document.querySelector('#muscle_mass');
const physique_rating = document.querySelector('#physique_rating');
const bone_mass = document.querySelector('#bone_mass');
const bmr = document.querySelector('#bmr');
const metabolic_age = document.querySelector('#metabolic_age');
const body_water = document.querySelector('#body_water');
const done = document.querySelector('#done');
const bmr_unit = document.querySelector('#bmr_unit');
let incorrect = false;
let gender_value;
let physique_rating_value;

done.addEventListener('click', function() {
    if (incorrect = false) {
        window.open('http://127.0.0.1:5500/html/breakdown.html', '_self');
    }
    // console.log(name.value);
    // console.log(age.value);
    // for (let i = 0; i > gender.length; i++) {
    //     if (gender[i].checked) {
    //         console.log(gender[i].value);
    //     }
    // }
    // console.log(`${height.value} ${height_unit.value}`);
    // console.log(`${weight.value} ${weight_unit.value}`);
    // console.log(body_fat.value);
    // console.log(visceral_fat.value);
    // console.log(muscle_mass.value);
    // console.log(physique_rating.value);
    // console.log(bone_mass.value);
    // console.log(bmr.value);
    // console.log(metabolic_age.value);
    // console.log(body_water.value);
})

age.addEventListener('focusout', function() {
    if (age.value > 150 || age.value === '') {
        age.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else if (age.value < 0 || age.value === '') {
        age.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else {
        age.style.background = 'rgb(216, 216, 216)';
    }
})

height.addEventListener('focusout', function() {
    if (height.value === '') {
        height.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (height.value < 0) {
        height.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (height_unit.value === 'cm') {
        if (height.value > 275) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (height_unit.value === 'm') {
        if (height.value > 2.75) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (height_unit.value === 'ft') {
        if (height.value > 9) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (height_unit.value === 'in') {
        if (height.value > 108) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
})

height_unit.addEventListener('focusout', function() {
    if (height_unit.value === 'cm') {
        if (height.value > 275) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (height_unit.value === 'm') {
        if (height.value > 2.75) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (height_unit.value === 'ft') {
        if (height.value > 9) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (height_unit.value === 'in') {
        if (height.value > 108) {
            height.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            height.style.background = 'rgb(216, 216, 216)';
        }
    }
})

weight.addEventListener('focusout', function() {
    if (weight.value === '') {
        weight.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (weight.value < 0) {
        weight.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (weight_unit.value === 'kg') {
        if (weight.value > 908) {
            weight.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            weight.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'lbs') {
        if (weight.value > 2000) {
            weight.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            weight.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'st') {
        if (weight.value > 143) {
            weight.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            weight.style.background = 'rgb(216, 216, 216)';
        }
    }
})

weight_unit.addEventListener('focusout', function() {
    if (weight_unit.value === 'kg') {
        if (weight.value > 908 ) {
            weight.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else if (muscle_mass.value > 908 ) {
            muscle_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else if (bone_mass.value > 36) {
            bone_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            weight.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'lbs') {
        if (weight.value > 2000) {
            weight.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else if (muscle_mass.value > 2000 ) {
            muscle_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else if (bone_mass.value > 80) {
            bone_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            weight.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'st') {
        if (weight.value > 143) {
            weight.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else if (muscle_mass.value > 143 ) {
            muscle_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else if (bone_mass.value > 6) {
            bone_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            weight.style.background = 'rgb(216, 216, 216)';
        }
    }
})

gender[0].addEventListener('click', function() {
    gender_value = 'male';
})

gender[1].addEventListener('click', function() {
    gender_value = 'female';
})

body_fat.addEventListener('focusout', function() {
    if (body_fat.value === '') {
        body_fat.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (body_fat.value < 0) {
        body_fat.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (body_fat.value > 70) {
        body_fat.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else {
        body_fat.style.background = 'rgb(216, 216, 216)';
    }
})

visceral_fat.addEventListener('focusout', function() {
    if (visceral_fat.value === '') {
        visceral_fat.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else if (visceral_fat.value < 0) {
        visceral_fat.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else if (visceral_fat.value > 59) {
        visceral_fat.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else {
        visceral_fat.style.background = 'rgb(216, 216, 216)';
    }
})

muscle_mass.addEventListener('focusout', function() {
    if (muscle_mass.value === '') {
        muscle_mass.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (muscle_mass.value < 0) {
        muscle_mass.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (weight_unit.value === 'kg') {
        if (muscle_mass.value > 908) {
            muscle_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            muscle_mass.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'lbs') {
        if (muscle_mass.value > 2000) {
            muscle_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            muscle_mass.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'st') {
        if (muscle_mass.value > 143) {
            muscle_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            muscle_mass.style.background = 'rgb(216, 216, 216)';
        }
    }
})

physique_rating.addEventListener('focusout', function() {
    physique_rating_value = physique_rating.value;
})

bone_mass.addEventListener('focusout', function() {
    if (bone_mass.value === '') {
        bone_mass.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (bone_mass.value < 0) {
        bone_mass.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (weight_unit.value === 'kg') {
        if (bone_mass.value > 36) {
            bone_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bone_mass.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'lbs') {
        if (bone_mass.value > 80) {
            bone_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bone_mass.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (weight_unit.value === 'st') {
        if (bone_mass.value > 6) {
            bone_mass.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bone_mass.style.background = 'rgb(216, 216, 216)';
        }
    }
})

bmr.addEventListener('focusout', function() {
    if (bmr.value === '') {
        bmr.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (bmr.value < 0) {
        bmr.style.background = 'rgb(255, 160, 144)';
        incorrect = true; 
    }
    else if (bmr_unit.value === 'kcal') {
        if (bmr.value > 5000) {
            bmr.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bmr.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (bmr_unit.value === 'kJ') {
        if (bmr.value > 21000) {
            bmr.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bmr.style.background = 'rgb(216, 216, 216)';
        }
    }
})

bmr_unit.addEventListener('focusout', function() {
    if (bmr_unit.value === 'kcal') {
        if (bmr.value > 5000) {
            bmr.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bmr.style.background = 'rgb(216, 216, 216)';
        }
    }
    else if (bmr_unit.value === 'kJ') {
        if (bmr.value > 21000) {
            bmr.style.background = 'rgb(255, 160, 144)';
            incorrect = true; 
        }
        else {
            bmr.style.background = 'rgb(216, 216, 216)';
        }
    }
})

metabolic_age.addEventListener('focusout', function() {
    if (metabolic_age.value > 150 || metabolic_age.value === '' || metabolic_age.value < 0) {
        metabolic_age.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else {
        metabolic_age.style.background = 'rgb(216, 216, 216)';
    }
})

body_water.addEventListener('focusout', function() {
    if (body_water.value > 100 || body_water.value === '' || body_water.value < 0) {
        body_water.style.background = 'rgb(255, 160, 144)';
        incorrect = true;
    }
    else {
        body_water.style.background = 'rgb(216, 216, 216)';
    }
})

//make things required to fill in and only link work if they all filled in
//make name input only accept letters
//hide arrows on number input
//adde different ways of adding weight and height into functionality ex (5'6'' for height in feet)
//remove that blue line thing around inputs