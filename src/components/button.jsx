
export function Button({ handleclick, textBtuton }) {
    return (
        <>
            <button onClick={handleclick}>{textBtuton}</button>
        </>
    )
}