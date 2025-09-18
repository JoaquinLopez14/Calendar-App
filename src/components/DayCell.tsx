import { Pressable, Text, ImageBackground, View } from "react-native";
import { calendarStyles } from "../screens/CalendarStyles";

type Props = {
    day: number | null;
    currentDate: Date;
    selectedDay: number | null;
    moodData: Record<string, number>;
    moods: any[];
    onPress: (day: number) => void;
};

export default function DayCell({ day, currentDate, selectedDay, moodData, moods, onPress }: Props) {
    if (day === null) {
        return <View style={calendarStyles.dayCell} />;
    }

    const fullDate = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const moodIdx = moodData[fullDate];

    return (
        <Pressable
            style={[
                calendarStyles.dayCell,
                selectedDay === day && { backgroundColor: "#7db2e4ff" },
            ]}
            onPress={() => onPress(day)}
        >
            {moodIdx !== undefined ? (
                <ImageBackground
                    source={moods[moodIdx]}
                    style={calendarStyles.dayCellBackground}
                    imageStyle={{ opacity: 0.5 }}
                >
                    <Text style={calendarStyles.dayText}>{day}</Text>
                </ImageBackground>
            ) : (
                <Text style={calendarStyles.dayText}>{day}</Text>
            )}
        </Pressable>
    );
}
