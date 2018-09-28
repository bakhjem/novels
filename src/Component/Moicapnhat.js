import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Moicapnhat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://m-api.iread.vn/api/book/getBooks?catId=&page=1&sort=1&size=20")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.books
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
            <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="block block-default">
                <div className="block-header">
                <h2 className="title">mới cập nhật</h2>
                </div>
                <div className="block-content">
                <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item list-group-item-table">
                    <div className="content"> <a className="thumb" href={item.slug+'/'+item.bookId} title={item.title}> <img className="img-responsive"  alt={item.title} src={item.avatar} /> </a>
                        <div className="info">
                        <h2 className="title"> <Link to={'/truyen/'+item.bookId} title={item.title}>
                        
                         {item.title}</Link>                              </h2>
                        <div className="chap">{item.author.name}</div>
                        <div className="author"> {item.lastChapter.title} </div>
                        
                        </div>
                    </div>
                    </li>
                    ))}
                </ul> <a href="/danh-sach/moi-cap-nhat/" className="pull-right cnt-view">Xem tiếp</a> </div>
            </div>
            </div>

        );
    }
}
}

export default Moicapnhat;