import Button from '../components/common/Button';

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About KingOverRoad</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the story behind the revolutionary metaverse game that's changing how we play, connect, and own digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{mission.title}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{story.title}</h2>
            <div className="space-y-6">
              {story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries behind KingOverRoad who are pushing the boundaries of gaming technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl border border-purple-500/20"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Development Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to revolutionize the metaverse gaming experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-600/50"></div>
              
              {/* Roadmap items */}
              <div className="space-y-12">
                {roadmap.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-purple-600 bg-black z-10"></div>
                      
                      {/* Content */}
                      <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                        <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border ${phase.completed ? 'border-green-500/30' : 'border-purple-500/20'}`}>
                          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${phase.completed ? 'bg-green-900/50 text-green-400' : 'bg-purple-900/50 text-purple-400'}`}>
                            {phase.completed ? 'Completed' : 'In Progress'}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{phase.phase}</h3>
                          <p className="text-gray-400 mb-4">{phase.timeline}</p>
                          <ul className="space-y-2">
                            {phase.milestones.map((milestone, i) => (
                              <li key={i} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{milestone}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Empty space for alternating layout */}
                      <div className="md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Join Our Community</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the KingOverRoad journey and help shape the future of this revolutionary metaverse game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Join Discord
              </Button>
              <Button variant="outline" size="lg">
                Follow on Twitter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView; 