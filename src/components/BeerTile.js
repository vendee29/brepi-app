import "./BeerTile.css";
import { Card } from "antd";
const { Meta } = Card;

const BeerTile = (props) => {
  const handleClick = () => {
    props.onClick(props.beer.id);
  };

  return (
    <div className="beer_tile_card" onClick={handleClick}>
      {props.side === "front" ? (
        <Card
          hoverable
          size="small"
          style={{
            width: 350,
            height: 220,
          }}
          cover={
            <img
              className="beer_tile_card_img"
              alt="beer-bottle"
              src={props.beer?.image_url}
            />
          }
        >
          <Meta
            className="meta"
            title={props.beer?.name}
            description={props.beer?.tagline}
          />
        </Card> //or
      ) : (
        <Card
          hoverable
          size="small"
          style={{
            width: 350,
            height: 220,
          }}
          cover={
            <div className="beer-description">{props.beer?.description}</div>
          }
        >
          <Meta
            className="meta"
            title={props.beer?.name}
            description={props.beer?.tagline}
          />
        </Card>
      )}
    </div>
  );
};

export default BeerTile;
