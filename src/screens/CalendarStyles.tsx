import { StyleSheet } from 'react-native';

export const calendarStyles = StyleSheet.create({
    title: {
        fontSize: 70,
        fontFamily: "Montserrat"
    },
    grid: {
        backgroundColor: "#ffffffc9",
        margin: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    dayCell: {
        width: "14.28%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderRadius: 6,
        borderColor: "#000000ff",
    },
    container: {
        display: "flex",
        margin: 5,
        marginTop: 30,
        paddingTop: 20,
        alignItems: "center",
    },
    daysContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    dayHeader: {
        width: "13.50%",
        alignItems: "center",
    },
    navContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    centerText: {
        alignItems: "center",
        minWidth: 250
    },
    arrowLeft: {
        position: "absolute",
        left: -50,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
    arrowRight: {
        position: "absolute",
        right: -50,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
    yearText: {
        fontSize: 28,
        fontWeight: "100",
        fontFamily: "Manrope"
    },
    nameOfMonth: {
        fontSize: 50,
        fontWeight: "100",
        fontFamily: "Manrope"
    },
    selectedDay: {
        fontSize: 20,
        fontFamily: "Manrope",
        marginTop: 30
    }
});