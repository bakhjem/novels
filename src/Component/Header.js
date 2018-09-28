import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="truyencv-header">
  <nav className="navbar navbar-inverse">
    <div className="container">
      <div className="navbar-header">
        <a href="/" className="navbar-logo hidden-sm hidden-xs">
          <img className="img-responsive " data-cfsrc="templates/truyencv-green/assets/images/logo.png" alt style={{display: 'none', visibility: 'hidden'}} /><noscript>&lt;img class="img-responsive " src="templates/truyencv-green/assets/images/logo.png" alt=""&gt;</noscript></a>
        <a href="#" className="navbar-search-btn js-open-search-box-mobile visible-xs visible-sm"> <i className="truyencv-icon icon-search" /> </a>
        <div className="navbar-category"> <button className="navbar-category-btn js-open-sidebar"> <span className="lines"> <span className="line" /> <span className="line" /> <span className="line" /> </span> <span className="hidden-xs hidden-sm">Danh mục</span> </button>
          <ul className="navbar-category-list">
            <li className="col-xs-4"> <a href="/danh-sach/moi-cap-nhat/">Truyện mới</a> </li>
            <li className="col-xs-4"> <a href="/danh-sach/hoan-thanh/">Truyện hoàn thành</a> </li>
            <li className="col-xs-4"> <a href="/danh-sach/truyen-de-cu/">Truyện đề cử</a> </li>
            <li className="col-xs-4"> <a href="/danh-sach/sang-tac/">Truyện sáng tác</a> </li>
            <li className="col-xs-4"> <a href="/danh-sach/truyen-vip/">Truyện VIP</a> </li>
            <li className="col-xs-4"> <a href="/loc-truyen/" rel="nofollow">Lọc truyện</a> </li>
            <li className="col-xs-4"> <a href="/bang-xep-hang/">Bảng Xếp Hạng</a> </li>
           
          </ul>
        </div>
        <div className="navbar-category"> <button className="navbar-category-btn js-open-sidebar"> <span className="lines"> <span className="line" /> <span className="line" /> <span className="line" /> </span> <span className="hidden-xs hidden-sm">Thể loại</span> </button>
          <ul className="navbar-category-list">
            <li className="col-xs-4"> <a href="/tien-hiep/" title="Truyện Tiên Hiệp">Tiên Hiệp</a> </li>
            <li className="col-xs-4"> <a href="/kiem-hiep/" title="Truyện Kiếm Hiệp">Kiếm Hiệp</a> </li>
            <li className="col-xs-4"> <a href="/do-thi/" title="Truyện Đô Thị">Đô Thị</a> </li>
            <li className="col-xs-4"> <a href="/huyen-ao/" title="Truyện Huyền Ảo">Huyền Ảo</a> </li>
            <li className="col-xs-4"> <a href="/ngon-tinh/" title="Truyện Ngôn Tình">Ngôn Tình</a> </li>
            <li className="col-xs-4"> <a href="/di-nang/" title="Truyện Dị Năng">Dị Năng</a> </li>
            <li className="col-xs-4"> <a href="/vong-du/" title="Truyện Võng Du">Võng Du</a> </li>
            <li className="col-xs-4"> <a href="/di-gioi/" title="Truyện Dị Giới">Dị Giới</a> </li>
            <li className="col-xs-4"> <a href="/khoa-huyen/" title="Truyện Khoa Huyễn">Khoa Huyễn</a> </li>
            <li className="col-xs-4"> <a href="/quan-su/" title="Truyện Quân Sự">Quân Sự</a> </li>
            <li className="col-xs-4"> <a href="/lich-su/" title="Truyện Lịch Sử">Lịch Sử</a> </li>
            <li className="col-xs-4"> <a href="/xuyen-khong/" title="Truyện Xuyên Không">Xuyên Không</a> </li>
            <li className="col-xs-4"> <a href="/trung-sinh/" title="Truyện Trùng Sinh">Trùng Sinh</a> </li>
            <li className="col-xs-4"> <a href="/canh-ky/" title="Truyện Cạnh Kỹ">Cạnh Kỹ</a> </li>
            <li className="col-xs-4"> <a href="/dong-nhan/" title="Truyện Đồng Nhân">Đồng Nhân</a> </li>
            <li className="col-xs-4"> <a href="/linh-di/" title="Truyện Linh Dị">Linh Dị</a> </li>
            <li className="col-xs-4"> <a href="/mat-the/" title="Truyện Mạt Thế">Mạt Thế</a> </li>
            <li className="col-xs-4"> <a href="/nu-hiep/" title="Truyện Nữ Hiệp">Nữ Hiệp</a> </li>
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <div className="search-block">
              <div className="actions"> <button type="submit" title="Tìm kiếm" className="search-toggle-btn" id="js-search-toggle"> <i className="truyencv-icon icon-search" /> </button> </div>
              <form id="js-search-panel" className="search-panel" onsubmit="do_search(1);return false;">
                <input type="text" name="txtKeyword" id="txtKeyword" defaultValue placeholder="Tên truyện hoặc tác giả" className="form-control" autoComplete="off" /> <button className="btn btn-search" type="submit"> <i className="truyencv-icon icon-search-primary" /> </button>                                      </form>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</header>

            </div>
        );
    }
}

export default Header;