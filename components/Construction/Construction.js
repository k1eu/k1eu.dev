import { construction, contact } from "./construction.module.scss";
import Lottie from "lottie-react";
import animation from "public/construction.json";
import Share from "components/Share/Share";
const Construction = () => {
  return (
    <div className={construction}>
      <Lottie animationData={animation} />
      <div className={contact}>
        <h1>k1eu.dev</h1>
        <h2>is under construction!</h2>
        <h3>
          <p>You can find || contact me here:</p>
          <Share/>
        </h3>
      </div>
    </div>
  );
};

export default Construction;
