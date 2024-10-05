import React from "react";
import "./EmailLetter.css"
export default function EmailLetter()
{
    return(
        <div>
             <section id="newsletter" class="section-p1 section-m1">
            <div class="news-text">
                <h4>Sign Up for Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address" />
                <button class="normal">Sign Up</button>
            </div>
        </section>
        </div>
        );
}