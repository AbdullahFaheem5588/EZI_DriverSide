import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../appStyles/dimentions";
import COLORS from "../appStyles/colors";

interface ButtonProps {
    backgroundColor: string;
    textColor: string;
    title: string;
    style?: object;
    disabled?: boolean;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    textColor,
    title,
    style,
    disabled = false,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container,
                style,
            {
                backgroundColor: disabled ? COLORS.lightGray : backgroundColor
            }]
            }
            onPress={onPress}
            disabled={disabled}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SCREEN_WIDTH * 0.03,
        elevation: 3,
    },
    title: {
        fontSize: SCREEN_WIDTH * 0.05,
    }
});

export default Button;