import { Link } from 'react-router-dom';
import VideoCarousel from '../components/common/VideoCarousel';
import Button from '../components/common/Button';

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
  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'coin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Carousel */}
      <section className="relative">
        <VideoCarousel slides={videoSlides} />
        <div className="absolute bottom-32 left-0 right-0 z-30 flex justify-center">
          <Link to="/presale">
            <Button size="lg" className="shadow-xl">
              Join Token Presale
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Game Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KingOverRoad redefines the MMORPG experience with cutting-edge technology and immersive gameplay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl border border-purple-500/20"
              >
                <div className="text-purple-400 mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Races Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Choose Your Race</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each race offers unique abilities, cultures, and gameplay experiences.
            </p>
          </div>

          <div className="space-y-24">
            {races.map((race, index) => {
              // Define race-specific color schemes
              let gradientColors = "from-purple-600 to-blue-500";
              let borderColor = "border-purple-500/20";
              let hoverBorderColor = "hover:border-purple-500/50";
              let badgeBg = "bg-purple-900/50";
              let badgeText = "text-purple-300";
              let strengthIconColor = "text-purple-400";
              let strengthBg = "bg-purple-900/30";
              let strengthHoverBg = "bg-purple-900/50";
              
              // Set race-specific colors based on race name
              if (race.name === "Humans") {
                gradientColors = "from-yellow-600 to-yellow-400";
                borderColor = "border-yellow-500/20";
                hoverBorderColor = "hover:border-yellow-500/50";
                badgeBg = "bg-yellow-900/50";
                badgeText = "text-yellow-300";
                strengthIconColor = "text-yellow-400";
                strengthBg = "bg-yellow-900/30";
                strengthHoverBg = "bg-yellow-900/50";
              } else if (race.name === "Orcs") {
                gradientColors = "from-green-900 to-green-700";
                borderColor = "border-green-800/20";
                hoverBorderColor = "hover:border-green-800/50";
                badgeBg = "bg-green-900/50";
                badgeText = "text-green-300";
                strengthIconColor = "text-green-400";
                strengthBg = "bg-green-900/30";
                strengthHoverBg = "bg-green-900/50";
              } else if (race.name === "Elves") {
                gradientColors = "from-green-500 to-white";
                borderColor = "border-green-400/20";
                hoverBorderColor = "hover:border-green-400/50";
                badgeBg = "bg-green-700/50";
                badgeText = "text-green-200";
                strengthIconColor = "text-green-300";
                strengthBg = "bg-green-700/30";
                strengthHoverBg = "bg-green-700/50";
              } else if (race.name === "Dwarves") {
                gradientColors = "from-amber-700 to-gray-400";
                borderColor = "border-amber-600/20";
                hoverBorderColor = "hover:border-amber-600/50";
                badgeBg = "bg-amber-800/50";
                badgeText = "text-amber-200";
                strengthIconColor = "text-amber-500";
                strengthBg = "bg-amber-800/30";
                strengthHoverBg = "bg-amber-800/50";
              }
              
              return (
                <div 
                  key={race.id} 
                  className="relative"
                >
                  {/* Decorative accent line */}
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-1/3 h-px bg-gradient-to-${index % 2 === 0 ? 'l' : 'r'} from-transparent to-${race.name === "Humans" ? "yellow" : race.name === "Orcs" ? "green" : race.name === "Elves" ? "green" : race.name === "Dwarves" ? "amber" : "purple"}-500/50`}></div>
                  
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    {/* Image container with enhanced styling */}
                    <div className="w-full md:w-1/2 relative group">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColors} rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000`}></div>
                      <div className="relative h-96 rounded-xl overflow-hidden">
                        <img 
                          src={race.imageSrc} 
                          alt={`${race.name} race`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Race name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{race.name}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content container */}
                    <div className={`w-full md:w-1/2 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border ${borderColor}`}>
                      <div className="mb-6">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badgeBg} ${badgeText} mb-4`}>
                          Race
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${strengthIconColor}`}>{race.name}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{race.description}</p>
                      </div>
                      
                      <div>
                        <h4 className={`text-lg font-semibold mb-4 ${strengthIconColor} flex items-center`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          Racial Strengths
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {race.strengths.map((strength, i) => (
                            <li 
                              key={i} 
                              className={`${strengthBg} rounded-lg px-4 py-3 text-sm flex items-center gap-3 border ${borderColor} ${hoverBorderColor} transition-all group relative`}
                            >
                              <div className={`${strengthIconColor} flex-shrink-0`}>
                                {strength.icon}
                              </div>
                              <div>
                                <span className="font-semibold text-white block">{strength.name}</span>
                                {strength.description && (
                                  <span className="text-gray-400 text-xs mt-1 hidden group-hover:block">
                                    {strength.description}
                                  </span>
                                )}
                              </div>
                              {strength.description && (
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${strengthHoverBg} backdrop-blur-sm rounded-lg p-3 flex items-center transition-opacity duration-300`}>
                                  <p className="text-white text-sm">{strength.description}</p>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Ready to Rule the Kingdom?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the KingOverRoad community today and be part of the next evolution in metaverse gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/presale">
                <Button size="lg">
                  Join Token Presale
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingView; 