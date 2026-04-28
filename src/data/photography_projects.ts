import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'photo-lja',
    common: {
      category: Category.DESIGN,
      image: '/images/20260416.webp',
    },
    zh: {
      title: 'LJA楼道尽头',
      subtitle: '随拍',
      description: '晚上刮大风，随手拍的',
      role: '',
      tags: [],
      awards: ["学校"],
      concept: "",
      roleDetail: "2026-04-16"
    },
    en: {
      title: 'LJA Corridor End',
      subtitle: 'Snapshot',
      description: 'Taken on a windy evening.',
      role: '',
      tags: [],
      awards: ["School"],
      concept: "",
      roleDetail: "2026-04-16"
    }
  }
];
