import { StyleSheet } from 'react-native';

// StyleSheet en lugar de styled-components: los estilos se crean una sola vez
// y no se recalculan en cada render de cada tarjeta de la lista.
export const CARD_HEIGHT = 200;
export const CARD_MARGIN_BOTTOM = 10;
export const ROW_HEIGHT = CARD_HEIGHT + CARD_MARGIN_BOTTOM;

export const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginBottom: CARD_MARGIN_BOTTOM,
        marginHorizontal: 10,
        borderRadius: 30,
    },
    button: {
        height: CARD_HEIGHT,
        justifyContent: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        width: 120,
        height: 120,
    },
    name: {
        width: '100%',
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
    },
});
