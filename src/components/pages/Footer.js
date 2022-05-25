import React from 'react'
import '../css/styles.css'
import { FiFacebook } from "react-icons/fi";


function Footer() {
  return (
    <div class="d-flex flex-column h-100">

                <section class="hero text-white py- flex-grow-1">
                    <div class="container py-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-4">Bootstrap footer bottom</h1>
                                <p class="fst-italic text-muted link-dark" style={{fontFamily:'mett', fontSize:'1.5rem'}}>
                                   </p>
                            </div>
                        </div>
                    </div>
                </section>
            
                <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">FB</h5>
              
              <p class="small text-muted mb-0" >&copy; Copyrights. All rights reserved. <p style={{color:'green'}}>Segnihabte@Github.com</p></p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li><a style={{textDecoration:'none',color:'black'}} href="https://www.facebook.com/segnihabte/" target="blank">Facebook</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">Instagram</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">LinkedIn</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">Github</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li><a style={{textDecoration:'none',color:'black'}} href="#">Telegram</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">Phone Number</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#"></a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#"></a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">Newsletter</h5>
              <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.<></>
              </p>
              <form action="#">
              </form>
            </div>
          </div>
        </div>
                </footer>
            </div> 
  )
}

export default Footer