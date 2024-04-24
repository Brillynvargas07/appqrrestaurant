import SectionServiceItem from "./sectionServiceItem";

interface Props{
    title: string;
    cssPersonalice: string;
    titles: string[];
}
export default function SectionService({title, cssPersonalice, titles}: Props){
    const array:string[] = titles

    return(
        <div className={`footer__widget ${cssPersonalice}`}>
        <h6 className="widget__title">{title}</h6>

        <ul className="widget__list">
            {
                array.map((tl, index) => (
                    <SectionServiceItem key={index} name={tl}/>
                ))
            }
        </ul>
      </div>
    )
}