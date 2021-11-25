const UpdateVisitedCountryBtn = ({updateVisitedCountry, country}) => {

    return(
        <>
        <button 
        className="country__button"
        onClick={() => updateVisitedCountry(country.name.common)}>
        Visited
        </button>
        </>
    )
}



export default UpdateVisitedCountryBtn;