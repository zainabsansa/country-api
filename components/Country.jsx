import formatNumber from "../src/utils/formatNumber";

function Country(props) {
  const currency = Object.entries(props.data.currencies)

  return (

    <div className="country">
      <img className="country__img" src={props.data.flags.png} />
      <div className="country__data">
        <h3 className="country__name">{props.data.name.common}</h3>
        <h4 className="country__region">{props.data.region}</h4>
        <p className="country__row"><span>👫</span>{formatNumber(props.data.population)} of people</p>
        <p className="country__row"><span>🗣</span>English</p>
        <p className="country__row"><span>💰</span>{currency[0][1]}</p>
      </div>
    </div>
  );
}

export default Country;
