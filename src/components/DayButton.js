export default function DayButton({day}) {
    function selectDay(e) {
        e.preventDefault();
    }
    return (
        <button onClick={(e)=>selectDay(e)}>
                        {day}
                    </button>
    )
}