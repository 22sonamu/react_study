export default function Card({image, title, des}){
    return(
    <li className="concept">
        <img src={image} alt="TODO: TITLE" />
        <h2>{title}</h2>
        <p>{des}</p>
    </li>
  );
}