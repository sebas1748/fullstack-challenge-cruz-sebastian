const Char = ({ name, status, species, imageUrl, setImage, setName }) => {
    return (
    <div
      className='color-square'
      onClick={() => setImage(imageUrl) & setName(name)}
    >
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
    );
  };
  
  export default Char;