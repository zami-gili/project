/*function validation (form) {
    let result = true;
    if (document.forms.name.value === '') {
        result = false
    }
    return result;
};*/

/*document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('pr')
    if(validation(this) == true){
        alert('вот ваше готовое резюме');
    };
}); */




function showResume(event) {

    event.preventDefault(

    )
    const form = document.getElementById("resume-form");
    const view = document.getElementById("resume-view");
    const name = form.name.value;
    const nameInside = document.getElementById("name-inside");
    const dateInside = document.getElementById("date-inside");
    const cityInside = document.getElementById("city-inside");
    const numberInside = document.querySelector("#number-inside");
    const emailInside = document.getElementById("email-inside");

    const addingInterests = document.querySelectorAll(".adding-interests");
    const interestsTextarea = document.getElementsByClassName("interest-textarea");
    const secondMainSectionInterestsAdded = document.getElementsByClassName("second-main-section-interests-added")[0];

// фио и лич данные

    if (name.length === 0) {
        alert('заполните поле');
        return;
    };

    nameInside.innerHTML = form.name.value;
   // view.innerHTML = 'ФИО' + form.name.value;
    dateInside.innerHTML = form.date.value;
    cityInside.innerHTML = form.city.value;
    numberInside.innerHTML = form.number.value;
    emailInside.innerHTML = form.email.value;
    
//интересы
    let kInterests = 1;

    if (interestsTextarea.length !== 1 ) {
        addingInterests.forEach(addingInterest => {
            if (addingInterest.value !== '') {
                const newAddingInterest = document.createElement("p");
                newAddingInterest.innerHTML = addingInterest.value;
                secondMainSectionInterestsAdded.appendChild(newAddingInterest);
            } else {
                kInterests = kInterests+1;
            }
        } );
    } else {
        const secondMainSection = document.getElementsByClassName("second-main-section")[0];
        secondMainSection.remove();
        kInterests = 0
    }

    if (kInterests === interestsTextarea.length) {
        const secondMainSection = document.getElementsByClassName("second-main-section")[0];
        secondMainSection.remove();
    }

// языки

    let kLanguages = 1;
    const thirdMainSectionLanguagesForAdded = document.getElementsByClassName("third-main-section-languages-for-added")[0];
    const addingLanguages = document.getElementsByName("nameLanguages");
    const addingLevel = document.getElementsByName("nameLevel");
    const textareasForLanguages = document.getElementsByClassName("textareas-for-languages");

    if (textareasForLanguages.length !== 1 ) {
        let kLevel = 0;
        addingLanguages.forEach(addingLanguage => {
            if ((addingLanguage.value !== '') && (addingLevel[kLevel].value !== '')) {
                const newAddingLanguage = document.createElement("div");
                newAddingLanguage.className = 'third-main-section-languages-added d-flex'
                newAddingLanguage.innerHTML = `<p class="language-type">${addingLanguage.value}</p><p class="language-level">${addingLevel[kLevel].value}</p>`;
                thirdMainSectionLanguagesForAdded.appendChild(newAddingLanguage);
                kLevel = kLevel + 1;
            } else {
                kLanguages = kLanguages+1;
                console.log(kLanguages, textareasForLanguages.length)
            }
        } );
    } else {
        const thirdMainSection = document.getElementsByClassName("third-main-section")[0];
        thirdMainSection.remove();
        kLanguages = 0
    }

    if (kLanguages === textareasForLanguages.length) {
        const thirdMainSection = document.getElementsByClassName("third-main-section")[0];
        thirdMainSection.remove();
    }

// фио 

    document.getElementById("h1").innerHTML = name;
    if (document.getElementById("id-textarea-about-me").value.length !== 0) {
        document.getElementById("txt-about-me").innerHTML = document.getElementById("id-textarea-about-me").value;
    } else {
        const secondMainInfo = document.querySelector(".second-main-info-about-me");
        secondMainInfo.remove();
    };
//опыт работы 

    function parseDate(event) {
        var monthsNames = {
            "январь": 0, "февраль": 1, "март": 2, "апрель": 3, "май": 4, "июнь": 5,
        "июль": 6, "август": 7, "сентябрь": 8, "октябрь": 9, "ноябрь": 10, "декабрь": 11
        };

        const parts = event.split(' ');
        const month = monthsNames[parts[0].toLowerCase()];
        var year = parseInt(pasts[1]);

        return new Date(year, month);
    }

    function formatDate(dateString) {
      var date = new Date(dateString);
      var options = { year: 'numeric', month: 'long' };
      return date.toLocaleDateString("ru-RU", options);
    };

    function parseEnd(event) {
        if (event.value === '') {
            return 'наст. время';
        } else {
            return formatDate(event);
        };
    };

    let kExperience = 1;
    const secondMainInfoExperienceJob = document.getElementsByClassName("second-main-info-Experience-job")[0];
    const addingJobTitles = document.getElementsByName("nameJobTitle");
    const addingStartsOfWorking = document.getElementsByName("nameStartOfWorking");
    const addingEndsOfWorking = document.getElementsByName("nameEndOfWorking");
    const addingPlacesOfWork = document.getElementsByName("namePlaceOfWork");
    const addingOccupation = document.getElementsByName("nameOccupation");

    const textareasForExperience = document.getElementsByClassName("textareas-for-experience");

    if (textareasForExperience.length !== 1 ) {
        let kJob = 0;
        addingJobTitles.forEach(addingJobTitle => {
            if (addingJobTitle.value !== '') {
                const newAddingJobTitle = document.createElement("div");
                newAddingJobTitle.className = 'second-main-info-job-added';
                if (addingStartsOfWorking[kJob].value === '') {
                    newAddingJobTitle.innerHTML = ` <div class="statement-mark-job d-flex">
                <p class="statement-mark-job-name">${addingJobTitle.value}</p><p class="statement-mark-job-date">${parseEnd(addingEndsOfWorking[kJob])}</p>
            </div>
            <p class="place-of-work">${addingPlacesOfWork[kJob].value}</p>
            <p class="talk-about-work">${addingOccupation[kJob].value}</p>`;
                    secondMainInfoExperienceJob.appendChild(newAddingJobTitle)

                } else {
                     
                }
                kJob = kJob + 1;
            } else {
                kLanguages = kLanguages+1;
                console.log(kLanguages, textareasForLanguages.length)
            }
        } );
    } else {
        const thirdMainSection = document.getElementsByClassName("third-main-section")[0];
        thirdMainSection.remove();
        kLanguages = 0
    }

    if (kLanguages === textareasForLanguages.length) {
        const thirdMainSection = document.getElementsByClassName("third-main-section")[0];
        thirdMainSection.remove();
    } 
    




    form.style.display = 'none';
    view.style.display = 'block';
}

const buttonForSubmit = document.querySelector('.forSubmit');

buttonForSubmit.addEventListener("click", showResume)

/*const buttonForAddingInterests = document.querySelector('.for-adding-interests');
const theSecondSection = document.querySelector('.second-main-section');
const containerForInterests = document.querySelector('.container-for-interests');
buttonForAddingInterests.addEventListener("click", function(event) {
    const newElement = `<textarea style="flex-wrap: wrap;" name="nameInterests" rows="1" style="width: 50px;"></textarea> 
`;

    containerForInterests.insertAdjacentHTML(
    'afterend',
    newElement
    ); 
    
    
   

    event.preventDefault();

});



const buttonForRemovingInterests = document.querySelector('.for-removing-interests-main');
buttonForRemovingInterests.addEventListener('click', function(event) {
    
}); 




/* const deleteInterest = newElement.querySelector('.for-removing-interests');
console.log(deleteInterest)
deleteInterest.addEventListener("click", function (event) {
    theSecondSection.removeChild(newElement);
});
*/


/* buttonForAddingInterests.addEventListener("click", addInterests);
function addInterests(event) {
    const newInterestsInput = document.createElement('div');
    newInterestsInput.classList.add('second-main-section');
    newInterestsInput.innerHTML = `<textarea style="flex-wrap: wrap;" name="nameInterests" rows="1" style="width: 50px;"></textarea> 
    <button value="delete" class="for-removing-interests">delete</button>`;
    theSecondSection.appendChild(newInterestsInput);

    event.preventDefault
    
}
 form.addEventListener('submit', function(event) {
    event.preventDefault
 })
 */ 
 
const buttonForAddingInterests = document.querySelector('.for-adding-interests');
const buttonForRemovingInterests = document.querySelector('.for-removing-interests');
const secondMainDiv = document.getElementById("second-main-div");

function addInterest(event) {
    event.preventDefault();
    const newInterest = document.createElement("div");
    newInterest.className = "interest-textarea";
    newInterest.innerHTML = `<textarea style="flex-wrap: wrap;" class="adding-interests" name="nameInterests" rows="1" style="width: 50px;"></textarea>`;
    secondMainDiv.appendChild(newInterest);
};
function removeInterest(event) {
    event.preventDefault();
    const interestsTextarea = document.getElementsByClassName("interest-textarea");
    if (interestsTextarea.length > 1) {
        secondMainDiv.removeChild(interestsTextarea[interestsTextarea.length - 1]);
    };
};

buttonForAddingInterests.addEventListener("click", addInterest);
buttonForRemovingInterests.addEventListener("click", removeInterest);


const buttonForAddingLanguages = document.querySelector('.for-adding-languages');
const buttonForRemovingLanguages = document.querySelector('.for-removing-languages');
const containerForLanguages = document.getElementById("container-for-languages");

function addLanguage(event) {
    event.preventDefault();
    const newLanguage = document.createElement("div");
    newLanguage.className = "textareas-for-languages";
    newLanguage.innerHTML = `<textarea style="flex-wrap: wrap;" name="nameLanguages" rows="1" style="width: 50px;"></textarea> <input name="nameLevel" type="text" placeholder="уровень" style="width: 35px">`;
    containerForLanguages.appendChild(newLanguage);
}
function removeLanguage(event) {
    event.preventDefault();
    const textareasForLanguages = document.getElementsByClassName("textareas-for-languages");
    if (textareasForLanguages.length > 1) {
        containerForLanguages.removeChild(textareasForLanguages[textareasForLanguages.length - 1]);
    };
};

buttonForAddingLanguages.addEventListener("click", addLanguage);
buttonForRemovingLanguages.addEventListener("click", removeLanguage);

const buttonForAddingExperience = document.querySelector('.for-adding-experience');
const buttonForRemovingExperience = document.querySelector('.for-removing-experience');
const containerForExperience = document.getElementById("container-for-experience");

function addExperience(event) {
    event.preventDefault();
    const newExperience = document.createElement("div");
    newExperience.className = "textareas-for-experience";
    newExperience.innerHTML = `<textarea style="flex-wrap: wrap;" name="nameJobTitle" placeholder="Должность" rows="1" style="width: 50px;"></textarea> 
    <input type="date" name="nameStartOfWorking">
    <input type="date" name="nameEndOfWorking">
    <textarea name="namePlaceOfWork" placeholder="место работы" cols="15" rows="5"></textarea>
    <textarea name="nameOccupation" placeholder="чем занимались будучи на этой должности" cols="20" rows="7"></textarea>`;
    containerForExperience.appendChild(newExperience);
}
function removeExperience(event) {
    event.preventDefault();
    const textareasForExperience = document.getElementsByClassName("textareas-for-experience");
    if (textareasForExperience.length > 1) {
        containerForExperience.removeChild(textareasForExperience[textareasForExperience.length - 1]);
    };
};

buttonForAddingExperience.addEventListener("click", addExperience);
buttonForRemovingExperience.addEventListener("click", removeExperience);

const buttonForAddingEducation = document.querySelector('.for-adding-education');
const buttonForRemovingEducation = document.querySelector('.for-removing-education');
const containerForEducation = document.getElementById("container-for-education");

function addEducation(event) {
    event.preventDefault();
    const newEducation = document.createElement("div");
    newEducation.className = "textareas-for-education";
    newEducation.innerHTML = `<textarea style="flex-wrap: wrap;" name="nameHighEducation" placeholder="вид высшего образования" rows="1" style="width: 50px;"></textarea> 
    <input type="date" name="nameStartOfStyding">
    <input type="date" name="nameEndOfStyding">
    <textarea name="namePlaceOfStyding" placeholder="место учебы" cols="15" rows="5"></textarea>
    <textarea name="nameAdditionalInformation" placeholder="дополнительная информация" cols="20" rows="7"></textarea>`;
    containerForEducation.appendChild(newEducation);
}
function removeEducation(event) {
    event.preventDefault();
    const textareasForEducation = document.getElementsByClassName("textareas-for-education");
    if (textareasForEducation.length > 1) {
        containerForEducation.removeChild(textareasForEducation[textareasForEducation.length - 1]);
    };
};

buttonForAddingEducation.addEventListener("click", addEducation);
buttonForRemovingEducation.addEventListener("click", removeEducation);

const buttonForAddingCourses = document.querySelector('.for-adding-courses');
const buttonForRemovingCourses = document.querySelector('.for-removing-courses');
const containerForCourses = document.getElementById("container-for-courses");

function addCourses(event) {
    event.preventDefault();
    const newCourses = document.createElement("div");
    newCourses.className = "textareas-for-courses";
    newCourses.innerHTML = `<textarea style="flex-wrap: wrap;" name="nameOfCourse" placeholder="название курса" rows="1" style="width: 50px;"></textarea> 
    <input type="date" name="nameStartOfCourse">
    <input type="date" name="nameEndOfCourse">
    <textarea name="nameOfCompany" placeholder="название организации" cols="15" rows="5"></textarea>`;
    containerForCourses.appendChild(newCourses);
}
function removeCourses(event) {
    event.preventDefault();
    const textareasForCourses = document.getElementsByClassName("textareas-for-courses");
    if (textareasForCourses.length > 1) {
        containerForCourses.removeChild(textareasForCourses[textareasForCourses.length - 1]);
    };
};

buttonForAddingCourses.addEventListener("click", addCourses);
buttonForRemovingCourses.addEventListener("click", removeCourses);