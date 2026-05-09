import { FaRegChartBar } from "react-icons/fa";
import { IoDocumentAttachOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";

const Services = [
    {
        id: 1,
        icon: FaRegChartBar,
        name: "Career Counseling",
        description: "Personalized guidance to identify the best career path aligned with your interests and global opportunities."
    },
    {
        id: 2,
        icon: IoDocumentTextOutline ,
        name: "SOP & LOR Writing",
        description: "Expert-crafted Statement of Purpose and Letters of Recommendation that make your application stand out."
    },{
        id: 3,
        icon: RiBankLine ,
        name: "Visa Assistance",
        description: "Complete visa processing support from documentation to interview preparation ensuring success."
    },{
        id: 4,
        icon: MdOutlineCurrencyRupee ,
        name: "Scholarship Support",
        description: "Explore and apply for scholarships to reduce your education costs significantly."
    }
]

export default Services;