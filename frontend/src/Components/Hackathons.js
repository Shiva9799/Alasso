import React from 'react';
import './css/Hackathons.css';

const Hackathons = () => {
    return (
        <>
            <div className='sub-cont'>
                <div className='banner'>
                    <img src='/images/Hckathon_banner.png' alt='' />
                </div>
            </div>

            <div className='hack-filter'>
                <h6 style={{marginRight:'10em'}}>Showing 100 results</h6>
                <div>
                    <h6>Sort:</h6>
                <h6 className='sort-filter'>Most Relevant</h6>
                <h6 className='sort-filter'>Submission Date</h6>
                <h6 className='sort-filter'>Recently Added</h6>
                <h6 className='sort-filter'>Prize Amount</h6>
                <h6 className='sort-filter'>Registered Number</h6>
                </div>
            </div>

            <div className='hack-body'>
                <div className='hack-filters'>
                    <div className='hack-check'>
                        <h5 style={{ color: '#000000' }}>Mode</h5>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>Online</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>Offline</label>
                        </div>
                    </div>


                    <div className='hack-check'>
                        <h5 style={{ color: '#000000' }}>Status</h5>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#EFBC2A' }}>Open</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#2FA23B' }}>Upcoming</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#C12121' }}>Ended</label>
                        </div>
                    </div>


                    <div className='hack-check'>
                        <h5 style={{ color: '#000000' }}>Period</h5>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>1-6 Days</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>1-4 Weeks</label>
                        </div>
                    </div>


                    <div className='hack-check'>
                        <h5 style={{ color: '#000000' }}>Interest</h5>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>Web</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>Education</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>AR/VR</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" style={{ color: '#948E8E' }}>Blockchain</label>
                        </div>
                    </div>
                </div>

                <div className='mobile-filter'>
                        <h5>Mode</h5>
                        <h5>Period</h5>
                        <h5>Status</h5>
                        <h5>Interest</h5>
                    </div>
                    
                <div className='hack-card'>
                    
                    <div className='hack-img'>
                        <img src='/images/hack-img.jpg' alt='' /></div>
                    <div>
                        <h6 className='hack-title'>Title of the Hackathons</h6>
                        <div className='hack-info'>
                            <div className='hack-details'>
                                <h6 className='hack-mode'>Online</h6>
                                <h6 className='hack-parti'>562 participants</h6>
                                <h6 className='hack-days'>23 days Left</h6>
                                <h6 className='hack-prize'>27000</h6>
                            </div>

                            <div className='hack-card-side-info'>
                                <h6>Orgainzer</h6>
                                <h6>Date</h6>
                                <h6>Tags</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Hackathons;
