export const sidebarItems = [
    {
        key: 'dashboard',
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'menu1_icn.svg',
        subItem: [],
        isActive: true
    },
    {
        key: 'properties',
        path: '/',
        label: 'Properties',
        icon: 'menu2_icn.svg',
        subItem: [],
        isActive: false
    },
    {
        key: 'tenants',
        path: '/',
        label: 'Tenants',
        icon: 'menu2_icn.svg',
        isShowSubMenu: false,
        subItem: [
            {
                key: 'onboarding',
                label: 'Onboarding',
                icon: 'sub_1.svg',
                path: '/',
                isActive: false,
                allowRoutes: ['onboarding']
            },
            {
                key: 'residents',
                label: 'Residents',
                icon: 'sub_2.svg',
                path: '/residents',
                isActive: false,
                allowRoutes: ['residents', 'residents-details']
            },
        ],
        isActive: false,
        allowRoutes: ['onboarding', 'residents', 'residents-details']
    },
    {
        key: 'revenue',
        path: '/',
        label: 'Revenue',
        icon: 'menu4_icn.svg',
        subItem: [],
        isActive: false
    },
    {
        key: 'food',
        path: '/',
        label: 'Food',
        icon: 'menu5_icn.svg',
        subItem: [],
        isActive: false
    },
    {
        key: 'manage',
        path: '/',
        label: 'Manage',
        icon: 'menu6_icn.svg',
        subItem: [],
        isActive: false
    },
    {
        key: 'masters',
        path: '/',
        label: 'Masters',
        icon: 'menu6_icn.svg',
        subItem: [],
        isActive: false
    },
];