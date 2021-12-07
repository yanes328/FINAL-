import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <div className="container my-5">
        <h1 className="section-title">About this Application</h1><hr/>
        <h4>TheCocktailDB was built in 2015 to provide a free data source api for drinks online
            in the hope that developers would build applications and cool projects ontop of it.
            TheCocktailDB originated on the Kodi forums as a way to browse cocktail recipes on your TV.
        </h4>
        <p>Yanes Makawekes, Teknik informasi</p>
      </div>

      <Footer />
    </>
  );
}

export default About;