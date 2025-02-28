import React, { useState, useEffect } from "react";
import "./GifAPI.scss";

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CatFetcher: React.FC = () => { // React.FC → TypeScript-typning som specificerar att CatFetcher är en React Functional Component.
  const [catImage, setCatImage] = useState<CatImage | null>(null); 

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
        const data: CatImage[] = await response.json();
        setCatImage(data[0]); //Hämtar den förta bilden i APIet
      } catch (error) {
        console.error("Fel vid hämtning av kattbild:", error);
      }
    };

    fetchCat();
  }, []);

  return (
    <div className="gif-container">
      <h1>En favorit idag 🐱</h1>
      <div className="cat-wrapper">
        {catImage ? (
          <img src={catImage.url} alt={`Cat ${catImage.id}`} className="cat-image" />
        ) : (
          <p className="loading-text">Laddar kattbild...</p>
        )}
      </div>
    </div>
  );
};

export default CatFetcher;
