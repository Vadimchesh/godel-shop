import style from './styles.module.scss'
import WorkSection from "./WorkSection/WorkSection";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";

export default function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.main}>
      <Slider />
      <WorkSection />
      </div>
     
    </div>
  );
}



