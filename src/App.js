import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Globe, ArrowRight, Menu, X, Play, FileText, Users, Star, Award, Clock, Twitter } from 'lucide-react';
import './App.css';

const HexaCodeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stack: 'react'
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const startDemo = () => {
    setIsVideoPlaying(true);
    setDemoStep(0);
    
    const demoSteps = [
      "Initializing AI assistant...",
      "Analyzing project requirements...",
      "Generating React component...",
      "Adding TypeScript types...",
      "Implementing responsive design...",
      "Optimizing performance...",
      "Demo complete!"
    ];
    
    demoSteps.forEach((step, index) => {
      setTimeout(() => setDemoStep(index), index * 800);
    });
    
    setTimeout(() => {
      setIsVideoPlaying(false);
      setDemoStep(0);
    }, demoSteps.length * 800);
  };

  const openTrialModal = () => {
    setShowTrialModal(true);
  };

  const closeTrialModal = () => {
    setShowTrialModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}! Your free trial is starting. Check your email for next steps.`);
    closeTrialModal();
    setFormData({ name: '', email: '', company: '', stack: 'react' });
  };

  const features = [
    {
      icon: ArrowRight,
      title: "Advanced Code Generation",
      description: "AI-powered code generation with support for 50+ programming languages and frameworks.",
      details: ["Python, JavaScript, TypeScript, Java, C++", "React, Vue, Angular, Node.js", "Database integration", "API development"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized algorithms deliver results in milliseconds, not minutes.",
      details: ["Sub-second response times", "Real-time code suggestions", "Instant compilation", "Cloud-powered processing"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your intellectual property.",
      details: ["End-to-end encryption", "SOC 2 compliant", "Private cloud deployment", "Advanced access controls"]
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Real-time collaboration features for distributed development teams.",
      details: ["Live code sharing", "Team workspaces", "Version control integration", "Multi-timezone support"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      content: "HexaCode has revolutionized our development workflow. What used to take hours now takes minutes.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO at StartupX",
      content: "The AI-powered suggestions are incredibly accurate. It's like having a senior developer pair programming with you.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Full Stack Developer",
      content: "I can't imagine coding without HexaCode anymore. It's become an essential part of my toolkit.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["5,000 lines/month", "Basic AI assistance", "Community support", "Public repositories"],
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      features: ["Unlimited lines", "Advanced AI models", "Priority support", "Private repositories", "Team collaboration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: ["Custom deployment", "Dedicated support", "Advanced security", "Custom integrations", "SLA guarantee"],
      popular: false
    }
  ];

  const FloatingParticles = () => (
    <div className="floating-particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="website-container">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-brand">
            <span 
              className="logo"
              onClick={() => scrollToSection('home')}
            >
              HexaCode.app
            </span>
          </div>
          
          <div className="nav-links desktop-only">
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <div className="nav-actions">
              <a 
                href="https://twitter.com/hexacodeapp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="twitter-link"
              >
                <Twitter size={20} />
              </a>
              <button 
                onClick={openTrialModal}
                className="btn btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>

          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <button onClick={() => scrollToSection('features')}>Features</button>
            <button onClick={() => scrollToSection('pricing')}>Pricing</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button 
              onClick={openTrialModal}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <FloatingParticles />
        <div className="hero-bg-gradient" />
        <div className="hero-grid">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="grid-item"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">
              Code the Future
            </span>
            <br />
            <span className="white-text">with HexaCode</span>
          </h1>
          
          <p className="hero-subtitle">
            Revolutionary AI-powered development platform that transforms your ideas into production-ready code in seconds. Build faster, deploy sooner, and scale infinitely.
          </p>
          
          <div className="hero-buttons">
            <button 
              onClick={openTrialModal}
              className="btn btn-primary btn-large"
            >
              <span>Start Building</span>
              <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('demo')}
              className="btn btn-outline btn-large"
            >
              <Play size={20} />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="scroll-indicator">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="gradient-text">
                Cutting-Edge Features
              </span>
            </h2>
            <p className="section-subtitle">
              Experience the next generation of development tools designed for modern creators
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                
                <p className="feature-description">
                  {feature.description}
                </p>

                <ul className="feature-details">
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>
                      <span className="bullet"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo-section">
        <div className="container">
          <h2 className="section-title">
            See <span className="gradient-text">HexaCode</span> in Action
          </h2>
          <p className="section-subtitle">
            Watch how developers are transforming their workflow with our AI-powered platform
          </p>
          
          <div className="demo-container">
            <div className="demo-video">
              {!isVideoPlaying ? (
                <div className="demo-placeholder">
                  <button
                    onClick={startDemo}
                    className="play-button"
                  >
                    <Play size={48} />
                  </button>
                  <h3>Interactive Demo</h3>
                  <p>See real-time code generation in action</p>
                </div>
              ) : (
                <div className="demo-active">
                  <div className="demo-terminal">
                    <div className="terminal-header">
                      <span>HexaCode AI Assistant</span>
                    </div>
                    
                    <div className="terminal-content">
                      {demoStep >= 0 && (
                        <div className="terminal-line active">
                          {demoStep === 0 && "Initializing AI assistant..."}
                          {demoStep === 1 && "Analyzing project requirements..."}
                          {demoStep === 2 && "Generating React component..."}
                          {demoStep === 3 && "Adding TypeScript types..."}
                          {demoStep === 4 && "Implementing responsive design..."}
                          {demoStep === 5 && "Optimizing performance..."}
                          {demoStep === 6 && "Demo complete! Code generated successfully."}
                        </div>
                      )}
                      
                      {demoStep >= 2 && (
                        <div className="code-output">
                          <div>const UserCard = (props) =&gt; (</div>
                          <div className="indent">&lt;div className="bg-white rounded-lg shadow-md p-6"&gt;</div>
                          <div className="indent-2">&lt;h2 className="text-xl font-bold"&gt;{`{props.user.name}`}&lt;/h2&gt;</div>
                          <div className="indent-2">&lt;p className="text-gray-600"&gt;{`{props.user.email}`}&lt;/p&gt;</div>
                          <div className="indent">&lt;/div&gt;</div>
                          <div>);</div>
                        </div>
                      )}
                      
                      {demoStep >= 4 && (
                        <div className="terminal-line success">
                          Added responsive breakpoints and mobile optimization
                        </div>
                      )}
                    </div>
                    
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${((demoStep + 1) / 7) * 100}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">
                        Step {demoStep + 1} of 7
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="demo-features">
              <div className="demo-feature">
                <Clock size={32} />
                <h4>5-Minute Demo</h4>
                <p>Complete walkthrough</p>
              </div>
              <div className="demo-feature">
                <Users size={32} />
                <h4>Live Examples</h4>
                <p>Real use cases</p>
              </div>
              <div className="demo-feature">
                <Award size={32} />
                <h4>Best Practices</h4>
                <p>Expert tips</p>
              </div>
            </div>
            
            {!isVideoPlaying && (
              <div className="demo-cta">
                <button
                  onClick={startDemo}
                  className="btn btn-primary"
                >
                  Start Interactive Demo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              What <span className="gradient-text">Developers</span> Say
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="section-subtitle">
              Choose the perfect plan for your development needs
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="gradient-text">{plan.price}</span>
                  </div>
                  <div className="period">per {plan.period}</div>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="bullet"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}
                onClick={plan.price === 'Custom' ? () => scrollToSection('about') : openTrialModal}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="getting-started-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Get <span className="gradient-text">Started</span> in Minutes
            </h2>
            <p className="section-subtitle">
              Follow these simple steps to begin your journey with HexaCode
            </p>
          </div>

          <div className="steps-grid">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free account and verify your email"
              },
              {
                step: "2", 
                title: "Choose Your Stack",
                description: "Select your preferred programming languages and frameworks"
              },
              {
                step: "3",
                title: "Start Coding",
                description: "Begin generating code with our AI-powered assistant"
              }
            ].map((item, index) => (
              <div key={index} className="step-card">
                <div className="step-number">
                  {item.step}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-center">
            <button className="btn btn-primary btn-large"
            onClick={openTrialModal}
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">
                About <span className="gradient-text">HexaCode</span>
              </h2>
              <p className="about-description">
                Founded by a team of AI researchers and veteran software engineers, HexaCode represents the next evolution in software development tools.
              </p>
              <p className="about-mission">
                Our mission is to democratize software development by making advanced AI accessible to developers of all skill levels. Whether you're a seasoned architect or just starting your coding journey, HexaCode adapts to your needs and grows with your expertise.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon">
                    <Users size={24} />
                  </div>
                  <div className="feature-content">
                    <div className="feature-name">Expert Team</div>
                    <div className="feature-desc">AI researchers from top universities</div>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="feature-icon">
                    <Award size={24} />
                  </div>
                  <div className="feature-content">
                    <div className="feature-name">Proven Results</div>
                    <div className="feature-desc">Trusted by 50,000+ developers worldwide</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-vision">
              <div className="vision-card">
                <div className="vision-content">
                  <h3>Our Vision</h3>
                  <p>
                    "To empower every developer with AI that understands not just code, but the art of software craftsmanship."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '10M+', label: 'Lines of Code Generated' },
              { number: '50K+', label: 'Active Developers' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '50+', label: 'Supported Languages' }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number gradient-text">
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <FloatingParticles />
        <div className="container">
          <h2 className="section-title">
            Ready to <span className="gradient-text">Transform</span> Your Development?
          </h2>
          <p className="section-subtitle">
            Join thousands of developers who are already building the future with HexaCode.app
          </p>
          
          <div className="cta-buttons">
            <button 
              onClick={openTrialModal}
              className="btn btn-primary btn-large"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn btn-text btn-large"
            >
              <FileText size={20} />
              <span>View Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo">
                HexaCode.app
              </span>
            </div>
            
            <div className="footer-links">
              <button 
                onClick={() => scrollToSection('about')}
                className="footer-link"
              >
                Privacy
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="footer-link"
              >
                Terms
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="footer-link"
              >
                Support
              </button>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 HexaCode.app. All rights reserved. Built with cutting-edge technology.</p>
          </div>
        </div>
      </footer>

      {/* Trial Modal */}
      {showTrialModal && (
        <div className="modal-overlay" onClick={closeTrialModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                Start Your Free Trial
              </h2>
              <button 
                onClick={closeTrialModal}
                className="modal-close"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="trial-features">
              <h3>What's Included:</h3>
              <ul>
                <li>✨ 14-day free trial</li>
                <li>🚀 5,000 AI-generated lines of code</li>
                <li>🛠️ Access to 50+ programming languages</li>
                <li>📧 Email support</li>
                <li>❌ No credit card required</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Primary Tech Stack
                </label>
                <select
                  name="stack"
                  value={formData.stack}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="react">React</option>
                  <option value="vue">Vue.js</option>
                  <option value="angular">Angular</option>
                  <option value="nodejs">Node.js</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="csharp">C#</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={closeTrialModal}
                  className="btn-cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-submit"
                >
                  Start Trial
                </button>
              </div>
            </form>

            <p className="form-disclaimer">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return <HexaCodeWebsite />;
}

export default App;