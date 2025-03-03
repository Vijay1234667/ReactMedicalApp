import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const TermsAndConditions = () => {
     useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="Terms-condition-section" id='terms'>
                <Container>
                    <div>
                        <div>
                            <h3  className='text-white'>Terms and Conditions</h3>
                            <p>
                                Welcome to FlightVIP.co. These terms and conditions outline the rules and regulations for
                                using
                                FlightVIP.co's Website.
                            </p>
                            <p>
                                By accessing this website, we assume you fully accept these terms and conditions. Do not
                                continue to use FlightVIP.co's website if you do not accept all of the terms and conditions
                                stated on this page.
                            </p>
                        </div>
                        <div>
                            <h4>User Behavior</h4>
                            <p>
                                Users are expected to use the website ethically and comply with applicable laws and
                                regulations.
                            </p>
                        </div>
                        <div>
                            <h4>Limitations</h4>
                            <p>
                                In no event shall FlightVIP.co or its suppliers be liable for any damages (including,
                                without limitation, damages for loss of data or profit or due to business interruption)
                                arising from the use or inability to use the materials on FlightVIP.co's website.
                            </p>
                        </div>
                        <div>
                            <h4>Accuracy of Materials</h4>
                            <p>
                                The materials appearing on FlightVIP.co's website could include technical, typographical, or
                                photographic errors. FlightVIP.co does not warrant that any of the materials on its website
                                are accurate, complete, or current.
                            </p>
                        </div>
                        <div>
                            <h4>Links</h4>
                            <p>
                                FlightVIP.co has not reviewed all of the sites linked to its website and is not responsible
                                for the contents of any such linked site.
                            </p>
                        </div>
                        <div>
                            <h4>Modifications</h4>
                            <p>
                                FlightVIP.co may revise these terms of service for its website at any time without notice.
                                By using this website, you agree to be bound by the then-current version of these Terms and
                                Conditions.
                            </p>
                        </div>
                        <div>
                            <h4>Governing Law</h4>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws and you
                                irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                            <p>
                                For any questions or concerns regarding our privacy policy or terms and conditions, please
                                contact us at support@flightvip.com
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TermsAndConditions
