import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../auth/authActions';

const Navbar = () => {
    // Local state for dropdown menu
    const [open, setOpen] = useState(false);
    console.log('SGSDUYGT')
    // Access user info from Redux store
    const { name, email } = useSelector(state => state.auth.user);

    // Access the Redux dispatch function
    const dispatch = useDispatch();

    // Toggle dropdown menu state
    const changeOpen = () => setOpen(!open);

    return (
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li
                    onMouseLeave={changeOpen}
                    className={`dropdown user user-menu ${open ? 'open' : ''}`}
                >
                    <a
                        href="#"
                        onClick={changeOpen}
                        aria-expanded={open ? 'true' : 'false'}
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                    >
                        <img
                            src="http://lorempixel.com/160/160/abstract"
                            className="user-image"
                            alt="User"
                        />
                        <span className="hidden-xs">{name}</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <img
                                src="http://lorempixel.com/160/160/abstract"
                                className="img-circle"
                                alt="User"
                            />
                            <p>
                                {name}
                                <small>{email}</small>
                            </p>
                        </li>
                        <li className="user-footer">
                            <div className="pull-right">
                                <a
                                    href="#"
                                    onClick={() => dispatch(logout())}
                                    className="btn btn-default btn-flat"
                                >
                                    Sair
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;