import cls from "./preloader.module.css";
import preloader from "../../../assets/loader/Spinner.svg";

const Preloader = () => {
    return (
        <div className={cls.preloader_wrap}>
            <img src={preloader} alt="preloader" />
        </div>
    );
};

export default Preloader;
