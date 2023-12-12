import { Col, Container, Row, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from '../form';
import SwiperSlider3 from '../sliders/SwiperSlider3';


import issuer_hero from 'assets/images/issuer_hero.jpg';

const Hero12 = () => {
    return (
        <section className="position-relative overflow-hidden hero-13 pt-7 pt-lg-5 pb-6">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div className="mb-lg-0 mb-5">
                            <h1 className="hero-title">
                                The best way to{' '}
                                <span className="highlight highlight-success d-inline-block">verify</span> your credentials 
                            </h1>
                            <p className="fs-17 text-muted pt-3">
                                Web 3.0 Shared Credentialing Platform
                            </p>

                            <div className="d-flex mt-1 fs-12">
                                <div className="me-4">
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    Free 14-day Demo
                                </div>
                                <div>
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    No credit card needed
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container" data-aos="fade-left" data-aos-duration="1000">
                            <div className="slider">
                                <div className="swiper-slide-content ">
                                    <img src={issuer_hero} alt="" className="img-fluid rounded-lg" />
                                </div>
                                {/* <SwiperSlider3 /> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero12;
