import React, {Component} from 'react';

class RightContentNav extends Component {
    render() {
        return (
            <div className={'right-content-nav mt-4'}>
                <div className={'d-sm-flex d-sm-block justify-content-between ml-3'}>
                    <div className="input-group rounded w-25 mt-2">
                        <div className='input-group-prepend'>
                            <button className='btn bg-white border border-right-0'>
                                <span className='icon icon-search'/>
                            </button>
                        </div>
                        <input type="text" className='form-control w-25 border border-right-0' placeholder='Search'/>
                        <div className='input-group-prepend'>
                            <button className='btn bg-white border border-left-0'>
                                <span className='icon icon-voice'/>
                            </button>
                        </div>
                    </div>
                    <div className={'d-flex'}>
                        <div><a href="#"><span className={'icon icon-message mr-3 pt-3'}></span></a></div>
                        <div><a href="#"><span className={'icon icon-heart pt-3'}></span></a></div>
                        <div>
                            <button className={'btn btn-primary ml-3 mr-2 pl-4 pr-4 '}>+ Create New Post</button>
                        </div>
                        <a href="#" className={'ml-4 shadows'}><img src="adminphoto.jpg" className={'rounded-pill'}
                                                                    width={40} height={40} alt=""/></a>
                    </div>
                </div>
                <div className={'d-flex justify-content-between mt-5 container pr-5'}>
                    <div><h4 className={'font-weight-bold mt-2'}>All Itinerary</h4></div>
                    <div className={'mr-4'}>
                        <button type={'button'} className={'btn btn-success pl-5 pr-5'}>View all Itinerary</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightContentNav;