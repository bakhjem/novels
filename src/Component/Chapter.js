import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Chapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      
      componentDidMount() {
        fetch("https://m-api.iread.vn/api/chapter/content?chapterId="+this.props.match.params.id)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, items } = this.state;
        const html = items.content;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
        return (
            <main className="truyencv-main">
            <section className="truyencv-section section-read-container">
  <div className="container">
    <div className="truyencv-read-block">
      <div className="truyencv-read-navigation text-center">              <a role="button" data-toggle="collapse" href="#js-truyencv-read-config" aria-expanded="false" aria-controls="js-truyencv-read-config" className="btn btn-transparent btn-collapse-config collapsed"> <span className="btn-icon js-tooltip" data-toggle="tooltip" data-placement="bottom" title data-original-title="Cấu hình"> <i className="truyencv-icon icon-config" /> </span> </a>                
        <div className="text-center">
          <div style={{width: 610, margin: '15px auto'}}>
            <div style={{float: 'left', marginRight: 10}}> </div>
            <div style={{float: 'left'}}> </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="truyencv-read-config collapse" id="js-truyencv-read-config" aria-expanded="false">
          <div className="popover truyencv-popover fade bottom in" role="tooltip">
            <div className="arrow" />
            <div className="popover-content">
              <div className="list">
                <div className="item">
                  <div className="item-label"> <span className="item-icon"> <i className="truyencv-icon icon-color" /> </span>Màu nền </div>
                  <div className="item-value">
                    <ul className="list-unstyled list-color">
                      <li className=" active" id="js-color-item1"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',1, { path: '/',expires: 30 });" data-style={1} className="js-color-item item item-1" /> </li>
                      <li className=" " id="js-color-item2"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',2, { path: '/',expires: 30 });" data-style={2} className="js-color-item item item-2" /> </li>
                      <li className=" " id="js-color-item3"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',3, { path: '/',expires: 30 });" data-style={3} className="js-color-item item item-3" /> </li>
                      <li className=" " id="js-color-item4"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',4, { path: '/',expires: 30 });" data-style={4} className="js-color-item item item-4" /> </li>
                      <li className=" " id="js-color-item5"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',5, { path: '/',expires: 30 });" data-style={5} className="js-color-item item item-5" /> </li>
                      <li className=" " id="js-color-item6"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',6, { path: '/',expires: 30 });" data-style={6} className="js-color-item item item-6" /> </li>
                      <li className=" " id="js-color-item7"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',7, { path: '/',expires: 30 });" data-style={7} className="js-color-item item item-7" /> </li>
                      <li className=" " id="js-color-item8"> <a href="javascript:void(0)" onclick="$.cookie('cbackground',8, { path: '/',expires: 30 });" data-style={8} className="js-color-item item item-8" /> </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="item-label"> <span className="item-icon"> <i className="truyencv-icon icon-font" /> </span>Font chữ </div>
                  <div className="item-value"> <select className="form-control" name="font-family" id="js-truyencv-font-family" onchange="$.cookie('cfont',this.value, { path: '/',expires: 30 });"> <option value="'Palatino Linotype', sans-serif">Palatino Linotype</option> <option value="'Source Sans Pro', sans-serif">Source Sans Pro</option> <option value="'Segoe UI', sans-serif">Segoe UI</option> <option value="Roboto, sans-serif">Roboto</option> <option value="'Patrick Hand', sans-serif">Patrick Hand</option> <option value="'Noticia Text', sans-serif">Noticia Text</option> <option value="'Times New Roman', sans-serif">Times New Roman</option> <option value="Verdana, sans-serif">Verdana</option> <option value="Tahoma, sans-serif">Tahoma</option> <option value="Arial, sans-serif">Arial</option> </select>                                  </div>
                </div>
                <div className="item">
                  <div className="item-label"> <span className="item-icon"> <i className="truyencv-icon icon-font-size" /> </span>Cỡ chữ </div>
                  <div className="item-value">
                    <div className="input-group js-truyencv-font-configuration" data-type="font-size" data-max={30} data-min={14} data-step={1}> <span className="input-group-btn"> <button className="btn btn-white btn-decrease" type="button" onclick="if($('#fsize').text()>14)$.cookie('csize',Number($('#fsize').text())-1, { path: '/',expires: 30 });">-</button> </span>                                        <span className="input-group-addon"> <span className="input-value" id="fsize">26</span> </span> <span className="input-group-btn"> <button className="btn btn-white btn-increase" type="button" onclick="if($('#fsize').text()<30)$.cookie('csize',Number($('#fsize').text())+1, { path: '/',expires: 30 });">+</button> </span>                                      </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item-label"> <span className="item-icon"> <i className="truyencv-icon icon-size" /> </span>Chiều rộng khung </div>
                  <div className="item-value">
                    <div className="input-group js-truyencv-font-configuration" data-type="container-width" data-max={100} data-min={50} data-step={10}> <span className="input-group-btn"> <button className="btn btn-white btn-decrease" type="button" onclick="if($('#framesize').text()>50)$.cookie('cfull',Number($('#framesize').text())-10, { path: '/',expires: 30 });">-</button> </span>                                        <span className="input-group-addon"> <span className="input-value" id="framesize">100</span>%</span> <span className="input-group-btn"> <button className="btn btn-white btn-increase" type="button" onclick="if($('#framesize').text()<100)$.cookie('cfull',Number($('#framesize').text())+10, { path: '/',expires: 30 });">+</button> </span>                                      </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item-label"> <span className="item-icon"> <i className="truyencv-icon icon-line-height" /> </span>Dãn dòng </div>
                  <div className="item-value">
                    <div className="input-group js-truyencv-font-configuration" data-type="line-height" data-max={200} data-min={100} data-step={10}> <span className="input-group-btn"> <button className="btn btn-white btn-decrease" type="button" onclick="if($('#clineheight').text()>100)$.cookie('cline',Number($('#clineheight').text())-10, { path: '/',expires: 30 });">-</button> </span>                                        <span className="input-group-addon"> <span className="input-value" id="clineheight">140</span>%</span> <span className="input-group-btn"> <button className="btn btn-white btn-increase" type="button" onclick="if($('#clineheight').text()<200)$.cookie('cline',Number($('#clineheight').text())+10, { path: '/',expires: 30 });">+</button> </span>                                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="truyencv-read-content" id="js-truyencv-read-content" data-style={1} data-line-height={140} data-container-width={100} data-font-size={26} data-font-family="'Palatino Linotype', sans-serif" style={{width: '100%'}}>
        <button onclick="Favorite(4295,0,'Chương 2073: Âm Dương Hải trên không vết nứt không gian','6233505')" type="button" name="button" id="favorite_video" className="truyencv-read-bookmark js-tooltip" data-toggle="tooltip" data-placement="bottom" title data-original-title="Đánh dấu"> <i className="truyencv-icon icon-bookmark" /> </button>
        <div className="header">
          
        </div>
        <div className="content" id="js-truyencv-content" style={{fontSize: 26, lineHeight: '140%', fontFamily: '"Palatino Linotype", sans-serif', wordWrap: 'break-word'}}> 
        { ReactHtmlParser(html) }
        </div>
      </div>
    </div>
  </div>
</section>

            </main>

        );
    }
}
}

export default Chapter;