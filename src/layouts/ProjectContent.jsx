import { useState, useRef } from "react"
import Card from "../components/Card"
import Chip from "../components/Chip"
import Title from "../components/Title"
import SectionTitle from "../components/SectionTitle"
import ImageWrapper from "../components/ImageWrapper"
import Icon from "../components/Icon"
import { projects } from "../data/projects"
import { faUser, faUsers, faUserGroup, faGraduationCap, faIdBadge, faCircleUser, faExpand, faCompress, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import IconButton from "../components/IconButton"
import HeaderTitle from "../components/HeaderTitle"

function ProjectContent({ isLoading, content, expandedIndex, expandView }){
    const project = projects.find((p) => p.id == content);
    const imageRefs = useRef([]);
    const [currentRef, setCurrentRef] = useState(0);

    const scrollToImg = (index) => {
        if(imageRefs.current[index]){
            imageRefs.current[index].scrollIntoView({ behavior: 'smooth',  block: 'nearest' });
            setCurrentRef(index);
        }
    };
    const nextImg = () => {
        if(currentRef < project.images.length - 1){
            scrollToImg(currentRef + 1);
        }
    }
    const prevImg = () => {
        if(currentRef > 0){
            scrollToImg(currentRef - 1);
        }   
    }

    return(
        <div className="relative w-full max-w-[1560px] min-w-[1024px] h-5/6 flex flex-row items-center gap-6">
            <div className="self-start">
                <Card className="w-full shrink-0 flex flex-col gap-4" isLoadingNewContent={isLoading} size="n" isVisible={false}>
                    {project.link.faIcon && <IconButton faIcon={project.link.faIcon} iconStyle="aspect-square text-2xl" interactStyle="hover:scale-125" onClick={() => console.log("clicked")}/>}
                    {project.link.devIcon && <IconButton devIcon={project.link.devIcon} iconStyle="aspect-square text-2xl" interactStyle="hover:scale-125" onClick={() => console.log("clicked")}/>}

                </Card>
            </div>
            <div className="w-full h-full flex flex-col items-center gap-4">
                <Card className="w-full shrink-0" isLoadingNewContent={isLoading} size="lg">
                    <div className="relative flex flex-col w-full gap-8">
                        <div className="flex flex-row gap-20">
                            <div className="grow flex flex-col gap-4">
                                <div className="inline-block relative">
                                    <Title text={project.title} className="inline"/>
                                    <span className="absolute bottom-0 pb-2 pl-4">
                                        <div className="flex flex-row gap-2">
                                            {project.source == "academic" 
                                            ? <Icon faIcon={faGraduationCap} iconStyle="text-2xl" title="Academic"/>
                                            : project.source == "internship" 
                                            ? <Icon faIcon={faIdBadge} iconStyle="text-2xl" title="Internship"/>
                                            : project.source == "personal" 
                                            ? <Icon faIcon={faCircleUser} iconStyle="text-2xl" title="Personal"/>
                                            : <></>
                                            }
                                            {project.collaboration == "group" 
                                            ? <Icon faIcon={faUsers} iconStyle="text-2xl" title="Group"/>
                                            : project.collaboration == "pair" 
                                            ? <Icon faIcon={faUserGroup} iconStyle="text-2xl" title="Pair"/>
                                            : project.collaboration == "individual" 
                                            ? <Icon faIcon={faUser} iconStyle="text-2xl" title="Individual"/>
                                            : <></>
                                            }
                                        </div>
                                    </span>
                                </div>
                                <SectionTitle text={project.label} className="italic"/>
                            </div>
                            <div className="flex flex-wrap shrink w-fit items-start content-start justify-end gap-4">
                                {project.tech.map((item, i) =>
                                    item.faIcon ? (
                                    <Chip className="text-lg" key={i} faIcon={item.faIcon} text={item.text} />
                                    ) : (
                                    <Chip className="text-lg" key={i} devIcon={item.devIcon} text={item.text} />
                                    )
                                )}
                            </div>
                        </div>
                        <p className='text-base leading-5 px-20 text-justify'>
                            {project.description}
                        </p>
                        <p className="absolute bottom-0 right-0 -mb-8 text-base italic font-bold">
                            {project.begin} {project.end ? `— ${project.end}` : ""}
                        </p>
                    </div>
                </Card>
                <div className="relative w-full h-3/4 flex flex-row items-center gap-6 pb-4 pt-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                    <Card className="order-first sticky left-0 z-30 pl-4 flex flex-col gap-4" isLoadingNewContent={isLoading} size="n" isVisible={false}>
                        <IconButton faIcon={faCaretLeft} iconStyle="aspect-square text-2xl" interactStyle="hover:-translate-x-2" onClick={prevImg} isDisabled={currentRef == 0}/>
                    </Card>
                    <div className="order-last sticky right-0 z-30 pr-4 flex flex-col gap-4" isLoadingNewContent={isLoading} size="n" isVisible={false}>
                        <IconButton faIcon={faCaretRight} iconStyle="aspect-square text-2xl" interactStyle="hover:translate-x-2" onClick={nextImg} isDisabled={currentRef == project.images.length-1}/>
                    </div>
                    {project.images.length == 0 &&
                        <Card className="h-full shrink-0 snap-center" isLoadingNewContent={isLoading} size="n">
                            <ImageWrapper alt="Image not found" wrapperStyle="w-full h-full" noWrap="1" />
                        </Card>
                    }
                    {project.images.map((image, i) => (
                        <Card key={i} 
                            ref={(el) => (imageRefs.current[i] = el)}
                            className={`h-full shrink-0 ${i == project.images.length-1 ? "snap-start" : i == 0 ? "snap-end" : "snap-center"}`}
                            isLoadingNewContent={isLoading} size="n">
                                <IconButton faIcon={faExpand} iconStyle="aspect-square text-xl" interactStyle="hover:scale-125" buttonStyle="absolute right-0 m-4" onClick={() => expandView(i)}/>
                                <ImageWrapper  key={i} image={image.image} alt={image.title} wrapperStyle="w-full h-full" noWrap="1" />
                        </Card>
                        )
                    )}
                </div>
            </div>
            {expandedIndex != null && 
                <>
                    <div className="absolute z-50">
                        <Card className="snap-center shrink-0" isLoadingNewContent={expandedIndex} size="n">
                            <IconButton faIcon={faCompress} iconStyle="aspect-square text-xl" interactStyle="hover:scale-125" buttonStyle="absolute right-0 m-4" onClick={() => expandView(null)}/>
                            <ImageWrapper image={project.images[expandedIndex].image} alt={project.images[expandedIndex].title} wrapperStyle="w-full h-full" noWrap="1" />
                        </Card>
                        <HeaderTitle text={project.images[expandedIndex].title} textStyle="z-20 pt-4 text-center"/>
                    </div>
                    <div className="fixed inset-0 bg-gray-200/75 backdrop-blur-sm z-10"/>
                </>
            }
        </div>
    )
}

export default ProjectContent;