import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form>
        <input type="text" placeholder="Email Address" className="p-2 m-2"/>
        <input type="password" placeholder="Password" className="p-2 m-2"/>
        <button className="p-4 m-4 ">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
