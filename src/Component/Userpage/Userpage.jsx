import React from 'react';
import { MdDiamond, MdPhone, MdEmail, MdLocationOn, MdLock, MdSearch,MdPerson ,MdAddCard } from "react-icons/md";
import './Userpage.css';
import BasicMenu from './BasicMenu';

function Userpage() {


  return (
    <div className="Userpage">
      <header>
      <div className='container-1'>
        <nav className='nav'>
          <div className="nav-1">
            <a href="/" className="logo"><MdDiamond />KNJ</a>
            <div className="nav-link">
              <li><a href="/">KNJ</a></li>
              <li><a href="/" >CONTACT US</a></li>
              <li><a href="/">LOOK UP</a></li>
            </div>
            <div className='Order-button'>
              <a href='/'>Đặt lịch hẹn</a>
            </div>
            <div className='user-icon'>
            <button type="click" >
               <BasicMenu />
            </button>
            </div>
            
          </div>
        </nav>
      </div>
      </header>


      

      <div className="container-2">
        <div className='slide-1'>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20230721/pngtree-the-diamond-idea-a-3d-illustration-image_3723374.jpg" alt="Kim cương" />
        </div>
        <div className='slide-1'>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-the-best-pink-colored-diamonds-image_2927966.jpg" alt="Kim cương hồng" />
        </div>
      </div>

      <body>
        <div className='container-3'>
      <form className="Order-form">
        <h2>Đặt lịch hẹn</h2>
        <div className="group">
          <label htmlFor="Name"> <MdPerson/>Customer name</label>
          <input type="text" className="Cusname" placeholder="Enter full name" required />
        </div>
        <div className="group">
          <label htmlFor="Phone"> <MdPhone/>Phone number</label>
          <input type="text"  className="Cusphone" placeholder="Enter phone number" required />
        </div>
        <div className="group">
          <label htmlFor="CMND/CCCD"><MdAddCard/> ID card</label>
          <input type="text"  className="CusID" placeholder="Enter ID number" required />
        </div>
        <div className="group">
          <label htmlFor="Address"><MdLocationOn/> Address</label>
          <input type="text"  className="Cusadress" placeholder="Enter address" required />
        </div>

        <div className='order-button'>
        <button type="submit" >Đặt lịch hẹn</button>
        </div> 
        </form>
        </div>
      </body>
     

     <div className='container-4'>
     <div className="lookup-table">
          <form>
            <div className='Table'>
              Look Up Assessment Receipt
            </div>
            <div className='table1'>
              <label>
                Phone Number:
                <input type="phone" name="phone" placeholder="Enter phone number" />
              </label>
              <label>
                Receipt Number:
                <input type="text" name="receipt" placeholder="Enter receipt number"  />
              </label>
              <button type="submit">
                <MdSearch />
              </button>
            </div>
          </form>
        </div>

     </div>
      <footer>
      <div className='container-5'>
        <div className='contact-logo'>
          <a href='/' className="logo"><MdDiamond />KNJ</a>
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
      </footer>


    </div>



  );
}

export default Userpage;
