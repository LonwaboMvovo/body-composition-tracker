//Variables from HTML files:
//All Pages:
const unit = document.querySelectorAll('.unit')
const error_msg = document.querySelectorAll('.error_msg');
const mark = document.querySelectorAll('.mark');

//Home Page:
const start = document.querySelector('#start');

//User Details Page:
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const gender_options_box = document.querySelector('#gender_options_box');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const height_unit = document.querySelector('#height_unit');
const weight_unit = document.querySelector('#weight_unit');
const bmr_unit = document.querySelector('#bmr_unit');
const next = document.querySelector('#next');

//Composition Details Page:
const height = document.querySelector('#height');
const height2 = document.querySelector('#height2');
const weight = document.querySelector('#weight'); 
const weight2 = document.querySelector('#weight2');
const body_fat = document.querySelector('#body_fat');
const visceral_fat = document.querySelector('#visceral_fat');
const muscle_mass = document.querySelector('#muscle_mass');
const muscle_mass2 = document.querySelector('#muscle_mass2');
const physique_rating = document.querySelector('#physique_rating');
const bone_mass = document.querySelector('#bone_mass');
const bmr = document.querySelector('#bmr');
const metabolic_age = document.querySelector('#metabolic_age');
const body_water = document.querySelector('#body_water');
const back = document.querySelector('#back');
const done = document.querySelector('#done');

//Progress Page:
const progress_table = document.querySelector('#progress_table');
const full_breakdown_header = document.querySelector('#full_breakdown_header');
const full_breakdown = document.querySelector('#full_breakdown');
const breakdown_header = document.querySelectorAll('.breakdown_header');
const breakdown = document.querySelectorAll('.breakdown');
const CHARTS = document.querySelectorAll('.myChart');
const add = document.querySelector('#add');
const clear = document.querySelector('#clear');

//Functions and variables for javascript file:
const user_details_filled = () => {
    if (
        age.value !== '' && age.value < 150 && age.value >= 0 && !age.value.includes('.') &&
        gender !== undefined && 
        height_unit.value !== 'Choose' &&
        weight_unit.value !== 'Choose' &&
        bmr_unit.value !== 'Choose'
    ) {
        return true;
    }
    return false;
}
const user_details_stored = () => {
   if (
    localStorage.age !== undefined &&
    localStorage.gender !== undefined &&
    localStorage.height_unit !== undefined &&
    localStorage.weight_unit !== undefined &&
    localStorage.bmr_unit !== undefined
   ) {
    return true;
   }
   return false;
}
const composition_details_filled = () => {
    if (
        localStorage.bmr_unit === 'kcal' &&
        bmr.value !== '' && bmr.value >= 0 && bmr.value < 5000 &&
        body_fat.value !== '' && body_fat.value >= 0 && body_fat.value < 70 &&
        visceral_fat.value !== '' && visceral_fat.value >= 0 && visceral_fat.value < 59 &&
        metabolic_age.value !== '' && metabolic_age.value >= 0 && metabolic_age.value < 200 && !metabolic_age.value.includes('.') &&
        body_water.value !== '' && body_water.value >= 0 && body_water.value < 100 && !bmr.value.includes('.')
    ) {
        if (localStorage.height_unit === 'ft' && (height.value !== '' || height2.value !== '') && height2.value >= 0 && height.value >= 0 && height.value * 12 + height2.value * 1 < 108) {
            if (
                localStorage.weight_unit === 'st' &&
                (weight.value !== '' || weight2.value !== '') && weight2.value >= 0 && weight.value >= 0 && weight.value * 14 + weight2.value * 1 < 2002 &&
                (muscle_mass.value !== '' || muscle_mass2.value !== '') && muscle_mass.value >= 0 && muscle_mass2.value >= 0 && muscle_mass.value * 14 + muscle_mass2.value * 1 < 2002 &&
                (bone_mass.value !== '' || bone_mass2.value !== '') && bone_mass.value >= 0 && bone_mass2.value >= 0 && bone_mass.value * 14 + bone_mass2.value * 1 < 84
                ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'kg' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 908 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 908 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 37
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'lbs' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 2000 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 2000 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 80
            ) {
                return true;
            }
        }
        else if (localStorage.height_unit === 'cm' && height.value !== '' && height.value >= 0 && height.value < 275) {
            if (
                localStorage.weight_unit === 'st' &&
                (weight.value !== '' || weight2.value !== '') && weight2.value >= 0 && weight.value >= 0 && weight.value * 14 + weight2.value * 1 < 2002 &&
                (muscle_mass.value !== '' || muscle_mass2.value !== '') && muscle_mass.value >= 0 && muscle_mass2.value >= 0 && muscle_mass.value * 14 + muscle_mass2.value * 1 < 2002 &&
                (bone_mass.value !== '' || bone_mass2.value !== '') && bone_mass.value >= 0 && bone_mass2.value >= 0 && bone_mass.value * 14 + bone_mass2.value * 1 < 84
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'kg' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 908 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 908 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 37
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'lbs' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 2000 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 2000 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 80
            ) {
                return true;
            } 
        }
        else if (localStorage.height_unit === 'm' && height.value !== '' && height.value >= 0 && height.value < 2.75) {
            if (
                localStorage.weight_unit === 'st' &&
                (weight.value !== '' || weight2.value !== '') && weight2.value >= 0 && weight.value >= 0 && weight.value * 14 + weight2.value * 1 < 2002 &&
                (muscle_mass.value !== '' || muscle_mass2.value !== '') && muscle_mass.value >= 0 && muscle_mass2.value >= 0 && muscle_mass.value * 14 + muscle_mass2.value * 1 < 2002 &&
                (bone_mass.value !== '' || bone_mass2.value !== '') && bone_mass.value >= 0 && bone_mass2.value >= 0 && bone_mass.value * 14 + bone_mass2.value * 1 < 84
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'kg' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 908 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 908 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 37
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'lbs' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 2000 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 2000 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 80
            ) {
                return true;
            }
        }
    }
    else if (
        localStorage.bmr_unit === 'kJ' &&
        bmr.value !== '' && bmr.value >= 0 && bmr.value < 21000 &&
        body_fat.value !== '' && body_fat.value >= 0 && body_fat.value < 70 &&
        visceral_fat.value !== '' && visceral_fat.value >= 0 && visceral_fat.value < 59 &&
        metabolic_age.value !== '' && metabolic_age.value >= 0 && metabolic_age.value < 200 && !metabolic_age.value.includes('.') &&
        body_water.value !== '' && body_water.value >= 0 && body_water.value < 100 && !bmr.value.includes('.')
    ) {
        if (localStorage.height_unit === 'ft' && (height.value !== '' || height2.value !== '') && height2.value >= 0 && height.value >= 0 && height.value * 12 + height2.value * 1 < 108) {
            if (
                localStorage.weight_unit === 'st' &&
                (weight.value !== '' || weight2.value !== '') && weight2.value >= 0 && weight.value >= 0 && weight.value * 14 + weight2.value * 1 < 2002 &&
                (muscle_mass.value !== '' || muscle_mass2.value !== '') && muscle_mass.value >= 0 && muscle_mass2.value >= 0 && muscle_mass.value * 14 + muscle_mass2.value * 1 < 2002 &&
                (bone_mass.value !== '' || bone_mass2.value !== '') && bone_mass.value >= 0 && bone_mass2.value >= 0 && bone_mass.value * 14 + bone_mass2.value * 1 < 84
                ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'kg' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 908 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 908 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 37
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'lbs' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 2000 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 2000 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 80
            ) {
                return true;
            }
        }
        else if (localStorage.height_unit === 'cm' && height.value !== '' && height.value >= 0 && height.value < 275) {
            if (
                localStorage.weight_unit === 'st' &&
                (weight.value !== '' || weight2.value !== '') && weight2.value >= 0 && weight.value >= 0 && weight.value * 14 + weight2.value * 1 < 2002 &&
                (muscle_mass.value !== '' || muscle_mass2.value !== '') && muscle_mass.value >= 0 && muscle_mass2.value >= 0 && muscle_mass.value * 14 + muscle_mass2.value * 1 < 2002 &&
                (bone_mass.value !== '' || bone_mass2.value !== '') && bone_mass.value >= 0 && bone_mass2.value >= 0 && bone_mass.value * 14 + bone_mass2.value * 1 < 84
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'kg' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 908 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 908 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 37
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'lbs' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 2000 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 2000 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 80
            ) {
                return true;
            } 
        }
        else if (localStorage.height_unit === 'm' && height.value !== '' && height.value >= 0 && height.value < 2.75) {
            if (
                localStorage.weight_unit === 'st' &&
                (weight.value !== '' || weight2.value !== '') && weight2.value >= 0 && weight.value >= 0 && weight.value * 14 + weight2.value * 1 < 2002 &&
                (muscle_mass.value !== '' || muscle_mass2.value !== '') && muscle_mass.value >= 0 && muscle_mass2.value >= 0 && muscle_mass.value * 14 + muscle_mass2.value * 1 < 2002 &&
                (bone_mass.value !== '' || bone_mass2.value !== '') && bone_mass.value >= 0 && bone_mass2.value >= 0 && bone_mass.value * 14 + bone_mass2.value * 1 < 84
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'kg' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 908 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 908 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 37
            ) {
                return true;
            }
            else if (
                localStorage.weight_unit === 'lbs' &&
                weight.value !== '' && weight.value >= 0 && weight.value < 2000 &&
                muscle_mass.value !== '' && muscle_mass.value >= 0 && muscle_mass.value < 2000 &&
                bone_mass.value !== '' && bone_mass.value >= 0 && bone_mass.value < 80
            ) {
                return true;
            }
        }
    }
    return false;
}
const ageValue = () => {
    if (age.value === '') {
        wrong(age, 1, 0);
        error_msg[1].innerText = 'Please provide a valid age';
    }
    else if (age.value.includes('.')) {
        wrong(age, 1, 0);
        error_msg[1].innerText = 'May not contain decimal point. Please provide a full age only';
    }
    else if (age.value >= 150) {
        wrong(age, 1, 0);
        error_msg[1].innerText = "(Nobody's that old. Please provide an age lower than 150)";
    }
    else if (age.value < 0) {
        wrong(age, 1, 0);
        error_msg[1].innerText = "(You're not even born yet. Please provide a positive age)";
    }
    else {
        right(age, 1, 0);
    }
}
let gender;
const maleValue = () => {
    right(male, 2, 1)
    gender_options_box.style.background = '';
    gender_options_box.classList.remove('mistake');
    gender = 'male';
}
const femaleValue = () => {
    right(female, 2, 1)
    gender_options_box.style.background = '';
    gender_options_box.classList.remove('mistake');
    gender = 'female';
}
const heightUnitValue = () => {
    if (height_unit.value === 'Choose') {
        wrong(height_unit, 3, 2);
        error_msg[3].innerText = '(Please choose preferred unit for height)';
    }
    else {
        right(height_unit, 3, 2);
    }
}
const weightUnitValue = () => {
    if (weight_unit.value === 'Choose') {
        wrong(weight_unit, 4, 3);
        error_msg[4].innerText = '(Please choose preferred unit for weight)';
    }
    else {
        right(weight_unit, 4, 3);
    }
}
const bmrUnitValue = () => {
    if (bmr_unit.value === 'Choose') {
        wrong(bmr_unit, 5, 4);
        error_msg[5].innerText = '(Please choose preferred unit for BMR)';
    }
    else {
        right(bmr_unit, 5, 4);
    }
}
const canNext = () => {
    if (user_details_filled()) {
        localStorage.name = name.value;
        localStorage.age = age.value;
        localStorage.gender = gender;
        localStorage.height_unit = height_unit.value;
        localStorage.weight_unit = weight_unit.value;
        localStorage.bmr_unit = bmr_unit.value;
        window.open('/html/composition_details.html', '_self');
    }
    else {
        //Age:
        if (age.value === '') {
            wrong(age, 1, 0);
            error_msg[1].innerText = "(Required, please provide a valid age)";
        }
        else if (error_msg[1].innerText === "(Nobody's that old. Please provide an age lower than 150)") {
            error_msg[1].innerText = "(Required, please provide an age lower than 150)"
        }
        else if (error_msg[1].innerText === "(You're not even born yet. Please provide a positive age)") {
            error_msg[1].innerText = "(Required, please provide a positive age)";
        }
        else if (error_msg[1].innerText === 'May not contain decimal point. Please provide a full age only') {
            error_msg[1].innerText = 'Required, may not contain decimal point. Please provide a full age only'
        }

        //Gender:
        if (gender === undefined) {
            wrong(gender_options_box, 2, 1);
            error_msg[2].innerText = "(Required, please choose a gender)";
        }

        //Height Unit:
        if (height_unit.value === 'Choose') {
            wrong(height_unit, 3, 2);
            error_msg[3].innerText = "(Required, please choose preferred unit for height)";
        }

        //Weight Unit:
        if (weight_unit.value === 'Choose') {
            wrong(weight_unit, 4, 3);
            error_msg[4].innerText = "(Required, please choose preferred unit for weight)";
        }

        //BMR Unit:
        if (bmr_unit.value === 'Choose') {
            wrong(bmr_unit, 5, 4);
            error_msg[5].innerText = "(Required, please choose preferred unit for BMR)";
        }
        document.querySelectorAll('.mistake')[0].scrollIntoView();
    }
}
const heightValue = () => {
    if (height.value === '') {
        if (localStorage.height_unit === 'ft' && height2.value === '') {
            wrong(height, 0, 1);
            wrong(height2);
            error_msg[0].innerText = '(Please provide a valid height)';
        }
        if (height2.value < 0) {
            right(height);
            wrong(height2, 0, 1)
            error_msg[0].innerText = '(Please provide a positive height)';
        }
        else if (localStorage.height_unit !== 'ft') {
            wrong(height, 0, 0);
            error_msg[0].innerText = '(Please provide a valid height)';
        }
    }
    else if (height.value < 0) {
        if (localStorage.height_unit === 'ft') {
            wrong(height, 0, 1);
            error_msg[0].innerText = "(Please provide a positive height)";
        }
        else {
            wrong(height, 0, 0);
            error_msg[0].innerText = "(Please provide a positive height)";
        }
    }
    else if (localStorage.height_unit === 'cm' && height.value >= 275) {
        wrong(height, 0, 0);
        error_msg[0].innerText = "(That can't be right. Please provide a height lower than 275cm)";
    }
    else if (localStorage.height_unit === 'm' && height.value >= 2.75) {
        wrong(height, 0, 0);
        error_msg[0].innerText = "(That can't be right. Please provide a height lower than 2.75m)";
    }
    else if (localStorage.height_unit === 'ft' && (height.value * 12 + height2.value * 1 >= 108)) {
        wrong(height, 0, 1);
        wrong(height2);
        error_msg[0].innerText = "(That can't be right. Please provide a height lower than 9ft)";
    }
    else {
        if (localStorage.height_unit === 'ft') {
            if (height2.value >= 0) {
                right(height, 0, 1);
                right(height2);
            }
            else {
                right(height);
                wrong(height2, 0, 1)
                error_msg[0].innerText = '(Please provide a positive height)';
            }
        }
        else if (localStorage.height_unit !== 'ft') {
            right(height, 0, 0);
        }
    }
}
const height2Value = () => {
    if (height2.value === '' && height.value === '') {
        wrong(height);
        wrong(height2, 0, 1);
        error_msg[0].innerText = '(Please provide a valid height)';
    }
    else if (height2.value < 0) {
        wrong(height2, 0, 1);
        error_msg[0].innerText = "(Please provide a positive height)";
    }
    else if (height.value * 12 + height2.value * 1 >= 108) {
        wrong(height);
        wrong(height2, 0, 1);
        error_msg[0].innerText = "(That can't be right. Please provide a height lower than 9ft)";
    }
    else {
        if (height.value >= 0) {
            right(height);
            right(height2, 0, 1);
        }
        else {
            right(height2);
            wrong(height, 0, 1)
            error_msg[0].innerText = '(Please provide a positive height)';
        }
    }
}
const weightValue = () => {
    if (weight.value === '') {
        if (localStorage.weight_unit === 'st' && weight2.value === '') {
            wrong(weight, 1, 3);
            wrong(weight2);
            error_msg[1].innerText = '(Please provide a valid weight)';
        }
        if (weight2.value < 0) {
            right(weight);
            wrong(weight2, 1, 3)
            error_msg[1].innerText = '(Please provide a positive weight)';
        }
        else if (localStorage.weight_unit !== 'st') {
            wrong(weight, 1, 2);
            error_msg[1].innerText = '(Please provide a valid weight)';
        }
    }
    else if (weight.value < 0) {
        if (localStorage.weight_unit === 'st') {
            wrong(weight, 1, 3);
            error_msg[1].innerText = '(Please provide a positive weight)';
        }
        else {
            wrong(weight, 1, 2);
            error_msg[1].innerText = '(Please provide a positive weight)';
        }
    }
    else if (localStorage.weight_unit === 'kg' && weight.value >= 908) {
        wrong(weight, 1, 2);
        error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 908kg)";
    }
    else if (localStorage.weight_unit === 'lbs' && weight.value >= 2000) {
        wrong(weight, 1, 2);
        error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 2000lbs)";
    }
    else if (localStorage.weight_unit === 'st' && weight.value * 14 + weight2.value * 1 >= 2002) {
        wrong(weight, 1, 3);
        wrong(weight2);
        error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 143st)";
    }
    else {
        if (localStorage.weight_unit === 'st') {
            if (weight2.value >= 0) {
                right(weight, 1, 3);
                right(weight2);
            }
            else {
                right(weight);
                wrong(weight2, 1, 3)
                error_msg[1].innerText = '(Please provide a positive weight)';
            }
        }
        else if (localStorage.weight_unit !== 'st') {
            right(weight, 1, 2);
        }    
    }
}
const weight2Value = () => {
    if (weight2.value === '' && weight.value === '') {
        wrong(weight);
        wrong(weight2, 1, 3);
        error_msg[1].innerText = '(Please provide a valid weight)';
    }
    else if (weight2.value < 0) {
        wrong(weight2, 1, 3);
        error_msg[1].innerText = '(Please provide a positive weight)';
    }
    else if (weight.value * 14 + weight2.value * 1 >= 2002) {
        wrong(weight);
        wrong(weight2, 1, 3);
        error_msg[1].innerText = "(That can't be right. Please provide a weight lower than 143st)";
    }
    else {
        if (weight.value >= 0) {
            right(weight);
            right(weight2, 1, 3);
        }
        else {
            right(weight2);
            wrong(weight, 1, 3)
            error_msg[1].innerText = '(Please provide a positive weight)';
        }
    }
}
const body_fatValue = () => {
    if (body_fat.value === '') {
        wrong(body_fat, 2, 4);
        error_msg[2].innerText = '(Please provide a valid body fat %)';
    }
    else if (body_fat.value < 0) {
        wrong(body_fat, 2, 4);
        error_msg[2].innerText = '(Please provide a positive body fat %)';
    }
    else if (body_fat.value >= 70) {
        wrong(body_fat, 2, 4);
        error_msg[2].innerText = "(That can't be right. Please provide a body fat % lower than 70%)";
        }
    else {
        right(body_fat, 2, 4);
    }
}
const visceral_fatValue = () => {
    if (visceral_fat.value === '') {
        wrong(visceral_fat, 3, 5);
        error_msg[3].innerText = '(Please provide a valid visceral fat)';
    }
    else if (visceral_fat.value < 0) {
        wrong(visceral_fat, 3, 5);
        error_msg[3].innerText = '(Please provide a positive visceral fat)';
    }
    else if (visceral_fat.value >= 59) {
        wrong(visceral_fat, 3, 5);
        error_msg[3].innerText = "(That can't be right. Please provide a visceral fat lower than 59)";
    }
    else {
        right(visceral_fat, 3, 5);
    }
}
const muscle_massValue = () => {
    if (muscle_mass.value === '') {
        if (localStorage.weight_unit === 'st' && muscle_mass2.value === '') {
            wrong(muscle_mass, 4, 7);
            wrong(muscle_mass2);
            error_msg[4].innerText = "(Please provide a valid muscle mass)";
        }
        if (muscle_mass2.value < 0) {
            right(muscle_mass);
            wrong(muscle_mass2, 4, 7)
            error_msg[4].innerText = '(Please provide a positive muscle mass)';
        }
        else if (localStorage.weight_unit !== 'st') {
            wrong(muscle_mass, 4, 6);
            error_msg[4].innerText = "(Please provide a valid muscle mass)";
        }
    }
    else if (muscle_mass.value < 0) {
        if (localStorage.weight_unit === 'st') {
            wrong(muscle_mass, 4, 7);
            error_msg[4].innerText = "(Please provide a positive muscle mass)";
        }
        else {
            wrong(muscle_mass, 4, 6);
            error_msg[4].innerText = "(Please provide a positive muscle mass)";
        }   
    }
    else if (localStorage.weight_unit === 'kg' && muscle_mass.value > 908) {
        wrong(muscle_mass, 4, 6);
        error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 908kg)";
    }
    else if (localStorage.weight_unit === 'lbs' && muscle_mass.value > 2000) {
        wrong(muscle_mass, 4, 6);
        error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 2000lbs)";
    }
    else if (localStorage.weight_unit === 'st' && muscle_mass.value * 14 + muscle_mass2.value * 1 > 2002) {
        wrong(muscle_mass, 4, 7);
        wrong(muscle_mass2);
        error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 143st)";
    }
    else {
        if (localStorage.weight_unit === 'st') {
            if (muscle_mass2.value >= 0) {
                right(muscle_mass, 4, 7);
                right(muscle_mass2);
            }
            else {
                right(muscle_mass);
                wrong(muscle_mass2, 4, 7)
                error_msg[4].innerText = '(Please provide a positive muscle mass)';
            }
        }
        else if (localStorage.weight_unit !== 'st') {
            right(muscle_mass, 4, 6);
        }
       
    }
}
const muscle_mass2Value = () => {
    if (muscle_mass2.value === '' && muscle_mass.value === '') {
        wrong(muscle_mass);
        wrong(muscle_mass2, 4, 7);
        error_msg[4].innerText = "(Please provide a valid muscle mass)";
    }
    else if (muscle_mass2.value < 0) {
        wrong(muscle_mass2, 4, 7);
        error_msg[4].innerText = "(Please provide a positive muscle mass)";

    }
    else if (muscle_mass.value * 14 + muscle_mass2.value * 1 > 2002) {
        wrong(muscle_mass);
        wrong(muscle_mass2, 4, 7);
        error_msg[4].innerText = "(That can't be right. Please provide a muscle mass lower than 143st)";
    }
    else {
        if (muscle_mass.value >= 0) {
            right(muscle_mass);
            right(muscle_mass2, 4, 7);
        }
        else {
            right(muscle_mass2);
            wrong(muscle_mass, 4, 7)
            error_msg[4].innerText = '(Please provide a positive muscle mass)';
        }
    }
}
const physique_ratingValue = () => {
    if (physique_rating.value === 'Choose') {
        wrong(physique_rating, 5, 8);
        error_msg[5].innerText = '(Please choose a physique rating)';
    }
    else {
        right(physique_rating, 5, 8);
    }
    
}
const bone_massValue = () => {
    if (bone_mass.value === '') {
        if (localStorage.weight_unit === 'st' && bone_mass2.value === '') {
            wrong(bone_mass, 6, 10);
            wrong(bone_mass2);
            error_msg[6].innerText = "(Please provide a valid bone mass)";
        }
        if (bone_mass2.value < 0) {
            right(bone_mass);
            wrong(bone_mass2, 6, 10)
            error_msg[6].innerText = '(Please provide a positive bone mass)';
        }
        if (localStorage.weight_unit !== 'st') {
            wrong(bone_mass, 6, 9);
            error_msg[6].innerText = "(Please provide a valid bone mass)";
        }
    }
    else if (bone_mass.value < 0) {
        if (localStorage.weight_unit === 'st') {
            wrong(bone_mass, 6, 10);
            error_msg[6].innerText = "(Please provide a positive bone mass)";
        }
        else {
            wrong(bone_mass, 6, 9);
            error_msg[6].innerText = "(Please provide a positive bone mass)";
        }
    }
    else if (localStorage.weight_unit === 'kg' && bone_mass.value >= 37) {
        wrong(bone_mass, 6, 9);
        error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 37kg)";
    }
    else if (localStorage.weight_unit === 'lbs' && bone_mass.value >= 80) {
        wrong(bone_mass, 6, 9);
        error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 80lbs)";
    }
    else if (localStorage.weight_unit === 'st' && bone_mass.value * 14 + bone_mass2.value * 1 >= 84) {
        wrong(bone_mass, 6, 10);
        wrong(bone_mass2);
        error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 6st)";
    }
    else {
        if (localStorage.weight_unit === 'st') {
            if (bone_mass2.value >= 0) {
                right(bone_mass, 6, 10);
                right(bone_mass2);
            }
            else {
                right(bone_mass);
                wrong(bone_mass2, 6, 10)
                error_msg[6].innerText = '(Please provide a positive bone mass)';
            }
        }
        else if (localStorage.weight_unit !== 'st') {
            right(bone_mass, 6, 9);
        }    
    }
}
const bone_mass2Value = () => {
    if (bone_mass2.value === '' && bone_mass.value === '') {
        wrong(bone_mass);
        wrong(bone_mass2, 6, 10);
        error_msg[6].innerText = "(Please provide a valid bone mass)";
    }
    else if (bone_mass2.value < 0) {
        wrong(bone_mass2, 6, 10);
        error_msg[6].innerText = "(Please provide a positive bone mass)";
    }
    else if (bone_mass.value * 14 + bone_mass2.value * 1 >= 84) {
        wrong(bone_mass);
        wrong(bone_mass2, 6, 10);
        error_msg[6].innerText = "(That can't be right. Please provide a bone mass lower than 6st)";
    }
    else {
        if (bone_mass.value >= 0) {
            right(bone_mass);
            right(bone_mass2, 6, 10);
        }
        else {
            right(bone_mass2);
            wrong(bone_mass, 6, 10);
            error_msg[6].innerText = '(Please provide a positive bone mass)';
        }
    }
}
const bmrValue = () => {
    if (bmr.value === '') {
        wrong(bmr, 7, 11);
        error_msg[7].innerText = "(Please provide a valid BMR)";
    }
    else if (bmr.value.includes('.')) {
        wrong(bmr, 7, 11);
        error_msg[7].innerText = 'May not contain decimal point. Please provide a full bmr only';
    }
    else if (bmr.value < 0) {
        wrong(bmr, 7, 11);
        error_msg[7].innerText = "(Please provide a positive BMR)";
    }
    else if (localStorage.bmr_unit === 'kcal' && bmr.value >= 5000) {
        wrong(bmr, 7, 11);
        error_msg[7].innerText = "(That can't be right. Please provide a BMR lower than 5000kcal)";
    }
    else if (localStorage.bmr_unit === 'kJ' && bmr.value >= 21000) {
        wrong(bmr, 7, 11);
        error_msg[7].innerText = "(That can't be right. Please provide a BMR lower than 21000kJ)";
    }
    else {
        right(bmr, 7, 11);
    }
}
const metabolic_ageValue = () => {
    if (metabolic_age.value === '') {
        wrong(metabolic_age, 8, 12);
        error_msg[8].innerText = "(Please provide a valid metabolic age)";
    }
    else if (metabolic_age.value.includes('.')) {
        wrong(metabolic_age, 8, 12);
        error_msg[8].innerText = 'May not contain decimal point. Please provide a full metablic age only';
    }
    else if (metabolic_age.value < 0) {
        wrong(metabolic_age, 8, 12);
        error_msg[8].innerText = "(Please provide a positive metabolic age)";
    }
    else if (metabolic_age.value >= 200) {
        wrong(metabolic_age, 8, 12);
        error_msg[8].innerText = "(That can't be right. Please provide a metabolic age lower than 200)";
    }
    else {
        right(metabolic_age, 8, 12)
    }
}
const body_waterValue = () => {
    if (body_water.value === '') {
        wrong(body_water, 9, 13);
        error_msg[9].innerText = "(Please provide a valid body water %)";
    }
    else if (body_water.value < 0) {
        wrong(body_water, 9, 13);
        error_msg[9].innerText = "(Please provide a positive body water %)";
    }
    else if (body_water.value >= 100) {
        wrong(body_water, 9, 13);
        error_msg[9].innerText = "(That can't be right. Please provide a body % lower than 100%)";
    }
    else {
        right(body_water, 9, 13);
    }
}
const canDone = () => {
    if (composition_details_filled()) {
        localStorage.canAddEntry = 'yes';
        if (localStorage.height_unit === 'ft') {
            localStorage.height = (height.value * 12 + height2.value * 1) / 12;
        }
        else {
            localStorage.height = height.value;
        }
        if (localStorage.weight_unit === 'st') {
            localStorage.weight = (weight.value * 14 + weight2.value * 1) / 14;
            localStorage.muscle_mass = (muscle_mass.value * 14 + muscle_mass2.value * 1) / 14;
            localStorage.bone_mass = (bone_mass.value * 14 + bone_mass2.value * 1) / 14;
        }
        else {
            localStorage.weight = weight.value;
            localStorage.muscle_mass = muscle_mass.value;
            localStorage.bone_mass = bone_mass.value;
        }
        localStorage.body_fat = body_fat.value;
        localStorage.visceral_fat = visceral_fat.value;
        localStorage.physique_rating = physique_rating.value;
        localStorage.bmr = bmr.value;
        localStorage.metabolic_age = metabolic_age.value;
        localStorage.body_water = body_water.value;
        window.open('/html/progress.html', '_self');
    }
    else {
        //Height:
        if (localStorage.height_unit === 'ft') {
            if (height.value === '' && height2.value === '') {
                wrong(height, 0, 1);
                wrong(height2);
                error_msg[0].innerText = '(Required, please provide a valid height)';
            }
            else if (error_msg[0].innerText === '(Please provide a positive height)') {
                error_msg[0].innerText = '(Required, please provide a positive height)';
            }
            else if (error_msg[0].innerText === "(That can't be right. Please provide a height lower than 9ft)") {
                error_msg[0].innerText = "(Required, please provide a height lower than 9ft)";
            }
        } 
        else if (localStorage.height_unit !== 'ft') {
            if (height.value === '') {
                wrong(height, 0, 0);
                error_msg[0].innerText = '(Required, please provide a valid height)';
            }
            else if (error_msg[0].innerText === "(Please provide a positive height)") {
                error_msg[0].innerText = "(Required, please provide a positive height)";
            }
            else if (error_msg[0].innerText === "(That can't be right. Please provide a height lower than 275cm)") {
                error_msg[0].innerText = "(Required, please provide a height lower than 275cm)";
            }
            else if (error_msg[0].innerText === "(That can't be right. Please provide a height lower than 2.75m)") {
                error_msg[0].innerText = "(Required, please provide a height lower than 2.75m)";
            }
        }

        //Weight:
        if (localStorage.weight_unit === 'st') {
            if (weight.value === '' && weight2.value === '') {
                wrong(weight, 1, 3);
                wrong(weight2);
                error_msg[1].innerText = '(Required, please provide a valid weight)';
            }
            else if (error_msg[1].innerText === '(Please provide a positive weight)') {
                error_msg[1].innerText = '(Required, please provide a positive weight)';
            }
            else if (error_msg[1].innerText === "(That can't be right. Please provide a weight lower than 143st)") {
                error_msg[1].innerText = "(Required, please provide a weight lower than 143st)";
            }
        }
        else if (localStorage.weight_unit !== 'st') {
            if (weight.value === '') {
                wrong(weight, 1, 2);
                error_msg[1].innerText = '(Required, please provide a valid weight)';
            }
            else if (error_msg[1].innerText === '(Please provide a positive weight)') {
                error_msg[1].innerText = '(Required, please provide a positive weight)';
            }
            else if (error_msg[1].innerText === "(That can't be right. Please provide a weight lower than 908kg)") {
                error_msg[1].innerText = "(Required, please provide a weight lower than 908kg)";
            }
            else if (error_msg[1].innerText === "(That can't be right. Please provide a weight lower than 2000lbs)") {
                error_msg[1].innerText = "(Required, please provide a weight lower than 2000lbs)";
            }
        }
        
        //Body Fat:
        if (body_fat.value === '') {
            wrong(body_fat, 2, 4);
            error_msg[2].innerText = '(Required, please provide a valid body fat %)';
        }
        else if (error_msg[2].innerText === '(Please provide a positive body fat %)') {
            error_msg[2].innerText = '(Required, please provide a positive body fat %)';
        }
        else if (error_msg[2].innerText === "(That can't be right. Please provide a body fat % lower than 70%)") {
            error_msg[2].innerText = "(Required, please provide a body fat % lower than 70%)";
        }

        //Visceral Fat:
        if (visceral_fat.value === '') {
            wrong(visceral_fat, 3, 5);
            error_msg[3].innerText = '(Required, please provide a valid visceral fat)';
        }
        else if (error_msg[3].innerText === '(Please provide a positive visceral fat)') {
            error_msg[3].innerText = '(Required, please provide a positive visceral fat)';
        }
        else if (error_msg[3].innerText === "(That can't be right. Please provide a visceral fat lower than 59)") {
            error_msg[3].innerText = "(Required, please provide a visceral fat lower than 59)";
        }

        //Muscle Mass:
        if (localStorage.weight_unit === 'st') {
            if (muscle_mass.value === '' && muscle_mass2.value === '') {
                wrong(muscle_mass, 4, 7);
                wrong(muscle_mass2);
                error_msg[4].innerText = "(Required, please provide a valid muscle mass)";
            }
            else if (error_msg[4].innerText === '(Please provide a positive muscle mass)') {
                error_msg[4].innerText = '(Required, please provide a positive muscle mass)';
            }
            else if (error_msg[4].innerText === "(That can't be right. Please provide a muscle mass lower than 143st)") {
                error_msg[4].innerText = "(Required, please provide a muscle mass lower than 143st)";
            }
        }
        else if (localStorage.weight_unit !== 'st') {
            if (muscle_mass.value === '') {
                wrong(muscle_mass, 4, 6);
                error_msg[4].innerText = "(Required, please provide a valid muscle mass)";
            }
            else if (error_msg[4].innerText === '(Please provide a positive muscle mass)') {
                error_msg[4].innerText = '(Required, please provide a positive muscle mass)';
            }
            else if (error_msg[4].innerText === "(That can't be right. Please provide a muscle mass lower than 908kg)") {
                error_msg[4].innerText = "(Required, please provide a muscle mass lower than 908kg)";
            }
            else if (error_msg[4].innerText === "(That can't be right. Please provide a muscle mass lower than 2000lbs)") {
                error_msg[4].innerText = "(Required, please provide a muscle mass lower than 2000lbs)";
            }
        }

        //Physique Rating:
        if (physique_rating.value === 'Choose') {
            wrong(physique_rating, 5, 8);
            error_msg[5].innerText = '(Required, please choose a physique rating)';
        }

        //Bone Mass
        if (localStorage.weight_unit === 'st') {
            if (bone_mass.value === '' && bone_mass2.value === '') {
                wrong(bone_mass, 6, 10);
                wrong(bone_mass2);
                error_msg[6].innerText = "(Required, please provide a valid bone mass)";
            }
            else if (error_msg[6].innerText === '(Please provide a positive bone mass)') {
                error_msg[6].innerText = '(Required, please provide a positive bone mass)';
            }
            else if (error_msg[6].innerText === "(That can't be right. Please provide a bone mass lower than 6st)") {
                error_msg[6].innerText = "(Required, please provide a bone mass lower than 6st)";
            }
        }
        else if (localStorage.weight_unit !== 'st') {
            if (bone_mass.value === '') {
                wrong(bone_mass, 6, 9);
                error_msg[6].innerText = "(Required, please provide a valid bone mass)";
            }
            else if (error_msg[6].innerText === '(Please provide a positive bone mass)') {
                error_msg[6].innerText = '(Required, please provide a positive bone mass)';
            } 
            else if (error_msg[6].innerText === "(That can't be right. Please provide a bone mass lower than 36kg)") {
                error_msg[6].innerText = "(Required, please provide a bone mass lower than 36kg)";
            }
            else if (error_msg[6].innerText === "(That can't be right. Please provide a bone mass lower than 80lbs)") {
                error_msg[6].innerText = "(Required, please provide a bone mass lower than 80lbs)";
            }
        }

        //BMR:
        if (bmr.value === '') {
            wrong(bmr, 7, 11);
            error_msg[7].innerText = "(Required, please provide a valid BMR)";
        }
        else if (error_msg[7].innerText === "(Please provide a positive BMR)") {
            error_msg[7].innerText = "(Required, please provide a positive BMR)";
        }
        else if (localStorage.bmr_unit === 'kcal' && error_msg[7].innerText === "(That can't be right. Please provide a BMR lower than 5000kcal)") {
            error_msg[7].innerText = "(Required, please provide a BMR lower than 5000kcal)";
        }
        else if (localStorage.bmr_unit === 'kJ' && error_msg[7].innerText === "(That can't be right. Please provide a BMR lower than 21000kJ)") {
            error_msg[7].innerText = "(Required, please provide a BMR lower than 21000kJ)";
        }
        else if (error_msg[7].innerText === 'May not contain decimal point. Please provide a full bmr only') {
            error_msg[7].innerText = 'Required, may not contain decimal point. Please provide a full bmr only';
        }

        //Metabolic Age:
        if (metabolic_age.value === '') {
            wrong(metabolic_age, 8, 12);
            error_msg[8].innerText = "(Required, please provide a valid metabolic age)";
        }
        else if (error_msg[8].innerText === "(Please provide a positive metabolic age)") {
            error_msg[8].innerText = "(Required, please provide a positive metabolic age)";
        }
        else if (error_msg[8].innerText === "(That can't be right. Please provide a metabolic age lower than 200)") {
            error_msg[8].innerText = "(Required, please provide a metabolic age lower than 200)";
        }
        else if (error_msg[8].innerText === 'May not contain decimal point. Please provide a full age only') {
            error_msg[8].innerText = 'Required, may not contain decimal point. Please provide a full metablic age only'
        }

        //Body Water:
        if (body_water.value === '') {
            wrong(body_water, 9, 13);
            error_msg[9].innerText = "(Required, please provide a valid body water %)";
        }
        else if (error_msg[9].innerText === "(Please provide a positive body water %)") {
            error_msg[9].innerText = "(Required, please provide a positive body water %)";
        }
        else if (error_msg[9].innerText === "(That can't be right. Please provide a body % lower than 100%)") {
            error_msg[9].innerText = "(Required, please provide a body % lower than 100%)";
        }
        document.querySelectorAll('.mistake')[0].scrollIntoView();
    }
}
const wrong = (detail, emi, marki) => {
    if (detail !== undefined) {
        detail.style.background = 'rgb(255, 160, 144)';
    }
    if (emi !== undefined) {
        error_msg[emi].classList.remove('not');
    }
    if (marki !== undefined) {
        mark[marki].innerHTML = '&#10006;'
        mark[marki].style.color = 'red';
    }
    detail.classList.add('mistake');
}
const right = (detail, emi, marki) => {
    if (detail !== undefined) {
        detail.style.background = 'rgb(216, 216, 216)';
    }
    if (emi !== undefined) {
        error_msg[emi].classList.add('not');
    }
    if (marki !== undefined) {
        mark[marki].innerHTML = '&#10004;'
        mark[marki].style.color = 'green';
    }
    detail.classList.remove('mistake');
}
const selectedDateBackground = (dateIndex) => {
    let dates = document.querySelectorAll('.date');
    let selectedDate = dates[dateIndex];
    for (let notK = 0; notK < dates.length; notK++) {
        dates[notK].style.background = 'rgb(216, 216, 216)';
    }
    selectedDate.style.background = 'rgb(179, 179, 179)'
    selectedDate.style.fontSize = '1.55rem';
}
const graph = (notJ, title, graphCap) => {
    CHARTS[notJ].getContext('2d');
    let chart = new Chart(CHARTS[notJ], {
        type: 'line',
        data: {
            labels: numberRowsArray.filter((v, index) => {
                return index < graphCap - 1;
            }).map((value) => {
                return value.date;
            }),
            datasets: [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'orange',
                pointBorderWidth: 5,
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                hoverBackgroundColor: 'orangered',
                hoverBorderColor: 'orangered',
                lineTension: 0.1,
                data: numberRowsArray.filter((v, index) => {
                    return index < graphCap - 1;
                }).map((value) => {
                    return value[title];
                })
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                titleFontSize: 16,
                bodyFontSize: 16,
                bodyAlign: 'center',
                displayColors: false
            }
        }
    });
}
const bmiBreakdown = (int) => {
    if (numberRowsArray[int].bmi * 1 < 19) {
        breakdown[1].innerText = 'Your BMI indicates that you are underweight';
    }
    else if (numberRowsArray[int].bmi * 1 < 25) {
        breakdown[1].innerText = 'Your BMI indicates that you are normal';
    }
    else if (numberRowsArray[int].bmi * 1 < 30) {
        breakdown[1].innerText = 'Your BMI indicates that you are overweight';
    }
    else {
        breakdown[1].innerText = 'Your BMI indicates that you are obese';
    }
}
const body_fatBreakdown = (int) => {
    if (localStorage.gender === 'female') {
        if (localStorage.age * 1 <= 5) {
            if (numberRowsArray[int].body_fat  * 1 < 14) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 22) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 26) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 6) {
            if (numberRowsArray[int].body_fat  * 1 < 14) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 23) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 27) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 7) {
            if (numberRowsArray[int].body_fat  * 1 < 15) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 25) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 29) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 8) {
            if (numberRowsArray[int].body_fat  * 1 < 15) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 26) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 30) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 9) {
            if (numberRowsArray[int].body_fat  * 1 < 16) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 27) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 31) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 10) {
            if (numberRowsArray[int].body_fat  * 1 < 16) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 28) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 32) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 < 14) {
            if (numberRowsArray[int].body_fat  * 1 < 16) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 29) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 33) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 < 17) {
            if (numberRowsArray[int].body_fat  * 1 < 16) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 30) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 34) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 17) {
            if (numberRowsArray[int].body_fat  * 1 < 16) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 30) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 35) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 18) {
            if (numberRowsArray[int].body_fat  * 1 < 17) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 31) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 36) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 19) {
            if (numberRowsArray[int].body_fat  * 1 < 19) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 32) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 37) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 < 40) {
            if (numberRowsArray[int].body_fat  * 1 < 21) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 33) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 39) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 < 60) {
            if (numberRowsArray[int].body_fat  * 1 < 23) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 34) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 40) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else {
            if (numberRowsArray[int].body_fat  * 1 < 24) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 36) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 42) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
    }
    else if (localStorage.gender === 'male') {
        if (localStorage.age * 1 <= 5) {
            if (numberRowsArray[int].body_fat  * 1 < 12) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 19) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 23) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 6) {
            if (numberRowsArray[int].body_fat  * 1 < 12) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 20) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 24) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 7) {
            if (numberRowsArray[int].body_fat  * 1 < 13) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 20) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 25) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 8) {
            if (numberRowsArray[int].body_fat  * 1 < 13) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 21) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 26) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 9) {
            if (numberRowsArray[int].body_fat  * 1 < 13) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 22) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 27) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 < 12) {
            if (numberRowsArray[int].body_fat  * 1 < 13) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 23) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 28) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 12) {
            if (numberRowsArray[int].body_fat  * 1 < 12) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 23) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 28) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 13) {
            if (numberRowsArray[int].body_fat  * 1 < 12  ) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 22) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 27) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 === 14) {
            if (numberRowsArray[int].body_fat  * 1 < 11) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 21) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 26) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 15) {
            if (numberRowsArray[int].body_fat  * 1 < 10) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 21) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 25) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        } 
        else if (localStorage.age * 1 < 18) {
            if (numberRowsArray[int].body_fat  * 1 < 10) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 20) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 24) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 18) {
            if (numberRowsArray[int].body_fat  * 1 < 10) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 20) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 24) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 === 19) {
            if (numberRowsArray[int].body_fat  * 1 < 9) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 20) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 24) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 < 40) {
            if (numberRowsArray[int].body_fat  * 1 < 8) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 20) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 25) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else if (localStorage.age * 1 < 60) {
            if (numberRowsArray[int].body_fat  * 1 < 11) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 22) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 28) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
        else {
            if (numberRowsArray[int].body_fat  * 1 < 13) {
                breakdown[2].innerText = 'Your body fat indicates that you are underfat';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 25) {
                breakdown[2].innerText = 'Your body fat indicates that you are healthy';
            }
            else if (numberRowsArray[int].body_fat  * 1 < 30) {
                breakdown[2].innerText = 'Your body fat indicates that you are overfat';
            }
            else{
                breakdown[2].innerText = 'Your body fat indicates that you are obese';
            }
        }
    }
}
const visceral_fatBreakdown = (int) => {
    if (numberRowsArray[int].visceral_fat * 1 < 13) {
        breakdown[3].innerText = 'You have a healthy level of visceral fat';
    }
    else {
        breakdown[3].innerText = 'You have an excessive level of visceral fat';
    }
}
const physique_ratingBreakdown = (int) => {
    if (numberRowsArray[int].physique_rating * 1 === 1) {
        breakdown[5].innerText = "You have a 'Hidden Obese' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 2) {
        breakdown[5].innerText = "You have a 'Obese' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 3) {
        breakdown[5].innerText = "You have a 'Solidly-built' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 4) {
        breakdown[5].innerText = "You have a 'Under exercised' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 5) {
        breakdown[5].innerText = "You have a 'Standard' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 6) {
        breakdown[5].innerText = "You have a 'Standard Muscular' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 7) {
        breakdown[5].innerText = "You have a 'Thin' body type";
    }
    else if (numberRowsArray[int].physique_rating * 1 === 8) {
        breakdown[5].innerText = "You have a 'Thin and Muscular' body type";
    }
    else {
        breakdown[5].innerText = "You have a 'Very Muscular' body type";
    }
}
const bone_massBreakdown = (int) => {
    if (localStorage.gender === 'female') {
        if (localStorage.weight_unit === 'kg') {
            if (numberRowsArray[int].weight * 1 >= 76) {
                if (numberRowsArray[int].bone_mass * 1 >= 2.95) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else if (numberRowsArray[int].weight * 1 >= 50) {
                if (numberRowsArray[int].bone_mass * 1 >= 2.4) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else {
                if (numberRowsArray[int].bone_mass * 1 >= 1.95) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
        }
        else if (localStorage.weight_unit === 'lbs') {
            if (numberRowsArray[int].weight * 1 >= 167.551) {
                if (numberRowsArray[int].bone_mass * 1 >= 6.503637) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else if (numberRowsArray[int].weight * 1 >= 110.231) {
                if (numberRowsArray[int].bone_mass * 1 >= 5.29109) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else {
                if (numberRowsArray[int].bone_mass * 1 >= 4.299014) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
        }
        else if (localStorage.weight_unit === 'st') {
            if (numberRowsArray[int].weight * 1 >= 11.968) {
                if (numberRowsArray[int].bone_mass * 1 >= 0.4645455) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else if (numberRowsArray[int].weight * 1 >= 7.87365) {
                if (numberRowsArray[int].bone_mass * 1 >= 0.377935) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else {
                if (numberRowsArray[int].bone_mass * 1 >= 0.3070724) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }  
        }
    }
    else if (localStorage.gender === 'male') {
        if (localStorage.weight_unit === 'kg') {
            if (numberRowsArray[int].weight * 1 >= 95) {
                if (numberRowsArray[int].bone_mass * 1 >= 3.69) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else if (numberRowsArray[int].weight * 1 >= 65) {
                if (numberRowsArray[int].bone_mass * 1 >= 3.29) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else {
                if (numberRowsArray[int].bone_mass * 1 >= 2.65) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
        }
        else if (localStorage.weight_unit === 'lbs') {
            if (numberRowsArray[int].weight * 1 >= 209.439) {
                if (numberRowsArray[int].bone_mass * 1 >= 8.135057) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else if (numberRowsArray[int].weight * 1 >= 143.3) {
                if (numberRowsArray[int].bone_mass * 1 >= 7.253208) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else {
                if (numberRowsArray[int].bone_mass * 1 >= 5.84225) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
        }
        else if (localStorage.weight_unit === 'st') {
            if (numberRowsArray[int].weight * 1 >= 14.9599) {
                if (numberRowsArray[int].bone_mass * 1 >= 0.5810755) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else if (numberRowsArray[int].weight * 1 >= 10.2357) {
                if (numberRowsArray[int].bone_mass * 1 >= 0.5180863) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
            else {
                if (numberRowsArray[int].bone_mass * 1 >= 0.4173036) {
                    breakdown[6].innerText = 'You have a healthy bone mass weight'; 
                }
                else {
                    breakdown[6].innerText = 'You have a low bone mass weight'; 
                }
            }
        }
    }
}
const body_waterBreakdown = (int) => {
    if (localStorage.gender === 'female') {
        if (numberRowsArray[int].body_water * 1 < 45) {
            breakdown[9].innerText = 'You have a low body water %'
        }
        else if (numberRowsArray[int].body_water * 1 < 60) {
            breakdown[9].innerText = 'You have a healthy body water %'
        }
        else {
            breakdown[9].innerText = 'You have a high body water %'
        }
    }
    else if (localStorage.gender === 'male') {
        if (numberRowsArray[int].body_water * 1 < 50) {
            breakdown[9].innerText = 'You have a low body water %'
        }
        else if (numberRowsArray[int].body_water * 1 < 65) {
            breakdown[9].innerText = 'You have a healthy body water %'
        }
        else {
            breakdown[9].innerText = 'You have a high body water %'
        }
    }
}
const fullBreakdown = (rowIndex) => {
    let selectedRow = progress_table.rows[rowIndex];
    //Header:
    full_breakdown_header.innerText = `Full Breakdown (${selectedRow.cells[0].innerText})`; 
    if (rowIndex === 2) {
        for (let anythingButI = 0; anythingButI < 10; anythingButI++) {
            CHARTS[anythingButI].style.display = 'none';
        }
        //Weight:
        breakdown_header[0].innerText = `Weight - ${selectedRow.cells[1].innerText}`;
        //BMI:
        breakdown_header[1].innerText = `BMI - ${selectedRow.cells[2].innerText}`;
        bmiBreakdown(rowIndex - 2);
        //Body Fat:
        breakdown_header[2].innerText = `Body Fat % - ${selectedRow.cells[3].innerText}`;
        body_fatBreakdown(rowIndex - 2);
        //Visceral Fat:
        breakdown_header[3].innerText = `Visceral Fat - ${selectedRow.cells[4].innerText}`;
        visceral_fatBreakdown(rowIndex - 2);
        //Muscle Mass:
        breakdown_header[4].innerText = `Muscle Mass - ${selectedRow.cells[5].innerText}`;
        //Physique Rating:
        breakdown_header[5].innerText = `Physique Rating - ${selectedRow.cells[6].innerText}`;
        physique_ratingBreakdown(rowIndex - 2);
        //Bone Mass:
        breakdown_header[6].innerText = `Bone Mass - ${selectedRow.cells[7].innerText}`;
        bone_massBreakdown(rowIndex - 2);
        //BMR:
        breakdown_header[7].innerText = `BMR - ${selectedRow.cells[8].innerText}`;
        //Metabolic Age:
        breakdown_header[8].innerText = `Metabolic Age - ${selectedRow.cells[9].innerText}`;
        //Body Water:
        breakdown_header[9].innerText = `Body Water % - ${selectedRow.cells[10].innerText}`;
        body_waterBreakdown(rowIndex - 2);
    }
    else {
        for (let anythingButI = 0; anythingButI < 10; anythingButI++) {
            CHARTS[anythingButI].style.display = 'block';
        }
        //Weight:
        if (parseFloat(selectedRow.cells[1].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[1].innerText)) {
            breakdown_header[0].innerText = `Weight - ${selectedRow.cells[1].innerText}`;
            graph(0, 'weight', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[1].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[1].innerText)) {
            breakdown_header[0].innerHTML = `Weight - ${selectedRow.cells[1].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[1].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[1].innerText)).toFixed(1)})</span>`;
            graph(0, 'weight', rowIndex);
        }
        else {
            breakdown_header[0].innerHTML = `Weight - ${selectedRow.cells[1].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[1].innerText) - parseFloat(selectedRow.cells[1].innerText)).toFixed(1)})</span>`;
            graph(0, 'weight', rowIndex);
        }
        
        //BMI:
        if (parseFloat(selectedRow.cells[2].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[2].innerText)) {
            breakdown_header[1].innerText = `BMI - ${selectedRow.cells[2].innerText}`;
            bmiBreakdown(rowIndex - 2);
            graph(1, 'bmi', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[2].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[2].innerText)) {
            breakdown_header[1].innerHTML = `BMI - ${selectedRow.cells[2].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[2].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[2].innerText)).toFixed(1)})</span>`;
            bmiBreakdown(rowIndex - 2);
            graph(1, 'bmi', rowIndex);
        }
        else {
            breakdown_header[1].innerHTML = `BMI - ${selectedRow.cells[2].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[2].innerText) - parseFloat(selectedRow.cells[2].innerText)).toFixed(1)})</span>`;
            bmiBreakdown(rowIndex - 2);
            graph(1, 'bmi', rowIndex);
        }

        //Body Fat:
        if (parseFloat(selectedRow.cells[3].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[3].innerText)) {
            breakdown_header[2].innerText = `Body Fat % - ${selectedRow.cells[3].innerText}`;
            body_fatBreakdown(rowIndex - 2);
            graph(2, 'body_fat', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[3].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[3].innerText)) {
            breakdown_header[2].innerHTML = `Body Fat % - ${selectedRow.cells[3].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[3].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[3].innerText)).toFixed(1)})</span>`;
            body_fatBreakdown(rowIndex - 2);
            graph(2, 'body_fat', rowIndex);
        }
        else {
            breakdown_header[2].innerHTML = `Body Fat % - ${selectedRow.cells[3].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[3].innerText) - parseFloat(selectedRow.cells[3].innerText)).toFixed(1)})</span>`;
            body_fatBreakdown(rowIndex - 2);
            graph(2, 'body_fat', rowIndex);
        }

        //Visceral Fat:
        if (parseFloat(selectedRow.cells[4].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[4].innerText)) {
            breakdown_header[3].innerText = `Visceral Fat - ${selectedRow.cells[4].innerText}`;
            visceral_fatBreakdown(rowIndex - 2);
            graph(3, 'visceral_fat', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[4].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[4].innerText)) {
            breakdown_header[3].innerHTML = `Visceral Fat - ${selectedRow.cells[4].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[4].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[4].innerText)).toFixed(1)})</span>`;
            visceral_fatBreakdown(rowIndex - 2);
            graph(3, 'visceral_fat', rowIndex);
        }
        else {
            breakdown_header[3].innerHTML = `Visceral Fat - ${selectedRow.cells[4].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[4].innerText) - parseFloat(selectedRow.cells[4].innerText)).toFixed(1)})</span>`;
            visceral_fatBreakdown(rowIndex - 2);
            graph(3, 'visceral_fat', rowIndex);
        }

        //Muscle Mass:
        if (parseFloat(selectedRow.cells[5].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[5].innerText)) {
            breakdown_header[4].innerText = `Muscle Mass - ${selectedRow.cells[5].innerText}`;
            graph(4, 'muscle_mass', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[5].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[5].innerText)) {
            breakdown_header[4].innerHTML = `Muscle Mass - ${selectedRow.cells[5].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[5].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[5].innerText)).toFixed(1)})</span>`;
            graph(4, 'muscle_mass', rowIndex);
        }
        else {
            breakdown_header[4].innerHTML = `Muscle Mass - ${selectedRow.cells[5].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[5].innerText) - parseFloat(selectedRow.cells[5].innerText)).toFixed(1)})</span>`;
            graph(4, 'muscle_mass', rowIndex);
        }

        //Physique Rating:
        if (parseFloat(selectedRow.cells[6].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[6].innerText)) {
            breakdown_header[5].innerText = `Physique Rating - ${selectedRow.cells[6].innerText}`;
            physique_ratingBreakdown(rowIndex - 2);
            graph(5, 'physique_rating', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[6].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[6].innerText)) {
            breakdown_header[5].innerHTML = `Physique Rating - ${selectedRow.cells[6].innerText} <span class='increase'>(↑ ${parseFloat(selectedRow.cells[6].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[6].innerText)})</span>`;
            physique_ratingBreakdown(rowIndex - 2);
            graph(5, 'physique_rating', rowIndex);
        }
        else {
            breakdown_header[5].innerHTML = `Physique Rating - ${selectedRow.cells[6].innerText} <span class='decrease'>(↓ ${parseFloat(progress_table.rows[rowIndex - 1].cells[6].innerText) - parseFloat(selectedRow.cells[6].innerText)})</span>`;
            physique_ratingBreakdown(rowIndex - 2);
            graph(5, 'physique_rating', rowIndex);
        }

        //Bone Mass:
        if (parseFloat(selectedRow.cells[7].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[7].innerText)) {
            breakdown_header[6].innerText = `Bone Mass - ${selectedRow.cells[7].innerText}`;
            bone_massBreakdown(rowIndex - 2);
            graph(6, 'bone_mass', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[7].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[7].innerText)) {
            breakdown_header[6].innerHTML = `Bone Mass - ${selectedRow.cells[7].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[7].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[7].innerText)).toFixed(1)})</span>`;
            bone_massBreakdown(rowIndex - 2);
            graph(6, 'bone_mass', rowIndex);
        }
        else {
            breakdown_header[6].innerHTML = `Bone Mass - ${selectedRow.cells[7].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[7].innerText) - parseFloat(selectedRow.cells[7].innerText)).toFixed(1)})</span>`;
            bone_massBreakdown(rowIndex - 2);
            graph(6, 'bone_mass', rowIndex);
        }

        //BMR:
        if (parseFloat(selectedRow.cells[8].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[8].innerText)) {
            breakdown_header[7].innerText = `BMR - ${selectedRow.cells[8].innerText}`;
            graph(7, 'bmr', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[8].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[8].innerText)) {
            breakdown_header[7].innerHTML = `BMR - ${selectedRow.cells[8].innerText} <span class='increase'>(↑ ${parseFloat(selectedRow.cells[8].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[8].innerText)})</span>`;
            graph(7, 'bmr', rowIndex);
        }
        else {
            breakdown_header[7].innerHTML = `BMR - ${selectedRow.cells[8].innerText} <span class='decrease'>(↓ ${parseFloat(progress_table.rows[rowIndex - 1].cells[8].innerText) - parseFloat(selectedRow.cells[8].innerText)})</span>`;
            graph(7, 'bmr', rowIndex);
        }

        //Metabolic Age:
        if (parseFloat(selectedRow.cells[9].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[9].innerText)) {
            breakdown_header[8].innerText = `Metabolic Age - ${selectedRow.cells[9].innerText}`; 
            graph(8, 'metabolic_age', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[9].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[9].innerText)) {
            breakdown_header[8].innerHTML = `Metabolic Age - ${selectedRow.cells[9].innerText} <span class='increase'>(↑ ${parseFloat(selectedRow.cells[9].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[9].innerText)})</span>`;
            graph(8, 'metabolic_age', rowIndex);
        }
        else {
            breakdown_header[8].innerHTML = `Metabolic Age - ${selectedRow.cells[9].innerText} <span class='decrease'>(↓ ${parseFloat(progress_table.rows[rowIndex - 1].cells[9].innerText) - parseFloat(selectedRow.cells[9].innerText)})</span>`;
            graph(8, 'metabolic_age', rowIndex);
        }

        //Body Water:
        if (parseFloat(selectedRow.cells[10].innerText) === parseFloat(progress_table.rows[rowIndex - 1].cells[10].innerText)) {
            breakdown_header[9].innerText = `Body Water % - ${selectedRow.cells[10].innerText}`;
            body_waterBreakdown(rowIndex - 2);
            graph(9, 'body_water', rowIndex);
        }
        else if (parseFloat(selectedRow.cells[10].innerText) > parseFloat(progress_table.rows[rowIndex - 1].cells[10].innerText)) {
            breakdown_header[9].innerHTML = `Body Water % - ${selectedRow.cells[10].innerText} <span class='increase'>(↑ ${(parseFloat(selectedRow.cells[10].innerText) - parseFloat(progress_table.rows[rowIndex - 1].cells[10].innerText)).toFixed(1)})</span>`;
            body_waterBreakdown(rowIndex - 2);
            graph(9, 'body_water', rowIndex);
        }
        else {
            breakdown_header[9].innerHTML = `Body Water % - ${selectedRow.cells[10].innerText} <span class='decrease'>(↓ ${(parseFloat(progress_table.rows[rowIndex - 1].cells[2].innerText) - parseFloat(selectedRow.cells[10].innerText)).toFixed(1)})</span>`;
            body_waterBreakdown(rowIndex - 2);
            graph(9, 'body_water', rowIndex);
        }
    }
}
let numberRowsArray;
let numberRowsArrayFixGap;
const date = new Date();
const bmiValue = () => {
    if (localStorage.height_unit === 'm') {
        if (localStorage.weight_unit === 'kg') {
            localStorage.bmi = (localStorage.weight/Math.pow(localStorage.height, 2)).toFixed(1);
            return localStorage.bmi;
        }
        else if (localStorage.weight_unit === 'lbs') {
            localStorage.bmi = ((localStorage.weight/2.205)/Math.pow(localStorage.height, 2)).toFixed(1);
            return localStorage.bmi;
        }
        else if (localStorage.weight_unit === 'st') {
            localStorage.bmi = ((localStorage.weight*6.35)/Math.pow(localStorage.height, 2)).toFixed(1);
            return localStorage.bmi;
        }
    }
    else if (localStorage.height_unit === 'cm') {
        if (localStorage.weight_unit === 'kg') {
            localStorage.bmi = (localStorage.weight/Math.pow((localStorage.height/100), 2)).toFixed(1);
            return localStorage.bmi;
        }
        else if (localStorage.weight_unit === 'lbs') {
            localStorage.bmi = ((localStorage.weight/2.205)/Math.pow((localStorage.height/100), 2)).toFixed(1);
            return localStorage.bmi;
        }
        else if (localStorage.weight_unit === 'st') {
            localStorage.bmi = ((localStorage.weight*6.35)/Math.pow((localStorage.height/100), 2)).toFixed(1);
            return localStorage.bmi;
        }
    }
    else if (localStorage.height_unit === 'ft') {
        if (localStorage.weight_unit === 'kg') {
            localStorage.bmi = (localStorage.weight/Math.pow((localStorage.height/3.281), 2)).toFixed(1);
            return localStorage.bmi;
        }
        else if (localStorage.weight_unit === 'lbs') {
            localStorage.bmi = ((localStorage.weight/2.205)/Math.pow((localStorage.height/3.281), 2)).toFixed(1);
            return localStorage.bmi;
        }
        else if (localStorage.weight_unit === 'st') {
            localStorage.bmi = ((localStorage.weight*6.35)/Math.pow((localStorage.height/3.281), 2)).toFixed(1);
            return localStorage.bmi;
        }
    }
}
const numberRows = () => { 
    if ((localStorage.numberRows === undefined && localStorage.canAddEntry !== 'yes') || localStorage.numberRows === '[]') {
        return false;
    }
    else if (localStorage.numberRows === undefined && localStorage.canAddEntry === 'yes') {
        localStorage.numberRows = JSON.stringify([{
            int: 2,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            weight: localStorage.weight,
            bmi: bmiValue(),
            body_fat: localStorage.body_fat,
            visceral_fat: localStorage.visceral_fat,
            muscle_mass: localStorage.muscle_mass,
            physique_rating: localStorage.physique_rating,
            bone_mass: localStorage.bone_mass,
            bmr: localStorage.bmr,
            metabolic_age: localStorage.metabolic_age,
            body_water: localStorage.body_water
        }]);
        numberRowsArray = JSON.parse(localStorage.numberRows);
        return true;
    }
    else if (localStorage.numberRows !== undefined && localStorage.canAddEntry === 'yes') {
        numberRowsArray = JSON.parse(localStorage.numberRows);
        numberRowsArray.push({
            int: numberRowsArray.length + 2,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            weight: localStorage.weight,
            bmi: bmiValue(),
            body_fat: localStorage.body_fat,
            visceral_fat: localStorage.visceral_fat,
            muscle_mass: localStorage.muscle_mass,
            physique_rating: localStorage.physique_rating,
            bone_mass: localStorage.bone_mass,
            bmr: localStorage.bmr,
            metabolic_age: localStorage.metabolic_age,
            body_water: localStorage.body_water
        });
        localStorage.numberRows = JSON.stringify(numberRowsArray);
        return true;
    }
    else {
        numberRowsArray = JSON.parse(localStorage.numberRows);
        return true;
    }
}

//Home Page:
if (window.location.pathname === "/html/index.html") {
    //Storage:
    if (typeof(Storage) === 'undefined') {
        document.querySelector('.header_msg').innerHTML = 'Unfortunately your browser does not support the type of storage we use. Try updating your browser or switching to another one.';
        start.classList.add('not');
    }

    else {
        start.addEventListener('click', () => {
            if (user_details_stored()) {
                window.open('/html/composition_details.html', '_self');
            }
            else {
                window.open('/html/user_details.html', '_self');
            }
        })
    }
}

//User Details page:
if (window.location.pathname === "/html/user_details.html") {
    //Name:
    name.addEventListener("keypress", (event) => {
        if ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) && name.value.length < 35) {
            right(name, 0)
            name.value += event.key;
        }
        else if (name.value.length === 35) {
            wrong(name, 0)
            error_msg[0].innerText = '(Max length of name reached. Please provide name lower than 35 characters)';
        }
        else {
            wrong(name, 0)
            error_msg[0].innerText = '(Please use letters only)';
        }
    });

    //Age:
    age.addEventListener('focusout', ageValue)
    
    //Gender:
    male.addEventListener('click', maleValue)
    female.addEventListener('click', femaleValue)

    //Height Unit:
    height_unit.addEventListener('focusout', heightUnitValue)

    //Weight Unit:
    weight_unit.addEventListener('focusout', weightUnitValue)

    //BMR Unit:
    bmr_unit.addEventListener('focusout', bmrUnitValue)

    //Next:
    next.addEventListener('click', canNext)
}

//Composition Details page
if (window.location.pathname === '/html/composition_details.html') {
    //Height:
    unit[0].innerText = `(${localStorage.height_unit})`;
    height.addEventListener('focusout', heightValue)
    if (localStorage.height_unit === 'ft') {
        unit[1].classList.remove('not');
        height2.classList.remove('not');
    }
    height2.addEventListener('focusout', height2Value)

    //Weight:
    unit[2].innerText = `(${localStorage.weight_unit})`;
    weight.addEventListener('focusout', weightValue)
    if (localStorage.weight_unit === 'st') {
        unit[3].classList.remove('not');
        weight2.classList.remove('not');
    }
    weight2.addEventListener('focusout', weight2Value)

    //Body Fat:
    body_fat.addEventListener('focusout', body_fatValue)
    
    //Visceral Fat:
    visceral_fat.addEventListener('focusout', visceral_fatValue)
    
    //Muscle Mass:
    unit[4].innerText = `(${localStorage.weight_unit})`;
    muscle_mass.addEventListener('focusout', muscle_massValue)
    if (localStorage.weight_unit === 'st') {
        unit[5].classList.remove('not');
        muscle_mass2.classList.remove('not');
    }
    muscle_mass2.addEventListener('focusout', muscle_mass2Value)
    
    //Physique Rating:
    physique_rating.addEventListener('focusout', physique_ratingValue)
    
    //Bone Mass
    unit[6].innerText = `(${localStorage.weight_unit})`;
    bone_mass.addEventListener('focusout', bone_massValue)
    if (localStorage.weight_unit === 'st') {
        unit[7].classList.remove('not');
        bone_mass2.classList.remove('not');
    }
    bone_mass2.addEventListener('focusout', bone_mass2Value)
    
    //BMR:
    unit[8].innerText = `(${localStorage.bmr_unit})`;
    bmr.addEventListener('focusout', bmrValue)
    
    //Metabolic Age:
    metabolic_age.addEventListener('focusout', metabolic_ageValue)
    
    //Body Water:
    body_water.addEventListener('focusout', body_waterValue)
    
    //Done:
    done.addEventListener('click', canDone)
    
    //Back:
    back.addEventListener('click', () => {
        window.open('/html/user_details.html', '_self');
    })
}

//Progress page:
if (window.location.pathname === '/html/progress.html') {
    //Progress Table:
    if (numberRows() === true) {
        //Name:
        if (localStorage.name === undefined || localStorage.name === '') {
            progress_table.rows[0].cells[0].innerText = 'You';
        }
        else {
            progress_table.rows[0].cells[0].innerText = localStorage.name;
        }
        //Age:
        progress_table.rows[0].cells[1].innerText = `Age: ${localStorage.age * 1}`;

        //Height:
        progress_table.rows[0].cells[2].innerText = `Height: ${(localStorage.height * 1).toFixed(1)} ${localStorage.height_unit}`;
        
        //Weight Unit:
        progress_table.rows[1].cells[1].innerText += ` (${localStorage.weight_unit})`;

        //Muscle Mass Unit:
        progress_table.rows[1].cells[5].innerText += ` (${localStorage.weight_unit})`;

        //Bone Mass Unit:
        progress_table.rows[1].cells[7].innerText += ` (${localStorage.weight_unit})`;

        //BMR Unit:
        progress_table.rows[1].cells[8].innerText += ` (${localStorage.bmr_unit})`;
        
        localStorage.canAddEntry = 'no';

        numberRowsArray.forEach(currentRow => {
            //Insert Row:
            let rowAdd = progress_table.insertRow(currentRow.int);

            //Insert Cells:
            for (let i = 0; i < 12; i++) {
                rowAdd.insertCell(i);
            }
        
            //Date:
            progress_table.rows[currentRow.int].cells[0].innerText = currentRow.date;
            progress_table.rows[currentRow.int].cells[0].classList = 'date';
            
            //Weight:
            progress_table.rows[currentRow.int].cells[1].innerText = (currentRow.weight * 1).toFixed(1);

            //BMI:
            progress_table.rows[currentRow.int].cells[2].innerText = (currentRow.bmi * 1).toFixed(1);

            //Body Fat:
            progress_table.rows[currentRow.int].cells[3].innerText = (currentRow.body_fat * 1).toFixed(1);

            //Visceral Fat:
            progress_table.rows[currentRow.int].cells[4].innerText = (currentRow.visceral_fat * 1).toFixed(1);

            //Muscle Mass:
            progress_table.rows[currentRow.int].cells[5].innerText = (currentRow.muscle_mass * 1).toFixed(1);

            //Physique Rating:
            progress_table.rows[currentRow.int].cells[6].innerText = currentRow.physique_rating;

            //Bone Mass:
            progress_table.rows[currentRow.int].cells[7].innerText = (currentRow.bone_mass * 1).toFixed(1);

            //BMR:
            progress_table.rows[currentRow.int].cells[8].innerText = currentRow.bmr * 1;

            //Metabolic Age:
            progress_table.rows[currentRow.int].cells[9].innerText = currentRow.metabolic_age * 1;

            //Body Water:
            progress_table.rows[currentRow.int].cells[10].innerText = (currentRow.body_water * 1).toFixed(1);

            //Delete Entry:
            progress_table.rows[currentRow.int].cells[11].innerText = '❌';
            progress_table.rows[currentRow.int].cells[11].style.background = 'white';
            progress_table.rows[currentRow.int].cells[11].style.border = 'none';
            progress_table.rows[currentRow.int].cells[11].style.cursor = 'pointer';
            progress_table.rows[currentRow.int].cells[11].addEventListener('click', () => {
                let confirmation = window.confirm(`Are you sure you want to delete this entry done ${currentRow.date}?`);
                if (confirmation) {
                    numberRowsArrayFixGap = numberRowsArray.splice(currentRow.int - 2, numberRowsArray.length);
                    numberRowsArrayFixGap.shift();
                    numberRowsArrayFixGap.forEach(currentRow => {
                        currentRow.int--;
                    })
                    numberRowsArray = numberRowsArray.concat(numberRowsArrayFixGap)
                    localStorage.numberRows = JSON.stringify(numberRowsArray);
                    location.reload();
                }
            })
        });
    
        //Selected Date:
        selectedDateBackground(progress_table.rows.length - 3);
        fullBreakdown(progress_table.rows.length - 1);
        for (let notI = 2; notI < progress_table.rows.length; notI++) {
            progress_table.rows[notI].addEventListener('click', () => {
                selectedDateBackground(notI-2);
                fullBreakdown(notI);
            })
        }  
    }

    else {
        document.querySelector('.header_msg').innerHTML = 'No entries to show';
        progress_table.classList.add('not');
        full_breakdown.classList.add('not');
    }
    
    //Add Entry:
    add.addEventListener('click', () => {
        if (user_details_stored()) {
            window.open('/html/composition_details.html', '_self');
        }
        else {
            window.open('/html/user_details.html', '_self');
        }
    })

    //Clear Entries:
    clear.addEventListener('click', () => {
        if (numberRows() === true) {
            let confirmation = window.confirm(`Are you sure you want to delete all of your entries? \nWarning! All information will be lost and unretreivable`);
            if (confirmation) {
                localStorage.clear();
                location.reload();
            }
        }
    })
}

//scrollable table - maybe only have one tr in the table header but maybe also no outline in the header so the lineing up doesn't make it look weird
//colours for change in breakdown must correlate with the users goals and green insinuates good and red insinuates bad
//automatically fill in details on page not expected to change like height and unit
//add titles to elements
//can't add entries on the same day
//if people do too much in second box then it automatically fills 1st box properly
//put all information on how breakdowns are done in more information just like tanita understanding your body details page 
//settings page
//allow user to choose date format
//allow user to change units 
//allow user to choose if they want current change or total change to display
//message to aware user that site uses localstorage
//allow printing or downloading of user details
//weekly reminder to add input
//if user browser does not support then show images of browsers that do 
//have better wording on the website
//reference and cite websites like the tanita website
//name error message must go when user is unfocussed
//Clean up code