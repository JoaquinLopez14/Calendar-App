import { Pressable, Text, View } from 'react-native';
import { es } from "date-fns/locale"
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./HomeStyles"
import { calendarStyles } from './CalendarStyles';
import { format, getDaysInMonth, startOfMonth, addMonths, subMonths, getISODay } from "date-fns"

export default function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1))

    const nameOfMonth = startOfMonth(currentDate)

    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

    const days = ["L", "M", "M", "J", "V", "S", "D"]

    const generateCalendar = (currentDate: any) => {
        const totalDays = getDaysInMonth(currentDate)
        const offset = getISODay(startOfMonth(currentDate)) - 1

        const leadingNulls = Array(offset).fill(null)
        const days = Array.from({ length: totalDays }, (_, i) => i + 1)

        let calendar = [...leadingNulls, ...days]

        const remainder = calendar.length % 7
        if (remainder !== 0) {
            const trailingNulls = Array(7 - remainder).fill(null)
            calendar = [...calendar, ...trailingNulls]
        }
        return calendar
    }

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1))
    }

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1))
    }

    const calendar = generateCalendar(currentDate)


    return (<LinearGradient
        colors={["#a18cd1", "#fbc2eb"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={{ flex: 1 }}>
        <View style={calendarStyles.container}>
            <Text style={styles.title}>Calendario</Text>
            <Text style={calendarStyles.nameOfMonth}>
                {capitalize(format(nameOfMonth, "Y", { locale: es }))}
            </Text>
            <View style={calendarStyles.navContainer}>
                <Pressable onPress={handlePrevMonth}>
                    <Text style={calendarStyles.arrow}>{"<"}</Text>
                </Pressable>
                <Text style={calendarStyles.nameOfMonth}>
                    {capitalize(format(nameOfMonth, "MMMM", { locale: es }))}
                </Text>
                <Pressable onPress={handleNextMonth}>
                    <Text style={calendarStyles.arrow}>{">"}</Text>
                </Pressable>
            </View>
            <View style={calendarStyles.daysContainer}>
                {days.map((d, i) => (
                    <View key={i} style={calendarStyles.dayHeader}>
                        <Text>{d}</Text>
                    </View>
                ))}
            </View>
            <View style={calendarStyles.grid}>
                {calendar.map((day, idx) => (
                    <View key={idx} style={calendarStyles.dayCell}>
                        {day && <Text>{day}</Text>}
                    </View>
                ))}
            </View>
        </View>
    </LinearGradient>
    )
}