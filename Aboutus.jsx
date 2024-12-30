import aboutus from './assets/about-us.jpg';

function Aboutus(){
    return(
        <>
        <body>
        <div class="text-overlay">About Us</div>
        <div class="image">
        <img
                src={aboutus}
                alt="aboutus"
                style={{
                  width: "500px",
                  height: "500px",
                  objectFit: "none",
                  objectPosition: "center",
                }}
            
              />
              </div>
        </body>
        <footer>
        &copy; Created at December 2024 
        </footer>
      </>
        
    )
}
export default Aboutus