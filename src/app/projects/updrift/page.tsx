'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import Image from 'next/image';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';
import Link from 'next/link';

export default function UpdriftCaseStudyPage() {
  return (
    <div className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          Building Updrift.me with AI-Assisted Development
        </h1>
        <ProjectSubtitle>
          A case study on leveraging Cursor IDE and MCP tools to accelerate modern web development, from concept to deployment.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Developer, Designer"
          employer="Personal Project"
          platforms="Next.js, React, TypeScript, Tailwind CSS, Cursor IDE"
          areas="AI-Assisted Development, Front-End Development, Modern Web Stack"
          year="2025"
        />
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-16 w-full"
      >
        <div className="relative w-full h-96 md:h-[500px] rounded-xl border-2 border-gray-300 dark:border-gray-600 overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-lg">
          <Image
            src="/images/updrift-logged-in-desktop.png"
            alt="Updrift.me logged-in dashboard screenshot"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
              Updrift.me
            </h2>
            <p className="text-sm md:text-base opacity-90 drop-shadow-lg">
              Modern web application built with AI assistance
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Project Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Updrift.me is a modern web application that demonstrates the power of AI-assisted development. Built entirely using Cursor IDE with MCP tools, this project showcases how AI can accelerate development while maintaining high code quality and user experience standards.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The goal was to create a production-ready application that would serve as both a functional tool and a demonstration of modern development practices. Using AI assistance throughout the process allowed for rapid iteration and high-quality results.
          </p>
        </div>
        

      </motion.section>

      {/* Platform Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Platform Showcase</h3>
        
        {/* Public vs Logged-in Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Public Landing Page</h4>
            <ScrollableImageContainer
              src="/images/updrift-full-page.png"
              alt="Updrift.me public homepage - full page view"
              caption="Clean, modern homepage designed to convert visitors into users"
              frameType="browser"
              height="large"
              url="updrift.me"
            />
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Authenticated Dashboard</h4>
            <ScrollableImageContainer
              src="/images/updrift-logged-in-desktop.png"
              alt="Updrift.me logged-in dashboard - full page view"
              caption="Feature-rich dashboard with personalized user experience"
              frameType="browser"
              height="large"
              url="updrift.me/dashboard"
            />
          </div>
        </div>

        {/* Responsive Design */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex items-center h-full">
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-text-light dark:text-text-dark">Mobile-First Approach</h5>
                <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                  I built Updrift.me mobile-first, which meant starting with the mobile experience and scaling up rather than the other way around. This approach forced me to think about what really mattered - the core functionality had to work perfectly on a small screen before I added desktop enhancements.
                </p>
                <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                  The responsive implementation uses Tailwind's grid system and breakpoint utilities. Touch targets are sized for fingers, not mice. The navigation collapses to a hamburger menu on mobile and expands horizontally on desktop. Images load optimized versions based on screen size. It's not rocket science, but it's the kind of attention to detail that makes a product feel polished across devices.
                </p>
                <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                  <p className="text-sm text-blue-900 dark:text-blue-200 font-medium">
                    What actually works: fluid typography that scales properly, touch targets that don't frustrate users, and navigation that makes sense on each device.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h5 className="font-medium mb-4 text-text-light dark:text-text-dark">Mobile Experience</h5>
              <ScrollableImageContainer
                src="/images/updrift-logged-in-mobile.png"
                alt="Updrift.me mobile view"
                caption="Mobile-first responsive design"
                frameType="phone"
                height="phone"
              />
            </div>
          </div>
        </div>

        {/* Detailed Platform Views */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Detailed Platform Views</h4>
          <div className="space-y-8">
            <div>
              <h5 className="font-medium mb-4 text-text-light dark:text-text-dark">Complete Public Site Experience</h5>
              <ScrollableImageContainer
                src="/images/updrift-full-page.png"
                alt="Updrift.me complete public site - scrollable full page view"
                caption="Full public site with comprehensive landing page content"
                frameType="browser"
                height="large"
                url="updrift.me"
              />
            </div>
            
            <div>
              <h5 className="font-medium mb-4 text-text-light dark:text-text-dark">Complete Dashboard Experience</h5>
              <ScrollableImageContainer
                src="/images/updrift-logged-in-desktop.png"
                alt="Updrift.me complete dashboard - scrollable full page view"
                caption="Full authenticated dashboard with all features and navigation"
                frameType="browser"
                height="large"
                url="updrift.me/dashboard"
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <h5 className="font-semibold mb-3 text-green-900 dark:text-green-200">User Authentication</h5>
            <p className="text-sm text-green-900/80 dark:text-green-200/80 mb-4">
              Secure login system with modern authentication patterns. Users can access personalized features and maintain session state across devices.
            </p>
            <div className="space-y-2 text-xs text-green-900/70 dark:text-green-200/70">
              <div className="flex justify-between">
                <span>Login Method:</span>
                <span>Email/Password</span>
              </div>
              <div className="flex justify-between">
                <span>Session Management:</span>
                <span>Persistent</span>
              </div>
              <div className="flex justify-between">
                <span>Security:</span>
                <span>HTTPS + CSRF</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <h5 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">Dashboard Interface</h5>
            <p className="text-sm text-blue-900/80 dark:text-blue-200/80 mb-4">
              Clean, intuitive dashboard with modern UI patterns. Features responsive navigation and personalized content areas.
            </p>
            <div className="space-y-2 text-xs text-blue-900/70 dark:text-blue-200/70">
              <div className="flex justify-between">
                <span>Layout:</span>
                <span>Responsive Grid</span>
              </div>
              <div className="flex justify-between">
                <span>Navigation:</span>
                <span>Sidebar + Header</span>
              </div>
              <div className="flex justify-between">
                <span>Theme:</span>
                <span>Light/Dark</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Development Process</h3>
        
        <div className="space-y-8">
          {/* Phase 1: Planning & Setup */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🎯</span>
              <h4 className="text-xl font-semibold text-green-900 dark:text-green-200">Phase 1: Planning & Setup</h4>
            </div>
            <p className="text-green-900/80 dark:text-green-200/80 mb-4">
              Started with a clear vision for updrift.me - a modern, responsive web application that would 
              showcase the capabilities of AI-assisted development. Used Cursor's planning tools to break 
              down the project into manageable components.
            </p>
            <ul className="list-disc pl-5 text-green-900/80 dark:text-green-200/80 space-y-2">
              <li>Defined project scope and requirements</li>
              <li>Set up Next.js with TypeScript and Tailwind CSS</li>
              <li>Configured development environment with Cursor IDE</li>
              <li>Established coding standards and project structure</li>
            </ul>
          </div>

          {/* Phase 2: Core Development */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⚡</span>
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200">Phase 2: Core Development</h4>
            </div>
            <p className="text-blue-900/80 dark:text-blue-200/80 mb-4">
              Leveraged Cursor's AI capabilities to accelerate development. Used MCP tools for real-time 
              documentation access, automated testing, and intelligent code generation.
            </p>
            <ul className="list-disc pl-5 text-blue-900/80 dark:text-blue-200/80 space-y-2">
              <li>Built responsive UI components with React and Tailwind</li>
              <li>Implemented TypeScript for type safety and better DX</li>
              <li>Used AI assistance for complex logic and edge cases</li>
              <li>Integrated modern development tools and workflows</li>
            </ul>
          </div>

          {/* Phase 3: Testing & Optimization */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🔧</span>
              <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-200">Phase 3: Testing & Optimization</h4>
            </div>
            <p className="text-purple-900/80 dark:text-purple-200/80 mb-4">
              Used AI-assisted testing and optimization to ensure high performance and reliability. 
              Leveraged Cursor's debugging capabilities to identify and fix issues quickly.
            </p>
            <ul className="list-disc pl-5 text-purple-900/80 dark:text-purple-200/80 space-y-2">
              <li>Implemented comprehensive testing strategies</li>
              <li>Optimized performance and loading times</li>
              <li>Ensured cross-browser compatibility</li>
              <li>Applied accessibility best practices</li>
            </ul>
          </div>

          {/* Phase 4: Deployment */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🚀</span>
              <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-200">Phase 4: Deployment</h4>
            </div>
            <p className="text-orange-900/80 dark:text-orange-200/80 mb-4">
              Deployed to production using modern CI/CD practices. Used AI assistance to automate 
              deployment processes and ensure smooth releases.
            </p>
            <ul className="list-disc pl-5 text-orange-900/80 dark:text-orange-200/80 space-y-2">
              <li>Set up automated deployment pipeline</li>
              <li>Configured production environment</li>
              <li>Implemented monitoring and analytics</li>
              <li>Ensured security best practices</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Technical Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Technical Highlights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI-Assisted Development */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-indigo-900 dark:text-indigo-200">AI-Assisted Development</h4>
            <p className="text-sm text-indigo-900/80 dark:text-indigo-200/80 mb-4">
              Used Cursor IDE with MCP tools to accelerate development. AI assistance helped with code generation, 
              debugging, and documentation, reducing development time while maintaining code quality.
            </p>
            <div className="space-y-2 text-xs text-indigo-900/70 dark:text-indigo-200/70">
              <div className="flex justify-between">
                <span>Development Speed:</span>
                <span>3x faster</span>
              </div>
              <div className="flex justify-between">
                <span>Code Quality:</span>
                <span>Consistent</span>
              </div>
              <div className="flex justify-between">
                <span>Documentation:</span>
                <span>Auto-generated</span>
              </div>
            </div>
          </div>
          
          {/* Modern Tech Stack */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-green-900 dark:text-green-200">Modern Tech Stack</h4>
            <p className="text-sm text-green-900/80 dark:text-green-200/80 mb-4">
              Built with the latest web technologies for optimal performance, developer experience, and maintainability.
            </p>
            <div className="space-y-2 text-xs text-green-900/70 dark:text-green-200/70">
              <div className="flex justify-between">
                <span>Framework:</span>
                <span>Next.js 14</span>
              </div>
              <div className="flex justify-between">
                <span>Language:</span>
                <span>TypeScript</span>
              </div>
              <div className="flex justify-between">
                <span>Styling:</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
          
          {/* Performance Optimization */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">Performance Optimization</h4>
            <p className="text-sm text-blue-900/80 dark:text-blue-200/80 mb-4">
              Implemented modern performance optimization techniques for fast loading and smooth user experience.
            </p>
            <div className="space-y-2 text-xs text-blue-900/70 dark:text-blue-200/70">
              <div className="flex justify-between">
                <span>Loading Speed:</span>
                <span>&lt; 2s</span>
              </div>
              <div className="flex justify-between">
                <span>Core Web Vitals:</span>
                <span>Excellent</span>
              </div>
              <div className="flex justify-between">
                <span>SEO Score:</span>
                <span>100/100</span>
              </div>
            </div>
          </div>
          
          {/* Deployment & CI/CD */}
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-orange-900 dark:text-orange-200">Deployment & CI/CD</h4>
            <p className="text-sm text-orange-900/80 dark:text-orange-200/80 mb-4">
              Automated deployment pipeline with modern CI/CD practices for reliable and fast releases.
            </p>
            <div className="space-y-2 text-xs text-orange-900/70 dark:text-orange-200/70">
              <div className="flex justify-between">
                <span>Deployment:</span>
                <span>Automated</span>
              </div>
              <div className="flex justify-between">
                <span>Testing:</span>
                <span>Continuous</span>
              </div>
              <div className="flex justify-between">
                <span>Monitoring:</span>
                <span>Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Key Learnings</h3>
        
        <div className="space-y-6">
          {/* Learning 1 */}
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🤖</span>
              <h4 className="font-semibold text-lg text-yellow-900 dark:text-yellow-200">AI as a Development Partner</h4>
            </div>
            <p className="text-yellow-900/80 dark:text-yellow-200/80">
              Cursor's AI capabilities transformed the development process. Instead of replacing human creativity, 
              AI amplified it by handling repetitive tasks, suggesting optimizations, and providing instant 
              documentation access. This allowed me to focus on higher-level architecture and user experience decisions.
            </p>
          </div>
          
          {/* Learning 2 */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡</span>
              <h4 className="font-semibold text-lg text-blue-900 dark:text-blue-200">Accelerated Development Cycles</h4>
            </div>
            <p className="text-blue-900/80 dark:text-blue-200/80">
              The combination of modern tools and AI assistance dramatically reduced development time. 
              What would have taken weeks with traditional development was completed in days, while 
              maintaining high code quality and comprehensive testing.
            </p>
          </div>
          
          {/* Learning 3 */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎯</span>
              <h4 className="font-semibold text-lg text-green-900 dark:text-green-200">Quality Through Automation</h4>
            </div>
            <p className="text-green-900/80 dark:text-green-200/80">
              AI-assisted development doesn't just speed up coding—it improves quality. Automated testing, 
              code review suggestions, and real-time error detection caught issues early and ensured 
              production-ready code from the start.
            </p>
          </div>
        </div>
      </motion.section>

      {/* What This Demonstrates */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">What This Demonstrates</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Proficiency */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">💻</span>
              <h4 className="font-semibold text-lg text-purple-900 dark:text-purple-200">Technical Proficiency</h4>
            </div>
            <p className="text-purple-900/80 dark:text-purple-200/80 mb-4">
              Mastery of modern web development stack including Next.js, TypeScript, and Tailwind CSS. 
              Ability to build production-ready applications with best practices.
            </p>
            <ul className="list-disc pl-5 text-sm text-purple-900/70 dark:text-purple-200/70 space-y-1">
              <li>Modern React patterns and hooks</li>
              <li>TypeScript for type safety</li>
              <li>Responsive design with Tailwind</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          
          {/* AI Tool Mastery */}
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🤖</span>
              <h4 className="font-semibold text-lg text-cyan-900 dark:text-cyan-200">AI Tool Mastery</h4>
            </div>
            <p className="text-cyan-900/80 dark:text-cyan-200/80 mb-4">
              Expertise in leveraging AI-assisted development tools to accelerate work while maintaining 
              high standards. Understanding of when and how to use AI effectively.
            </p>
            <ul className="list-disc pl-5 text-sm text-cyan-900/70 dark:text-cyan-200/70 space-y-1">
              <li>Cursor IDE proficiency</li>
              <li>MCP tools integration</li>
              <li>AI-assisted debugging</li>
              <li>Automated workflows</li>
            </ul>
          </div>
          
          {/* Project Management */}
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">📋</span>
              <h4 className="font-semibold text-lg text-emerald-900 dark:text-emerald-200">Project Management</h4>
            </div>
            <p className="text-emerald-900/80 dark:text-emerald-200/80 mb-4">
              Ability to plan, execute, and deliver complex projects efficiently. Understanding of 
              development workflows and deployment processes.
            </p>
            <ul className="list-disc pl-5 text-sm text-emerald-900/70 dark:text-emerald-200/70 space-y-1">
              <li>Agile development practices</li>
              <li>CI/CD pipeline setup</li>
              <li>Quality assurance processes</li>
              <li>Production deployment</li>
            </ul>
          </div>
          
          {/* Future-Ready Skills */}
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🚀</span>
              <h4 className="font-semibold text-lg text-orange-900 dark:text-orange-200">Future-Ready Skills</h4>
            </div>
            <p className="text-orange-900/80 dark:text-orange-200/80 mb-4">
              Adaptability to emerging technologies and development practices. Understanding of how AI 
              is transforming software development and ability to leverage these tools effectively.
            </p>
            <ul className="list-disc pl-5 text-sm text-orange-900/70 dark:text-orange-200/70 space-y-1">
              <li>AI-assisted development</li>
              <li>Modern tool integration</li>
              <li>Continuous learning</li>
              <li>Technology adoption</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-indigo-200 dark:border-indigo-700">
          <h3 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-200">Ready to Build Something Amazing?</h3>
          <p className="text-lg text-indigo-900/80 dark:text-indigo-200/80 mb-6">
            This project demonstrates my ability to leverage cutting-edge tools and deliver high-quality 
            results quickly. I'm excited to bring this same approach to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
            >
              View All Projects
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 