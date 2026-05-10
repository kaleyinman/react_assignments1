function About() {
  return (
   <main className="about-page">
      <h1>About Kaley</h1>
      <div className="about-card">
        <img
          src="images_gifs/broad_winged_hawk.jpg"
          alt="Kaley Inman"
          style={{
            width: '300px',
            height: '300px',
            display: 'block',
            borderRadius: '50%',
            objectFit: 'cover',
            boxSizing: 'border-box',
            border: '4px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
          }}
        /> 
         <p>
         Kaley Inman is currently pursuing a master's degree in graphic and web design at MCAD. When she is not wrapped up in coursework, she can be found outddoors photographing birds, or hunkered down inside playing video games.
        </p>
      </div>
    </main>
  );
}

export default About;