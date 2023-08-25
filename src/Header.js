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
 </ul>

<button className='contact'><Link to ="/contact">Contact Us</Link></button>

<h1 className='text1'>It is Better to <br></br>Travel Well Than <br></br> to Arrive</h1>
<div className="yt">
      <h3>Watch video</h3>
   
    
    </div>
</div>
<div>

<h1 className='sbout'>About Us</h1>
<h2>Explore All Corners of The World With Us</h2>

<p className='mm'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p>
  <button>Read More</button>
</p>
</div>
<div className='photo'>

    
<img src="https://preview.colorlib.com/theme/passport/images/about_1.jpg" alt="Image" className='image1' ></img>
 
 
    <img src='https://preview.colorlib.com/theme/passport/images/about_2.jpg' alt='image2' className='image2'></img>
 
</div>
<div>
  <h2>What We Serve</h2>
  <h3>
  We Provide Top Destinations
  </h3>
  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
  <div className='photo2'>
    <div className='photo2'>
    <img src='https://preview.colorlib.com/theme/passport/images/about_3.jpg' alt='img1' className='img1'></img>
    <div><h3>Enjoy the beauty of maldives</h3><span>Maldives, Repbulic Maldives</span></div></div>

    <div className='photo2'>


    <img src='https://preview.colorlib.com/theme/passport/images/about_4.jpg' alt='img1' className='img1'></img><div><h3>Enjoy the beauty of Maldives</h3><span>Maldives, Repbulic Maldives</span></div>
    
    </div>
    <div className='photo2'>
    <img src='https://preview.colorlib.com/theme/passport/images/about_1.jpg' alt='img1' className='img1'></img> <div><h3>Enjoy the beauty of maldives</h3><span>Maldives, Repbulic Maldives</span></div></div>

   <div className='photo2'>
    <img src='https://preview.colorlib.com/theme/passport/images/about_2.jpg' alt='img1' className='img1'></img><div><h3>Enjoy the beauty of maldives</h3><span>Maldives, Repbulic Maldives</span></div></div> 
  </div>
</div>
<div>
  <span>Happy Customer</span>
  <h2>Testimonials</h2>
  <img src='https://preview.colorlib.com/theme/passport/images/person_3.jpg' alt='imagee' className='imagee'></img>
  <h3>Rob Smith</h3>
  <p>
  Product Designer at Twitter
  </p>
  <div className='qoute'>"</div>
  <p>
“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
</div>
    </>
  );
}
