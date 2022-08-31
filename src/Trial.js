import './Trial.css';


function Trial(){
    return(
        <div className="Form">
            <div className='logo'>
                <h2>EddieShop</h2>
            </div>
            <div className='start'>
                <h2>Welcome Back</h2>
            </div>
            < div className='form'>
                <label for ='email'>Your Email:</label><br/>
                <input type='text' id='email'placeholder='owuor@gmail.com'></input><br/>
                <label for ='pin'>Password</label><br></br>
                <input type='text' id='pin'placeholder='atleast 8 characters'></input><br/>
                <input type='checkbox' id='log' value='In'></input>
                <label for ='log'>keep me logged in</label><span class="psw">Forgot Password? </span><br></br>
                <button type="login">Login</button><br></br>
            
                __________________________or___________________________<br></br>
                <div className='icons'>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                
                </div>
                <div className='Image'>
                <img src='https://o.remove.bg/downloads/5c78cabb-e7df-4e82-981e-84386c3f56b7/1638104303_36168-removebg-preview.png'></img>

                </div>

            


            
   

            </div>
    </div>
           

    )
}
export default Trial;

    
