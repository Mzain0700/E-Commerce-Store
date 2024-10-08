import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default function ContactUs(){
return(
<div>
<div class="row-fluid">
      	<div class="span4">
      		<div class="thumbnail content-white">
      			<div class="caption">
      				<div class="one">
		        		<h4>Customer Services</h4>
		        		<p>Phone - <a rel="nofollow" href="tel:+441244752299">+44 (0)1244 752 299</a><br />Email - <a rel="nofollow" href="mailto:sales@domain.com">sales@domain.com</a></p>
		        		
		        		<h4>Support</h4>
		        		<p>Phone - <a rel="nofollow" href="tel:+441244752299">+44 (0)1244 752 299</a><br></br>Email - <a rel="nofollow" href="mailto:support@domain.com">support@domain.com</a></p>
		        		<p align="left">Or, simply complete the form to the right and we'll be in touch very soon.</p>					        		
		        		<p align="left">Alternatively, SMS text <strong><a rel="nofollow" href="sms:CALLME to 2222" class="darkBlue">CALLME to 2222</a></strong>. We'll help with any questions you may have about opt-in mobile marketing and SMS text alerts and how it can revolutionise your business.</p>
					</div>
      			</div>
      		</div>
      	</div>

      	<div class="span8">
      		<div class="thumbnail content-white">
      			<div class="caption">
      				<h4>Contact Us</h4>
      				<form class="form-horizontal">
					  <div class="control-group">
					    <label class="control-label" for="name">Name</label>
					    <div class="controls">
					      <input type="text" id="name" placeholder="Full Name" />
					    </div>
					  </div>
					  <div class="control-group">
					    <label class="control-label" for="phone">Phone</label>
					    <div class="controls">
					      <input type="text" id="phone" placeholder="Phone" />
					    </div>
					  </div>
					  <div class="control-group">
					    <label class="control-label" for="subject">Subject</label>
					    <div class="controls">
					      <input type="text" id="subject" placeholder="Subject" />
					    </div>
					  </div>
					  <div class="control-group">
					    <label class="control-label" for="m">Message</label>
					    <div class="controls">
					      <textarea placeholder="Enter Message" name="m" id="m"></textarea>
					    </div>
					  </div>
					  
					  <div class="control-group">
					    <div class="controls">
					      <button type="submit" class="btn btn-primary">Submit</button>
					    </div>
					  </div>
					</form>
      			</div>
      		</div>
      	</div>
      </div>

      <div class='padding-top-10'></div>

      <div class="row-fluid">
      	<div class="span12">
      		<div class="thumbnail content-white">
      			<div class="caption">
      				<iframe width="100%" scrolling="no" height="300px" frameborder="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Staples+Center+Los+Angeles&amp;aq=&amp;vpsrc=6&amp;g=WR143SZ&amp;ie=UTF8&amp;hq=&amp;hnear=Staples+Center+Los+Angeles&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" marginwidth="0" marginheight="0"></iframe>
      			</div>
      		</div>
      	</div>
      </div>


</div>

);



}