import SectionServiceItem from "./sectionServiceItem";

export default function SectionService({title, cssPersonalice, titles}){
    const array:string[] = titles

    return(
        <div className={`footer__widget ${cssPersonalice}`}>
        <h6 className="widget__title">{title}</h6>

        <ul className="widget__list">
            {
                array.map((title, index) => (
                    <SectionServiceItem key={index} name={title}/>
                ))
            }
        </ul>
      </div>
    )
}