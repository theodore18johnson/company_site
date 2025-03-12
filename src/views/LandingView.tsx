import { Link } from "react-router-dom";
import VideoCarousel from "../components/common/VideoCarousel";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { useWallet } from "../contexts/WalletContext";

type VideoSlide = {
  id: number;
  videoSrc: string;
  title: string;
  description: string;
  thumbnail: string;
};

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type Race = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  habitat: string;
  habitatIcon: React.ReactNode;
  strengths: {
    name: string;
    icon: React.ReactNode;
    description?: string;
  }[];
};

type LandingViewProps = {
  videoSlides: VideoSlide[];
  features: Feature[];
  races: Race[];
};

const LandingView = ({ videoSlides, features, races }: LandingViewProps) => {
  const { account } = useWallet();

  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      case "users":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case "coin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "globe":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Carousel */}
      <section className="relative">
        <VideoCarousel slides={videoSlides} />
        <motion.div
          className="absolute bottom-32 left-0 right-0 z-30 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/presale">
            <Button size="lg" className="shadow-xl">
              Join Token Presale
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
              variants={fadeInUp}
            >
              Game Features
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              KingOverRoad redefines the MMORPG experience with cutting-edge
              technology and immersive gameplay.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl border border-primary-500/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="text-primary-400 mb-4"
                  whileHover={{ rotate: 5 }}
                >
                  {renderIcon(feature.icon)}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Races Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
              variants={fadeInUp}
            >
              Choose Your Race
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Each race offers unique abilities, cultures, and gameplay
              experiences.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {races.map((race, index) => {
              // Define race-specific color schemes
              let gradientColors = "from-primary-600 to-blue-500";
              let borderColor = "border-primary-500/20";
              let hoverBorderColor = "hover:border-primary-500/50";
              let badgeBg = "bg-primary-900/50";
              let badgeText = "text-primary-300";
              let strengthIconColor = "text-primary-400";
              let strengthBg = "bg-primary-900/30";

              // Set race-specific colors based on race name
              if (race.name === "Humans") {
                gradientColors = "from-primary-600 to-primary-400";
                borderColor = "border-primary-500/20";
                hoverBorderColor = "hover:border-primary-500/50";
                badgeBg = "bg-primary-900/50";
                badgeText = "text-primary-300";
                strengthIconColor = "text-primary-400";
                strengthBg = "bg-primary-900/30";
              } else if (race.name === "Orcs") {
                gradientColors = "from-green-900 to-green-700";
                borderColor = "border-green-800/20";
                hoverBorderColor = "hover:border-green-800/50";
                badgeBg = "bg-green-900/50";
                badgeText = "text-green-300";
                strengthIconColor = "text-green-400";
                strengthBg = "bg-green-900/30";
              } else if (race.name === "Elves") {
                gradientColors = "from-green-500 to-white";
                borderColor = "border-green-400/20";
                hoverBorderColor = "hover:border-green-400/50";
                badgeBg = "bg-green-700/50";
                badgeText = "text-green-200";
                strengthIconColor = "text-green-300";
                strengthBg = "bg-green-700/30";
              } else if (race.name === "Dwarves") {
                gradientColors = "from-amber-700 to-gray-400";
                borderColor = "border-amber-600/20";
                hoverBorderColor = "hover:border-amber-600/50";
                badgeBg = "bg-amber-800/50";
                badgeText = "text-amber-200";
                strengthIconColor = "text-amber-500";
                strengthBg = "bg-amber-800/30";
              }

              return (
                <motion.div
                  key={race.id}
                  className="relative"
                  variants={fadeInUp}
                >
                  {/* Decorative accent line */}
                  <div
                    className={`absolute top-1/2 ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    } w-1/3 h-px bg-gradient-to-${
                      index % 2 === 0 ? "l" : "r"
                    } from-transparent to-${
                      race.name === "Humans"
                        ? "primary"
                        : race.name === "Orcs"
                        ? "green"
                        : race.name === "Elves"
                        ? "green"
                        : race.name === "Dwarves"
                        ? "amber"
                        : "primary"
                    }-500/50`}
                  ></div>

                  <div
                    className={`flex h-full flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 items-center`}
                  >
                    {/* Image container with enhanced styling */}
                    <motion.div
                      className="w-full min-h-max md:w-1/2 relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${gradientColors} rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000`}
                      ></div>
                      <div className="relative h-full rounded-xl overflow-hidden">
                        <img
                          src={race.imageSrc}
                          alt={`${race.name} race`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Race name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg" style={{fontFamily: "cinzel decorative"}}>
                            {race.name}
                          </h3>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content container */}
                    <motion.div
                      className={`w-full md:w-1/2 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border ${borderColor}`}
                      whileHover={{
                        boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      <div className="mb-6">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badgeBg} ${badgeText} mb-4`}
                        >
                          Race
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {race.description}
                        </p>
                      </div>

                      <div>
                        <h4
                          className={`text-lg font-semibold mb-4 ${strengthIconColor} flex items-center`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Racial Strengths
                        </h4>
                        <motion.ul
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                        >
                          {race.strengths.map((strength, i) => (
                            <motion.li
                              key={i}
                              className={`${strengthBg} rounded-lg px-4 py-3 text-sm flex items-center gap-3 border ${borderColor} ${hoverBorderColor} transition-all relative`}
                              variants={fadeInUp}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div
                                className={`${strengthIconColor} flex-shrink-0`}
                              >
                                {strength.icon}
                              </div>
                              <div>
                                <span className="font-semibold text-white block">
                                  {strength.name}
                                </span>
                              </div>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>

                      {/* Add Habitat Information */}
                      <div className="mt-6 flex flex-col gap-3">
                        <h4
                          className={`text-lg font-semibold ${strengthIconColor} flex items-center`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Natural Habitat
                        </h4>
                        <div
                          className={`${strengthBg} rounded-lg px-4 py-3 flex items-center gap-3 border ${borderColor} ${hoverBorderColor} transition-all`}
                        >
                          {race.habitatIcon}
                          <div className="text-gray-200">{race.habitat}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div className="absolute inset-0 bg-primary-600"></motion.div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 gradient-text"
              variants={fadeInUp}
            >
              Ready to Rule the Kingdom?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              variants={fadeInUp}
            >
              Join the KingOverRoad community today and be part of the next
              evolution in metaverse gaming.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                <Link to={account ? "/presale" : "/connect"}>
                  <Button size="lg">{account ? "Join Token Presale" : "Connect Wallet"}</Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingView;
