import PropTypes from 'prop-types';
import { ActorsList, ActorComponent } from '../styles/MovieActors.styled';
import { ImageWithFallback } from './ImageWithFallBack';
import replaceImage from 'images/person-replace-image.png';

export const MovieActorsList = ({ actors = [] }) => {
  return (
    <ActorsList>
      {actors.map(actor => (
        <ActorComponent key={actor.cast_id}>
          <div>
            <h3>{actor.name}</h3>
            <ImageWithFallback fallback={replaceImage} src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} width="95%"/>
            <p>Character: {actor.character}</p>
          </div>
        </ActorComponent>
      ))}
    </ActorsList>
  );
};

MovieActorsList.propTypes = {
  actors: PropTypes.array,
};