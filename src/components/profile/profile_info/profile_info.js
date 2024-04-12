import cls from "./profile_info.module.css"; // Подключение модулем, в cls лежит объект ключи которого соответвует классом в файле profile.module.css а значение сгенирированны автоматический react

const ProfileInfo = () => {
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
                        src="https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000"
                        alt="avatar"
                    />
                </div>
                <div className={cls.profile_data}>
                    <div className={cls.profile_name}>Snoop Dog!!!</div>
                    <div className={cls.profile_list}>
                        <ul>
                            <li>Date of Birth: 2 Junuary</li>
                            <li>City: Minsk</li>
                            <li>Education: BSU`11</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
