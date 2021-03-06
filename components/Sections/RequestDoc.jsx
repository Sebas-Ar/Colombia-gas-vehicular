const RequestDoc = () => {

    const phraseList = [
        'Cédula Propietario del Predio.',
        'Recibo de gas domiciliario del predio.',
        'Documentos que confirme titularidad del propietario sobre el predio (Certificado de tradición del predio, recibos públicos o extrajuicio).',
        'Cédula propietario del vehículo.',
        'Carta de autorización firmada por el propietario del vehículo (en caso de ser una persona diferente al propietario de la casa) o extra juicio.',
        'Documentos de compromiso y financiación firmados.'
    ]

    return <section>

        <ul>
            {
                phraseList.map(text => (
                    <li>
                        <svg viewBox="0 0 23.9 36.62">
                            <g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M23.9.28C24-.2,22.47.08,22.47.08A18.59,18.59,0,0,0,11,6.57C5.54,12.44,3.06,20.85,1.94,25A82.17,82.17,0,0,0,.13,34.9c.41-1,6.59-16,12.22-21.4A47.28,47.28,0,0,0,21,2.42s1.74-1.85.09,1.66,1,0,0,2.38-7.43,13-7.43,13-1.31-4.23-6.17,5.14c-4.35,8.37-5.75,11-6,11.49,4.4,1.23,7.1,0,7.1,0,7.32-2.69,10.57-15.16,11.49-18.16S23.84.75,23.9.28ZM13.38,24.11c-.82,1.7-2.32,2.67-3.36,2.17s-1.21-2.28-.39-4S12,19.64,13,20.14,14.19,22.41,13.38,24.11Z" /><path class="cls-1" d="M.12,35V34.9L.1,35c-.56.87,1.34,1.2,1.34,1.2l.05-.08c-.32-.09-.65-.19-1-.31C.5,35.76,0,35.67.12,35Z" /></g></g>
                        </svg>
                        <p>
                            {text}
                        </p>
                    </li>
                ))
            }
        </ul>
        <span>Nota: En caso de que la casa tenga leasing, se debe anexar copia del contrato del leasing o extra juicio.</span>


        <style jsx>{`

			section {
				font-size: 1rem;
			}

			ul {
				background: url('/img/banner/banner-fondo-oscuro.webp') no-repeat;
				color: white;
				padding: 3em 5em 3em 8em;
				font-size: 1.5em;
				background-size: auto 100%;
			}

			li {
				margin: 1.5em 0;
				position: relative;
			}

			svg {
				fill: white;
				height: 2em;
				position: absolute;
				left: -3em;
				top: 50%;
				transform: translateY(-50%);
			}

			span {
				display: block;
				background-color: white;
				text-align: center;
				padding: 1em;
				color: var(--blue);
				font-size: 1.5em;
			}

			@media screen and (max-width: 640px) {
				section {
					font-size: .8rem;
				}

				ul {
					padding: 2em 2em 2em 5em;
				}
			}

			@media screen and (max-width: 400px) {
				section {
					font-size: .7rem;
				}
			}

			@media screen and (max-width: 350px) {
				section {
					font-size: .6rem;
				}
			}

			@media screen and (max-width: 330px) {
				section {
					font-size: .55rem;
				}
			}

		`}</style>
    </section>
}

export default RequestDoc