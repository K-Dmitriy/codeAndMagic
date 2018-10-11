'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        onPopupClose();
    }
};

var onPopupClose = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupOpen = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};

var onPopupEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        return document.querySelector('.setup.hidden') ? onPopupOpen() : onPopupClose();
    }
};

var userNameInput = setup.querySelector('.setup-user-name');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var onNameInputValidation = function () {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязательное поле');
    } else {
        userNameInput.setCustomValidity('');
    }
};

var onNameInputTooShort = function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
        target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
        target.setCustomValidity('');
    }
};

var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var generateRandomValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

var wizards = [
    {
        name: generateRandomValue(FIRST_NAMES) + ' ' + generateRandomValue(LAST_NAMES),
        coatColor: generateRandomValue(COAT_COLORS),
        eyesColor: generateRandomValue(EYES_COLORS)
    },
    {
        name: generateRandomValue(FIRST_NAMES) + ' ' + generateRandomValue(LAST_NAMES),
        coatColor: generateRandomValue(COAT_COLORS),
        eyesColor: generateRandomValue(EYES_COLORS)
    },
    {
        name: generateRandomValue(FIRST_NAMES) + ' ' + generateRandomValue(LAST_NAMES),
        coatColor: generateRandomValue(COAT_COLORS),
        eyesColor: generateRandomValue(EYES_COLORS)
    },
    {
        name: generateRandomValue(FIRST_NAMES) + ' ' + generateRandomValue(LAST_NAMES),
        coatColor: generateRandomValue(COAT_COLORS),
        eyesColor: generateRandomValue(EYES_COLORS)
    }
];

var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
};

var renderWizard = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(createWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizard();

setupOpen.addEventListener('click', onPopupOpen);

setupOpen.addEventListener('keydown', onPopupEnterPress);

setupClose.addEventListener('click', onPopupClose);

setupClose.addEventListener('keydown', onPopupEnterPress);

userNameInput.addEventListener('invalid', onNameInputValidation);

userNameInput.addEventListener('input', onNameInputTooShort);

wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = generateRandomValue(COAT_COLORS);
    setup.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = generateRandomValue(EYES_COLORS);
    setup.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
});

fireballWrap.addEventListener('click', function () {
    fireballWrap.querySelector('input[name="fireball-color"]').value = generateRandomValue(FIREBALL_COLORS);

    fireballWrap.style.backgroundColor = fireballWrap.querySelector('input[name="fireball-color"]').value;
});