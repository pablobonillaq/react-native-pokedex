import React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import { colors } from '../../theme';
import { MAX_STAT } from '../../constants';

const styles = StyleSheet.create({
    bar: { height: 20 },
    text: { fontSize: 12, color: colors.pokemonInfoTextColor, textAlign: 'left', paddingLeft: 10 },
});

const Stat = ({ bgColor, stat, name }) => {
    return (
        <ProgressBar
            backgroundBarStyle={styles.bar}
            textStyle={styles.text}
            arrayOfProgressObjects={[
                {
                    color: bgColor,
                    value: Math.min(stat / MAX_STAT, 1),
                    nameToDisplay: name + ' ' + stat,
                },
            ]}
        />
    );
};

export default Stat;
