import React, { useState } from "react";

import Date from "../assets/svg/Icon/Date.svg";
import Image from "../assets/svg/Icon/Image.svg";
import Person from "../assets/svg/Icon/Person.svg";
import Place from "../assets/svg/Icon/Place.svg";
import Search from "../assets/svg/Icon/Search.svg";

import InputComponent from '../components/input';
import ButtonComponent from '../components/button';
import FormComponent from '../components/form';
import ToolbarComponent from "../components/toolbar";
import WrapperComponent from "../components/wrapper";

const LandingPage = () => {

  const [tripType, settripType] = useState('ida_e_volta')

  const [inputs, setinputs] = useState({
      origem: 'São Paulo, Brazil',
      destino: 'São Paulo, Brazil',
      data: 'Sábado 14/4 - Quinta 18/4',
      pessoas: 1
  })

  const handleInputChange = (e) => setinputs({ ...inputs, [e.target.name]: e.target.value })

  const handleTripChange = (e) => settripType(e.target.value)

  const handleLabelMessage = () => tripType === "so_ida" ? "Data de Ida" : (tripType === "so_volta" ? "Data de Retorno" : "Data de Ida / Retorno")

  const handleSubmit = (e) => {
      e.preventDefault();
      // ...
  } 

  return (
      <WrapperComponent>

          <ToolbarComponent/>

          <header className="flex flex-col mt-10 px-8">
              <h1 className="text-white text-center font-bold text-5xl leading-tight">Viaje pelo mundo inteiro</h1>
              <h2 className="text-2xl text-center lh px-10 mt-4 leading-7" style={{ color: '#AAFAFF' }}>Aqui você encontra os melhores voos do mundo</h2>
          </header>

          <main className="w-full flex justify-center">
              <FormComponent submitFn={handleSubmit} >
                  <div className="flex w-full">
                      <InputComponent
                          type="radio"
                          label="Ida e volta"
                          value="ida_e_volta"
                          onChange={handleTripChange}
                          checked={tripType === 'ida_e_volta'}
                      />
                      <InputComponent
                          type="radio"
                          label="Só ida"
                          value="so_ida"
                          onChange={handleTripChange}
                          checked={tripType === 'so_ida'}
                      />
                      <InputComponent
                          type="radio"
                          label="Só volta"
                          value="so_volta"
                          onChange={handleTripChange}
                          checked={tripType === 'so_volta'}
                      />

                  </div>
                  <div className="lg:w-full lg:flex">
                    <InputComponent
                        type="text"
                        label="Origem"
                        value={inputs.origem}
                        onChange={handleInputChange}
                        icon={<Image />}
                    />
                    
                    <InputComponent
                        type="text"
                        label="Destino"
                        value={inputs.destino}
                        onChange={handleInputChange}
                        icon={<Place/>}
                    />

                    <InputComponent
                        type="text"
                        name="data"
                        label={handleLabelMessage()}
                        value={inputs.data}
                        onChange={handleInputChange}
                        icon={<Date/>}
                    />

                    <InputComponent
                        type="number"
                        name="pessoas"
                        label="Número de pessoas"
                        value={inputs.pessoas}
                        onChange={handleInputChange}
                        icon={<Person/>}
                    />
                  </div>

                <div className="flex bg-gray-400 rounded-b-sm lg:w-full">
                    <div className="my-0 mr-0 ml-auto pr-6 py-2">
                        <ButtonComponent type="submit" primary>
                            <Search className="w-4 h-4 mr-2"/>
                            <span>Busque as viagens</span>
                        </ButtonComponent>
                    </div>
                </div>
              </FormComponent>
          </main>

      </WrapperComponent>
  )
}

export default LandingPage
