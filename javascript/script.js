//Variables from HTML files:
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const gender = document.getElementsByName('gender');
const height = document.querySelector('#height');
const height2_box = document.querySelector('#height2_box');
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
const unit = document.querySelectorAll('.unit')
const error_msg = document.querySelectorAll('.error_msg');
const mark = document.querySelectorAll('.mark'); 
const start = document.querySelector('#start');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const done = document.querySelector('#done');

//Functions for javascript file:
const user_details_filled = () => {
    if (
        sessionStorage.age !== '' &&
        sessionStorage.gender !== '' &&
        sessionStorage.height_unit !== '' &&
        sessionStorage.weight_unit !== '' &&
        sessionStorage.bmr_unit !== ''
        ) {
        return true;
    }
    return false;
}
const composition_details_filled = () => { //update so that it uses sessionstorage
    if (
        sessionStorage.height !== '' &&
        sessionStorage.weight !== '' &&
        sessionStorage.body_fat !== '' &&
        sessionStorage.visceral_fat !== '' &&
        sessionStorage.muscle_mass !== '' &&
        sessionStorage.bone_mass !== '' &&
        sessionStorage.bmr !== '' &&
        sessionStorage.metabolic_age !== '' &&
        sessionStorage.body_water !== ''
        ) {
        return true;
    }
    return false;
}
const wrong = (detail) => {
    detail.style.background = 'rgb(255, 160, 144)';
}
const right = (detail) => {
    detail.style.background = 'rgb(216, 216, 216)';
}

//Home Page:
if (window.location.pathname === "/html/index.html") {
    //Storage:
    if (typeof(Storage) === 'undefined') {
        document.querySelector('.header_msg').innerHTML = 'Unfortunately your browser does not support the type of storage we use. Try updating your browser or switching to another one.';
        start.classList.add('not');
    }

    else {
        start.addEventListener('click', function() {
            window.open('/html/user_details.html', '_self');
        })
    }
}

//User Details page:
if (window.location.pathname === "/html/user_details.html") {
    //Name:
    sessionStorage.name = '';
    name.addEventListener("keypress", (event) => {
        if ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) && sessionStorage.name.length < 35) {
            name.value += event.key;
            sessionStorage.name = name.value;
            error_msg[0].classList.add('not');        }
        else {
            error_msg[0].classList.remove('not');
            error_msg[0].innerText = '(Please use letters only)';
        }
    });

    //Age:
    sessionStorage.age = '';
    age.addEventListener('focusout', function() {
        if (age.value === '') {
            wrong(age);
            sessionStorage.age = '';
            error_msg[1].classList.remove('not');
            error_msg[1].innerText = "(Required, please provide a valid age)";
            mark[0].innerHTML = '&#10006;'
        }
        else if (age.value > 150) {
            wrong(age);
            sessionStorage.age = '';
            error_msg[1].classList.remove('not');
            error_msg[1].innerText = "(Nobody's that old. Please provide an age lower than 150)";
            mark[0].innerHTML = '&#10006;'
        }
        else if (age.value < 0) {
            wrong(age);
            sessionStorage.age = '';
            error_msg[1].classList.remove('not');
            error_msg[1].innerText = "(You're not even born yet. Please provide a positive age)";
            mark[0].innerHTML = '&#10006;'
        }
        else {
            right(age);
            sessionStorage.age = age.value;
            error_msg[1].classList.add('not');
            mark[0].innerHTML = '&#10004;'
        }
    })
    
    //Gender
    sessionStorage.gender = '';
    for (let i = 0; i < gender.length; i++) {
        gender[i].addEventListener('click', () => {
            if (i === 0) {
                sessionStorage.gender = 'male';
                error_msg[2].classList.add('not');
                mark[1].innerHTML = '&#10004;'
            }
            else {
                sessionStorage.gender = 'female';
                error_msg[2].classList.add('not');
                mark[1].innerHTML = '&#10004;'
            }
        })
    }

    //Height Unit:
    sessionStorage.height_unit = '';
    height_unit.addEventListener('focusout', () => {
        if (height_unit.value === 'Choose') {
            wrong(height_unit);
            sessionStorage.height_unit = '';
            error_msg[3].classList.remove('not');
            error_msg[3].innerText = '(Required, please fill in)';
            mark[2].innerHTML = '&#10006;'
        }
        else {
            sessionStorage.height_unit = height_unit.value;
            error_msg[3].classList.add('not');
            right(height_unit);
            mark[2].innerHTML = '&#10004;'
        }
    } )

    //Weight Unit:
    sessionStorage.weight_unit = '';
    weight_unit.addEventListener('focusout', () => {
        if (weight_unit.value === 'Choose') {
            wrong(weight_unit);
            sessionStorage.weight_unit = '';
            error_msg[4].classList.remove('not');
            error_msg[4].innerText = '(Required, please fill in)';
            mark[3].innerHTML = '&#10006;'
        }
        else {
            sessionStorage.weight_unit = weight_unit.value;
            error_msg[4].classList.add('not');
            right(weight_unit);
            mark[3].innerHTML = '&#10004;'
        }
    } )

    //BMR Unit:
    sessionStorage.bmr_unit = '';
    bmr_unit.addEventListener('focusout', () => {
        if (bmr_unit.value === 'Choose') {
            wrong(bmr_unit);
            sessionStorage.bmr_unit = '';
            error_msg[5].classList.remove('not');
            error_msg[5].innerText = '(Required, please fill in)';
            mark[4].innerHTML = '&#10006;'
        }
        else {
            sessionStorage.bmr_unit = bmr_unit.value;
            error_msg[5].classList.add('not');
            right(bmr_unit);
            mark[4].innerHTML = '&#10004;'
        }
    } )

    //Next:
    next.addEventListener('click', function() {
        if (user_details_filled()) {
            window.open('/html/composition_details.html', '_self');
        }
        else {
            if (sessionStorage.age === '') {
                wrong(age);
                error_msg[1].classList.remove('not');
                error_msg[1].innerText = "(Required, please fill in)";
                mark[0].innerHTML = '&#10006;'
            }
            if (sessionStorage.gender === '') {
                error_msg[2].classList.remove('not');
                error_msg[2].innerText = "(Required, please fill in)";
                mark[1].innerHTML = '&#10006;'
            }
            if (sessionStorage.height_unit === '') {
                wrong(height_unit);
                error_msg[3].classList.remove('not');
                error_msg[3].innerText = "(Required, please fill in)";
                mark[2].innerHTML = '&#10006;'
            }
            if (sessionStorage.weight_unit === '') {
                wrong(weight_unit);
                error_msg[4].classList.remove('not');
                error_msg[4].innerText = "(Required, please fill in)";
                mark[3].innerHTML = '&#10006;'
            }
            if (sessionStorage.bmr_unit === '') {
                wrong(bmr_unit);
                error_msg[5].classList.remove('not');
                error_msg[5].innerText = "(Required, please fill in)";
                mark[4].innerHTML = '&#10006;'
            }
        }
    })
}

//Composition Details page
if (window.location.pathname === '/html/composition_details.html') {
    //Height:
    sessionStorage.height = '';
    unit[0].innerText = `(${sessionStorage.height_unit})`;
    if (sessionStorage.height_unit === 'ft') {
        unit[1].innerText = '(in)';
    }
    height.addEventListener('focusout', function() {
        if (height.value === '') {
            wrong(height);
            sessionStorage.height = '';
            error_msg[0].innerText = '(Required, please provide a valid height)';
            mark[0].innerHTML = '&#10006;'
        }
        else if (height.value < 0) {
            wrong(height);
            sessionStorage.height = '';
            error_msg[0].innerText = "(Please provide a positive height)";
            mark[0].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.height_unit === 'cm' && height.value > 275)) {
            wrong(height);
            sessionStorage.height = '';
            error_msg[0].innerText = "(NThat can't be right. Please provide a height lower than 275cm)";
            mark[0].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.height_unit === 'm' && height.value > 2.75)) {
            wrong(height);
            sessionStorage.height = '';
            error_msg[0].innerText = "(That can't be right. Please provide a height lower than 2.75m)";
            mark[0].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.height_unit === 'ft' && height.value > 9)) {
            height2_box.classList.remove('not');
            wrong(height);
            sessionStorage.height = '';
            error_msg[0].innerText = "(That can't be right. Please provide a height lower than 9ft)";
            mark[0].innerHTML = '&#10006;'
        }
        else {
            right(height);
            sessionStorage.height = height.value;
            error_msg[0].innerText = '';
            mark[0].innerHTML = '&#10004;'
        }
    })

    //Weight:
    sessionStorage.weight = '';
    unit[2].innerText = `(${sessionStorage.weight_unit})`;
    weight.addEventListener('focusout', function() {
        if (weight.value === '') {
            wrong(weight);
            sessionStorage.weight = '';
            error_msg[2].innerText = '(Required, please fill in)';
            mark[2].innerHTML = '&#10006;'
        }
        else if (weight.value < 0) {
            wrong(weight);
            sessionStorage.weight = '';
            error_msg[1].innerText = '(Please provide a positive weight)';
            mark[1].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'kg' && weight.value > 908)) {
            wrong(weight);
            sessionStorage.weight = '';
            error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 908kg)";
            mark[1].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'lbs' && weight.value > 2000)) {
            wrong(weight);
            sessionStorage.weight = '';
            error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 2000lbs)";
            mark[1].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'st' && weight.value > 143)) {
            wrong(weight);
            sessionStorage.weight = '';
            error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 143st)";
            mark[1].innerHTML = '&#10006;'
        }
        else {
            right(weight);
            sessionStorage.weight = weight.value;
            error_msg[1].innerText = '';
            mark[1].innerHTML = '&#10004;'
        }
    })

    //Body Fat:
    sessionStorage.body_fat = '';
    body_fat.addEventListener('focusout', function() {
        if (body_fat.value === '') {
            wrong(body_fat);
            sessionStorage.body_fat = '';
            error_msg[2].innerText = '(Required, please fill in)';
            mark[2].innerHTML = '&#10006;'
        }
        else if (body_fat.value < 0) {
            wrong(body_fat);
            sessionStorage.body_fat = '';
            error_msg[2].innerText = '(Please provide a positive body fat)';
            mark[2].innerHTML = '&#10006;'
        }
        else if (body_fat.value > 70) {
            wrong(body_fat);
            sessionStorage.body_fat = '';
            error_msg[2].innerText = "(That can't be right. Please provide a body fat percentage lower than 70%)";
            mark[2].innerHTML = '&#10006;'
        }
        else {
            right(body_fat);
            sessionStorage.body_fat = body_fat.value;
            error_msg[2].innerText = '';
            mark[2].innerHTML = '&#10004;'
        }
    })
    
    //Visceral Fat:
    sessionStorage.visceral_fat = '';
    visceral_fat.addEventListener('focusout', function() {
        if (visceral_fat.value === '') {
            wrong(visceral_fat);
            sessionStorage.visceral_fat = '';
            error_msg[3].innerText = '(Required, please fill in)';
            mark[3].innerHTML = '&#10006;'
        }
        else if (visceral_fat.value < 0) {
            wrong(visceral_fat);
            sessionStorage.visceral_fat = '';
            error_msg[3].innerText = '(Please provide a positive visceral fat)';
            mark[3].innerHTML = '&#10006;'
        }
        else if (visceral_fat.value > 59) {
            wrong(visceral_fat);
            sessionStorage.visceral_fat = '';
            error_msg[3].innerText = "(That can't be right. Please provide a visceral fat lower than 59)";
            mark[3].innerHTML = '&#10006;'
        }
        else {
            right(visceral_fat);
            sessionStorage.visceral_fat = visceral_fat.value;
            error_msg[3].innerText = '';
            mark[3].innerHTML = '&#10004;'
        }
    })
    
    //Muscle Mass:
    sessionStorage.muscle_mass = '';
    unit[2].innerText = `(${sessionStorage.weight_unit})`;
    muscle_mass.addEventListener('focusout', function() {
        if (muscle_mass.value === '') {
            wrong(muscle_mass);
            sessionStorage.muscle_mass = '';
            error_msg[4].innerText = "(Required, please fill in)";
            mark[4].innerHTML = '&#10006;'
        }
        else if (muscle_mass.value < 0) {
            wrong(muscle_mass);
            sessionStorage.muscle_mass = '';
            error_msg[4].innerText = "(Please provide a positive muscle mass)";
            mark[4].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'kg' && muscle_mass.value > 908)) {
            wrong(muscle_mass);
            sessionStorage.muscle_mass = '';
            error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 908kg)";
            mark[4].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'lbs' && muscle_mass.value > 2000)) {
            wrong(muscle_mass);
            sessionStorage.muscle_mass = '';
            error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 2000lbs)";
            mark[4].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'st' && muscle_mass.value > 143)) {
            wrong(muscle_mass);
            sessionStorage.muscle_mass = '';
            error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 143st)";
            mark[4].innerHTML = '&#10006;'
        }
        else {
            right(muscle_mass);
            sessionStorage.muscle_mass = muscle_mass.value;
            error_msg[4].innerText = '';
            mark[4].innerHTML = '&#10004;'
        }
    })
    
    //Physique Rating:
    sessionStorage.physique_rating = '';
    physique_rating.addEventListener('focusout', function() {
        if (physique_rating.value === 'Choose') {
            wrong(physique_rating);
            sessionStorage.physique_rating = '';
            error_msg[5].innerText = '(Required, please fill in)';
            mark[5].innerHTML = '&#10006;'
        }
        else {
            sessionStorage.physique_rating = physique_rating.value;
            error_msg[5].innerText = '';
            right(physique_rating);
            mark[5].innerHTML = '&#10004;'
        }
        
    })
    
    //Bone Mass
    sessionStorage.bone_mass = '';
    unit[3].innerText = `(${sessionStorage.weight_unit})`;
    bone_mass.addEventListener('focusout', function() {
        if (bone_mass.value === '') {
            wrong(bone_mass);
            sessionStorage.bone_mass = '';
            error_msg[6].innerText = "(Required, please fill in)";
            mark[6].innerHTML = '&#10006;'
        }
        else if (bone_mass.value < 0) {
            wrong(bone_mass);
            sessionStorage.bone_mass = '';
            error_msg[6].innerText = "(Please provide a positive bone mass)";
            mark[6].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'kg' && bone_mass.value > 36)) {
            wrong(bone_mass);
            sessionStorage.bone_mass = '';
            error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 36kg)";
            mark[6].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'lbs' && bone_mass.value > 80)) {
            wrong(bone_mass);
            sessionStorage.bone_mass = '';
            error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 80lbs)";
            mark[6].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.weight_unit === 'st' && bone_mass.value > 6)) {
            wrong(bone_mass);
            sessionStorage.bone_mass = '';
            error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 6st)";
            mark[6].innerHTML = '&#10006;'
        }
        else {
            right(bone_mass);
            sessionStorage.bone_mass = bone_mass;
            error_msg[6].innerText = '';
            mark[6].innerHTML = '&#10004;'
        }
    })
    
    //BMR:
    sessionStorage.bmr = '';
    unit[4].innerText = `(${sessionStorage.bmr_unit})`;
    bmr.addEventListener('focusout', function() {
        if (bmr.value === '') {
            wrong(bmr);
            sessionStorage.bmr = '';
            error_msg[7].innerText = "(Required, please fill in)";
            mark[7].innerHTML = '&#10006;'
        }
        else if (bmr.value < 0) {
            wrong(bmr);
            sessionStorage.bmr = '';
            error_msg[7].innerText = "(Please provide a positive BMR)";
            mark[7].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.bmr_unit === 'kcal' && bmr.value > 5000)) {
            wrong(bmr);
            sessionStorage.bmr = '';
            error_msg[7].innerText = "(That can't be right. Please provide a BMR lower than 5000kcal)";
            mark[7].innerHTML = '&#10006;'
        }
        else if ((sessionStorage.bmr_unit === 'kJ' && bmr.value > 21000)) {
            wrong(bmr);
            sessionStorage.bmr = '';
            error_msg[7].innerText = "(That can't be right. Please provide a BMR lower than 21000kJ)";
            mark[7].innerHTML = '&#10006;'
        }
        else {
            right(bmr);
            sessionStorage.bmr = bmr.value;
            error_msg[7].innerText = '';
            mark[7].innerHTML = '&#10004;'
        }
    })
    
    //Metabolic Age:
    sessionStorage.metabolic_age = '';
    metabolic_age.addEventListener('focusout', function() {
        if (metabolic_age.value === '') {
            wrong(metabolic_age);
            sessionStorage.metabolic_age = '';
            error_msg[8].innerText = "(Required, please fill in)";
            mark[8].innerHTML = '&#10006;'
        }
        else if (metabolic_age.value < 0) {
            wrong(metabolic_age);
            sessionStorage.metabolic_age = '';
            error_msg[8].innerText = "(Please provide a positive metabolic age)";
            mark[8].innerHTML = '&#10006;'
        }
        else if (metabolic_age.value > 200) {
            wrong(metabolic_age);
            sessionStorage.metabolic_age = '';
            error_msg[8].innerText = "(That can't be right. Please provide a metabolic age lower than 200)";
            mark[8].innerHTML = '&#10006;'
        }
        else {
            right(metabolic_age)
            sessionStorage.metabolic_age = metabolic_age.value;
            error_msg[8].innerText = '';
            mark[8].innerHTML = '&#10004;'
        }
    })
    
    //Body Water:
    sessionStorage.body_water = '';
    body_water.addEventListener('focusout', function() {
        if (body_water.value === '') {
            wrong(body_water);
            sessionStorage.body_water = '';
            error_msg[9].innerText = "(Required, please fill in)";
            mark[9].innerHTML = '&#10006;'
        }
        else if (body_water.value < 0) {
            wrong(body_water);
            sessionStorage.body_water = '';
            error_msg[9].innerText = "(Please provide a positive body water)";
            mark[9].innerHTML = '&#10006;'
        }
        else if (body_water.value > 100) {
            wrong(body_water);
            sessionStorage.body_water = '';
            error_msg[9].innerText = "(That can't be right. Please provide a body water percentage lower than 100%)";
            mark[9].innerHTML = '&#10006;'
        }
        else {
            right(body_water);
            sessionStorage.body_water = body_water.value;
            error_msg[9].innerText = '';
            mark[9].innerHTML = '&#10004;'
        }
    })
    
    //Done:
    done.addEventListener('click', function() {
        if (composition_details_filled()) {
            window.open('/html/progress.html', '_self');
        }
        else {
            if (sessionStorage.height === '') {
                wrong(height);
                error_msg[0].innerText = "(Required, please fill in)";
                mark[0].innerHTML = '&#10006;'
            }
            if (sessionStorage.weight === '') {
                wrong(weight);
                error_msg[1].innerText = "(Required, please fill in)";
                mark[1].innerHTML = '&#10006;'
            }
            if (sessionStorage.body_fat === '') {
                wrong(body_fat);
                error_msg[2].innerText = "(Required, please fill in)";
                mark[2].innerHTML = '&#10006;'
            }
            if (sessionStorage.visceral_fat === '') {
                wrong(visceral_fat);
                error_msg[3].innerText = "(Required, please fill in)";
                mark[3].innerHTML = '&#10006;'
            }
            if (sessionStorage.muscle_mass === '') {
                wrong(muscle_mass);
                error_msg[4].innerText = "(Required, please fill in)";
                mark[4].innerHTML = '&#10006;'
            }
            if (sessionStorage.physique_rating === '') {
                wrong(physique_rating);
                error_msg[5].innerText = "(Required, please fill in)";
                mark[5].innerHTML = '&#10006;'
            }
            if (sessionStorage.bone_mass === '') {
                wrong(bone_mass);
                error_msg[6].innerText = "(Required, please fill in)";
                mark[6].innerHTML = '&#10006;'
            }
            if (sessionStorage.bmr === '') {
                wrong(bmr);
                error_msg[7].innerText = "(Required, please fill in)";
                mark[7].innerHTML = '&#10006;'
            }
            if (sessionStorage.metabolic_age === '') {
                wrong(metabolic_age);
                error_msg[8].innerText = "(Required, please fill in)";
                mark[8].innerHTML = '&#10006;'
            }
            if (sessionStorage.body_water === '') {
                wrong(body_water);
                error_msg[9].innerText = "(Required, please fill in)";
                mark[9].innerHTML = '&#10006;'
            }
        }
    })
    
    //Back:
    back.addEventListener('click', function() {
        window.open('/html/user_details.html', '_self');
    })
}

//Progress page:
if (window.location.pathname === '/html/progress.html') {
}

//format issues

//enter must trigger focus out
//maybe quiker errror messages
//make a table that saves all the use details that uses local storage like excel
//if name is undefined then address user as you
//if the website see's that the user has already used the website then it just goes to updating info
//weekly reminder to add input
//if user browser does not support then show images of browsers that do 
//Have better wording on the website 
//Remove error message when someone unfocusses
//helpful error messages like what a person needs to do