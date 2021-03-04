import React, {Component} from 'react';
import "./pages.scss"

import LeftContent from "../components/LeftContent";
import RightContentNav from "../components/RightContentNav";
import RightContentBody from "../components/RightContentBody";


class AdminPage extends Component {
    render() {
        return (
            <div className={'admin-page'}>
                <div className="admin-content d-flex">
                    <div className="admin-content-left">
                        <LeftContent/>
                    </div>
                    <div className="admin-content-right container">

                            <RightContentNav/>

                            <RightContentBody/>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;