import {Outlet} from 'react-router-dom';
import {HeaderAdvertising} from '@/widgets/headerAdvertising';
import {Header} from '@/widgets/header';
import {Footer} from '@/widgets/footer';

export default function MainLayout() {
    return (
        <>
            <div className="global-top">
                <HeaderAdvertising/>
                <Header/>
            </div>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
