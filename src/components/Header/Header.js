import { TouchableOpacity, Text } from 'react-native';
import { HeaderContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { HeaderText } from './styles';

const Header = ({id, bgColor, showText, showBackButton, showNumber}) => {

    const navigation = useNavigation();

    return (
        <HeaderContainer bgColor={bgColor}>
            {showBackButton && 
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <HeaderText>Back</HeaderText>
                </TouchableOpacity>}
            {showNumber && <HeaderText># {id}</HeaderText>}
            {showText && <HeaderText>Pokedex</HeaderText>}
        </HeaderContainer>
    );
}

export default Header;