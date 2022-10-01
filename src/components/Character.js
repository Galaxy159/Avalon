import { useState } from "react";

export default function Character(props) {
  const [variation, setVariation] = useState(0);
  const { details } = props;

  return (
    <>
      <div className="infoCard">
        <div className="infoCard__name">{details.name}</div>
        <img className="infoCard__img" src={details.image} alt={details.name} />
        <div className="infoCard__description">
          <div className="infoCard__description--select">
            <label htmlFor="varOption">וריאציה: </label>
            <select
              id="varOption"
              onChange={(e) => setVariation(e.target.value - 1)}
            >
              {details.variations.map((variation, index) => (
                <option key={index}>{variation.index}</option>
              ))}
            </select>
          </div>
          <div className="infoCard__description--loyalty">
            שיוך: {details.variations[variation].loyalty}
          </div>
          <div className="infoCard__description--limitation">
            הגבלה: {details.variations[variation].limitation}
          </div>
          <div className="infoCard__description--description">
            {details.variations[variation].description}
          </div>
          <div className="infoCard__description--reason">
            למה להשתמש: {details.reason}
          </div>
        </div>
      </div>
    </>
  );
}
