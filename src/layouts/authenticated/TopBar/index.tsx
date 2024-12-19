import { mdiChevronLeft } from '@mdi/js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import logoblack from '@/assets/logoWhite.png';
import logoWhite from '@/assets/logoWhite.png';
import { getTheme } from '@/redux/selectors';

import * as S from './Styles';

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
                    command: () => navigate('/asset-map/home'),
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
        {
            label: 'درباره ما',
            command: () => navigate('/about-us'),
        },
    ];

    return (
        <S.Container>
            <S.Logo src={`${theme === 'dark' ? logoWhite : logoblack} `} />
            <S.Menu>
                {items.map((e, index) => {
                    return (
                        <div
                            className="label"
                            style={{ zIndex: (items.length - index) * 10 }}
                        >
                            <div className="labelInfo" onClick={e.command}>
                                <span>{e.label}</span>
                                {e?.items?.length && (
                                    <S.Icon path={mdiChevronLeft} size="20px" />
                                )}
                            </div>
                            {e?.items?.length && (
                                <div className="children">
                                    {e.items.map((item) => {
                                        return (
                                            <div
                                                className="item"
                                                onClick={item.command}
                                            >
                                                {item.label}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </S.Menu>
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
