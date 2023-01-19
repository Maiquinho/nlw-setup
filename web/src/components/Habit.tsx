interface HabitProps {
    completed: number
}


export function Habit({ completed }: HabitProps){

    return (
        <div className="bg-purple-900 w-10 h-10 text-white text-center rounded m-2 flex justify-center items-center">{completed}</div>
    )
}