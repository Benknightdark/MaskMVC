
export const initMaskMobilePhone = () => {
   const maskMobilePhoneEl=document.getElementsByClassName('mask-mobile-phone');
   for (let index = 0; index < maskMobilePhoneEl.length; index++) {
       const element = maskMobilePhoneEl[index];
       IMask(
        element,
        {
            mask: '+{7}(000)000-00-00'
        });
   }
    
}