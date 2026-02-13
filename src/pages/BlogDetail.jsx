

import { useParams, Link, useNavigate } from 'react-router-dom';
import { Share2, Heart, MessageCircle, Twitter, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Newsletter } from "../components/Newsletter";
import { Button } from "../components/ui/Button";
import { projectItems } from "../data/projectsData";
import blog1 from "../assets/blog1.jpeg";
import cultural from "../assets/cultural.png";
import spain from "../assets/spain.jpeg";
import a1 from "../assets/a1.jpeg";
import a2 from "../assets/a2.jpeg";
import a3 from "../assets/a3.jpeg";
import p1 from "../assets/p1.jpeg";

// Import blog posts data (same as Blog.jsx)
const blogPosts = [
    {
        id: "pyes-initiative",
        title: "PYES Initiative: Empowering the Next Generation of Nigerian Entrepreneurs",
        excerpt: "National youth empowerment scheme providing tools and training for sustainable livelihoods and economic independence.",
        fullContent: `The Presidential Youth Empowerment Scheme (PYES) represents a transformative initiative aimed at empowering Nigerian youth through skills acquisition, entrepreneurship training, and access to modern business tools. Launched at the prestigious Aso Rock Villa in Abuja, this program provides young entrepreneurs with tricycles, motorcycles, and essential business equipment to kickstart their ventures.

The scheme focuses on creating sustainable livelihoods, reducing unemployment, and fostering economic independence among Nigeria's youth population. Through strategic partnerships with government agencies and private sector stakeholders, PYES has already impacted thousands of young Nigerians, providing them with the resources and training needed to build successful businesses and contribute meaningfully to the nation's economic growth.

By providing the necessary tools and training, PYES ensures that beneficiaries are not just given fish, but taught how to fish. This sustainable approach is key to long-term economic stability and youth engagement in the industrial sector.`,
        category: "Empowerment",
        image: p1,
        date: "February 13, 2026",
        readTime: "8 min read",
        author: "TEFMIN Empowerment Team",
        featured: true,
    },
    {
        id: "srms-pension-solution",
        title: "Digital Transformation in Pension Systems: NGF and SRMS Partner for 'I'm Alive' Solution Adoption",
        excerpt: "SRMS seeks a strategic partnership with the Nigeria Governor's Forum (NGF) to implement the innovative 'I'm Alive' pension verification system across all 36 states.",
        fullContent: `In a landmark move towards digital governance and social security reform, Secure Records Management Solutions (SRMS) has engaged with the Nigeria Governor's Forum (NGF) to propose the nationwide adoption of the "I'm Alive" pension verification solution.

The "I'm Alive" solution is a state-of-the-art technological platform designed to solve one of the most persistent challenges in Nigeria's public sector: the periodic verification of pensioners. Traditionally, elderly citizens have been forced to travel long distances and wait in grueling queues to prove they are still alive to receive their hard-earned benefits. SRMS's innovation replaces this cumbersome process with a seamless, mobile-first experience.

Leveraging sophisticated facial recognition, liveness detection, and biometric matching, the "I'm Alive" solution allows pensioners to verify their status from the comfort of their homes using a smartphone or at designated local access points. This adoption by state governments, facilitated by the NGF, promises to eliminate "ghost pensioners," drastically reduce administrative costs, and most importantly, restore dignity to our senior citizens.

During a recent strategic session with key stakeholders from the NGF, SRMS leadership demonstrated how the platform integrates with existing state payroll systems to provide real-time data accuracy. The partnership aims to create a uniform, secure, and transparent verification standard across all 36 states of the Federation.

"Our goal is to ensure that no Nigerian pensioner ever has to suffer the indignity of a verification queue again," stated a representative from the SRMS leadership. "By partnering with the NGF, we can scale this solution to every corner of the country, ensuring that the right benefits reach the right people at the right time."

This initiative marks a significant milestone for TEFMIN and its partners as we continue to drive institutional strengthening and human-centric technological adoption across Nigeria.`,
        category: "Innovation",
        image: blog1,
        date: "February 7, 2026",
        readTime: "7 min read",
        author: "TEFMIN Communications",
        featured: true,
    },
    {
        id: "spain-azud-visit",
        title: "On a working visit to AZUD Industries in Spain",
        excerpt: "TEFMIN delegation visits AZUD Industries in Spain to explore advanced irrigation technologies and sustainable agricultural solutions for Nigerian farmers.",
        fullContent: `In a significant step towards modernizing Nigeria's agricultural sector, a TEFMIN delegation recently undertook a working visit to AZUD Industries in Spain, one of the world's leading manufacturers of irrigation systems and agricultural technology solutions.

The visit, which took place at AZUD's state-of-the-art manufacturing facility, focused on exploring advanced irrigation technologies that could transform water management practices across Nigerian farms. With climate change increasingly affecting rainfall patterns and water availability, efficient irrigation systems have become critical for agricultural productivity and food security.

AZUD Industries, with over 35 years of experience in precision irrigation, showcased their latest innovations in drip irrigation, filtration systems, and fertigation technology. These systems can reduce water consumption by up to 60% while increasing crop yields by 40%—metrics that are particularly relevant for Nigeria's agricultural transformation agenda.

During the facility tour, the TEFMIN team observed the manufacturing process of micro-drip emitters, self-cleaning filters, and automated irrigation controllers. The precision engineering and quality control standards demonstrated by AZUD align perfectly with TEFMIN's commitment to bringing world-class technology to Nigerian farmers.

Discussions centered on potential partnership models that would enable technology transfer, local assembly of irrigation components, and training programs for Nigerian agricultural engineers. AZUD expressed strong interest in establishing a regional hub in Nigeria to serve the West African market, creating jobs while making advanced irrigation technology more accessible and affordable.

The visit also included technical sessions on solar-powered irrigation systems—a perfect fit for Nigeria's abundant sunshine and rural electrification challenges. AZUD's solar pumping solutions can operate entirely off-grid, providing reliable water access to remote farming communities without dependence on diesel generators or unreliable grid power.

One particularly promising area of collaboration involves AZUD's precision fertigation systems, which deliver nutrients directly through irrigation water with computer-controlled precision. This technology can dramatically reduce fertilizer waste while optimizing plant nutrition—addressing both economic and environmental concerns.

The TEFMIN delegation included agricultural engineers, irrigation specialists, and representatives from farmer cooperatives who provided valuable insights into the specific challenges and requirements of Nigerian agriculture. This ground-level perspective helped shape discussions around product adaptation and localization strategies.

AZUD's commitment to sustainability resonated strongly with TEFMIN's values. Their systems not only conserve water but also reduce energy consumption, minimize chemical runoff, and support organic farming practices. These environmental benefits align with Nigeria's climate commitments and the growing global demand for sustainably produced agricultural products.

Looking ahead, both organizations have committed to developing a detailed implementation roadmap. This includes pilot projects in select Nigerian states, training programs for local technicians, and exploration of financing mechanisms that make the technology accessible to smallholder farmers—not just large commercial operations.

The Spain visit represents more than a technology scouting mission—it's about building lasting partnerships that bring global expertise to Nigerian challenges while creating opportunities for local innovation and entrepreneurship. As we work to feed a growing population while managing scarce water resources, collaborations like this become essential building blocks of our agricultural future.`,
        category: "Innovation",
        image: spain,
        date: "February 10, 2026",
        readTime: "8 min read",
        author: "TEFMIN International Relations",
        featured: false,
    },
    {
        id: 1,
        title: "Nigeria's Path to Industrial Self-Sufficiency: A 2026 Vision",
        excerpt: "Exploring how local manufacturing can transform our economy and create millions of jobs for Nigerian youth.",
        fullContent: `Nigeria stands at a pivotal moment in its economic history. With a population exceeding 200 million and a median age of just 18 years, the country possesses an extraordinary demographic dividend that, if properly harnessed, could transform it into Africa's manufacturing powerhouse.

The path to industrial self-sufficiency is not merely an economic strategy—it's a matter of national survival and dignity. For too long, we have exported raw materials only to import finished goods at premium prices. This cycle of dependency has drained our foreign reserves, weakened our currency, and left millions unemployed.

TEFMIN's vision for 2026 centers on three core pillars: First, the establishment of regional manufacturing hubs that leverage local resources and talent. Second, a comprehensive skills development program that prepares our youth for modern industrial work. Third, strategic partnerships with international technology providers to accelerate our learning curve.

The numbers tell a compelling story. Local manufacturing could reduce import dependency by 40% within five years, create over 2 million direct jobs, and generate $50 billion in economic value. But these figures only become reality through coordinated action between government, private sector, and civil society.

We are not starting from zero. Nigeria already has pockets of manufacturing excellence—from textile mills in Kaduna to cement plants in Ogun, from food processing facilities in Kano to pharmaceutical companies in Lagos. What we need now is to connect these dots, share best practices, and scale what works.

The future is not something that happens to us. It is something we create. And that future, we firmly believe, will be Made in Nigeria.`,
        category: "Industry",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        date: "February 5, 2026",
        readTime: "8 min read",
        author: "TEFMIN Editorial Team",
        featured: true,
    },
    {
        id: "alhamadinah-integrated-farms",
        title: "Alhamadinah Integrated Farms: A New Era of Sustainable Agriculture and Industrial Innovation",
        excerpt: "Exploring the groundbreaking transformation of Alhamadinah Integrated Farms into a model of sustainable, high-tech agricultural excellence.",
        fullContent: `Alhamadinah Integrated Farms is setting a new standard for modern agriculture in Nigeria. Through a strategic partnership with TEFMIN, the farm has implemented cutting-edge integrated management systems that harmonize diverse agricultural activities into a cohesive, high-efficiency operation.

The core of Alhamadinah's success lies in its 'Circle of Life' approach, where waste from one section becomes the nutrient source for another. This closed-loop system not only reduces environmental impact but also significantly lowers operational costs. Our consultation has helped transition the farm toward 100% sustainable practices, ensuring long-term soil health and productivity.

Sustainability is no longer a luxury; it is a necessity for the future of Nigerian agriculture. Alhamadinah Integrated Farms has become a beacon of hope, demonstrating that eco-friendly farming is not only possible but highly profitable. Through TEFMIN's consultation, Alhamadinah has adopted advanced water conservation techniques, including solar-powered drip irrigation systems that deliver water directly to the plant roots. This has reduced water consumption by 40% while maintaining optimal growth conditions even during the dry season.

The farm also utilizes organic fertilization methods, leveraging poultry and livestock waste processed through industrial-grade composting units. These practices have revitalized the land, producing nutrient-dense crops that command premium prices in both local and international markets.

Strategic consultation is the bridge between potential and performance. In the case of Alhamadinah Integrated Farms, TEFMIN's involvement has been transformative, moving the operation from traditional methods to a data-driven, industrial-scale enterprise. Our advisory services covered everything from organizational structure to supply chain optimization. We helped Alhamadinah establish direct links with industrial buyers, ensuring that their products reach the market at the peak of freshness and value. This vertical integration has significantly increased the farm's profit margins.

Furthermore, we've implemented comprehensive training programs for the farm staff, ensuring that the local community benefits from the knowledge and technology transfer. Alhamadinah is now not just a farm, but a center of excellence for agricultural innovation in the region.`,
        category: "Innovation",
        image: a1,
        images: [a1, a2, a3],
        date: "February 12, 2026",
        readTime: "12 min read",
        author: "TEFMIN & Alhamadinah Team",
        featured: true,
    },
    {
        id: 2,
        title: "The Role of Technology in Modern African Manufacturing",
        excerpt: "How AI, automation, and IoT are revolutionizing production lines across the continent.",
        fullContent: `The Fourth Industrial Revolution is not just a buzzword—it's reshaping how goods are produced across the globe. For African manufacturers, this presents both a challenge and an unprecedented opportunity to leapfrog traditional industrialization pathways.

Artificial Intelligence is transforming quality control. Computer vision systems can now detect defects with 99.9% accuracy, far exceeding human capabilities. Nigerian manufacturers who adopt these technologies early gain a significant competitive advantage, reducing waste and improving product consistency.

The Internet of Things (IoT) enables predictive maintenance, potentially reducing downtime by up to 50%. Smart sensors monitor equipment health in real-time, alerting operators before failures occur. This is particularly valuable in contexts where spare parts may take weeks to import.

Automation doesn't mean eliminating jobs—it means elevating them. Workers transition from repetitive manual tasks to supervising intelligent systems, programming robots, and analyzing data. The key is investing in workforce retraining to ensure no one is left behind.

TEFMIN's technology partnerships are bringing these capabilities to Nigerian SMEs at accessible price points. Through shared manufacturing hubs, even small producers can access world-class automation without prohibitive capital investments.

The future of African manufacturing is intelligent, connected, and distinctly African—built by us, for us, with the best of global technology adapted to our unique contexts.`,
        category: "Technology",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=600",
        date: "February 3, 2026",
        readTime: "6 min read",
        author: "Dr. Aisha Mohammed",
    },
    {
        id: 3,
        title: "Empowering Women Entrepreneurs in Northern Nigeria",
        excerpt: "Success stories from our empowerment cycles that have transformed communities.",
        fullContent: `In the bustling markets of Kano, a quiet revolution is underway. Women who once sold small quantities of groundnuts from roadside stalls now own processing facilities that export to international markets. This transformation didn't happen by accident—it's the result of deliberate, sustained empowerment programs.

TEFMIN's Women Enterprise Initiative has trained over 5,000 women entrepreneurs across Northern Nigeria since 2024. The program goes beyond basic business skills to include financial literacy, digital marketing, and export documentation.

What makes this initiative unique is its recognition that women face specific barriers. Childcare responsibilities, mobility constraints, and limited access to formal credit all require tailored solutions. Our rotating savings groups, for instance, provide the social infrastructure that formal banks cannot.

The multiplier effect is remarkable. Research shows that women reinvest 90% of their income into their families and communities, compared to 35% for men. Every woman we empower creates ripples that extend to her children, extended family, and neighbors.

Success stories abound: Hajiya Fatima now employs 23 women in her shea butter processing cooperative. Hauwa's poultry business supplies three major supermarket chains. Aisha's tailoring workshop has trained 40 apprentices who have gone on to start their own businesses.

The future of Nigerian enterprise is increasingly female, and TEFMIN is proud to be a catalyst for this transformation.`,
        category: "Empowerment",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800&h=600",
        date: "January 28, 2026",
        readTime: "5 min read",
        author: "Amina Ibrahim",
    },
    {
        id: 4,
        title: "Sustainable Energy Solutions for Nigerian Industries: A Sino-Nigerian Partnership Story",
        excerpt: "A moment of cultural exchange under TEFMIN's Sino-Nigerian Initiative, reflecting the fusion of tradition and global partnership to drive entrepreneurship and innovation in Northern Nigeria.",
        fullContent: `A moment of cultural exchange under TEFMIN's Sino-Nigerian Initiative represents far more than a diplomatic handshake or a ceremonial photo opportunity. It embodies the fusion of tradition and global partnership, creating a powerful catalyst to drive entrepreneurship and innovation across Northern Nigeria.
        
The Sino-Nigerian Initiative was born from a simple recognition: China's remarkable journey from an agrarian economy to the world's manufacturing powerhouse offers invaluable lessons for Nigeria. However, this is not about copying a model wholesale—it's about adapting proven strategies to our unique cultural, economic, and geographical context.

Energy costs remain the single largest operational expense for most Nigerian manufacturers, often accounting for 40% or more of production costs. With grid electricity unreliable and diesel generators expensive and polluting, the business case for renewable energy has never been stronger.

Through our partnership with Chinese manufacturers, we're bringing cost reductions to Nigerian industries. For manufacturers with significant daytime operations, rooftop solar can now provide electricity at a fraction of grid or generator costs. But the innovation goes deeper: we're establishing local assembly plants in Kaduna and Kano, creating jobs while reducing import dependency.

The journey to net-zero is not just an environmental imperative—it's a business opportunity and a cultural bridge. Nigerian manufacturers who embrace clean energy today, supported by global partnerships built on mutual respect and cultural understanding, will lead the industries of tomorrow.`,
        category: "Energy",
        image: cultural,
        date: "February 9, 2026",
        readTime: "12 min read",
        author: "Emmanuel Okonkwo",
        featured: false,
    },
    {
        id: 5,
        title: "Building Local Supply Chains: From Farm to Factory",
        excerpt: "How TEFMIN is connecting local producers with manufacturing hubs across Nigeria.",
        fullContent: `Nigeria imports over $1 billion worth of raw materials annually that could be sourced domestically. This represents not just a drain on foreign exchange, but a missed opportunity to create jobs and value in local communities.

TEFMIN's Supply Chain Integration Program maps local production capabilities and connects them with industrial buyers. The platform now includes over 2,000 registered agricultural producers and 500 manufacturing enterprises.

Quality assurance is paramount. We've established testing laboratories that certify local materials meet international standards. This gives manufacturers confidence to switch from imports to local alternatives.

The benefits extend beyond cost savings. Shorter supply chains mean reduced lead times, lower inventory requirements, and greater flexibility to respond to market changes. When your supplier is 100 kilometers away rather than 10,000, adjustments happen in days rather than months.

For farmers and primary producers, industrial linkages provide stable, predictable demand. Contract farming arrangements guarantee prices and volumes, enabling investment in productivity improvements.

Case study: A textile manufacturer in Kano now sources 70% of its cotton locally, saving 35% on raw material costs while supporting over 500 farming families. The quality matches or exceeds imported alternatives.

The future of Nigerian industry is deeply rooted in Nigerian soil. Every local supply chain connection strengthens our collective resilience.`,
        category: "Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        date: "January 15, 2026",
        readTime: "6 min read",
        author: "Blessing Adekunle",
    },
    {
        id: 6,
        title: "Youth Innovation Hubs: Nurturing the Next Generation",
        excerpt: "Inside our tech incubators that are producing Nigeria's future industry leaders.",
        fullContent: `Nigeria's youth bulge is often described as a ticking time bomb—millions of young people entering a job market that can't absorb them. TEFMIN sees it differently: as an unprecedented resource that, properly channeled, can drive national transformation.

Our Youth Innovation Hubs operate in six states, providing young entrepreneurs with the tools, mentorship, and connections they need to build successful ventures. These aren't just co-working spaces—they're intensive acceleration programs.

The curriculum combines technical skills with business acumen. Participants learn product development, financial management, marketing, and leadership. Industry experts provide hands-on mentorship, sharing lessons from their own entrepreneurial journeys.

Access to prototyping equipment, 3D printers, and manufacturing tools allows young innovators to transform ideas into tangible products. Many participants arrive with concepts; they leave with market-ready prototypes and initial customers.

The results speak for themselves: Hub alumni have raised over ₦500 million in investment, created 350 direct jobs, and generated ₦1.2 billion in revenue. Sixty percent of ventures remain operational after three years—well above typical startup survival rates.

More importantly, these young entrepreneurs are changing the narrative. They're proving that Nigerian youth are not problems to be solved but solutions waiting to be unleashed.

The future isn't something we wait for. It's something these young leaders are building, one innovation at a time.`,
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600&fp-y=0.35",
        date: "January 10, 2026",
        readTime: "4 min read",
        author: "Chidi Emeka",
    },
    {
        id: 7,
        title: "Digital Transformation in Rural Agriculture",
        excerpt: "Bridging the digital divide for smallholder farmers through mobile-first solutions.",
        fullContent: `Rural agriculture remains the backbone of Nigeria's economy, yet many farmers are disconnected from modern markets and data-driven insights. TEFMIN's 'Digital Farm' initiative is changing this by bringing mobile technology to the heart of our rural communities.

Through a simple USSD interface, farmers can now access real-time weather forecasts, market prices, and expert advice on pest control. This information, previously unavailable or delayed, allows them to make informed decisions that directly impact their yields and income.

We've deployed solar-powered digital centers in over 50 villages, where farmers can learn how to use these tools and even access micro-financing tailored to their harvest cycles. The data collected from these interactions also helps us understand regional trends and anticipate food security challenges before they become crises.

The impact is measurable: farmers using our platform have seen an average 25% increase in productivity and a 30% rise in profit margins. By cutting out unnecessary middlemen and providing direct access to buyers, we are ensuring that the wealth generated on the farm stays with the farmers.

Technology is not a luxury for the urban elite; it is a fundamental tool for rural progress. As we scale this program, we are not just growing crops—we are growing a digital ecosystem that empowers everyone.`,
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
        date: "February 1, 2026",
        readTime: "5 min read",
        author: "Sarah Ogunlana",
    },
    {
        id: 8,
        title: "The Ethics of AI in African Industry",
        excerpt: "Navigating the complex landscape of automation while preserving human dignity.",
        fullContent: `As we integrate Artificial Intelligence into our manufacturing processes, we must ask ourselves: what kind of society are we building? At TEFMIN, we believe that technology should serve humanity, not replace it.

The 'Human-Centric Automation' framework we've developed focuses on augmenting human capabilities rather than simple substitution. For example, AI can handle heavy lifting or precision tasks that are dangerous for humans, while humans focus on creativity, complex problem-solving, and emotional intelligence—things AI still struggles with.

Ethical AI also means transparency and accountability. We ensure that all algorithmic decisions in our smart factories are auditable and unbiased. This is particularly important when AI is used in hiring or performance evaluation, where historical biases could otherwise be amplified.

Furthermore, we are committed to 'Just Transition' policies. Every time a process is automated, we provide the affected workers with re-skilling opportunities for higher-value roles within the same organization. Our goal is net job creation through the efficiency and growth that AI enables.

The future of African industry will be automated, but it must also be ethical. By setting these standards now, we ensure that the benefits of the Fourth Industrial Revolution are shared by all.`,
        category: "Technology",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
        date: "January 30, 2026",
        readTime: "7 min read",
        author: "Prof. Kolawole Balogun",
    },
    {
        id: 9,
        title: "Circular Economy: Waste to Wealth in Lagos",
        excerpt: "How local startups are turning industrial plastic waste into construction materials.",
        fullContent: `Lagos generates thousands of tons of plastic waste every day, much of it from industrial packaging. Instead of seeing this as a problem, a new wave of 'green-preneurs' sees it as a raw material for the city's future.

TEFMIN is proud to support several startups that have developed proprietary technology to melt down diverse plastic resins and mold them into high-density building blocks. These blocks are not only more durable than traditional concrete but also have better thermal insulation properties.

One such startup, 'EcoBuild', has already paved three community centers using bricks made entirely from recycled industrial wrappers. This approach solves two problems at once: it cleans up the environment and provides affordable, sustainable building materials for our growing population.

We are also working with large manufacturers to implement 'Closed-Loop' systems, where they take back their own packaging from customers and feed it back into their production lines. This reduces their raw material costs and eliminates their environmental footprint.

The circular economy is not just an environmental dream; it's a multi-billion naira industry waiting to be tapped. In Nigeria, we have the ingenuity and the necessity to lead the world in waste-to-wealth innovation.`,
        category: "Industry",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
        date: "January 25, 2026",
        readTime: "6 min read",
        author: "Funke Adewale",
    },
];

const BlogDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === id || p.id === parseInt(id)) || blogPosts[0];

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    // Get first 3 projects for Related Projects section
    const relatedProjects = projectItems.slice(0, 3);

    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300 font-sans">
            <section className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/blog")}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-secondary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Back to Blog</span>
                </button>

                {/* Header */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white mb-10 tracking-tight text-center">
                    Blog News
                </h1>

                {/* Breadcrumbs matching design */}
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-12">
                    <Link to="/blog" className="hover:text-black dark:hover:text-white">Blog</Link>
                    <span>/</span>
                    <span className="text-black dark:text-white font-bold">All</span>
                </div>

                {/* Post Info */}
                <div className="mb-4">
                    <p className="text-gray-400 text-sm font-medium">
                        By <span className="text-gray-600 dark:text-gray-300">{post.author}</span> | Published on {post.date}
                    </p>
                </div>
            </section>

            {/* Content Area */}
            <div className="max-w-5xl mx-auto px-6">

                {/* Featured Image or Gallery */}
                {post.images && post.images.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {post.images.map((img, index) => (
                            <div key={index} className="w-full h-[300px] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
                                <img src={img} alt={`${post.title} ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden mb-12 shadow-xl">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Blog Post Title */}
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 leading-tight">
                    {post.title}
                </h2>

                {/* Article Body */}
                <article className="prose prose-lg dark:prose-invert max-w-none mb-16">
                    <div className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                        {post.fullContent.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-6 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>

                {/* Share and Interactions Section matching design */}
                <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-16">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                            Share this post:
                        </div>
                        <div className="flex items-center gap-6 text-gray-500">
                            <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors">
                                <Heart size={20} /> <span className="text-sm font-medium">23</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
                                <MessageCircle size={20} /> <span className="text-sm font-medium">5</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition-colors">
                                <Share2 size={20} /> <span className="text-sm font-medium">12</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Comments (5)</h3>
                    <div className="space-y-8">
                        {[
                            { name: 'Ethan Carter', date: 'August 16, 2024', comment: 'Great insights, Dr. Sharma! This article is very helpful for understanding the legal landscape in the tech industry.', avatar: 'https://i.pravatar.cc/150?u=ethan' },
                            { name: 'Olivia Bennett', date: 'August 17, 2024', comment: 'I appreciate the clear explanations of complex legal concepts. The section on data privacy was particularly informative.', avatar: 'https://i.pravatar.cc/150?u=olivia' },
                            { name: 'Dr. Anya Sharma', date: 'August 17, 2024', comment: 'Thank you, Olivia! I\'m glad you found the information helpful.', avatar: 'https://i.pravatar.cc/150?u=anya', isAuthor: true }
                        ].map((comment, idx) => (
                            <div key={idx} className={`flex gap-4 ${comment.isAuthor ? 'ml-12 md:ml-20' : ''}`}>
                                <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-gray-900 dark:text-white text-sm">{comment.name}</span>
                                        <span className="text-xs text-gray-400">{comment.date}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Comment Input */}
                    <div className="mt-12 flex gap-4">
                        <img src="https://i.pravatar.cc/150?u=me" alt="User" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg p-4 text-sm focus:ring-0 focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors mb-4"
                            />
                            <button className="bg-[#FFC107] text-black font-bold px-6 py-2 rounded text-sm hover:bg-[#ffcd38] transition-colors">
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Projects Section */}
            <section className="max-w-7xl mx-auto px-6 mt-32 mb-24">
                <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
                    Related Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col transition-all hover:shadow-2xl">
                                <div className="relative h-[240px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="glass px-4 py-2 rounded-full text-xs font-bold text-primary dark:text-secondary">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500">#{tag}</span>
                                            ))}
                                        </div>
                                        <Button variant="ghost" className="p-0 flex items-center gap-2 group-hover:text-primary text-xs">
                                            Read More <ArrowRight size={14} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <div className="mt-24">
                <Newsletter />
            </div>
        </div>
    );
};

export default BlogDetailPage;
