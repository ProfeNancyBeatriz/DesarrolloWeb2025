type CalorieDisplayProps = {
    calories: number
    text: string
}

export default function CaloriesDisplay({ calories, text }: CalorieDisplayProps) {
    return (
        <p className="pdeTrucker">
            <span>{calories}</span>
            {text}
        </p>
    )
}
