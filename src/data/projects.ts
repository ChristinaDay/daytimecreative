import { ProjectData } from '@/components/projects/ProjectCard';

export const projectsData: ProjectData[] = [
  {
    title: 'UpDrift: Cosmic Design System Case Study',
    description: 'Next-generation job search platform featuring mathematical animation systems, comprehensive Figma design token integration, and cutting-edge MCP development workflow. Demonstrates unique visual identity through 60fps cosmic elements and systematic design thinking.',
    designerDeveloperDescription: 'Built a comprehensive job search platform with mathematical precision cosmic design system, integrated Figma design tokens, and MCP-assisted development workflow. Features 15+ theme variations, real-time sine wave animations, particle systems, and systematic documentation of complex visual elements.',
    image: '/images/updrift-hero-preview.png',
    link: '/projects/updrift',
    tags: ['Design Systems', 'Mathematical Animation', 'Figma Integration', 'MCP Tools', 'Cosmic UI'],
    designerDeveloperTags: ['Next.js', 'TypeScript', 'Figma Tokens', 'Mathematical Animation', 'Cursor IDE', 'MCP Tools', 'Design Systems'],
    year: '2024-2025',
    bgColor: 'from-cyan-500/15 via-3% via-transparent via-97% to-blue-600/12 dark:from-cyan-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-blue-500/10',
    designHighlights: [
      'Created unique cosmic design system with mathematical precision animations',
      'Integrated Figma design tokens with 15+ theme variations',
      'Achieved 60fps performance across all devices with complex particle systems',
      'Documented systematic approach to bridging design and development workflows'
    ],
    technicalHighlights: [
      'Mathematical sine wave calculations for organic cosmic animations',
      'MCP tools for 3x faster development with real-time documentation access',
      'Performance optimization: 60fps animations with GPU acceleration',
      'Comprehensive Figma integration with automated token export workflow'
    ]
  },
  {
    title: 'Portfolio 2025 - Cursor Case Study',
    description: 'Modern portfolio website showcasing cutting-edge web development techniques with atmospheric background animations, interactive components, and sophisticated design systems.',
    designerDeveloperDescription: 'Designed and developed a modern portfolio website using Next.js, React, and advanced CSS techniques. Created atmospheric background animations with parallax scrolling, interactive starfield animations, and sophisticated gradient effects. Implemented responsive design with dark/light mode support and performance optimizations.',
    image: '/images/cursor-portfolio-hero.png',
    link: '/projects/cursor-case-study',
    tags: ['Next.js', 'React', 'CSS Animations', 'Parallax Effects', 'Design Systems'],
    designerDeveloperTags: ['Next.js', 'React', 'CSS Animations', 'SVG Animations', 'Performance Optimization', 'Responsive Design'],
    year: '2025',
    bgColor: 'from-violet-500/15 via-3% via-transparent via-97% to-purple-600/12 dark:from-violet-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-purple-500/10',
    designHighlights: [
      'Created atmospheric background system with gradient clouds and nebula effects',
      'Designed interactive starfield animations with realistic twinkling effects',
      'Implemented sophisticated parallax scrolling for depth and immersion'
    ],
    technicalHighlights: [
      'Built custom SVG animation system with dynamic keyframe injection',
      'Implemented GPU-accelerated parallax scrolling with requestAnimationFrame',
      'Created responsive design system with dark/light mode support',
      'Optimized performance with will-change properties and passive event listeners'
    ]
  },
  {
    title: 'Design System & Component Library',
    description: 'Built a complete design system with 50+ React components, automated design token generation, and engineering workflows that reduced development time by 60% while ensuring design consistency.',
    designerDeveloperDescription: 'Built a complete design system with 50+ React components, automated design token generation, and engineering workflows that reduced development time by 60% while ensuring design consistency.',
    image: '/images/zerocater-ZeroCater_design-system.png',
    link: '/projects/design-system',
    tags: ['React Components', 'Design Tokens', 'CSS Architecture', 'TypeScript', 'Design Systems'],
    designerDeveloperTags: ['React Components', 'Design Tokens', 'CSS Architecture', 'TypeScript', 'Design Systems'],
    year: '2016-2018',
    bgColor: 'from-blue-500/15 via-3% via-transparent via-97% to-indigo-600/12 dark:from-blue-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-blue-500/10',
    technicalHighlights: [
      'Built 50+ React components with TypeScript and Storybook',
      'Automated design token generation with Style Dictionary',
      'Implemented automated testing and visual regression testing'
    ]
  },
  {
    title: 'Betterview: Property Intelligence Platform',
    description: 'Designed an intuitive data visualization platform that processes complex property risk data.',
    designLeaderDescription: 'Led the design vision for an AI-powered property intelligence platform, collaborating with data scientists and product teams to transform complex risk data into actionable insights for insurance underwriters.',
    designerDeveloperDescription: 'Designed and prototyped an AI-powered data visualization platform with complex filtering, interactive maps, and real-time data processing, implemented with React and D3.js.',
    image: '/images/betterview-propertyintelligence2.png',
    link: '/projects/propertyintelligence',
    tags: ['Product Design', 'Data Visualization', 'AI/ML', 'Insurance Tech'],
    designLeaderTags: ['Product Strategy', 'User Research', 'Data Visualization', 'AI/ML Design', 'Stakeholder Collaboration'],
    designerDeveloperTags: ['React', 'D3.js', 'Data Visualization', 'API Integration', 'Interactive Maps'],
    year: '2021',
    bgColor: 'from-white to-white dark:from-white dark:to-white',
    designHighlights: [
      'Reduced claim processing time by 40% through intuitive design',
      'Improved underwriter decision-making accuracy with clear data presentation',
      'Designed AI-powered insights that users actually trust and use'
    ],
    technicalHighlights: [
      'Built interactive data visualizations with D3.js and React',
      'Implemented real-time data processing with WebSocket connections',
      'Created responsive design system for complex dashboard layouts'
    ]
  },
  {
    title: 'Designing a Customizable Interface for Betterview',
    description: 'Modular dashboard system empowering users to personalize their data visualization experience.',
    designLeaderDescription: 'Led the design strategy for a customizable dashboard system, conducting user research to understand how different user types interact with data and designing flexible components that adapt to varied workflows.',
    designerDeveloperDescription: 'Built a completely customizable dashboard system with drag-and-drop components, user-defined layouts, and persistent personalization using React and a custom component architecture.',
    image: '/images/betterview-customizableUI1.png',
    link: '/projects/customizableui',
    tags: ['Design Systems', 'User Personalization', 'Dashboard Design'],
    designLeaderTags: ['User Research', 'Personalization Strategy', 'Component Systems', 'User Experience', 'Design Flexibility'],
    designerDeveloperTags: ['React', 'Drag and Drop', 'Component Architecture', 'State Management', 'Responsive Design'],
    year: '2021',
    bgColor: 'from-white to-white dark:from-white dark:to-white',
    designHighlights: [
      'Designed flexible component system that adapts to user workflows',
      'Conducted user research to understand personalization needs',
      'Created intuitive drag-and-drop interface for complex data'
    ],
    technicalHighlights: [
      'Built drag-and-drop dashboard with React DnD',
      'Implemented user preference persistence with local storage',
      'Created modular component architecture for unlimited customization'
    ]
  },
  {
    title: 'TenSpot Workforce Engagement Platform',
    description: 'Comprehensive workforce engagement platform connecting teams through wellness, challenges, and community building.',
    designerDeveloperDescription: 'Designed and developed the complete marketing website and digital presence for TenSpot, creating conversion-focused landing pages and brand collateral that helped acquire enterprise clients and insurance partnerships.',
    image: '/images/tenspot-desk-purple-macbook-mockup.png',
    link: '/projects/tenspot',
    tags: ['Marketing Website', 'Brand Design', 'Landing Pages', 'Conversion Design'],
    designerDeveloperTags: ['WordPress', 'CSS/HTML', 'Marketing Design', 'Brand Implementation', 'Conversion Optimization'],
    year: '2020-2021',
    bgColor: 'from-purple-500/15 via-3% via-transparent via-97% to-violet-600/12 dark:from-purple-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-violet-500/10',
    designHighlights: [
      'Created compelling marketing narratives for complex platform capabilities',
      'Designed conversion-focused landing pages for enterprise clients',
      'Developed brand collateral that supported insurance partnerships'
    ],
    technicalHighlights: [
      'Built responsive marketing website with WordPress and custom CSS',
      'Implemented conversion optimization strategies for lead generation',
      'Created scalable design system for marketing materials'
    ]
  },

  {
    title: 'AnyPerk Brand Design & Development',
    description: 'Comprehensive iconography system, brand identity, and full-stack website development.',
    designLeaderDescription: 'Led the complete brand identity redesign for AnyPerk (now Fond), creating a cohesive visual system with 200+ custom icons that established the company\'s friendly, approachable personality across all touchpoints.',
    designerDeveloperDescription: 'Designed and developed AnyPerk\'s complete brand identity and WordPress website, creating 200+ custom icons, hand-coding the entire site, and implementing a scalable icon system used across web and mobile platforms.',
    image: '/images/ap_illustrations_perks.png',
    link: '/projects/anyperk',
    tags: ['Brand Design', 'Icon Design', 'Website Development'],
    designLeaderTags: ['Brand Strategy', 'Visual Identity', 'Icon Design', 'Design Leadership', 'Creative Direction'],
    designerDeveloperTags: ['WordPress Development', 'Custom Icons', 'SVG Optimization', 'CSS/HTML', 'Brand Implementation'],
    year: '2014-2015',
    bgColor: 'from-indigo-500/15 via-3% via-transparent via-97% to-purple-600/12 dark:from-indigo-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-purple-500/10',
    designHighlights: [
      'Created unified brand identity used across web, mobile, and marketing',
      'Designed 200+ custom icons that became integral to product experience',
      'Established visual language that conveyed approachable, professional personality'
    ],
    technicalHighlights: [
      'Hand-coded entire WordPress marketing website from scratch',
      'Created scalable SVG icon system with multiple format exports',
      'Implemented responsive design with custom CSS grid system'
    ]
  },
  {
    title: 'MakerSquare Logo Design & Branding',
    description: 'Comprehensive branding overhaul for a premier coding bootcamp, including logo design, marketing materials, and interior installations.',
    designerDeveloperDescription: 'Designed MakerSquare\'s complete brand identity including logo, style guide, marketing materials, and interior wall installations for multiple campus locations.',
    image: '/images/makeersquare-logo.png',
    link: '/projects/makersquare',
    tags: ['Logo Design', 'Brand Identity', 'Marketing Design', 'Interior Design'],
    designerDeveloperTags: ['Logo Design', 'Brand Guidelines', 'Print Design', 'Interior Installation', 'Marketing Collateral'],
    year: '2013-2014',
    bgColor: 'from-green-500/15 via-3% via-transparent via-97% to-emerald-600/12 dark:from-green-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-emerald-500/10',
    designHighlights: [
      'Created logo and brand identity for premier coding bootcamp',
      'Designed marketing materials for multiple campus locations',
      'Developed interior installations that reinforced brand identity'
    ],
    technicalHighlights: [
      'Designed scalable logo system for multiple applications',
      'Created comprehensive brand guidelines and style guide',
      'Implemented interior design elements across campus locations'
    ]
  },
  {
    title: 'ZeroCater Marketplace',
    description: 'Comprehensive vendor marketplace connecting restaurants, caterers, and office food programs.',
    designLeaderDescription: 'Led the product design for a complex two-sided marketplace, conducting extensive user research with both restaurants and corporate clients to design seamless onboarding and order management experiences.',
    designerDeveloperDescription: 'Designed and prototyped a complex marketplace platform with vendor onboarding, order management, and real-time tracking, implementing responsive interfaces and API integrations.',
    image: '/images/zerocater_marketplace.jpg',
    link: '/projects/marketplace',
    tags: ['Marketplace Design', 'UX Research', 'Order Management'],
    designLeaderTags: ['Product Strategy', 'User Research', 'Two-sided Marketplace', 'Stakeholder Management', 'Growth Design'],
    designerDeveloperTags: ['React', 'API Design', 'Database Schema', 'Real-time Updates', 'Responsive Design'],
    year: '2016-2018',
    bgColor: 'from-teal-500/15 via-3% via-transparent via-97% to-cyan-600/12 dark:from-teal-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-cyan-500/10',
    designHighlights: [
      'Designed user flows for complex two-sided marketplace',
      'Conducted user research with 50+ restaurants and corporate clients',
      'Created onboarding that increased vendor completion rate by 35%'
    ],
    technicalHighlights: [
      'Built complex state management for real-time order tracking',
      'Implemented vendor dashboard with React and Redux',
      'Created API endpoints for order management and notifications'
    ]
  },
  {
    title: 'ZeroCater Snacks & Kitchens',
    description: 'Operations and inventory dashboards powering office snacks and kitchens programs.',
    designerDeveloperDescription: 'Designed and implemented cross-platform dashboards for office snacks and kitchens programs, including inventory, vendor coordination, and customer feedback loops — built with reusable design-system components.',
    image: '/images/zerocater-snacks1.png',
    link: '/projects/snacks-and-kitchens',
    tags: ['Product Design', 'Operations', 'Dashboards', 'ZeroCater'],
    designerDeveloperTags: ['React', 'Design Systems', 'Dashboard UI', 'Data Visualization'],
    year: '2016-2018',
    bgColor: 'from-orange-500/15 via-3% via-transparent via-97% to-amber-600/12 dark:from-orange-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-amber-500/10',
    technicalHighlights: [
      'Reusable dashboard components aligned with company design system',
      'Responsive layouts for customer and admin roles',
      'Data-rich interfaces with clear hierarchy and visual balance'
    ]
  },
  {
    title: 'HackerDAO',
    description: 'Brand identity and platform design for Web3 developers to collaborate and build together.',
    designLeaderDescription: 'Created a complete brand identity for a Web3 developer platform, establishing visual language that appeals to technical users while maintaining approachability for broader collaboration.',
    designerDeveloperDescription: 'Designed and prototyped a Web3 developer platform with wallet integration, project collaboration tools, and decentralized governance features.',
    image: '/images/hackerdao-illustration-big.png',
    link: '/projects/hackerdao',
    tags: ['Brand Design', 'Web3', 'Platform Design'],
    designLeaderTags: ['Brand Strategy', 'Web3 Design', 'Community Building', 'Visual Identity', 'Illustration'],
    designerDeveloperTags: ['Web3 Integration', 'Wallet Connect', 'React', 'Blockchain APIs', 'DeFi Protocols'],
    year: '2021-2022',
    bgColor: 'from-purple-500/15 via-3% via-transparent via-97% to-violet-600/12 dark:from-purple-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-violet-500/10',
    designHighlights: [
      'Created brand identity that resonates with technical Web3 community',
      'Designed intuitive interfaces for complex blockchain interactions',
      'Established visual language for decentralized collaboration'
    ],
    technicalHighlights: [
      'Integrated Web3 wallet connections with React and ethers.js',
      'Built smart contract interaction interfaces',
      'Implemented decentralized identity and governance features'
    ]
  }
  ,
  {
    title: 'Thrive Global – Mental Health Platform',
    description: 'AI-powered mental health chatbot and wellness platform with empathetic conversational UI across iOS, Android, and Web.',
    designerDeveloperDescription: 'Designed and prototyped an AI-powered mental health chatbot and wellness platform with empathetic conversational UI, crisis-aware safety mechanisms, and accessibility-first mobile interfaces.',
    image: '/images/thrive-mobile-photo.png',
    imageFit: 'cover',
    imagePosition: 'top',
    link: '/projects/thrive',
    tags: ['Conversational UI', 'Mental Health UX', 'Motion Design', 'AI', 'Mobile Design'],
    designerDeveloperTags: ['Product Design', 'Conversational UX', 'Accessibility', 'Motion Graphics'],
    year: '2019-2020',
    bgColor: 'from-blue-500/15 via-3% via-transparent via-97% to-indigo-600/12 dark:from-blue-400/12 dark:via-3% dark:via-transparent dark:via-97% dark:to-indigo-500/10',
    technicalHighlights: [
      'Crisis-aware safety mechanisms and escalation pathways',
      'Optimized character motion graphics for performant mobile delivery',
      'Accessibility-first conversational flows and calming visual hierarchy'
    ]
  }
];

export const featuredProjects = projectsData.slice(0, 3);
export const allProjects = projectsData; 