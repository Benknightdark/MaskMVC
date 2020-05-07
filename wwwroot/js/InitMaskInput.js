import { initMaskMobilePhone } from './CustomMask.js';

((document, window) => {
    // 初始化手機號碼Mask
    const maskMobilePhoneEl = document.querySelectorAll('.mask-mobile-phone');
    for (let index = 0; index < maskMobilePhoneEl.length; index++) {
        const element = maskMobilePhoneEl[index];
        initMaskMobilePhone(element);
    }
    // 表單送出時，設定mask-input value的值為unmask value
    $('form').submit(function () {
       // event.preventDefault();
        const maskInputEl = $('.mask-input');
        for (let index = 0; index < maskInputEl.length; index++) {
            const element = maskInputEl[index];
            $(element).val($(element).data('unmask-value'));
        }
    });

})(document, window);
