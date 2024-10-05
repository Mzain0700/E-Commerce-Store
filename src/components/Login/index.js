import React from 'react'
import "./Login.css";
export default function index() {
  return (
    <>
      
      <div class="zain">
        <div class="login-light"></div>
        <div class="login-box">
          <form action="#">
            <input type="checkbox" class="input-check" id="input-check" />
            <label for="input-check" class="toggle">
              <span class="text off"><pre>   off</pre></span>
              <span class="text on"><pre>   on</pre></span>
            </label>
            <div class="light"></div>

            <h2>Login</h2>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
              <div class="input-line"></div>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
              <div class="input-line"></div>
            </div>
            <div class="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div class="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>




    </>
  )
}
