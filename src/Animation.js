import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Datacleaninganimation2 from './data-cleaning-animation-2';
import Mlfeatureselectionextraction from './ml-feature-selection-extraction';

const DataCleaningAnimation = () => {
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const steps = [
    {
      title: 'Datos sin procesar',
      icon: AlertCircle,
      color: 'text-red-500',
      description: "Los datos sin procesar pueden contener errores, duplicados y valores faltantes.",
      example: "Ejemplo:\nID, Nombre, Edad, Ciudad\n1, Juan, 30, Madrid\n2, Ana, , Barcelona\n3, Juan, 30, Madrid\n4, Luis, -5, Valencia"
    },
    {
      title: 'Eliminar duplicados',
      icon: CheckCircle,
      color: 'text-yellow-500',
      description: "Eliminar registros duplicados para evitar sesgos en el modelo.",
      example: "Después:\nID, Nombre, Edad, Ciudad\n1, Juan, 30, Madrid\n2, Ana, , Barcelona\n4, Luis, -5, Valencia"
    },
    {
      title: 'Manejar valores faltantes',
      icon: CheckCircle,
      color: 'text-yellow-500',
      description: "Tratar los valores faltantes mediante imputación o eliminación.",
      example: "Después:\nID, Nombre, Edad, Ciudad\n1, Juan, 30, Madrid\n2, Ana, 35, Barcelona\n4, Luis, -5, Valencia\n(Se imputó la edad media de 35 para Ana)"
    },
    {
      title: 'Corregir errores',
      icon: CheckCircle,
      color: 'text-yellow-500',
      description: "Identificar y corregir errores en los datos.",
      example: "Después:\nID, Nombre, Edad, Ciudad\n1, Juan, 30, Madrid\n2, Ana, 35, Barcelona\n4, Luis, 25, Valencia\n(Se corrigió la edad negativa de Luis)"
    },
    {
      title: 'Normalizar datos',
      icon: CheckCircle,
      color: 'text-yellow-500',
      description: "Estandarizar las escalas de las variables numéricas.",
      example: "Después:\nID, Nombre, Edad_Normalizada, Ciudad\n1, Juan, 0.0, Madrid\n2, Ana, 1.0, Barcelona\n4, Luis, -1.0, Valencia\n(Edades normalizadas a escala -1 a 1)"
    },
    {
      title: 'Datos limpios',
      icon: CheckCircle,
      color: 'text-green-500',
      description: "Los datos están listos para ser utilizados en modelos de Machine Learning.",
      example: "Resultado final:\nID, Nombre, Edad_Normalizada, Ciudad\n1, Juan, 0.0, Madrid\n2, Ana, 1.0, Barcelona\n4, Luis, -1.0, Valencia"
    },
  ];

  const handleNext = () => {
    setStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-4">
        {steps.map((s, index) => (
          <React.Fragment key={index}>
            <div className={`flex flex-col items-center ${index <= step ? s.color : 'text-gray-300'}`}>
              <s.icon size={24} />
              <span className="text-xs mt-1">{s.title}</span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className={`mx-2 ${index < step ? 'text-blue-500' : 'text-gray-300'}`} size={24} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">{steps[step].title}</p>
        <p className="text-sm text-gray-600 mb-2">{steps[step].description}</p>
        <pre className="text-xs bg-gray-100 p-2 rounded text-left whitespace-pre-wrap">
          {steps[step].example}
        </pre>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={step === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={step === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => openModal("Limpieza de datos en Python")}
            className="w-full py-2 bg-green-500 text-white rounded-lg"
          >
            Limpieza de datos en Python
          </button>
          <button
            onClick={() => openModal("Selección y Extracción de Características")}
            className="w-full py-2 bg-purple-500 text-white rounded-lg"
          >
            Selección y Extracción de Características
          </button>
        </div>
        {showModal && (
        <div className="bg-opacity-50">
          <div className="p-8 rounded-lg w-full h-auto space-y-6">
            {modalContent === "Limpieza de datos en Python" && <Datacleaninganimation2 />}
            {modalContent === "Selección y Extracción de Características" && <Mlfeatureselectionextraction />}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCleaningAnimation;
