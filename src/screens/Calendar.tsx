import { Pressable, Text, View } from 'react-native';
import { es } from "date-fns/locale"
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { calendarStyles } from './CalendarStyles';
import { format, getDaysInMonth, startOfMonth, addMonths, subMonths, getISODay } from "date-fns"

export default function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1))
    const [selectedDay, setSelectedDay] = useState<number | null>(null)

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
        setSelectedDay(null)
    }

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1))
        setSelectedDay(null)
    }

    const calendar = generateCalendar(currentDate)

    const handlePressDay = (day: number) => {

        setSelectedDay(day)
    }

    const capitalizeMonth = capitalize(format(nameOfMonth, "MMMM", { locale: es }))


    return (
        <LinearGradient
            colors={["#a18cd1", "#fbc2eb"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={{ flex: 1 }}>
            <View style={calendarStyles.container}>
                <Text style={calendarStyles.title}>Calendario</Text>
                <View style={calendarStyles.navContainer}>
                    <Pressable onPress={handlePrevMonth} style={calendarStyles.arrowLeft}>
                        <Ionicons name="chevron-back" size={28} color="black" />
                    </Pressable>

                    <View style={calendarStyles.centerText}>
                        <Text style={calendarStyles.yearText}>
                            {capitalize(format(nameOfMonth, "yyyy"))}
                        </Text>
                        <Text style={calendarStyles.nameOfMonth}>
                            {capitalizeMonth}
                        </Text>
                    </View>

                    <Pressable onPress={handleNextMonth} style={calendarStyles.arrowRight}>
                        <Ionicons name="chevron-forward" size={28} color="black" />
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
                        <Pressable
                            key={idx}
                            style={[
                                calendarStyles.dayCell,
                                day !== null && selectedDay === day && { backgroundColor: "#7db2e4ff" }
                            ]}
                            disabled={day === null}
                            onPress={() => day !== null && handlePressDay(day)}
                        >
                            {day !== null && <Text>{day}</Text>}
                        </Pressable>
                    ))}
                </View>
                {selectedDay && (
                    <Text style={calendarStyles.selectedDay}>
                        Seleccionaste el día {selectedDay} de {capitalizeMonth}
                    </Text>
                )}
            </View>
        </LinearGradient>
    )
}