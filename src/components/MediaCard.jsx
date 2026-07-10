import ReusableButton from "./ReusableButton"

const MediaCard = ({id, title,type, tags, thumbnail, dateAdded, onDelete, onEdit}) => {
    

    return(
        <article>
        <ReusableButton label="🗑" onClick={() => onDelete(id)} variant="delete" />
        <ReusableButton label="✏️" onClick={() => onEdit({id, title, type, tags, thumbnail, dateAdded})} />
        <h3>{title}</h3>
        {thumbnail && <img src={thumbnail} alt={title} />}
        <h4>{type}</h4>
        {tags.map((tag) => <span key={tag}>{tag}</span>)} 
        <h4>{dateAdded}</h4>
    </article>
)};

export default MediaCard;