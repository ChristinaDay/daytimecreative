export default function LearningTimeline() {
  const timelineItems = [
    {
      title: "Framework Familiarity",
      description: "Relearning Next.js and React patterns after the break. Everything felt familiar but rusty.",
      status: "completed"
    },
    {
      title: "Project Structure",
      description: "Setting up the Next.js app router, organizing components, and establishing the development workflow.",
      status: "completed"
    },
    {
      title: "Design System Foundation",
      description: "Creating the color palette, typography scale, and basic component patterns.",
      status: "completed"
    },
    {
      title: "Component Library",
      description: "Building reusable components like buttons, cards, and layout elements with proper TypeScript types.",
      status: "completed"
    },
    {
      title: "Navigation & Layout",
      description: "Implementing the main layout, navigation system, and responsive design patterns.",
      status: "completed"
    },
    {
      title: "Content Planning",
      description: "Outlining case studies, deciding on the narrative structure, and planning the content strategy.",
      status: "completed"
    },
    {
      title: "Case Study Writing",
      description: "Writing the actual case studies and documenting the design and development process.",
      status: "completed"
    },
    {
      title: "Interactive Elements",
      description: "Adding animations, demos, and interactive components to showcase technical skills.",
      status: "completed"
    },
    {
      title: "Image Optimization",
      description: "Optimizing images, implementing lazy loading, and ensuring fast loading times.",
      status: "completed"
    },
    {
      title: "Performance Tuning",
      description: "Fixing edge cases, optimizing bundle size, and ensuring smooth user experience.",
      status: "current"
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      <div className="flex overflow-x-auto pb-8 gap-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-64">
            {/* Timeline dot */}
            <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
              item.status === 'current' 
                ? 'bg-blue-500 border-blue-500' 
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}></div>
            
            {/* Content */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                {item.status === 'current' && (
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
} 