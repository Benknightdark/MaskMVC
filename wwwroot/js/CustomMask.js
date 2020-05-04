
export const initMaskMobilePhone = () => {
    const maskMobilePhoneEl = document.querySelectorAll('.mask-mobile-phone');
    for (let index = 0; index < maskMobilePhoneEl.length; index++) {
        const element = maskMobilePhoneEl[index];
        const mask = IMask(
            element,
            {
                mask: '{\\0}{9}(00)-(000)-(000)',
                lazy: false,
                overwrite: true,
                autofix: true,
            });
        mask.on("accept", () => {
           // element.value=mask.unmaskedValue;
            mask.updateValue(mask.unmaskedValue)
            element.value=mask.unmaskedValue;
            console.log(mask.unmaskedValue)
        });
    }
}