import * as S from './Styles';
import logoblack from '@/assets/logoWhite.png';
import logoWhite from '@/assets/logoWhite.png';
import { useSelector } from 'react-redux';
import { getTheme } from '@/redux/selectors';

const TopBar = () => {
    const theme = useSelector(getTheme);

    return (
        <S.Container>
            <S.Logo src={`${theme === 'dark' ? logoWhite : logoblack} `} />
            <S.Gap />
            <div className="text-lg ml-2">
                {new Date()
                    .toLocaleDateString('fa-ir', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                    })
                    .toString()}
            </div>
        </S.Container>
    );
};

export default TopBar;
