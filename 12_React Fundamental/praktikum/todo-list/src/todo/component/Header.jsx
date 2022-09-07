export default function Header({text}) {
    return (
        <div style={{ padding: "10px 20px", boxShadow: "10px -1px 90px -16px rgba(0,0,0,0.26)" }} >
            <h1>Todo List | {text}</h1>
        </div>
    );
}