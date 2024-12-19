import { useSelector } from 'react-redux';

import pattern from '@/assets/back-pattern.png';
import profileDark from '@/assets/profile.png';
import profileLight from '@/assets/profileLight.png';
import { getTheme } from '@/redux/selectors';
import { SFC } from '@/types';
import { getUserData } from '@/utils/authentication.ts';

import * as S from './Styles';

const Profile: SFC = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const userData = getUserData();
    const theme = useSelector(getTheme);

    return (
        <S.Container>
            <S.PatternBackground src={pattern} />
            {userData.image ? (
                <S.Image src={userData.image} />
            ) : (
                <S.DefaultImageContainer>
                    <S.DefaultImage
                        src={theme === 'dark' ? profileLight : profileDark}
                    />
                </S.DefaultImageContainer>
            )}
            <S.Name>{`${userData.first_name} ${userData.last_name}`}</S.Name>
            <S.Date>
                {currentHour >= 18 || currentHour < 6
                    ? 'شب بخیر؛ '
                    : 'روز بخیر؛ '}
                {currentDate.toLocaleDateString('fa-IR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                })}
            </S.Date>
        </S.Container>
    );
};

export default Profile;
