import { motion } from "framer-motion";
import { personalInfo, skills, education, experience } from "@/data/portfolio-data";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, skills, and experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="aspect-square relative overflow-hidden ">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-[250px] h-[350px] md:w-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/500x500?text=Profile+Photo";
                  }}
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
                <p className="text-primary">{personalInfo.title}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Email:</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {personalInfo.resumeUrl && (
                  <div className="mt-6">
                    <a
                      href={personalInfo.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Download Resume
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h2 className="text-3xl font-bold mb-6">Biography</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="mb-4">{personalInfo.longBio}</p>
                <p>
                  I am passionate about creating applications that are not only functional but also
                  provide an excellent user experience. My approach to development involves understanding
                  the user needs first and then crafting solutions that meet those needs in the most
                  efficient way possible.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading about new technologies, or
                  contributing to open source projects. I'm always open to new opportunities and
                  collaborations, so feel free to reach out!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and competencies.
            </p>
          </motion.div>

          <Tabs defaultValue={skillCategories[0]} className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Education & Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold">{item.degree}</h4>
                          <Badge variant="outline" className="ml-2">
                            {item.startDate} - {item.endDate}
                          </Badge>
                        </div>
                        <p className="text-primary mb-2">{item.institution}</p>
                        <p className="text-sm text-muted-foreground mb-4">{item.location}</p>
                        {item.description && (
                          <p className="text-sm">{item.description}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Experience</h3>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold">{item.title}</h4>
                          <Badge variant="outline" className="ml-2">
                            {item.startDate} - {item.endDate}
                          </Badge>
                        </div>
                        <p className="text-primary mb-2">{item.company}</p>
                        <p className="text-sm text-muted-foreground mb-4">{item.location}</p>
                        <p className="text-sm mb-4">{item.description}</p>
                        {item.skills && (
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}