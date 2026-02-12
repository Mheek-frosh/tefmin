import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import pp4 from "../assets/pp4.jpeg";
import fastImage from "../assets/fast.jpeg";
import kekeImage from "../assets/keke.jpeg";
import twoManImage from "../assets/2man.jpeg";
import shopImage from "../assets/shop.png";


export const projectItems = [
    {
        id: 1,
        title: "Presidential Youth Empowerment Scheme (PYES)",
        category: "Empowerment",
        description: "Launch of the Presidential Youth Empowerment Scheme (PYES) at Aso Rock Villa Abuja.",
        longDescription: "The Presidential Youth Empowerment Scheme (PYES) represents a transformative initiative aimed at empowering Nigerian youth through skills acquisition, entrepreneurship training, and access to modern business tools. Launched at the prestigious Aso Rock Villa in Abuja, this program provides young entrepreneurs with tricycles, motorcycles, and essential business equipment to kickstart their ventures. The scheme focuses on creating sustainable livelihoods, reducing unemployment, and fostering economic independence among Nigeria's youth population. Through strategic partnerships with government agencies and private sector stakeholders, PYES has already impacted thousands of young Nigerians, providing them with the resources and training needed to build successful businesses and contribute meaningfully to the nation's economic growth.",
        image: p1,
        images: [p1, p2, p3, pp4],
        tags: ["Youth", "Empowerment", "Government"],
        stats: { beneficiaries: "10,000+", states: "36 States" }
    },
    {
        id: 2,
        title: "Fast Food Retail Outlet",
        category: "Empowerment",
        description: "A bespoke fast food retail outlet constructed for a youth entrepreneurship empowerment program.",
        longDescription: "This custom-designed fast food retail outlet represents a key component of our youth entrepreneurship empowerment initiative. Built to modern standards with efficient kitchen layouts and customer-friendly service areas, this outlet provides young entrepreneurs with a turnkey business solution. The project includes comprehensive training in food safety, business management, and customer service, ensuring beneficiaries have the skills needed to run successful food service businesses. Each outlet is strategically located in high-traffic areas to maximize business potential while contributing to local economic development and job creation.",
        image: fastImage,
        tags: ["Youth", "Empowerment", "Business"],
        stats: { beneficiaries: "50+", jobs: "150+", locations: "10 States" }
    },
    {
        id: 3,
        title: "Mobile Barber Shop",
        category: "Empowerment",
        description: "A bespoke mobile barber shop designed for a Youth and Women Entrepreneurship program.",
        longDescription: "The Mobile Barber Shop initiative provides fully equipped, mobile grooming units to young entrepreneurs and women as part of our comprehensive empowerment program. Each unit is custom-designed with professional barbering equipment, modern styling tools, and efficient workspace layouts. This innovative approach brings grooming services directly to underserved communities while providing beneficiaries with a flexible, low-overhead business model. The program includes extensive training in barbering techniques, customer relations, and mobile business operations, empowering participants to build sustainable livelihoods while serving their communities.",
        image: kekeImage,
        tags: ["Youth", "Women", "Empowerment"],
        stats: { beneficiaries: "200+", units: "100", coverage: "15 States" }
    },
    {
        id: 4,
        title: "SET Construction Training",
        category: "Training",
        description: "Beneficiaries undergoing practical training on the construction of Seed Empowerment Tools (SET) for a public sector led CSR program.",
        longDescription: "The Seed Empowerment Tools (SET) Construction Training program is a flagship public sector Corporate Social Responsibility initiative that equips participants with hands-on skills in building essential business tools and equipment. Through intensive practical training sessions, beneficiaries learn fabrication, assembly, and quality control techniques while constructing various empowerment tools including tricycles, kiosks, and mobile business units. This program not only provides valuable technical skills but also creates a sustainable supply chain for empowerment tools, with trained participants becoming manufacturers and suppliers for future empowerment initiatives. The program has successfully trained thousands of youth across Nigeria, creating both immediate employment opportunities and long-term entrepreneurial pathways.",
        image: twoManImage,
        tags: ["Training", "Skills", "CSR"],
        stats: { trainees: "5,000+", tools: "2,500", states: "20 States" }
    },
    {
        id: 5,
        title: "ICT Business Solutions Center",
        category: "Technology",
        description: "A bespoke ICT cabin designed and equipped with modern ICT facilities to serve as a Business Solutions Center for a private sector led Youth Entrepreneurship and Empowerment Program.",
        longDescription: "The ICT Business Solutions Center represents a cutting-edge approach to youth empowerment through technology. Each custom-designed cabin is fully equipped with modern computers, high-speed internet connectivity, printing and scanning facilities, and professional workspace amenities. These centers serve as one-stop business hubs where young entrepreneurs can access digital services, receive ICT training, and develop their technology skills. The program provides comprehensive training in digital literacy, online business operations, graphic design, and basic programming. Beneficiaries learn to offer services such as document processing, digital marketing, web design, and business consulting to their communities. This initiative bridges the digital divide while creating sustainable tech-based businesses in both urban and rural areas, contributing to Nigeria's digital transformation agenda.",
        image: shopImage,
        tags: ["ICT", "Technology", "Youth"],
        stats: { centers: "75", beneficiaries: "1,500+", states: "25 States" }
    },
    {
        id: 6,
        title: "Lagos Tech Hub",
        category: "Infrastructure",
        description: "Developing the largest industrial technology ecosystem in West Africa. This project focuses on providing state-of-the-art facilities for local tech startups and manufacturers.",
        longDescription: "The Lagos Tech Hub is a flagship project of TEFMIN, designed to serve as a catalyst for industrial innovation. Spread across 50 hectares, it features dedicated zones for electronics manufacturing, software development labs, and sustainable energy research. Since its inception, it has housed over 150 startups and generated 2,000+ local jobs.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        tags: ["Tech", "Infrastructure", "Innovation"],
        stats: { jobs: "2,000+", impact: "Lagos State" }
    },
    {
        id: 7,
        title: "Eco-Friendly Logistics",
        category: "Supply Chain",
        description: "Revolutionizing distribution with zero-emission delivery solutions. We've introduced a fleet of electric vehicles to handle last-mile delivery in Nigeria's urban centers.",
        longDescription: "Our Eco-Friendly Logistics initiative addresses the carbon footprint of Nigeria's growing e-commerce sector. By partnering with local EV manufacturers, we've deployed 500 electric delivery bikes and 50 vans in Lagos and Abuja. This project has reduced local CO2 emissions by an estimated 1,200 tons annually while lowering operational costs for SMEs.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        tags: ["Green", "Logistics", "Sustainability"],
        stats: { emissions: "-1,200 tons", vehicles: "550" }
    },
    {
        id: 8,
        title: "Nigerian Artisans Export",
        category: "Empowerment",
        description: "Connecting local excellence with global luxury markets. We empower traditional craftsmen to reach international buyers through modern digital platforms.",
        longDescription: "The Artisans Export program bridges the gap between traditional Nigerian craftsmanship and the global luxury market. Through training in quality control, branding, and cross-border logistics, we've enabled 5,000+ artisans to sell their products in Europe and North America, increasing their average income by 400%.",
        image: "https://images.unsplash.com/photo-1541944743827-e04bb645f9a3?auto=format&fit=crop&q=80&w=800",
        tags: ["Artisans", "Export", "Growth"],
        stats: { artisans: "5,000+", income: "+400%" }
    },
    {
        id: 9,
        title: "Agro-Industrial Park",
        category: "Agriculture",
        description: "Integrating modern processing facilities directly into farming communities. This project helps reduce post-harvest losses and adds value to local produce.",
        longDescription: "Located in the heart of the Middle Belt, our Agro-Industrial Parks provide farmers with immediate access to cold storage, milling, and packaging services. By processing produce on-site, we've reduced post-harvest losses from 40% to 5%, ensuring better food security and higher returns for over 10,000 farming households.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
        tags: ["Agro", "Industrial", "Rural"],
        stats: { farmers: "10,000+", wastage: "-35%" }
    },
    {
        id: 10,
        title: "Renewable Energy Grid",
        category: "Energy",
        description: "Powering industrial zones with sustainable solar-wind hybrid solutions. Reducing dependence on unreliable fossil fuel grids.",
        longDescription: "Our Renewable Energy Grid project aims to provide 24/7 clean power to emerging industrial zones across Nigeria. By implementing decentralized micro-grids, we've empowered 50+ manufacturing plants to run at full capacity, lowering their energy costs by 60% and eliminating production downtime caused by power outages.",
        image: "https://images.unsplash.com/photo-1509391366360-feaf9fa44852?auto=format&fit=crop&q=80&w=800",
        tags: ["Solar", "CleanEnergy", "Industrial"],
        stats: { capacity: "50MW", savings: "60%" }
    },
    {
        id: 11,
        title: "Smart Textiles Factory",
        category: "Manufacturing",
        description: "Modernizing Nigeria's textile industry with automated weaving and eco-friendly dye techniques.",
        longDescription: "The Smart Textiles Factory uses high-precision looms and AI-driven quality control to produce premium African fabrics for global export. This facility revitalizes the local cotton supply chain while employing over 800 specialized textile workers.",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
        tags: ["Textiles", "Automation", "Jobs"],
        stats: { workers: "800+", output: "2M Meters" }
    },
    {
        id: 12,
        title: "Digital Literacy Program",
        category: "Education",
        description: "Equipping young Nigerians with coding and data analysis skills for the future industrial economy.",
        longDescription: "A nationwide initiative to train 50,000 students in modern digital tools. We partner with schools to integrate industrial software training into their curriculum.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        tags: ["Education", "Digital", "Youth"],
        stats: { students: "50,000", centers: "120" }
    },
    {
        id: 13,
        title: "Waste-to-Energy Plant",
        category: "Sustainability",
        description: "Converting urban municipal waste into clean synthetic gas and electricity for industrial use.",
        longDescription: "Our first pilot plant in Kano processes 500 tons of waste daily, generating 10MW of power. This project solves waste management issues while providing cheap energy.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
        tags: ["Recycle", "Energy", "Kano"],
        stats: { waste: "500t/day", power: "10MW" }
    },
    {
        id: 14,
        title: "Local Pharma Research",
        category: "Health",
        description: "Developing specialized laboratories for the production of essential vaccines and medications within Nigeria.",
        longDescription: "TEFMIN Pharma Lab focuses on reducing Nigeria's dependence on imported drugs. We research local herbal efficacy and translate it into standardized pharmaceutical products.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e024?auto=format&fit=crop&q=80&w=800",
        tags: ["Health", "Pharma", "Research"],
        stats: { vaccines: "3 types", labs: "5" }
    },
    {
        id: 15,
        title: "Bio-Fertilizer Project",
        category: "Agriculture",
        description: "Producing organic fertilizers from agricultural waste to boost soil health and crop yields.",
        longDescription: "Our bio-fertilizer initiative reduces chemical dependence in Nigerian farming. By using organic waste, we produce high-nutrient fertilizers that have increased average yields by 25%.",
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800",
        tags: ["Organic", "Farming", "Bio"],
        stats: { yield: "+25%", waste_used: "1000t" }
    },
    {
        id: 16,
        title: "Metal Recycling Hub",
        category: "Industrial",
        description: "Advanced smelting facilities focused on recovering high-grade steel and aluminum from scrap metal.",
        longDescription: "The Metal Recycling Hub in Port Harcourt recovers thousands of tons of metal yearly. This reduces the need for primary mining and provides cheap raw materials for construction.",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
        tags: ["Steel", "Recycle", "Construction"],
        stats: { steel: "10k tons", jobs: "300" }
    },
    {
        id: 17,
        title: "Data Sovereignty Center",
        category: "Tech",
        description: "Establishing Tier-4 data centers to host Nigerian industrial and governmental data locally.",
        longDescription: "Hosting our own data ensures security and high-speed access for local industries. Our centers are powered by 100% renewable energy and follow global safety standards.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
        tags: ["Data", "Cloud", "Sovereignty"],
        stats: { uptime: "99.99%", capacity: "100PB" }
    }
];
