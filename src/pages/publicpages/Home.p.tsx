const Home = ({ Comp }) => {
  return (

      <main>
        <>{Comp ? <Comp /> : <h1>Home</h1>}</>
      </main>

  );
};
export default Home;