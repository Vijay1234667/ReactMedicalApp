import React from 'react'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Col } from 'react-bootstrap';



const TeamCard = ({Image, DoctorName,Treatments}) => {
    return (
        <>
            <Col md={4} className='mb-4 mb-md-0'>
                <div className=" team-single-box card">
                    <div className='img-thumb mb-3'>
                        <img className='img-fluid rounded-circle' src={Image} alt="drimage" />
                    </div>
                    <div className='mb-3'>
                        <h4 className='mb-2'>{DoctorName}</h4>
                        <div className='team-treat-btn'>
                            <a href="/" className='btn'>{Treatments}</a>
                        </div>
                    </div>
                    <ul className='social-icons d-flex justify-content-center'>
                        <li>
                            <FacebookOutlinedIcon />
                        </li>
                        <li>
                            <LinkedInIcon />
                        </li>
                        <li>
                            <YouTubeIcon />
                        </li>
                        <li>
                            <TwitterIcon />
                        </li>
                    </ul>
                </div>
            </Col>
        </>

    )
}

export default TeamCard
