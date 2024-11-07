import PageTemplate from '@/components/PageTemplate';

export const MainPage = () => {
    const contents = [
        {
            Title: 'test',
            Content: (
                <div className="text-4xl font-bold flex justify-center items-center h-full">
                    Welcome
                </div>
            ),
        },
    ];
    return <PageTemplate MainContent={contents} />;
};
