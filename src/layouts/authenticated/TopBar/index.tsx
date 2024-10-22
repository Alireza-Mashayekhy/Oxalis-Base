import * as S from './Styles';
import logoblack from '@/assets/logoWhite.png';
import logoWhite from '@/assets/logoWhite.png';
import { useSelector } from 'react-redux';
import { getTheme } from '@/redux/selectors';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const theme = useSelector(getTheme);
    const navigate = useNavigate();

    const items = [
        {
            label: 'محصولات',
            items: [
                {
                    label: 'Proma',
                    command: () => navigate('/proma/home'),
                },
                {
                    label: 'Asset-Map',
                    command: () => navigate('/asset-map'),
                },
                {
                    label: 'Vigilio',
                    command: () => navigate('/vigilio'),
                },
                {
                    label: 'Guardian',
                    command: () => navigate('/guardian'),
                },
            ],
        },
    ];

    return (
        <S.Container>
            <S.Logo src={`${theme === 'dark' ? logoWhite : logoblack} `} />
            <S.Menu model={items} />
            <S.Date>
                <div>
                    {new Date()
                        .toLocaleDateString('fa-ir', {
                            month: 'long',
                            day: '2-digit',
                        })
                        .toString()}
                </div>
                <S.Year>
                    {new Date()
                        .toLocaleDateString('fa-ir', {
                            year: 'numeric',
                        })
                        .toString()}
                </S.Year>
            </S.Date>
        </S.Container>
    );
};

export default TopBar;
