import scenery from './assets/scenery.jpeg';

function Home() {
  return (
    <>
      <h2>Welcome to the Home Page</h2>
      <div class="image">
      <img
        src={scenery}
        alt="scenery"
        style={{
          width: "500px",
          height: "500px",
          objectFit: "none",
          objectPosition: "center"
        }}
      />
      </div>
      <footer>
        &copy; Created at December 2024 
      </footer>
    </>
  );
}

export default Home;
