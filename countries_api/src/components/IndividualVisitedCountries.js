const IndividualVisitedCountries = ({country}) => {

    return(
        <div className="country visited">
        <div className="country__name">
            <p>{country.flag}</p>
            <h2>{country.name.common}</h2>
            <p>{country.flag}</p>
        </div>
        <div className="country__population">
            <h3>Population: </h3>
            <p>{country.population}</p>
        </div>
        <div className="country__unMember">
            <h3>UN Member?</h3>
            <p>{country.unMember ? 'Yes' : 'No'}</p>
        </div>
        </div>
    )
}

export default IndividualVisitedCountries;