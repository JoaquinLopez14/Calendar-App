import { StyleSheet } from 'react-native';

export const calendarStyles = StyleSheet.create({
    nameOfMonth: {
        fontSize: 35,
        fontWeight: "100",
        fontFamily: "Manrope",
        color: "black",
        marginTop: 10
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        flex: 1,
        backgroundColor: "#450000"
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
    },
    arrow: {
        fontSize: 40,
    }
});