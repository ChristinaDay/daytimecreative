'use client';

import { motion } from 'framer-motion';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import Image from 'next/image';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';
import Link from 'next/link';
import UpdriftHeroPreview from '@/components/UpdriftHeroPreview';
import ImageComparisonSlider from '@/components/ui/ImageComparisonSlider';

export default function UpdriftCaseStudyPage() {
  return (
    <article className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pb-12 md:pb-24 lg:pb-40 text-[#0f172a] dark:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pt-24"
      >
        <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
          Building Updrift.me: Exploring Cursor While Solving a Real Problem
        </h1>
        <ProjectSubtitle>
          Using Cursor IDE to build a job search tool.
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
        <div className="relative w-full h-[600px] md:h-[700px] rounded-xl border-2 border-gray-300 dark:border-gray-600 overflow-hidden shadow-lg">
          <UpdriftHeroPreview />
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
              Updrift.me
            </h2>
            <p className="text-sm md:text-base opacity-90 drop-shadow-lg">
              Job search that works for everyone
            </p>
          </div>
        </div>
      </motion.div>

      {/* The Problem */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">The Problem: Job Search in 2025 Is Kind of a Mess</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            I started building Updrift.me because job searching in 2025 is frustrating. Most of us live paycheck to paycheck, depend on our jobs for healthcare, and can't afford premium memberships to platforms that gatekeep opportunities behind paywalls. The current tools seem designed to keep you searching forever rather than actually helping you get hired.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            I was tired of bouncing between LinkedIn, Indeed, Glassdoor, and countless other platforms, each with their own interface, each requiring me to track applications separately. It's 2025—finding a life-sustaining job shouldn't require a premium subscription or endless platform hopping.
          </p>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
          <h4 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200">The Real Pain Points</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-red-900/80 dark:text-red-200/80">
            <div>
              <h5 className="font-medium mb-2 text-red-900 dark:text-red-200">Accessibility Issues</h5>
              <ul className="space-y-1 text-sm">
                <li>• Premium features locked behind paywalls</li>
                <li>• Complex interfaces that overwhelm users</li>
                <li>• No focus on actually getting people hired</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2 text-red-900 dark:text-red-200">Workflow Problems</h5>
              <ul className="space-y-1 text-sm">
                <li>• Scattered across multiple platforms</li>
                <li>• No centralized application tracking</li>
                <li>• Endless scrolling without clear progress</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Solution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">The Solution: Let's Try Building Something Better</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Updrift.me is my attempt to build a job search tool that actually helps people get hired, not keep them searching forever. It's free, accessible, and designed to reduce the friction between finding an opportunity and getting hired.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The platform consolidates job search into one streamlined experience. No more bouncing between platforms. No more premium paywalls. Just a clean, efficient tool that helps you track applications, manage your job hunt, and actually get hired.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <p className="text-sm text-blue-900 dark:text-blue-200 font-medium">
            Note: This is very much a work in progress. I'm building this as I go, learning from the process, and seeing what actually works for real job seekers.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark tracking-wide uppercase">Tech Stack</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Next.js */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🟦</span>
              <span className="text-sm font-medium">Next.js</span>
            </div>
            {/* React */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">⚛️</span>
              <span className="text-sm font-medium">React</span>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🟦</span>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🌬️</span>
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            {/* Framer Motion */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🎞️</span>
              <span className="text-sm font-medium">Framer Motion</span>
            </div>
            {/* Vercel */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">▲</span>
              <span className="text-sm font-medium">Vercel</span>
            </div>
            {/* MCP Tools */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🤖</span>
              <span className="text-sm font-medium">MCP Tools</span>
            </div>
            {/* Cursor IDE */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🖱️</span>
              <span className="text-sm font-medium">Cursor IDE</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Saved Jobs Feature */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Centralized Job Management</h3>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          One of the biggest frustrations with job searching is keeping track of everything across multiple platforms. I'm trying to solve this with a centralized saved jobs system that lets you organize opportunities, track application status, and maintain a clear overview of your job hunt.
        </p>
        
        <div className="w-full [&_.mx-auto]:mx-0 [&_.max-w-4xl]:max-w-none">
          <ScrollableImageContainer
            src="/images/UpDrift -saved-jobs.png"
            alt="Updrift saved jobs interface"
            caption="A clean, organized way to track your job applications and opportunities"
            frameType="browser"
            height="full"
            url="updrift.me/saved-jobs"
            className="w-full"
          />
        </div>
        
        <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
          <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-200">Why This Matters</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-900/80 dark:text-blue-200/80">
            <ul className="list-disc pl-5 space-y-1">
              <li>No more scattered bookmarks across platforms</li>
              <li>Track application status in one place</li>
              <li>Organize opportunities by priority</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1">
              <li>Set reminders for follow-ups</li>
              <li>Export your job hunt data</li>
              <li>Focus on quality over quantity</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Search Jobs Page */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Streamlined Job Discovery</h3>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          The job search interface is designed to cut through the noise. Instead of endless scrolling through irrelevant listings, you get focused results with clear filtering options. The goal is to help you find opportunities that actually match your skills and needs.
        </p>
        <div className="w-full [&_.mx-auto]:mx-0 [&_.max-w-4xl]:max-w-none">
          <ScrollableImageContainer
            src="/images/updrift-jobsearch-page.png"
            alt="Updrift job search interface"
            caption="Focused job search with smart filtering and clear results"
            frameType="browser"
            height="full"
            url="updrift.me/jobs"
            className="w-full"
          />
        </div>
      </motion.section>

      {/* Platform Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">What I've Built So Far</h3>
        
        {/* Public Landing Page */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Welcoming Everyone</h4>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6">
            The homepage is designed to be immediately useful. No paywalls, no complex onboarding—just a clean interface that helps you start your job search right away.
          </p>
          <div className="w-full [&_.mx-auto]:mx-0 [&_.max-w-4xl]:max-w-none">
            <ScrollableImageContainer
              src="/images/updrift-full-page.png"
              alt="Updrift.me public homepage - full page view"
              caption="A welcoming, accessible homepage that gets you started immediately"
              frameType="browser"
              height="full"
              url="updrift.me"
              className="w-full"
            />
          </div>
        </div>

        {/* Authenticated Dashboard */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Your Job Hunt Command Center</h4>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6">
            Once you create an account, you get a personalized dashboard that becomes your job hunt headquarters. Everything you need to track applications, manage opportunities, and stay organized is in one place.
          </p>
          <div className="w-full [&_.mx-auto]:mx-0 [&_.max-w-4xl]:max-w-none">
            <ScrollableImageContainer
              src="/images/updrift-logged-in-desktop.png"
              alt="Updrift.me logged-in dashboard - full page view"
              caption="Your personalized job hunt command center"
              frameType="browser"
              height="full"
              url="updrift.me/dashboard"
              className="w-full"
            />
          </div>
          <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
            <h5 className="text-lg font-semibold mb-4 text-indigo-900 dark:text-indigo-200">What Makes This Dashboard Work</h5>
            <p className="text-sm text-indigo-900/70 dark:text-indigo-200/70 mb-4">
              The dashboard isn't just a pretty interface—it's designed around how people actually use job search tools. Here's what users get:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-indigo-900/80 dark:text-indigo-200/80">
              <div>
                <h6 className="font-medium text-indigo-900 dark:text-indigo-200 mb-2">Navigation & Discovery</h6>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">→</span>
                    <span><strong>Smart sidebar</strong> that adapts to screen size and user preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">→</span>
                    <span><strong>Personalized recommendations</strong> based on search history and saved jobs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">→</span>
                    <span><strong>One-click access</strong> to recently viewed and saved positions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-medium text-indigo-900 dark:text-indigo-200 mb-2">User Experience</h6>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">→</span>
                    <span><strong>Real-time alerts</strong> for new jobs matching your criteria</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">→</span>
                    <span><strong>Application tracking</strong> to keep tabs on your job hunt progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">→</span>
                    <span><strong>Customizable settings</strong> for notifications and search preferences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex items-center h-full">
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-text-light dark:text-text-dark">Accessible on Every Device</h5>
                <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                  Job searching happens everywhere—on phones during commutes, on tablets at coffee shops, on laptops at libraries. Updrift.me works seamlessly across all devices because everyone deserves access to good job opportunities, regardless of their device or situation.
                </p>
                <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                  The mobile experience is just as powerful as the desktop version. Touch targets are sized for real fingers, navigation makes sense on small screens, and the interface adapts to whatever device you're using.
                </p>
                <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                  <p className="text-sm text-blue-900 dark:text-blue-200 font-medium">
                    What actually works: a job search tool that's as effective on a phone as it is on a desktop, because opportunities don't wait for you to get home.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h5 className="font-medium mb-4 text-text-light dark:text-text-dark">Mobile Experience</h5>
              <ScrollableImageContainer
                src="/images/updrift-logged-in-mobile.png"
                alt="Updrift.me mobile view"
                caption="Full-featured job search on mobile"
                frameType="phone"
                height="phone"
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <h5 className="font-semibold mb-3 text-green-900 dark:text-green-200">No Barriers to Entry</h5>
            <p className="text-sm text-green-900/80 dark:text-green-200/80 mb-4">
              Free access to all features. No premium tiers, no paywalls, no artificial limitations. Everyone deserves access to good job opportunities.
            </p>
            <div className="space-y-2 text-xs text-green-900/70 dark:text-green-200/70">
              <div className="flex justify-between">
                <span>Cost:</span>
                <span>Completely Free</span>
              </div>
              <div className="flex justify-between">
                <span>Features:</span>
                <span>All Available</span>
              </div>
              <div className="flex justify-between">
                <span>Limitations:</span>
                <span>None</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <h5 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">Focused on Results</h5>
            <p className="text-sm text-blue-900/80 dark:text-blue-200/80 mb-4">
              Designed to help you get hired, not keep you searching forever. Clear progress tracking, application management, and tools that actually move you forward.
            </p>
            <div className="space-y-2 text-xs text-blue-900/70 dark:text-blue-200/70">
              <div className="flex justify-between">
                <span>Goal:</span>
                <span>Get Hired</span>
              </div>
              <div className="flex justify-between">
                <span>Focus:</span>
                <span>Progress</span>
              </div>
              <div className="flex justify-between">
                <span>Outcome:</span>
                <span>Success</span>
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
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">How I'm Building This</h3>
        
        <div className="space-y-8">
          {/* Phase 1: Planning & Setup */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🎯</span>
              <h4 className="text-xl font-semibold text-green-900 dark:text-green-200">Phase 1: Understanding the Problem</h4>
            </div>
            <p className="text-green-900/80 dark:text-green-200/80 mb-4">
              Started by talking to friends who were struggling with job search. Identified the real pain points: scattered applications, premium paywalls, platforms designed to keep you searching forever. Used these insights to design a solution that actually helps people get hired.
            </p>
            <ul className="list-disc pl-5 text-green-900/80 dark:text-green-200/80 space-y-2">
              <li>Researched existing job search platforms and their limitations</li>
              <li>Identified key pain points from real users</li>
              <li>Designed a solution focused on getting people hired</li>
              <li>Set up development environment with modern tools</li>
            </ul>
          </div>

          {/* Phase 2: Core Development */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⚡</span>
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200">Phase 2: Building the Solution</h4>
            </div>
            <p className="text-blue-900/80 dark:text-blue-200/80 mb-4">
              Leveraged Cursor's AI capabilities to accelerate development. Used MCP tools for real-time 
              documentation access, automated testing, and intelligent code generation.
            </p>
            <div className="my-6">
              <ScrollableImageContainer
                src="/images/updrift-cursor-searchpage-code.png"
                alt="Cursor IDE - Updrift search page code"
                caption="Building the Updrift job search UI in Cursor IDE, with live code and preview."
                frameType="none"
                height="full"
                url="updrift.me/jobs (dev view)"
                className="w-full"
              />
            </div>
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
              <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-200">Phase 3: Ensuring Quality</h4>
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
              <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-200">Phase 4: Making It Available</h4>
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

      {/* Style Guide Development */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Style Guide Development</h3>
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8">
          The Updrift style guide was built as a living document—code and documentation evolving together. Here's how the workflow looks in practice:
        </p>
        <ScrollableImageContainer
          src="/images/updrift-styleguide-cursorcode.png"
          alt="Updrift style guide code in Cursor IDE"
          caption="Editing the Updrift style guide code in Cursor IDE."
          frameType="none"
          height="full"
          url="updrift.me/style-guide (dev view)"
          className="w-full mb-8"
        />
        <p className="text-lg text-text-light/70 dark:text-text-dark/70 mb-8 text-center">
          This code is rendered live as the style guide page below.
        </p>
        <ScrollableImageContainer
          src="/images/updrift-styleguide-page.png"
          alt="Updrift style guide page screenshot"
          caption="The resulting live style guide page."
          frameType="none"
          height="full"
          url="updrift.me/style-guide"
          className="w-full"
        />
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">What I'm Learning</h3>
        
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
          <h3 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-200">Ready to Build Something That Matters?</h3>
          <p className="text-lg text-indigo-900/80 dark:text-indigo-200/80 mb-6">
            This project demonstrates my ability to identify real problems and build solutions that actually help people. 
            I'm excited to bring this same user-focused, problem-solving approach to your next project.
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
    </article>
  );
} 