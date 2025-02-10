import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Data from "../Data.json";
// images

// Icons
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SamePrimaryBtn from '../Component/SamePrimaryBtn';

const LatesBlog = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 6;

    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const record = Data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Data.length / recordPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const changePage = (n) => {
        setCurrentPage(n);
    };

    let base_url = process.env.REACT_APP_BASE_URL;
    let public_url = process.env.PUBLIC_URL;


    return (
        <>
            <section className='lates-blog-section'>
                <Container>
                    <Row className='justify-content-between mb-3 mb-md-5'>
                        <Col md={6}>
                            <div className='heart-rotate-main-body'>
                                <h6>Lates Blog</h6>
                                <h3>Read Our Latest Insights
                                    From Recent Blogs</h3>
                            </div>
                        </Col>
                        <Col md={2} className="view-all-btn">
                            <SamePrimaryBtn BtnName="View All Blogs" />
                        </Col>
                    </Row>
                    <Row>

                        {
                            record.map((Blogdata, i) => (
                                <Col md={4} key={i}>
                                    <div className="card mb-2 mb-md-4">
                                        <div>
                                        <img className='img-fluid' src={`${base_url}${public_url}${Blogdata.BlogImage}`} alt="latesblogimg1" />
                                        </div>
                                        <div className='blog-bottom-bg-success d-flex justify-content-around align-items-center'>
                                            <p>{Blogdata.BlogTextLeft}</p>
                                            <p>{Blogdata.BlogTextRight}</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li className='mb-3 mb-md-4'>
                                            <h4>{Blogdata.BlogTitle}</h4>
                                        </li>
                                        <li>
                                            <a href="/" className='btn blog-read-more-btn'>Read More<ArrowOutwardIcon className='fs-5' /></a>
                                        </li>
                                    </ul>
                                </Col>
                            ))
                        }
                    </Row>



                    <ul className="blog-pagination pagination justify-content-end">
                        <li>
                            <button onClick={prevPage} disabled={currentPage === 1}>
                                Prev
                            </button>
                        </li>

                        {numbers.map((n, i) => (
                            <li key={i}>
                                <button onClick={() => changePage(n)}>{n}</button>
                            </li>
                        ))}
                        <li>
                            <button onClick={nextPage} disabled={currentPage === npage}>
                                Next
                            </button>
                        </li>
                    </ul>



                </Container>
            </section>
        </>
    )
}

export default LatesBlog
