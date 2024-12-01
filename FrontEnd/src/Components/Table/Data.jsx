import React from 'react';

const Data = () => {
    return (
        <div>
             <div className="row" style={{ marginTop: '40px' }}>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2" style={{ backgroundColor: '#7831ed', borderColor: '#7831ed', borderWidth: '3px' }}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-lg font-weight-bold text-white text-uppercase mb-1">
                                    Tổng số ảnh
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-[#fff]">7777</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Earnings (Annual) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2" style={{ backgroundColor: '#05a081', borderColor: '#05a081', borderWidth: '3px' }}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-lg font-weight-bold text-white text-uppercase mb-1">
                                    Người đang theo dõi
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-[#fff]">666</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tasks Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2" style={{ backgroundColor: '#d3405c', borderColor: '#d3405c', borderWidth: '3px' }}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-lg font-weight-bold text-white text-uppercase mb-1">
                                    Lượt thích
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-[#fff]">555</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                 style={{ width: '50%' }} aria-valuenow="0" aria-valuemin="0"
                                                 aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pending Requests Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2" style={{ backgroundColor: 'black', borderColor: 'black', borderWidth: '3px' }}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-lg font-weight-bold text-white text-uppercase mb-1 ">
                                    Người theo dõi
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-[#fff]">4444</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Data;