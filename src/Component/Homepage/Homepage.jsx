import React from 'react';
import { MdDiamond, MdSearch, MdPhone,MdEmail,MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import Blog from './Blog';
import './Homepage.css';

function Homepage() {
  const blogs = [
    { title: 'Kim Cương Nhân Tạo', content: 'Nội dung cho blog 1...', imgSrc: 'https://img.lazcdn.com/g/p/e6f989e515f4bb05841787fcbb46aa90.jpg_720x720q80.jpg' },
    { title: 'Kim Cương Tự Nhiên', content: 'Nội dung cho blog 2...', imgSrc: 'https://file.hstatic.net/200000419647/file/01__9__e2a13b407aea40288ec469a5b3935bd6_grande.png' },
    { title: 'Đá Quý', content: 'Nội dung cho blog 3...', imgSrc: 'https://dhkj.vn/wp-content/uploads/2022/04/khai-niem-ve-da-quy-da-ban-quy-1.jpg' },
  ];

  return (
    <div className="App">
      <div className='container1'>
        <nav className='orange'>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><MdDiamond />KNJ</Link>
            <div className="nav-button">
              <li><a href="/">KNJ</a></li>
              <li><Link to='/'>CONTACT US</Link></li>
              <li><a href="/">LOOK UP</a></li>
            </div>
            <div className='Login'>
              <Link to='/login'>Login/Sign up</Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="container2">
        <div className='image'>
          <img src="https://vandieuhay.net/wp-vdh/uploads/2020/11/New-Project-2020-11-21T101548.383.png" alt="Kim cương" />
        </div>

        <div className="lookup-table">
          <form>
            <div className='Table'>
              Look up Assessment Receipt
            </div>
            <div className='table1'>
              <label>
                Phone Number:
                <input type="phone" name="phone" placeholder="Enter phone number" style={{ width: '300px', height: '40px', fontSize: '20px', color: '#2c78c9' }} />
              </label>
              <label>
                Receipt Number:
                <input type="text" name="receipt" placeholder="Enter receipt number" style={{ width: '300px', height: '40px', fontSize: '20px', color: '#2c78c9' }} />
              </label>
              <button type="submit" style={{ width: '55px', height: '55px', color: '#2c78c9', background: '#f5d8a7', borderRadius: '5px', cursor: 'pointer' }}>
                <MdSearch />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container3">
        <div className='slide'>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20230721/pngtree-the-diamond-idea-a-3d-illustration-image_3723374.jpg" alt="Kim cương" />
        </div>
        <div className='slide'>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-the-best-pink-colored-diamonds-image_2927966.jpg" alt="Kim cương hồng" />
        </div>
      </div>

      <div className='container4'>
        <div className='blog-container'>
          {blogs.map((blog, index) => (
            <Blog key={index} title={blog.title} content={blog.content} imgSrc={blog.imgSrc} />
          ))}
        </div>
      </div>

      <div className='container5'>
        <div className='contact-logo'>
          <Link to='/' className="brand-logo"><MdDiamond />KNJ</Link>
          <br />
        </div>
        <div className='contact-info'>
          <label>
            <a>
              <MdPhone /> (084+)786142872
            </a>
          </label>
          <br />
          <label>
            <a>
              <MdEmail /> KNJdimond@gmail.com
            </a>
          </label>
          <br />
          <label>
            <a>
              <MdLocationOn /> Tp.HCM
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
