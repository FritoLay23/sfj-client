const NoPage = ({ Comp }) => {
    return (
  
        <main>
          <>{Comp ? <Comp /> : <h1>NoPage</h1>}</>
        </main>
  
    );
  };
  export default NoPage;