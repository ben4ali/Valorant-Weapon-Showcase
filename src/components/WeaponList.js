import data from "../data";

export const WeaponList = ({ collectionId }) => {
  const collection = data.collections.find((c) => c.id === collectionId);

  const Weapons = collection?.Weapons || [];

  return (
    <div className="weaponList">
      {/* Optionally, you can add a fallback loading or error state if needed */}
      {Weapons.length === 0 && <div>No weapons found.</div>}
      {Weapons.map((weapon) => (
        <div className="weaponItem" key={weapon.id}>
          <img src={weapon.Image} alt={weapon.Name} />
          <div className="weaponInfo">
            <h4>{weapon.Name}</h4>
            <p>{weapon.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};