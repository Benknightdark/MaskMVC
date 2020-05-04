import { getMaskInput } from "./helpers/MaskInput.js";
/**
 *
 * 初始化手機號碼Input Mask
 * @param {*} element
 */
export const initMaskMobilePhone = (element) => {
    const queryElement = $(element)
    queryElement.data('unmask-value', '')
    const mask = getMaskInput(element,
        {
            mask: '{\\0}{9}(00)-(000)-(000)',
            lazy: false,
            overwrite: true,
            autofix: true,
        });
    mask.on("accept", () => {
        queryElement.data('unmask-value', mask.unmaskedValue)
    });
}