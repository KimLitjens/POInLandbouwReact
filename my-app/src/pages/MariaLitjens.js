import maria2 from "../img/maria2.jpg"

function MariaLitjens() {
    return (

        <div class="col">
            <div id="header"></div>
            <div class="row h70 mt-5">
                <div id="mariaText" class="col-8 text-center d-flex flex-column">
                    <p>ProducentenOrganisaties zijn onbekend in Nederland.</p>
                    <p>Ik schrijf daarover in landbouw- en juridische tijdschriften.</p>
                    <p>De regels voor ProducentenOrganisaties zijn gecompliceerd.</p>
                    <p>Ik analyseer de regels en ken de mogelijkheden.</p>
                    <p>ProducentenOrganisaties bieden perspectief voor de landbouw.</p>
                    <p>Ik geef (juridisch) advies.</p>
                </div>
                <div class="d-flex align-items-start col-4">
                    <img
                        src={maria2}
                        alt="Maria Litjens"
                        class="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    )
}
export default MariaLitjens