import contact from './assets/contact-us.jpeg';

function Contactus(){
    return(
        <>
        <h1>Contact Us</h1>
        <body>
        <div class="image">
            <img
                src={contact}
                alt="scenery"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "none",
                objectPosition: "center",
                }}      
            />
            </div>
        </body>
        <footer>&copy; Created at December 2024 </footer>
        </>
    )
}
export default Contactus