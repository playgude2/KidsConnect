import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import buttonSound from "../../assets/button_click.wav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const sound = new Audio(buttonSound);
    setAudio(sound);
  }, []);

  const playSound = () => {
    if (audio) {
      audio.play();
    }
    setTimeout(() => {
      navigate("/admin");
    }, 500);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row m-0 justify-content-center align-items-center min-vh-100">
        <div className="col-12 p-0">
          <div className="card">
            <div className="dropdown">
              <select
                className="form-select"
                size={2}
                aria-label="size 2 select example"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="cy">Cymraeg</option>
              </select>
            </div>
            <h1>{t('welcome_message')}</h1>
            <button onClick={playSound} className="startButton">
              {t('start_button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
