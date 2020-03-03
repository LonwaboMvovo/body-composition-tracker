//Variables from HTML files:
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

//Functions for javascript file:
const user_details_filled = () => {
    if (
        sessionStorage.age !== '' &&
        sessionStorage.gender !== ''
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
    detail.style.background = 'rgb(255, 160, 144)'
}
const right = (detail) => {
    detail.style.background = 'rgb(216, 216, 216)';
}

//Home Page:
if (window.location.pathname === "/html/index.html") {
    //Storage:
    if (typeof(Storage) === 'undefined') {
        document.querySelector('#header_msg').innerHTML = 'Unfortunately your browser does not support the type of storage used by this website';
        start.style.visibility = 'hidden'; 
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
    sessionStorage.name = ''
    name.addEventListener('focusout', () => {
        sessionStorage.name = name.value;
    })

    //Age:
    sessionStorage.age = ''
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
    
    //Gender
    sessionStorage.gender !== ''
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

    //Height Unit:
    sessionStorage.height_unit = 'cm';
    height_unit.addEventListener('focusout', () => {
        sessionStorage.height_unit = height_unit.value;
    } )

    //Weight Unit:
    sessionStorage.weight_unit = 'kg';
    weight_unit.addEventListener('focusout', () => {
        sessionStorage.weight_unit = weight_unit.value;
    } )

    //BMR Unit:
    sessionStorage.bmr_unit = 'kcal';
    bmr_unit.addEventListener('focusout', () => {
        sessionStorage.bmr_unit = bmr_unit.value;
    } )

    //Next:
    next.addEventListener('click', function() {
        if (user_details_filled()) {
            window.open('/html/composition_details.html', '_self');
        }
    })
}

//Composition Details page
if (window.location.pathname === '/html/composition_details.html') {
    //Height: //write the height units in brackets
    sessionStorage.height = '';
    height.addEventListener('focusout', function() {
        if (height.value === '' || height.value < 0 || (sessionStorage.height_unit === 'cm' && height.value > 275) || (sessionStorage.height_unit === 'm' && height.value > 2.75) || (sessionStorage.height_unit === 'ft' && height.value > 9)) {
            wrong(height);
            sessionStorage.height = '';
        }
        else {
            right(height);
            sessionStorage.height = height.value;
        }
    })

    //Weight: //write the weight units in brackets
    sessionStorage.weight = '';
    weight.addEventListener('focusout', function() {
        if (weight.value === '' || weight.value < 0 || (sessionStorage.weight_unit === 'kg' && weight.value > 908) || (sessionStorage.weight_unit === 'lbs' && weight.value > 2000) || (sessionStorage.weight_unit === 'st' && weight.value > 143)) {
            wrong(weight);
            sessionStorage.weight = '';
        }
        else {
            right(weight);
            sessionStorage.weight = weight.value;
        }
    })

    //Body Fat:
    sessionStorage.body_fat = '';
    body_fat.addEventListener('focusout', function() {
        if (body_fat.value === '' || body_fat.value < 0 || body_fat.value > 70) {
            wrong(body_fat);
            sessionStorage.body_fat = '';
        }
        else {
            right(body_fat);
            sessionStorage.body_fat = body_fat.value;
        }
    })
    
    //Visceral Fat:
    sessionStorage.visceral_fat = '';
    visceral_fat.addEventListener('focusout', function() {
        if (visceral_fat.value === '' || visceral_fat.value < 0 || visceral_fat.value > 59) {
            wrong(visceral_fat);
            sessionStorage.visceral_fat = '';
         }
        else {
            right(visceral_fat);
            sessionStorage.visceral_fat = visceral_fat.value;
        }
    })
    
    //Muscle Mass:
    sessionStorage.muscle_mass = '';
    muscle_mass.addEventListener('focusout', function() {
        if (muscle_mass.value === '' || muscle_mass.value < 0 || (sessionStorage.weight_unit === 'kg' && muscle_mass.value > 908) || (sessionStorage.weight_unit === 'lbs' && muscle_mass.value > 2000) || (sessionStorage.weight_unit === 'st' && muscle_mass.value > 143)) {
            wrong(muscle_mass);
            sessionStorage.muscle_mass = '';
        }
        else {
            right(muscle_mass);
            sessionStorage.muscle_mass = muscle_mass.value;
        }
    })
    
    //Physique Rating:
    sessionStorage.physique_rating = physique_rating.value;
    physique_rating.addEventListener('focusout', function() {
        sessionStorage.physique_rating = physique_rating.value;
    })
    
    //Bone Mass
    sessionStorage.bone_mass = '';
    bone_mass.addEventListener('focusout', function() {
        if (bone_mass.value === '' || bone_mass.value < 0 || (sessionStorage.weight_unit === 'kg' && bone_mass.value > 36) || (sessionStorage.weight_unit === 'lbs' && bone_mass.value > 80) || (sessionStorage.weight_unit === 'st' && bone_mass.value > 6)) {
            wrong(bone_mass);
            sessionStorage.bone_mass = '';
        }
        else {
            right(bone_mass);
            sessionStorage.bone_mass = bone_mass;
        }
    })
    
    //BMR: //write the bmr units in brackets
    sessionStorage.bmr = '';
    bmr.addEventListener('focusout', function() {
        if (bmr.value === '' || bmr.value < 0 || (sessionStorage.bmr_unit === 'kcal' && bmr.value > 5000) || (sessionStorage.bmr_unit === 'kJ' && bmr.value > 21000)) {
            wrong(bmr);
            sessionStorage.bmr = '';
        }
        else {
            right(bmr);
            sessionStorage.bmr = bmr.value;
        }
    })
    
    //Metabolic Age:
    sessionStorage.metabolic_age = '';
    metabolic_age.addEventListener('focusout', function() {
        if (metabolic_age.value > 150 || metabolic_age.value === '' || metabolic_age.value < 0) {
            wrong(metabolic_age);
            sessionStorage.metabolic_age = '';
        }
        else {
            right(metabolic_age)
            sessionStorage.metabolic_age = metabolic_age.value;
        }
    })
    
    //Body Water:
    sessionStorage.body_water = '';
    body_water.addEventListener('focusout', function() {
        if (body_water.value > 100 || body_water.value === '' || body_water.value < 0) {
            wrong(body_water);
            sessionStorage.body_water = '';
        }
        else {
            right(body_water);
            sessionStorage.body_water = body_water.value;
        }
    })
    
    //Done:
    done.addEventListener('click', function() {
        if (composition_details_filled()) {
            window.open('/html/breakdown.html', '_self');
        }
    })
    
    //Back:
    back.addEventListener('click', function() {
        window.history.back();
    })
}

if (window.location.pathname === '/html/breakdown.html') {
    //Back:
    back.addEventListener('click', function() {
        window.history.back();
    })
}

//message that tells user whats wrong or what needs to be filled in

//add different ways of adding weight and height into functionality ex (5'6'' for height in feet)
//weekly reminder to add input
//save user details using local storage
//Have better wording on the website 
//make a table that saves all the use details that uses local storage like excel
//if the website see's that the user has already used the website then it just goes to updating info
//add animation on buttons
//if name is undefined then address user as you
//add the script in the javascript file to make sure the name input is letters only