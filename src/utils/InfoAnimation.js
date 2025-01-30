import gsap from 'gsap';

export const InfoAnimation = () => {

    function hideInfo(){
        const infoHolder = document.querySelector('.infoHolder');
        const weaponList = document.querySelector('.weaponList');
        gsap.to(infoHolder.children, {duration: 0.1, x: -350, opacity: 0, ease: 'sine',});
        gsap.to(weaponList.children, {duration: 0.25, opacity: 0, ease: 'sine'});
    }

    function showInfo(){
        const infoHolder = document.querySelector('.infoHolder');
        const weaponList = document.querySelector('.weaponList');
        gsap.to(infoHolder.children, {duration: 0.25, x: 0, opacity: 1, stagger:0.1, ease: 'sine'});
        gsap.to(weaponList.children, {duration: 0.25, opacity: 1, ease: 'sine',stagger:0.1});
    }
    return{hideInfo, showInfo};
};