import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
   <div className='main'>
<ul>
   
 <li className='passport'><Link to ="/">Passport</Link></li>
 <li className='home'><Link to ="/home">Home</Link></li>
 <li className='about'><Link to ="/about">About Us</Link></li>
 <li className='drop'> <div>
   <Link to ="/dropdown">Dropdown</Link>




    </div>
  
    </li>
 

 <li className='services'><Link to ="/services">Services</Link></li>
 <li className='blog'><Link to ="/blog">Blog</Link></li>
 

<li className='contact'><Link to ="/contact">Contact Us</Link></li>
</ul>
<h1 className='text1'>It is Better to <br></br>Travel Well Than <br></br> to Arrive</h1>
</div>

    </>
  );
}
