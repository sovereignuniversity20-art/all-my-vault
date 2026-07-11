import ReusableButton from "./ReusableButton"

const typeIcons = {
    pdf: '\u{1F4C3}',
    audio: '\u{1F3A7}',
    video: '\u{1F4F9}',
    image: '\u{1F4F8}'  
};

const MediaCard = ({id, title,type, tags, thumbnail, dateAdded, onDelete, onEdit}) => {
  

    return(
        <article className="mediacard">
        <ReusableButton label="🗑" onClick={() => onDelete(id)} variant="delete" />
        <ReusableButton label="✏️" onClick={() => onEdit({id, title, type, tags, thumbnail, dateAdded})} />
        <h3>{title}</h3>
        {thumbnail ? <img src={thumbnail} alt={title} /> : <span>{typeIcons[type]}</span>}
        <h4>{type}</h4>
        {tags.map((tag) => <span key={tag}>{tag}</span>)} 
        <h4>{dateAdded}</h4>
    </article>
)};

export default MediaCard;