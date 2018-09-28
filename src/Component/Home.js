import React, { Component } from 'react';
import MoiCapNhat from './Moicapnhat';
import TruyenHot from './TruyenHot';
class Home extends Component {
    render() {
        return (
            <div>
                <main className="truyencv-main">
                <div className="text-center hidden-xs"> </div>
                <section className="truyencv-section bg-w">
                <div className="container">
                <div className="row">
                <MoiCapNhat></MoiCapNhat>
                </div>
                </div>
                </section>
                <section className="truyencv-section section-ranking">
                <div className="container">
                <div className="row">
                <TruyenHot></TruyenHot>
                </div>
                </div>

                </section>
                </main>
            </div>
        );
    }
}

export default Home;