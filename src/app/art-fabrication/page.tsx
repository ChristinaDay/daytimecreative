'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { getFabProjectImages, getImagePath } from '../../utils/fabImages';

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
  { 
    displayName: 'Circular Wall Decor', 
    folderName: 'Circular Wall Decor',
    description: 'These geometric wall installations feature circular motifs and patterns that create dynamic visual interest through careful repetition and variation. Each piece explores how modular elements can work together to transform architectural spaces while maintaining individual character.',
    skills: ['Assembly', 'Installation', 'Mounting'],
    client: 'Hotel Business Center',
    role: 'Contributing Fabricator - Assisted with fabrication and installation under senior fabricator guidance.'
  }
];

// Process Gallery Projects - Technical/Process Images
const processProjects: FabProject[] = [
  { 
    displayName: 'Enclave Decor Samples', 
    folderName: 'Enclave Decor Samples',
    description: 'These material and finish samples were created for architectural projects to showcase various textures, colors, and treatments, allowing clients to visualize how different finishes would appear in their specific environments.',
    skills: ['Material Preparation', 'Surface Preparation', 'Fine Finishing'],
    role: 'Contributing Fabricator - Assisted with sample preparation and finishing under senior fabricator guidance.'
  },
  { 
    displayName: 'Abstract Relief Carving Panel', 
    folderName: 'Abstract Relief Carving Panel',
    description: 'These relief carvings were designed to add dimensional texture and visual interest to architectural surfaces, combining traditional carving techniques with contemporary artistic expression.',
    skills: ['Relief Carving', 'Surface Preparation', 'Fine Finishing']
  },
  { 
    displayName: 'Ceramic Metal Plates', 
    folderName: 'Ceramic Metal Plates',
    description: 'These hybrid artworks were designed to explore the intersection of ceramic and metal working techniques, creating unique surface treatments and textures.',
    skills: ['Ceramic Work', 'Metal Work', 'Mixed Media']
  },
  { 
    displayName: 'Firehose Weaving', 
    folderName: 'Firehose Weaving',
    description: 'These textile installations were created by repurposing industrial firehose materials through traditional weaving techniques, creating unexpected textures and patterns from utilitarian materials.',
    skills: ['Textile Weaving', 'Industrial Materials', 'Pattern Making']
  }
];

// Other Projects (role to be determined)
const otherProjects: FabProject[] = [
  { 
    displayName: 'Crating and Shipping', 
    folderName: 'Crating and Shipping',
    description: 'These professional art handling services were designed to include custom crating design and secure shipping preparation, ensuring the safe transport of valuable artworks and installations.',
    skills: ['Art Handling', 'Custom Crating', 'Shipping Logistics', 'Protective Packaging']
  },
  { 
    displayName: 'Neighborhood', 
    folderName: 'Neighborhood',
    description: 'This community-themed artwork was designed to explore urban landscapes and architectural forms that define residential environments, investigating how built spaces shape community identity.',
    skills: ['Urban Art', 'Community Themes', 'Architectural Forms', 'Social Commentary']
  }
];

// Helper function to render project sections
function renderProjectSection(projects: FabProject[], sectionTitle: string, startIndex: number = 0) {
  // Create section anchor from title
  const sectionAnchor = sectionTitle.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <>
      <div className="mb-16" id={sectionAnchor}>
        <h2 className="text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-4">
          {sectionTitle}
        </h2>
      </div>
      
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
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                {project.displayName}
              </h3>
              
              {project.client && (
                <div className="text-lg text-text-light/70 dark:text-text-dark/70 mb-4">
                  Client: {project.client}
                </div>
              )}
              
              {project.role && (
                <div className="text-sm text-text-light/60 dark:text-text-dark/60 italic mb-6">
                  {project.role}
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
                        className="px-3 py-1 text-xs bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full border border-accent-light/20 dark:border-accent-dark/20"
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
            />
          </div>
        );
      })}
    </>
  );
}

export default function ArtFabrication2Page() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="mb-16">
          <span className="text-base text-text-light dark:text-text-dark mb-2 block">Portfolio</span>
          <h1 className="text-left text-5xl md:text-5xl lg:text-6xl font-serif font-normal text-text-light dark:text-text-dark leading-hero mb-8">
            Fab Lab
          </h1>
          <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-4xl">
            In addition to crafting bespoke digital experiences, I also work as an art fabricator 
            for various studios in the Bay Area. This collection showcases my hands-on work at 
            Local Language on 25th Street in Oakland, CA, where I've contributed to diverse 
            custom installations and artistic pieces.
          </p>
        </div>
      </div>

      {/* Gallery Layout */}
      <div className="max-w-[100rem] mx-auto px-4 md:px-12 lg:px-20">
        {/* Featured Projects Section */}
        {renderProjectSection(featuredProjects, "Featured Projects", 0)}
        
        {/* Collaborative Projects Section */}
        <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24">
          {renderProjectSection(collaborativeProjects, "Collaborative Projects", featuredProjects.length)}
        </div>
        
        {/* Process Gallery Section */}
        <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24">
          {renderProjectSection(processProjects, "Process Gallery", featuredProjects.length + collaborativeProjects.length)}
        </div>
        
        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24">
            {renderProjectSection(otherProjects, "Additional Projects", featuredProjects.length + collaborativeProjects.length + processProjects.length)}
          </div>
        )}
      </div>

      {/* Process Gallery Section */}
      <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24" id="process-gallery-images">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-8">
            Process Gallery
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl">
            A collection of images showcasing various fabrication processes, techniques, and studio work.
          </p>
        </div>

        {/* Process Images Grid */}
        <ProcessImageGrid />
      </div>

      {/* Shop and Studio Section */}
      <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24" id="shop-and-studio">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-8">
            Shop and Studio
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl">
            Behind-the-scenes documentation of fabrication processes and workspace organization within the art production environment, revealing the methodology behind creative work.
          </p>
        </div>

        {/* Shop and Studio Images Grid */}
        <ShopAndStudioGrid />
      </div>

      {/* Crating and Shipping Section */}
      <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24" id="crating-and-shipping">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-8">
            Crating and Shipping
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl">
            Professional art handling services including custom crating design and secure shipping preparation, ensuring the safe transport of valuable artworks and installations.
          </p>
        </div>

        {/* Crating and Shipping Images Grid */}
        <CratingAndShippingGrid />
      </div>

      {/* Neighborhood Section */}
      <div className="mt-32 border-t border-text-light/20 dark:border-text-dark/20 pt-24" id="neighborhood">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-normal text-text-light dark:text-text-dark mb-8">
            Neighborhood
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-4xl">
            Community-themed artwork exploring urban landscapes and architectural forms that define residential environments, investigating how built spaces shape community identity.
          </p>
        </div>

        {/* Neighborhood Images Grid */}
        <NeighborhoodGrid />
      </div>
    </div>
  );
}

// Process Gallery Component
function ProcessImageGrid() {
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
    'Z-Gel Finishing'
  ];

  const allProcessImages: { imageName: string; folderName: string }[] = [];
  
  processImageFolders.forEach(folderName => {
    const images = getFabProjectImages(folderName);
    images.forEach(imageName => {
      allProcessImages.push({ imageName, folderName });
    });
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-min">
      {allProcessImages.map((item, index) => {
        // Golden ratio layout pattern
        const position = index % 8;
        let layout;
        
        switch (position) {
          case 0:
            layout = { span: 'col-span-2', aspect: 'aspect-[1618/1000]' };
            break;
          case 1:
          case 4:
          case 7:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
            break;
          case 2:
            layout = { span: 'col-span-1', aspect: 'aspect-[1000/1618]' };
            break;
          case 3:
            layout = { span: 'col-span-2', aspect: 'aspect-[3/2]' };
            break;
          case 5:
            layout = { span: 'col-span-2', aspect: 'aspect-square' };
            break;
          case 6:
            layout = { span: 'col-span-1', aspect: 'aspect-[1618/1000]' };
            break;
          default:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
        }

        return (
          <div 
            key={`${item.folderName}-${item.imageName}`}
            className={`relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300 ${layout.span} ${layout.aspect}`}
          >
            <Image
              src={getImagePath(item.folderName, item.imageName)}
              alt={`Process image from ${item.folderName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
            />
          </div>
        );
      })}
    </div>
  );
}

// Shop and Studio Gallery Component
function ShopAndStudioGrid() {
  const shopImages = getFabProjectImages('Shop and Studio');

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-min">
      {shopImages.map((imageName, index) => {
        // Golden ratio layout pattern
        const position = index % 8;
        let layout;
        
        switch (position) {
          case 0:
            layout = { span: 'col-span-2', aspect: 'aspect-[1618/1000]' };
            break;
          case 1:
          case 4:
          case 7:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
            break;
          case 2:
            layout = { span: 'col-span-1', aspect: 'aspect-[1000/1618]' };
            break;
          case 3:
            layout = { span: 'col-span-2', aspect: 'aspect-[3/2]' };
            break;
          case 5:
            layout = { span: 'col-span-2', aspect: 'aspect-square' };
            break;
          case 6:
            layout = { span: 'col-span-1', aspect: 'aspect-[1618/1000]' };
            break;
          default:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
        }

        return (
          <div 
            key={imageName}
            className={`relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300 ${layout.span} ${layout.aspect}`}
          >
            <Image
              src={getImagePath('Shop and Studio', imageName)}
              alt={`Shop and Studio - ${imageName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
            />
          </div>
        );
      })}
    </div>
  );
}

// Crating and Shipping Gallery Component
function CratingAndShippingGrid() {
  const cratingImages = getFabProjectImages('Crating and Shipping');

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-min">
      {cratingImages.map((imageName, index) => {
        // Golden ratio layout pattern
        const position = index % 8;
        let layout;
        
        switch (position) {
          case 0:
            layout = { span: 'col-span-2', aspect: 'aspect-[1618/1000]' };
            break;
          case 1:
          case 4:
          case 7:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
            break;
          case 2:
            layout = { span: 'col-span-1', aspect: 'aspect-[1000/1618]' };
            break;
          case 3:
            layout = { span: 'col-span-2', aspect: 'aspect-[3/2]' };
            break;
          case 5:
            layout = { span: 'col-span-2', aspect: 'aspect-square' };
            break;
          case 6:
            layout = { span: 'col-span-1', aspect: 'aspect-[1618/1000]' };
            break;
          default:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
        }

        return (
          <div 
            key={imageName}
            className={`relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300 ${layout.span} ${layout.aspect}`}
          >
            <Image
              src={getImagePath('Crating and Shipping', imageName)}
              alt={`Crating and Shipping - ${imageName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
            />
          </div>
        );
      })}
    </div>
  );
}

// Neighborhood Gallery Component
function NeighborhoodGrid() {
  const neighborhoodImages = getFabProjectImages('Neighborhood');

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-min">
      {neighborhoodImages.map((imageName, index) => {
        // Golden ratio layout pattern
        const position = index % 8;
        let layout;
        
        switch (position) {
          case 0:
            layout = { span: 'col-span-2', aspect: 'aspect-[1618/1000]' };
            break;
          case 1:
          case 4:
          case 7:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
            break;
          case 2:
            layout = { span: 'col-span-1', aspect: 'aspect-[1000/1618]' };
            break;
          case 3:
            layout = { span: 'col-span-2', aspect: 'aspect-[3/2]' };
            break;
          case 5:
            layout = { span: 'col-span-2', aspect: 'aspect-square' };
            break;
          case 6:
            layout = { span: 'col-span-1', aspect: 'aspect-[1618/1000]' };
            break;
          default:
            layout = { span: 'col-span-1', aspect: 'aspect-square' };
        }

        return (
          <div 
            key={imageName}
            className={`relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300 ${layout.span} ${layout.aspect}`}
          >
            <Image
              src={getImagePath('Neighborhood', imageName)}
              alt={`Neighborhood - ${imageName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
            />
          </div>
        );
      })}
    </div>
  );
}

function ProjectImageGrid({ images, projectName, projectIndex }: { 
  images: string[]; 
  projectName: string;
  projectIndex: number;
}) {
  // Golden ratio and Fibonacci-based layout system
  const createGoldenLayout = (imageCount: number, projectIndex: number) => {
    const layouts = [];
    const goldenRatio = 1.618;
    
    // Fibonacci sequence for layout variety: 1, 1, 2, 3, 5, 8...
    const fibonacciPattern = [1, 1, 2, 3, 5, 8];
    
    for (let i = 0; i < imageCount; i++) {
      const position = (i + projectIndex) % 8; // Cycle through 8 positions for variety
      
      let layout;
      
      switch (position) {
        case 0: // Large golden rectangle
          layout = {
            span: 'col-span-2',
            aspect: 'aspect-[1618/1000]' // Golden ratio
          };
          break;
        case 1: // Small square
          layout = {
            span: 'col-span-1',
            aspect: 'aspect-square'
          };
          break;
        case 2: // Tall golden
          layout = {
            span: 'col-span-1',
            aspect: 'aspect-[1000/1618]' // Inverse golden ratio
          };
          break;
        case 3: // Medium horizontal
          layout = {
            span: 'col-span-2',
            aspect: 'aspect-[3/2]'
          };
          break;
        case 4: // Small square
          layout = {
            span: 'col-span-1',
            aspect: 'aspect-square'
          };
          break;
        case 5: // Large square focal point
          layout = {
            span: 'col-span-2',
            aspect: 'aspect-square'
          };
          break;
        case 6: // Small golden
          layout = {
            span: 'col-span-1',
            aspect: 'aspect-[1618/1000]'
          };
          break;
        case 7: // Small square
          layout = {
            span: 'col-span-1',
            aspect: 'aspect-square'
          };
          break;
        default:
          layout = {
            span: 'col-span-1',
            aspect: 'aspect-square'
          };
      }
      
      layouts.push(layout);
    }
    
    return layouts;
  };

  const layouts = createGoldenLayout(images.length, projectIndex);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-min">
      {images.map((imageName, index) => {
        const layout = layouts[index];
        
        return (
          <div 
            key={imageName} 
            className={`relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300 ${layout.span} ${layout.aspect}`}
          >
            <Image
              src={getImagePath(projectName, imageName)}
              alt={`${projectName} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
            />
          </div>
        );
      })}
    </div>
  );
} 