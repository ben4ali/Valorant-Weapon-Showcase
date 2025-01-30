import { useFetch } from "../hooks/useFetch";

export const WeaponList = ({collectionId}) =>{
    
    const { data: collection, isPending, error } = useFetch('http://localhost:8080/collections/'+collectionId);

    let Weapons = collection?.Weapons;

    return(
        <div className="weaponList">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {Weapons && Weapons.map((weapon) => (
                <div className="weaponItem" key={weapon.id}>
                    <img src={weapon.Image} alt="Weapon" />
                    <div className="weaponInfo">
                        <h4>{weapon.Name}</h4>
                        <p>{weapon.Price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}