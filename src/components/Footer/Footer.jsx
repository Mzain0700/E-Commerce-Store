import React from "react";
import "./Footer.css";
import EmailLetter from "../EmailLetter/EmailLetter";

export default function Footer() {
    return (
        <div>
           <EmailLetter />
           <br></br>
            <footer class="section-p1">
                <div class="col">
                    <img src="./assets/zain-logo.png" class="logo" width="100px" height="50px" alt="" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> Naval Complex Islamabad</p>
                    <p><strong>Phone:</strong> 0311015521</p>
                    <p><strong>Hours:</strong> 10:00- 18:00, Mon- Sat</p>
                    <div class="follow">
                        <h4>Follow us</h4>
                        <div class="icon">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-pinterest"></i>
                            <i class="fa fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div class="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>

                </div>
                <div class="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div class="row">
                        <img src="./assets/apple.jpg" width="100px" height="70px" alt="" />
                        <img src="./assets/googlepay.png" width="100px" height="70px" alt="" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="./assets/master.png" width="200px" height="50px" alt="" />
                </div>
                <div class="copyright">
                    <p>@ 2024, Muhammad Zain Store</p>
                </div>
            </footer>
        </div>


    );

}

