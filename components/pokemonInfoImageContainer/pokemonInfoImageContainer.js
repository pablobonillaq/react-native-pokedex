import { InfoImageContainer, InfoImage } from "./styles";

const PokemonInfoImageContainer = ({image, bgColor}) => {

    return (
        <InfoImageContainer bgColor={bgColor}>
            <InfoImage source={image}/>
        </InfoImageContainer>
    );
}

export default PokemonInfoImageContainer;