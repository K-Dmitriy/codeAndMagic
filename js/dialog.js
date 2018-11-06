'use strict';
(function () {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;

    var setup = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');

    var startCoords = {
        x: setup.style.left,
        y: setup.style.top
    };

    var onPopupEscPress = function (evt) {
        if (evt.keyCode === ESC_KEYCODE) {
            onPopupClose();
        }
    };

    var onPopupOpen = function () {

        setup.classList.remove('hidden');

        document.addEventListener('keydown', onPopupEscPress);
    };

    var onPopupClose = function () {

        setup.classList.add('hidden');

        setup.style.left = startCoords.x;
        setup.style.top = startCoords.y;

        document.removeEventListener('keydown', onPopupEscPress);
    };

    var onPopupEnterPress = function (evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            document.querySelector('.setup.hidden') ? onPopupOpen() : onPopupClose();
        }
    };

    setupOpen.addEventListener('click', onPopupOpen);

    setupOpen.addEventListener('keydown', onPopupEnterPress);

    setupClose.addEventListener('click', onPopupClose);

    setupClose.addEventListener('keydown', onPopupEnterPress);
})();