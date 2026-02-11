import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import blog1 from "../assets/blog1.jpeg";
import cultural from "../assets/cultural.png";
import spain from "../assets/spain.jpeg";

const blogPosts = [
    {
        id: "srms-pension-solution",
        title: "Digital Transformation in Pension Systems: NGF and SRMS Partner for 'I'm Alive' Solution Adoption",
        excerpt: "SRMS seeks a strategic partnership with the Nigeria Governor’s Forum (NGF) to implement the innovative 'I'm Alive' pension verification system across all 36 states.",
        fullContent: `In a landmark move towards digital governance and social security reform, Secure Records Management Solutions (SRMS) has engaged with the Nigeria Governor’s Forum (NGF) to propose the nationwide adoption of the "I’m Alive" pension verification solution.

The "I’m Alive" solution is a state-of-the-art technological platform designed to solve one of the most persistent challenges in Nigeria's public sector: the periodic verification of pensioners. Traditionally, elderly citizens have been forced to travel long distances and wait in grueling queues to prove they are still alive to receive their hard-earned benefits. SRMS's innovation replaces this cumbersome process with a seamless, mobile-first experience.

Leveraging sophisticated facial recognition, liveness detection, and biometric matching, the "I’m Alive" solution allows pensioners to verify their status from the comfort of their homes using a smartphone or at designated local access points. This adoption by state governments, facilitated by the NGF, promises to eliminate "ghost pensioners," drastically reduce administrative costs, and most importantly, restore dignity to our senior citizens.

During a recent strategic session with key stakeholders from the NGF, SRMS leadership demonstrated how the platform integrates with existing state payroll systems to provide real-time data accuracy. The partnership aims to create a uniform, secure, and transparent verification standard across all 36 states of the Federation.

"Our goal is to ensure that no Nigerian pensioner ever has to suffer the indignity of a verification queue again," stated a representative from the SRMS leadership. "By partnering with the NGF, we can scale this solution to every corner of the country, ensuring that the right benefits reach the right people at the right time."

This initiative marks a significant milestone for TEFMIN and its partners as we continue to drive institutional strengthening and human-centric technological adoption across Nigeria.`,
        category: "Innovation",
        image: blog1,
        date: "February 7, 2026",
        readTime: "7 min read",
        author: "TEFMIN Communications",
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
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
        date: "January 28, 2026",
        readTime: "5 min read",
        author: "Amina Ibrahim",
    },
    {
        id: 4,
        title: "Sustainable Energy Solutions for Nigerian Industries: A Sino-Nigerian Partnership Story",
        excerpt: "A moment of cultural exchange under TEFMIN's Sino-Nigerian Initiative, reflecting the fusion of tradition and global partnership to drive entrepreneurship and innovation in Northern Nigeria.",
        fullContent: `A moment of cultural exchange under TEFMIN's Sino-Nigerian Initiative represents far more than a diplomatic handshake or a ceremonial photo opportunity. It embodies the fusion of tradition and global partnership, creating a powerful catalyst to drive entrepreneurship and innovation across Northern Nigeria. This initiative stands as a testament to how cross-cultural collaboration can unlock sustainable solutions to our most pressing industrial challenges.

The Sino-Nigerian Initiative was born from a simple recognition: China's remarkable journey from an agrarian economy to the world's manufacturing powerhouse offers invaluable lessons for Nigeria. However, this is not about copying a model wholesale—it's about adapting proven strategies to our unique cultural, economic, and geographical context. The cultural exchange component ensures that technology transfer happens with cultural sensitivity and local ownership.

During a recent cultural exchange event in Kano, Chinese renewable energy experts sat alongside Northern Nigerian entrepreneurs, sharing tea and stories before diving into technical discussions about solar panel manufacturing. This deliberate blending of social connection with technical knowledge transfer has proven remarkably effective. When people understand each other's values and aspirations, technology adoption accelerates dramatically.

Energy costs remain the single largest operational expense for most Nigerian manufacturers, often accounting for 40% or more of production costs. With grid electricity unreliable and diesel generators expensive and polluting, the business case for renewable energy has never been stronger. This is where the Sino-Nigerian partnership becomes transformative—bringing not just technology, but also financing models, maintenance expertise, and local manufacturing capabilities.

Solar power costs have dropped by 89% over the past decade globally, and through our partnership with Chinese manufacturers, we're bringing these cost reductions to Nigerian industries. For manufacturers with significant daytime operations, rooftop solar can now provide electricity at a fraction of grid or generator costs. But the innovation goes deeper: we're establishing local assembly plants in Kaduna and Kano, creating jobs while reducing import dependency.

The cultural exchange aspect has been crucial in building trust and ensuring sustainable adoption. Northern Nigerian business culture values long-term relationships and community benefit over quick transactions. Chinese partners, coming from a similarly relationship-oriented business culture, understood this intuitively. Joint training programs don't just teach technical skills—they build lasting partnerships where Nigerian engineers work alongside Chinese experts, learning not just what to do, but why certain approaches work.

Hybrid systems that combine solar, batteries, and backup generators offer the best of all worlds: clean power when the sun shines, stored power for cloudy periods, and generator backup for extended outages. Smart controllers, many now assembled locally through our partnership, optimize the mix automatically. This technology, once exclusively imported, is now being manufactured in Nigeria by Nigerian workers trained through the Sino-Nigerian Initiative.

The entrepreneurship dimension of this partnership extends beyond large manufacturers. We've established Innovation Hubs in six Northern states where young Nigerian entrepreneurs can access Chinese-made prototyping equipment, 3D printers, and renewable energy testing facilities. These hubs have become melting pots of innovation, where traditional Nigerian craftsmanship meets cutting-edge Chinese manufacturing technology.

One remarkable success story involves Hajiya Amina, a textile entrepreneur from Katsina. Through the program, she traveled to Guangzhou to study solar-powered textile manufacturing. Upon returning, she implemented a hybrid solar system that cut her energy costs by 65%. More importantly, she now mentors other women entrepreneurs, creating a multiplier effect that extends far beyond her own business.

Beyond cost savings, renewable energy enhances competitiveness in global markets. International buyers increasingly require suppliers to demonstrate environmental responsibility. Carbon footprint certifications are becoming essential for export-oriented manufacturers. The Sino-Nigerian Initiative includes certification support, helping Nigerian manufacturers meet international environmental standards and access premium export markets.

The cultural exchange works both ways. Chinese partners have gained deep insights into the Nigerian market, leading to product adaptations that better serve African conditions. Solar panels now come with dust-resistant coatings suitable for Sahel conditions. Battery systems are optimized for high-temperature performance. Inverters include features that handle the voltage fluctuations common in Nigerian grid connections.

TEFMIN's Energy Access Initiative, operating under this partnership framework, works with leading solar providers to offer financing solutions that make the transition affordable. Manufacturers can pay from savings, with no upfront capital required. This "pay-as-you-save" model, refined through Chinese experience with rural electrification, has enabled over 200 Nigerian manufacturers to transition to renewable energy in the past year alone.

The initiative also addresses the skills gap that has historically hindered technology adoption. Joint training centers in Abuja, Kano, and Lagos offer intensive programs where Nigerian technicians learn installation, maintenance, and troubleshooting of renewable energy systems. The curriculum blends Chinese technical expertise with Nigerian practical knowledge, creating a uniquely effective learning environment.

Community engagement has been central to the initiative's success. We don't just install solar panels—we build understanding and ownership. Town hall meetings, conducted in local languages with cultural sensitivity, explain the technology, address concerns, and incorporate community feedback. This approach, drawing on both Chinese community mobilization experience and Nigerian traditional governance structures, has achieved remarkable buy-in rates.

The environmental impact extends beyond individual factories. As more manufacturers adopt clean energy, air quality in industrial areas improves measurably. Children in communities near factories report fewer respiratory issues. Workers enjoy healthier conditions. The cumulative effect of hundreds of businesses transitioning to clean energy creates visible, tangible improvements in quality of life.

Looking forward, the Sino-Nigerian Initiative is expanding into energy storage and electric vehicle charging infrastructure. Northern Nigeria's abundant sunshine makes it ideal for solar energy, but storage technology will unlock 24-hour clean power. Pilot projects in Kaduna are already demonstrating how large-scale battery systems can stabilize power supply for entire industrial estates.

The journey to net-zero is not just an environmental imperative—it's a business opportunity and a cultural bridge. Nigerian manufacturers who embrace clean energy today, supported by global partnerships built on mutual respect and cultural understanding, will lead the industries of tomorrow. The fusion of Chinese technological prowess with Nigerian entrepreneurial spirit and cultural richness is creating something entirely new: a model of sustainable industrial development that honors tradition while embracing innovation.

This is more than technology transfer. It's the building of a shared future where Nigerian industries thrive on clean energy, young entrepreneurs lead innovation, and cultural exchange enriches everyone involved. The Future Made in Nigeria is being powered by the sun, built through partnership, and rooted in the deep cultural values that make our nation unique.`,
        category: "Energy",
        image: cultural,
        date: "February 9, 2026",
        readTime: "12 min read",
        author: "Emmanuel Okonkwo",
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
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
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

const categories = ["All", "Innovation", "Renewable Energy", "Startup Advice", "Consultation", "Industry", "Technology", "Empowerment"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination functions
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="pt-32 pb-24 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 font-sans">
            {/* Header */}
            <section className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white mb-10 tracking-tight">
                    Blog News
                </h1>

                {/* Search Bar matching the design */}
                <div className="relative max-w-5xl mx-auto mb-10">
                    <div className="relative">
                        <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search blog posts"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-16 pr-6 py-4 rounded-xl bg-gray-100/80 dark:bg-gray-800 border-none text-gray-600 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 transition-all text-lg"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeCategory === category
                                ? "bg-[#FFC107] text-black"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {currentPosts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-none overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                            {/* Image */}
                            <div className="h-64 sm:h-72 overflow-hidden rounded-2xl mb-6 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                <div className="text-gray-400 text-sm font-medium mb-3">
                                    {post.category}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>

                                <Link to={`/blog/${post.id}`}>
                                    <button className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors w-fit">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => paginate(idx + 1)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === idx + 1
                                        ? "bg-[#FFC107] text-black shadow-md"
                                        : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                            {/* Ellipsis if needed, simply showing all pages for now as list is small */}
                            {totalPages > 5 && <span className="flex items-end px-2 text-gray-400">...</span>}
                            {totalPages > 5 && (
                                <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-gray-500 hover:bg-gray-100">
                                    {totalPages}
                                </button>
                            )}
                        </div>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </section>

            {/* Newsletter */}
            <div className="mt-24">
                <Newsletter />
            </div>
        </div>
    );
}
