import { CategoriesData } from './Categories.types';

export const categoriesData: CategoriesData[] = [
  {
    key: 'credit',
    id: 1,
    title: 'Кредит',
    label: 'Поможем оформить или решить проблемы связанные с кредитованием',
    delay: 0,
  },
  {
    key: 'insurance',
    id: 2,
    title: 'Страхование бизнеса',
    label: 'Поможем защеить ваш бизнесс от потенциальных рисков и убытков',
    delay: 0.15,
  },
  {
    key: 'service',
    id: 3,
    title: 'Сервис',
    label: 'Поможем вас в техническими вопросами',
    delay: 0.3,
  },
  {
    key: 'business',
    id: 4,
    title: 'Бизнес',
    label: 'Решим такие вопросы как: маркетинг, финансы, производство и т.д.',
    delay: 0.45,
  },
  {
    key: 'management',
    id: 5,
    title: 'Менеждмент',
    label: 'Поможем решить вопросы организации, контроля и координации ресурсов в вашей компании',
    delay: 0.6,
  },
  {
    key: 'general chat',
    id: 6,
    title: 'Не знаю куда обратиться',
    label: 'Включает в себя любые вопросы или проблемы, с которыми вы не знаете куда обратиться.',
    delay: 0.75,
  },
];