import { FaCheckCircle } from "react-icons/fa";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";

type AboutViewProps = {
  aboutData: {
    mission: {
      title: string;
      description: string;
    };
    story: {
      title: string;
      paragraphs: string[];
    };
    team: {
      id: number;
      name: string;
      role: string;
      bio: string;
      imageSrc: string;
    }[];
    roadmap: {
      id: number;
      phase: string;
      timeline: string;
      milestones: string[];
      completed: boolean;
    }[];
  };
};

const AboutView = ({ aboutData }: AboutViewProps) => {
  const { mission, story, team, roadmap } = aboutData;

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
              variants={scaleIn}
            >
              About KingOverRoad
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8" variants={fadeIn}>
              Discover the story behind the revolutionary metaverse game that's
              changing how we play, connect, and own digital assets.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              variants={scaleIn}
            >
              {mission.title}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={fadeIn}
            >
              {mission.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-primary-900/20 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              variants={scaleIn}
            >
              {story.title}
            </motion.h2>
            <motion.div className="space-y-6" variants={staggerContainer}>
              {story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-gray-300 leading-relaxed"
                  variants={fadeIn}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
              variants={scaleIn}
            >
              Our Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Meet the visionaries behind KingOverRoad who are pushing the
              boundaries of gaming technology.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20"
                variants={fadeIn}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-black to-primary-900/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
              variants={scaleIn}
            >
              Development Roadmap
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Our journey to revolutionize the metaverse gaming experience.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-600/50"></div>

              {/* Roadmap items */}
              <motion.div className="space-y-12" variants={staggerContainer}>
                {roadmap.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    className="relative"
                    variants={fadeIn}
                  >
                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline dot */}
                      <motion.div
                        className={`absolute ${
                          index % 2 === 0
                            ? " md:left-[calc(50%-24px)]"
                            : "left-0 md:left-1/2"
                        } transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-primary-600 bg-black z-10`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      ></motion.div>

                      {/* Content */}
                      <div className="md:w-1/2 pl-8 md:pl-0 md:text-right">
                        <motion.div
                          className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                            phase.completed
                              ? "border-green-500/30"
                              : "border-primary-500/20"
                          }`}
                          whileHover={{
                            y: -5,
                            boxShadow: phase.completed
                              ? "0 8px 20px -5px rgba(34, 197, 94, 0.2)"
                              : "0 8px 20px -5px rgba(124, 58, 237, 0.2)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                              phase.completed
                                ? "bg-green-900/50 text-green-400"
                                : "bg-primary-900/50 text-primary-400"
                            }`}
                          >
                            {phase.completed ? "Completed" : "In Progress"}
                          </div>
                          <h3 className="text-xl font-bold mb-1">
                            {phase.phase}
                          </h3>
                          <p className="text-gray-400 mb-4">{phase.timeline}</p>
                          <ul className="space-y-2">
                            {phase.milestones.map((milestone, i) => (
                              <li
                                key={i}
                                className="flex items-center text-nowrap"
                              >
                                {phase.completed ? (
                                  <FaCheckCircle
                                    className="text-primary-400 mr-2"
                                    size={20}
                                  />
                                ) : (
                                  <RxCrossCircled
                                    className="text-primary-400 mr-2"
                                    size={20}
                                  />
                                )}
                                <span>{milestone}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="md:w-1/2"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-primary-600"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              variants={scaleIn}
            >
              Join Our Community
            </motion.h2>
            <motion.p className="text-xl text-gray-300 mb-8" variants={fadeIn}>
              Be part of the KingOverRoad journey and help shape the future of
              this revolutionary metaverse game.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg">Join Discord</Button>
              </motion.div>
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg">
                  Follow on Twitter
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutView;
