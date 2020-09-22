import React from "react";
import Itemcard from "../Itemcard/Itemcard";
import bg1 from "./bg.jpg";
import bg2 from "./banner.jpg";
import bg3 from "./banner2.jpg";

function Promotions() {
  return (
    <div className="container py-5">
      <h1 className="text-center">Promotions</h1>
      <div className="row pt-2">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 py-2">
          <Itemcard
            imgsrc={bg1}
            title="Singapore"
            content="An Awesome Trip To Singapore Waves"
            tags="Family/Single"
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 py-2">
          <Itemcard
            imgsrc={bg2}
            title="Maldives"
            content="Enjoy the rides in Maldives"
            tags="Family/Single"
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 py-2">
          <Itemcard
            imgsrc={bg3}
            title="Mauritius"
            content="An Awesome Trip To Mauritius"
            tags="Family/Single"
          />
        </div>
      </div>
    </div>
  );
}

export default Promotions;
