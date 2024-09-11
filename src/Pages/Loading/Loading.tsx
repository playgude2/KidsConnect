import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Loading.module.css";
import logo from "../../assets/logo.png";
import preloader from "../../assets/preloaderBG.png";
import preloaderForeground from "../../assets/preloaderFG.png";

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingPercentage >= 100) {
      navigate("/home");
    }
  }, [loadingPercentage, navigate]);

  return (
    <div className={classes.loadingContainer}>
      <img src={logo} alt="Hello" className={classes.logoImage} />
      <div className={classes.preloaderContainer}>
        <img
          src={preloader}
          className={classes.preloaderImage}
          alt="Preloader Background"
        />
        <img
          src={preloaderForeground}
          className={classes.preloaderForegroundImage}
          style={{ clipPath: `inset(0 ${100 - loadingPercentage}% 0 0)` }}
          alt="Preloader Foreground"
        />
        <span
          className={classes.loadingText}
          style={{
            left: `${loadingPercentage - 6}%`,
          }}
        >
          {loadingPercentage}%
        </span>
      </div>
      <p className={classes.loadingText2}>
        Loading<span className={classes.dots}>...</span>
      </p>
    </div>
  );
};

export default Loading;
