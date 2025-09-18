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
        borderColor: "#00000086",
        overflow: "hidden"
    },
    dayCellBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    dayText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
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
    selectedDayContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    selectedDay: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Manrope",
        marginTop: 30
    },
    selectedDayText: {
        textAlign: "center",
        fontSize: 25,
        fontFamily: "Manrope",
        textTransform: "uppercase"
    },
    buttonMood: {
        display: "flex",
        justifyContent: "center",
        borderWidth: 0.5,
        width: 100,
        height: 40,
        margin: 10,
        padding: 2,
        borderRadius: 2,
        backgroundColor: "#6699f798",
    },
    modalMoodContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        margin: 10,
    },
    moodWrapper: {
        padding: 5,
    },
    modalMoodImg: {
        width: 60,
        height: 60,
    },
    modalAcceptButton: {
        color: "black",
        fontStyle: "italic",
        textTransform: "uppercase",
        backgroundColor: "white",
        fontFamily: "Montserrat",
        fontSize: 20,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        width: 100,
        margin: "auto",
        marginTop: 20,
        padding: 2,
        borderRadius: 10
    }
});