import * as FileSystem from "expo-file-system"

const fileUri = FileSystem.documentDirectory + "moods.json"

export async function saveMood(date: string, mood: number) {
    let data: Record<string, number> = {};

    const info = await FileSystem.getInfoAsync(fileUri);
    if (info.exists) {
        const content = await FileSystem.readAsStringAsync(fileUri);
        data = JSON.parse(content)
    }

    data[date] = mood;

    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(data));
}

export async function loadMoods(): Promise<Record<string, number>> {
    const info = await FileSystem.getInfoAsync(fileUri);
    if (!info.exists) return {};
    const content = await FileSystem.readAsStringAsync(fileUri);
    return JSON.parse(content);
}