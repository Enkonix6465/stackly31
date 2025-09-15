import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";

const picks = [
  {
    id: "1",
    title: "The Future of Work with AI Tools: How Technology is Redefining Productivity",
    author: "Priya Mehta",
    readTime: "7 min read",
    image: healthcareImg,
    intro: "AI tools are rapidly changing the way we work, making teams more productive, collaborative, and innovative. From automating repetitive tasks to enabling smarter decision-making, AI is at the heart of the modern workplace transformation.",
    sections: [
      {
        heading: "How AI is Transforming Work",
        content: [
          "Automating routine tasks to free up time for creative work",
          "Enhancing collaboration with smart assistants and chatbots",
          "Improving project management through predictive analytics",
          "Personalizing workflows for individual productivity",
          "Enabling remote work with intelligent tools"
        ]
      },
      {
        heading: "Benefits for Teams & Businesses",
        content: [
          "Faster decision-making with real-time insights",
          "Reduced operational costs",
          "Greater employee satisfaction and engagement",
          "Scalable solutions for growing businesses",
          "Competitive advantage in a digital economy"
        ]
      },
      {
        heading: "Challenges & Opportunities",
        content: [
          "Adapting to new technologies and workflows",
          "Ensuring data privacy and security",
          "Upskilling employees for AI-powered roles",
          "Balancing automation with human creativity"
        ]
      }
    ],
    quote: {
      text: "AI is not just a tool—it’s a catalyst for a new era of productivity and innovation.",
      author: "Priya Mehta"
    },
    conclusion: "Embracing AI in the workplace means unlocking new levels of efficiency, creativity, and growth. The future of work is here, and it’s powered by intelligent technology."
  },
  {
    id: "2",
    title: "Why Every Business Needs AI Chatbots & Virtual Assistants in 2025",
    author: "Alex Rodriguez",
    readTime: "6 min read",
    image: businessImg,
    intro: "AI chatbots and virtual assistants are now essential for businesses looking to deliver fast, personalized customer service and streamline operations. In 2025, these tools are driving growth, efficiency, and customer satisfaction across industries.",
    sections: [
      {
        heading: "Business Benefits of AI Chatbots",
        content: [
          "24/7 customer support with instant responses",
          "Automated handling of common queries and tasks",
          "Personalized recommendations and upselling",
          "Seamless integration with CRM and support systems",
          "Scalable solutions for businesses of all sizes"
        ]
      },
      {
        heading: "How Virtual Assistants Improve Operations",
        content: [
          "Automating appointment scheduling and reminders",
          "Managing internal communications and workflows",
          "Providing real-time analytics and insights",
          "Reducing manual workload for staff"
        ]
      },
      {
        heading: "Implementation Tips",
        content: [
          "Choose AI tools that integrate with your existing systems",
          "Train your chatbot with real customer data",
          "Monitor performance and continuously improve responses",
          "Ensure privacy and compliance with regulations"
        ]
      }
    ],
    quote: {
      text: "AI chatbots are the new frontline for customer engagement and business efficiency.",
      author: "Alex Rodriguez"
    },
    conclusion: "Businesses that adopt AI chatbots and virtual assistants will lead in customer satisfaction, operational efficiency, and innovation. The future is conversational, and it’s powered by AI."
  },
  {
    id: "3",
    title: "Top 5 AI Tools Every Creator Should Try This Year",
    author: "Maria Johnson",
    readTime: "7 min read",
    image: openSourceImg,
    intro: "Creators are leveraging AI tools to boost creativity, streamline workflows, and produce high-quality content faster than ever. Here are the top 5 AI tools every creator should explore in 2025.",
    sections: [
      {
        heading: "Must-Try AI Tools",
        content: [
          "1. ChatGPT: Generate ideas, write scripts, and brainstorm content",
          "2. DALL·E: Create stunning visuals from text prompts",
          "3. Descript: Edit audio and video with AI-powered features",
          "4. Jasper: Write blog posts, ads, and social media content",
          "5. RunwayML: Add special effects and automate video editing"
        ]
      },
      {
        heading: "How These Tools Help Creators",
        content: [
          "Save time on editing and production",
          "Unlock new creative possibilities",
          "Collaborate more easily with teams",
          "Produce professional-quality content with less effort"
        ]
      },
      {
        heading: "Tips for Getting Started",
        content: [
          "Experiment with free versions before upgrading",
          "Join online communities for support and inspiration",
          "Combine multiple AI tools for best results",
          "Stay updated on new features and trends"
        ]
      }
    ],
    quote: {
      text: "AI tools are the secret weapon for creators who want to work smarter, not harder.",
      author: "Maria Johnson"
    },
    conclusion: "Whether you’re a writer, designer, or video producer, AI tools can help you create more, faster, and better. The future of content creation is intelligent, and it’s here now."
  }
];

const EditorPickDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const pick = picks.find((p) => p.id === id) || picks[0];

  return (
    <section className={`w-screen min-h-screen p-0 m-0 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
      {/* Header with back button */}
      <div className="w-full py-6 px-6">
        <Link
          to="/blog"
          className={`font-bold text-lg hover:underline transition px-4 py-2 rounded-lg inline-block bg-clip-text text-transparent ${theme === 'dark' ? '' : ''}`}
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Centered small image */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-2xl px-4">
          <img
            src={pick.image}
            loading="lazy"
            alt={pick.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Title and author info */}
      <div className="w-full text-center mb-12 px-4">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{pick.title}</h1>
        <div
          className="flex items-center justify-center gap-4 text-lg bg-clip-text text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          <span>By {pick.author}</span>
          <span>•</span>
          <span>{pick.readTime}</span>
        </div>
      </div>

      {/* Full-width content */}
      <div className="w-screen min-h-[55vh] py-12 px-4 md:px-24">
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
            }}
          >
            Introduction
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.intro}</p>
        </section>
        {pick.sections.map((section, idx) => (
          <section className="mb-10" key={idx}>
            <h2
              className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              {section.heading}
            </h2>
            <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
            }}
          >
            Expert Quote
          </h2>
          <blockquote className={`border-l-4 pl-4 italic ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}
            style={{ borderLeft: '4px solid', borderImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1' }}>
            "{pick.quote.text}"<br />
            <span
              className="font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              — {pick.quote.author}
            </span>
          </blockquote>
        </section>
        <section>
          <h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
            }}
          >
            Conclusion
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.conclusion}</p>
        </section>
      </div>
    </section>
  );
};

export default EditorPickDetails;