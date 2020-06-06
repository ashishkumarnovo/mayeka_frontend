import React, { useEffect } from "react"
import $ from "jquery"
import "../asserts/css/style.css"
import "../asserts/css/swiper.css"
import Swiper from "swiper";

export default function Signup(){
      
      useEffect(() => {
            document.title = 'Mayeka - Sign up';
           
            $('.toggle-password').hide();
            $('.toggle-passwordH').hide();

            $('#InputPassword').keyup(function() 
            {
                  if($('.toggle-passwordH').css("display") == "none")
                  {
                        $('.toggle-password').show();                              
                  }

                  if($('#InputPassword').val().length == 0)
                  {
                        $('.toggle-password').hide();  
                        $('.toggle-passwordH').hide();  
                        $("#InputPassword").attr("type", "password");
                  }
            });

            $('form .form-group span').click(function() {
                  var input = $("#InputPassword");
                  if (input.attr("type") === "password") {
                        input.attr("type", "text");
                        $('.toggle-password').hide();
                        $('.toggle-passwordH').show();
                  } else {
                        input.attr("type", "password");
                        $('.toggle-password').show();
                        $('.toggle-passwordH').hide();
                  }
            });

            new Swiper('.testimonials_slide', {
                  slidesPerView: '2',
                  initialSlide: 2,
                  speed: 1000,
                  spaceBetween: 20,
                  loop: true,
                  centeredSlides: true,
                  roundLengths: true,
                  mousewheel: true,
                  grabCursor: true,
                  pagination: {
                        el: '.swiper-pagination',
                        clickable: true 
                  },
                  autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                  },
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  breakpoints: {
                        767: {
                              loop: false,
                              effect: 'coverflow',
                              grabCursor: true,
                              centeredSlides: true,
                              slidesPerView: 'auto',
                              spaceBetween: 0,
                              coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows : true,
                              }
                              
                        },
                  }
            });


            new Swiper('.brands_swiper', {
                  slidesPerView: 'auto',
                  initialSlide: 0,
                  speed: 1000,
                  spaceBetween: 20,
                  loop: false,
                  centeredSlides: false,
                  roundLengths: true,
                  mousewheel: true,
                  grabCursor: true,
                  // autoplay: {
                  //       delay: 2500,
                  //       disableOnInteraction: false,
                  // },
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  breakpoints: {
                        575: {
                              loop: false,
                              effect: 'coverflow',
                              grabCursor: true,
                              centeredSlides: true,
                              slidesPerView: 'auto',
                              spaceBetween: 20,
                              coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows : true,
                              }
                              
                        },
                  }
            });
           
      },[])

    return (
    <div>
              <section className="bgImg">
            <div className="container-fluid">
                  <div className="row">

                        <div className="width80 d-flex bg-white flex-wrap">
                              <div className="col-12 col-sm-12 col-md-7 bgf3">
                                    <div className="features f_signup">
                                          <img className="logo" src={require("../asserts/images/logo.png")} />

                                          <h4 className="text-left">Serving Quality to Thousands of Brands</h4>
                                          <p>Mayeka has been connecting companies to their customers on million of devices across country.</p>
                                          
                                          <div className="f_signupList">
                                                <p><i className="fas fa-check-circle"></i> Guaranteed connections</p>
                                                <p><i className="fas fa-check-circle"></i> Reach customers faster at scale</p>
                                                <p><i className="fas fa-check-circle"></i> Enrich User Experience</p>
                                                <p><i className="fas fa-check-circle"></i> Feasible & Interactive Connection</p>
                                                <p><i className="fas fa-check-circle"></i> Customizable Voice System</p>
                                                <p><i className="fas fa-check-circle"></i> Enhance Customer Experience</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-5">
                                    <div className="SignUpForm">
                                          <h3 className="text-center">Create Mayeka Account</h3>
                                          <p className="signupInfo">Sign up and serve quality</p>

                                          <p className="text-left mb-3">Via Social Login</p>
                                          <div className="socialLinks">
                                                <span className="gLogo"><img src={require("../asserts/images/google.png")} /></span>
                                                <span className="somelogo"><img src={require("../asserts/images/Group_8.png")} /></span>
                                                <span className="gitlogo"><img src={require("../asserts/images/github.png")} /></span>
                                          </div>
                                          <p className="seprator"><span>OR</span></p>

                                          <form>
                                                <div className="form-group">
                                                      <label>Full name</label>
                                                      <input type="text" className="form-control" id="Inputname" aria-describedby="name" placeholder="Full name" />
                                                </div>
                                                <div className="form-group">
                                                      <label>Email</label>
                                                      <input type="email" className="form-control" id="InputEmail" aria-describedby="email" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                      <label>Password</label>
                                                      <input type="password" className="form-control" id="InputPassword" placeholder="Password" />
                                                      <span className="toggle-password">Show</span>
                                                      <span className="toggle-passwordH">Hide</span>
                                                </div>
                                                <small className="text-left">By signing up, I agree to Mayeka’s TnCs</small>
                                                <button type="submit" className="btn btn-primary loginBtn">Sign Up</button>
                                          </form>
                                          <p className="loginAcc">Already have an account? <span><a href="#">login</a></span></p>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

      
      <section>
            <div className="container-fluid">
                  <div className="row">
                        
                        <div className="width80">
                              <h3 className="text-center secHeading">Brands That Trust Us</h3>
                              <div className="col-12 d-flex flex-wrap brands">
                                    <img src={require("../asserts/images/image_5.png")} />
                                    <img src={require("../asserts/images/image_6.png")} />
                                    <img src={require("../asserts/images/image_7.png")} />
                                    <img src={require("../asserts/images/image_8.png")} />
                                    <img src={require("../asserts/images/image_9.png")} />
                                    <img src={require("../asserts/images/image_10.png")} />
                              </div>
                        </div>

                  </div>
            </div>
      </section>

     
      <section className="bgf3fa">
            <div className="container-fluid">
                  <div className="row">
                        
                        <div className="width80">
                              <h3 className="text-center w-100 secHeading">Brands Showcase</h3>

                              <div className="brands_swiper w-100">
                                    <div className="swiper-wrapper">
                                          
                                          <div className="swiper-slide" >
                                                <div className="showcase">
                                                      <div className="d-flex flex-wrap">
                                                            <img src={require("../asserts/images/google-pay.png")} />
                                                            <div className="showcase_t">
                                                                  <h4>Felix Lin</h4>
                                                                  <p>Vice President, Payment Ecosystems at Google</p>
                                                            </div>
                                                      </div>
                                                      <h5>You guys have been instrumental in getting our customer connect via SMS trustworthy.<br />Appreciate your technical support services as well.<br />
                                                      Quite responsive!</h5>
                                                </div>
                                          </div>

                                          <div className="swiper-slide" >
                                                <div className="showcase">
                                                      <div className="d-flex flex-wrap">
                                                            <img src={require("../asserts/images/google-pay.png")} />
                                                            <div className="showcase_t">
                                                                  <h4>Felix Lin</h4>
                                                                  <p>Vice President, Payment Ecosystems at Google</p>
                                                            </div>
                                                      </div>
                                                      <h5>You guys have been instrumental in getting our customer connect via SMS trustworthy.<br />Appreciate your technical support services as well.<br />
                                                      Quite responsive!</h5>
                                                </div>
                                          </div>

                                          <div className="swiper-slide" >
                                                <div className="showcase">
                                                      <div className="d-flex flex-wrap">
                                                            <img src={require("../asserts/images/google-pay.png")} />
                                                            <div className="showcase_t">
                                                                  <h4>Felix Lin</h4>
                                                                  <p>Vice President, Payment Ecosystems at Google</p>
                                                            </div>
                                                      </div>
                                                      <h5>You guys have been instrumental in getting our customer connect via SMS trustworthy.<br />Appreciate your technical support services as well.<br />
                                                      Quite responsive!</h5>
                                                </div>
                                          </div>

                                    </div>

                                    
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

      
      <section>
            <div className="container-fluid">
                  <div className="row">
                        
                        <div className="width80">
                              <h3 className="text-center secHeading">Our Offerings</h3>
                              <p className="text-center secPara">Connecting Businesses to Customers through a reliable, powerful and scalable platform.</p>

                              <div className="d-flex flex-wrap">
                                    <div className="col-12 col-sm-6 col-md-4">
                                          <div className="text-center Offerings">
                                                <span className="imgIcon"><img src={require("../asserts/images/Group.png")} /></span>
                                                <h5>A2P Messaging</h5>
                                                <p>Reliable and Robust Messaging products for Enterprises & Startup's</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                          <div className="text-center Offerings">
                                                <span className="imgIcon"><img src={require("../asserts/images/person1.png")} /></span>
                                                <h5>Voice</h5>
                                                <p>Cloud Telephony offers improved user interaction, customize flows, features, and user friendly voice application.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                          <div className="text-center Offerings">
                                                <span className="imgIcon"><img src={require("../asserts/images/interface1.png")} /></span>
                                                <h5>Mayeka OTP</h5>
                                                <p>Deliver OTPs to customers anywhere across globe.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                          <div className="text-center Offerings">
                                                <span className="imgIcon"><img src={require("../asserts/images/box1.png")} /></span>
                                                <h5>Smart Tracking</h5>
                                                <p>Track it all, from logs to demographics.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                          <div className="text-center Offerings">
                                                <span className="imgIcon"><img src={require("../asserts/images/Group213.png")} /></span>
                                                <h5>P2A Messaging</h5>
                                                <p>Two-way SMS communication between brands and their clients.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                          <div className="text-center Offerings">
                                                <span className="imgIcon"><img src={require("../asserts/images/note1.png")} /></span>
                                                <h5>Email</h5>
                                                <p>Leverage the potential of marketing automation with Mayeka's reliable Email marketing solutions.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

     
      <section className="bgmap">
            <div className="container-fluid">
                  <div className="row">
                        
                        <div className="width80">
                              <h3 className="text-center text-white secHeading">Reach more customers with faster, more reliable SMS messaging</h3>

                              <div className="d-flex flex-wrap">
                                    <div className="col-12 col-sm-12 col-md-4">
                                          <div className="text-left messaging">
                                                <img src={require("../asserts/images/business1.png")} />
                                                <h5>Guaranteed connections</h5>
                                                <p>Reach all your customers via a single API and enjoy uninterrupted SMS service at the scale you need.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-4">
                                          <div className="text-left messaging">
                                                <img src={require("../asserts/images/tools-and-utensils.png")} />
                                                <h5>Reach customers faster at scale</h5>
                                                <p>Make your message delivery faster and more reliable, without breaking the bank.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-4">
                                          <div className="text-left messaging">
                                                <img src={require("../asserts/images/interface.png")} />
                                                <h5>Enrich User Experience</h5>
                                                <p>Multiple connectivity options that enable personalized, scheduled, and multi-language messaging in a systematic, responsive and timely manner.</p>
                                                <a href="#">Learn More <i className="fas fa-arrow-right"></i></a>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

  
      <section className="padding60 bgf3fa">
            <div className="container-fluid">
                  <div className="row">
                        
                        <h3 className="w-100 text-center secHeading">Why Mayeka</h3>

                        <div className="d-flex flex-wrap w-100">
                              <div className="col-12 col-sm-12 col-md-5">
                                    <div className="row">
                                          <img className="w-100" src={require("../asserts/images/image11.png")} />
                                    </div>
                              </div>

                              <div className="col-12 col-sm-12 col-md-7">
                                    <ul className="why_m d-flex flex-wrap">
                                          <li>
                                                <img src={require("../asserts/images/Group_226.png")} />
                                                <h5>Our reach & presence</h5>
                                          </li>
                                          <li>
                                                <img src={require("../asserts/images/file1.png")} />
                                                <h5>0% Tolerance</h5>
                                          </li>
                                          <li>
                                                <img src={require("../asserts/images/check1.png")} />
                                                <h5>Remarkable customer experience</h5>
                                          </li>
                                          <li>
                                                <img src={require("../asserts/images/Group_227.png")} />
                                                <h5>Scalable, fast and flexible solutions</h5>
                                          </li>
                                          <li>
                                                <img src={require("../asserts/images/edit-tools.png")} />
                                                <h5>Customizable Voice System</h5>
                                          </li>
                                          <li>
                                                <img src={require("../asserts/images/graphic-design.png")} />
                                                <h5>Enhance Customer Experience</h5>
                                          </li>
                                    </ul>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

      <section className="padding60">
            <div className="container-fluid">
                  <div className="row">
                        
                        <div className="positionheading w-100">
                              <h1 className="w-100 text-center">Testimonials</h1>
                              <h3 className="text-center secHeading">What our customers say about us</h3>
                        </div>

                        <div className="testimonials_slide w-100">
                              <div className="swiper-wrapper">

                                    <div className="swiper-slide" >
                                          <div className="boxes d-flex">
                                                <div className="personImg">
                                                      <img src={require("../asserts/images/person12.png")} />
                                                </div>
                                                <div className="personText">
                                                      <span>"</span>
                                                      <h4>You guys have been instrumental in getting our customer connect via SMS trustworthy. Appreciate your technical support services as well. <br />
                                                      Quite responsive!</h4>
                                                      <div className="personName">
                                                            <h5>Rajesh, Soultree</h5>
                                                            <p>Manager - Marketing</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="swiper-slide" >
                                          <div className="boxes d-flex">
                                                <div className="personImg">
                                                      <img src={require("../asserts/images/person11.png")} />
                                                </div>
                                                <div className="personText">
                                                      <span>"</span>
                                                      <h4>You guys have been instrumental in getting our customer connect via SMS trustworthy. Appreciate your technical support services as well. <br />
                                                      Quite responsive!</h4>
                                                      <div className="personName">
                                                            <h5>Sailesh</h5>
                                                            <p>Vice President</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="swiper-slide" >
                                          <div className="boxes d-flex">
                                                <div className="personImg">
                                                      <img src={require("../asserts/images/person12.png")} />
                                                </div>
                                                <div className="personText">
                                                      <span>"</span>
                                                      <h4>You guys have been instrumental in getting our customer connect via SMS trustworthy. Appreciate your technical support services as well. <br />
                                                      Quite responsive!</h4>
                                                      <div className="personName">
                                                            <h5>Rajesh, Soultree</h5>
                                                            <p>Manager - Marketing</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                              
                             
                              <div className="swiper-pagination"></div>
                             
                              <div className="swiper-button-next"></div>
                              <div className="swiper-button-prev"></div>
                        </div>

                  </div>
            </div>
      </section>

      
      <footer className="bg3a">
            <div className="container-fluid">
                  <div className="row">
                        
                        <div className="width80 d-flex flex-wrap f_copyright">
                              <span>Mayeka Digitals India Pvt. Ltd. All rights reserved.</span>
                              <span>Terms and conditions • Privacy policy</span>
                        </div>

                  </div>
            </div>
      </footer>
</div>
    )
}