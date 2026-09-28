import { StatsContainer, StatsTitle, StatContainer } from "./styles";
import Stat from "../stat/Stat";

const PokemonStats = ({stats, bgColor}) => {

    return (
        <StatsContainer>
            <StatsTitle>Base Stats</StatsTitle>
            {stats.map(stat => 
                <StatContainer key={stat.stat.name}>
                    <Stat 
                        bgColor={bgColor} 
                        stat={stat.base_stat}
                        name={stat.stat.name.replace('-', ' ')}
                    />
                </StatContainer>
            )}
        </StatsContainer>
    );
}

export default PokemonStats;