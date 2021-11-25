import UpdateVisitedCountryBtn from "./UpdateVisitedCountryBtn";
import { useState } from "react";

const IndividualCountries = ({country, updateVisitedCountry}) => {
    
    const [readMore, setReadMore] = useState(false);
    const linkName=readMore ? 'Read Less' : 'Read More';

    const extraContent=
    <>
    <div className="country__heading">
        <h3>Capital: </h3>
        <p className="">{country.capital}</p>
    </div>
    <div className="country__heading">
        <h3>Region: </h3>
        <p className="">{country.region}</p>
    </div>
     <div className="country__heading">
        <h3>Independent? </h3>
        <p>{country.independent ? 'Yes' : 'No'}</p>
    </div>
    </>
    ;

    return(
        <div className="country">
            <div className="country__heading">
                <p>{country.flag}</p>
                <h2>{country.name.common}</h2>
                <p>{country.flag}</p>
            </div>
            <div className="country__heading">
                <h3>Population: </h3>
                <p>{country.population}</p>
            </div>
            <div className="country__heading">
                <h3>UN Member?</h3>
                <p>{country.unMember ? 'Yes' : 'No'}</p>
            </div>
            <div className="read-more">
            <a className="read-more__link" onClick={()=>{setReadMore(!readMore)}}><p className="link-name">{linkName}</p></a>
            {readMore && extraContent}
            </div>
            <div className="button-container">
                <UpdateVisitedCountryBtn updateVisitedCountry={updateVisitedCountry} country={country}/>
            </div>
            <hr/>
        </div>
    )

}

export default IndividualCountries;