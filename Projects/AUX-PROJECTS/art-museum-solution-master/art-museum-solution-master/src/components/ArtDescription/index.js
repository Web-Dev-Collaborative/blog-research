import {Link, useParams} from "react-router-dom";

const ArtDescription = ({gallery}) => {
    
    const {artId} = useParams();
    const art = gallery.objects.find(a => a.id === Number(artId))

    return (
      <div>
        <a href={art.url}><h3>{art.title}</h3></a>
        <Link to={`/galleries/${gallery.id}`}>Back to {gallery.name} Gallery</Link>
        <p>{art.description}</p>
        <p>Credit: {art.creditline}</p>
        <p>Technique: {art.technique}</p>
        <div className="art-image-list">
          {art.images.map(image => (
            <img src={image.baseimageurl} key={image.imageid} alt={art.title} />
          ))}
        </div>
      </div>
    );
};

export default ArtDescription;