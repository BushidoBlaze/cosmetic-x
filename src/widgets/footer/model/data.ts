import type {FooterData} from './types';

export const footerData: Omit<FooterData, 'socials'> = {
    sections: [
        {
            title: 'Помощь',
            links: [
                {to: '/contact', label: 'Написать нам на почту'},
                {to: '/faq', label: 'Часто задаваемые вопросы'},
                {to: '/care', label: 'Уход за изделиями'},
                {to: '/stores', label: 'Магазины'},
                {to: '/delivery', label: 'Условия доставки и возврата'},
            ],
        },
        {
            title: 'Услуги',
            links: [
                {to: '/repair', label: 'Ремонт изделий'},
                {to: '/personalize', label: 'Персонализация'},
                {to: '/gifts', label: 'Искусство дарить подарки'},
            ],
        },
        {
            title: 'X-Cosmetic',
            links: [
                {to: '/fashion', label: 'Мода'},
                {to: '/art', label: 'Искусство и культура'},
                {to: '/house', label: 'Дом X-Cosmetic'},
                {to: '/sustainability', label: 'Устойчивое развитие'},
                {to: '/news', label: 'Последние новости'},
                {to: '/careers', label: 'Вакансии'},
                {to: '/foundation', label: 'Фонд X-Cosmetic'},
            ],
        },
    ],
    legalLinks: [
        {to: '/privacy', label: 'Privacy'},
        {to: '/terms', label: 'Terms'},
        {to: '/cookies', label: 'Cookies'},
    ],
};
