'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const challenges = [
  {
    title: 'Executive Intensive',
    imageUrl: '/neurointensive.jpg', // Ensure this image is in your public folder
    bulletPoints: [
      'AI-powered Assessment of Team behavior',
      'Individualized Neurostyle Assessments',
      'Individualized Training Plan',
      'Targetted Microskills Training',
    ],
    hoverText: 'Unlock your team\'s creative potential and drive groundbreaking innovation.',
  },
  {
    title: 'Masterclass',
    imageUrl: '/masterclass.jpg', // Ensure this image is in your public folder
    bulletPoints: [
      'Supercharge your leadership with neuroscience',
      'Identify your neurostyle',
      'Identify the neurostyles of others',
      'Optimize performance and communication with foundational microskills',
      'Practice with peers',
    ],
    hoverText: 'Transform challenging relationships into collaborative and supportive connections.',
  },
  {
    title: 'Change Accelerator',
    imageUrl: '/accelerator.jpg', // Ensure this image is in your public folder
    bulletPoints: [
      'You are driving strategic change',
      'Key leaders are struggling to adapt',
      'Neuvero coaching targets fear, uncertainty and doubt; refines messaging to meet individual needs and sets your leaders on fire',
    ],
    hoverText: 'Discover what it takes to accelerate real change.',
  },
];

export default function Home() {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const hoverTextRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref for hover text elements

  useEffect(() => {
    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    gsap.to(buttonsRef.current[index], {
      scale: 1.05,
      y: -8, // Increased lift for a more dramatic effect
      boxShadow: '0 15px 30px rgba(0,0,0,0.3), 0 6px 12px rgba(0,0,0,0.15)', // Even more pronounced shadow
      duration: 0.4,
      ease: 'power3.out',
      zIndex: 1,
    });
    // Animate the hover text in
    gsap.to(hoverTextRefs.current[index], {
      opacity: 1,
      y: 0, // Slides up from its original position (which is below the card due to transform)
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(buttonsRef.current[index], {
      scale: 1,
      y: 0,
      boxShadow: '0 5px 15px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.05)',
      duration: 0.4,
      ease: 'power3.out',
      zIndex: 0,
    });
    // Animate the hover text out
    gsap.to(hoverTextRefs.current[index], {
      opacity: 0,
      y: '100%', // Slides back down below the card
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-800 text-white flex justify-center items-start pt-24 relative overflow-hidden">
      <style jsx>{`
        /* Define custom colors as CSS variables if needed, or use direct hex/rgb */
        :root {
          /* Specific gradients for each card */
          --gradient-executive-start: #34D399; /* Green-500 equivalent */
          --gradient-executive-end: #14B8A6;   /* Teal-600 equivalent */

          --gradient-masterclass-start: #EF4444; /* Red-500 equivalent */
          --gradient-masterclass-end: #EC4899;   /* Pink-600 equivalent */

          --gradient-accelerator-start: #8B5CF6; /* Purple-500 equivalent */
          --gradient-accelerator-end: #6366F1;   /* Indigo-600 equivalent */

          /* Very light blue matching a canvas (if you want a default or fallback) */
          --card-gradient-canvas-start: #EFF6FF; /* Blue-50 equivalent */
          --card-gradient-canvas-end: #DBEAFE;   /* Blue-100 equivalent */

          --card-text-color: #FFFFFF; /* White for card titles */
          --bullet-text-color: #E5E7EB; /* Gray-200 equivalent */
          --hover-text-color: #FFFFFF; /* White for hover text */
          --hover-link-color: #93C5FD; /* Blue-300 equivalent */
        }

        .card-button {
          width: 280px;
          min-height: 380px; /* Consistent height */
          position: relative;
          overflow: hidden;
          padding: 1.5rem; /* Equivalent to p-6 */
          border-radius: 0.5rem; /* Equivalent to rounded-lg */
          box-shadow: 0 5px 15px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.05); /* Initial subtle shadow */
          transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center; /* Center content horizontally */
          color: var(--card-text-color); /* Default text color for the button content */
          /* REMOVE or comment out the default background-image here to ensure specific classes win */
          /* background-image: linear-gradient(to bottom right, var(--card-gradient-canvas-start), var(--card-gradient-canvas-end)); */
        }

        /* Assign specific gradients using direct class names combined with .card-button for higher specificity */
        .card-button.card-executive-gradient {
            background-image: linear-gradient(to bottom right, var(--gradient-executive-start), var(--gradient-executive-end));
        }
        .card-button.card-masterclass-gradient {
            background-image: linear-gradient(to bottom right, var(--gradient-masterclass-start), var(--gradient-masterclass-end));
        }
        .card-button.card-accelerator-gradient {
            background-image: linear-gradient(to bottom right, var(--gradient-accelerator-start), var(--gradient-accelerator-end));
        }
        .card-button.card-canvas-gradient { /* New class for the light blue canvas gradient if desired */
            background-image: linear-gradient(to bottom right, var(--card-gradient-canvas-start), var(--card-gradient-canvas-end));
        }


        .card-button h3 {
          font-size: 1.5rem; /* text-2xl equivalent */
          font-weight: 600; /* font-semibold equivalent */
          margin-bottom: 0.75rem; /* mb-3 equivalent */
          color: var(--card-text-color); /* Explicitly set title color */
        }

        .card-button img {
          width: 10rem; /* w-40 equivalent */
          height: 7rem; /* h-28 equivalent */
          margin-bottom: 1rem; /* mb-4 equivalent */
          border-radius: 0.5rem; /* rounded-lg equivalent */
          object-fit: contain; /* object-contain equivalent */
          border: 4px solid var(--card-text-color); /* border-4 border-white equivalent */
        }

        .card-button ul {
          font-size: 1rem; /* text-base equivalent */
          list-style: disc;
          text-align: left;
          width: 100%;
          padding-left: 1.25rem; /* pl-5 equivalent */
          flex-grow: 1; /* flex-grow equivalent */
          color: var(--bullet-text-color); /* Explicitly set bullet text color */
        }

        .card-button ul li {
          margin-bottom: 0.25rem; /* mb-1 equivalent */
        }

        .hover-text-overlay {
          position: absolute;
          inset-inline: 0; /* Equivalent to inset-x-0 */
          bottom: 0;
          padding: 1rem; /* p-4 equivalent */
          background-color: rgba(0, 0, 0, 0.7); /* bg-black bg-opacity-70 equivalent */
          color: var(--hover-text-color); /* text-white equivalent */
          font-size: 0.875rem; /* text-sm equivalent */
          border-bottom-left-radius: 0.5rem; /* rounded-b-lg equivalent */
          border-bottom-right-radius: 0.5rem; /* rounded-b-lg equivalent */
          opacity: 0;
          transform: translateY(100%);
          pointer-events: none;
          transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
          box-shadow: 0 -5px 15px rgba(0,0,0,0.3);
          z-index: 2;
          display: flex; /* Make it a flex container */
          flex-direction: column; /* Stack children vertically */
          justify-content: center; /* Center content vertically */
          align-items: center; /* Center content horizontally */
          text-align: center; /* Ensure text is centered within the overlay */
        }

        .hover-text-overlay p {
          margin-bottom: 0.5rem; /* mb-2 equivalent */
        }

        .hover-text-overlay span {
          font-size: 0.75rem; /* text-xs equivalent */
          margin-top: 0.5rem; /* mt-2 equivalent */
          display: block; /* block equivalent */
          color: var(--hover-link-color); /* Explicitly set link color */
        }
      `}</style>

      <div className="text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold font-inter mb-4">
          AI-powered, Neuroscience-informed
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          High-bandwidth Collaboration - Creativity Unleashed - Exceptional Results         
        </p>
    
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Card 1: Executive Intensive */}
          <div className="relative group">
            <button
              ref={el => (buttonsRef.current[0] = el)}
              className="card-button card-executive-gradient" // Directly assigned class
              onClick={() => alert(`Learn more about Executive Intensive`)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <h3>{challenges[0].title}</h3>
              <img src={challenges[0].imageUrl} alt={challenges[0].title} />
              <ul>
                {challenges[0].bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div
                  ref={el => (hoverTextRefs.current[0] = el)}
                  className="hover-text-overlay"
              >
                  <p>{challenges[0].hoverText}</p>
                  <span>Click to learn more</span>
              </div>
            </button>
          </div>

          {/* Card 2: Masterclass */}
          <div className="relative group">
            <button
              ref={el => (buttonsRef.current[1] = el)}
              className="card-button card-masterclass-gradient" // Directly assigned class
              onClick={() => alert(`Learn more about Masterclass`)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <h3>{challenges[1].title}</h3>
              <img src={challenges[1].imageUrl} alt={challenges[1].title} />
              <ul>
                {challenges[1].bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div
                  ref={el => (hoverTextRefs.current[1] = el)}
                  className="hover-text-overlay"
              >
                  <p>{challenges[1].hoverText}</p>
                  <span>Click to learn more</span>
              </div>
            </button>
          </div>

          {/* Card 3: Change Accelerator */}
          <div className="relative group">
            <button
              ref={el => (buttonsRef.current[2] = el)}
              className="card-button card-accelerator-gradient" // Directly assigned class
              onClick={() => alert(`Learn more about Change Accelerator`)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <h3>{challenges[2].title}</h3>
              <img src={challenges[2].imageUrl} alt={challenges[2].title} />
              <ul>
                {challenges[2].bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div
                  ref={el => (hoverTextRefs.current[2] = el)}
                  className="hover-text-overlay"
              >
                  <p>{challenges[2].hoverText}</p>
                  <span>Click to learn more</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}