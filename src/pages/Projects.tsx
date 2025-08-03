import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get all unique tags across all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on search query and selected tag
  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch = searchQuery === "" 
        || project.title.toLowerCase().includes(searchQuery.toLowerCase())
        || project.description.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesTag = selectedTag === null 
        || project.tags.includes(selectedTag);
        
      return matchesSearch && matchesTag;
    });
    
    setFilteredProjects(filtered);
  }, [searchQuery, selectedTag]);

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, personal projects, and contributions.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <div className="w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <Badge 
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/800x450?text=${project.title.replace(/\s/g, '+')}`;
                        }}
                      />
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                        </h3>
                        {project.featured && (
                          <Badge variant="secondary">Featured</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-between">
                      {project.liveUrl && (
                        <Button size="sm" variant="default" asChild>
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" /> 
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" /> 
                            Source Code
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}