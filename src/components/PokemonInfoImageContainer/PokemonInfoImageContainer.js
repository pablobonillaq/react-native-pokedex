import React from 'react';
import { InfoImageContainer, InfoImage } from './styles';

const PokemonInfoImageContainer = ({ image, bgColor }) => {

    return (
        <InfoImageContainer bgColor={bgColor}>
            <InfoImage source={image} resizeMethod="resize" fadeDuration={0} />
        </InfoImageContainer>
    );
};

export default PokemonInfoImageContainer;
