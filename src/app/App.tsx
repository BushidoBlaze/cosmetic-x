import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {useScrollReveal} from '@/shared/hooks';
import {BackToTopButton} from '@/widgets/backToTop';
import {Home} from '@/pages/home';
import {Login} from '@/pages/login';
import {Register} from '@/pages/register';
import {NotFound} from '@/pages/notFound';

import MainLayout from './layouts/MainLayout';

import './styles/reset.css';
import './styles/global.css';
import './styles/fonts.css';

function AppRoutes() {
    useScrollReveal();

    return (
        <>
            <BackToTopButton/>

            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="/log-in" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <AppRoutes/>
        </BrowserRouter>
    );
}
