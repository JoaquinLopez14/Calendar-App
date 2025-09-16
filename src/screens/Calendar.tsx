import { Pressable, Text, View, Image } from 'react-native';
import { es } from "date-fns/locale"
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { calendarStyles } from './CalendarStyles';
import { format, getDaysInMonth, startOfMonth, addMonths, subMonths, getISODay } from "date-fns"
import Modal from '../components/Modal';
import { saveMood, loadMoods } from '../storage/fileSystem';

export default function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1))
    const [selectedDay, setSelectedDay] = useState<number | null>(null)
    const [modalOpen, setIsModalOpen] = useState(false)
    const [moodSelected, setMoodSelected] = useState<number | null>(null)
    const [moodData, setMoodData] = useState<Record<string, number>>({})

    useEffect(() => {
        const fetchMoods = async () => {
            const data = await loadMoods()
            setMoodData(data);
        };
        fetchMoods();
    }, [])


    const moods = [require("../assets/mood/happy.png"),
    require("../assets/mood/cry.png"),
    require("../assets/mood/angry.png"),
    require("../assets/mood/neutral.png"),
    require("../assets/mood/love.png"),
    require("../assets/mood/sensitive.png"),]

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

    const handlePressDay = (day: number) => {
        setSelectedDay(day)
    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setMoodSelected(null)
    }

    const handleSelectedMood = (idx: number) => {
        setMoodSelected(idx)
    }

    const handleSaveMood = async () => {
        if (selectedDay !== null && moodSelected !== null) {
            const fullDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

            await saveMood(fullDate, moodSelected);
            const data = await loadMoods();
            setMoodData(data);

            handleCloseModal();
        }
    };

    const calendar = generateCalendar(currentDate)

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
                    <View style={calendarStyles.selectedDayContainer}>
                        <Text style={calendarStyles.selectedDay}>
                            ¿Qué quieres destacar del dia {selectedDay} de {capitalizeMonth} ?
                        </Text>
                        <Pressable style={calendarStyles.buttonMood} onPress={handleOpenModal}>
                            <Text style={calendarStyles.selectedDayText}>Mood</Text>
                        </Pressable>
                    </View>
                )}
            </View>
            {modalOpen && (
                <Modal
                    handleCloseModal={handleCloseModal}
                    title={"¿Cómo te sentís este día?"} >
                    <View style={calendarStyles.modalMoodContainer}>
                        {moods.map((img, idx) => (
                            <Pressable key={idx} onPress={() => handleSelectedMood(idx)}>
                                <View style={[
                                    calendarStyles.moodWrapper,
                                    moodSelected === idx && { backgroundColor: "#7db2e4ff", borderRadius: 15 }
                                ]}>
                                    <Image source={img} style={calendarStyles.modalMoodImg} />
                                </View>
                            </Pressable>
                        ))}
                    </View>
                </Modal>
            )}
            <Text>{JSON.stringify(moodData, null, 2)}</Text>
        </LinearGradient>
    )
}