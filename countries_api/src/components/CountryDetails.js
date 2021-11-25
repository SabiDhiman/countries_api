import IndividualCountries from "../components/IndividualCountries"

const CountryDetails = ({ country , updateVisitedCountry}) => {
    
    const individualCountries = country.map((country, index) => {
        return (
            <div>
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
