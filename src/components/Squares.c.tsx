const Squares = ({ imageUrl, name }: any) => {
    return (
      <div className="squares" style={{ backgroundImage: `url(${imageUrl})` }}>
        <p>{name}</p>
      </div>
    );
  };
  
  export default Squares;