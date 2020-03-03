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
const bmr_unit = document.querySelector('#bmr_unit');
const metabolic_age = document.querySelector('#metabolic_age');
const body_water = document.querySelector('#body_water');
const start = document.querySelector('#start');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const done = document.querySelector('#done');
let physique_rating_value = ''; // delete

const user_details_filled = () => {
    if (sessionStorage.age !== '' && sessionStorage.gender !== '' && sessionStorage.age !== undefined && sessionStorage.gender !== undefined) {
        return true;
    }
    return false;
}
const composition_details_filled = () => {
    if (age.value !== '' && height.value !== '' && weight.value !== '' && body_fat.value !== '' && visceral_fat.value !== '' && muscle_mass.value !== '' && physique_rating_value !== '' && bone_mass.value !== '' && bmr.value !== '' && metabolic_age.value !== '' && body_water.value !== '' ) {
        return true;
    }
    return false;
}
const wrong = (detail) => {
    detail.style.background = 'rgb(255, 160, 144)'
}
const right = (detail) => {
    detail.style.background = 'rgb(216, 216, 216)';
}

if (window.location.href === "http://127.0.0.1:5500/html/index.html") {
    if (typeof(Storage) === 'undefined') {
        document.querySelector('#header_msg').innerHTML = 'Unfortunately your browser does not support the type of storage used by this website';
        start.style.visibility = 'hidden'; 
    }

    else {
        start.addEventListener('click', function() {
            window.open('http://127.0.0.1:5500/html/user_details.html', '_self');
        })
    }
}

if (window.location.href === "http://127.0.0.1:5500/html/user_details.html") {
    age.addEventListener('focusout', function() {
        if (age.value > 150 || age.value < 0 || age.value === '') {
            wrong(age);
            sessionStorage.age = '';
        }
        else {
            right(age);
            sessionStorage.age = age.value;
        }
    })
    
    for (let i = 0; i < gender.length; i++) {
        gender[i].addEventListener('click', () => {
            if (i === 0) {
                sessionStorage.gender = 'male';
            }
            else {
                sessionStorage.gender = 'female';
            }
        })
    }

    next.addEventListener('click', function() {
        if (user_details_filled()) {
            window.open('http://127.0.0.1:5500/html/composition_details.html', '_self');
        }
    })
}

if (window.location.href === 'http://127.0.0.1:5500/html/composition_details.html') {
    height.addEventListener('focusout', function() {
        if (height.value === '' || height.value < 0 || (height_unit.value === 'cm' && height.value > 275) || (height_unit.value === 'm' && height.value > 2.75) || (height_unit.value === 'ft' && height.value > 9)) {
            wrong(height);
        }
        else {
            right(height);
        }
    })

    weight.addEventListener('focusout', function() {
        if (weight.value === '' || weight.value < 0 || (weight_unit.value === 'kg' && weight.value > 908) || (weight_unit.value === 'lbs' && weight.value > 2000) || (weight_unit.value === 'st' && weight.value > 143)) {
            wrong(weight);
        }
        else {
            right(weight);
        }
    })

    body_fat.addEventListener('focusout', function() {
        if (body_fat.value === '' || body_fat.value < 0 || body_fat.value > 70) {
            wrong(body_fat);
        }
        else {
            right(body_fat);
        }
    })
    
    visceral_fat.addEventListener('focusout', function() {
        if (visceral_fat.value === '' || visceral_fat.value < 0 || visceral_fat.value > 59) {
            wrong(visceral_fat);
        }
        else {
            right(visceral_fat);
        }
    })
    
    muscle_mass.addEventListener('focusout', function() {
        if (muscle_mass.value === '' || muscle_mass.value < 0 || (weight_unit.value === 'kg' && muscle_mass.value > 908) || (weight_unit.value === 'lbs' && muscle_mass.value > 2000) || (weight_unit.value === 'st' && muscle_mass.value > 143)) {
            wrong(muscle_mass);
        }
        else {
            right(muscle_mass);
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
    
    done.addEventListener('click', function() {
        if (composition_details_filled()) {
            window.open('http://127.0.0.1:5500/html/breakdown.html', '_self');
        }
    })
    
    back.addEventListener('click', function() {
        window.open('http://127.0.0.1:5500/html/index.html', '_self');
    })
}

//saving variables using localstorage

//make name input only accept letters
//hide arrows on number input
//add different ways of adding weight and height into functionality ex (5'6'' for height in feet)
//remove that blue line thing around inputs
//weekly reminder to add input
//save user details using local storage
//Have better wording on the website 
//make a table that saves all the use details that uses local storage like excel
//if the website see's that the user has already used the website then it just goes to updating info