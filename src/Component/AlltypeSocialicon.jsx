import React from 'react'
// icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const AlltypeSocialicon = () => {
    return (
        <>
            <ul className='all-type-social-icons d-flex p-0'>
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
        </>
    )
}

export default AlltypeSocialicon
