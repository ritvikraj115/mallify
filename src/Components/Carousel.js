import React, { useState } from 'react'
import { useEffect } from 'react'

const Carousel = (props) => {
   
    const [myStyle, setMyStyle] = useState({
        width: "30%" ,
        margin:"auto"   
 })
    // let a="none";
    // var s={
    //     display:a,
    //     width: "50%",
    //     margin:"auto",
    //   }
      
    // const carosel=()=>{
        
    //     if(s.display="none"){
    //         setMyStyle(s);
    //         a="block";
    //         console.log("display is none")
    // }
    //     else{
    //         setMyStyle(s);
    //         a="none";
    //         console.log("display is block")

    //     }}
    // setTimeout(carosel,2000);
    return (
        <>
            <h2 class="w3-center">Automatic Slideshow</h2>

            <div class="w3-content w3-section" style={{display:"flex",margin:0,padding:0}}>
                <img class="mySlides" style={myStyle} src="https://media.istockphoto.com/id/1194343598/vector/bright-modern-mega-sale-banner-for-advertising-discounts-vector-template-for-design-special.jpg?s=612x612&w=0&k=20&c=oxeukxA1kVLBuLtcbipu_94blsVGs9eU0V_x70wkVzA="/>
                <img class="mySlides"style={myStyle} src="https://media.istockphoto.com/id/882059918/photo/interior-of-modern-fashion-shop.jpg?s=612x612&w=0&k=20&c=II_hm8_g7goQO-ey4ulI6ZCHplsAXyeV8_nZvEpB9sU="/>
                <img class="mySlides" style={myStyle} src="https://media.istockphoto.com/id/171276224/photo/electronics-shopping.jpg?s=612x612&w=0&k=20&c=mcOOmz2ZaakBmL1XHUNG-ymiNCgjGlODAp5jB6HFoj0="/>
            </div>


        </>
    )
}

export default Carousel
