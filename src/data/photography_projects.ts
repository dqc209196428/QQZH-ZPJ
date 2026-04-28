import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'd5-copy',
    common: {
      category: Category.VIDEO,
      image: '/images/20260416.jpg',
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
      title: 'Infographic Design for Movie Information | Undergraduate Thesis',
      subtitle: 'Visual Design System',
      description: 'The infographic design project based on Cinemetrics, which mainly focuses on the content analysis and visualization of movies.',
      role: 'ALL',
      tags: ['Infographic', 'Cinemetrics', 'Figma'],
      awards: ["None"],
      concept: "Antique kraft paper design, new Chinese-style design.",
      roleDetail: "Cover everything."
    }
  }
];
