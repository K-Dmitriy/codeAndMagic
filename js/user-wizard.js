'use strict';

(function () {

    var setupPlayer = document.querySelector('.setup-player');
    var wizardCoat = setupPlayer.querySelector('.wizard-coat');
    var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
    var fireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');

    wizardCoat.addEventListener('click', function () {
        wizardCoat.style.fill = generateRandomValue(COAT_COLORS);
        setupPlayer.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
    });

    wizardEyes.addEventListener('click', function () {
        wizardEyes.style.fill = generateRandomValue(EYES_COLORS);
        setupPlayer.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
    });

    fireballWrap.addEventListener('click', function () {
        fireballWrap.querySelector('input[name="fireball-color"]').value = generateRandomValue(FIREBALL_COLORS);

        fireballWrap.style.backgroundColor = fireballWrap.querySelector('input[name="fireball-color"]').value;
    });

})();