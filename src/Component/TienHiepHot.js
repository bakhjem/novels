import React, { Component } from 'react';

class TienHiepHot extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://m-api.iread.vn/api/book/getBooks?catId=5&page=1&sort=4&size=5")
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
            <div className="col-xs-12 col-sm=12 col-md-4">
            <div className="block block-inverse block-ranking">
                <div className="block-header">
                <h2 className="title"> <i className="truyencv-icon icon-fire" /> Truyện Tiên Hiệp Hot </h2>
                </div>
                <div className="block-content">
                <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item list-group-item-primary item-featured">
                    <div className="content">
                        <div className="info">
                        <h2 className="title"> <a href={item.slug} title={item.title}>{item.title}</a> </h2>
                        <div className="view text-secondary"> <span className="text-red fz-16">{item.views}</span> lượt đọc </div>
                        <div className="extra-info">
                            <p>Số Chương: {item.totalChapter}</p>
                            <p>Tác giả: {item.author.name}</p>
                        </div>
                        </div>
                        <div className="thumb">
                        <div className="book-cover"> <a className="book-cover-link" href={item.slug} title={item.title}> <img src={item.avatar} alt={item.title} /> </a>
                            <span className="book-cover-shadow" />
                        </div>
                        </div>
                    </div>
                    </li> 
                     ))}
                </ul>
                </div>
            </div>
            </div>

            
        );
    }
}
}

export default TienHiepHot;