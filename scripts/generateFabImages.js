const fs = require('fs');
const path = require('path');

const fabLabDir = 'public/images/fab-lab';
const projects = {};

// Read all project directories
const projectDirs = fs.readdirSync(fabLabDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

projectDirs.forEach(projectDir => {
  const projectPath = path.join(fabLabDir, projectDir);
  const files = fs.readdirSync(projectPath)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .sort();  // Sort alphabetically
  
  projects[projectDir] = files;
});

// Generate TypeScript content for the fabImages utility
const tsContent = `// Auto-generated fab lab project images
// Generated on ${new Date().toISOString()}

export interface FabProject {
  name: string;
  images: string[];
}

export const fabProjectImages: Record<string, string[]> = ${JSON.stringify(projects, null, 2)};

export const getFabProjectImages = (projectName: string): string[] => {
  return fabProjectImages[projectName] || [];
};

// Format project name for URL paths
export const formatProjectPath = (projectName: string): string => {
  return projectName.replace(/\\s+/g, '%20'); // URL encode spaces
};

export const getImagePath = (projectName: string, imageName: string): string => {
  return \`/images/fab-lab/\${projectName}/\${imageName}\`;
};
`;

// Write the generated TypeScript file
fs.writeFileSync('src/utils/fabImages.ts', tsContent);

console.log('Generated fabImages.ts with', Object.keys(projects).length, 'projects');
console.log('Projects:', Object.keys(projects).join(', ')); 