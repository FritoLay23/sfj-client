const About = ({ Comp }) => {
    return (
  
        <main>
          <>{Comp ? <Comp /> : <h1>About</h1>}</>
        </main>
  
    );
  };
  export default About;