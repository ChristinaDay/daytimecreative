'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFabProjectImages, getImagePath } from '../../utils/fabImages';
import { useEffect, useState } from 'react';

// Project data interface
interface FabProject {
  displayName: string;
  folderName: string;
  description?: string;
  skills?: string[];
  client?: string;
  role?: string;
}

// Featured Projects - Sole Fabricator
const featuredProjects: FabProject[] = [
  { 
    displayName: 'Hand-Shaped Steel Blooms', 
    folderName: 'Hammered Metal Flowers',
    description: 'In this project, commissioned by the Ritz Carlton in Lake Tahoe, I hand-formed cold-cut steel flowers before finishing them with a delicate air-brushed ombre effect that contrasts with brilliant gold laquer. Larger pieces were shaped with a pneumatic hammer, all smaller pieces were hand-shaped with a hammer and anvil before being scored and de-greased for painting. Several layers of paint ranging from a rich dark blue to an airy pale blue were applied with a commercial air-brush over primed metal and paired with bright gold automotive lacquer.',
    skills: ['Cold Steel Forming', 'Pneumatic Hammering', 'Hand Forging', 'Airbrushing', 'Surface Preparation', 'Fine Finishing', 'Packaging'],
    client: 'Ritz Carlton Tahoe',
    role: 'Sole Fabricator - Responsible for all aspects of fabrication from initial steel forming through final finishing and packaging for shipment.'
  },
  { 
    displayName: 'Sculpted Paper Rings', 
    folderName: 'Framed Paper Sculpture',
    description: 'These three-dimensional paper constructions were designed to be housed within custom frames, exploring the sculptural possibilities of paper as an artistic medium that can achieve both delicate and bold architectural forms.',
    skills: ['Paper Work', 'Precision Work', 'Custom Framing', 'Assembly'],
    role: 'Sole Fabricator - Responsible for all aspects of paper sculpture creation and custom framing.'
  },
  { 
    displayName: 'Floral Origami Mosaic', 
    folderName: 'Origami',
    description: 'These paper sculptures were created by adapting traditional Japanese paper folding techniques for large-scale installations, bringing ancient geometric precision into contemporary architectural spaces.',
    skills: ['Paper Work', 'Precision Work', 'Assembly', 'Installation'],
    role: 'Sole Fabricator - Led all fabrication with partial assistance from another fabricator for large-scale installation elements.'
  },
  { 
    displayName: 'Hanging Fiber Arts Installation', 
    folderName: 'Hanging Wrapped Fibers',
    description: 'This textile art installation was originally created by the Colombian artist(s) Pomplon, and shipped to our studio for installation preparation. My role involved creating custom wooden mounting rods and matching wooden hanging hardware, along with designing and fabricating a hidden metal support apparatus to prevent the rod from bowing under the weight of the fiber artwork. I also carefully unboxed and hand-steamed each piece of the installation until it achieved a crisp and uniform appearance.',
    skills: ['Custom Hardware Fabrication', 'Metalworking', 'Woodworking', 'Textile Steaming', 'Installation'],
    role: 'Sole Fabricator - Responsible for all mounting hardware fabrication, support systems, and installation preparation.'
  },
  { 
    displayName: 'Dyed and Torn Handmade Paper Collage', 
    folderName: 'Dyed and Layered Paper Framed',
    description: 'These intricate paper artworks were designed to feature hand-dyed materials layered strategically to create depth and visual complexity within custom frames, exploring the translucent qualities of paper as a fine art medium.',
    skills: ['Paper Work', 'Dyeing', 'Layering', 'Custom Framing'],
    role: 'Sole Fabricator - Responsible for all aspects including paper dyeing, layering composition, and custom framing.'
  },
  { 
    displayName: 'Cactus Lantern Alcove Installation', 
    folderName: 'Cactus Piece',
    description: 'Cold-cut steel cactus shapes were individually mounted on hardware with a hand-operated stud-welder, then meticulously finished with layers of oxidizing paint to create a distressed and rusted finish. A large arched wooden substrate was cut on the in-house CNC machine and covered with a veneer of distressed recycled wood. Holes were drilled into face of the wooden assembly that allowed light to shine through from the LED array installed in the back of the piece. Each metal cactus was mounted on the wooden substrate to cover the small light-portals, with the result being that the polished backs of the cactus gently bounce the lighting around the environment.',
    skills: ['Woodworking', 'Welding', 'Fine Finishing', 'Electrical Wiring', 'Assembly', 'Metalworking'],
    role: 'Sole Fabricator - Responsible for all aspects of fabrication including metalwork, welding, finishing, LED installation, and final assembly.'
  },
  { 
    displayName: 'Board Games New & Old Found-Object Installation', 
    folderName: 'Board Games',
    description: 'This installation combines custom fabricated MDF components with collected board games dating from 1950 to today, creating a sculptural timeline that shows the evolution of play through the decades. The piece explores how game design, materials, and cultural themes have shifted over time.',
    skills: ['Material Preparation', 'Surface Preparation', 'Assembly', 'Installation', 'Mounting'],
    role: 'Sole Fabricator - Responsible for all fabrication aspects including design, assembly, finishing, and installation. CNC operator handled substrate cutting.'
  },
  { 
    displayName: 'Terracotta Moons Installation', 
    folderName: 'Terracotta glazed disks',
    description: 'These ceramic disk installations were commissioned artwork created by a ceramic artist, then installed at the Ritz Carlton in Half Moon Bay. My role involved mounting each individual piece to custom hardware and creating a detailed layout for installation that was translated into a printed template for the installation team.',
    skills: ['Custom Hardware Fabrication', 'Mounting', 'Layout Design', 'Installation Planning'],
    client: 'Ritz Carlton Half Moon Bay',
    role: 'Sole Fabricator - Responsible for all mounting hardware, layout design, and installation planning. Original ceramic pieces by commissioned artist.'
  },
  { 
    displayName: "'Symphony of Shells' Hanging Curtain", 
    folderName: 'Hanging Seashells',
    description: 'These natural seashell arrangements were designed to be suspended strategically, creating organic, coastal-inspired installations that capture the gentle movement and varied textures found along the shoreline.',
    skills: ['Material Preparation', 'Mounting', 'Installation', 'Assembly'],
    role: 'Sole Fabricator - Responsible for all aspects of design, arrangement, and installation of seashell displays.'
  }
];

// Collaborative Projects - Contributing Fabricator
const collaborativeProjects: FabProject[] = [
  { 
    displayName: 'Teal and Stone Antique Mirrors', 
    folderName: 'Teal and Stone Antique Mirrors',
    description: 'These antique mirrors were carefully restored and customized for installation, blending historical preservation with contemporary luxury design through the addition of green marble accents.',
    skills: ['Surface Preparation', 'Sanding', 'Priming', 'Installation'],
    client: 'The Conrad NY Downtown - Leonessa Rooftop',
    role: 'Contributing Fabricator - Responsible for extensive surface preparation/sanding, priming, assisted with finishing process, and helped install specially ordered antique mirrors. Coworkers completed finishing and marble accent installation.'
  },
  { 
    displayName: 'Whales and Surf Boards', 
    folderName: 'Whales and Surf Boards',
    description: 'This ocean-themed artwork was designed to combine marine life imagery with surf culture, celebrating the deep connection between humans and the sea through visual storytelling. This was a large-scale project requiring multiple fabricators.',
    skills: ['Material Preparation', 'Assembly', 'Installation'],
    role: 'Contributing Fabricator - Assisted with material preparation, assembly, and installation on this large project that required many workers.'
  },
  { 
    displayName: 'Abalone shells in the sand - wall panels and installation', 
    folderName: 'Abalone Wall Panels',
    description: 'This piece was a custom wall installation featuring natural abalone shells creating an iridescent surface that catches and reflects light. Hours of surface and material prep created the effect of discovering a trove of discarded shells washing up to shore in the sand',
    skills: ['Surface Preparation'],
    client: 'Gaylor Pacific in Chula Vista, CA',
    role: 'Contributing Fabricator - Responsible for surface preparation work under senior fabricator guidance.'
  },
  { 
    displayName: 'Wild West Custom Print', 
    folderName: 'Black and White Cowboy Cowgirl',
    description: 'This custom image collage was printed in vinyl ink on a hand-cut MDF substrate, combining digital imagery with traditional fabrication techniques to create a contemporary western-themed piece that explores themes of American frontier culture.',
    skills: ['Material Preparation', 'Surface Preparation', 'Fine Finishing', 'Hardware Installation', 'Packaging'],
    role: 'Contributing Fabricator - Handled surface and material preparation, final touch-ups, hardware installation, and packaging for shipment. Senior fabricator managed printing process.'
  },
  { 
    displayName: 'Austin Texas Blue Cow Wall Piece', 
    folderName: 'Blue Cow',
    description: 'This whimsical large-scale wall piece was created by carefully masking each paint layer by hand, using an in-house CNC machine and an ultra-fine bit to carve the playful details. Commercial-grade acrylic paint on hand-finished MDF substrate, hanging hardware installed on reverse.',
    skills: ['Paint Application', 'Masking Removal', 'Fine Finishing', 'Hardware Installation', 'Packaging'],
    role: 'Contributing Fabricator - Applied final pale blue paint coat, removed masking vinyl, completed touch-ups, installed hanging hardware, and packaged for shipment.'
  },
  { 
    displayName: 'Kegs in Team Colors Wall Installation', 
    folderName: 'Kegs',
    description: 'These industrial brewing vessels were artistically transformed and repurposed as decorative and sculptural elements, bridging the gap between functional industrial design and contemporary art.',
    skills: ['Masking', 'Labeling', 'Pneumatic Paint Application', 'Clear Coating'],
    role: 'Contributing Fabricator - Responsible for masking and labeling all 55 kegs, applying automotive lacquer with pneumatic paint gun, and sealing with two-part resin clear coat.'
  },
  { 
    displayName: 'Lenticular Ocean Scenes Wall Panels', 
    folderName: 'Linticular Pieces',
    description: 'These interactive optical artworks were created using lenticular printing technology to produce images that change and transform with viewing angle, engaging viewers in a dynamic visual experience.',
    skills: ['Adhesive Application', 'Mounting', 'Precision Work'],
    role: 'Contributing Fabricator - Assisted with adhering aluminum strips that served as substrate for imagery strips and helped mount each strip to MDF substrate.'
  },
  { 
    displayName: 'Custom Lite Brite Panels for Austin Texas Gameroom', 
    folderName: 'Lite Brite',
    description: 'This illuminated artwork was inspired by the classic childhood toy, designed to create pixelated light compositions that bridge nostalgia with contemporary artistic interpretation through innovative use of light and color.',
    skills: ['Surface Preparation', 'Material Preparation', 'Assembly', 'Fine Finishing'],
    role: 'Contributing Fabricator - Responsible for surface preparation, material preparation, finishing, and assembly under senior fabricator guidance.'
  },
  { 
    displayName: 'Firestation Waterpipes', 
    folderName: 'Pipes',
    description: 'These industrial pipe structures were repurposed and transformed into artistic installations. The pieces explore themes of infrastructure and urban history while honoring the building\'s firefighting heritage.',
    skills: ['Material Preparation', 'Painting', 'Assembly'],
    client: 'Hilton Nobleman, Fort Worth TX',
    role: 'Contributing Fabricator - Assisted with material preparation, painting/finishing, and assembly under senior fabricator guidance.'
  },
  { 
    displayName: 'Plaster Drapery Panels', 
    folderName: 'Plaster Drapery Panels',
    description: 'These sculptural panels were designed to mimic fabric drapery in solid plaster, capturing movement and flow in permanent material while creating the illusion of soft textile forms.',
    skills: ['Material Preparation', 'Surface Preparation'],
    role: 'Contributing Fabricator - Responsible for material preparation and surface preparation under senior fabricator guidance.'
  },
  { 
    displayName: 'Record Holder Photos', 
    folderName: 'Record Holder Photos',
    description: 'These custom vinyl record storage solutions were designed to double as photographic display elements for executive suites at an Autograph Collection hotel in Paso Robles, CA. The pieces merge music culture with visual presentation, creating functional art that enhances the luxury hospitality experience.',
    skills: ['Surface Preparation', 'Painting', 'Woodworking', 'Assembly'],
    client: 'Autograph Collection Hotel, Paso Robles CA',
    role: 'Contributing Fabricator - Responsible for surface preparation and painting of 1/4" MDF substrate, assembled custom wooden record holders, and combined all components.'
  },
  { 
    displayName: 'Steel Scales', 
    folderName: 'Scales',
    description: 'These repetitive scale-like patterns and textures were inspired by natural forms, designed to create dynamic surface treatments and installations that mimic the protective and decorative qualities found in nature.',
    skills: ['Painting', 'Clear Coating'],
    role: 'Contributing Fabricator - Assisted with painting and clear coating application under senior fabricator guidance.'
  },
  { 
    displayName: 'Surf Board Carvings', 
    folderName: 'Surf Board Carvings',
    description: 'These decorative surfboard pieces were originally sculpted by South African artist Jenna Barbe, then prepared for display with custom wooden mounting systems and protective acrylic facing, celebrating both California surf culture and international artistic collaboration.',
    skills: ['Custom Hardware Fabrication', 'Woodworking', 'Acrylic Work'],
    role: 'Contributing Fabricator - Created custom wooden display system with protective acrylic face. Original surfboard sculpture by Jenna Barbe.'
  },
  { 
    displayName: 'Wooden Drapery Sculpture', 
    folderName: 'Wooden Drapery Sculpture',
    description: 'These wooden sculptures were carved to mimic the flow and drape of fabric, demonstrating the versatility of wood as a medium for creating soft, flowing forms that seem to defy the material\'s natural rigidity.',
    skills: ['Material Preparation', 'Surface Preparation', 'Clear Coating', 'Hardware Installation'],
    role: 'Contributing Fabricator - Responsible for material and surface preparation, clear coating application, and hardware installation.'
  },
  { 
    displayName: 'Wooden Screens', 
    folderName: 'Wooden Screens',
    description: 'These functional wooden privacy screens were designed with decorative elements that combine architectural function with artistic craftsmanship, creating beautiful room dividers that enhance interior spaces.',
    skills: ['Wood Staining', 'Sealing'],
    role: 'Contributing Fabricator - Responsible for staining and sealing all wooden screen components.'
  },
];

function renderProjectSection(projects: FabProject[], sectionTitle: string, startIndex: number = 0, setLightbox?: (img: {src: string, alt: string}) => void) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="mb-32"
    >
      <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">
        {sectionTitle}
      </h2>
      <div className="space-y-24">
        {projects.map((project, index) => {
          const projectImages = getFabProjectImages(project.folderName);
          const actualIndex = startIndex + index;
          const isEven = actualIndex % 2 === 0;
          
          return (
            <div key={project.folderName} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
              {/* Content */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-text-light dark:text-text-dark">
                  {project.displayName}
                </h3>
                
                {project.client && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">
                      {project.client}
                    </span>
                  </div>
                )}
                
                <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {project.skills && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-light/70 dark:text-text-dark/70 mb-3 uppercase tracking-wider">
                      Skills & Techniques
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-surface-light/10 dark:bg-surface-dark/10 text-text-light/80 dark:text-text-dark/80 rounded-full text-xs border border-surface-light/20 dark:border-surface-dark/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.role && (
                  <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-text-light/70 dark:text-text-dark/70 mb-2 uppercase tracking-wider">
                      My Role
                    </h4>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      {project.role}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Images */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7' : 'lg:col-start-1'}`}>
                <ProjectImageGrid 
                  images={projectImages} 
                  projectName={project.folderName}
                  projectIndex={actualIndex}
                  setLightbox={setLightbox}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default function ArtFabrication2Page() {
  const [lightbox, setLightbox] = useState<{src: string, alt: string} | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setLightbox(null);
      }
    }
    
    if (lightbox) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightbox]);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen w-full text-text-light dark:text-text-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="max-w-5xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-text-light dark:text-text-dark leading-tight mb-8">
              Art Fabrication Portfolio
            </h1>
            <div className="text-xl md:text-2xl text-text-light/80 dark:text-text-dark/80 mb-12 leading-relaxed max-w-4xl">
              A collection of physical artworks created during my time in art fabrication, showcasing expertise in metalworking, woodworking, surface finishing, and installation across luxury hospitality and residential projects.
            </div>
            
            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Metalworking</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Woodworking</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Surface Finishing</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Installation</span>
              <span className="px-4 py-2 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium border border-accent-light/20 dark:border-accent-dark/20">Luxury Hospitality</span>
            </div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">25+</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Projects Completed</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">15+</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Materials Mastered</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">$25/hr</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Professional Rate</div>
            </div>
            <div className="bg-white/50 dark:bg-white/8 backdrop-blur-xl border border-white/20 dark:border-white/15 rounded-2xl p-6 text-center hover:bg-white/60 dark:hover:bg-white/12 transition-all duration-300">
              <div className="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">2 years</div>
              <div className="text-sm text-text-light/70 dark:text-text-dark/70">Experience</div>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        {renderProjectSection(featuredProjects, "Featured Projects — Sole Fabricator", 0, setLightbox)}

        {/* Collaborative Projects Section */}
        {renderProjectSection(collaborativeProjects, "Collaborative Projects — Contributing Fabricator", featuredProjects.length, setLightbox)}

        {/* Process Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">
            Fabrication Process
          </h2>
          <ProcessImageGrid setLightbox={setLightbox} />
        </motion.section>

        {/* Shop and Studio Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">
            Shop & Studio
          </h2>
          <ShopAndStudioGrid setLightbox={setLightbox} />
        </motion.section>

        {/* Crating and Shipping Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">
            Crating & Shipping
          </h2>
          <CratingAndShippingGrid setLightbox={setLightbox} />
        </motion.section>

        {/* Neighborhood Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-16 text-text-light dark:text-text-dark text-center">
            Oakland Neighborhood
          </h2>
          <NeighborhoodGrid setLightbox={setLightbox} />
        </motion.section>

        {/* Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-gray-900 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </motion.section>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={lightbox.src} 
              alt={lightbox.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

// Process Gallery Component
function ProcessImageGrid({ setLightbox }: { setLightbox?: (img: {src: string, alt: string}) => void }) {
  const processImageFolders = [
    'Abstract Relief Carving Panel',
    'Ceramic Metal Plates',
    'Firehose Weaving',
    'Custom Color Matching',
    'Floating Canvas Prints',
    'Gold Ceiling Hanging',
    'Gold Leafing',
    'Leather Harness Wall Hanging',
    'Ocean Collage and Painting',
    'Sevens Piece',
    'Tropical Relief Panels and Glass Panels',
    'Wailea',
    'White Leafs',
    'Z-Gel Finishing',
    'Enclave Decor Samples'
  ];

  const allProcessImages: { imageName: string; folderName: string }[] = [];
  
  processImageFolders.forEach(folderName => {
    const images = getFabProjectImages(folderName);
    images.forEach(imageName => {
      allProcessImages.push({ imageName, folderName });
    });
  });

  // Create a smooth pattern that avoids sawtooth effect
  const createSmoothPattern = (totalImages: number) => {
    const pattern: boolean[] = [];
    const targetLargeCount = Math.floor(totalImages / 8); // Roughly 1 in 8 images is large
    
    // Distribute large images evenly throughout the array
    for (let i = 0; i < totalImages; i++) {
      const shouldBeLarge = i > 0 && i % Math.max(8, Math.floor(totalImages / targetLargeCount)) === 0;
      pattern.push(shouldBeLarge);
    }
    
    return pattern;
  };

  const largeImagePattern = createSmoothPattern(allProcessImages.length);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {allProcessImages.map((item, index) => {
        const src = getImagePath(item.folderName, item.imageName);
        const alt = `Process image from ${item.folderName}`;
        return (
          <div 
            key={`${item.folderName}-${item.imageName}`}
            className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => setLightbox && setLightbox({ src, alt })}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox && setLightbox({ src, alt }); }}
            role="button"
            aria-label="Expand image"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        );
      })}
    </div>
  );
}

// Shop and Studio Gallery Component
function ShopAndStudioGrid({ setLightbox }: { setLightbox?: (img: {src: string, alt: string}) => void }) {
  const shopImages = getFabProjectImages('Shop and Studio');

  // Create a smooth pattern that avoids sawtooth effect
  const createSmoothPattern = (totalImages: number) => {
    const pattern: boolean[] = [];
    const targetLargeCount = Math.floor(totalImages / 7); // Roughly 1 in 7 images is large
    
    // Distribute large images evenly throughout the array
    for (let i = 0; i < totalImages; i++) {
      const shouldBeLarge = i > 0 && i % Math.max(7, Math.floor(totalImages / targetLargeCount)) === 0;
      pattern.push(shouldBeLarge);
    }
    
    return pattern;
  };

  const largeImagePattern = createSmoothPattern(shopImages.length);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {shopImages.map((imageName, index) => {
        const src = getImagePath('Shop and Studio', imageName);
        const alt = `Shop and Studio - ${imageName}`;
        return (
          <div 
            key={imageName}
            className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => setLightbox && setLightbox({ src, alt })}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox && setLightbox({ src, alt }); }}
            role="button"
            aria-label="Expand image"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        );
      })}
    </div>
  );
}

// Crating and Shipping Gallery Component
function CratingAndShippingGrid({ setLightbox }: { setLightbox?: (img: {src: string, alt: string}) => void }) {
  const cratingImages = getFabProjectImages('Crating and Shipping');

  // Create a smooth pattern that avoids sawtooth effect
  const createSmoothPattern = (totalImages: number) => {
    const pattern: boolean[] = [];
    const targetLargeCount = Math.floor(totalImages / 8); // Roughly 1 in 8 images is large
    
    // Distribute large images evenly throughout the array
    for (let i = 0; i < totalImages; i++) {
      const shouldBeLarge = i > 0 && i % Math.max(8, Math.floor(totalImages / targetLargeCount)) === 0;
      pattern.push(shouldBeLarge);
    }
    
    return pattern;
  };

  const largeImagePattern = createSmoothPattern(cratingImages.length);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {cratingImages.map((imageName, index) => {
        const src = getImagePath('Crating and Shipping', imageName);
        const alt = `Crating and Shipping - ${imageName}`;
        return (
          <div 
            key={imageName}
            className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => setLightbox && setLightbox({ src, alt })}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox && setLightbox({ src, alt }); }}
            role="button"
            aria-label="Expand image"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        );
      })}
    </div>
  );
}

// Neighborhood Gallery Component
function NeighborhoodGrid({ setLightbox }: { setLightbox?: (img: {src: string, alt: string}) => void }) {
  const neighborhoodImages = getFabProjectImages('Neighborhood');

  // Create a smooth pattern that avoids sawtooth effect
  const createSmoothPattern = (totalImages: number) => {
    const pattern: boolean[] = [];
    const targetLargeCount = Math.floor(totalImages / 6); // Roughly 1 in 6 images is large
    
    // Distribute large images evenly throughout the array
    for (let i = 0; i < totalImages; i++) {
      const shouldBeLarge = i > 0 && i % Math.max(6, Math.floor(totalImages / targetLargeCount)) === 0;
      pattern.push(shouldBeLarge);
    }
    
    return pattern;
  };

  const largeImagePattern = createSmoothPattern(neighborhoodImages.length);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {neighborhoodImages.map((imageName, index) => {
        const src = getImagePath('Neighborhood', imageName);
        const alt = `Neighborhood - ${imageName}`;
        return (
          <div 
            key={imageName}
            className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => setLightbox && setLightbox({ src, alt })}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox && setLightbox({ src, alt }); }}
            role="button"
            aria-label="Expand image"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        );
      })}
    </div>
  );
}

function ProjectImageGrid({ images, projectName, projectIndex, setLightbox }: { 
  images: string[]; 
  projectName: string;
  projectIndex: number;
  setLightbox?: (img: {src: string, alt: string}) => void;
}) {
  // Create a smooth pattern that avoids sawtooth effect
  const createSmoothPattern = (totalImages: number) => {
    const pattern: boolean[] = [];
    const targetLargeCount = Math.floor(totalImages / 5); // Roughly 1 in 5 images is large
    
    // Distribute large images evenly throughout the array
    for (let i = 0; i < totalImages; i++) {
      const shouldBeLarge = i > 0 && i % Math.max(5, Math.floor(totalImages / targetLargeCount)) === 0;
      pattern.push(shouldBeLarge);
    }
    
    return pattern;
  };

  const largeImagePattern = createSmoothPattern(images.length);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {images.map((imageName, index) => {
        const src = getImagePath(projectName, imageName);
        const alt = `${projectName} - Image ${index + 1}`;
        return (
          <div 
            key={imageName} 
            className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => setLightbox && setLightbox({ src, alt })}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox && setLightbox({ src, alt }); }}
            role="button"
            aria-label="Expand image"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        );
      })}
    </div>
  );
} 