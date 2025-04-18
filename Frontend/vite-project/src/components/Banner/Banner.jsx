import "./Banner.css";

function Banner({ text, image }) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="banner" style={style}>
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Banner;
