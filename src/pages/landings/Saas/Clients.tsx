import { Row, Col, Container, Badge } from 'react-bootstrap';

// images
import hsl from 'assets/images/brands/hsl.png'
import cu from 'assets/images/brands/cu.png'
import client_3 from 'assets/images/brands/patner_3.png'
import client_4 from 'assets/images/brands/patner_4.png'

const Clients = () => {
    return (
        <section className="section pt-8 pb-6 bg-gradient3 position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row data-aos="fade-up" data-aos-duration="200">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Clients
                        </Badge>
                        <h1 className="display-5 fw-medium">The smart people management you need</h1>
                        <p className="text-muted mx-auto">
                            Organizations trust <span className="text-primary fw-bold">Crevo</span> to drive
                            perfomance & engagement
                        </p>

                        <ul className="list-inline mt-5">
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={hsl} alt="" height="32" />
                            </li>
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={cu} alt="" height="32" />
                            </li>
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={client_3} alt="" height="32" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Clients;
