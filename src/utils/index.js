import iconAnalitycs from '../assets/img/icon-analitycs.svg'
import iconBanners from '../assets/img/icon-banners.svg';
import iconBlog from '../assets/img/icon-blog.svg';
import iconChats from '../assets/img/icon-chats.svg';
import iconExchange from '../assets/img/icon-exchange.svg';
import iconExit from '../assets/img/icon-exit.svg';
import iconModeration from '../assets/img/icon-moderation.svg';
import iconProfile from '../assets/img/icon-profile.svg';
import iconMoney from '../assets/img/icon-money.svg';
import iconTeam from '../assets/img/icon-team.svg';

export const sidebarMenu = [
    {
        name: "Аналитика",
        icon: iconAnalitycs,
    },
    {
        name: "Профиль",
        icon: iconProfile,
    },
    {
        name: "Модерация",
        icon: iconModeration,
    },
    {
        name: "Чаты",
        icon: iconChats,
    },
    {
        name: "Баннеры",
        icon: iconBanners,
    },
    {
        name: "Команда",
        icon: iconTeam,
    },
    {
        name: "Блог",
        icon: iconBlog,
    },
    {
        name: "Курс валют",
        icon: iconExchange,
    },
    {
        name: "",
        icon: iconMoney,
    },
    {
        name: "Выйти",
        icon: iconExit,
    }
]

export const optionsList = [
    {
        value: "Все", label: "Все"
    },
    {
        value: "Модерация объявлений", label: "Модерация объявлений"
    },
    {
        value: "Блог", label: "Блог"
    },
    {
        value: "Тех. поддержка", label: "Тех. поддержка"
    },
    {
        value: "Обращение клиентов", label: "Обращение клиентов"
    },
    {
        value: "Аналитика", label: "Аналитика"
    },
    {
        value: "Акции", label: "Акции"
    }
];

export const allOptionsSelect = [
    {
        value: "Все", label: "Все"
    }
]

export  const allOptions = [
    {
        value: "Модерация объявлений", label: "Модерация объявлений"
    },
    {
        value: "Блог", label: "Блог"
    },
    {
        value: "Тех. поддержка", label: "Тех. поддержка"
    },
    {
        value: "Обращения клиентов", label: "Обращения клиентов"
    },
    {
        value: "Аналитика", label: "Аналитика"
    },
    {
        value: "Акции", label: "Акции"}
];

export const customStyles = {
    control: (provided) => ({
        ...provided,
        minHeight: '61px',
        background: '#F9FAFB',
        border: '1px solid #C1C1CB',
        borderRadius: '10px',
        paddingLeft: '8px',
    }),
    menu: (provided) => ({
        ...provided,
        overflowY: 'auto',
        maxHeight: '200px'
    })
};