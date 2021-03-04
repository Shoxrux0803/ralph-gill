import React, {Component} from 'react';

class AboutAdmin extends Component {
    render() {
        return (
            <div className={'d-flex justify-content-between'}>
                <div className="">
                    <ul className={"nav"}>
                        <li className={'nav-item'}>
                            <a href="#" className={'nav-link logo logo-main'}></a>
                        </li>
                    </ul>
                </div>
                <div className={'d-flex mt-3'}>
                    <div>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><a href="#" className={'nav-link text-uppercase text-secondary'}>home</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><a href="#" className={'nav-link text-uppercase text-secondary'}>pages</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><a href="#" className={'nav-link text-uppercase text-secondary'}>travel</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><a href="#" className={'nav-link text-uppercase text-secondary'}>blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><a href="#" className={'nav-link text-uppercase text-secondary'}>elements</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={'nav'}>
                            <li className={'nav-item'}><a href="#" className={'nav-link text-uppercase text-secondary'}>shop</a></li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex mt-3'>
                    <div className={''}><a className={'btn iconhover rounded-pill'}><span className={'icon iconsize icon-avatar'}></span></a></div>
                    <div className={''}><a className={'btn rounded-pill ml-2'}><span className={'iconsize icon icon-youtube'}></span></a></div>
                    <div className={''}><a className={'btn rounded-pill ml-2'}><span className={'iconsize icon icon-pinterst'}></span></a></div>
                    <div className={''}><a className={'btn rounded-pill ml-2'}><span className={'iconsize icon icon-instagram'}></span></a></div>
                    <div className={''}><a className={'btn rounded-pill ml-2'}><span className={'iconsize icon icon-facebook'}></span></a></div>
                </div>
            </div>
        );
    }
}

export default AboutAdmin;