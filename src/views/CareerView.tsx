import { useState } from 'react';
import Button from '../components/common/Button';

type Benefit = {
  id: number;
  title: string;
  description: string;
};

type JobOpening = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

type CareerViewProps = {
  careerData: {
    intro: {
      title: string;
      description: string;
    };
    benefits: Benefit[];
    openings: JobOpening[];
  };
};

const CareerView = ({ careerData }: CareerViewProps) => {
  const { intro, benefits, openings } = careerData;
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJobExpand = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">{intro.title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              {intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why Work With Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a unique work environment with benefits designed for the modern professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl border border-primary-500/20"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900/20 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help shape the future of KingOverRoad.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job) => (
              <div 
                key={job.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleJobExpand(job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-primary-900/50 text-primary-400 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="bg-green-900/50 text-green-400 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedJob === job.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {expandedJob === job.id && (
                  <div className="p-6 pt-0 border-t border-gray-700 mt-4">
                    <p className="text-gray-300 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-primary-400">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-primary-400">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button>Apply Now</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Don't See a Perfect Fit?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to KingOverRoad.
            </p>
            <Button size="lg">
              Send Open Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerView; 