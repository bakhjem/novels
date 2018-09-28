import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("https://m-api.iread.vn/api/book?bookId="+this.props.match.params.id)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.book
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
           
            <main className="truyencv-main">
            <div className="container bg-w">
            <div className="truyencv-detail-block" style={{position: 'relative'}}>
            <section className="truyencv-section section-detail-info">
            
            
            <div className="truyencv-detail-info-block">
            <div className="row">
                <div className="col-info col-xs-12 col-sm-push-4 col-sm-8 col-md-push-3 col-md-5 col-lg-push-3 col-lg-6">
                <div className="info">
                    <h1 className="title"> <a href={'/truyen/'+items.bookId} title={items.title}>{items.title}</a> </h1>
                    <div className="list">
                    <div className="item">
                        <div className="item-label"> Tác giả: </div>
                        <div className="item-value"> <a href={"/tac-gia/"+items.author.slug} className="author">{items.author.name}</a> </div>
                    </div>
                    <div className="item">
                        <div className="item-label"> Thể Loại: </div>
                        <div className="item-value"> <a href={"/theloai/"+items.catsLv1[0].slug} className="author">{items.catsLv1[0].catName}</a> </div>
                    </div>
                    <div className="item">
                        <div className="item-label"> Tình trạng: </div>
                        <div className="item-value"> Đang ra </div>
                    </div>
                    <div className="item hidden-lg hidden-md hidden-sm">
                        <div className="item-label"> Mới nhất: </div>
                        <div className="item-value"> {items.lastChapter.title}</div>
                    </div>
                    </div>
                    <div className="buttons"> <Link to={items.slug+'/mucluc/'+items.bookId} className="btn btn-truyencv">Mục Lục</Link> </div>
                    
                </div>
               
                </div>
                <div className="col-thumb col-xs-12 col-sm-pull-8 col-sm-4 col-md-3 col-md-pull-5 col-lg-pull-6 col-lg-3">
                <div className="thumb hidden-xs"> <img className="img-responsive" alt={items.title} src={items.avatar} /></div>
                </div>
                
            </div>
            </div>
            </section>
            <div className="text-center hidden-xs"> </div>
             <section className="truyencv-section">
            <div className="truyencv-detail-tab">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="truyencv-detail-introduction">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-9">
                      <div className="brief"> {items.content}</div>
                      <div className="list-overview">
                        <div className="item">
                          <div className="item-title"> <i className="truyencv-icon icon-list" /> Mới nhất </div>
                          <div className="item-value"> {items.lastChapter.title}</div>
                        </div>
                      </div>
                      <div className="text-center hidden-xs"> </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

            </div>
            </div>
            </main>
        );
    }
  }
}


export default Content;