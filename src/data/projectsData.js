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
        title: "Nigerian Artisans Export",
        category: "Empowerment",
        description: "Connecting local excellence with global luxury markets. We empower traditional craftsmen to reach international buyers through modern digital platforms.",
        longDescription: "The Artisans Export program bridges the gap between traditional Nigerian craftsmanship and the global luxury market. Through training in quality control, branding, and cross-border logistics, we've enabled 5,000+ artisans to sell their products in Europe and North America, increasing their average income by 400%.",
        image: "https://images.unsplash.com/photo-1541944743827-e04bb645f9a3?auto=format&fit=crop&q=80&w=800",
        tags: ["Artisans", "Export", "Growth"],
        stats: { artisans: "5,000+", income: "+400%" }
    },
];
