import { FaRegChartBar } from "react-icons/fa";
import { IoDocumentAttachOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineAccessTime, MdOutlineCurrencyRupee } from "react-icons/md";
import { RiBankLine, RiTeamFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";

const ServicesData = [
    {
        id: 1,
        icon: FaRegChartBar,
        name: "Career Counseling",
        description: "Personalized guidance to identify the best career path aligned with your interests and global opportunities.",
        points: [
            "One-on-one career assessment sessions",
            "Personality and aptitude testing",
            "Career pathway recommendations",
            "Industry trend analysis",
            "Long-term career planning"
        ],
    },
    {
        id: 2,
        icon: IoDocumentTextOutline ,
        name: "SOP & LOR Writing",
        description: "Expert-crafted Statement of Purpose and Letters of Recommendation that make your application stand out.",
        points: [
            "Statement of Purpose (SOP) writing",
            "Letter of Recommendation (LOR) coordination",
            "Resume/CV enhancement",
            "Essay editing and refinement",
            "Multiple revision rounds",
        ],
    },{
        id: 3,
        icon: RiBankLine ,
        name: "Visa Assistance",
        description: "Complete visa processing support from documentation to interview preparation ensuring success.",
        points: [
            "Visa requirement consultation",
            "Document collection guidance",
            "Application form assistance",
            "Interview preparation coaching",
            "Visa rejection appeal support",
        ],
    },{
        id: 4,
        icon: MdOutlineCurrencyRupee ,
        name: "Scholarship Support",
        description: "Explore and apply for scholarships to reduce your education costs significantly.",
        points: [
            "Scholarship search and identification",
            "Eligibility assessment",
            "Application preparation",
            "Essay writing for scholarships",
            "Negotiation and appeal support",
        ],
    },
]

const whyourServices = [
    {
        id: 1,
        icon: RiTeamFill,
        title: "Exprt Team",
        description: "Experienced counselors with 15+ years in education consultancy",
    },{
        id: 2,
        icon: MdOutlineAccessTime,
        title: "Fast Turnaround",
        description: "Quick response times and efficient service delivery",
    },{
        id: 3,
        icon: TiTickOutline,
        title: "Proven Success",
        description: "100% visa success rate and 5000+ students placed"
    }
]
export  { ServicesData, whyourServices };