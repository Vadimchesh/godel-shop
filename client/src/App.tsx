import s from './styles.module.scss'
import WorkSection from "./WorkSection/WorkSection";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";

export default function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.main}>
      <Slider />
      <WorkSection />
      </div>
     
    </div>
  );
}



