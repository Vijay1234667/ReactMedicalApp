import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const PrivacyPage = () => {
     useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    return (
        <>
            <section className='PrivacyPolicy-Section' id='privacy'>
                <Container>
                    <div className='PrivacyPolicy-Body-Content'>
                        <div>
                            <h3 className='text-white'>Privacy Policy</h3>
                            <p>
                                Welcome to FlightVIP. Your privacy is of utmost importance to us. This Privacy Policy
                                outlines the types of information we collect from you, how we use it, and the steps we take
                                to ensure it is protected.
                            </p>
                        </div>
                        <div>
                            <h4>Information We Collect</h4>
                            <p>
                                When you use FlightVIP.co to book flight tickets, we collect the following types of
                                information:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        <strong>Personal Information:</strong> This includes your full name, email address,
                                        phone number, and
                                        billing information necessary for booking flights.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Tracking and Cookies Data:</strong> We use cookies and similar tracking
                                        technologies to track
                                        activity on our platform and hold certain information.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong> Usage Data:</strong> Information on how the service is accessed and used.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Flight Preferences:</strong> Your preferred airlines, seat preferences, and
                                        frequent flyer
                                        numbers to customize your experience.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Geolocation Data:</strong> We may collect this if you consent to provide us
                                        with your
                                        location so we can tailor flights or provide the nearest airport information.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong> Communication Data:</strong> Includes records of your interactions with our
                                        customer support,
                                        such as call logs, emails, and chat transcripts.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong> Device Information:</strong> We collect information about the devices you
                                        use to access our
                                        platform, including your IP address, browser type, and version.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>How We Use Your Information</h4>
                            <p>
                                The information we collect from you may be used in the following ways:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        To facilitate the booking of your flight tickets.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To personalize your user experience and to allow us to deliver the type of content
                                        and product offerings in which you are most interested.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To improve our website in order to serve you better.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To allow us to better service you in responding to your customer service requests.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To administer a contest, promotion, survey, or other site feature.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To quickly process your transactions.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To ask for ratings and reviews of services or products.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To follow up with them after correspondence (live chat, email, or phone inquiries).
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Protection of Your Information</h4>
                            <p>
                                We implement various security measures when users use our service, enter, submit, or access
                                their information to maintain the safety of their personal information.
                            </p>
                        </div>
                        <div>
                            <h4>Sharing Your Personal Information</h4>
                            <p>
                                We do not sell, trade, or otherwise transfer your Personally Identifiable Information to
                                outside parties unless we provide users with advance notice. This does not include website
                                hosting partners and other parties who assist us in operating our website, conducting our
                                business, or serving our users, so long as those parties agree to keep this information
                                confidential.
                            </p>
                        </div>
                        <div>
                            <h4>Your Rights</h4>
                            <p>
                                You have the right to access, correct, or delete your personal data. If you wish to exercise
                                any of these rights, please contact us at our support email at support@flightsvip.co.
                            </p>
                        </div>
                        <div>
                            <h4>Changes to This Privacy Policy</h4>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on this page. You are advised to review this Privacy Policy
                                periodically for any changes.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PrivacyPage
