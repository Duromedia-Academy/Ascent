import { FaQuestionCircle, FaRegQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../../components/context";
import { Link } from "react-router-dom";
import CourseModules from "../../components/CourseModules";

import uxvideoSec2 from "../../assets/videos/courseSec2video.mp4";
import uxvideoSec12 from "../../assets/videos/courseSec12video.mp4";

import {useState} from 'react';

import { images } from "../../constants";





const Course = () => {
    const { closeSubmenu } = useGlobalContext();

    const [isToggle, setIsToggle] = useState(false);
    const [isToggle2, setIsToggle2] = useState(false);
    const [isToggle3, setIsToggle3] = useState(false);
    const [isToggle4, setIsToggle4] = useState(false);
    const [isToggle5, setIsToggle5] = useState(false);
    const [isToggle6, setIsToggle6] = useState(false);
    const [isToggle7, setIsToggle7] = useState(false);
    const [isToggle8, setIsToggle8] = useState(false);
    const [isToggle9, setIsToggle9] = useState(false);
    const [isToggle10, setIsToggle10] = useState(false);

    return(

        <div onMouseOver={closeSubmenu}> 


            <section className="bg-header-pattern bg-no-repeat bg-cover">
                
                <div className="custom-container">

                    <div className="header-container">

                        <div className="mb-4 inline-flex items-center bg-[rgba(45,51,58,.2);] rounded-[40px] py-0.5 pl-0.5 pr-1.5 gap-3 md:gap-2">

                            <h2 className="flex items-center not-italic font-normal text-xs md:text-base py-0.5 px-2 rounded-[48px] mb-0 bg-black text-white">
                                UX Design Course
                            </h2>

                            <div className="md:text-base gap-1 text-white flex items-center text-xs not-italic font-normal">
                                <span>Starts 3 October 2023</span>
                                <FaQuestionCircle />
                            </div>

                        </div>

                        <div className="mb-4 block">
                            <h1 className="max-w-[65%] text-[56px] leading-[64px] mb-8 font-black text-white">
                                Professional Diploma 
                                <br />
                                in UX Design
                            </h1>
                        </div>

                        <div className="mb-4 flex justify-between">

                            <div className="phone-custom:w-full">
                                <p className="text-white text-lg mb-12 max-w-[552px] phone-custom:text-base phone-custom:max-w-[459px]">
                                Build your UX career with a globally recognised, industry-approved UX design course. Get the mindset, the confidence and the skills that make UX designers so valuable.
                                </p>

                                <div className="flex flex-wrap">

                                    <div className="mr-5 w-64 phone-custom:mr-0 phone-custom:w-full">
                                        <button className="header-btn1">
                                            Request more details
                                        </button>
                                    </div>

                                    <div className="w-[216px] phone-custom:w-full">
                                        <button className="header-btn2">
                                            <span className="-ml-4">Enrol today</span>
                                            <img className="pl-2.5 absolute mt-1 max-w-full h-auto inline-block" src={images.courseSec1img2} alt="" />
                                        </button>
                                        <div className="text-white text-center mt-1.5">
                                            Limited spaces available
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="mobile-hidden:hidden flex text-base mb-0 flex-col justify-end">
                                <p className="text-white mb-4 ml-1.5">
                                    University credit-rated by:
                                </p>
                                <div>
                                    <img className="w-[196px]" src={images.courseSec1img3} alt="" />
                                </div>
                            </div>
            
                        </div>

                    </div>

                    <div className="hidden mobile-hidden:flex" >
                        <div className="mb-24  w-full flex flex-row justify-end text-sm">
                            <p className="text-sm ml-0 w-[108px] text-white mb-4">
                                University credit-rated by:
                            </p>
                            <div>
                                <img className="ml-1.5 w-[168px]" src={images.courseSec1img3} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-[#f6f7f8]">
                    <div className="custom-container information">
                        <div className="information-container">
                            <div className="flex justify-between py-6 px-8 tablet-custom:relative tablet-custom:top-0 tablet-custom:flex-wrap tablet-custom:px-8 tablet-custom:pt-6 tablet-custom:pb-2 mobile-hidden:relative mobile-hidden:top-0 mobile-hidden:flex-wrap mobile-hidden:py-6 mobile-hidden:px-4">
                                <div className="tablet-custom:w-full tablet-custom:mb-4 mobile-hidden:w-full mobile-hidden:mb-4">
                                    <p className="text-base text-black mb-1 font-semibold mobile-hidden:text-sm">What you’ll learn?</p>
                                    <h5 className="text-lg text-[#283895] font-black mb-0 max-w-[280px] mobile-hidden:text-base">The full UX process</h5>
                                </div>
                                <div className="tablet-custom:w-1/2 tablet-custom:mb-4 mobile-hidden:w-1/2 mobile-hidden:mb-4">
                                    <p className="text-base text-black mb-1 font-semibold mobile-hidden:text-sm">Duration</p>
                                    <h5 className="text-lg text-[#283895] font-black mb-0 max-w-[280px] mobile-hidden:text-base">6 months</h5>
                                </div>
                                <div className="tablet-custom:w-1/2 tablet-custom:mb-4 mobile-hidden:w-1/2 mobile-hidden:mb-4">
                                    <p className="text-base text-black mb-1 font-semibold mobile-hidden:text-sm">Commitment</p>
                                    <h5 className="text-lg text-[#283895] font-black mb-0 max-w-[280px] mobile-hidden:text-base">5 hours per week</h5>
                                </div>
                                <div className="tablet-custom:w-1/2 tablet-custom:mb-4 mobile-hidden:w-1/2 mobile-hidden:mb-4">
                                    <p className="text-base text-black mb-1 font-semibold mobile-hidden:text-sm">Price</p>
                                    <h5 className="text-lg text-[#283895] font-black mb-0 max-w-[280px] mobile-hidden:text-base">€2,250 <span className="text-[#283895] line-through ml-2 font-normal">€3,250</span></h5>
                                </div>
                                <div className="tablet-custom:w-1/2 tablet-custom:mb-4 mobile-hidden:w-1/2 mobile-hidden:mb-4">
                                    <p className="text-base text-black mb-1 font-semibold mobile-hidden:text-sm">Format</p>
                                    <h5 className="text-lg text-[#283895] font-black mb-0 max-w-[280px] mobile-hidden:text-base">Online, self-paced</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-[#f6f7f8]">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="flex justify-between tablet-custom:flex-col mobile-hidden:flex-col">

                        <div className="pr-8 mobile-hidden:py-12 mobile-hidden:px-4">
                            <h2 class="font-black text-4xl max-w-[400px] mb-8 mobile-hidden:text-3xl">
                                Build a rewarding career in UX
                            </h2>
                            <ul className="mb-4 tablet-custom:mb-16 mobile-hidden:mb-16">
                                <li className="video-list">Learn to think like a UX designer</li>
                                <li className="video-list">Build confidence in essential UX concepts</li>
                                <li className="video-list">Get job-ready skills and a professional portfolio</li>
                            </ul>
                        </div>

                        <div>
                            <div className="h-[316px] tablet-custom:h-auto mobile-hidden:h-auto">
                                <div className="bg-[#f6f7f8] h-[316px] tablet-custom:h-auto mobile-hidden:h-auto">
                                    <div className="video-container">
                                        <div className="p-2 bg-[#d5d8dd]">
                                            <video width="750" height="500" autoplay controls poster={images.courseSec2img2}>
                                                <source src={uxvideoSec2} type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">

                    <h2 className="text-4xl font-black text-black mb-6 mobile-hidden:text-3xl mobile-hidden:mb-4">
                        The gold standard in UX education
                    </h2>
                    <p className="mobile-hidden:text-base text-black mobile-hidden:mb-12 text-lg mb-16">
                        Students love the experience of learning on our UX design course
                    </p>

                    <div className="flex mobile-hidden:flex-col mobile-hidden:mb-8">

                        <div className="mr-8 tablet-custom:mr-[85px]">
                            <div className="mb-12 w-60">
                                <div className="flex items-baseline">
                                    <p className="text-3xl font-black text-[#aa006d] inline-block m-0 mr-1">4.9</p>
                                    <img src={images.courseSec3img1} alt="" />
                                </div>
                                <p className="font-black text-black text-lg mb-4 mobile-hidden:text-base mobile-hidden:mb-8">
                                    <Link className="no-underline" to={''}>
                                        <span className="text-lg font-black mobile-hidden:text-base">Google</span>
                                        <span className="text-lg font-normal mobile-hidden:text-base"> (691 reviews) </span>
                                    </Link>
                                </p>
                            </div>
                            <div className="mb-12 w-60">
                                <div className="flex items-baseline">
                                    <p className="text-3xl font-black text-[#aa006d] inline-block m-0 mr-1">4.7</p>
                                    <img src={images.courseSec3img1} alt="" />
                                </div>
                                <p className="font-black text-black text-lg mb-4 mobile-hidden:text-base mobile-hidden:mb-8">
                                    <Link className="no-underline" to={''}>
                                        <span className="text-lg font-black mobile-hidden:text-base">SwitchUp</span>
                                        <span className="text-lg font-normal mobile-hidden:text-base"> (156 reviews) </span>
                                    </Link>
                                </p>
                            </div>
                            <div className="mb-12 w-60">
                                <div className="flex items-baseline">
                                    <p className="text-3xl font-black text-[#aa006d] inline-block m-0 mr-1">4.8</p>
                                    <img src={images.courseSec3img1} alt="" />
                                </div>
                                <p className="font-black text-black text-lg mb-4 mobile-hidden:text-base mobile-hidden:mb-8">
                                    <Link className="no-underline" to={''}>
                                        <span className="text-lg font-black mobile-hidden:text-base">Course Report</span>
                                        <span className="text-base font-medium "> (28 reviews) </span>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between flex-wrap">

                            <div className="review">
                                <div className="w-full text-black text-lg font-normal pb-4 mobile-hidden:text-base mobile-hidden:max-w-full">
                                    “An absolute must for every aspiring UX designer. Thank you for developing such a professional and comprehensive course.”
                                </div>
                                <div className="w-full">
                                    <img className="mr-3 w-[64px] h-[64px] float-left" src={images.courseSec3img2} alt="" />
                                    <div className="flex flex-col justify-center h-[64px] mobile-hidden:h-[48px]">
                                        <div className="text-black font-black text-base mb-0 mobile-hidden:text-sm">
                                            Yakari Van Dessel
                                        </div>
                                        <div className="text-black text-base font-medium mobile-hidden:text-sm">
                                            <p>UX Designer</p>
                                            <p>Intracto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="review mobile-hidden:hidden">
                                <div className="w-full text-black text-lg font-normal pb-4 mobile-hidden:text-base mobile-hidden:max-w-full">
                                    “It was exactly what I needed at that time in my career. I got a cool new job as Senior UX Consultant in a big company. ”
                                </div>
                                <div className="w-full">
                                    <img className="mr-3 w-[64px] h-[64px] float-left" src={images.courseSec3img3} alt="" />
                                    <div className="flex flex-col justify-center h-[64px] mobile-hidden:h-[48px]">
                                        <div className="text-black font-black text-base mb-0 mobile-hidden:text-sm">
                                            Bogdan Haituc
                                        </div>
                                        <div className="text-black text-base font-medium mobile-hidden:text-sm">
                                            <p>Senior UX Design Consultant</p>
                                            <p>Deloitte Digital</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="review">
                                <div className="w-full text-black text-lg font-normal pb-4 mobile-hidden:text-base mobile-hidden:max-w-full">
                                    “It’s the best investment you could make for yourself and your career. The connections you make, the knowledge you gain, and just the confidence that you build in yourself.”
                                </div>
                                <div className="w-full">
                                    <img className="mr-3 w-[64px] h-[64px] float-left" src={images.courseSec3img4} alt="" />
                                    <div className="flex flex-col justify-center h-[64px] mobile-hidden:h-[48px]">
                                        <div className="text-black font-black text-base mb-0 mobile-hidden:text-sm">
                                            Victoria Robin
                                        </div>
                                        <div className="text-black text-base font-medium mobile-hidden:text-sm">
                                            <p>UX Manager</p>
                                            <p>Alltech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="review tablet-custom:hidden mobile-hidden:hidden">
                                <div className="w-full text-black text-lg font-normal pb-4 mobile-hidden:text-base mobile-hidden:max-w-full">
                                    “I honestly can’t think of any cons about this course. It was so well structured and easy to understand. The tutors are incredibly friendly and helpful.”
                                </div>
                                <div className="w-full">
                                    <img className="mr-3 w-[64px] h-[64px] float-left" src={images.courseSec3img5} alt="" />
                                    <div className="flex flex-col justify-center h-[64px] mobile-hidden:h-[48px]">
                                        <div className="text-black font-black text-base mb-0 mobile-hidden:text-sm">
                                            Fiona Crombie
                                        </div>
                                        <div className="text-black text-base font-medium mobile-hidden:text-sm">
                                            <p>Product Designer</p>
                                            <p>Nova Futur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-[#f6f7f8]">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">

                    <div className="flex justify-between flex-wrap w-full max-w-full items-end mb-24">

                        <div className="w-[50%] max-w-[520px] tablet-custom:w-full mobile-hidden:w-full mobile-hidden:max-w-full">
                            <h2 className="text-[40px] leading-[48px] text-black font-black mb-6 mobile-hidden:text-3xl">
                                What you'll learn
                            </h2>
                            <p className="text-lg mt-0 mb-4 mobile-hidden:text-base phone-custom:max-w-[581px]">
                                The Professional Diploma is our UX design course that is credit-rated by Glasgow Caledonian University. It covers everything you need to become a certified UX professional.
                            </p>
                            <p className="m-0 text-lg mobile-hidden:text-base phone-custom:max-w-[581px]">
                                To see the full syllabus, <Link className="font-medium underline text-[#e23d8f]" to={''}>request more details</Link>.
                            </p>
                        </div>

                        <div className="w-[50%] flex justify-between items-end tablet-custom:w-full tablet-custom:mt-16 mobile-hidden:mt-12 mobile-hidden:w-full">
                            <div>
                                <img className="w-[154px] h-[94px] mobile-hidden:h-[48px]" src={images.courseSec4img1} alt="" />
                            </div>
                            <div>
                                <img className="w-[154px] h-[94px] mobile-hidden:h-[48px]" src={images.courseSec4img2} alt="" />
                            </div>
                            <div>
                                <img className="w-[154px] h-[94px] mobile-hidden:h-[48px]" src={images.courseSec4img3} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between flex-wrap mb-4 mobile-hidden:mb-8">

                        <CourseModules moduleNumber={'Module 1'} title={'Introduction to UX design'} about={'Gain a deep understanding of the UX design process.'} />  

                        <CourseModules moduleNumber={'Module 2'} title={'User Research'} about={'Master core research methods, from usability testing to depth interviews.'} />  

                        <CourseModules moduleNumber={'Module 3'} title={'Analysis techniques'} about={'Translate research data into user goals, personas and journey maps.'} />  

                        <CourseModules moduleNumber={'Module 4'} title={'Structure and navigation'} about={'Define navigation, user flows and information architecture.'} />  

                        <CourseModules moduleNumber={'Module 5'} title={'Interactions'} about={'Dig into the details of interaction design and sketching.'} />  

                        <CourseModules moduleNumber={'Module 6'} title={'Design principles'} about={'Harness the power of design principles to create better software.'} />

                        <CourseModules moduleNumber={'Module 7'} title={'Design patterns'} about={'Discover proven techniques to increase the usability of any design.'} />

                        <CourseModules moduleNumber={'Module 8'} title={'Mobile UX'} about={'Learn how to design mobile websites and applications.'} />

                        <CourseModules moduleNumber={'Module 9'} title={'Workflows'} about={'Master the details of designing common user workflows.'} />

                        <CourseModules moduleNumber={'Module 10'} title={'Prototyping and handover'} about={'Build interactive prototypes and annotate your designs.'} />

                        <div className="max-w-[357px] pc-custom:max-w-[31.3%] desktop-custom:max-w-[31.3%] bg-white p-6 mb-8 tablet-custom:max-w-[48%] mobile-hidden:max-w-full mobile-hidden:w-full mobile-hidden:p-4 mobile-hidden:m-4">
                            <p className="text-[#283895] font-medium mb-4 text-base mobile-hidden:text-sm">
                                Projects
                            </p>
                            <h4 className="text-lg font-black mb-2 text-black mobile-hidden:text-base">
                                Portfolio projects
                            </h4>
                            <p class="m-0 text-base">
                                Develop your UX portfolio through a series of real-world projects.
                            </p>
                        </div>

                        <div className="max-w-[357px] pc-custom:max-w-[31.3%] desktop-custom:max-w-[31.3%] bg-white p-6 mb-8 tablet-custom:max-w-[48%] mobile-hidden:max-w-full mobile-hidden:w-full mobile-hidden:p-4 mobile-hidden:m-4">
                            <p className="text-[#283895] font-medium mb-4 text-base mobile-hidden:text-sm">
                                Exam
                            </p>
                            <h4 className="text-lg font-black mb-2 text-black mobile-hidden:text-base">
                                2-hour final exam
                            </h4>
                            <p class="m-0 text-base">
                                Get assessed on your knowledge through a final exam.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg mt-0 mb-4 tablet-custom:text-base mobile-hidden:text-base">
                            Request more details to view the full syllabus. 
                        </p>
                        <div className="mt-4 mb-12">
                            <button className="bg-[#e23d8f] text-white text-center py-4 px-8 text-base font-extrabold ">
                                Request more details
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap mt-12">

                        <div className="flex flex-col justify-between w-[34%] pr-[45px] tablet-custom:w-full mobile-hidden:w-full mobile-hidden:pr-0">
                            
                            <div>
                                <h3 className="text-3xl font-black mb-6 text-black mobile-hidden:text-xl mobile-hidden:mb-2"> 
                                    Build a portfolio 
                                </h3>
                                <p className="text-lg text-black mb-4 tablet-custom:mb-20 mobile-hidden:text-base mobile-hidden:mb-12">
                                    There are 16 real-world projects to give you hands-on experience on all the key aspects of UX. You’ll build a professional portfolio to demonstrate your job readiness.
                                </p>
                            </div>

                            <div className="tablet-custom:hidden mobile-hidden:hidden">
                                <h4 className="font-black text-lg text-black mb-4">
                                    “My course portfolio is how I got my job, it shows that you have the knowledge. You can talk about UX design, but you can also present a body of work.”
                                </h4>
                                <div className="flex">
                                    <span>
                                        <img className="w-[64px] h-[64px]" src={images.courseSec4img4} alt="" />
                                    </span>
                                    <div className="pl-4">
                                        <span class="font-black text-base">Alessio Ferracuti</span>
                                        <p className="text-base mb-4">
                                            UX/UI Designer 
                                            <br />
                                            IES Ltd.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-8 w-[66%] tablet-custom:w-full tablet-custom:pb-0 mobile-hidden:w-full mobile-hidden:pb-0 mobile-hidden:grid-cols-1 mobile-hidden:gap-4">

                            <div>
                                <img className="project-image" src={images.courseSec4img5} alt="" />
                                <h4 class="text-xs mt-1 mb-0">Project by Keith Nolan</h4>
                            </div>
                            <div>
                                <img className="project-image" src={images.courseSec4img6} alt="" />
                                <h4 class="text-xs mt-1 mb-0">Project by Veronica Praml</h4>
                            </div>
                            <div>
                                <img className="project-image" src={images.courseSec4img7} alt="" />
                                <h4 class="text-xs mt-1 mb-0">Project by Steven Souter</h4>
                            </div>
                            <div>
                                <img className="project-image" src={images.courseSec4img8} alt="" />
                                <h4 class="text-xs mt-1 mb-0">Project by Jane Lou</h4>
                            </div>

                        </div>

                        <div className="hidden mobile-hidden:block mobile-hidden:mt-12">
                            <h4 class="font-black text-base text-black mb-4 max-w-[640px]">
                                “My course portfolio is how I got my job, it shows that you have the knowledge. You can talk about UX design, but you can also present a body of work.”
                            </h4>
                            <div className="flex">
                                <span>
                                    <img className="w-[64px] h-[64px]" src={images.courseSec4img4} alt="" />
                                </span>
                                <div className="pl-4">
                                    <span class="font-black text-sm">Alessio Ferracuti</span>
                                    <p className="text-sm mb-4">
                                        UX/UI Designer 
                                        <br />
                                        IES Ltd.
                                    </p>
                                </div>
                            </div>
                        </div>  

                    </div>

                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-between relative tablet-custom:flex-col mobile-hidden:flex-col">

                        <div className="payment-plan">
                            <p className="font-black text-lg text-black not-italic mb-4">Payment plans available</p>
                            <p className="font-medium text-lg text-black not-italic mb-4">
                                Pay €250 per month over 9 months. 0% interest.
                                Speak to an advisor to learn more.
                            </p>
                            <Link className="text-lg underline font-medium text-[#e23d8f]" to={''}>Speak to an advisor</Link>
                        </div>

                        <div className="payment-date">
                            <div>
                                <span class="font-medium text-lg text-black mt-[10px] mb-2">Next course commences:</span>
                                <div className="flex justify-start tablet-custom:justify-center mobile-hidden:justify-center">
                                    <h3 class="font-black mb-6 text-[40px] leading-[48px] mr-2 mobile-hidden:text-3xl">7 November 2023</h3>
                                    <span> <FaRegQuestionCircle /> </span>
                                </div>
                                <span class="font-medium text-base text-[#bd4000] inline-block px-3 py-1.5 bg-[#ffe9d1] mobile-hidden:text-sm">Limited spaces available</span>
                            </div>
                        </div>

                        <div className="w-[50%] tablet-custom:w-full tablet-custom:mb-60 mobile-hidden:w-full mobile-hidden:mb-60">
                            <div className="bg-[#f6f7f8] text-black p-12 text-center max-w-[454px] mx-auto my-0 mobile-hidden:p-8">

                                <div className="text-[18px] font-black mb-6 text-center px-1 py-0 bg-none border-none w-auto inline-block mobile-hidden:text-base">
                                    <span className="font-black text-lg">Early Bird price until</span>
                                    <br />
                                    <span className="">
                                        24 October 2023
                                    </span>
                                </div>

                                <div className="font-black text-[56px] leading-[64px] mobile-hidden:text-[44px] mobile-hiddenleading-[52px]">
                                    €2,250
                                </div>

                                <div className="font-medium text-[32px] leading-[40px] text-[#616973] mb-12 line-through mobile-hidden:text-[24px] mobile-hidden:leading-[32px] mobile-hidden:mb-8">
                                    €3,250
                                </div>

                                <div className="text-lg text-[#616973] mb-12 mt-4 mobile-hidden:text-base mobile-hidden:mb-8">
                                    Payment plans available
                                </div>

                                <button className="bg-[#e23d8f] text-white mb-2 text-center w-full p-4 text-base font-extrabold">
                                    Request more details
                                </button>

                                <div>
                                    <span className="text-lg mobile-hidden:text-base">
                                        or <Link className="underline text-[#e23d8f]" to={''}>enrol today</Link>
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-[#283895]">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">

                    <div className="flex justify-between items-end flex-wrap mb-16">
                        <div className="w-full">
                            <h2 className="text-white font-black mb-6 text-[40px] leading-[48px] mobile-hidden:text-3xl mobile-hidden:mb-4">Our graduates get jobs they love</h2>
                            <p className=" text-white my-0 font-medium text-lg  mobile-hidden:text-base ">
                                Through our UX design course we've helped thousands of students to kickstart enjoyable careers in UX design.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between mb-24 tablet-custom:mb-[72px] tablet-custom:flex-wrap mobile-hidden:flex-wrap mobile-hidden:mt-12 mobile-hidden:mb-6">
                        <div className="company-logo">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img1} alt="" />
                        </div>
                        <div className="company-logo">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img2} alt="" />
                        </div>
                        <div className="company-logo mobile-hidden:hidden">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img3} alt="" />
                        </div>
                        <div className="company-logo">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img4} alt="" />
                        </div>
                        <div className="company-logo">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img5} alt="" />
                        </div>
                        <div className="company-logo">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img6} alt="" />
                        </div>
                        <div className="company-logo">
                            <img className="mobile-hidden:h-[40px] mobile-hidden:px-1.5" src={images.courseSec6img7} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col flex-wrap justify-start items-start max-h-[900px] -mt-4 -mx-4 mb-24 pc-custom:max-h-[920px] tablet-custom:hidden mobile-hidden:mt-0 mobile-hidden:mx-auto mobile-hidden:mb-[55px] mobile-hidden:max-h-none">

                        <div className="student-posters">
                            <div>
                                <div className="p-8 font-medium text-base text-white bg-[#283895] border border-[hsla(0,0%,100%,.3)] rounded mobile-hidden:p-6">
                                    <div className="flex bg-stats-pattern bg-no-repeat mt-0 mx-auto mb-6 bg-contain items-center justify-center h-[120px] w-[120px] mobile-hidden:h-24 mobile-hidden:w-24 mobile-hidden:mb-4">
                                        <div className="font-black text-3xl text-center mobile-hidden:text-xl">79%</div>
                                    </div>
                                    <div class="font-medium text-center text-base text-white">
                                        79% of graduates from our Professional Diploma in UX Design get jobs in UX*
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="student-posters">
                            <img className="h-auto w-auto mobile-hidden:w-full" src={images.courseSec6img9} alt="" />
                        </div>

                        <div className="student-posters">
                            <img className="h-auto w-auto mobile-hidden:w-full" src={images.courseSec6img10} alt="" />
                        </div>

                        <div className="student-posters mobile-hidden:hidden">
                            <img className="h-auto w-auto" src={images.courseSec6img11} alt="" />
                        </div>

                        <div className="student-posters mobile-hidden:hidden">
                            <img className="h-auto w-auto " src={images.courseSec6img12} alt="" />
                        </div>

                        <div className="student-posters mobile-hidden:hidden">
                            <img className="h-auto w-auto" src={images.courseSec6img13} alt="" />
                        </div>

                        <div className="student-posters mobile-hidden:hidden">
                            <img className="h-auto w-auto " src={images.courseSec6img14} alt="" />
                        </div>

                        <div className="student-posters mobile-hidden:hidden">
                            <img className="h-auto w-auto" src={images.courseSec6img15} alt="" />
                        </div>

                        <div className="font-medium text-sm text-[#5fcae9] student-posters mobile-hidden:text-xs">
                            <p className="mb-4">*Based on a survey sent to graduates, 12 months after engaging with our careers team</p>
                        </div>

                    </div>

                    <div className="hidden tablet-custom:flex max-h-[1080px] -mt-4 -mx-4 mb-[55px] flex-col flex-wrap justify-start items-start">

                        <div className="studentPosters-tablet">
                            <div>
                                <div className="border border-[hsla(0,0%,100%,.3)] rounded p-8 font-medium text-base bg-[#283895] text-white">
                                    <div className="flex bg-stats-pattern bg-contain bg-no-repeat mt-0 mx-auto mb-6 w-[120px] h-[120px] justify-center items-center">
                                    <div className="text-3xl font-black text-center">
                                        79%
                                    </div>
                                    </div>
                                    <div className="font-medium text-base text-center">
                                        79% of graduates from our Professional Diploma in UX Design get jobs in UX*
                                    </div>
                                </div> 
                            </div>
                        </div>

                        <div className="studentPosters-tablet">
                            <img className="h-auto w-full" src={images.courseSec6img9} alt="" />
                        </div>

                        <div className="studentPosters-tablet">
                            <img className="h-auto w-full" src={images.courseSec6img10} alt="" />
                        </div>

                        <div className="studentPosters-tablet font-medium text-sm text-[#5fcae9]">
                            <p className="mb-4">*Based on a survey sent to graduates, 12 months after engaging with our careers team</p>
                        </div>

                        <div className="studentPosters-tablet">
                            <img className="h-auto w-full" src={images.courseSec6img11} alt="" />
                        </div>

                        <div className="studentPosters-tablet">
                            <img className="h-auto w-full" src={images.courseSec6img12} alt="" />
                        </div>

                        <div className="studentPosters-tablet">
                            <img className="h-auto w-full" src={images.courseSec6img13} alt="" />
                        </div>

                    </div>

                    <div className="flex justify-between mt-24 text-white mobile-hidden:flex-col mobile-hidden:mt-8">

                        <div className="flex flex-col mb-2 mobile-hidden:order-2">
                            <span>
                                <img className="w-12 h-12" src={images.courseSec6img16} alt="" />
                            </span>
                            <div className="mt-2">
                                <span className="font-black text-base text-white mobile-hidden:text-sm mobile-hidden:mt-2">Julia Mullinger</span>
                                <p className="text-base text-white m-0 mobile-hidden:text-sm">User Researcher, Storm ID</p>
                            </div>
                        </div>

                        <div class="font-extrabold max-w-[75%] text-white text-[24px] leading-[40px] tablet-custom:max-w-[60%] mobile-hidden:text-xl mobile-hidden:max-w-full mobile-hidden:order-1 mobile-hidden:mb-6">
                            "My qualification was important to my interviewers. They asked about the modules, the practical exercises and the exam. They were impressed with my exam result and my course portfolio."
                        </div>

                    </div>

                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-between">

                        <div className="w-1/2 tablet-custom:w-full mobile-hidden:w-full">
                            <h2 className="text-black font-black text-3xl max-w-[357px] mb-2 tablet-custom:mb-6 mobile-hidden:mb-4 mbile-hidden:text-xl">
                                Need some advice? 
                                <br /> 
                                We’re happy to help
                            </h2>
                        </div>

                        <div className="w-1/2 tablet-custom:w-full mobile-hidden:w-full">
                            <p className="text-black text-lg mt-2 mb-8 tablet-custom:mt-0 mobile-hidden:mb-6 mobile-hidden:text-base">
                                Our educational advisors are here to answer your questions about our UX design course, by phone or email. Ask us anything about the curriculum, course projects or graduate opportunities.
                            </p>
                            <button className="bg-[#e23d8f] font-extrabold text-white text-base inline-block px-12 py-4">
                                Speak to an advisor
                            </button>
                        </div>

                    </div>
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-[#aa006d]">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">

                    <div>
                        <h2 className="font-black text-[40px] leading-[48px] text-white mb-6 mobile-hidden:text-3xl">
                            Support at every step
                        </h2>
                        <p className="mobile-hidden:max-w-[520px] mobile-hidden:text-base tablet-custom:max-w-[520px] text-lg text-white max-w-[747px]">
                            UX is a team sport. From day one, you’ll be part of a lively community of tutors, coaches and fellow students that support each other along the way.
                        </p>
                    </div>

                    <div className="flex mt-12 justify-between tablet-custom:flex-wrap mobile-hidden:flex-wrap">

                        <div className="supporter">
                            <img className="supporter-img" src={images.courseSec8img1} alt="" />
                            <h3 className="supporter-name">Kelly</h3>
                        </div>

                        <div className="supporter">
                            <img className="supporter-img" src={images.courseSec8img2} alt="" />
                            <h3 className="supporter-name">Cathal</h3>
                        </div>

                        <div className="supporter">
                            <img className="supporter-img" src={images.courseSec8img3} alt="" />
                            <h3 className="supporter-name">Ana</h3>
                        </div>

                        <div className="supporter">
                            <img className="supporter-img" src={images.courseSec8img4} alt="" />
                            <h3 className="supporter-name">Dee</h3>
                        </div>

                        <div className="supporter">
                            <img className="supporter-img" src={images.courseSec8img5} alt="" />
                            <h3 className="supporter-name">Faolan</h3>
                        </div>

                        <div className="supporter">
                            <img className="supporter-img" src={images.courseSec8img6} alt="" />
                            <h3 className="supporter-name">Eoghain</h3>
                        </div>

                    </div>

                    <div className="flex justify-between mt-16 tablet-custom:mt-4 tablet-custom:flex-col mobile-hidden:mt-4 mobile-hidden:flex-col">

                        <div>
                            <div className="mb-12 mobile-hidden:mb-8">
                                <h4 className="font-black text-white text-[20px] leading-[28px] mb-2 mobile-hidden:text-lg">
                                    Student Success team
                                </h4>
                                <p className="mobile-hidden:text-base text-lg text-white my-0 max-w-[422px]">
                                    Our friendly and responsive team will help you stay on track and keep you accountable.
                                </p>
                            </div>
                            <div className="mb-12 mobile-hidden:mb-8">
                                <h4 className="font-black text-white text-[20px] leading-[28px] mb-2 mobile-hidden:text-lg">
                                    Career coaches
                                </h4>
                                <p className="mobile-hidden:text-base text-lg text-white my-0 max-w-[422px]">
                                    Portfolio prep sessions, 1:1 interview coaching, and more to help you land your dream job.
                                </p>
                            </div>
                            <div className="mb-12 mobile-hidden:mb-8">
                                <h4 className="font-black text-white text-[20px] leading-[28px] mb-2 mobile-hidden:text-lg">
                                    A vibrant community
                                </h4>
                                <p className="mobile-hidden:text-base text-lg text-white my-0 max-w-[422px]">
                                    Collaborate, share tips and build connections on our lively student Slack channels.
                                </p>
                            </div>
                        </div>

                        <div className="h-auto mr-[-60px] max-w-[651px] tablet-custom:mr-0 tablet-custom:max-w-full pc-custom:mr-0 mobile-hidden:hidden">
                            <img className="h-auto w-[651px] tablet-custom:max-w-full tablet-custom:h-auto tablet-custom:mt-4" 
                            src={images.courseSec8img7} alt="" />
                        </div>

                    </div>

                </div>

                <div className="hidden mobile-hidden:block">
                    <img className="w-full inline-block" src={images.courseSec8img8} alt="" />
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-[#2d333a] text-white">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">

                    <div className="block mobile-hidden:max-w-[520px] tablet-custom:max-w-[520px]">
                        <h2 className="mobile-hidden:text-3xl text-[40px] leading-[48px] font-black mb-6 mobile-hiden:mb-4">
                            Your gateway to the industry
                        </h2>
                        <p className="mobile-hidden:my-0 mobile-hidden:text-base text-lg mb-4 mt-0">
                            Start building your professional network and your connections with the UX industry.
                        </p>
                    </div>

                    <div className="grid mobile-hidden:grid-cols-1 mobile-hidden:gap-8 mobile-hidden:max-w-[428px] mobile-hidden:mt-12 tablet-custom:grid-cols-1 tablet-custom:max-w-[428px] grid-cols-3 gap-12 mt-16">

                        <div className="not-italic">
                            <h3 className="font-black text-[20px] leading-[28px] mb-2 mobile-hidden:text-lg">
                                Course mentors
                            </h3>
                            <p className="text-lg m-0 not-italic mobile-hidden:text-base">
                                Your dedicated course mentor is an expert practitioner who brings years of insight from working in UX.
                            </p>
                        </div>

                        <div className="italic">
                            <h3 className="font-black text-[20px] leading-[28px] mb-2 mobile-hidden:text-lg">
                                UX Insider talks
                            </h3>
                            <p className="text-lg m-0 not-italic mobile-hidden:text-base">
                                Enjoy lively discussions with thought leaders and senior pros in our regular <br className="mobile-hidden:hidden tablet-custom:hidden"/> <span className="italic">UX Insider webinars</span>.
                            </p>
                        </div>

                        <div className="not-italic">
                            <h3 className="font-black text-[20px] leading-[28px] mb-2 mobile-hidden:text-lg">
                                Industry Advisory Council
                            </h3>
                            <p className="text-lg m-0 not-italic mobile-hidden:text-base">
                                Our UX courses are validated with design leaders in top companies to make sure they're fit for industry.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-wrap justify-between my-16 mx-0 mobile-hidden:my-12">

                        <div className="w-1/2 tablet-custom:w-full mobile-hidden:w-full">
                            <img className=" px-1 py-0 h-[356px] tablet-custom:px-0 tablet-custom:py-1 tablet-custom:w-full tablet-custom:h-auto mobile-hidden:px-0 mobile-hidden:py-1 mobile-hidden:w-full mobile-hidden:h-auto" src={images.courseSec9img1} alt="" />
                        </div>

                        <div className="w-1/2 tablet-custom:w-full mobile-hidden:hidden">
                            <img className="px-1 py-0 h-[356px] tablet-custom:px-0 tablet-custom:py-1 tablet-custom:w-full tablet-custom:h-auto mobile-hidden:px-0 mobile-hidden:py-1 mobile-hidden:w-full mobile-hidden:h-auto" src={images.courseSec9img2} alt="" />
                        </div>

                    </div>

                    <div className="flex justify-between tablet-custom:flex-wrap tablet-custom:justify-center mobile-hidden:flex-wrap mobile-hidden:justify-center">

                        <div className="gateway-logo">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img3} alt="" />
                        </div> 

                        <div className="gateway-logo">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img4} alt="" />
                        </div> 

                        <div className="gateway-logo">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img5} alt="" />
                        </div> 

                        <div className="gateway-logo">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img6} alt="" />
                        </div> 

                        <div className="gateway-logo">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img7} alt="" />
                        </div> 

                        <div className="gateway-logo">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img8} alt="" />
                        </div> 

                        <div className="tablet-custom:w-1/4 tablet-custom:mb-9 tablet-custom:text-center mobile-hidden:hidden">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img9} alt="" />
                        </div> 

                        <div className="tablet-custom:w-1/4 tablet-custom:mb-9 tablet-custom:text-center mobile-hidden:hidden">
                            <img className="mobile-hidden:h-[40px]" src={images.courseSec9img10} alt="" />
                        </div> 

                    </div>

                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 text-black">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="flex justify-between flex-wrap p-0">

                        <div className="flex flex-col max-w-[42%] tablet-custom:max-w-full tablet-custom:mb-8 tablet-custom:p-0 mobile-hidden:max-w-[581px] mobile-hidden:mb-8">

                            <div>
                                <h4 className="font-black text-[40px] leading-[48px] mb-6 max-w-[487px] mobile-hidden:text-[32px] mobile-hidden:leading-[40px]">Request more details</h4>
                                <p className="text-lg text-[#616973] mb-4 tablet-custom:max-w-[581px] mobile-hidden:text-base">
                                    Submit your contact details to get:
                                </p>
                                <ul className="mb-4 tablet-custom:mb-16 mobile-hidden:mb-16">
                                    <li className="video-list">The full UX course syllabus</li>
                                    <li className="video-list">Your questions answered, by phone or email</li>
                                    <li className="video-list">Helpful career advice with no obligations</li>
                                </ul>
                                <p className="text-lg mb-4 text-[#616973] tablet-custom:max-w-[581px] mobile-hidden:text-base">
                                    Or if you're happy to get started, you can <Link className="underline text-[#e23d8f]" to={''}>enrol today</Link>.
                                </p>
                            </div>

                            <div className="mt-auto mobile-hidden:hidden">
                                <div>
                                    <div className="flex flex-col gap-4">
                                        <div className="text-black text-lg font-extrabold not-italic">
                                            “It’s probably the best decision I’ve made in my career so far.”
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="h-[64px] w-[64px]">
                                                <img src={images.courseSec10img1} alt="" />
                                            </div>
                                            <div>
                                                <div className="text-black text-base font-extrabold not-italic">
                                                    Daniel Guy
                                                </div>
                                                <div className="text-base text-[#616973] not-italic font-medium">
                                                    Interaction Designer 
                                                    <br />
                                                    Ministry of Justice UK
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="w-[52%] pl-[25px] pt-2 pb-0 pr-0 tablet-custom:w-full tablet-custom:pl-0 mobile-hidden:w-full mobile-hidden:p-0">

                            <div className="mobile-hidden:w-full">
                                <div className="max-w-3xl lg:max-w-6xl mx-auto">
                                    <div>
                                        <form>

                                            <div className="mb-6">
                                                <label className="text-black font-extrabold m-0">
                                                    <span className="font-extrabold text-base p-0">First name</span>
                                                </label>
                                                <div>
                                                    <input name="firstname" type="text" required className="form-input"></input>
                                                </div>
                                            </div>

                                            <div className="mb-6">
                                                <label className="text-black font-extrabold m-0">
                                                    <span className="font-extrabold text-base p-0">Last name</span>
                                                </label>
                                                <div>
                                                    <input name="lastname" type="text" required className="form-input"></input>
                                                </div>
                                            </div>

                                            <div className="mb-6">
                                                <label className="text-black font-extrabold m-0">
                                                    <span className="font-extrabold text-base p-0">Email</span>
                                                </label>
                                                <div>
                                                    <input name="email" type="email" required className="form-input"></input>
                                                </div>
                                            </div>

                                            <div className="mb-6">
                                                <label className="text-black font-extrabold m-0">
                                                    <span className="font-extrabold text-base p-0">Phone number</span>
                                                </label>
                                                <div>
                                                    <input name="phone" type="tel" required className="form-input"></input>
                                                </div>
                                            </div>

                                            <div className="mb-6">
                                                <label className="text-black font-extrabold m-0">
                                                    <span className="font-extrabold text-base p-0">Country</span>
                                                </label>
                                                <div>
                                                    <input name="country" type="text" required className="form-input"></input>
                                                </div>
                                            </div>

                                            <div>
                                                <button className="bg-[#e23d8f] text-white font-extrabold text-base mt-5 py-4 px-[50px]"> 
                                                    Request more details
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-[#f6f7f8]">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="flex tablet-custom:flex-col mobile-hidden:flex-col">

                        <div className="w-1/2 pt-0 pr-16 desktop-custom:w-[49%] pc-custom:w-[49%] tablet-custom:w-full mobile-hidden:w-full">
                            <h3 className="text-[40px] leading-[48px] font-black mb-6 text-black tablet-custom:max-w-[459px] mobile-hidden:text-3xl">
                                Frequently asked questions
                            </h3>
                            <p className="text-lg mb-4 tablet-custom:mb-[47px] tablet-custom:max-w-[459px] mobile-hidden:text-base mobile-hidden:mb-12">
                                More questions? <Link className="underline text-[#e23d8f]" to={''}>Schedule a call</Link> with an educational advisor, or email us at <Link className="underline text-[#e23d8f]" to={''}>hello@uxdesigninstitute.com</Link> 
                            </p>
                        </div>

                        <div className="w-1/2 pt-2 desktop-custom:w-[49%] pc-custom:w-[49%] tablet-custom:w-full mobile-hidden:w-full">

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle(!isToggle)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        What is UX Design
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle && (

                                    <div className="mt-2">
                                        <p className="text-black text-base mb-2">
                                            UX design is the process of creating and shaping these experiences to make them positive, pleasant and valuable for the end user. <Link className="underline" to={''}>Click here to learn more</Link>.
                                        </p>
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle2(!isToggle2)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        What does a UX designer do?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle2 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle2 && (

                                    <div className="mt-2">
                                        <p className="text-black text-base mb-2">
                                            The day-to-day tasks of a UX designer are determined by the UX process. The UX process broadly consists of research, design, and testing and validation. <Link className="underline" to={''}>Click here to learn more</Link>.
                                        </p>
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle3(!isToggle3)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        How much do UX designers earn
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle3 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle3 && (

                                    <div className="mt-2">
                                        <p className="text-black text-base mb-2">
                                        How much you make in UX design depends on a variety of factors. These include everything from where you work and what you do, right through to how much experience you have and who you work for. <Link className="underline" to={''}>Click here </Link>to see how much you can earn.
                                        </p>
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle4(!isToggle4)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        What are the admissions criteria?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle4 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle4 && (
                                    
                                    <div className="mt-2">
                                        
                                        <p className="text-black text-base mb-2">
                                            Students are admitted on a case-by-case basis after a consultation with one of our Education Advisors. Key factors we’ll discuss with you include:
                                        </p>
                                        <h5 className="font-extrabold text-black mb-2">1. Background</h5>
                                        <p className="text-black text-base mb-2">
                                            You don’t need experience in design or technology to enrol in our courses, although having one or both is a definite bonus. Our students come from a diverse mix of backgrounds, including project management, development, graphic design, product management, business analysis and so on.
                                        </p>
                                        <h5 className="font-extrabold text-black mb-2">2. Commitment</h5>
                                        <p className="text-black text-base mb-2">
                                            You do need to be motivated and committed. We set a high bar. Studying for one of our professional qualifications requires a certain amount of time, energy and focus. Our team will be there to support you along every step of the way but success will come as a result of your own diligence.
                                        </p>
                                        <h5 className="font-extrabold text-black mb-2">3. English Language</h5>
                                        <p className="text-black text-base mb-2">
                                            You need to be comfortable learning in English. All video lessons, course materials, webinars, correspondence and the final exam are delivered in English.
                                        </p>
                                        
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle5(!isToggle5)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        How is the course structured?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle5 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle5 && (
                                    
                                    <div className="mt-2">

                                        <p className="text-black text-base mb-2">
                                            There are two learning paths available to you:
                                        </p>
                                        <h5 className="font-extrabold text-black mb-2">1. Structured Path</h5>
                                        <p className="text-black text-base mb-2">
                                            The most popular option is to follow the six-month structure. Each month you are given a deadline with a number of video lessons to complete. A monthly mentor-hosted webinar allows you to discuss coursework to date, ask questions and get feedback on your assignment.
                                        </p>
                                        <h5 className="font-extrabold text-black mb-2">2. Self-directed path</h5>
                                        <p className="text-black text-base mb-2">
                                            Alternatively, according to your personal time constraints, you can complete the course entirely at your own pace. As the course is delivered entirely online, it means that you’re free to complete it whenever you are free. You’ll still be able to take part in any of the webinars - either live or catching up through recordings. Once enrolled, you'll have access to all of the course materials for twelve months.
                                        </p>
                                        
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle6(!isToggle6)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        Will I get a mentor?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle6 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle6 && (
                                    
                                    <div className="mt-2">

                                        <p className="text-black text-base mb-2">
                                            Yes. All our mentors are top class UX professionals with many years of experience working in the field. Our mentors host weekly webinars and will be available during these live sessions to answer questions, review projects and keep you motivated.
                                        </p>
                                        
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle7(!isToggle7)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        Will I build a portfolio?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle7 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle7 && (
                                    
                                    <div className="mt-2">

                                        <p className="text-black text-base mb-2">
                                            Yes. Practical work is a huge part of the course. For the Professional Diploma in UX Design there are a total of 16 projects to give you hands-on experience on all the key aspects of UX. Each project is part of a single case study - researching, designing and prototyping a website or a mobile app. The output will be a portfolio of work that will showcase your skills and experience in UX.
                                        </p>
                                        
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle8(!isToggle8)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        Will I work on a team?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle8 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle8 && (
                                    
                                    <div className="mt-2">

                                        <p className="text-black text-base mb-2">
                                            Yes, if you want to. Each course is limited to a maximum of 75 people. This allows you to build relationships with your fellow students on a dedicated Slack channel, and collaborate on projects and study time.
                                        </p>
                                        
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div  onClick={() => setIsToggle9(!isToggle9)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        Are the courses recognised?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button>
                                            {isToggle9 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle9 && (
                                    
                                    <div className="mt-2">

                                        <p className="text-black text-base mb-2">
                                            The UK higher education system is internationally renowned for its excellent standards. Our courses are all credit-rated by Glasgow Caledonian University, a highly-rated UK university. The Professional Diploma in UX Design is allocated 20 credits at Level 8 on the Scottish Credit and Qualifications Framework. For your country, there will be an equivalent award in the relevant educational system.
                                            <br />
                                            For guidance, please review the <Link className="underline" to={''}>Certification Equivalents Table.</Link>
                                        </p>
                                        
                                    </div>

                                )}

                            </div>

                            <div className="bg-white py-4 px-6 mb-2 tablet-custom:p-4">

                                <div onClick={() => setIsToggle10(!isToggle10)} className="flex justify-between items-center cursor-pointer">
                                    <h4 className="font-black text-lg text-black m-0">
                                        Are there other course start dates available?
                                    </h4>
                                    <div className="text-[12px] text-black">
                                        <button >
                                            {isToggle10 ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                </div>

                                {isToggle10 && (
                                    
                                    <div className="mt-2">

                                        <p className="text-black text-base mb-2">
                                            We hold multiple course enrolments throughout the year. <Link className="underline text-[#e23d8f]" to={''}> Speak to an advisor</Link> for details about future course start dates.
                                        </p>
                                        
                                    </div>

                                )}

                            </div>


                        </div>

                    </div>
                </div>

            </section>

            <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10 mobile-hidden:hidden">

                <div className="max-w-3xl lg:max-w-6xl mx-auto">

                    <div>
                        <h2 className="text-[40px] leading-[48px] font-black mb-6 text-black">
                            From our community
                        </h2>
                        <p className="text-lg text-black mb-16 max-w-[530px]">
                            Career tips and advice from UX Design Institute alumni, mentors and industry thought leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16 tablet-custom:grid-cols-1">

                        <div>

                            <div className="h-[316px] tablet-custom:h-auto mobile-hidden:h-auto">
                                <div className="bg-[#f6f7f8] h-[316px] tablet-custom:h-auto mobile-hidden:h-auto">
                                    <div className="video-container">
                                        <div>
                                            <video width="750" height="500" controls poster={images.courseSec12img4}>
                                                <source src={uxvideoSec12} type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-4 text-xl font-black mb-2"
                                >Digital Marketing to UX Design
                            </h3>

                            <p className="text-lg my-2 mx-0">
                                Alumni Angus Carbarns transitioned into a career in UX after completing the Professional Diploma in UX Design.
                            </p>

                        </div>

                        <div>
                            <div className="flex justify-start items-center mb-12">
                                <img className="h-24" src={images.courseSec12img1} alt="" />
                                <div className="pl-4 text-black text-lg tablet-custom:max-w-[325px]">
                                    <h3 className="font-black text-[20px] leading-[28px] text-black mb-2">
                                        Upskilling in UX? Course advice from our alumni
                                    </h3>
                                    <Link className="underline text-[#e23d8f] text-lg" to={''}>Read the article</Link>
                                </div>
                            </div>

                            <div className="flex justify-start items-center mb-12">
                                <img className="h-24" src={images.courseSec12img2} alt="" />
                                <div className="pl-4 text-black text-lg tablet-custom:max-w-[325px]">
                                    <h3 className="font-black text-[20px] leading-[28px] text-black mb-2">
                                        What kind of salary can you earn as a UX designer?
                                    </h3>
                                    <Link className="underline text-[#e23d8f] text-lg" to={''}>Read the article</Link>
                                </div>
                            </div>

                            <div className="flex justify-start items-center mb-12">
                                <img className="h-24" src={images.courseSec12img3} alt="" />
                                <div className="pl-4 text-black text-lg tablet-custom:max-w-[325px]">
                                    <h3 className="font-black text-[20px] leading-[28px] text-black mb-2">
                                        Recruiter insights: How to break into UX without experience
                                    </h3>
                                    <Link className="underline text-[#e23d8f] text-lg" to={''}>Read the article</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            

        </div>
    )
}

export default Course;

