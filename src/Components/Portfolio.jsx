import { useState } from "react";
import image1 from "../assets/poert1.png";
import image2 from "../assets/port2.png";
import image3 from "../assets/port3.png";

export default function Portfolio() {
  // images
  const [images] = useState([
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image1 },
    { id: 5, image: image2 },
    { id: 6, image: image3 },
  ]);

  // selected image
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="portfolio component text-center text-dark">
      <h1 className="text-uppercase pb-3">Portfolio Component</h1>
      <i className="fa-solid fa-star pb-4"></i>

      <div className="selected-image">
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              alt="Selected"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
            <button
              className="btn btn-danger"
              onClick={() => setSelectedImage(null)}
            >
              Close image
            </button>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row g-4">
          {images.map((img) => (
            <div className="col-md-4" key={img.id}>
              <img
                src={img.image}
                alt={`Portfolio ${img.id}`}
                className="img-fluid image"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(img.image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
