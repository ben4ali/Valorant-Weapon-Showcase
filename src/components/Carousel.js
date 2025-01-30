import '../styles/components.css';
import { useState } from 'react';

import { useFetch } from '../hooks/useFetch';
import { WeaponList } from './WeaponList';

import { DisplayCollection } from '../utils/DisplayCollection';
import { CarouselControls } from '../utils/CarouselControl';
import { InfoAnimation } from '../utils/InfoAnimation';

import ElderFlame from '../assets/ElderFlame.png';
import EXO from '../assets/EX.O.webp';
import Oni from '../assets/Oni.webp';
import Mystbloom from '../assets/Mystbloom.webp';
import EntertainementSystem from '../assets/EntertainementSystem.webp';


export const Carousel = () => {
    const displayCollection = DisplayCollection();
    const carouselControls = CarouselControls();
    const infoAnimation = InfoAnimation();

    const [selectedCollection, setSelectedCollection] = useState("1");
    const { data: collections, isPending, error } = useFetch('http://localhost:8080/collections');

    const RankImages = {
        "Ultra": "https://static.wikia.nocookie.net/valorant/images/f/f1/Ultra-edition-icon.png",
        "Exclusive": "https://static.wikia.nocookie.net/valorant/images/7/77/Exclusive-edition-icon.png",
        "Prenium": "https://static.wikia.nocookie.net/valorant/images/2/29/Premium-edition-icon.png",
    }

    const [currentRankImage, setCurrentRankImage] = useState(RankImages["Ultra"]);
    
    let collection = collections?.find(collection => collection.id === selectedCollection);
    function handleOverviewButton() {
        displayCollection.toggleCollection();
    }

    function handleCollectionButton(collection) {
        carouselControls.switchCollection(collection);
        carouselControls.updateBtns(collection);
        
        infoAnimation.hideInfo();
        setTimeout(() => {
            setSelectedCollection(collection);
            setCurrentRankImage(RankImages[collections?.find(c => c.id === collection).Rank]);
            infoAnimation.showInfo();
        }, 400);

        
    }

    return (
        <div className="carousel">

            {/* OVERLAY */}
            <div className="overlay overview"></div>

            {/* CAROUSEL ITEM HOLDER */}
            <div className="carouselItemHolder">
                <img id="background1" className='background activeImage' src={ElderFlame} alt="Weapon" />
                <img id="background2" className='background' src={EXO} alt="Weapon" />
                <img id="background3" className='background' src={Oni} alt="Weapon" />
                <img id="background4" className='background' src={Mystbloom} alt="Weapon" />
                <img id="background5" className='background' src={EntertainementSystem} alt="Weapon" />
            </div>

            {/* OPTION HOLDER */}
            <div className="optionHolder">
                <button onClick={handleOverviewButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                </button> 
                <div className='playNow'>
                    <a href="https://playvalorant.com/en-us/">PLAY NOW</a>    
                </div>   
            </div>

            {/* INFO HOLDER */}
            <div className="infoHolder">
                <div className="rankHolder">
                    <img src={currentRankImage} alt="Rank" />
                    <h3>{collection?.Rank}</h3>
                </div>
                <h2>{collection?.Slogan}</h2>
                <h1 style={{color:collection?.ThemeColor}}>{collection?.Collection}</h1>
                <div className="description">
                    <p>
                        {collection?.Description} 
                    </p>
                </div>

            </div>

            {/* WEAPON LIST HOLDER */}
            <div className="weaponListHolder">
            <h3>WEAPON LIST</h3>
                <WeaponList collectionId = {selectedCollection} />
            </div>

            {/* COLLECTION CAROUSEL BUTTONS */}
            <div className='carouselControls'>
                {collections?.map((collection, index) => (
                    <button
                        key={collection.id}
                        className={collection.id <= selectedCollection ? "active" : ""}
                        data-collectionid={collection.id}
                        onClick={() => handleCollectionButton(collection.id)}
                    ></button>
                ))}
            </div>

        </div>
    )
};