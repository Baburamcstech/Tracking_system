import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="About-App">
        Lorem ipsum dolor sit amet consecte tur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum.
      </div>
      <div className="options-container">
        <div className="option student">
          <h2>For Students</h2>
          <p>Explore resources tailored for students.</p>
          <Link to="/branches" style={{ textDecoration: "none", color: "inherit" }}><button>Explore</button></Link>
        </div>
        <div className="option teacher">
          <h2>For Teachers</h2>
          <p>Discover tools designed for educators.</p>
          <button >Discover</button>
        </div>
      </div>
    </div>
  );
}

export default Home;