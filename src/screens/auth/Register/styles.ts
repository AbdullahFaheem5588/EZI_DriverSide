import { StyleSheet } from "react-native";
import COLORS from "../../../appStyles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    heading: {
        fontSize: 50,
    }
});

export default styles;