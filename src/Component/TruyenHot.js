import React, { Component } from 'react';
import TienHiepHot from './TienHiepHot.js';
import NgonTinhHot from './NgonTinhHot.js';
import BangXepHang from './BangXepHang.js';

class TruyenHot extends Component {
    render() {
        return (
            <div>
                <BangXepHang></BangXepHang>
               <TienHiepHot></TienHiepHot> 
               <NgonTinhHot></NgonTinhHot>
            </div>
        );
    }
}

export default TruyenHot;