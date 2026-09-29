import React from 'react';
import { StatsContainer, StatsTitle, StatContainer } from './styles';
import Stat from '../Stat';
import { formatStatName } from '../../utils';

const PokemonStats = ({ stats, bgColor }) => {

    return (
        <StatsContainer>
            <StatsTitle>Base Stats</StatsTitle>
            {stats.map(stat =>
                <StatContainer key={stat.name}>
                    <Stat
                        bgColor={bgColor}
                        stat={stat.value}
                        name={formatStatName(stat.name)}
                    />
                </StatContainer>
            )}
        </StatsContainer>
    );
};

export default PokemonStats;
