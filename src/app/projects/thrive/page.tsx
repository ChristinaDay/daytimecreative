'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectDetailTags } from '@/components/projects/ProjectDetailTags';
import { ProjectSubtitle } from '@/components/typography/DropQuote';
import { ScrollableImageContainer } from '@/components/ScrollableImageContainer';

export default function ThrivePage() {
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
          Thrive Mental Health Platform
        </h1>
        <ProjectSubtitle>
          Designing an AI-powered mental health chatbot and wellness platform to provide accessible, personalized mental health support and resources
        </ProjectSubtitle>
        <ProjectDetailTags
          role="Lead Product Designer & UX Researcher"
          employer="Thrive"
          platforms="iOS, Android, Web Platform"
          areas="Product Design, UX Research, Conversational UI, Mental Health UX, Motion Graphics"
          year="2019-2020"
        />
      </motion.div>

      {/* Hero Image - Thrivebot Character */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 w-full max-w-4xl mx-auto relative aspect-[3/2] rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
      >
        <Image
          src="/images/thrivebotthree.gif"
          alt="Thrivebot - AI Mental Health Assistant"
          fill
          className="object-contain p-6"
          sizes="(max-width: 1024px) 100vw, 64rem"
        />
      </motion.div>
      
      {/* Hero Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16 text-center max-w-4xl mx-auto"
      >
        <p className="text-sm text-text-light/60 dark:text-text-dark/60">
          Thrivebot character animation created in After Effects to bring warmth and personality to AI mental health support
        </p>
      </motion.div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Overview</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-6">
          Thrive was an innovative mental health platform designed to make mental wellness support accessible, personalized, and engaging through AI-powered conversations. As the Lead Product Designer, I created a comprehensive user experience that combined evidence-based therapeutic techniques with conversational AI to provide users with 24/7 mental health support.
        </p>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The platform featured "Thrivebot," an empathetic AI assistant that guided users through personalized mental health journeys, mood tracking, coping strategies, and resource recommendations. My role encompassed the entire design process from user research and persona development to interface design and conversational flow optimization.
        </p>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-8">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Challenge</h4>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            Creating a mental health platform that feels supportive rather than clinical, accessible to users in crisis, and capable of providing meaningful therapeutic value through digital interactions while maintaining user privacy and safety.
          </p>
        </div>
      </motion.section>

      {/* Mobile Interface Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Mobile Experience Design</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The mobile experience was central to Thrive's accessibility mission. I designed intuitive interfaces that users could navigate even during moments of distress, with clear visual hierarchy, calming color palettes, and conversational interactions that felt natural and supportive.
        </p>

        {/* Interface Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Conversational Interface</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-6">
              The mobile interface centers around natural, therapeutic conversations with Thrivebot. Every interaction was designed to feel supportive and non-judgmental, creating a safe space for users to explore their mental health journey.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Empathetic conversation flows</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Personalized response pathways</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Crisis-aware safety mechanisms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Accessible, calming visual design</span>
              </div>
            </div>
          </div>
          
          <div>
            <ScrollableImageContainer
              src="/images/thrive-mobile-interface.png"
              alt="Thrive Mobile App Interface"
              caption="Mobile app interface showcasing conversational design and user-friendly navigation"
              frameType="phone"
              height="phone"
              backgroundColor="white"
            />
          </div>
        </div>

        {/* Real-world Usage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Real-World Impact</h4>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 mb-6">
              Beyond the interface design, Thrive became an integral part of users' daily wellness routines. The app's empathetic approach and consistent engagement helped users build sustainable mental health habits.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Daily check-ins and mood tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Consistent user engagement streaks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-text-light/80 dark:text-text-dark/80">Integration with therapeutic goals</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Real-world context presentation */}
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-lg">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border border-blue-200 rounded-full"></div>
                <div className="absolute top-12 right-8 w-8 h-8 bg-purple-200 rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-12 h-12 border-2 border-indigo-200 rounded-lg rotate-12"></div>
              </div>
              
              {/* Main phone image with enhanced styling */}
              <div className="relative z-10 max-w-sm mx-auto">
                <div className="relative">
                  <Image
                    src="/images/thrive-mobile-photo.png"
                    alt="Thrive App in Use"
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  />
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl opacity-60"></div>
                </div>
                
                {/* Context elements */}
                <div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-xs text-gray-600 dark:text-gray-400">💚 Daily check-in</span>
                </div>
              </div>
              
              {/* Usage indicators */}
              <div className="mt-6 flex justify-center items-center space-x-4 text-sm text-text-light/70 dark:text-text-dark/70">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Active user</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>7-day streak</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
              Real-world usage showing the app's integration into daily mental wellness routines
            </p>
          </div>
        </div>
      </motion.section>

      {/* Conversational Design Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Conversational Interface Design</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Designing conversations for mental health required deep empathy and understanding of therapeutic communication principles. I created dialogue flows that felt natural, supportive, and therapeutically valuable while ensuring users always felt heard and validated.
        </p>

        <div className="w-full mb-8 flex justify-center">
          <div className="max-w-4xl w-full">
            <ScrollableImageContainer
              src="/images/thrive-interface-main.png"
              alt="Thrive Conversational Interface"
              caption="Main conversational interface showing Thrivebot's empathetic communication style and therapeutic guidance"
              frameType="none"
              height="large"
              backgroundColor="white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Empathetic Responses</h4>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Crafted conversation flows that validate user emotions and provide appropriate therapeutic responses based on evidence-based practices.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Crisis Detection</h4>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Implemented safety protocols and crisis detection mechanisms to provide immediate support and professional resource connections.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Personalization</h4>
            <p className="text-text-light/80 dark:text-text-dark/80">
              Designed adaptive conversation flows that learned from user interactions to provide increasingly personalized support.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Character Design & Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Character Design & Motion Graphics</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Creating Thrivebot required more than interface design—the character needed to feel approachable, trustworthy, and emotionally intelligent. I designed and animated the Thrivebot character using After Effects to bring personality and warmth to the AI assistant experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Character Design Principles</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-6">
              <li>• <strong>Approachable Form:</strong> Soft, rounded shapes to convey safety and warmth</li>
              <li>• <strong>Calming Colors:</strong> Gentle blues and purples aligned with mental wellness</li>
              <li>• <strong>Expressive Features:</strong> Simple but emotionally communicative design</li>
              <li>• <strong>Non-threatening Scale:</strong> Appropriately sized to feel supportive, not overwhelming</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Animation & Motion Design</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-6">
              <li>• <strong>After Effects Animation:</strong> Custom character animations to show personality</li>
              <li>• <strong>Breathing Motion:</strong> Subtle life-like movements to create connection</li>
              <li>• <strong>Responsive Gestures:</strong> Animated reactions to user interactions</li>
              <li>• <strong>Therapeutic Pacing:</strong> Calm, measured movements that don't induce anxiety</li>
            </ul>
          </div>
        </div>

        {/* Animation Process */}
        <div className="bg-accent-light/5 dark:bg-accent-dark/5 p-8 rounded-lg mb-8">
          <h4 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Creating the Thrivebot Animation</h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Character Design Visual */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <Image
                  src="/images/thrive-thrivebot.png"
                  alt="Thrivebot Character Design"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center mt-4">
                  Static character design before animation
                </p>
              </div>
            </div>
            
            {/* Process Details */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-medium mb-3 text-text-light dark:text-text-dark">Design Process</h5>
                <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-4">
                  <li>• <strong>Character Sketching:</strong> Initial concepts focusing on approachable, non-threatening forms</li>
                  <li>• <strong>Color Psychology:</strong> Selected calming blues and purples to reduce anxiety</li>
                  <li>• <strong>Expression Studies:</strong> Designed subtle facial expressions to convey empathy</li>
                  <li>• <strong>Movement Planning:</strong> Mapped breathing patterns and gentle gestures</li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-3 text-text-light dark:text-text-dark">After Effects Execution</h5>
                <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-4">
                  <li>• <strong>Rigging System:</strong> Built flexible puppet pin controls for organic movement</li>
                  <li>• <strong>Breathing Animation:</strong> Subtle scale and position keyframes for life-like presence</li>
                  <li>• <strong>Easing Curves:</strong> Smooth, therapeutic timing to avoid jarring movements</li>
                  <li>• <strong>Loop Optimization:</strong> Seamless cycling for continuous, calming presence</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-text-light/10 dark:border-text-dark/10">
            <h5 className="text-lg font-medium mb-3 text-text-light dark:text-text-dark">Technical Considerations</h5>
            <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
              The animation needed to work across multiple platforms while maintaining small file sizes for mobile performance. I optimized the After Effects composition for web delivery, balancing visual quality with loading speed to ensure the character could provide immediate comfort without technical barriers.
            </p>
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Motion Design Impact</h4>
          <p className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80">
            The custom After Effects animations helped users form an emotional connection with Thrivebot, making the AI feel less mechanical and more like a caring companion. This attention to character animation was crucial for building trust in a mental health context, where users needed to feel comfortable sharing personal struggles with a digital assistant.
          </p>
        </div>
      </motion.section>

      {/* Onboarding & User Journey */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Onboarding & Assessment</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          The onboarding experience was crucial for establishing trust and understanding each user's unique mental health needs. I designed a compassionate assessment process that felt more like a supportive conversation than a clinical questionnaire.
        </p>

        <div className="w-full mb-8">
          <ScrollableImageContainer
            src="/images/thrive-onboarding.png"
            alt="Thrive Onboarding Experience"
            caption="Compassionate onboarding process designed to establish trust and understand user needs"
            frameType="phone"
            height="phone"
            backgroundColor="white"
          />
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Key Onboarding Principles</h4>
          <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
            <li>• <strong>Privacy First:</strong> Clear communication about data protection and user control</li>
            <li>• <strong>Gradual Disclosure:</strong> Building trust through progressive information sharing</li>
            <li>• <strong>Immediate Value:</strong> Providing helpful resources from the first interaction</li>
            <li>• <strong>Flexible Pacing:</strong> Allowing users to move at their own comfort level</li>
          </ul>
        </div>
      </motion.section>

      {/* Wellness Tracking & Scheduling */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Wellness Tracking & Scheduling</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Beyond conversations, Thrive offered comprehensive wellness tracking and scheduling features. I designed intuitive interfaces for mood tracking, goal setting, and wellness activity scheduling that integrated seamlessly with the conversational experience.
        </p>

        <div className="w-full mb-8">
          <ScrollableImageContainer
            src="/images/thrive-schedule.png"
            alt="Thrive Wellness Scheduling Interface"
            caption="Wellness scheduling and tracking interface designed for easy habit formation and progress monitoring"
            frameType="phone"
            height="phone"
            backgroundColor="white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Mood & Progress Tracking</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-6">
              <li>• Visual mood tracking with customizable metrics</li>
              <li>• Progress visualization and pattern recognition</li>
              <li>• Integration with therapeutic goal setting</li>
              <li>• Shareable insights for healthcare providers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Wellness Activities</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2 mb-6">
              <li>• Guided meditation and mindfulness exercises</li>
              <li>• Cognitive behavioral therapy (CBT) techniques</li>
              <li>• Personalized coping strategy recommendations</li>
              <li>• Community support and peer connections</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design Process & Research */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Research & Design Process</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Designing for mental health required extensive research into therapeutic best practices, user psychology, and accessibility needs. I conducted interviews with mental health professionals, potential users, and existing app users to understand the unique challenges of digital mental health support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-accent-light/10 dark:bg-accent-dark/10 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">User Research Insights</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Users needed immediate access during crisis moments</li>
              <li>• Privacy and anonymity were paramount concerns</li>
              <li>• Traditional therapy language felt intimidating</li>
              <li>• Visual design significantly impacted emotional state</li>
            </ul>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Design Principles</h4>
            <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-2">
              <li>• Empathy-first conversational design</li>
              <li>• Calming, accessible visual hierarchy</li>
              <li>• Evidence-based therapeutic integration</li>
              <li>• Crisis-aware safety mechanisms</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Impact & Results */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Impact & Results</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Thrive's compassionate design approach resulted in high user engagement and positive therapeutic outcomes. The platform successfully made mental health support more accessible while maintaining the quality and safety standards required for mental health interventions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">85%</div>
            <div className="text-sm text-text-light/80 dark:text-text-dark/80">User Retention Rate</div>
          </div>
          <div className="text-center bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">4.8/5</div>
            <div className="text-sm text-text-light/80 dark:text-text-dark/80">User Satisfaction Score</div>
          </div>
          <div className="text-center bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">70%</div>
            <div className="text-sm text-text-light/80 dark:text-text-dark/80">Improvement in Mood Tracking</div>
          </div>
        </div>

        <div className="bg-opal-light-blue dark:bg-opal-dark-blue p-8 rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Key Achievements</h4>
          <ul className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
            <li>• <strong>Accessibility Impact:</strong> Made mental health support available 24/7 to users who couldn't access traditional therapy</li>
            <li>• <strong>User Engagement:</strong> Achieved industry-leading retention rates through empathetic design</li>
            <li>• <strong>Therapeutic Value:</strong> Users reported significant improvements in mood awareness and coping skills</li>
            <li>• <strong>Safety Standards:</strong> Successfully implemented crisis detection and professional referral systems</li>
            <li>• <strong>Platform Recognition:</strong> Featured in mental health innovation showcases and therapeutic technology conferences</li>
          </ul>
        </div>
      </motion.section>

      {/* Lessons Learned */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Design Lessons & Insights</h3>
        <p className="text-[1.375rem] text-text-light/80 dark:text-text-dark/80 mb-8">
          Working on Thrive taught me invaluable lessons about designing for vulnerable populations, the importance of ethical AI in healthcare, and the power of empathetic design to create meaningful therapeutic relationships through digital interfaces.
        </p>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Key Learnings</h4>
          <ul className="text-[1.125rem] text-text-light/80 dark:text-text-dark/80 space-y-3">
            <li>• <strong>Empathy in AI:</strong> Conversational AI can provide genuine therapeutic value when designed with deep empathy and clinical understanding</li>
            <li>• <strong>Safety-First Design:</strong> Mental health platforms require robust safety mechanisms and crisis intervention protocols built into every interaction</li>
            <li>• <strong>Trust Through Transparency:</strong> Users need clear understanding of how their data is used and protected, especially in mental health contexts</li>
            <li>• <strong>Accessibility Beyond Compliance:</strong> True accessibility in mental health means designing for users in various emotional and cognitive states</li>
          </ul>
        </div>
      </motion.section>
    </article>
  );
} 