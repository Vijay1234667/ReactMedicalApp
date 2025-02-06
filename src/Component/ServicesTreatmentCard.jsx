import React from 'react'

const ServicesTreatmentCard = ({image,TreatName,TreatText,TreatBtn }) => {
    return (
        <>
            <div className="services-treat-card">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='ps-3 card-body'>
                    <h4>{TreatName}</h4>
                    <p>{TreatText}</p>
                    <div className='secondary-read-more-btn'>
                        <a href="/" className='read-more-btn btn'>{TreatBtn}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesTreatmentCard
