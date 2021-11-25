import IndividualCountries from "../components/IndividualCountries"

const CountryDetails = ({ country , updateVisitedCountry}) => {
    
    const individualCountries = country.map((country, index) => {
        return (
            <div>
                <div className="social-container">
                <div className="social2"></div>
                <div className="social"></div>
            </div>
            <img className="god" src="https://images.lingscars.com/images/index/ling-mad-head.png" />

                <IndividualCountries country={country} key={index} updateVisitedCountry={updateVisitedCountry}/>
            </div>
        )
    })

    return(
        <>
        {individualCountries}
        </>
    );
};

export default CountryDetails;
