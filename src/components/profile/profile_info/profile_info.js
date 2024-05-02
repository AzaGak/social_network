import ProfileStatus from "./profileStatus/profile_status";
import cls from "./profile_info.module.css"; // Подключение модулем, в cls лежит объект ключи которого соответвует классом в файле profile.module.css а значение сгенирированны автоматический react

const avatarSrc =
    "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000";

const ProfileInfo = (props) => {
    console.log(props);
    return (
        <div>
            <div className={cls.profile_background}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="background"
                />
            </div>

            <div className={cls.profile_info}>
                <div className={cls.avatar}>
                    <img
                        src={
                            props.profile === null
                                ? avatarSrc
                                : props.profile.photos.small
                        }
                        alt="avatar"
                    />
                </div>
                <div className={cls.profile_data}>
                    <div className={cls.profile_name}>
                        {!props.profile
                            ? "Snoop Dog!!!"
                            : props.profile.fullName}
                    </div>
                    <div className={cls.profile_list}>
                        <ul>
                            <li>
                                Ищу работу:{" "}
                                {!props.profile
                                    ? "Нет иформации"
                                    : props.profile.lookingForAJob
                                    ? "ДА"
                                    : "НЕТ"}
                            </li>
                            <li>
                                Описание поиска работы:{" "}
                                {!props.profile
                                    ? "Нет информации"
                                    : props.profile.lookingForAJobDescription}
                            </li>
                            <li>
                                About me:{" "}
                                {!props.profile
                                    ? "Нет информации"
                                    : props.profile.aboutMe}
                            </li>
                            <li>
                                <ProfileStatus status={"Hello my Friends!!!"} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
