'use client'
import Image from "next/image";
import React, { useEffect } from 'react';
import profile from "../public/pp.jpg";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      console.log('hello shubham', element);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="App">
      <div className="section center" id="profile">
        <div className="image">
          <Image src={profile} title="Shubham Rai" alt="Shubham Rai" />
        </div>
        <div className="name">Shubham Rai</div>
        <div className="text">Sr. Software Engineer (QRadar Apps)</div>
      </div>
      <div className="section" id="project_profile_1">
        <div className="header1"><span>Project Profile 1</span></div>
        <div className="flex">
          <div>
            <strong>Project Name:</strong> <br />
            QRadar Analyst Workflow
          </div>
          <div>
            <strong>Role:</strong> <br />
            Senior Software Engineer
          </div>
          <div>
            <strong>Project Date:</strong> <br />
            Sep 01 2023 - July 05 2024
          </div>
        </div>
        <br />
        <br />
        <div className="box" id="project_profile_1_bo">
          <strong>Business Opportunity:</strong>
          <br />
          <br />
          <strong>About Analyst Workflow:</strong>
          <br />
          In today's rapidly evolving threat landscape, organizations need
          advanced tools to detect, analyze, and respond to security incidents
          efficiently. IBM Security QRadar Analyst Workflow offers a
          comprehensive solution that revolutionizes how security teams manage
          and investigate offenses. By leveraging the latest features in QRadar,
          businesses can enhance their security operations, reduce response
          times, and improve overall threat management.
          <br />
          <br />
          <strong>Key Features and Capabilities:</strong>
          <ol>
            <li>Advanced Offense Management.</li>
            <li>Powerful Search Capabilities of Events and Flows.</li>
            <li>Advanced drill down of grouped by Events and Flows.</li>
            <li>Integration with QRadar Apps (Pulse).</li>
            <li>
              Attractive user interface which can replace QRadar classic
              dashboard in future.
            </li>
          </ol>
          <strong>Business Benefits:</strong>
          <br />
          <ol>
            <li>
              The introduction of a visual query builder transforms the user
              experience by simplifying the search process. Users no longer need
              to write complex queries; instead, they can easily obtain search
              results by selecting values and condition fields. This
              user-friendly interface can attract a broader audience, including
              those without technical expertise, thus expanding our market reach
              and increasing user adoption rates.
            </li>
            <li>
              Our solution for IP search across the QRadar environment empowers
              organizations to quickly and efficiently identify the presence and
              activity of specific IP addresses. This capability is crucial for
              security operations, enabling faster threat detection and
              response. By offering this comprehensive search feature, we
              position ourselves as a valuable partner for organizations looking
              to enhance their cybersecurity measures and operational
              efficiency.
            </li>
            <li>
              The new group-by feature for events and flows, combined with a
              drilldown capability, enhances data analysis by allowing users to
              group data using various value fields and then delve into detailed
              information. This functionality supports more granular and
              insightful data analysis, aiding in better decision-making.
              Organizations can leverage this feature to gain deeper insights
              into their data, driving improved business outcomes and
              operational intelligence.
            </li>
            <li>
              By improving the graphical representation and user interface,
              we've made the analyst workflow application more intuitive and
              visually appealing. This enhancement has been so impactful that
              management is considering making it the default dashboard for
              QRadar. This move positions our solution as a central hub for
              security operations, driving higher engagement and satisfaction
              among users. Organizations can benefit from a more efficient and
              effective workflow, leading to faster decision-making and better
              overall performance.
            </li>
            <li>
              The implementation of a visual builder allows users to fetch
              offenses based on various criteria with ease. This user-friendly
              tool simplifies the process of retrieving critical information,
              making it accessible even to non-technical users. Additionally, by
              improving the performance of the application and providing initial
              data for large datasets, we ensure that the system remains
              responsive and efficient, even under heavy loads. This capability
              is crucial for organizations dealing with vast amounts of data, as
              it enables quick and accurate analysis without compromising on
              performance.
            </li>
          </ol>
          IBM Security QRadar Analyst Workflow provides an innovative and
          powerful solution for modern security operations. By adopting these
          advanced capabilities, businesses can enhance their threat detection,
          streamline their response processes, and ultimately safeguard their
          critical assets more effectively. Embrace the future of security
          intelligence with QRadar Analyst Workflow and transform organization's
          security posture.
        </div>
        <div className="box" id="project_profile_1_co">
          <strong>My Contribution:</strong>
          <br />
          <br />
          As a Senior Engineer working on the IBM Security QRadar Analyst
          Workflow app, my contributions have been instrumental in enhancing the
          app’s functionality, usability, and overall performance and now I am
          giving innovations idea along with architectural design to implement
          new features. Here are some of the key areas where I have made
          significant impacts:
          <ol>
            <li>
              Architecting and Designing Key Features of Visual Builder on
              Offense page.
            </li>
            <li>
              Enhancing the Query Builder by adding regex and case sensitive
              based search.
            </li>
            <li>Integration of group by and drill down of events and flows.</li>
            <li>
              Working on idea to fetch results (events and flows) based on
              nested query search
            </li>
            <li>User Experience and Interface Improvements</li>
            <li>Collaboration and Leadership</li>
            <li>Continuous Improvement and Innovation</li>
          </ol>
          My contributions as a Senior Engineer in the development of the IBM
          Security QRadar Analyst Workflow app have significantly advanced its
          capabilities, making it a more powerful and user-friendly tool for
          security analysts. By focusing on innovative features, seamless
          integration, and performance optimization, I have helped create a
          solution that enhances threat detection and response, ultimately
          contributing to the security and resilience of our users' IT
          environments.
        </div>
        <div className="box" id="project_profile_1_im">
          <strong>My Impact:</strong>
          <br />
          <br />
          As a Senior Engineer on the IBM Security QRadar Analyst Workflow app,
          my contributions have significantly advanced the project, particularly
          through the development and architecture of key features such as the
          GroupBy functionality for events and flows and the Visual Query
          Builder.
          <ol>
            <li>GroupBy Feature on Events and Flows.</li>
            <li>
              Visual Builder Development and Architecture on Offense Page.
            </li>
            <li>Nested Query Builder Development and Architecture.</li>
            <li>Robust and Scalable Design</li>
          </ol>
          <strong>Overall Project Impact:</strong>
          <br></br>
          <ol>
            <li>Increased Analytical Capabilities</li>
            <li>Streamlined Workflows</li>
            <li>Enhanced Usability and Adoption</li>
          </ol>
          Through these contributions, I have helped transform the QRadar
          Analyst Workflow app into a more powerful, efficient, and
          user-friendly tool, ultimately strengthening the security operations
          of our users.
        </div>
        <div className="box" id="project_profile_1_ll">
          <strong>Lesson learnt:</strong>
          <br />
          <br />
          We started working on this project without KT from the previous team,
          below was the my initial goal:
          <ol>
            <li>Understanding User Needs</li>
            <li>Simplifying Complex Tasks</li>
            <li>Cross-Functional Teams</li>
            <li>Open Communication</li>
            <li>Prototyping and Testing</li>
            <li>Scalable Architecture</li>
            <li>Detailed Documentation</li>
            <li>Knowledge Sharing</li>
          </ol>
          By incorporating these lessons learned, we were able to start working
          on project and within a small period of time we released a new version
          with some effective features.
        </div>
      </div>
      <div className="section" id="project_profile_2">
        <div className="header1"><span>Project Profile 2</span></div>
        <div className="flex">
          <div>
            <strong>Project Name:</strong> <br />
            Threat Intelligence App
          </div>
          <div>
            <strong>Role:</strong> <br />
            Senior Software Engineer
          </div>
          <div>
            <strong>Project Date:</strong> <br />
            Jan 01 2024 - May 31 2024
          </div>
        </div>
        <br />
        <br />
        <div className="box" id="project_profile_2_bo">
          <strong>Business Opportunity:</strong>
          <br />
          <br />
          <strong>About Threat Intelligence App:</strong>
          <br />
          In the modern digital landscape, cyber threats are becoming
          increasingly sophisticated and frequent. Organizations need advanced
          tools to detect, analyze, and respond to these threats in real-time.
          IBM QRadar Threat Intelligence App offers a comprehensive solution
          that leverages industry-standard threat intelligence formats (STIX and
          TAXII) to integrate threat data seamlessly into the QRadar SIEM
          platform. This integration enables security teams to create custom
          rules for correlation, searching, and reporting, enhancing their
          ability to mitigate threats proactively.
          <br />
          <br />
          <strong>Key Features and Capabilities:</strong>
          <ol>
            <li>STIX and TAXII Formats</li>
            <li>Custom Rule Creation</li>
            <li> Comprehensive Threat Collections</li>
            <li>Environmental Scanning and Impact Analysis</li>
            <li>Threat Intelligence Dashboard</li>
            <li>Continuous Threat Data Stream</li>
          </ol>
          <strong>Business Benefits:</strong>
          <br />
          <ol>
            <li>
              Combining TAXII 2.0 and 2.1 with STIX allows for real-time sharing
              of threat intelligence, improving the speed and accuracy of threat
              detection.
            </li>
            <li>
              The STIX protocol ensures compatibility across different security
              platforms, enabling organizations to leverage their existing
              cybersecurity investments.
            </li>
            <li>
              The integrated solution can scale with the growing volume of
              threat data, ensuring consistent performance and reliability.
            </li>
            <li>
              Automated exchange of threat intelligence reduces the manual
              effort required for threat analysis, allowing security teams to
              focus on more strategic tasks.
            </li>
            <li>
              Improved threat detection capabilities can lead to significant
              cost savings by preventing breaches and reducing the time spent on
              threat remediation.
            </li>
          </ol>
          The IBM QRadar Threat Intelligence App presents a significant business
          opportunity for organizations looking to enhance their cybersecurity
          defenses. By integrating standardized threat intelligence feeds,
          providing advanced analytics, and enabling proactive threat
          management, the app empowers security teams to stay ahead of emerging
          threats and maintain a robust security posture. Embrace the power of
          real-time threat intelligence with IBM QRadar and transform your
          organization's security operations.
        </div>
        <div className="box" id="project_profile_2_co">
          <strong>My Contribution:</strong>
          <br />
          <br />
          As a senior developer on the IBM QRadar Threat Intelligence App, I
          played a pivotal role in integrating TAXII/STIX 2.1 standards,
          significantly enhancing the app's capabilities and effectiveness. My
          contributions focused on several key areas:
          <ol>
            <li>Integration of TAXII/STIX 2.1 Standards.</li>
            <li>Environmental Scanning and Impact Analysis.</li>
            <li>Continuous Improvement and Troubleshooting.</li>
          </ol>
        </div>
        <div className="box" id="project_profile_2_im">
          <strong>My Impact:</strong>
          <br />
          <br />
          <ol>
            <li>Enhanced Threat Detection.</li>
            <li>Improved User Experience.</li>
            <li>Proactive Security Posture.</li>
          </ol>
          Through my contributions to the TAXII/STIX 2.1 integration, I have
          helped elevate the QRadar Threat Intelligence App to a new level of
          effectiveness and usability, empowering organizations to better
          protect themselves against the ever-evolving landscape of cyber
          threats.
        </div>
        <div className="box" id="project_profile_2_ll">
          <strong>Lesson learnt:</strong>
          <br />
          <br />
          We started working on this project without KT from the previous team,
          below was the my initial goal:
          <ol>
            <li>The Importance of Standards Compliance (TAXII/STIX)</li>
            <li>User-Centric Design</li>
            <li>Proactive Threat Management</li>
            <li>Performance Optimization</li>
            <li>Scalability Considerations</li>
            <li>Collaboration and Communication</li>
            <li>Continuous Improvement</li>
            <li>Security Best Practices</li>
            <li>Adaptability and Learning</li>
          </ol>
          By reflecting on these lessons learned, I have gained valuable
          insights that will inform my future projects and contributions to the
          field of cybersecurity. These lessons not only enhanced the
          development of the QRadar Threat Intelligence App but also enriched my
          approach to building robust, user-centric, and secure applications.
        </div>
      </div>
      <div className="section" id="project_profile_3">
        <div className="header1"><span>Project Profile 3</span></div>
        <div className="flex">
          <div>
            <strong>Project Name:</strong> <br />
            Grit - Advanced Spends and Vendor Management
          </div>
          <div>
            <strong>Role:</strong> <br />
            Lead Software Engineer
          </div>
          <div>
            <strong>Project Date:</strong> <br />
            Oct 01 2021 - Jul 30 2023
          </div>
        </div>
        <br />
        <br />
        <div className="box" id="project_profile_3_bo">
          <strong>Business Opportunity:</strong>
          <br />
          <br />
          Grit, is a spend management, it provide solution for rapidly growing
          SME who was struggling with manual and time-consuming expense
          management processes, leading to inefficiencies, errors, and delayed
          financial reporting. They needed a more streamlined, automated
          solution to manage expenses, approve workflows, and integrate
          seamlessly with their existing accounting systems. The client’s
          financial team was spending excessive time on manual data entry and
          error correction, which hindered their ability to focus on strategic
          financial planning and analysis. The delays and inaccuracies in
          expense reporting were also impacting their financial visibility and
          decision-making. With the company’s rapid growth, these inefficiencies
          were becoming increasingly untenable, prompting the urgent need for an
          improved solution.
        </div>
        <div className="box" id="project_profile_3_co">
          <strong>My Contribution:</strong>
          <br />
          <br />
          As a lead frontend developer my contribution to the product is:
          <br />
          <br />
          <strong>Architecting and Developing the features:</strong>
          <br />
          System Design: Designing the overall architecture of the frontend,
          ensuring it is scalable, maintainable, and efficient. Technology
          Stack: Selecting appropriate technologies, frameworks, and libraries
          that best suit the product’s needs, such as React, Vue.js, or Angular.
          <br />
          <br />
          <strong>Ensuring High Code Quality and Best Practices</strong>
          <br />
          Coding Standards: Establishing and enforcing coding standards and best
          practices across the team to maintain consistency and high quality.
          Code Reviews: Conducting rigorous code reviews to ensure code quality,
          performance, and security, while also mentoring junior developers.
          <br />
          <br />
          <strong>Collaborating with Cross-Functional Teams</strong>
          <br />
          Cross-Department Collaboration: Working closely with backend
          developers, designers, product managers, and other stakeholders to
          ensure seamless integration and alignment with product goals. Agile
          Methodologies: Leading the frontend team in agile practices, such as
          sprint planning, daily stand-ups, and retrospectives, to ensure
          efficient project management and delivery.
          <br />
          <br />
          <strong>Enhancing User Experience (UX)</strong>
          <br />
          UI/UX Design: Collaborating with UI/UX designers to create intuitive,
          responsive, and accessible interfaces that provide an excellent user
          experience. User Feedback: Analyzing user feedback and usage data to
          continuously improve the frontend experience, ensuring the product
          meets the needs and expectations of its users.
          <br />
          <br />
          <strong>Performance Optimization</strong>
          <br />
          Load Time Reduction: Implementing strategies to reduce load times and
          improve the performance of the application, ensuring a smooth and
          responsive user experience. Scalability: Ensuring the frontend
          architecture can handle increasing user loads and data volumes without
          compromising performance.
          <br />
          <br />
          <strong>Security and Compliance</strong>
          <br />
          Data Protection: Implementing robust security measures to protect
          sensitive financial data and ensure compliance with industry standards
          and regulations. Secure Development Practices: Promoting secure coding
          practices and conducting regular security audits and vulnerability
          assessments.
          <br />
          <br />
          <strong>Continuous Improvement and Innovation</strong>
          <br />
          Staying Updated: Keeping up-to-date with the latest frontend
          technologies, trends, and best practices to ensure the product remains
          cutting-edge. Innovation: Identifying and implementing innovative
          solutions to enhance the functionality, usability, and performance of
          the product.
          <br />
          <br />
          <strong>Mentorship and Team Development</strong>
          <br />
          Guidance and Support: Providing mentorship and support to team
          members, fostering a collaborative and inclusive team environment.
          Skill Development: Encouraging continuous learning and professional
          growth within the team, organizing workshops, and knowledge-sharing
          sessions.
          <br />
          <br />
          <strong>Documentation and Knowledge Sharing</strong>
          <br />
          Comprehensive Documentation: Creating and maintaining comprehensive
          documentation for code, processes, and best practices to facilitate
          knowledge transfer and onboarding of new team members. Knowledge
          Sharing: Leading and participating in knowledge-sharing sessions, such
          as tech talks and pair programming, to build a stronger and more
          knowledgeable team.
        </div>
        <div className="box" id="project_profile_3_im">
          <strong>My Impact:</strong>
          <br />
          <br />
          We started writing this product from scratch with zero customer within
          a span of a year this product was utilized by 100+ big companies, our
          major focus was on:
          <ol>
            <li>Best User Experience (UX).</li>
            <li>Efficiency and Performance.</li>
            <li>Scalable and Maintainable Codebase.</li>
            <li>Security and Compliance Enhancements.</li>
          </ol>
        </div>
        <div className="box" id="project_profile_3_ll">
          <strong>Lesson learnt:</strong>
          <br />
          <br />
          Initially, as the product was at a small scale, my responsibilities
          were focused on writing the blueprint and developing the UI for the
          pages. We had to demonstrate our progress at regular intervals and
          faced numerous rejections from management, both regarding features and
          the UI. Through this iterative process, we continually improved, and I
          developed the capability to effectively write product blueprints and
          design UIs. After many iterations and rejections, we refined the
          product to a level that was presentable to clients. The product was
          well-received and appreciated by the clients. This experience
          underscored an important lesson: being proficient in coding does not
          automatically equate to being able to develop a product successfully.
          Understanding the product from the user’s perspective is crucial.
          Today, the product is used by over 100 large firms, demonstrating the
          value of our iterative improvements and user-centric approach.
        </div>
      </div>
      <div className="section" id="res_to_ot">
        <div className="header1"><span>Responsibility to Others</span></div>
        <div className="box">
        As a Senior Software Engineer, my responsibilities to others encompass
        various aspects of technical leadership and collaboration, the app team
        in Gandhinagar is totally new and whenever any app comes for development
        I need to go through the app stack, architecture design of new feature
        and then taking the grooming session.
        <br />
        <br />
        <strong>
          Encouraging team to participate in different initiatives (Hackathon,
          Watsonx Challenge and POD 2.1):
        </strong>
        <br />
        I actively participate in different initiatives and technical events,
        contributing to discussions, sharing knowledge, and staying updated on
        industry trends. This involvement helps disseminate best practices and
        innovative solutions across teams, fostering a culture of continuous
        learning and improvement.
        <br />
        <br />
        <strong>Mentoring and Coaching the Team:</strong>
        <br />
        While starting any new feature or application, I provide mentorship and
        coaching to the team. This includes guiding junior developers through
        the initial setup, helping them understand the requirements, and
        offering insights into effective coding practices. My goal is to ensure
        that the team has a strong foundation and the necessary support to
        succeed in their tasks.
        <br />
        <br />
        <strong>Stretch Assignments:</strong>
        <br />I embrace stretch assignments to challenge myself and contribute
        to broader company initiatives. For instance, I took the lead in
        learning and implementing SPS using a demo account.
        </div>
      </div>
      <div className="section" id="innovations">
        <div className="header1"><span>Innovations</span></div>
        <div className="box">
        <strong>Idea 1: QRadar Health Monitoring and Troubleshoot</strong>
        <br />
        Link:{" "}
        <a href="https://github.ibm.com/shubham-rai/qradar-monitoring-health-checkup-and-troubleshooting-272e8318/">
          https://github.ibm.com/shubham-rai/qradar-monitoring-health-checkup-and-troubleshooting-272e8318/
        </a>
        <br />
        <br />
        <strong>Problem statement:</strong>
        <br />
        QRadar is large scale product, which have different components, i.e
        hosts, apps, services as of now there is no tool available in the market
        which can proerly monitor health and troubleshoot problem of overall
        components. How It will help: It has been observed that if any common
        problem arise in app it takes week to 2 week of downtime as it has
        process of going through L2 and L3 engineers, we are providing a service
        which user can open and troubleshoot the problem and can fix it easily.
        Brief on idea: Our team and I have developed an innovative QRadar health
        monitoring and troubleshooting application. This application facilitates
        comprehensive health checkups and troubleshooting for the following
        components: <br />- Installed Applications <br />- Managed Hosts <br />-
        Resources Services
        <br />- AI-enabled solutions for log-based troubleshooting
        <br />
        <br />
        <strong>
          Idea 2: Transformation of video content for accessibility
        </strong>
        <br />
        Link:{" "}
        <a href="https://github.ibm.com/shubham-rai/AI-Driven-Sign-Language-Detection/">
          https://github.ibm.com/shubham-rai/AI-Driven-Sign-Language-Detection/
        </a>
        <br />
        <br />
        <strong>Problem Statement:</strong>
        <br />
        The world is forwarding in a direction of providing more capabilities to
        specially enabled human being but still we do not have any tools
        available which can help specially enabled person (deaf) to understand a
        video content. Brief on idea: To address this issue as a part of watsonx
        challenge we are working on a solution where we will be transforming a
        video/live streaming to a video where in side there will be sign
        language attached to the video.
        <br />
        <br />
        <strong>Idea 3:</strong>
        <br />
        <strong>Problem Statement:</strong>
        <br />
        While numerous tools are available in the market to protect and secure
        data directly, data breaches can still occur through simple methods for
        critical data, such as someone looking at your computer screen over your
        shoulder. How it will help: To address this issue, we propose a solution
        that uses the device camera to detect if someone else is looking at the
        screen and blurs the screen details accordingly. We will be identifying
        the user using faceCam and once user will be validated then only we will
        show the details and in case some one else peek into your system we will
        be blur the screen, this idea is for critical data only.
        </div>
      </div>
      <div className="section" id="gr_skill">
        <div className="header1"><span>Growing your Skills and Expertise</span></div>
        <div className="box">
        In line with the breadth and depth concept, my expertise lies primarily
        in frontend technology, where I have spent the majority of my career. I
        am now transitioning toward full stack development. I have completed
        training in Node.js, Express, MongoDB, and GraphQL. I have also begun
        applying these technologies in my current project, where I am delivering
        results while continuing to learn.
        <br />
        <br />
        In addition to these skills, I have focused on cloud technologies. As
        part of this effort, I have started working on Secure Pipeline Services
        (SPS) backed by IBM. I am the only person on my team actively learning
        and mentoring others on SPS.
        <br />
        <br />
        Apart from this my career goal is to learn generative AI by the end of
        the year.
        <br />
        <a href="https://yourlearning.ibm.com/activity/QUIZ-6BF5281CDF8C">
          https://yourlearning.ibm.com/activity/QUIZ-6BF5281CDF8C
        </a>
        <br />
        <a href="https://yourlearning.ibm.com/certificate/URL-9219CDFC107D">
          https://yourlearning.ibm.com/certificate/URL-9219CDFC107D
        </a>
        </div>
      </div>
      <div className="section" id="em_en">
        <div className="header1"><span>Eminence & Engagement</span></div>
        <div className="box">
        <strong>Evidence 1:</strong>
        <br />
        In addition to managing and developing multiple project applications, I
        actively collaborate with the customer support team to troubleshoot and
        resolve issues as they arise. This dual engagement ensures that customer
        concerns are addressed promptly and effectively, while also maintaining
        the high quality and performance of our applications.
        <br />
        <br />
        <strong>Evidence 2:</strong>
        <br />
        Our team and I have developed an innovative QRadar health monitoring and
        troubleshooting application. This application facilitates comprehensive
        health checkups and troubleshooting for the following components:
        <br />
        Installed Applications
        <br />
        Managed Hosts
        <br />
        Resources
        <br />
        Services
        <br />
        AI-enabled solutions for log-based troubleshooting
        <br />
        <a href="https://github.ibm.com/shubham-rai/qradar-monitoring-health-checkup-and-troubleshooting-272e8318/">
          https://github.ibm.com/shubham-rai/qradar-monitoring-health-checkup-and-troubleshooting-272e8318/
        </a>
        <br />
        <br />
        <strong>Evidence 3:</strong>
        <br />
        Participated in watsonx challenge to implement accessibility for
        specially enabled person by transforming a video into a different video
        which will have original video along with sign language.
        </div>
      </div>
      <div className="section" id="te_le">
        <div className="header1"><span>Technical Leadership</span></div>
        <div className="box">
        Recently, the IBM QRadar apps team transitioned to Gandhinagar, and
        despite the lack of formal knowledge transfer, we promptly began working
        on various applications. Not only did we start working immediately, but
        we also successfully delivered multiple releases, incorporating
        important features across different apps. I took the lead in this
        transition, comprehending the project needs and features, while
        mentoring the team. Here’s how I demonstrated technical leadership:
        <br />
        <br />
        <strong>Mentorship and Onboarding:</strong>
        <br />
        I am sought after as a mentor for junior developers, providing guidance
        and support as they navigate new projects. I have also onboarded new
        team members, ensuring they are well-equipped to contribute effectively.
        <br />
        <br />
        <strong>Continuous learning:</strong>
        <br />
        By modeling and advocating for values that support a generative culture,
        I foster an environment where collaboration, continuous learning, and
        innovation thrive.
        <br />
        <br />
        <strong>Mentoring Leaders:</strong>
        <br />
        I mentor other mentors and technical leaders, sharing my experiences and
        insights to help them grow and excel in their roles.
        <br />
        <br />
        <strong>Community Contributions:</strong>
        <br />
        I actively contribute to the technical leadership community within our
        area and across IBM, participating in discussions, sharing best
        practices, and driving initiatives that enhance our collective
        expertise.
        <br />
        <br />
        <strong>Establishing IBM’s Leadership:</strong>
        <br />
        I work towards establishing IBM as a leader in technical leadership
        across the software and hardware industry by engaging with external
        communities and schools, promoting IBM’s values and expertise.
        <br />
        <br />
        <strong>Creating Impactful Materials:</strong>
        <br />
        I contribute to creating broad impact materials that improve awareness
        and practices around technical mentorship across various business units
        within IBM, ensuring a consistent and effective approach to mentorship
        company-wide.
        <br />
        <br />
        Through these efforts, I have demonstrated strong technical leadership,
        ensuring successful project deliveries while fostering a culture of
        mentorship and continuous improvement within IBM.
        </div>
      </div>
      <div className="section" id="industry">
        <div className="header1"><span>Industry</span></div>
        <div className="box">
        With 9 years of experience as a software developer, I am helping the
        industry by leveraging my expertise and engaging in a variety of
        impactful activities. I actively contribute by joining multiple tech
        events, where I share insights and learn from fellow professionals. I
        create micro frontend learning videos that are consumed in over 25
        countries, spreading valuable knowledge globally. My participation in
        various hackathons and tech challenges allows me to innovate and
        collaborate with top talent. Having served more than 10 customers across
        different domains, including fintech, healthcare, media and
        entertainment, learning and development, and security, I bring a wealth
        of experience and a diverse skill set to each project. My work not only
        supports my clients but also advances the broader tech community.
        </div>
      </div>
      <div className="section" id="aw_re">
        <div className="header1"><span>Awards, Recognition and Honours</span></div>
        <div className="box">
        I am honored to have received
        recognition for my contributions in both technical innovation and
        efficient project execution. Winning the 2nd prize in the Tech Umang
        hackathon underscores my ability to conceive and implement innovative
        ideas effectively. Moreover, successfully delivering multiple app
        releases without formal knowledge transfer sessions highlights my
        dedication and proficiency in navigating complex projects autonomously.
        These achievements have been acknowledged with bluepoints from my team,
        affirming my commitment to excellence and leadership in software
        development.
        </div>
        <br /><br />
      </div>
    </div>
  );
}
