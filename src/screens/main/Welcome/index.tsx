import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import COLORS from "../../../appStyles/colors";
import { useNavigation } from "@react-navigation/native";
import languages from "../../../constants/Languages";
import SelectDropdown from "react-native-select-dropdown";
import currencies from "../../../constants/Currencies";
import Dropdown from "../../../components/Dropdown";

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo/logo.png")} style={styles.logo} />
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.subHeading}>Login to continue</Text>
            <View style={styles.bottomContainer}>
                <Button backgroundColor={COLORS.limeGreen} title={"Continue with Phone number"} textColor={COLORS.white} onPress={() => navigation.navigate("Login" as never)} />
                <Button backgroundColor={COLORS.white} title={"Register"} textColor={COLORS.black} style={styles.registerBtn} onPress={() => navigation.navigate("MobileVerification" as never)} />
                <Text style={styles.touchableText} onPress={() => console.log("Pressed")}>Looking for User App?</Text>
                <View style={styles.pickersContainer}>
                    <Dropdown title="Select Language" data={languages} onSelect={(selectedItem) => console.log(selectedItem)} showIcon={true} />
                    <Dropdown title="Select Currency" data={currencies} onSelect={(selectedItem) => console.log(selectedItem)} showIcon={true} />
                </View>
            </View>
        </View>
    );
};

export default Welcome;