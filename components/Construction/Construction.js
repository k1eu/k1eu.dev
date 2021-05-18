import { construction, lottiee, contact } from "./construction.module.scss";
import Lottie from "lottie-react";
import animation from "public/construction.json";
const Construction = () => {
  return (
    <div className={construction}>
      <Lottie animationData={animation} />
      <div className={contact}>
        <h1>k1eu.dev</h1>
        <h2>is under construction!</h2>
        <h3>
          <p>Contact me at </p>
          <p>
            <a href="mailto:k1eu.developer@gmail.com">
              k1eu.developer@gmail.com
            </a>
          </p>
        </h3>
      </div>
    </div>
  );
};

export default Construction;
