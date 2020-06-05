import React, { useEffect } from "react"
import $ from "jquery"
import "../asserts/css/style.css"

export default function Login(){
      
      useEffect(() => {

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

           
      },[])

    return (
    <div>
         <section className="bgImg">
                <div className="container-fluid">
                    <div className="row">

                        <div className="width80 d-flex bg-white">
                        <div className="col-12 col-sm-12 col-md-7 bgf3">
                        <div className="features">
                              <img className="logo" src={require("../asserts/images/logo.png")} />

                              <h4 className="text-center">Latest At Mayeka</h4>
                              <div className="features_list">
                                    <ul>
                                          <li>
                                                <img className="arrowPointer" src={require("../asserts/images/Group249.png")} />
                                                <div className="f_listItem">
                                                      <img src={require("../asserts/images/ab-testing.png")} />
                                                      <span>A/B test sms feature</span>
                                                </div>
                                          </li>
                                          <li>
                                                <img className="arrowPointer" src= {require("../asserts/images/Group249.png") }/>
                                                <div className="f_listItem">
                                                      <img src={require("../asserts/images/sms.png")} />
                                                      <span>Split push sms</span>
                                                </div>
                                          </li>
                                          <li>
                                                <img className="arrowPointer" src={require("../asserts/images/Group249.png")} />
                                                <div className="f_listItem">
                                                      <img src={require("../asserts/images/search.png")} />
                                                      <span>Smart url conversion tracking</span>
                                                </div>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>
        
       

        <div className="col-12 col-sm-12 col-md-5">
                        <div className="loginForm">
                              <h3 className="text-center">Welcome Back!</h3>

                              <p>Via Social Login</p>
                              <div className="socialLinks">
                                    <span className="gLogo"><img src={require("../asserts/images/google.png")} /></span>
                                    <span className="somelogo"><img src={require("../asserts/images/Group_8.png")} /></span>
                                    <span className="gitlogo"><img src={require("../asserts/images/github.png")}/></span>
                              </div>
                              <p className="seprator"><span>OR</span></p>

                              <form>
                                    <div className="form-group">
                                          <label>Email</label>
                                          <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                          <label>Password</label>
                                          <input type="password" className="form-control" id="InputPassword" placeholder="Password" />
                                          <span className="toggle-password">Show</span>
                                          <span className="toggle-passwordH">Hide</span>
                                    </div>
                                    <small><a href="#">Forgot Password</a></small>
                                    <button type="submit" className="btn btn-primary loginBtn">Login</button>
                              </form>
                              <p className="createAcc">Don't have an account? <span><a href="#">Sign Up</a></span></p>
                        </div>
                        </div>      </div>
             </div>
       </div>
    </section>      
</div>
    )
}