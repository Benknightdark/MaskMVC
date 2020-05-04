
export const initMaskMobilePhone = (element) => {
    const queryElement= $(element)
    queryElement.data('unmask-value', '')
    const mask = IMask(
        element,
        {
            mask: '{\\0}{9}(00)-(000)-(000)',
            lazy: false,
            overwrite: true,
            autofix: true,
        });
    mask.on("accept", () => {
        queryElement.data('unmask-value', mask.unmaskedValue)
        console.log(queryElement.data('unmask-value'))
        
    });
}