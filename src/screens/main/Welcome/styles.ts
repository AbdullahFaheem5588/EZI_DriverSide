import { StyleSheet } from "react-native";
import COLORS from "../../../appStyles/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../appStyles/dimentions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    logo: {
        height: SCREEN_WIDTH * 0.3,
        width: SCREEN_WIDTH * 0.3,
        resizeMode: 'contain',
        marginVertical: SCREEN_HEIGHT * 0.05,
    },
    heading: {
        fontSize: SCREEN_WIDTH * 0.12,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    subHeading: {
        fontSize: SCREEN_WIDTH * 0.07,
        color: COLORS.black,
    },
    bottomContainer: {
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.1,
        borderTopLeftRadius: SCREEN_WIDTH * 0.1,
        borderTopRightRadius: SCREEN_WIDTH * 0.1,
        paddingVertical: SCREEN_HEIGHT * 0.05,
        elevation: 10,
        backgroundColor: COLORS.white,
    },
    registerBtn: {
        marginVertical: SCREEN_HEIGHT * 0.03
    },
    touchableText: {
        fontSize: SCREEN_WIDTH * 0.05,
        color: COLORS.limeGreen,
        fontWeight: 'bold',
    },
    pickersContainer: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: SCREEN_HEIGHT * 0.05,
    },
});

export default styles;