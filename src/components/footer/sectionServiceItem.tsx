export default function SectionServiceItem({name}){
    return(
        <li className="widget__item">
            <a className="widget__link" href="#">
              {name}
            </a>
        </li>
    )
}