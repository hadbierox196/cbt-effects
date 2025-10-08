import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResearchApp = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const bubbleData = [
    { name: 'Depression/Anxiety', studies: 6, effect: 85, consistency: 'High' },
    { name: 'Fatigue', studies: 2, effect: 90, consistency: 'High' },
    { name: 'Quality of Life', studies: 3, effect: 75, consistency: 'Moderate' },
    { name: 'Pain', studies: 1, effect: 50, consistency: 'Low' },
    { name: 'Biological', studies: 3, effect: 95, consistency: 'High' }
  ];

  const radialData = [
    { domain: 'Depression/Anxiety', value: 100, fill: '#FF69B4' },
    { domain: 'Fatigue', value: 100, fill: '#E75480' },
    { domain: 'QoL', value: 75, fill: '#FFB6C1' },
    { domain: 'Pain', value: 50, fill: '#E6E6FA' },
    { domain: 'Biological', value: 100, fill: '#FF1493' }
  ];

  const nightingaleData = [
    { category: 'Depression', value: 6, fill: '#FF69B4' },
    { category: 'Fatigue', value: 2, fill: '#E75480' },
    { category: 'QoL', value: 3, fill: '#FFB6C1' },
    { category: 'Pain', value: 1, fill: '#E6E6FA' },
    { category: 'Biological', value: 3, fill: '#FF1493' }
  ];

  const triviaQuestions = [
    {
      question: "During which phase of breast cancer care is psychological distress often highest — diagnosis, survivorship, or active treatment (e.g., chemo, surgery, radiotherapy)?",
      answer: "Active treatment.",
      note: "Anxiety and depression peak when patients are undergoing treatments like chemotherapy or surgery, making mental health support vital during this time."
    },
    {
      question: "What type of therapy has been shown to reduce depression, anxiety, and distress in women receiving active breast cancer treatment?",
      answer: "Cognitive Behavioral Therapy (CBT).",
      note: "CBT helps patients manage fear, stress, and negative thoughts, improving both emotional wellbeing and treatment adherence."
    },
    {
      question: "In one study, CBT combined with activity pacing significantly reduced what common symptom among chemotherapy patients?",
      answer: "Fatigue.",
      note: "Fatigue is one of the most draining side effects of chemotherapy — structured CBT programs can help patients maintain energy and daily functioning."
    },
    {
      question: "True or False: CBT has no measurable effect on the body's stress-related biological markers like cortisol or inflammation.",
      answer: "False.",
      note: "CBT has been shown to reduce cortisol, IL-6, and NF-κB, meaning it not only calms the mind but may also support the body's immune and stress systems."
    },
    {
      question: "What kind of CBT program was especially effective in improving quality of life — self-guided, nurse-led, or post-treatment only?",
      answer: "Nurse-led CBT programs.",
      note: "When nurses guide CBT sessions during radiotherapy or chemotherapy, patients experience better fatigue management and improved quality of life."
    }
  ];

  const toggleCard = (index) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const nextSection = () => {
    if (currentSection < 2) setCurrentSection(currentSection + 1);
  };

  const prevSection = () => {
    if (currentSection > 0) setCurrentSection(currentSection - 1);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ fontFamily: 'Lato, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Lato:wght@400&family=Playfair+Display:ital@1&display=swap');
        
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          padding: 20px;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Navigation Dots */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {[0, 1, 2].map(i => (
          <button
            key={i}
            onClick={() => setCurrentSection(i)}
            className="w-3 h-3 rounded-full transition-all"
            style={{ backgroundColor: currentSection === i ? '#FF69B4' : '#E6E6FA' }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
        {currentSection > 0 && (
          <button onClick={prevSection} className="p-2 rounded-full bg-white shadow-lg hover:bg-pink-50 transition">
            <ChevronLeft size={24} color="#FF69B4" />
          </button>
        )}
      </div>
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {currentSection < 2 && (
          <button onClick={nextSection} className="p-2 rounded-full bg-white shadow-lg hover:bg-pink-50 transition">
            <ChevronRight size={24} color="#FF69B4" />
          </button>
        )}
      </div>

      {/* Sections Container */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSection * 100}%)` }}
      >
        {/* Section 1: Overview */}
        <div className="min-w-full min-h-screen flex items-center p-6 md:p-12" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC0CB 100%)' }}>
          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Woman Silhouette */}
            <div className="flex justify-center">
              <svg width="250" height="350" viewBox="0 0 250 350" className="drop-shadow-lg">
                <defs>
                  <pattern id="flowerPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="8" fill="#FF69B4" opacity="0.6"/>
                    <circle cx="35" cy="35" r="6" fill="#E75480" opacity="0.6"/>
                    <circle cx="25" cy="5" r="5" fill="#FFB6C1" opacity="0.6"/>
                  </pattern>
                </defs>
                <ellipse cx="125" cy="80" rx="50" ry="60" fill="url(#flowerPattern)"/>
                <path d="M 125 140 Q 100 200 90 280 L 90 340" stroke="#FF69B4" strokeWidth="35" fill="none" strokeLinecap="round"/>
                <path d="M 125 140 Q 150 200 160 280 L 160 340" stroke="#FF69B4" strokeWidth="35" fill="none" strokeLinecap="round"/>
                <ellipse cx="125" cy="160" rx="60" ry="70" fill="url(#flowerPattern)"/>
                <path d="M 75 170 Q 50 200 40 240" stroke="#FF69B4" strokeWidth="25" fill="none" strokeLinecap="round"/>
                <path d="M 175 170 Q 200 200 210 240" stroke="#FF69B4" strokeWidth="25" fill="none" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {['Anxiety', 'Depression', 'Distress', 'Psychological Problems'].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  style={{ 
                    background: 'white',
                    border: '2px solid #E6E6FA'
                  }}
                >
                  <h3 className="text-xl font-bold text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#FF69B4' }}>
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Data Visualization */}
        <div className="min-w-full min-h-screen p-6 md:p-12 overflow-y-auto" style={{ backgroundColor: '#FFF5F7' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif', color: '#FF69B4' }}>
            Research Insights
          </h1>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Bubble Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '2px solid #E6E6FA' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#E75480' }}>
                Treatment Effectiveness
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bubbleData}>
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} style={{ fontSize: '12px', fill: '#4A4A4A' }} />
                  <YAxis style={{ fontSize: '12px', fill: '#4A4A4A' }} />
                  <Tooltip />
                  <Bar dataKey="effect" fill="#FF69B4" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Radial Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '2px solid #E6E6FA' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#E75480' }}>
                Improvement Rates by Domain
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart innerRadius="10%" outerRadius="90%" data={radialData} startAngle={90} endAngle={-270}>
                  <RadialBar minAngle={15} background clockWise dataKey="value" />
                  <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '12px' }} />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>

            {/* Nightingale Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '2px solid #E6E6FA' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#E75480' }}>
                Study Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={nightingaleData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={(entry) => entry.category}
                  >
                    {nightingaleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Section 3: Trivia Quiz */}
        <div className="min-w-full min-h-screen p-6 md:p-12 overflow-y-auto" style={{ background: 'linear-gradient(135deg, #FFC0CB 0%, #FFFFFF 100%)' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif', color: '#FF69B4' }}>
            Awareness Quiz
          </h1>
          <p className="text-center mb-8" style={{ color: '#4A4A4A', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
            Tap each card to reveal the answer
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {triviaQuestions.map((q, idx) => (
              <div 
                key={idx}
                className={`flip-card ${flippedCards[idx] ? 'flipped' : ''}`}
                onClick={() => toggleCard(idx)}
                style={{ height: '250px' }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white shadow-lg flex items-center justify-center" style={{ border: '3px solid #FF69B4' }}>
                    <div className="p-6">
                      <div className="text-2xl font-bold mb-4" style={{ color: '#FF69B4', fontFamily: 'Poppins, sans-serif' }}>
                        Question {idx + 1}
                      </div>
                      <p style={{ color: '#4A4A4A', fontSize: '16px', lineHeight: '1.6' }}>{q.question}</p>
                    </div>
                  </div>
                  <div className="flip-card-back shadow-lg flex flex-col justify-center" style={{ backgroundColor: '#FF69B4', color: 'white' }}>
                    <div className="p-6">
                      <div className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Answer: {q.answer}
                      </div>
                      <div className="text-2xl mb-2">🩷</div>
                      <p style={{ fontSize: '14px', lineHeight: '1.5', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
                        {q.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchApp;
