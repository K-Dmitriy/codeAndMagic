'use strict';

(function () {

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

        document.querySelector('.setup-similar-list').appendChild(fragment);

        document.querySelector('.setup-similar').classList.remove('hidden');
    };

    renderWizard();

})();