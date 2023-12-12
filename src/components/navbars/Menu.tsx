import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <NavLink to="/home" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </NavLink>
            </Nav.Item>
   
            <Nav.Item as="li">
                <NavLink to="/dashboard" className="nav-link btn me-2 shadow-none">
                    Dashboard
                </NavLink>
            </Nav.Item>

            {showDownload && (
                <>


                    {loggedInUser ? (
                        <Nav.Item as="li">
                            <NavLink to="/auth/logout" className="nav-link btn me-2 shadow-none">
                                Logout
                            </NavLink>
                        </Nav.Item>
                    ) : (
                        <Nav.Item as="li">
                            <NavLink to="/auth/login" className="nav-link btn me-2 shadow-none">
                                Log In
                            </NavLink>
                        </Nav.Item>
                    )}

                    <Nav.Item as="li">
                        <Link to="#" className={classNames('btn', buttonClass)}>
                            Download
                        </Link>
                    </Nav.Item>
                </>
            )}
        </Nav>
    );
};

export default Menu;
