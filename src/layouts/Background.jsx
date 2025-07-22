import HeaderTitle from "../components/HeaderTitle"
import Card from "../components/Card"
import LabelTitle from "../components/LabelTitle"
import Icon from "../components/Icon"
import Meter from "../components/Meter"
import Carousel from "../components/Carousel"
import { faCss3, faFigma, faFlutter, faGithub, faHtml5, faJava, faJs, faLaravel, faLinkedin, faPhp, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faSchool, faSchoolFlag, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


function Background({ isLoading }){
    return(
        <div className="w-full max-w-[1560px] min-w-[1024px] h-4/5 flex flex-row gap-8">
            <div className='w-2/3 h-full flex flex-col gap-8'>
                <Card className='w-full h-2/5 flex flex-col gap-4' isLoadingNewContent={isLoading}>
                    <HeaderTitle text="Education"/>
                    <div className='h-full flex flex-col gap-4 px-4'>
                        <div className='w-full flex flex-row items-center gap-4'>
                            <div className='w-fit flex items-center justify-center'>
                            <Icon faIcon={faGraduationCap} iconStyle="aspect-square text-4xl"/>
                            </div>
                            <div className='w-full'>
                            <div className='w-full flex justify-between'>
                                <LabelTitle text="Ateneo de Davao University" className="font-semibold"/>
                                <LabelTitle text="2021-2025" className="italic font-semibold"/>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='text-lg -mt-1'>Bachelor of Science in Computer Science</p>
                                <p className='text-lg -mt-1 italic'>Cum Laude</p>
                            </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-row items-center gap-4'>
                            <div className='w-fit flex items-center justify-center'>
                            <Icon faIcon={faSchool} iconStyle="aspect-square text-4xl"/>
                            </div>
                            <div className='w-full'>
                            <div className='w-full flex justify-between'>
                                <LabelTitle text="Ateneo de Davao University - SHS" className="font-semibold"/>
                                <LabelTitle text="2019-2021" className="italic font-semibold"/>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='text-lg -mt-1'>Pre-Computer Studies - STEM</p>
                                <p className='text-lg -mt-1 italic'>With High Honors</p>
                            </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-row items-center gap-4'>
                            <div className='w-fit flex items-center justify-center'>
                            <Icon faIcon={faSchoolFlag} iconStyle="aspect-square text-4xl"/>
                            </div>
                            <div className='w-full'>
                            <div className='w-full flex justify-between'>
                                <LabelTitle text="Tagum City National High School" className="font-semibold"/>
                                <LabelTitle text="2015-2019" className="italic font-semibold"/>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='text-lg -mt-1'>STE Program</p>
                                <p className='text-lg -mt-1 italic'>With Honors</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className='w-full h-3/5 flex flex-col gap-4' isLoadingNewContent={isLoading}>
                    <HeaderTitle text="Technologies"/>
                    <div className="h-full flex flex-col gap-2 px-4">
                        <div className="flex flex-col gap-4">
                            <LabelTitle text="Languages" className="font-semibold"/>
                            <Carousel>
                                <Icon faIcon={faHtml5} text="HTML" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faCss3} text="CSS" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faJs} text="JavaScript" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faPhp} text="PHP" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-mysql-original" text="MySQL" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-postgresql-plain" text="PostgreSQL" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faPython} text="Python" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faJava} text="Java" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-cplusplus-plain" text="C++" iconStyle="text-4xl" textStyle="text-sm"/>
                            </Carousel>
                        </div>
                        <div className="flex flex-col gap-4">
                            <LabelTitle text="Frameworks & Libraries" className="font-semibold"/>
                            <Carousel>
                                <Icon faIcon={faLaravel} text="Laravel" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faVuejs} text="Vue.js" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faReact} text="React" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faReact} text="React Native" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faFlutter} text="Flutter" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-tailwindcss-original" text="TailwindCSS" iconStyle="text-4xl" textStyle="text-sm"/>
                            </Carousel>
                        </div>
                        <div className="flex flex-col gap-4">
                            <LabelTitle text="Tools & Platforms" className="font-semibold"/>
                            <Carousel>
                                <Icon faIcon={faFigma} text="Figma" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon faIcon={faGithub} text="GitHub" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-vscode-plain text-4xl" text="VSCode" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-arduino-plain text-4xl" text="Arduino IDE" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-androidstudio-plain text-4xl" text="Android Studio" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-photoshop-plain text-4xl" text="Photoshop" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-aftereffects-plain text-4xl" text="After Effects" iconStyle="text-4xl" textStyle="text-sm"/>
                                <Icon devIcon="devicon-illustrator-plain text-4xl" text="Illustrator" iconStyle="text-4xl" textStyle="text-sm"/>
                            </Carousel>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='w-1/3 min-w-0 h-full flex flex-col gap-8'>
                <Card className='h-3/5 flex flex-col gap-4' isLoadingNewContent={isLoading}>
                    <HeaderTitle text="Skills"/>
                    <div className="h-full flex flex-col gap-4 px-4">
                    <Meter text="Team Management & Collaboration" value={90} textStyle="font-semibold"/>
                    <Meter text="Effective Communication" value={92} textStyle="font-semibold"/>
                    <Meter text="Attention to Detail" value={93} textStyle="font-semibold"/>
                    <Meter text="Organizational Skills" value={85} textStyle="font-semibold"/>
                    <Meter text="Initiative" value={90} textStyle="font-semibold"/>
                    <Meter text="Creativity" value={93} textStyle="font-semibold"/>
                    <Meter text="Problem-Solving" value={85} textStyle="font-semibold"/>
                    </div>
                </Card>
                <Card className='h-2/5 flex flex-col gap-4' isLoadingNewContent={isLoading}>
                    <HeaderTitle text="Contacts"/>
                    <div className="h-full flex flex-col justify-between gap-4 px-4">
                    <div className='w-full flex flex-row items-center justify-start gap-4'>
                        <Icon faIcon={faEnvelope} iconStyle="aspect-square text-2xl"/>
                        <p className='text-lg leading-none'>
                        <a href='&#109;ailto&#58;&#106;o&#115;h%&#54;&#53;aban&#37;&#54;&#55;gu%64&#64;&#103;&#37;6Da&#37;&#54;9l%2&#69;%63om'>j&#111;sheabang&#103;u&#100;&#64;gma&#105;l&#46;com</a>
                        </p>
                    </div>
                    <div className='w-full flex flex-row items-center justify-start gap-4'>
                        <Icon faIcon={faPhone} iconStyle="aspect-square text-2xl"/>
                        <p className='text-lg leading-none'>
                        (+63) 9600992508 
                        </p>
                    </div>
                    <div className='w-full flex flex-row items-center justify-start gap-4'>
                        <Icon faIcon={faLinkedin} iconStyle="aspect-square text-2xl"/>
                        <p className='text-lg leading-none'>
                        <a href="https://linkedin.com/in/josh-elizalde-banggud">linkedin.com/in/josh-elizalde-banggud</a>
                        </p>
                    </div>
                    <div className='w-full flex flex-row items-center justify-start gap-4'>
                        <Icon faIcon={faGithub} iconStyle="aspect-square text-2xl"/>
                        <p className='text-lg leading-none'>
                        {/* To change */}
                        <a href="https://web.facebook.com/blox.x.xium">Josh Elizalde Banggud</a>
                        </p>
                    </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Background;