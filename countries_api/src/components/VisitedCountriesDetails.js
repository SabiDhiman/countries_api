import IndividualVisitedCountries from "./IndividualVisitedCountries"

const VisitedCountriesDetails = ({ visited }) => {
    const individualVisitedCountries = visited.map((country, index) => {
        return(
            <div>
            <IndividualVisitedCountries country={country} key={index} />
            </div>
        )
    })

    return(
        <>
        {individualVisitedCountries}
        </>
    )
}

export default VisitedCountriesDetails;