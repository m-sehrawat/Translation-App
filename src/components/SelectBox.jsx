export const SelectBox = ({ id, select }) => {

    return (
        <>
            <div className="select">
                <select id={id} onChange={select}>
                    <option>Select Language</option>
                    <option value="en">English</option>
                    <option value="hi"> Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <option value="fr"> French</option>
                    <option value="tr"> Turkish</option>
                </select>
            </div>
        </>
    );
};