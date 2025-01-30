import { useState } from "react";
import { useFetch } from "../hooks/useFetch"

export const WeaponList = ({collectionId}) =>{
    const { data: collection, isPending, error } = useFetch('http://localhost:8080/collections/'+collectionId);
    console.log(collection.Weapons);
    return(
        <div className="weaponList">

            <div className="weaponItem">
                <img src="https://static.wikia.nocookie.net/valorant/images/c/c4/Elderflame_Frenzy.png" alt="Weapon" />
                <div className="weaponInfo">
                    <h4>FRENZY</h4>
                    <p>2,475</p>
                </div>
            </div>

        </div>
    )
}