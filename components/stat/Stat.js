import { ProgressBar } from "react-native-multicolor-progress-bar";
import { colors } from "../../theme/colors";

const Stat = ({bgColor, stat, name}) => {
    return (
        <ProgressBar
            backgroundBarStyle={{height: 20}}
            textStyle={{fontSize: 12, color: colors.pokemonInfoTextColor, textAlign: 'left', paddingLeft: 10}}
            arrayOfProgressObjects={[
                {
                    color: bgColor,
                    value: stat / 100,
                    nameToDisplay: name.replace('-', ' '),
                },
            ]}
        />
    );
}

export default Stat;