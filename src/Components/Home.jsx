import myImage from "../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="home component text-center">
      <img className="img pb-4" src={myImage} alt="My Image" />
      <h1 className="text-uppercase pb-4"> start framework</h1>
      <div className="shape">
      <i className="fa-solid fa-star pb-4"></i>
      </div>
      
      <p>Graphic Artist -Web Designer - Illustrator</p>
    </div>
  );
}
