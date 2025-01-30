import gsap from 'gsap';

export const CarouselControls = () => {
    function switchCollection(collectionNumber){
        const lastCollection = document.querySelector(".background.activeImage");
        const collection = document.getElementById("background"+collectionNumber);
        console.log(lastCollection);
        gsap.set(collection, { opacity: 0 });
        gsap.to(lastCollection, { duration: 0.5, opacity: 0,onComplete: () => {
            lastCollection.classList.remove("activeImage");
        }});
        collection.classList.add("activeImage");
        gsap.to(collection, { duration: 0.5, opacity: 1 });
    }

    function updateBtns (collectionNumber){
        const btns = document.querySelectorAll(".carouselControls button");
        btns.forEach(btn => {
            if (parseInt(btn.getAttribute("data-collectionid")) <= collectionNumber) {
                btn.classList.add("active");
            }else{
                btn.classList.remove("active");
            }
        });
    }

    return{
        switchCollection,
        updateBtns
    }
};