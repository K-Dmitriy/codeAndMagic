'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomValue = function (array) {
    var value = array[Math.floor(Math.random() * array.length)];
    return value;
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

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizard();

