import React from 'react'
import CountryData from '../CountryData/CountryData'

export default function CountryDetail(props) {
    // const { country, handelVisitedCountry, handelVisitedFlags } = props;
  return (
    <div>
        <h4>CountryDetail</h4>
        <hr />
        {/* <CountryData         
        country={country}
        handelVisitedCountry={handelVisitedCountry}
        handelVisitedFlags={handelVisitedFlags} /> */}
        <CountryData {...props}/>
    </div>
  )
}
