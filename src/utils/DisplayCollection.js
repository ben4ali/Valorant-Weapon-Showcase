import gsap from 'gsap';

export const DisplayCollection = () => {
    let isCollectionVisible = false;

    function showCollection() {
        gsap.to(".overview", { duration: 0.5, opacity: 1 });
        gsap.to(".infoHolder", { duration: 0.5, opacity: 1, delay: 0.25 });
        gsap.to(".weaponListHolder", { duration: 0.5, opacity: 1, delay: 0.25 });
        isCollectionVisible = true;
        console.log('showing collection');
    }

    function hideCollection() {
        gsap.to(".overview", { duration: 0.5, opacity: 0, delay: 0.25  });
        gsap.to(".infoHolder", { duration: 0.5, opacity: 0 });
        gsap.to(".weaponListHolder", { duration: 0.5, opacity: 0 });
        isCollectionVisible = false;
        console.log('hiding collection');
    }

    function toggleCollection() {
        if (isCollectionVisible) {
            hideCollection();
        } else {
            showCollection();
        }
    }

    return {
        showCollection,
        hideCollection,
        toggleCollection
    };
};