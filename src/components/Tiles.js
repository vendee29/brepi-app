import BeerTile from "./BeerTile";
import { useState } from "react";
import { Row, Col } from "antd";

const Tiles = (props) => {
  const [flippedTileId, setFlippedTileId] = useState(null);

  const clickHandler = (id) => {
    setFlippedTileId(flippedTileId === id ? null : id);
  };

  if (props.beers.length === 0) {
    return <div>Loading beers...</div>;
  }

  return (
    <div className="beer_tiles">
      <Row gutter={16} justify="space-around" className="row">
        <Col span={8}>
          <BeerTile
            beer={props.beers[0]}
            side={props.beers[0].id === flippedTileId ? "back" : "front"}
            onClick={clickHandler}
          />
        </Col>
        <Col span={8}>
          <BeerTile
            beer={props.beers[1]}
            side={props.beers[1].id === flippedTileId ? "back" : "front"}
            onClick={clickHandler}
          />
        </Col>
        <Col span={8}>
          <BeerTile
            beer={props.beers[2]}
            side={props.beers[2].id === flippedTileId ? "back" : "front"}
            onClick={clickHandler}
          />
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="row">
        <Col span={8}>
          <BeerTile
            beer={props.beers[3]}
            side={props.beers[3].id === flippedTileId ? "back" : "front"}
            onClick={clickHandler}
          />
        </Col>
        <Col span={8}>
          <BeerTile
            beer={props.beers[4]}
            side={props.beers[4].id === flippedTileId ? "back" : "front"}
            onClick={clickHandler}
          />
        </Col>
        <Col span={8}>
          <BeerTile
            beer={props.beers[5]}
            side={props.beers[5].id === flippedTileId ? "back" : "front"}
            onClick={clickHandler}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Tiles;
