import React from "react";
import "./Register.css"
export default function index() 
{
  return (
    <>
 <div class="zain1">
        <div class="login-light"></div>
        <div class="login-box">
          <form action="#">
            <input type="checkbox" class="input-check" id="input-check" />
            <label for="input-check" class="toggle">
              <span class="text off"><pre>   off</pre></span>
              <span class="text on"><pre>   on</pre></span>
            </label>
            <div class="light"></div>

            <h2>SignUp</h2>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="text" required />
              <label>First Name</label>
              <div class="input-line"></div>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="text" required />
              <label>Last Name</label>
              <div class="input-line"></div>
            </div>
            

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
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Confirm Password</label>
              <div class="input-line"></div>
            </div>
            <div class="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">SignUp</button>
            <div class="register-link">
              <p>Already have an account? <a href="#">Login</a></p>
            </div>
          </form>
        </div>
      </div>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>



      {/* <h1 className="display-1 text-center m-4">Register</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value="Mark"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value="Otto"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              OTP
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">Please provide a valid OTP</div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom05" className="form-label me-5">
              Generate OTP:
            </label>
            <input
              className="form-check-input me-3"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" for="invalidCheck">
              Display OTP link
            </label>
            <div className="invalid-feedback">
              You must enter valid OTP before submitting.
            </div>
            <div className="invalid-feedback">Please provide a valid OTP.</div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>{" "}
      </div> */}
    </>
  );
}
