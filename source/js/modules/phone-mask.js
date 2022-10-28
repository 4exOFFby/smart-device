const form = document.querySelector('.feedback__form');

const renderPhoneNumberMask = () => {
  [].forEach.call(document.querySelectorAll('input[name="user-number"]'), function (input) {
    let keyCode;
    function mask(evt) {
      let pos = evt.target.selectionStart;
      if (pos < 3) {
        evt.preventDefault();
        evt.target.selectionStart = 4;
      }
      let matrix = '+7 (___) __-__-___';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = evt.target.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, evt.target.value.length).replace(/_+/g,
          function (a) {
            return '\\d{1,' + a.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(evt.target.value) || evt.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
        evt.target.value = newValue;
      }
      if (evt.type === 'blur' && evt.target.value.length < 18) {
        evt.target.value = evt.target.value;
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);

    form.addEventListener('change', () => {
      let phoneInput = document.querySelector('input[name="user-number"]');
      let phoneInputLength = phoneInput.value.length;
      phoneInput.addEventListener('focus', (e) => {
        if (phoneInputLength < 4) {
          phoneInput.setCustomValidity('Введите номер целеком');
          e.preventDefault();
        }
      });

      phoneInput.addEventListener('change', (e) => {
        if (phoneInputLength < 18 && phoneInputLength > 4) {
          phoneInput.setCustomValidity('Введите номер целеком');
          e.preventDefault();
        }
      });

      phoneInput.addEventListener('blur', () => {
        if (phoneInputLength >= 18) {
          phoneInput.setCustomValidity('');
        }
      });
    });
  });
};

export {renderPhoneNumberMask};
