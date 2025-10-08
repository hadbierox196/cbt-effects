import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, LineChart, Line, CartesianGrid, ScatterChart, Scatter, ZAxis } from 'recharts';
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

  const studyTypeData = [
    { type: 'RCTs', count: 8, color: '#FF69B4' },
    { type: 'Quasi-experimental', count: 1, color: '#E75480' },
    { type: 'Exploratory', count: 1, color: '#FFB6C1' }
  ];

  const interventionData = [
    { name: 'CBT', effectiveness: 85, studies: 4 },
    { name: 'Group CBT', effectiveness: 78, studies: 2 },
    { name: 'CBT + Activity Pacing', effectiveness: 90, studies: 1 },
    { name: 'Nurse-led CBT', effectiveness: 88, studies: 2 },
    { name: 'CBSM', effectiveness: 82, studies: 1 }
  ];

  const outcomeTimelineData = [
    { week: 0, depression: 65, anxiety: 70, fatigue: 75 },
    { week: 2, depression: 55, anxiety: 60, fatigue: 68 },
    { week: 4, depression: 45, anxiety: 48, fatigue: 60 },
    { week: 6, depression: 35, anxiety: 38, fatigue: 50 },
    { week: 8, depression: 28, anxiety: 30, fatigue: 42 },
    { week: 10, depression: 22, anxiety: 25, fatigue: 35 }
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
        className="flex transition-transform duration-500 ease-out h-screen"
        style={{ transform: `translateX(-${currentSection * 100}vw)`, width: '300vw' }}
      >
        {/* Section 1: Overview */}
        <div className="min-h-screen flex items-center p-6 md:p-12" style={{ width: '100vw', background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC0CB 100%)' }}>
          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Breast Cancer Awareness Ribbon Logo */}
            <div className="flex justify-center items-center">
              <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                <defs>
                  <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#FF1493', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#E75480', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3"/>
                  </filter>
                </defs>
                
                {/* Awareness Ribbon */}
                <path 
                  d="M 150 50 
                     Q 120 80, 110 120 
                     Q 100 160, 110 200
                     Q 115 230, 130 250
                     Q 140 265, 150 270
                     L 150 270
                     Q 160 265, 170 250
                     Q 185 230, 190 200
                     Q 200 160, 190 120
                     Q 180 80, 150 50
                     Z"
                  fill="url(#ribbonGradient)"
                  filter="url(#shadow)"
                  stroke="#FF1493"
                  strokeWidth="3"
                />
                
                {/* Left loop */}
                <ellipse 
                  cx="100" 
                  cy="100" 
                  rx="40" 
                  ry="50" 
                  fill="none"
                  stroke="url(#ribbonGradient)"
                  strokeWidth="25"
                  opacity="0.9"
                  transform="rotate(-20 100 100)"
                />
                
                {/* Right loop */}
                <ellipse 
                  cx="200" 
                  cy="100" 
                  rx="40" 
                  ry="50" 
                  fill="none"
                  stroke="url(#ribbonGradient)"
                  strokeWidth="25"
                  opacity="0.9"
                  transform="rotate(20 200 100)"
                />
                
                {/* Center overlap */}
                <circle cx="150" cy="100" r="30" fill="url(#ribbonGradient)" opacity="0.8"/>
                
                {/* Decorative hearts */}
                <path d="M 150 85 L 155 75 Q 165 70, 165 80 Q 165 90, 150 100 Q 135 90, 135 80 Q 135 70, 145 75 Z" fill="#FFB6C1" opacity="0.7"/>
                
                {/* Text */}
                <text x="150" y="220" textAnchor="middle" style={{ fontSize: '18px', fontWeight: 'bold', fill: '#FF69B4', fontFamily: 'Poppins, sans-serif' }}>
                  Breast Cancer
                </text>
                <text x="150" y="240" textAnchor="middle" style={{ fontSize: '16px', fontWeight: 'bold', fill: '#E75480', fontFamily: 'Poppins, sans-serif' }}>
                  Awareness
                </text>
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
        <div className="min-h-screen p-6 md:p-12 overflow-y-auto" style={{ width: '100vw', backgroundColor: '#FFF5F7' }}>
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

            {/* Study Types Donut Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '2px solid #E6E6FA' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#E75480' }}>
                Study Types Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={studyTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {studyTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4" style={{ color: '#4A4A4A', fontSize: '14px' }}>
                <p><strong>Total Studies:</strong> 10 (8 RCTs, 1 Quasi-experimental, 1 Exploratory)</p>
              </div>
            </div>

            {/* Intervention Effectiveness Scatter Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '2px solid #E6E6FA' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#E75480' }}>
                Intervention Effectiveness vs Studies
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="studies" name="Number of Studies" type="number" style={{ fontSize: '12px', fill: '#4A4A4A' }} />
                  <YAxis dataKey="effectiveness" name="Effectiveness %" type="number" style={{ fontSize: '12px', fill: '#4A4A4A' }} />
                  <ZAxis range={[100, 400]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Legend />
                  <Scatter name="Interventions" data={interventionData} fill="#FF69B4">
                    {interventionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#FF69B4', '#E75480', '#FF1493', '#FFB6C1', '#C71585'][index]} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Outcome Timeline - Multi-line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '2px solid #E6E6FA' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#E75480' }}>
                Symptom Reduction Over Treatment Duration
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={outcomeTimelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" label={{ value: 'Weeks', position: 'insideBottom', offset: -5 }} style={{ fontSize: '12px', fill: '#4A4A4A' }} />
                  <YAxis label={{ value: 'Symptom Score', angle: -90, position: 'insideLeft' }} style={{ fontSize: '12px', fill: '#4A4A4A' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="depression" stroke="#FF69B4" strokeWidth={3} name="Depression" />
                  <Line type="monotone" dataKey="anxiety" stroke="#E75480" strokeWidth={3} name="Anxiety" />
                  <Line type="monotone" dataKey="fatigue" stroke="#FFB6C1" strokeWidth={3} name="Fatigue" />
                </LineChart>
              </ResponsiveContainer>
              <div className="text-center mt-4" style={{ color: '#4A4A4A', fontSize: '14px', fontStyle: 'italic' }}>
                Lower scores indicate symptom improvement during 4-10 week CBT interventions
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Trivia Quiz */}
        <div className="min-h-screen p-6 md:p-12 overflow-y-auto" style={{ width: '100vw', background: 'linear-gradient(135deg, #FFC0CB 0%, #FFFFFF 100%)' }}>
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
