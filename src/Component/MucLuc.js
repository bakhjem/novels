import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MucLuc extends Component {constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://m-api.iread.vn/api/chapter/getChapters?bookId="+this.props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.chapters
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return (
            <main className="truyencv-main"> <div className="container bg-w"> <div className="truyencv-detail-block" style={{position: 'relative'}}>       <div className="text-center hidden-xs"> </div>  <section className="truyencv-section">
            <div className="truyencv-detail-tab">    <div className="tab-content">  <div role="tabpanel" className="tab-pane fade active in" id="truyencv-detail-chap"> <div className="truyencv-detail-chap"> 
            <div className="panel panel-free">
            <div className="panel-body">
            <div className="list-chap" id="list_container"><div className="row">
            {items.map(item => (
            <div className="col-md-4">
            <div className="item"><Link to={'/chapter/'+item.chapterId} title={item.title}>{item.title}</Link></div>
            </div>
            ))}
            </div></div>

            </div></div></div></div></div></div>

            </section></div></div></main>

        );
    }
}
}

export default MucLuc;