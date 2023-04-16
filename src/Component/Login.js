import React, { useContext, useState } from "react";
import UserPool from "../UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { authUser } from "../App";
import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
const Login = () => {
  const {setAuthenticated,setId,setRefresh,email,setEmail}=useContext(authUser)
    const [password,setPassword]=useState("");

  function onSubmit(e) 
  {
    e.preventDefault();
    
    const user =new CognitoUser({
        Username:email,
        Pool:UserPool
    })
    const authDetails=new AuthenticationDetails({
        Username:email,
        Password:password
    })
 
    user.authenticateUser(authDetails,{
        onSuccess:(data)=>{
          localStorage.setItem('token',`${data.idToken['jwtToken']}`)
          localStorage.setItem('refresh',`${data.refreshToken}`)
            // setId(data.idToken['jwtToken'])
            // setRefresh(data.refreshToken)
            setAuthenticated(true)
        },
        onFailure:(err)=>{
            console.log(("Failure:",err))
            setAuthenticated(false)

        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
          // User was signed up by an admin and must provide new
          // password and required attributes, if any, to complete
          // authentication.
      
          // the api doesn't accept this field back
          delete userAttributes.email_verified;
      
          // unsure about this field, but I don't send this back
          delete userAttributes.phone_number_verified;
      
          // Get these details and call
          user.completeNewPasswordChallenge('Aditi02*',{}, this);
      }
          })
  }
  return (
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"400px",height:"300px",m:"15% 35%",border:"2px solid white",borderRadius:"30px",background:"rgba(0,0,0,0.2)"}}>
      <form onSubmit={onSubmit}>
       <Stack >
        <TextField 
        InputProps={{
          startAdornment:<InputAdornment position="start"><AccountCircleIcon/></InputAdornment>
        }}
        type='text'
        value={email}
        placeholder="Username"
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br/>
      <TextField
      type="password"
      placeholder="Password"
      value={password}
      InputProps={{
        startAdornment:<InputAdornment position="start"><LockIcon/></InputAdornment>
      }}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
      </Stack>
        <br/>
      <Button variant="contained" onClick={onSubmit} sx={{m:"0% 34%"}}>Submit</Button>
      </form>
      </Box>
  );
};

export default Login;




// <div class="w3-content" style="max-width:1200px">

// <a href="https://recobee.in/category/drama/">
//   <img style="width:100%; display:none" class="mySlides" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" alt="Image Description"/>
//   <p>Drama</p>

// </a>

// <a href="https://recobee.in/category/action/">
//   <img style="width:100%; display:none" class="mySlides" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/764-1.jpg?time=1680255686" alt="Image Description"/>
//   <p>Action</p>
// </a>

// <a href="https://recobee.in/category/crime/">
//   <img style="width:100%; display:none" class="mySlides" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/755-1.jpg?time=1680255686" alt="Image Description"/>
//   <p>Crime</p>
// </a>

// <a href="https://recobee.in/category/crime/">
//   <img style="width:100%; display:none" class="mySlides" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/755-1.jpg?time=1680255686" alt="Image Description"/>
//   <p>Crime</p>
// </a>

// <a href="https://recobee.in/category/crime/">
//   <img style="width:100%;" class="mySlides" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/755-1.jpg?time=1680255686" alt="Image Description"/>
//   <p>Crime</p>
// </a>

// <a href="https://recobee.in/category/crime/">
//   <img style="width:100%; display:none" class="mySlides" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/755-1.jpg?time=1680255686" alt="Image Description"/>
//   <p>Crime</p>
// </a>

// <a href="https://recobee.in/category/crime/">
//   <img style="width:100%; display:none" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/755-1.jpg?time=1680255686" alt="Image Description" class="mySlides"/>
//   <p>Crime</p>
// </a>




// <div class="w3-row-padding w3-section">
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%;cursor:pointer" onclick="currentDiv(1)"/>
//     </div>
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%;cursor:pointer" onclick="currentDiv(2)"/>
//     </div>
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%;cursor:pointer" onclick="currentDiv(3)"/>
//     </div>
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%" onclick="currentDiv(1)"/>
//     </div>
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%;cursor:pointer" onclick="currentDiv(2)"/>
//     </div>
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%;cursor:pointer" onclick="currentDiv(3)"/>
//     </div>
//     <div class="w3-col s4">
//       <img class="demo w3-opacity" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686"
//       style="width:100%;cursor:pointer" onclick="currentDiv(3)"/>
//     </div>
//   </div>
// </div>

//   <script>
//   function currentDiv(n) {
//     showDivs(slideIndex = n);
//   }
  
//   function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//     }
//     x[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " w3-opacity-off";
//   }
//   </script>
  









//   <div class="swiper-container main-slider loading">
//   <div class="swiper-wrapper">
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
      
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
    
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
      
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
     
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
      
//     </div>
//   </div>
//   <!-- If we need navigation buttons -->
//   <div class="swiper-button-prev swiper-button-white"></div>
//   <div class="swiper-button-next swiper-button-white"></div>
// </div>

// <!-- Thumbnail navigation -->
// <div class="swiper-container nav-slider loading">
//   <div class="swiper-wrapper" role="navigation">
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
//       <div class="content">
//         <p class="title">Shaun Matthews</p>
//       </div>
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
//       <div class="content">
//         <p class="title">Alexis Berry</p>
//       </div>
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
//       <div class="content">
//         <p class="title">Billie	Pierce</p>
//       </div>
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
//       <div class="content">
//         <p class="title">Trevor	Copeland</p>
//       </div>
//     </div>
//     <div class="swiper-slide">
//       <figure class="slide-bgimg" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686)">
//         <img src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686" class="entity-img" />
//       </figure>
//       <div class="content">
//         <p class="title">Bernadette	Newman</p>
//       </div>
//     </div>
//   </div>
// </div>





















  
// <div id="slide-window" >
  
// <ol id="slides" start="1">

//   <li class="slide color-0 alive" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686);"></li>
  
//   <li class="slide color-1" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686);"></li>
  
//   <li class="slide color-2" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686);"></li>
  
//   <li class="slide color-3" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686);"></li>
  
//   <li class="slide color-4" style="background-image:url(https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/952-1.jpg?time=1680255686);"></li>

// </ol>

// <span class="nav fa fa-chevron-left fa-3x" id="left"></span>
// <span class="nav fa fa-chevron-right fa-3x" id="right"></span>

// <div id="credit">Photography by Trey Ratcliff<br>Slide No.<span id="count">1</span><br><span id="zoom">zoom</span></div>

// </div>









// <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

//     <title>Hello, world!</title>
//   </head>
//   <body>
    
// <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <a>
//       <img class="d-block w-100" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/232-3.jpg?time=1680692029" alt="First slide"/>
//       </a>
//     </div>
//     <div class="carousel-item">
//       <a>
//       <img class="d-block w-100" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/232-3.jpg?time=1680692029" alt="Second slide"/>
//       </a>
//     </div>
//     <div class="carousel-item">
//     <a> 
//        <img class="d-block w-100" src="https://kphdd4.n3cdn1.secureserver.net/wp-content/uploads/2023/03/232-3.jpg?time=1680692029" alt="Third slide"/>
//     </a>
//     </div>
//   </div>
  
// </div>
// <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
//     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
//   </body>
// </html>