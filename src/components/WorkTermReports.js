import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Import all work term assets
import allianceITLogo from "../assets/img/allianceIT-logo.png";
import cooperatorsLogo from "../assets/img/CooperatorsLogo.png";
import sharepointImage from "../assets/img/sharepointHomePage.png";
import cooperatorsOffice from "../assets/img/cooperators-headoffice.jpg";
import governmentOffice from "../assets/img/office-mnr.jpg";
import onLogo from "../assets/img/OL.png";
import purolatorLogo from "../assets/img/purolator-logo.png";
import coop1 from "../assets/img/WinterCoopEvent-01.jpg";
import coop2 from "../assets/img/WinterCoopEvent-17.jpg";
import coop3 from "../assets/img/WinterCoopEvent-52.jpg";

export const WorkTermReports = () => {
  const location = useLocation();
  const [expandedCard, setExpandedCard] = useState(null);


  const workTerms = useMemo(() => [
    {
      id: "workterm",
      term: "Summer 2023",
      tabKey: "summer2023",
      company: "AllianceIT",
      title: "Project Manager Intern",
      location: "Toronto, ON",
      period: "Summer 2023",
      logo: allianceITLogo,
      workplaceImage: sharepointImage,
      imageCaption: "SharePoint homepage for day to day work",
      overview: "For my first Co-op work, I worked for AllianceIT as a project manager intern. Although this role did not directly relate to my area of study, it provided me with skills that will help me succeed in future positions.",
      responsibilities: [
        {
          title: "Meeting Minutes",
          description: "Documented key discussion points, decisions, and action items during project meetings."
        },
        {
          title: "Status Reporting",
          description: "Created and distributed weekly status reports to keep stakeholders informed of project progress."
        },
        {
          title: "RAID Log Management",
          description: "Maintained and updated logs for Risks, Assumptions, Issues, and Dependencies to support proactive project management."
        },
        {
          title: "Meeting Coordination",
          description: "Scheduled, prepared for, and attended all project-related meetings to ensure smooth communication flow."
        }
      ],
      goals: [
        "Asking more questions when necessary",
        "Improving my Excel Skills",
        "Continuing to work on my organizational Skills"
      ],
      skills: [
        "Communication Skills",
        "Project management Skills",
        "Organizational Skills"
      ],
      technicalSkills: ["SharePoint", "Excel", "Office Suite", "Project Management Tools"],
      professionalSkills: ["Communication", "Organization", "Time Management", "Documentation"],
      technologies: [
        { name: "SharePoint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sharepoint/sharepoint-original.svg" },
        { name: "Excel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftoffice/microsoftoffice-plain.svg" },
        { name: "Office Suite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" }
      ],
      skillsDetails: [
        {
          title: "Meeting Minutes Documentation",
          description: "I developed strong skills in capturing comprehensive meeting minutes, ensuring all key discussion points, decisions, and action items were accurately documented. This experience improved my active listening skills and ability to distill complex discussions into clear, actionable points."
        },
        {
          title: "Status Reporting",
          description: "I created detailed weekly status reports that effectively communicated project progress, milestones, challenges, and next steps to stakeholders. This helped me develop skills in concise communication, data visualization, and project tracking."
        },
        {
          title: "Time Management",
          description: "I enhanced my ability to prioritize tasks, meet deadlines, and effectively allocate time across multiple project responsibilities. This included creating personal scheduling systems and developing strategies to handle competing priorities."
        },
        {
          title: "RAID Log Management",
          description: "I maintained comprehensive logs for Risks, Assumptions, Issues, and Dependencies, which contributed to proactive project management. This experience taught me how to identify potential problems early and develop mitigation strategies."
        },
  
      ],
      conclusions: "My first co-op experience at AllianceIT provided me with valuable professional skills. Though not directly related to software engineering, the project management experience gave me insights into how technical projects are coordinated and delivered, which will be valuable throughout my career."
    },
    {
      id: "worktermf23",
      term: "Fall 2023",
      tabKey: "fall2023",
      company: "Co-operators",
      title: "Test Automation Developer",
      location: "Guelph, ON",
      period: "Fall 2023",
      logo: cooperatorsLogo,
      workplaceImage: cooperatorsOffice,
      imageCaption: "Co-operators office downtown Guelph",
      overview: "I had the opportunity to serve as a test automation developer. This experience not only allowed me to contribute significantly to the development of automated testing processes but also provided invaluable insights into the management and collaborative aspects of working with a code base.",
      responsibilities: [
        {
          title: "Regression Testing",
          description: "Developed and maintained automated test scripts to verify system functionality after code changes."
        },
        {
          title: "Datasheet Management",
          description: "Reviewed and modified test datasheets to ensure accurate and comprehensive test coverage."
        },
        {
          title: "Bug Fixing",
          description: "Identified and resolved issues within the test automation suite to improve reliability."
        },
        {
          title: "Feature Enhancement",
          description: "Added new capabilities to the test framework to support evolving application requirements."
        }
      ],
      goals: [
        "Improve my java coding skills",
        "Ask more questions during meetings",
        "Get more comfortable working with version control systems at a professional level (Git & Bitbucket)"
      ],
      skills: [
        "Problem solving skills",
        "Coding skills",
        "Communication Skills",
        "Software Automation"
      ],
      technicalSkills: ["Java", "Selenium", "Git", "Bitbucket", "Automated Testing"],
      professionalSkills: ["Problem Solving", "Technical Communication", "Quality Assurance", "Teamwork"],
      technologies: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "BitBucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" }
      ],
      skillsDetails: [
        {
          title: "Test Automation with Selenium",
          description: "I gained extensive experience with Selenium WebDriver, creating automated test scripts that could navigate through web applications, interact with elements, and verify expected behaviors. I learned how to write stable tests that could handle dynamic content and various browser configurations."
        },
        {
          title: "Java Programming",
          description: "I significantly improved my Java programming skills, learning more advanced concepts such as object-oriented design principles, exception handling, and working with external libraries. I also learned how to structure code for maintainability and readability."
        },
        {
          title: "Version Control Systems",
          description: "I became proficient in using Git and Bitbucket for version control, learning how to create branches, merge changes, resolve conflicts, and collaborate with team members on shared codebases. This experience taught me valuable skills for working in collaborative development environments."
        },
        {
          title: "Regression Testing",
          description: "I developed a systematic approach to regression testing, ensuring that new code changes didn't break existing functionality. This involved creating comprehensive test suites, prioritizing test cases, and automating repetitive test scenarios."
        },
        {
          title: "Bug Tracking and Resolution",
          description: "I learned how to effectively identify, document, and track software defects using issue tracking tools. This included writing clear defect reports with reproducible steps, expected vs. actual results, and appropriate severity/priority classifications."
        }
      ],
      conclusions: "My work term at Co-operators as a Test Automation Developer was a significant step in my technical development. I gained valuable experience with Java, automated testing frameworks, and version control systems. This experience has better prepared me for future roles in software development and quality assurance."
    },
    {
      id: "worktermS24",
      term: "Summer 2024",
      tabKey: "summer2024",
      company: "GovTechON - Government of Ontario",
      title: "Service Designer",
      location: "Toronto, ON",
      period: "Summer 2024",
      logo: onLogo,
      workplaceImage: governmentOffice,
      imageCaption: "MNR Office, Peterborough Ontario",
      overview: "As a part of the IT2 program I had the opportunity to work as a service design with the government of Ontario Ministry of Natural Resources. This experience taught me how to work with a team to design and implement an IT service that meets the needs of the end user.",
      responsibilities: [
        {
          title: "User Workshop Facilitation",
          description: "Attended and assisted in user workshops to gather requirements and understand end user needs."
        },
        {
          title: "Technical Solution Design",
          description: "Contributed technical solutions to problems identified during the service design process."
        },
        {
          title: "Proof of Concept Development",
          description: "Created proof of concept applications to replace legacy systems with more modern solutions."
        },
        {
          title: "User Requirements Gathering",
          description: "Collected and analyzed user requirements to ensure the final solution addressed actual user needs."
        }
      ],
      goals: [
        "Improve presentation skills",
        "Improve written deliverables",
        "Learn more about the Azure Cloud Service"
      ],
      skills: [
        "Problem solving skills",
        "Coding skills",
        "Communication Skills",
        "User requirements gathering"
      ],
      technicalSkills: ["Azure", "Application Development", "User-Centric Design", "Requirements Analysis"],
      professionalSkills: ["Public Sector Work", "Communication", "Presentation", "Documentation"],
      technologies: [
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "UX Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ],
      skillsDetails: [
        {
          title: "Public Sector Work",
          description: "Gained experience working within the public sector, understanding the unique challenges and requirements of government projects, and ensuring compliance with regulations and standards."
        },
        {
          title: "Requirements Gathering",
          description: "Learned to effectively gather and analyze requirements from various stakeholders, ensuring that the developed application met the needs of end-users and aligned with project goals."
        },
        {
          title: "User Centric Design",
          description: "Applied user-centric design principles to create an intuitive and accessible interface for the bear incident and tracking application, focusing on user experience and usability."
        },
        {
          title: "App Development",
          description: "Developed a full stack application to replace a legacy system, utilizing modern technologies and frameworks to create a robust and scalable solution for tracking bear incidents."
        }
      ],
      demoDetails: {
        title: "Bear Wise Proof of Concept",
        description: "This is a demonstration of the bear incident and tracking application that I developed to replace a legacy system. The application is designed to be user-friendly and efficient in tracking bear incidents.",
        demoUrl: "http://birta-v2.azurewebsites.net",
        features: [
          "Incident Reporting: Users can report bear incidents with detailed information.",
          "Real-time Tracking: Track bear movements and incidents in real-time.",
          "Data Analysis: Analyze incident data to identify patterns and trends.",
          "User Management: Manage user roles and permissions within the application."
        ]
      },
      conclusions: "Working at the Ministry of Natural Resources gave me valuable experience in service design within the public sector. I gained skills in user-centric design, requirements gathering, and application development while creating a Bear Wise incident tracking application that will replace legacy systems."
    },
    {
      id: "worktermW25",
      term: "Winter 2025",
      tabKey: "winter2025",
      company: "Purolator Digital Lab",
      title: "QA Software Developer",
      location: "Kitchener, ON",
      period: "Winter 2025",
      logo: purolatorLogo, 
      workplaceImage: coop1, 
      carouselImages: [coop1, coop2, coop3], 
      hasCarousel: true, 
      imageCaption: "Purolator Digital Lab - Co-op Event 2025",
      overview: "During my Winter 2025 work term, I worked as a QA Software Developer at Purolator's Digital Lab. This role provided me with hands-on experience in QA, software testing, and development, while collaborating with a dynamic team to ensure the delivery of high-quality software solutions.",
      responsibilities: [
        {
          title: "Test Design & Execution",
          description: "Designed and executed test cases to ensure software functionality and performance."
        },
        {
          title: "Defect Resolution",
          description: "Collaborated with developers to identify and resolve software defects."
        },
        {
          title: "Agile Participation",
          description: "Participated in Agile activities such as sprint planning and retrospectives to align with team goals."
        },
        {
          title: "Quality Assurance",
          description: "Ensured software quality by thoroughly testing all features and functionality."
        }
      ],
      goals: [
        "Gain foundational knowledge of Azure cloud services and learn how to work with and manage applications in the cloud",
        "Improve my ability to test code effectively and gain knowledge of different testing methodologies",
        "Enhance my ability to manage tasks efficiently and meet deadlines effectively in a software development environment"
      ],
      skills: [
        "Testing skills",
        "Problem-solving",
        "Collaboration",
        "Attention to detail"
      ],
      technicalSkills: ["Azure Cloud Services", "Testing Methodologies", "C# .NET", "Unit Testing"],
      professionalSkills: ["Task Management", "Collaboration", "Problem-Solving", "Agile Methodologies"],
      technologies: [
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" }
      ],
      skillsDetails: [
        {
          title: "Azure Cloud Services",
          description: "Gained a better understanding of Azure cloud services, including Azure Virtual Machines, App Services, and Functions. Worked on a C# .NET application utilizing Azure Function Apps and learned from senior team members."
        },
        {
          title: "Testing Methodologies",
          description: "Improved my ability to test code effectively by learning unit testing and end-to-end testing. Reviewed and analyzed test cases, wrote unit tests, and identified and resolved bugs in the codebase."
        },
        {
          title: "Task Management",
          description: "Enhanced my ability to manage tasks efficiently by using time-tracking applications, breaking down large tasks into smaller subtasks, and regularly reviewing progress. Improved self-reflection and received positive feedback on task management."
        },
        {
          title: "Collaboration",
          description: "Worked closely with cross-functional teams, including developers and product managers, to ensure project success. Participated in Agile ceremonies such as sprint planning and retrospectives to align with team goals."
        },
        {
          title: "Problem-Solving",
          description: "Identified and resolved software defects in a timely manner. In some cases, I independently fixed issues, while in others, I collaborated with the appropriate individuals to address them effectively."
        }
      ],
      conclusions: "My experience at Purolator's Digital Lab as a QA Developer provided invaluable insights into software quality assurance and testing methodologies. I enhanced my technical skills with Azure cloud services and improved my collaboration abilities in an Agile environment. These experiences have prepared me well for future roles in software development and quality assurance."
    },
      {
      id: "worktermS25",
      term: "Summer 2025",
      tabKey: "Summer 2025",
      company: "Purolator Digital Lab",
      title: "QA Software Developer",
      location: "Kitchener, ON",
      period: "Summer 2025",
      logo: purolatorLogo,
      workplaceImage: coop1, 
      carouselImages: [coop1, coop2, coop3], 
      hasCarousel: true, 
      imageCaption: "Purolator Digital Lab - Co-op Event 2025",
      overview: "During my second term at Purolator's Digital Lab as a QA Software Developer, I expanded my responsibilities to include more development work. In addition to my regular QA duties, I had the opportunity to lead the development of a significant project: an Azure Function App that relays Azure alerts to Microsoft Teams channels, improving the team's incident response system.",
      responsibilities: [
        {
          title: "Azure Function App Development",
          description: "Collaborated with a teammate to create a C# .NET Function App that integrates Azure monitoring alerts with Microsoft Teams channels for real-time incident notifications."
        },
        {
          title: "CI/CD Pipeline Configuration",
          description: "Set up YAML-based CI/CD pipelines in Azure DevOps to automate the testing, building, and deployment processes for the notification application."
        },
        {
          title: "Quality Assurance",
          description: "Continued performing QA tasks including test design, execution, and defect resolution to maintain high software quality standards."
        },
        {
          title: "DevOps Implementation",
          description: "Learned and implemented DevOps practices including infrastructure as code, automated testing, and continuous deployment."
        }
      ],
      goals: [
        "Build expertise in Azure cloud services and create production-ready cloud applications",
        "Learn DevOps practices and implement CI/CD pipelines for automated software delivery",
        "Expand my C# and .NET development skills through hands-on project work"
      ],
      skills: [
        "Cloud Application Development",
        "DevOps Practices",
        "Problem-solving",
        "Software Architecture"
      ],
      technicalSkills: ["Azure Functions", "CI/CD Pipelines", "C# .NET", "Azure DevOps", "YAML Configuration"],
      professionalSkills: ["Project Management", "Technical Documentation", "Collaboration", "Agile Methodologies"],
      technologies: [
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
      ],
      skillsDetails: [
        {
          title: "Azure Function App Development",
          description: "Designed and developed a serverless application using Azure Functions that intercepts Azure Monitor alerts and forwards them to appropriate Microsoft Teams channels based on alert severity and category. This improved the team's incident response time by providing immediate, contextual notifications."
        },
        {
          title: "CI/CD Pipeline Implementation",
          description: "Configured Azure DevOps YAML pipelines to automate the build, test, and deployment processes. Implemented branch policies, automated testing, and deployment approvals to ensure code quality and reliable releases."
        },
        {
          title: "DevOps Practices",
          description: "Adopted DevOps methodologies including infrastructure as code, automated testing, and continuous deployment. Learned to use Azure Resource Manager templates and Azure CLI for consistent infrastructure provisioning."
        },
        {
          title: "Advanced C# and .NET Development",
          description: "Enhanced my C# programming skills by implementing HTTP triggers, working with Azure SDK libraries, parsing JSON payloads, and creating adaptive cards for Microsoft Teams integration."
        },
      
      ],
      demoDetails: {
        title: "Azure Alert Notification System",
        description: "This project streamlines incident management by automatically routing Azure monitoring alerts to relevant Microsoft Teams channels. The system categorizes alerts by severity and type, ensuring the right teams are notified immediately about critical issues.",
        features: [
          "Real-time Azure alert processing and notification delivery",
          "Customizable notification templates with contextual information",
          "Intelligent alert routing based on severity and service",
          "Integration with Microsoft Teams adaptive cards for interactive responses",
          "Fully automated deployment through Azure DevOps CI/CD pipelines"
        ]
      },
      conclusions: "My second term at Purolator's Digital Lab provided an excellent opportunity to expand beyond QA into development and DevOps practices. The Azure Function App project allowed me to gain hands-on experience with cloud architecture, serverless computing, and CI/CD pipelines. These new skills in cloud development and DevOps have significantly broadened my technical capabilities and prepared me for modern software engineering challenges."
    },
  

  ], []);

  useEffect(() => {
    // Check if URL has a hash and expand that card
    const hash = location.hash;
    if (hash) {
      const termId = hash.replace('#', '');
      const workTermIndex = workTerms.findIndex(term => term.id === termId);
      if (workTermIndex !== -1) {
        setExpandedCard(workTermIndex);
        // Removed setActiveKey since we no longer need it
      }
    }
  }, [location, workTerms]);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section className="work-term-reports-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        
          <Row className="mb-5">
            <Col className="text-center">
              <h1 className="section-title">Work Term Reports</h1>
              <p className="section-subtitle">
                Documentation of my co-op experiences, challenges, and growth
              </p>
            </Col>
          </Row>

          <Row className="work-cards">
            {workTerms.map((workTerm, index) => (
              <Col xs={12} key={index} className="mb-4">
                <motion.div
                  className={`work-card ${expandedCard === index ? 'expanded' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  layout={{ type: "crossfade", duration: 0.4 }}
                >
                  {/* Work Term Badge */}
                  <div className="work-term-badge">Work Term {index + 1}</div>
                  
                  <Row>
                    <Col lg={expandedCard === index ? 12 : 8} md={expandedCard === index ? 12 : 8} xs={12}>
                      <div className="card-header">
                        <div>
                          <h3 className="job-title">{workTerm.title}</h3>
                          <h4 className="company-name">{workTerm.company}</h4>
                          
                          <div className="job-meta">
                            <span className="job-period">
                              <i className="bi bi-calendar"></i> {workTerm.period}
                            </span>
                            <span className="job-location">
                              <i className="bi bi-geo-alt"></i> {workTerm.location}
                            </span>
                          </div>
                        </div>
                        
                        {expandedCard !== index && (
                          <div className="company-logo-container-sm">
                            <img 
                              src={workTerm.logo} 
                              alt={`${workTerm.company} logo`} 
                              className="company-logo"
                            />
                          </div>
                        )}
                      </div>
                      
                      {expandedCard !== index ? (
                        <>
                          <p className="job-description">{workTerm.overview}</p>
                          
                          <div className="card-actions">
                            <button 
                              className="expand-btn"
                              onClick={() => toggleCard(index)}
                            >
                              View Full Report <i className="bi bi-chevron-down"></i>
                            </button>
                          </div>
                        </>
                      ) : (
                        <motion.div 
                          className="expanded-content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          {/* Company Logo and Workplace Image for expanded view */}
                          <Row className="mb-4">
                            <Col md={6} className="text-center mb-4">
                              <div className="company-logo">
                                <img src={workTerm.logo} alt={`${workTerm.company} logo`} />
                              </div>
                            </Col>
                            <Col md={6} className="mb-4">
                              <div className="workplace-image">
                                {workTerm.hasCarousel ? (
                                  <>
                                    <Carousel>
                                      {workTerm.carouselImages.map((image, idx) => (
                                        <Carousel.Item key={idx}>
                                          <img 
                                            className="d-block w-100"
                                            src={image}
                                            alt={`Co-op Event ${idx + 1}`}
                                            style={{ maxHeight: "300px", objectFit: "cover" }}
                                          />
                                        </Carousel.Item>
                                      ))}
                                    </Carousel>
                                    <figcaption>{workTerm.imageCaption}</figcaption>
                                  </>
                                ) : (
                                  <>
                                    <img src={workTerm.workplaceImage} alt="Workplace" />
                                    <figcaption>{workTerm.imageCaption}</figcaption>
                                  </>
                                )}
                              </div>
                            </Col>
                          </Row>

                          <div className="overview-section">
                            <h5>Work Term Overview</h5>
                            <p>{workTerm.overview}</p>
                          </div>
                          
                          <div className="responsibilities-section">
                            <h5>Key Responsibilities</h5>
                            <Row>
                              {workTerm.responsibilities.map((resp, respIndex) => (
                                <Col lg={6} md={6} xs={12} key={respIndex} className="mb-3">
                                  <div className="responsibility-card">
                                    <div className="icon">
                                      <span>{respIndex + 1}</span>
                                    </div>
                                    <div className="content">
                                      <h6>{resp.title}</h6>
                                      <p>{resp.description}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </div>

                          <div className="goals-section">
                            <h5>Learning Goals</h5>
                            <Row>
                              {workTerm.goals.map((goal, index) => (
                                <Col lg={6} md={6} xs={12} key={index} className="mb-3">
                                  <div className="responsibility-card">
                                    <div className="icon">
                                      <span>{index + 1}</span>
                                    </div>
                                    <div className="content">
                                      <h6>Goal {index + 1}</h6>
                                      <p>{goal}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </div>
                          
                          <div className="skills-technologies-section">
                            <h5>Skills & Technologies</h5>
                            <div className="skills-container">
                              <div className="skills-group">
                                <h6>Technical Skills</h6>
                                <div className="skills-badges">
                                  {workTerm.technicalSkills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-badge technical">{skill}</span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="skills-group">
                                <h6>Professional Skills</h6>
                                <div className="skills-badges">
                                  {workTerm.professionalSkills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-badge professional">{skill}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {workTerm.skillsDetails && (
                            <div className="detailed-skills-section">
                              <h5>What I Learned</h5>
                              <Row>
                                {workTerm.skillsDetails.map((skill, idx) => (
                                  <Col lg={6} md={6} xs={12} key={idx} className="mb-3">
                                    <div className="responsibility-card">
                                      <div className="content">
                                        <h6>{skill.title}</h6>
                                        <p>{skill.description}</p>
                                      </div>
                                    </div>
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          )}

                          {workTerm.demoDetails && (
                            <div className="project-demo-section">
                              <h5>{workTerm.demoDetails.title}</h5>
                              <Row className="mb-4">
                                <Col lg={6} md={6} xs={12}>
                                  <div className="demo-card">
                                    <h6>Website Demo</h6>
                                    <p>{workTerm.demoDetails.description}</p>
                                  </div>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                  <div className="demo-card">
                                    <h6>Application Features</h6>
                                    <ul className="feature-list">
                                      {workTerm.demoDetails.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          )}

                          <div className="conclusions-section">
                            <h5>Conclusions</h5>
                            <div className="report-card conclusion-card p-4">
                              <p>{workTerm.conclusions}</p>
                            </div>
                          </div>
                          
                          <div className="card-actions">
                            <button 
                              className="collapse-btn"
                              onClick={() => toggleCard(index)}
                            >
                              Collapse Report <i className="bi bi-chevron-up"></i>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </Col>
                    
                    {expandedCard !== index && (
                      <Col lg={4} md={4} className="d-none d-md-flex align-items-center justify-content-center">
                        <div className="company-logo-container">
                          <img 
                            src={workTerm.logo} 
                            alt={`${workTerm.company} logo`} 
                            className="company-logo"
                          />
                        </div>
                      </Col>
                    )}
                  </Row>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};