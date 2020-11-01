import React from 'react'
const Weather = props => {
  return (
    <div className='infos'>
      {props.Tempreature && (
        <p className='info-key'>
          Tempreature :{' '}
          <span className='info-value'>{props.Tempreature} degree</span>
        </p>
      )}
      {props.City && (
        <p className='info-key'>
          City : <span className='info-value'>{props.City}</span>
        </p>
      )}
      {props.Country && (
        <p className='info-key'>
          Country : <span className='info-value'>{props.Country}</span>
        </p>
      )}
      {props.Humidity && (
        <p className='info-key'>
          Humidity : <span className='info-value'>{props.Humidity}</span>
        </p>
      )}
      {props.Description && (
        <p className='info-key'>
          Description : <span className='info-value'>{props.Description}</span>
        </p>
      )}
      {props.Error && (
        <p className='info-key'>
          Tempreature : <span className='info-value'>{props.Error}</span>
        </p>
      )}
    </div>
  )
}
export default Weather
