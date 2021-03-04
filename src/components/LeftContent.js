import React, {Component} from 'react';

class LeftContent extends Component {
    render() {
        return (
            <div className={''}>
                <div className="admin-navbar-logo">
                    <a href=""><span className={'logo logo-main'}></span></a>
                </div>
                <div className={'mt-4 text-center'}>
                    <img src="adminphoto.jpg" className={'rounded-pill m-3 admin-border p-1'} width={85} height={85} alt=""/>
                </div>
                <p className={'font-weight-bold text-center mb-0'}>Emma Watson</p>
                <p className={'text-secondary text-center small mt-0'}>New York, NY</p>
                <div className={'d-flex justify-content-around'}>
                    <div className={'text-center'}>
                        <p className={'font-weight-bold small mb-0'}>
                            Post
                        </p>
                        <p className={'small text-secondary mt-0'}>116</p>
                    </div><
                    div className={'text-center'}>
                    <p className={'font-weight-bold small mb-0'}>
                        Followers
                    </p>
                    <p className={'small text-secondary mt-0'}>50m</p>
                </div>
                    <div className={'text-center'}>
                        <p className={'font-weight-bold small mb-0'}>
                            Following
                        </p>
                        <p className={'small text-secondary mt-0'}>47m</p>
                    </div>
                </div>
                <ul className="nav flex-column">
                    <ul id="primary" className={'nav'}>
                        <li className={'nav-item text-secondary mt-1'}><a href="#" className={'nav-link'}>Home</a></li>
                        <li className={'nav-item text-secondary mt-1'}><a href="#" className={'nav-link'}>Chirps</a></li>
                        <li className={'nav-item text-secondary mt-1'}><a href="#" className={'nav-link'}>Blogs</a></li>
                        <li className={'nav-item text-secondary mt-1'}><a href="#" className={'nav-link'}>Vlogs</a></li>
                        <li className={'nav-item text-secondary mt-1'}><a href="#" className={'nav-link'}>Bird</a></li>
                        <li className={'nav-item text-secondary mt-1'}><a href="#" className={'nav-link'}>Finder</a></li>
                    </ul>
                </ul>

            </div>
        );
    }
}

export default LeftContent;