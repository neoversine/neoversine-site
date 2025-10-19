import React from 'react';

const ServiceTechStack = ({ techStack }) => {
    if (!techStack) return null;

    const categoryIcons = {
        'Frontend': '🎨',
        'Backend': '⚙️',
        'Database': '🗄️',
        'Cloud': '☁️',
        'Tools': '🛠️',
        'AI/ML': '🤖',
        'AI': '🤖',
        'Analytics': '📊',
        'Testing': '🧪',
        'DesignTools': '✨',
        'AI_Tools': '🎯',
        'WorkflowTools': '📋',
        'Frameworks': '🔧',
        'Integration': '🔗',
        'Automation': '🔄',
        'MarketingTools': '📈',
        'Platforms': '🛍️',
        'Infrastructure': '🏗️',
        'DevOps': '🚀',
        'Monitoring': '📡',
        'Security': '🔒'
    };

    // Technology icons and descriptions
    const techInfo = {
        // Frontend
        'React': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'A JavaScript library for building fast, interactive user interfaces with reusable components.', link: 'https://react.dev' },
        'Next.js': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', desc: 'React framework for production-grade applications with server-side rendering and routing.', link: 'https://nextjs.org' },
        'Tailwind CSS': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', desc: 'Utility-first CSS framework for rapidly building custom, responsive designs.', link: 'https://tailwindcss.com' },
        'Framer Motion': { icon: 'https://cdn.simpleicons.org/framer/0055FF', desc: 'Production-ready animation library for React with smooth, declarative animations.', link: 'https://www.framer.com/motion' },
        'TypeScript': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', desc: 'Typed superset of JavaScript that compiles to plain JavaScript for safer code.', link: 'https://www.typescriptlang.org' },
        'React Native': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Framework for building native mobile apps using React and JavaScript.', link: 'https://reactnative.dev' },
        'Flutter': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', desc: 'Google\'s UI toolkit for building natively compiled apps from a single codebase.', link: 'https://flutter.dev' },
        'Expo': { icon: 'https://cdn.simpleicons.org/expo/000020', desc: 'Platform for making universal React apps that run on Android, iOS, and web.', link: 'https://expo.dev' },
        'Redux': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', desc: 'Predictable state container for JavaScript apps with centralized data management.', link: 'https://redux.js.org' },
        
        // Backend
        'Node.js': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'JavaScript runtime built on Chrome\'s V8 engine for scalable network applications.', link: 'https://nodejs.org' },
        'Express': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', desc: 'Fast, minimalist web framework for Node.js with robust routing and middleware.', link: 'https://expressjs.com' },
        'NestJS': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', desc: 'Progressive Node.js framework for building efficient, scalable server-side applications.', link: 'https://nestjs.com' },
        'MongoDB': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'NoSQL database that stores data in flexible, JSON-like documents.', link: 'https://www.mongodb.com' },
        'PostgreSQL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', desc: 'Powerful, open-source relational database with advanced features and reliability.', link: 'https://www.postgresql.org' },
        'GraphQL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', desc: 'Query language for APIs that gives clients exactly the data they request.', link: 'https://graphql.org' },
        'Python': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'High-level programming language perfect for AI, automation, and backend development.', link: 'https://www.python.org' },
        'Django': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', desc: 'High-level Python web framework that encourages rapid development and clean design.', link: 'https://www.djangoproject.com' },
        'Redis': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', desc: 'In-memory data structure store used as database, cache, and message broker.', link: 'https://redis.io' },
        
        // AI/ML
        'OpenAI API': { icon: 'https://cdn.simpleicons.org/openai/412991', desc: 'Access to powerful GPT models for natural language processing and generation.', link: 'https://openai.com/api' },
        'Gemini': { icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2', desc: 'Google\'s advanced AI model for multimodal understanding and generation.', link: 'https://deepmind.google/technologies/gemini' },
        'LangChain': { icon: 'https://cdn.simpleicons.org/langchain/1C3C3C', desc: 'Framework for developing applications powered by language models with chaining.', link: 'https://www.langchain.com' },
        'PyTorch': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', desc: 'Open-source machine learning library for Python with dynamic computation graphs.', link: 'https://pytorch.org' },
        'TensorFlow': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', desc: 'End-to-end platform for machine learning with comprehensive ecosystem.', link: 'https://www.tensorflow.org' },
        'Dialogflow': { icon: 'https://cdn.simpleicons.org/dialogflow/FF9800', desc: 'Google\'s conversational AI platform for building chatbots and voice assistants.', link: 'https://cloud.google.com/dialogflow' },
        'Rasa': { icon: 'https://cdn.simpleicons.org/rasa/5A17EE', desc: 'Open-source framework for building contextual AI assistants and chatbots.', link: 'https://rasa.com' },
        'GPT models': { icon: 'https://cdn.simpleicons.org/openai/412991', desc: 'State-of-the-art language models for text generation and understanding.', link: 'https://openai.com/gpt-4' },
        'Midjourney': { icon: 'https://cdn.simpleicons.org/midjourney/000000', desc: 'AI-powered image generation tool for creating stunning visual content.', link: 'https://www.midjourney.com' },
        'ChatGPT': { icon: 'https://cdn.simpleicons.org/openai/412991', desc: 'Conversational AI assistant for generating human-like text responses.', link: 'https://chat.openai.com' },
        'Canva AI': { icon: 'https://cdn.simpleicons.org/canva/00C4CC', desc: 'AI-powered design tools for creating professional graphics effortlessly.', link: 'https://www.canva.com/ai-image-generator' },
        
        // Tools & Platforms
        'Docker': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', desc: 'Platform for developing, shipping, and running applications in containers.', link: 'https://www.docker.com' },
        'GitHub': { icon: 'https://cdn.simpleicons.org/github/181717', desc: 'Version control platform for collaborative software development and code hosting.', link: 'https://github.com' },
        'Figma': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', desc: 'Collaborative interface design tool for creating beautiful UI/UX designs.', link: 'https://www.figma.com' },
        'Vercel': { icon: 'https://cdn.simpleicons.org/vercel/000000', desc: 'Cloud platform for deploying and hosting modern web applications instantly.', link: 'https://vercel.com' },
        'Firebase': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', desc: 'Google\'s platform for building mobile and web apps with backend services.', link: 'https://firebase.google.com' },
        'Supabase': { icon: 'https://cdn.simpleicons.org/supabase/3ECF8E', desc: 'Open-source Firebase alternative with Postgres database and authentication.', link: 'https://supabase.com' },
        'n8n': { icon: 'https://cdn.simpleicons.org/n8n/EA4B71', desc: 'Workflow automation tool for connecting apps and creating automated processes.', link: 'https://n8n.io' },
        'Zapier': { icon: 'https://cdn.simpleicons.org/zapier/FF4A00', desc: 'Automation platform connecting 5000+ apps to automate workflows without code.', link: 'https://zapier.com' },
        'Make.com': { icon: 'https://cdn.simpleicons.org/make/6D00CC', desc: 'Visual platform for designing and automating workflows between apps.', link: 'https://www.make.com' },
        'Google Analytics': { icon: 'https://cdn.simpleicons.org/googleanalytics/E37400', desc: 'Web analytics service tracking and reporting website traffic and behavior.', link: 'https://analytics.google.com' },
        'Lighthouse': { icon: 'https://cdn.simpleicons.org/googlelighthouse/F44B21', desc: 'Automated tool for improving web page quality and performance.', link: 'https://developers.google.com/web/tools/lighthouse' },
        'Jest': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', desc: 'Delightful JavaScript testing framework with focus on simplicity.', link: 'https://jestjs.io' },
        'Postman': { icon: 'https://cdn.simpleicons.org/postman/FF6C37', desc: 'API platform for building, testing, and documenting APIs efficiently.', link: 'https://www.postman.com' },
        'Jira': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', desc: 'Project management tool for agile teams to plan, track, and release software.', link: 'https://www.atlassian.com/software/jira' },
        'Notion': { icon: 'https://cdn.simpleicons.org/notion/000000', desc: 'All-in-one workspace for notes, docs, wikis, and project management.', link: 'https://www.notion.so' },
        'Miro': { icon: 'https://cdn.simpleicons.org/miro/050038', desc: 'Online collaborative whiteboard platform for visual team collaboration.', link: 'https://miro.com' },
        'Slack': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', desc: 'Business communication platform for team messaging and collaboration.', link: 'https://slack.com' },
        
        // Cloud & DevOps
        'AWS': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', desc: 'Amazon\'s comprehensive cloud computing platform with 200+ services.', link: 'https://aws.amazon.com' },
        'GCP': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', desc: 'Google Cloud Platform offering scalable infrastructure and AI services.', link: 'https://cloud.google.com' },
        'Azure': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', desc: 'Microsoft\'s cloud computing service for building and managing applications.', link: 'https://azure.microsoft.com' },
        'Kubernetes': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', desc: 'Container orchestration platform for automating deployment and scaling.', link: 'https://kubernetes.io' },
        'Terraform': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', desc: 'Infrastructure as code tool for building and managing cloud infrastructure.', link: 'https://www.terraform.io' },
        'GitHub Actions': { icon: 'https://cdn.simpleicons.org/githubactions/2088FF', desc: 'Automation platform for CI/CD pipelines directly in GitHub repositories.', link: 'https://github.com/features/actions' },
        'CI/CD Pipelines': { icon: 'https://cdn.simpleicons.org/gitlab/FC6D26', desc: 'Automated workflows for continuous integration and deployment of code.', link: 'https://about.gitlab.com/topics/ci-cd' },
        'Prometheus': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', desc: 'Open-source monitoring and alerting toolkit for cloud-native applications.', link: 'https://prometheus.io' },
        'Grafana': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', desc: 'Analytics platform for visualizing metrics, logs, and traces from data.', link: 'https://grafana.com' },
        'New Relic': { icon: 'https://cdn.simpleicons.org/newrelic/008C99', desc: 'Observability platform for monitoring application performance and health.', link: 'https://newrelic.com' },
        
        // E-commerce & Marketing
        'Shopify': { icon: 'https://cdn.simpleicons.org/shopify/7AB55C', desc: 'Leading e-commerce platform for creating online stores and selling products.', link: 'https://www.shopify.com' },
        'WooCommerce': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg', desc: 'WordPress plugin for building customizable online stores with flexibility.', link: 'https://woocommerce.com' },
        'Magento': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg', desc: 'Enterprise-level e-commerce platform with advanced customization options.', link: 'https://magento.com' },
        'Snipcart': { icon: 'https://cdn.simpleicons.org/snipcart/FF4E68', desc: 'Shopping cart solution that integrates with any website or CMS.', link: 'https://snipcart.com' },
        'Stripe API': { icon: 'https://cdn.simpleicons.org/stripe/008CDD', desc: 'Payment processing platform for online transactions with robust API.', link: 'https://stripe.com/docs/api' },
        'HubSpot': { icon: 'https://cdn.simpleicons.org/hubspot/FF7A59', desc: 'Marketing, sales, and service software for growing businesses.', link: 'https://www.hubspot.com' },
        'Mailchimp': { icon: 'https://cdn.simpleicons.org/mailchimp/FFE01B', desc: 'Email marketing platform for creating and managing email campaigns.', link: 'https://mailchimp.com' },
        'Google Ads': { icon: 'https://cdn.simpleicons.org/googleads/4285F4', desc: 'Online advertising platform for reaching customers across Google services.', link: 'https://ads.google.com' },
        'Meta Ads Manager': { icon: 'https://cdn.simpleicons.org/meta/0668E1', desc: 'Tool for creating and managing ads across Facebook and Instagram.', link: 'https://business.facebook.com/adsmanager' },
        'Hotjar': { icon: 'https://cdn.simpleicons.org/hotjar/FD3A5C', desc: 'Behavior analytics tool showing how users interact with your website.', link: 'https://www.hotjar.com' },
        'Mixpanel': { icon: 'https://cdn.simpleicons.org/mixpanel/7856FF', desc: 'Product analytics platform tracking user interactions and engagement.', link: 'https://mixpanel.com' },
        
        // Integration & Communication
        'Telegram': { icon: 'https://cdn.simpleicons.org/telegram/26A5E4', desc: 'Cloud-based messaging app with bot API for automated interactions.', link: 'https://telegram.org' },
        'WhatsApp': { icon: 'https://cdn.simpleicons.org/whatsapp/25D366', desc: 'Popular messaging platform with business API for customer communication.', link: 'https://www.whatsapp.com/business' },
        'Web Widgets': { icon: 'https://cdn.simpleicons.org/w3c/005A9C', desc: 'Embeddable components for adding interactive features to websites.', link: 'https://www.w3.org/TR/widgets' },
        'Google Workspace': { icon: 'https://cdn.simpleicons.org/google/4285F4', desc: 'Suite of cloud productivity tools including Gmail, Docs, and Drive.', link: 'https://workspace.google.com' },
        
        // Design
        'Adobe XD': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', desc: 'Vector design tool for creating UI/UX designs and interactive prototypes.', link: 'https://www.adobe.com/products/xd.html' },
        'Photoshop': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', desc: 'Industry-standard software for photo editing and graphic design.', link: 'https://www.adobe.com/products/photoshop.html' },
        'Illustrator': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', desc: 'Vector graphics editor for creating logos, icons, and illustrations.', link: 'https://www.adobe.com/products/illustrator.html' },
        
        // Security
        'OWASP best practices': { icon: 'https://cdn.simpleicons.org/owasp/000000', desc: 'Security guidelines for building secure web applications and APIs.', link: 'https://owasp.org/www-project-top-ten' },
        'SSL/TLS': { icon: 'https://cdn.simpleicons.org/letsencrypt/003A70', desc: 'Cryptographic protocols for secure communication over computer networks.', link: 'https://www.ssl.com/faqs/faq-what-is-ssl' },
        'IAM Policies': { icon: 'https://cdn.simpleicons.org/amazonaws/232F3E', desc: 'Identity and access management for controlling user permissions securely.', link: 'https://aws.amazon.com/iam' }
    };

    return (
        <section className="py-16 md:py-2 px-4 md:px-8 max-w-6xl mx-auto">
            <div data-aos="fade-up">
                {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    Technology Stack
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    We use cutting-edge technologies to build robust, scalable solutions
                </p> */}
                <div className="space-y-6">
                    {Object.entries(techStack).map(([category, items], index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="text-xl">{categoryIcons[category] || '💻'}</span>
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {items.map((item, idx) => {
                                    const tech = techInfo[item] || { icon: '⚙️', desc: 'Powerful technology for modern development.', link: '#' };
                                    return (
                                        <a 
                                            key={idx}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-slate-950/80 border border-slate-800/50 rounded-lg p-4 hover:border-cyan-500/40 hover:bg-slate-900/50 transition-all duration-300 block cursor-pointer"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={item}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'block';
                                                        }}
                                                    />
                                                    <span className="text-2xl hidden">⚙️</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors truncate">
                                                        {item}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                                                        {tech.desc}
                                                    </p>
                                                </div>
                                                <button className="flex-shrink-0 text-slate-600 hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTechStack;
