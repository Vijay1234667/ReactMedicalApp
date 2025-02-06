import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const SamePrimaryBtn = ({BtnName}) => {
    return (
        <>
            <div className='Same-primaryBtn mb-5 md-mb-4'>
                <a href="/" className='btn'>{BtnName}<span><ArrowOutwardIcon className='fs-5' /></span></a>
            </div>
        </>
    )
}

export default SamePrimaryBtn
