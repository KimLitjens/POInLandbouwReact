import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const envelopeSquare = <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
    const phoneSquare = <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />

    return (

        <div class="row d-flex align-items-center mt-5 ml-2">
            <div class="col-lg-6 text-center">
                <div>
                    <p class="text-danger">
                        Contact of meer informatie over ProducentenOrganisatie
              </p>
                </div>
                <form
                    data-netlify="true"
                    class="needs-validation"
                    method="post"
                    name="contact"
                    data-netlify-recaptcha="true"
                    action="/dist/index.html?succesfull"
                    novalidate
                >
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            id="nameForm"
                            name="name"
                            placeholder="Naam *"
                            required
                        />
                        <div class="invalid-feedback">Please fill in your name.</div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control"
                                placeholder="Email *"
                                required
                            />
                            <div class="invalid-feedback">Please fill in your email.</div>
                        </div>
                        <div class="form-group col">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                class="form-control"
                                placeholder="Telefoon(optioneel)"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            class="form-control"
                            placeholder="Onderwerp(optioneel)"
                        />
                    </div>
                    <div class="form-group">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            placeholder="Bericht *"
                            required
                            class="form-control"
                        ></textarea>
                        <div class="invalid-feedback">Please fill in your message.</div>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <button
                        type="submit"
                        class="btn btn-danger"
                        value="SEND MES"
                        name="submit"
                    >
                        SEND
              </button>
                </form>
            </div>
            <div class="col-lg-6 mt-5">
                <p class="d-flex justify-content-center mailContact">
                    <a href="mailto:mlitjens53@hotmail.com"
                    >{envelopeSquare}</a
                    >mlitjens53@hotmail.com
            </p>
                <p class="d-flex justify-content-center phoneContact">
                    <a href="tel:+31642735852"
                    >{phoneSquare}</a
                    >+31 (0)6 42 73 58 52
            </p>
            </div>
        </div>
    )
}
export default Contact