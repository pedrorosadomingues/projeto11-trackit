import MainHeader from "../MainHeader";

export default function HabitsPage() {
    const token = localStorage.getItem("token");
    console.log(token);
    return (
        <div>
            <MainHeader/>
            <h1>Habits Page</h1>
        </div>
    )
}