export default function CustomEditor() {
    const saveContent = () => {
        console.log("Content Saved");
    };

    const insertVariable = () => {
        console.log("Insert Variable");
    };

    return (
        <div className="editor">
            <button onClick={saveContent}>SAVE</button>
            <button onClick={insertVariable}>Variables</button>
            <textarea rows="10"></textarea>
        </div>
    );
}
