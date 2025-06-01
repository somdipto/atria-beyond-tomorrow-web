
import { useState } from 'react';
import { CircleCheck, Send } from 'lucide-react';
import Button from '@/components/Button';

const Speak = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    experience: '',
    bio: '',
    submitted: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this data to a server
    console.log('Form submitted:', formState);
    setFormState(prev => ({ ...prev, submitted: true }));
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        topic: '',
        experience: '',
        bio: '',
        submitted: false
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
{/* What we're looking for */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What We're Looking For</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Original Ideas</h3>
                <p className="text-gray-300">
                  We seek fresh perspectives and innovative thinking that challenges conventional wisdom and offers new insights.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Compelling Stories</h3>
                <p className="text-gray-300">
                  Personal experiences that illuminate broader truths and connect with audiences on an emotional level.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Future Vision</h3>
                <p className="text-gray-300">
                  Ideas that look beyond tomorrow and inspire us to think differently about the future of technology, society, and humanity.
                </p>
              </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                TEDxAtria IT is particularly interested in talks related to our theme "Beyond Tomorrow" that explore futuristic concepts, emerging technologies, sustainable innovations, or paradigm-shifting ideas that could transform our world.
              </p>
              <p>
                Your talk should be concise (under 15 minutes), engaging, and accessible to a broad audience. The best TED talks distill complex ideas into clear, compelling presentations that inspire action and spark conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ted-red/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Speak at TEDxAtria IT</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Have an idea worth spreading? We're looking for passionate speakers to share innovative ideas, unique perspectives, and inspiring stories at our upcoming TEDxAtria IT event.
            </p>
          </div>
        </div>
      </section>

     {/* Process */}
<section className="py-16 bg-black">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
        Speaker Selection Process
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800"></div>

        {/* Timeline items */}
        <div className="space-y-24">
          {/* Item 1 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-right pr-8">
              <h3 className="text-xl font-bold mb-2 text-white">Application Submission</h3>
              <p className="text-gray-300">
                Fill out our speaker application form with your personal information and talk proposal.
              </p>
            </div>
            <div className="z-10 bg-ted-red rounded-full h-10 w-10 flex items-center justify-center shadow-xl">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          {/* Item 2 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2"></div>
            <div className="z-10 bg-ted-red rounded-full h-10 w-10 flex items-center justify-center shadow-xl">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="md:w-1/2 text-left pl-8">
              <h3 className="text-xl font-bold mb-2 text-white">Review Process</h3>
              <p className="text-gray-300">
                Our curation team evaluates all applications based on originality, relevance, and alignment with our theme.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-right pr-8">
              <h3 className="text-xl font-bold mb-2 text-white">Interview</h3>
              <p className="text-gray-300">
                Selected candidates are invited for an interview to discuss their ideas in more detail.
              </p>
            </div>
            <div className="z-10 bg-ted-red rounded-full h-10 w-10 flex items-center justify-center shadow-xl">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          {/* Item 4*/}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2"></div>
            <div className="z-10 bg-ted-red rounded-full h-10 w-10 flex items-center justify-center shadow-xl">
              <span className="text-white font-bold">4</span>
            </div>
            <div className="md:w-1/2 text-left pl-8">
              <h3 className="text-xl font-bold mb-2 text-white">Preparation & Coaching</h3>
              <p className="text-gray-300">
                Final speakers receive guidance and coaching to refine their talks for maximum impact.
              </p>
            </div>
          </div>

          {/* Item 5*/}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-right pr-8">
              <h3 className="text-xl font-bold mb-2 text-white">Event Day</h3>
              <p className="text-gray-300">
                Share your idea on the TEDxAtria IT stage and inspire our audience.
              </p>
            </div>
            <div className="z-10 bg-ted-red rounded-full h-10 w-10 flex items-center justify-center shadow-xl">
              <span className="text-white font-bold">5</span>
            </div>
            <div className="md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* Application Form */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Apply to Speak</h2>
            <p className="text-gray-300 mb-8 text-center">
              Share your idea with us by filling out the form below
            </p>
            
            {formState.submitted ? (
              <div className="bg-ted-red/10 border border-ted-red rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CircleCheck className="text-ted-red w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You for Your Application!</h3>
                <p className="text-gray-300">
                  We've received your submission and will review it carefully. If your idea aligns with our event, we'll contact you for the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-red"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-red"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-red"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="topic" className="block mb-2 text-sm font-medium">Talk Topic/Title</label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    value={formState.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-red"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium">Speaking Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formState.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-red"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="novice">Novice (0-2 talks)</option>
                    <option value="intermediate">Intermediate (3-10 talks)</option>
                    <option value="experienced">Experienced (10+ talks)</option>
                    <option value="professional">Professional Speaker</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="bio" className="block mb-2 text-sm font-medium">Brief Bio & Talk Description</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formState.bio}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-red"
                    required
                  ></textarea>
                  <p className="text-gray-400 text-sm mt-2">Please include a brief bio and describe your talk idea in 200-300 words.</p>
                </div>
                
                <div className="text-center">
                  <Button type="submit" size="lg">
                    <Send size={16} className="mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">What makes a great TEDx talk?</h3>
                <p className="text-gray-300">
                  A great TEDx talk offers a fresh idea, tells a compelling story, and presents information in a clear, concise way. The best talks are passionate, authentic, and leave the audience with a new perspective or call to action.
                </p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">How long should my talk be?</h3>
                <p className="text-gray-300">
                  TEDx talks are typically between 8-15 minutes long. This format encourages speakers to focus on their core message and deliver it concisely.
                </p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Can I use visual aids or slides?</h3>
                <p className="text-gray-300">
                  Yes, speakers can use slides if they enhance the talk. Videos are not permitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speak;
