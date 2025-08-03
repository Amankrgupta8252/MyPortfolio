import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Tag,
  Laptop 
} from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState(projects.find((project) => project.slug === slug));
  
  useEffect(() => {
    // If project doesn't exist, redirect to projects page
    if (!project) {
      navigate("/projects", { replace: true });
    }
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) return null;
  
  // Generate dummy description if not provided in detail
  const description = project.description || `
    <h2>Project Overview</h2>
    <p>This project was created to demonstrate my skills in web development and design. 
    It showcases my ability to create responsive, accessible, and performant web applications.</p>
    
    <h2>Technologies Used</h2>
    <ul>
      ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    
    <h2>Key Features</h2>
    <ul>
      <li>Responsive design that works on all devices</li>
      <li>Accessible UI with keyboard navigation support</li>
      <li>Fast performance and optimized load times</li>
      <li>Clean, maintainable code structure</li>
    </ul>
    
    <h2>Implementation Details</h2>
    <p>The project was implemented using modern development practices including component-based architecture, 
    state management, and responsive design principles.</p>
    
    <p>For the frontend, I used React with TypeScript for type safety and better developer experience. 
    Styling was handled with Tailwind CSS for rapid development and consistent design.</p>
    
    <pre><code>// Example code snippet
function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tech-stack">
        {project.technologies.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}</code></pre>
    
    <h2>Challenges and Solutions</h2>
    <p>One of the main challenges was optimizing the application for performance across different devices. 
    I solved this by implementing lazy loading for images and code splitting for JavaScript bundles.</p>
  `;
  
  return (
    <>
      {/* Header with image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/1200x600?text=${project.title.replace(/\s/g, '+')}`;
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>
      
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to all projects
              </Link>
            </Button>
            
            {/* Project meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Laptop className="h-4 w-4" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.demo && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Source Code
                  </a>
                </Button>
              )}
            </div>
            
            {/* Project content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            
            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto transition-transform hover:scale-105 duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/600x400?text=Screenshot+${index + 1}`;
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Call to action */}
            <div className="mt-16 py-10 border-t">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Let's discuss how I can help bring your ideas to life with professional web development services.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}