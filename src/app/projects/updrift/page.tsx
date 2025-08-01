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
          UpDrift: A Cosmic Design System Case Study
        </h1>
        <ProjectSubtitle>
          Building a next-generation job search platform with mathematical precision, Figma integration, and cutting-edge MCP development workflow.
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Lead Designer & Full-Stack Developer"
          employer="Personal Project"
          platforms="Next.js, TypeScript, Figma, Cursor IDE, MCP Tools"
          areas="Design Systems, Mathematical Animation, AI-Assisted Development"
          year="2024-2025"
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
              UpDrift.me
            </h2>
            <p className="text-sm md:text-base opacity-90 drop-shadow-lg">
              Next-generation job search with cosmic design system
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mb-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            UpDrift represents a complete reimagining of the job search experience, combining mathematical precision in design with cutting-edge development tools. Over 6 months, I built a platform that demonstrates how modern design systems, AI-assisted development, and innovative visual aesthetics can create truly differentiated user experiences.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            This project showcases the integration of Figma design tokens with a mathematical animation system, all built using Cursor IDE with MCP tools for an accelerated development workflow. The result is a job platform that stands out in a crowded market through both technical innovation and memorable user experience.
          </p>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">55+</div>
            <div className="text-sm text-blue-900/80 dark:text-blue-200/80">Git Commits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
            <div className="text-sm text-purple-900/80 dark:text-purple-200/80">Theme Variations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">60fps</div>
            <div className="text-sm text-green-900/80 dark:text-green-200/80">Animation Performance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">6</div>
            <div className="text-sm text-orange-900/80 dark:text-orange-200/80">Months Development</div>
          </div>
        </div>
      </motion.section>

      {/* Challenge & Opportunity */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Challenge & Opportunity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The job search market is oversaturated with generic, utilitarian platforms that lack personality and memorable experiences. All platforms look identical with boring, corporate aesthetics that don't inspire users or encourage exploration.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The opportunity was to create a job search platform that stands out through unique visual identity, premium user experience, and technical innovation—something that makes job searching feel aspirational rather than tedious.
          </p>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-3 text-red-900 dark:text-red-200">Key Problems Identified</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc pl-5 text-red-900/80 dark:text-red-200/80 space-y-2">
              <li><strong>Visual Monotony:</strong> All platforms look identical with corporate aesthetics</li>
              <li><strong>Poor Engagement:</strong> Generic interfaces don't inspire exploration</li>
              <li><strong>Limited Differentiation:</strong> No competitive advantages in crowded market</li>
            </ul>
            <ul className="list-disc pl-5 text-red-900/80 dark:text-red-200/80 space-y-2">
              <li><strong>Mobile Experience:</strong> Most platforms prioritize desktop</li>
              <li><strong>Platform Fragmentation:</strong> Users need multiple sites</li>
              <li><strong>Poor Organization:</strong> No unified tracking system</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design Strategy & Cosmic System */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design Strategy: Mathematical Precision Meets Cosmic Innovation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Instead of following generic design patterns, I developed a unique cosmic aesthetic based on mathematical precision. The visual system uses sine wave calculations for organic animations, space-inspired elements that create emotional connection, and technical excellence that signals platform quality.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The design system architecture supports 15+ theme variations while maintaining brand consistency, with a component system that scales from mobile to desktop and 60fps animations across all devices through performance-first implementation.
          </p>
        </div>

        {/* Cosmic Elements Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <div className="text-3xl mb-3">✨</div>
            <h4 className="font-semibold mb-2">Starfield Background</h4>
            <p className="text-sm text-blue-900/80 dark:text-blue-200/80 mb-3">
              3 parallax layers moving at different speeds (60s, 90s, 120s) with 90 total particles
            </p>
            <ul className="list-disc pl-4 text-xs text-blue-900/70 dark:text-blue-200/70 space-y-1">
              <li>Size/opacity variations for depth</li>
              <li>Continuous horizontal scroll</li>
              <li>Infinite space illusion</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="text-3xl mb-3">🌊</div>
            <h4 className="font-semibold mb-2">Cosmic Rivers</h4>
            <p className="text-sm text-purple-900/80 dark:text-purple-200/80 mb-3">
              Real-time sine wave calculations for organic water-like flow
            </p>
            <ul className="list-disc pl-4 text-xs text-purple-900/70 dark:text-purple-200/70 space-y-1">
              <li>Dual wave system (10px + 7px amplitude)</li>
              <li>Mathematical precision</li>
              <li>Background depth layers</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold mb-2">Interactive Particles</h4>
            <p className="text-sm text-green-900/80 dark:text-green-200/80 mb-3">
              60 particles (30 on mobile) with physics-based movement
            </p>
            <ul className="list-disc pl-4 text-xs text-green-900/70 dark:text-green-200/70 space-y-1">
              <li>Collision detection</li>
              <li>River boundary constraints</li>
              <li>Twinkling opacity effects</li>
            </ul>
          </div>
        </div>

        {/* Mathematical Implementation */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-xl my-8">
          <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-200">Technical Innovation: Wave Animation System</h4>
          <p className="text-gray-900/80 dark:text-gray-200/80 mb-4">
            The cosmic rivers use real-time mathematical calculations to create infinitely variable, organic motion that never repeats.
          </p>
          <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Wave generation with mathematical precision
const generateWavePoints = (amplitude, frequency, offset, phase, yBase) => {
  const points = []
  for (let x = 0; x <= width; x += width / 200) {
    const normalizedX = x / width
    const y = yBase + amplitude * Math.sin(frequency * normalizedX * Math.PI * 2 + time * phase + offset)
    points.push([x, y])
  }
  return points
}`}
            </pre>
          </div>
        </div>
      </motion.section>

      {/* Figma Design System Integration */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Figma Design System Integration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            To bridge design and development workflows while preserving the unique cosmic elements, I created a comprehensive Figma design system with design tokens that enhance the existing CSS system. This hybrid approach maintains the mathematical precision of the animations while enabling rapid design iteration.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The Figma integration includes 4+ major theme variations (Dawn, Cyber, Forest, Electric) with complete token sets, cosmic element documentation, and technical specifications that developers can implement directly from the design system.
          </p>
        </div>

        {/* Figma Embed */}
        <div className="w-full mb-8">
          <div className="relative w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 overflow-hidden shadow-lg">
            <iframe 
              style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
              width="100%" 
              height="450" 
              src="https://embed.figma.com/design/Y26bgihZLo7yteiqqYk9em/UpDrift-Design-System?node-id=27-3923&embed-host=share" 
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
            Interactive Figma design system showing theme variations, cosmic elements, and component specifications
          </p>
        </div>

        {/* Design Token Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl">
            <h4 className="font-semibold mb-3">Multi-Theme Token System</h4>
            <p className="text-indigo-900/80 dark:text-indigo-200/80 text-sm mb-3">
              HSL-based color system enables mathematical color manipulation across 15+ theme variations.
            </p>
            <ul className="list-disc pl-5 text-indigo-900/80 dark:text-indigo-200/80 text-sm space-y-1">
              <li><strong>Dawn Theme:</strong> Warm sunrise with coral tones</li>
              <li><strong>Cyber Theme:</strong> Dark cyberpunk with electric pink</li>
              <li><strong>Forest Theme:</strong> Natural woodland greens</li>
              <li><strong>Electric Theme:</strong> High-energy yellow and purple</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <h4 className="font-semibold mb-3">Cosmic Element Documentation</h4>
            <p className="text-emerald-900/80 dark:text-emerald-200/80 text-sm mb-3">
              Complex animations documented with technical specifications and implementation notes.
            </p>
            <ul className="list-disc pl-5 text-emerald-900/80 dark:text-emerald-200/80 text-sm space-y-1">
              <li><strong>Static Representation:</strong> Key animation frames</li>
              <li><strong>Technical Specs:</strong> Mathematical parameters</li>
              <li><strong>Implementation Notes:</strong> Code references</li>
              <li><strong>Theme Variations:</strong> Cross-theme compatibility</li>
            </ul>
          </div>
        </div>

        {/* Workflow Integration */}
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
          <h4 className="font-semibold text-lg mb-3 text-yellow-900 dark:text-yellow-200">Design-Development Workflow</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <strong>Figma Design</strong>
              <p className="text-yellow-900/80 dark:text-yellow-200/80">Create components with design tokens</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📤</div>
              <strong>Token Export</strong>
              <p className="text-yellow-900/80 dark:text-yellow-200/80">Automated JSON export from Figma</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔗</div>
              <strong>CSS Integration</strong>
              <p className="text-yellow-900/80 dark:text-yellow-200/80">Tokens map to existing HSL system</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✅</div>
              <strong>Validation</strong>
              <p className="text-yellow-900/80 dark:text-yellow-200/80">Ensure cosmic elements remain functional</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* MCP Development Workflow */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Cutting-Edge Development with MCP Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            UpDrift was built using Model Context Protocol (MCP) tools that represent the future of AI-assisted development. This workflow enabled rapid iteration, sophisticated problem-solving, and a development experience that feels like pair programming with an expert.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The MCP workflow provided real-time documentation access, automated testing capabilities, and intelligent code generation that accelerated development by 3x while maintaining high code quality and architectural integrity.
          </p>
        </div>

        {/* MCP Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="font-semibold mb-2">Context7</h4>
            <p className="text-sm text-blue-900/80 dark:text-blue-200/80">
              Real-time documentation access for libraries and frameworks
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="font-semibold mb-2">Puppeteer</h4>
            <p className="text-sm text-green-900/80 dark:text-green-200/80">
              Automated browser testing and visual validation
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="font-semibold mb-2">Sequential Thinking</h4>
            <p className="text-sm text-purple-900/80 dark:text-purple-200/80">
              Complex problem breakdown and solution planning
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold mb-2">File Operations</h4>
            <p className="text-sm text-orange-900/80 dark:text-orange-200/80">
              Intelligent code editing and refactoring
            </p>
          </div>
        </div>

        {/* Development Benefits */}
        <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl">
          <h4 className="font-semibold text-lg mb-4 text-emerald-900 dark:text-emerald-200">Development Benefits Achieved</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-emerald-900/80 dark:text-emerald-200/80">
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                <span><strong>Rapid Prototyping:</strong> Ideas to working code in minutes</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                <span><strong>Intelligent Debugging:</strong> Complex issues solved systematically</span>
              </li>
            </ul>
            <ul className="space-y-2 text-emerald-900/80 dark:text-emerald-200/80">
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                <span><strong>Documentation Integration:</strong> Always up-to-date with latest APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                <span><strong>Visual Validation:</strong> Automated testing of complex animations</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Platform Features & User Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Platform Features & User Experience</h3>
        
        {/* Public Landing Page */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Cosmic Homepage Experience</h4>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6">
            The homepage demonstrates the full cosmic design system in action—mathematical animations, multi-theme support, and responsive design that works beautifully across all devices. No paywalls or complex onboarding, just an immediately useful and memorable experience.
          </p>
          <div className="w-full [&_.mx-auto]:mx-0 [&_.max-w-4xl]:max-w-none">
            <ScrollableImageContainer
              src="/images/updrift-full-page.png"
              alt="UpDrift.me public homepage showcasing cosmic design system"
              caption="Homepage featuring mathematical wave animations, particle systems, and glassmorphic UI elements"
              frameType="browser"
              height="full"
              url="updrift.me"
              className="w-full"
            />
          </div>
        </div>

        {/* Job Management System */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Centralized Job Management</h4>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6">
            The job tracking system solves the fragmentation problem by providing a unified interface for managing opportunities across multiple platforms. Users can track application status, add notes, and maintain a clear overview of their job search progress.
          </p>
          <div className="w-full [&_.mx-auto]:mx-0 [&_.max-w-4xl]:max-w-none">
            <ScrollableImageContainer
              src="/images/UpDrift -saved-jobs.png"
              alt="UpDrift saved jobs interface with status tracking"
              caption="Clean, organized job tracking with status indicators and application management"
              frameType="browser"
              height="full"
              url="updrift.me/saved-jobs"
              className="w-full"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl">
            <h4 className="font-semibold mb-3">Application Tracking</h4>
            <p className="text-indigo-900/80 dark:text-indigo-200/80 text-sm mb-3">
              Track progress through the hiring process with visual status updates and timeline tracking.
            </p>
            <ul className="list-disc pl-5 text-indigo-900/80 dark:text-indigo-200/80 text-sm space-y-1">
              <li>Status progression: Viewed → Applied → Interviewing → Hired/Rejected</li>
              <li>Visual indicators and color coding</li>
              <li>Notes and reminders system</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <h4 className="font-semibold mb-3">API Aggregation</h4>
            <p className="text-emerald-900/80 dark:text-emerald-200/80 text-sm mb-3">
              Unified search across multiple job APIs with intelligent deduplication and result optimization.
            </p>
            <ul className="list-disc pl-5 text-emerald-900/80 dark:text-emerald-200/80 text-sm space-y-1">
              <li>Adzuna and JSearch API integration</li>
              <li>Smart result aggregation and filtering</li>
              <li>Quota tracking and usage optimization</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Development Journey & Key Insights */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Development Journey & Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The 6-month development journey revealed crucial insights about modern web development, user experience design, and the power of AI-assisted workflows. From initial API integration challenges to sophisticated UX research on button language, every problem became a learning opportunity.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            Key discoveries included the importance of honest button language ("View Job" vs "Apply"), the need for mobile-first cosmic optimizations, and the value of systematic documentation for complex animation systems. These insights shaped both the technical architecture and user experience design.
          </p>
        </div>

        {/* Key Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="font-semibold mb-2">UX Research Impact</h4>
            <p className="text-sm text-blue-900/80 dark:text-blue-200/80 mb-3">
              Button language research across 50+ job platforms revealed user behavior patterns
            </p>
            <ul className="list-disc pl-4 text-xs text-blue-900/70 dark:text-blue-200/70 space-y-1">
              <li>"Apply" vs "View Job" user expectations</li>
              <li>Industry pattern analysis</li>
              <li>Honest language reduces hesitation</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-semibold mb-2">Mobile-First Optimization</h4>
            <p className="text-sm text-green-900/80 dark:text-green-200/80 mb-3">
              Cosmic elements required careful optimization for mobile performance
            </p>
            <ul className="list-disc pl-4 text-xs text-green-900/70 dark:text-green-200/70 space-y-1">
              <li>Particle count reduction (60 → 30)</li>
              <li>Battery efficiency considerations</li>
              <li>Touch-optimized interactions</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold mb-2">API Cost Management</h4>
            <p className="text-sm text-purple-900/80 dark:text-purple-200/80 mb-3">
              Critical lesson: always default to making the fewest API calls possible
            </p>
            <ul className="list-disc pl-4 text-xs text-purple-900/70 dark:text-purple-200/70 space-y-1">
              <li>Free tier protection strategies</li>
              <li>Rate limiting implementation</li>
              <li>Storage vs API call trade-offs</li>
            </ul>
          </div>
        </div>

        {/* Development Process Callout */}
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
          <h4 className="font-semibold text-lg mb-3 text-yellow-900 dark:text-yellow-200">Systematic Problem-Solving Methodology</h4>
          <p className="text-yellow-900/80 dark:text-yellow-200/80 mb-4">
            Developed a systematic approach to feature planning that prevented assumptions and ensured proper implementation. Each feature began with interrogative questionnaires breaking down user experience scenarios, technical requirements, and cross-device functionality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Planning Process:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>User experience scenario mapping</li>
                <li>Technical implementation analysis</li>
                <li>API behavior documentation</li>
                <li>Cross-device functionality testing</li>
              </ul>
            </div>
            <div>
              <strong>Documentation Strategy:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Real-time development diary</li>
                <li>Feature evolution tracking</li>
                <li>Problem-solution documentation</li>
                <li>User preference memory system</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Results & Business Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            UpDrift successfully demonstrates unique visual identity in a saturated market, achieving 60fps animations across all device types while maintaining professional functionality. The platform represents a strategic business asset that differentiates from generic competitors through mathematical precision and technical excellence.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The project proves that systematic design thinking can enhance rather than constrain creative innovation, resulting in both beautiful user experiences and maintainable, scalable code architectures. It showcases both design and development capabilities while demonstrating modern AI-assisted workflow proficiency.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-green-900 dark:text-green-200">Technical Performance</h4>
            <ul className="list-disc pl-5 text-green-900/80 dark:text-green-200/80 text-sm space-y-1">
              <li><strong>60fps animations</strong> across all devices</li>
              <li><strong>Complex cosmic system</strong> with 90 particles on desktop</li>
              <li><strong>Mobile optimizations</strong> maintaining 60fps on mid-range devices</li>
              <li><strong>Memory efficiency</strong> through particle recycling</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">Design Innovation</h4>
            <ul className="list-disc pl-5 text-blue-900/80 dark:text-blue-200/80 text-sm space-y-1">
              <li><strong>Mathematical animation system</strong> with sine wave calculations</li>
              <li><strong>15+ theme variations</strong> with consistent cosmic integration</li>
              <li><strong>Design token architecture</strong> enabling rapid theme development</li>
              <li><strong>WCAG AA compliance</strong> across all visual variations</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl">
            <h4 className="font-semibold mb-3 text-purple-900 dark:text-purple-200">Development Efficiency</h4>
            <ul className="list-disc pl-5 text-purple-900/80 dark:text-purple-200/80 text-sm space-y-1">
              <li><strong>3x faster development</strong> with MCP tools</li>
              <li><strong>Real-time documentation</strong> access and integration</li>
              <li><strong>Automated testing</strong> of complex animations</li>
              <li><strong>Seamless Figma integration</strong> for design-development bridge</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Value & Future Enhancements */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mb-28"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Portfolio Value & Future Vision</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            This project demonstrates the ability to create unique visual identity through mathematical animation systems, bridge design and development with seamless workflows, optimize for performance across all devices, and think systematically about scalable design token architecture.
          </p>
          <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80">
            The cosmic design system represents more than aesthetic choice—it's a strategic approach to differentiation that engages users through memorable, premium experiences while showcasing both creative vision and technical implementation capabilities.
          </p>
        </div>

        {/* Skills Demonstrated */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl">
            <h4 className="font-semibold mb-3">Design Skills Demonstrated</h4>
            <ul className="list-disc pl-5 text-indigo-900/80 dark:text-indigo-200/80 text-sm space-y-1">
              <li><strong>Visual Identity:</strong> Mathematically-precise cosmic aesthetic</li>
              <li><strong>System Thinking:</strong> Scalable design token architecture</li>
              <li><strong>User Research:</strong> Button language optimization via industry analysis</li>
              <li><strong>Responsive Design:</strong> Cosmic elements work across all devices</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl">
            <h4 className="font-semibold mb-3">Development Skills Demonstrated</h4>
            <ul className="list-disc pl-5 text-emerald-900/80 dark:text-emerald-200/80 text-sm space-y-1">
              <li><strong>Animation Expertise:</strong> Complex particle systems and wave mathematics</li>
              <li><strong>Performance Optimization:</strong> 60fps animations with resource management</li>
              <li><strong>Architecture:</strong> Clean separation between aesthetics and business logic</li>
              <li><strong>Integration:</strong> Figma design tokens enhance development workflow</li>
            </ul>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
          <h4 className="font-semibold text-lg mb-4 text-blue-900 dark:text-blue-200">Future Enhancement Roadmap</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">Technical Improvements</h5>
              <ul className="list-disc pl-5 text-blue-900/80 dark:text-blue-200/80 text-sm space-y-1">
                <li><strong>WebGL Integration:</strong> 3D cosmic elements for enhanced depth</li>
                <li><strong>Interactive Particles:</strong> Mouse-responsive particle behavior</li>
                <li><strong>Advanced Performance:</strong> Web Workers for complex calculations</li>
                <li><strong>AI-Generated Themes:</strong> Automated theme creation using color theory</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">Platform Features</h5>
              <ul className="list-disc pl-5 text-blue-900/80 dark:text-blue-200/80 text-sm space-y-1">
                <li><strong>Job Alerts:</strong> Personalized notifications for matching positions</li>
                <li><strong>Company Research:</strong> Integrated company information and insights</li>
                <li><strong>Interview Tools:</strong> Preparation resources and tracking</li>
                <li><strong>Analytics Dashboard:</strong> Job search progress and insights</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">Case Study Conclusion</h3>
          <p className="text-lg text-gray-900/80 dark:text-gray-200/80 mb-4">
            UpDrift's cosmic design system demonstrates how mathematical precision, systematic design thinking, and modern development tools can create differentiated user experiences that serve both aesthetic and functional purposes. The project successfully bridges creative innovation with technical excellence, proving that unique visual identity can enhance rather than compromise usability and performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <strong>Creative Innovation</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mathematical aesthetics that differentiate from competitors</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <strong>Technical Excellence</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">60fps performance with complex animation systems</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔗</div>
              <strong>Systematic Integration</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">Seamless design-development workflow with Figma tokens</p>
            </div>
          </div>
        </div>
      </motion.section>
    </article>
  );
}