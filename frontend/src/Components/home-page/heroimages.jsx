export default function HeroImages(props) {
  console.log(props.image.img1);
  return (
    <div className="mt-4">
      <div className="prices2">
        <img
          src={props.image.img1}
          style={{ width: "100%", height: "100%" }}
          alt="heroimages"
        />
      </div>
      <div className="prices2a">
        <img src={props.image.img2} style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
}
