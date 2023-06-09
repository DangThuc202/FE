import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { FormattedMessage } from 'react-intl';



class About extends Component{


    render(){

        return(
            <div className='section-share section-about'> 
                <div className='section-about-header'>
                    Truyền thông nói gì về BOOKINGCARE

                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px" 
                                src="https://www.youtube.com/embed/FyDQljKtWnI" 
                                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>             
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <div className='content-child1'>
                                <div className='content1'></div>
                                <div className='content2'></div>
                                <div className='content3'></div>
                            </div>
                            <div className='content-child2'>
                                <div className='content1'></div>
                                <div className='content2'></div>
                                <div className='content3'></div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

