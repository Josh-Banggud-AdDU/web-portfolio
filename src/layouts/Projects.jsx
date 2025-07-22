import { useRef, useState, useEffect } from 'react'
import Card from "../components/Card"
import SectionTitle from "../components/SectionTitle"
import ImageWrapper from "../components/ImageWrapper"
import Chip from "../components/Chip"
import Icon from "../components/Icon"
import Title from "../components/Title"
import LabelTitle from "../components/LabelTitle"
import IconButton from "../components/IconButton"
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { projects } from "../data/projects"

function Projects({ isLoading, expandCard }){
    const cardRefs = useRef([]);
    const [currentRef, setCurrentRef] = useState(1);

    const scrollToCard = (index) => {
        if(cardRefs.current[index]){
            cardRefs.current[index].scrollIntoView({ behavior: 'smooth',  block: 'nearest', inline: 'center', });
            setCurrentRef(index);
        }
    };
    const nextCard = () => {
        if(currentRef < projects.length - 2){
            scrollToCard(currentRef + 1);
        }
    }
    const prevCard = () => {
        if(currentRef > 1){
            scrollToCard(currentRef - 1);
        }
    }

    return(
        <div className="w-full max-w-[1560px] min-w-[1024px] h-4/5 flex flex-col items-center gap-4">
            <div className='w-full'>
                <Card className='flex flex-row items-center justify-between' isLoadingNewContent={isLoading} size="md">
                    <Title text="Projects"/>
                    <div className="flex flex-row gap-6">
                        <IconButton faIcon={faCaretLeft} iconStyle="aspect-square text-2xl" interactStyle="hover:-translate-x-2" onClick={prevCard}/>
                        <IconButton faIcon={faCaretRight} iconStyle="aspect-square text-2xl" interactStyle="hover:translate-x-2" onClick={nextCard}/>
                    </div>
                </Card>
            </div>
            <div className="w-full h-full flex justify-center items-center mx-12">
                <div className='w-full h-full flex flex-row grow gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 pb-4 pt-6'>
                    {projects.map((project, index) => (
                        <Card className='w-[calc(33.3333%-21px)] flex flex-col shrink-0 gap-6 snap-center' isLoadingNewContent={isLoading}
                            ref={(el) => (cardRefs.current[index] = el)}
                            key={project.id}
                            onClick={() => expandCard(project.id)}>
                            <div>
                                <SectionTitle text={project.title} className="font-semibold"/>
                                <LabelTitle text={project.label}/>
                            </div>
                            <div className='w-full h-full flex flex-col gap-6 '>
                                <ImageWrapper alt={project.imageAlt} image={project.thumbnail.image} wrapperStyle="aspect-4/3"/>
                                <div className='w-full flex flex-wrap gap-4'>
                                    {project.tech.map((item, i) =>
                                        item.faIcon ? (
                                        <Chip className="text-lg" key={i} faIcon={item.faIcon} text={item.text} />
                                        ) : (
                                        <Chip className="text-lg" key={i} devIcon={item.devIcon} text={item.text} />
                                        )
                                    )}
                                </div>
                            </div>
                            <div className='w-full flex flex-row place-self-end items-center justify-start gap-4'>
                                {Object.keys(project.link).length > 0 && <>
                                    <Icon faIcon={project.link.devIcon ? project.link.devIcon : project.link.faIcon} iconStyle="aspect-square text-2xl"/>
                                    <p className='text-lg leading-none'>
                                        <a href={project.link.link}>{project.link.title}</a>
                                    </p>
                                </>
                                }
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;