import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'KKL Wiki',
  description: 'Официальная документация проекта KKLand',
  lang: 'ru-RU',
  base: '/KKLWiki/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  ],

  sitemap: {
    hostname: 'https://masonhades.github.io',
  },

  themeConfig: {
    logo: '/favicon.png',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск по документации',
              },
              modal: {
                displayDetails: 'Подробнее',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено',
                footer: {
                  selectText: 'Выбрать',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'Навигация',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'Закрыть',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Описание', link: '/project-description' },
      { text: 'Правила', link: '/rules' },
      { text: 'Механики', link: '/server-mechanics' },
    ],

    sidebar: [
      {
        text: 'Начало',
        items: [
          { text: 'Описание проекта', link: '/project-description' },
          { text: 'Правила сервера', link: '/rules' },
          { text: 'Как начать играть', link: '/getting-started' },
          { text: 'Прогрессия и особенности', link: '/progression' },
        ],
      },

      {
        text: 'Механики',
        items: [
          {
            text: 'Механики 5 сезон',
            link: '/server-mechanics-5',
            collapsed: true,
            items: [
              { text: 'Команды и Союзы', link: '/teams' },
              { text: 'Туман', link: '/fog' },
              { text: 'Ориджины', link: '/origins' },
              { text: 'Крафты', link: '/crafts' },
              {
                text: 'Точки интереса',
                link: '/points-of-interest',
                items: [
                  { text: 'Восстановление точки', link: '/poi-restoration' },
                  { text: 'Квесты Дома Картографа', link: '/cartographer-quests' },
                ],
              },
            ],
          },

          {
            text: 'Механики Sky Is Over',
            link: '/server-mechanics-sky-is-over',
            collapsed: false,
            items: [
              { text: 'Острова', link: '/sky-is-over-islands' },
              { text: 'Аэронавтика', link: '/sky-is-over-aeronautics' },
              { text: 'Ресурсы', link: '/sky-is-over-resources' },
            ],
          },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/Masonhades/KKLWiki/edit/main/docs/:path',
      text: 'Редактировать на GitHub',
    },

    footer: {
      message: 'KKL Wiki — Документация проекта KKLand',
      copyright: `Copyright © ${new Date().getFullYear()} KKLand`,
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },

    outline: {
      label: 'На этой странице',
      level: 'deep',
    },

    lastUpdated: {
      text: 'Обновлено',
    },

    darkModeSwitchLabel: 'Тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    langMenuLabel: 'Язык',
  },
})
