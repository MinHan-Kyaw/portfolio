import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import mhk from '@/public/images/mhk.jpg'

export const ABOUT = {
    name: "Min Han Kyaw",
    role: "Software Engineer",
    description: "My experience includes developing high-performance APIs with scalable and resource-efficient code. I have worked previously as a full stack developer for social media, taxis, human resources, and eCommerce. I am currently working for a software development agency on a variety of projects. I use Python,Nodejs and AWS mainly.",
    photo: mhk,
}

export const CONTACTLIST = [
    {
        link: "https://github.com/MinHan-Kyaw",
        name: "Github",
        icon: <FaGithub size={30} />
    },
    {
        link: "https://www.linkedin.com/in/min-han-kyaw-dev/",
        name: "LinkedIn",
        icon: <FaLinkedin size={30} />
    },
    {
        link: "https://drive.google.com/file/d/1ZNRX1n75d8FohJOAxQj15PVg431O7Bar/view?usp=share_link",
        name: "CV",
        icon: <TbFileCv size={30} />
    },
    {
        link: "minhankyaw.mh@gmail.com",
        name: "Email",
        icon: <IoMdMail size={30} />,
        isEmail: true
    },
    {
        link: "https://www.facebook.com/minhankyawdev/",
        name: "Facebook",
        icon: <FaFacebook size={30} />
    },
]

export const PROJECTS = [
    {
        name: "Test 1",
        description: "Test 1 description",
        link: "",
    },
    {
        name: "Test 2",
        description: "Test 2 description",
        link: "",
    },
    {
        name: "Test 3",
        description: "Test 3 description",
        link: "",
    },
]