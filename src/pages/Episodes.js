import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import styles from "./Episodes.module.css";
import Playhead from "../components/Playhead";
import line from "../assets/line.png"
import apple from "../assets/group-4.svg"
import spotify from "../assets/group-5.svg"

const Episodes = () => {
  return (
    <div className={styles.episodesWrapper}>
        <Header />
        <div className={styles.insertImageParent}>
          <div className={styles.episodes}>
            <b className={styles.episodes1}>Episodes</b>
            <img className={styles.episodesChild} alt="" src={line} />
            <div className={styles.groupParent}>
              <a className={styles.frameChild} href=""><img alt="" src={spotify} /></a>
              <a className={styles.frameChild} href=""><img alt="" src={apple} /></a>
            </div>
          </div>
        </div>
        <div className={styles.playheadParent}>
            <Playhead/>
            <Playhead/>
            <Playhead/>
        </div>
        <BottomFooter />
    </div>
  );
};

export default Episodes;