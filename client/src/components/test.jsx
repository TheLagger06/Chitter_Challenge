import React from 'react'

const test = () => {


     function pop() {
    document.getElementById("popup-1")
  .classList.toggle("active");
    };
    
    return (
        <>
      <a>asdasd</a>
       <div className="popup" id="popup-1">
   <div className="content">
    <div className="close-btn"><button className='popBtn' onClick={pop}>
      ×
    </button>
     </div>
     
<h1>Sign in</h1> 
  <div className="input-field"><input placeholder="Email" className="validate"/></div>
  <div className="input-field"><input placeholder="Password" className="validate"/></div>
    <button className="second-button">Sign in</button>
    <p>Don't have an account? <a href="/signup.html">Sign Up</a></p>
   </div>
  </div>
<button onClick={pop}class="first-button">
      Click me!
    </button>
<script>
 
</script>
        </>
  )
}

export default test