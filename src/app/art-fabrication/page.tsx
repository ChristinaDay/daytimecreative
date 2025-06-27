'use client';

import Image from 'next/image';
import { getFabProjectImages, getImagePath } from '../../utils/fabImages';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { ThemeToggle } from '../../components/layout/ThemeToggle';
import Masonry from 'react-masonry-css';

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
    folderName: 'Hammered-Metal-Flowers',
    description: 'In this project, commissioned by the Ritz Carlton in Lake Tahoe, I hand-formed cold-cut steel flowers before finishing them with a delicate air-brushed ombre effect that contrasts with brilliant gold laquer. Larger pieces were shaped with a pneumatic hammer, all smaller pieces were hand-shaped with a hammer and anvil before being scored and de-greased for painting. Several layers of paint ranging from a rich dark blue to an airy pale blue were applied with a commercial air-brush over primed metal and paired with bright gold automotive lacquer.',
    skills: ['Cold Steel Forming', 'Pneumatic Hammering', 'Hand Forging', 'Airbrushing', 'Surface Preparation', 'Fine Finishing', 'Packaging'],
    client: 'Ritz Carlton Tahoe',
    role: 'Sole Fabricator - Responsible for all aspects of fabrication from initial steel forming through final finishing and packaging for shipment.'
  },
  { 
    displayName: 'Sculpted Paper Rings', 
    folderName: 'Framed-Paper-Sculpture',
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
    folderName: 'Hanging-Wrapped-Fibers',
    description: 'This textile art installation was originally created by the Colombian artist(s) Pomplon, and shipped to our studio for installation preparation. My role involved creating custom wooden mounting rods and matching wooden hanging hardware, along with designing and fabricating a hidden metal support apparatus to prevent the rod from bowing under the weight of the fiber artwork. I also carefully unboxed and hand-steamed each piece of the installation until it achieved a crisp and uniform appearance.',
    skills: ['Custom Hardware Fabrication', 'Metalworking', 'Woodworking', 'Textile Steaming', 'Installation'],
    role: 'Sole Fabricator - Responsible for all mounting hardware fabrication, support systems, and installation preparation.'
  },
  { 
    displayName: 'Dyed and Torn Handmade Paper Collage', 
    folderName: 'Dyed-and-Layered-Paper-Framed',
    description: 'These intricate paper artworks were designed to feature hand-dyed materials layered strategically to create depth and visual complexity within custom frames, exploring the translucent qualities of paper as a fine art medium.',
    skills: ['Paper Work', 'Dyeing', 'Layering', 'Custom Framing'],
    role: 'Sole Fabricator - Responsible for all aspects including paper dyeing, layering composition, and custom framing.'
  },
  { 
    displayName: 'Cactus Lantern Alcove Installation', 
    folderName: 'Cactus-Piece',
    description: 'Cold-cut steel cactus shapes were individually mounted on hardware with a hand-operated stud-welder, then meticulously finished with layers of oxidizing paint to create a distressed and rusted finish. A large arched wooden substrate was cut on the in-house CNC machine and covered with a veneer of distressed recycled wood. Holes were drilled into face of the wooden assembly that allowed light to shine through from the LED array installed in the back of the piece. Each metal cactus was mounted on the wooden substrate to cover the small light-portals, with the result being that the polished backs of the cactus gently bounce the lighting around the environment.',
    skills: ['Woodworking', 'Welding', 'Fine Finishing', 'Electrical Wiring', 'Assembly', 'Metalworking'],
    role: 'Sole Fabricator - Responsible for all aspects of fabrication including metalwork, welding, finishing, LED installation, and final assembly.'
  },
  { 
    displayName: 'Board Games New & Old Found-Object Installation', 
    folderName: 'Board-Games',
    description: 'This installation combines custom fabricated MDF components with collected board games dating from 1950 to today, creating a sculptural timeline that shows the evolution of play through the decades. The piece explores how game design, materials, and cultural themes have shifted over time.',
    skills: ['Material Preparation', 'Surface Preparation', 'Assembly', 'Installation', 'Mounting'],
    role: 'Sole Fabricator - Responsible for all fabrication aspects including design, assembly, finishing, and installation. CNC operator handled substrate cutting.'
  },
  { 
    displayName: 'Terracotta Moons Installation', 
    folderName: 'Terracotta-glazed-disks',
    description: 'These ceramic disk installations were commissioned artwork created by a ceramic artist, then installed at the Ritz Carlton in Half Moon Bay. My role involved mounting each individual piece to custom hardware and creating a detailed layout for installation that was translated into a printed template for the installation team.',
    skills: ['Custom Hardware Fabrication', 'Mounting', 'Layout Design', 'Installation Planning'],
    client: 'Ritz Carlton Half Moon Bay',
    role: 'Sole Fabricator - Responsible for all mounting hardware, layout design, and installation planning. Original ceramic pieces by commissioned artist.'
  },
  { 
    displayName: "'Symphony of Shells' Hanging Curtain", 
    folderName: 'Hanging-Seashells',
    description: 'These natural seashell arrangements were designed to be suspended strategically, creating organic, coastal-inspired installations that capture the gentle movement and varied textures found along the shoreline.',
    skills: ['Material Preparation', 'Mounting', 'Installation', 'Assembly'],
    role: 'Sole Fabricator - Responsible for all aspects of design, arrangement, and installation of seashell displays.'
  }
];

// Collaborative Projects - Contributing Fabricator
const collaborativeProjects: FabProject[] = [
  { 
    displayName: 'Teal and Stone Antique Mirrors', 
    folderName: 'Teal-and-Stone-Antique-Mirrors',
    description: 'These antique mirrors were carefully restored and customized for installation, blending historical preservation with contemporary luxury design through the addition of green marble accents.',
    skills: ['Surface Preparation', 'Sanding', 'Priming', 'Installation'],
    client: 'The Conrad NY Downtown - Leonessa Rooftop',
    role: 'Contributing Fabricator - Responsible for extensive surface preparation/sanding, priming, assisted with finishing process, and helped install specially ordered antique mirrors. Coworkers completed finishing and marble accent installation.'
  },
  { 
    displayName: 'Whales and Surf Boards', 
    folderName: 'Whales-and-Surf-Boards',
    description: 'This ocean-themed artwork was designed to combine marine life imagery with surf culture, celebrating the deep connection between humans and the sea through visual storytelling. This was a large-scale project requiring multiple fabricators.',
    skills: ['Material Preparation', 'Assembly', 'Installation'],
    role: 'Contributing Fabricator - Assisted with material preparation, assembly, and installation on this large project that required many workers.'
  },
  { 
    displayName: 'Abalone shells in the sand - wall panels and installation', 
    folderName: 'Abalone-Wall-Panels',
    description: 'This piece was a custom wall installation featuring natural abalone shells creating an iridescent surface that catches and reflects light. Hours of surface and material prep created the effect of discovering a trove of discarded shells washing up to shore in the sand',
    skills: ['Surface Preparation'],
    client: 'Gaylor Pacific in Chula Vista, CA',
    role: 'Contributing Fabricator - Responsible for surface preparation work under senior fabricator guidance.'
  },
  { 
    displayName: 'Wild West Custom Print', 
    folderName: 'Black-and-White-Cowboy-Cowgirl',
    description: 'This custom image collage was printed in vinyl ink on a hand-cut MDF substrate, combining digital imagery with traditional fabrication techniques to create a contemporary western-themed piece that explores themes of American frontier culture.',
    skills: ['Material Preparation', 'Surface Preparation', 'Fine Finishing', 'Hardware Installation', 'Packaging'],
    role: 'Contributing Fabricator - Handled surface and material preparation, final touch-ups, hardware installation, and packaging for shipment. Senior fabricator managed printing process.'
  },
  { 
    displayName: 'Austin Texas Blue Cow Wall Piece', 
    folderName: 'Blue-Cow',
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
    folderName: 'Linticular-Pieces',
    description: 'These interactive optical artworks were created using lenticular printing technology to produce images that change and transform with viewing angle, engaging viewers in a dynamic visual experience.',
    skills: ['Adhesive Application', 'Mounting', 'Precision Work'],
    role: 'Contributing Fabricator - Assisted with adhering aluminum strips that served as substrate for imagery strips and helped mount each strip to MDF substrate.'
  },
  { 
    displayName: 'Custom Lite Brite Panels for Austin Texas Gameroom', 
    folderName: 'Lite-Brite',
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
    folderName: 'Plaster-Drapery-Panels',
    description: 'These sculptural panels were designed to mimic fabric drapery in solid plaster, capturing movement and flow in permanent material while creating the illusion of soft textile forms.',
    skills: ['Material Preparation', 'Surface Preparation'],
    role: 'Contributing Fabricator - Responsible for material preparation and surface preparation under senior fabricator guidance.'
  },
  { 
    displayName: 'Record Holder Photos', 
    folderName: 'Record-Holder-Photos',
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
    folderName: 'Surf-Board-Carvings',
    description: 'These decorative surfboard pieces were originally sculpted by South African artist Jenna Barbe, then prepared for display with custom wooden mounting systems and protective acrylic facing, celebrating both California surf culture and international artistic collaboration.',
    skills: ['Custom Hardware Fabrication', 'Woodworking', 'Acrylic Work'],
    role: 'Contributing Fabricator - Created custom wooden display system with protective acrylic face. Original surfboard sculpture by Jenna Barbe.'
  },
  { 
    displayName: 'Wooden Drapery Sculpture', 
    folderName: 'Wooden-Drapery-Sculpture',
    description: 'These wooden sculptures were carved to mimic the flow and drape of fabric, demonstrating the versatility of wood as a medium for creating soft, flowing forms that seem to defy the material\'s natural rigidity.',
    skills: ['Material Preparation', 'Surface Preparation', 'Clear Coating', 'Hardware Installation'],
    role: 'Contributing Fabricator - Responsible for material and surface preparation, clear coating application, and hardware installation.'
  },
  { 
    displayName: 'Wooden Screens', 
    folderName: 'Wooden-Screens',
    description: 'These functional wooden privacy screens were designed with decorative elements that combine architectural function with artistic craftsmanship, creating beautiful room dividers that enhance interior spaces.',
    skills: ['Wood Staining', 'Sealing'],
    role: 'Contributing Fabricator - Responsible for staining and sealing all wooden screen components.'
  },
  { 
    displayName: 'Circular Wall Decor', 
    folderName: 'Circular-Wall-Decor',
    description: 'These geometric wall installations feature circular motifs and patterns that create dynamic visual interest through careful repetition and variation. Each piece explores how modular elements can work together to transform architectural spaces while maintaining individual character.',
    skills: ['Assembly', 'Installation', 'Mounting'],
    client: 'Hotel Business Center',
    role: 'Contributing Fabricator - Assisted with fabrication and installation under senior fabricator guidance.'
  }
];

// Merge all projects into a single array, preserving order
const allProjects: FabProject[] = [
  ...featuredProjects.map(({ role, ...rest }) => rest),
  ...collaborativeProjects.map(({ role, ...rest }) => rest),
];

// Process Gallery Projects - Technical/Process Images
const processProjects: FabProject[] = [
];

// Other Projects (role to be determined)
const otherProjects: FabProject[] = [
];

// Helper function to render project sections
function renderProjectSection(projects: FabProject[], sectionTitle: string, startIndex: number = 0, setLightbox?: (img: {src: string, alt: string}) => void) {
  // Create section anchor from title
  const sectionAnchor = sectionTitle.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <>
      {sectionTitle !== "Featured Projects" && (
        <div className="mb-16" id={sectionAnchor}>
          <h2 className="text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-4">
            {sectionTitle}
          </h2>
        </div>
      )}
      
      {projects.map((project, projectIndex) => {
        const images = getFabProjectImages(project.folderName);
        if (images.length === 0) return null;

        // Create project anchor from display name
        const projectAnchor = project.displayName.toLowerCase()
          .replace(/['"]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');

        return (
          <div key={project.folderName} className="mb-24" id={projectAnchor}>
            {/* Project Title and Info */}
            <div className="mb-12 p-8 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl">
              <h3 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                {project.displayName}
              </h3>
              
              {project.client && (
                <div className="text-lg text-text-light/70 dark:text-text-dark/70 mb-4">
                  Client: {project.client}
                </div>
              )}
              
              {project.description && (
                <div className="text-lg text-text-light/80 dark:text-text-dark/80 mb-6 max-w-5xl leading-relaxed">
                  {project.description}
                </div>
              )}
              
              {project.skills && project.skills.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 mb-2">
                    Skills & Techniques:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 text-xs bg-white/40 dark:bg-white/10 text-text-light dark:text-text-dark rounded-full border border-white/30 dark:border-white/20 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Images */}
            <ProjectImageGrid 
              images={images} 
              projectName={project.folderName}
              projectIndex={startIndex + projectIndex}
              setLightbox={setLightbox}
            />
          </div>
        );
      })}
    </>
  );
}

export default function ArtFabrication2Page() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Lightbox modal state
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => setMounted(true), []);

  // Close modal on Escape key
  useEffect(() => {
    if (!lightbox) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-[#0f172a] text-text-light dark:text-text-dark relative overflow-hidden flex flex-col">
      {/* Light mode daytime sky background */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          background: 'linear-gradient(to bottom, #b6d6f9 0%, #eaf6ff 100%)',
          opacity: 1,
        }}
      />
      {/* Sun glow (light mode only) */}
      <div
        className="absolute top-[-10vw] left-[-10vw] w-[40vw] h-[40vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #fffbe6 0%, #ffe9a7 40%, transparent 80%)',
          opacity: 0.45,
          filter: 'blur(30px)',
        }}
      />
      {/* Clouds (light mode only) */}
      <div
        className="absolute top-[20%] left-[10%] w-[30vw] h-[10vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #fff 60%, #eaf6ff 100%)',
          opacity: 0.7,
          filter: 'blur(24px)',
        }}
      />
      <div
        className="absolute top-[35%] left-[50%] w-[40vw] h-[12vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #fff 60%, #b6d6f9 100%)',
          opacity: 0.5,
          filter: 'blur(32px)',
        }}
      />
      <div
        className="absolute bottom-[15%] left-[30%] w-[35vw] h-[10vw] rounded-full dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #fff 60%, #eaf6ff 100%)',
          opacity: 0.6,
          filter: 'blur(28px)',
        }}
      />
      
      {/* Base gradient layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.3), rgba(173, 216, 230, 0.3), rgba(221, 160, 221, 0.3))',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      
      {/* Pink light leak from top right */}
      <div 
        className="absolute top-0 right-0 w-[20vw] h-[20vw]"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.3), transparent 70%)',
          transform: 'translate(10%, -10%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      
      {/* Blue light leak from bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-[20vw] h-[20vw]"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.3), transparent 70%)',
          transform: 'translate(-10%, 10%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />
      
      {/* Purple light leak from center */}
      <div 
        className="absolute top-1/2 left-1/2 w-[25vw] h-[25vw]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(221, 160, 221, 0.22), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          filter: 'blur(6px)'
        }}
      />

      {/* Floating Theme Toggle */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50">
        <ThemeToggle className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50" />
      </div>

      {/* Main Content */}
      <main className="relative z-20 flex-1">
        {/* Header Section */}
        <div className="max-w-[100rem] mx-auto px-3 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <span className="text-sm sm:text-base text-text-light dark:text-text-dark mb-2 block">Portfolio</span>
            <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-tight mb-4 sm:mb-6 md:mb-8">
              Fab Lab
            </h1>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl leading-relaxed mb-8">
              In addition to crafting bespoke digital experiences, I also work as an art fabricator 
              for various studios in the Bay Area. This collection showcases my hands-on work at 
              Local Language on 25th Street in Oakland, CA, where I've contributed to diverse 
              custom installations and artistic pieces.
            </p>

            {/* Contact & Education Info */}
            <div className="bg-white/50 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-xl shadow-lg p-8 max-w-6xl">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full"></div>
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                      Contact Information
                    </h3>
                  </div>
                  <div className="space-y-3 pl-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-text-light/60 dark:text-text-dark/60" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <a 
                        href="mailto:christinamday@gmail.com" 
                        className="text-text-light/80 dark:text-text-dark/80 hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium"
                      >
                        christinamday@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-text-light/60 dark:text-text-dark/60" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-text-light/80 dark:text-text-dark/80 font-medium">Oakland, CA</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full"></div>
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                      Educational Background
                    </h3>
                  </div>
                  <div className="space-y-4 pl-4">
                    <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                      <div className="font-medium text-text-light dark:text-text-dark">Bachelor of Fine Arts</div>
                      <div className="text-text-light/70 dark:text-text-dark/70">Studio Art</div>
                      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mt-1">University of North Texas</div>
                    </div>
                    <div className="border-l-2 border-accent-light/30 dark:border-accent-dark/30 pl-4">
                      <div className="font-medium text-text-light dark:text-text-dark">Bachelor of Fine Arts</div>
                      <div className="text-text-light/70 dark:text-text-dark/70">New/Interactive Media</div>
                      <div className="text-sm text-text-light/60 dark:text-text-dark/60 mt-1">University of North Texas</div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="xl:col-span-1 lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full"></div>
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                      Fabrication Skills
                    </h3>
                  </div>
                  <div className="pl-4 space-y-3">
                    {/* Core Skills */}
                    <div>
                      <h4 className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 mb-2">Core Fabrication</h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Metalworking</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Woodworking</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Welding</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Assembly</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Installation</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Custom Hardware</span>
                      </div>
                    </div>
                    
                    {/* Finishing */}
                    <div>
                      <h4 className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 mb-2">Surface & Finishing</h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Airbrushing</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Paint Application</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Surface Prep</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Fine Finishing</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Clear Coating</span>
                      </div>
                    </div>

                    {/* Specialized */}
                    <div>
                      <h4 className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 mb-2">Specialized Techniques</h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Cold Steel Forming</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Hand Forging</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Paper Work</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Textile Steaming</span>
                        <span className="px-2.5 py-1 bg-gradient-to-r from-accent-light/20 to-accent-light/10 dark:from-accent-dark/20 dark:to-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded-full text-xs font-medium">Electrical Wiring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Layout */}
        <div className="max-w-[100rem] mx-auto px-3 sm:px-6 md:px-12 lg:px-20">
          {/* Unified Projects Section - no heading, just list all projects */}
          {renderProjectSection(allProjects, "", 0, setLightbox)}
          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <div className="mt-16 sm:mt-24 md:mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-12 sm:pt-18 md:pt-24">
              {renderProjectSection(otherProjects, "Additional Projects", allProjects.length + processProjects.length)}
            </div>
          )}
        </div>

        {/* Process Gallery Section */}
        <div className="mt-16 sm:mt-24 md:mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-12 sm:pt-18 md:pt-24 pb-0 bg-surface-light/20 dark:bg-surface-dark/10 -mx-3 sm:-mx-6 md:-mx-12 lg:-mx-20 px-3 sm:px-6 md:px-12 lg:px-20" id="process-gallery-images">
          <div className="max-w-[100rem] mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-4 sm:mb-6 md:mb-8">
                Process Gallery
              </h2>
              <p className="text-base sm:text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl leading-relaxed">
                A documentation of various fabrication processes, techniques, and studio work from my time at Local Language. This section primarily features work created by other fabricators in the studio, showcasing the diverse range of techniques and projects I was exposed to during my time there. While a few images may include my own contributions, the majority represent the skilled work of my colleagues and the broader fabrication environment I learned within.
              </p>
            </div>

            {/* Process Images Grid */}
            <ProcessImageGrid setLightbox={setLightbox} />
            <div className="pb-12 sm:pb-18 md:pb-24"></div>
          </div>
        </div>

        {/* Shop and Studio Section */}
        <div className="border-t border-text-light/20 dark:border-text-dark/20 pt-12 sm:pt-18 md:pt-24 pb-0 bg-surface-light/30 dark:bg-surface-dark/15 -mx-3 sm:-mx-6 md:-mx-12 lg:-mx-20 px-3 sm:px-6 md:px-12 lg:px-20" id="shop-and-studio">
          <div className="max-w-[100rem] mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-4 sm:mb-6 md:mb-8">
                Shop and Studio
              </h2>
              <p className="text-base sm:text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl leading-relaxed">
                Behind-the-scenes documentation of fabrication processes and workspace organization within the art production environment, revealing the methodology behind creative work.
              </p>
            </div>

            {/* Shop and Studio Images Grid */}
            <ShopAndStudioGrid setLightbox={setLightbox} />
            <div className="pb-12 sm:pb-18 md:pb-24"></div>
          </div>
        </div>

        {/* Crating and Shipping Section */}
        <div className="border-t border-text-light/20 dark:border-text-dark/20 pt-12 sm:pt-18 md:pt-24 pb-0 bg-surface-light/25 dark:bg-surface-dark/12 -mx-3 sm:-mx-6 md:-mx-12 lg:-mx-20 px-3 sm:px-6 md:px-12 lg:px-20" id="crating-and-shipping">
          <div className="max-w-[100rem] mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-4 sm:mb-6 md:mb-8">
                Crating and Shipping
              </h2>
              <p className="text-base sm:text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl leading-relaxed">
                Professional art handling services including custom crating design and secure shipping preparation, ensuring the safe transport of valuable artworks and installations.
              </p>
            </div>

            {/* Crating and Shipping Images Grid */}
            <CratingAndShippingGrid setLightbox={setLightbox} />
            <div className="pb-12 sm:pb-18 md:pb-24"></div>
          </div>
        </div>

        {/* Neighborhood Section - moved to bottom */}
        <div className="border-t border-text-light/20 dark:border-text-dark/20 pt-12 sm:pt-18 md:pt-24 pb-16 sm:pb-20 md:pb-24 bg-surface-light/35 dark:bg-surface-dark/18 -mx-3 sm:-mx-6 md:-mx-12 lg:-mx-20 px-3 sm:px-6 md:px-12 lg:px-20" id="neighborhood">
          <div className="max-w-[100rem] mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-4 sm:mb-6 md:mb-8">
                Neighborhood
              </h2>
              <p className="text-base sm:text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl leading-relaxed">
                Community-themed artwork exploring urban landscapes and architectural forms that define residential environments, investigating how built spaces shape community identity.
              </p>
            </div>

            {/* Neighborhood Images Grid */}
            <NeighborhoodGrid setLightbox={setLightbox} />
          </div>
        </div>
      </main>
      
      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
            onClick={e => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close image preview"
            tabIndex={0}
          >
            ×
          </button>
          <div className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-auto h-auto max-h-[80vh] max-w-full rounded-lg shadow-2xl border-2 border-white"
              style={{ background: '#222' }}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
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
  const shopImages = getFabProjectImages('Shop-and-Studio');

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
        const src = getImagePath('Shop-and-Studio', imageName);
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
  const cratingImages = getFabProjectImages('Crating-and-Shipping');

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
        const src = getImagePath('Crating-and-Shipping', imageName);
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