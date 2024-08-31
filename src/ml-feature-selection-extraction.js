import React, { useState, useEffect } from 'react';

const FeatureAnimation = () => {
  const [step, setStep] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [extractedFeatures, setExtractedFeatures] = useState([]);
  const [data, setData] = useState([]);

  const features = ['Edad', 'Altura', 'Peso', 'Presión arterial', 'Nivel de colesterol', 'Frecuencia cardíaca'];

  useEffect(() => {
    // Generar datos simulados
    const generateData = () => {
      return Array.from({ length: 5 }, () => ({
        id: Math.floor(Math.random() * 1000),
        edad: Math.floor(Math.random() * 50) + 20,
        altura: Math.floor(Math.random() * 50) + 150,
        peso: Math.floor(Math.random() * 50) + 50,
        presionArterial: `${Math.floor(Math.random() * 40) + 100}/${Math.floor(Math.random() * 20) + 60}`,
        nivelColesterol: Math.floor(Math.random() * 150) + 150,
        frecuenciaCardiaca: Math.floor(Math.random() * 40) + 60,
      }));
    };

    setData(generateData());
  }, []);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      if (step === 0) {
        setSelectedFeatures(['Edad', 'Peso', 'Presión arterial']);
      } else if (step === 1) {
        setExtractedFeatures(['Índice de masa corporal', 'Riesgo cardiovascular']);
      }
    } else {
      setStep(0);
      setSelectedFeatures([]);
      setExtractedFeatures([]);
    }
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const calculateCardiovascularRisk = (age, systolicBP, weight) => {
    // Esta es una fórmula simplificada y ficticia para el ejemplo
    const systolic = parseInt(systolicBP.split('/')[0]);
    return ((age * 0.1 + systolic * 0.05 + weight * 0.02) / 3).toFixed(1);
  };

  return (
    <div className="mx-auto">
      <div className="bg-white shadow rounded-lg mb-4 p-4">
        <h2 className="text-xl font-bold mb-4">Selección y Extracción de Características</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Características originales:</h3>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {step >= 1 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Características seleccionadas:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedFeatures.map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-green-100 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {step >= 2 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Características extraídas:</h3>
            <div className="flex flex-wrap gap-2">
              {extractedFeatures.map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-purple-100 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Resultado final:</h3>
            <p>Hemos reducido de 6 características originales a 5 características más relevantes y informativas.</p>
          </div>
        )}
        
        <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          {step < 3 ? 'Siguiente paso' : 'Reiniciar'}
        </button>
      </div>
      
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Datos de ejemplo</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                {step < 1 && features.map((feature, index) => (
                  <th key={index} className="py-3 px-6 text-left">{feature}</th>
                ))}
                {step >= 1 && step < 2 && selectedFeatures.map((feature, index) => (
                  <th key={index} className="py-3 px-6 text-left">{feature}</th>
                ))}
                {step >= 2 && (
                  <>
                    {selectedFeatures.map((feature, index) => (
                      <th key={index} className="py-3 px-6 text-left">{feature}</th>
                    ))}
                    {extractedFeatures.map((feature, index) => (
                      <th key={index} className="py-3 px-6 text-left">{feature}</th>
                    ))}
                  </>
                )}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data.map((row) => (
                <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{row.id}</td>
                  {step < 1 && (
                    <>
                      <td className="py-3 px-6 text-left">{row.edad}</td>
                      <td className="py-3 px-6 text-left">{row.altura}</td>
                      <td className="py-3 px-6 text-left">{row.peso}</td>
                      <td className="py-3 px-6 text-left">{row.presionArterial}</td>
                      <td className="py-3 px-6 text-left">{row.nivelColesterol}</td>
                      <td className="py-3 px-6 text-left">{row.frecuenciaCardiaca}</td>
                    </>
                  )}
                  {step >= 1 && step < 2 && (
                    <>
                      <td className="py-3 px-6 text-left">{row.edad}</td>
                      <td className="py-3 px-6 text-left">{row.peso}</td>
                      <td className="py-3 px-6 text-left">{row.presionArterial}</td>
                    </>
                  )}
                  {step >= 2 && (
                    <>
                      <td className="py-3 px-6 text-left">{row.edad}</td>
                      <td className="py-3 px-6 text-left">{row.peso}</td>
                      <td className="py-3 px-6 text-left">{row.presionArterial}</td>
                      <td className="py-3 px-6 text-left">{calculateBMI(row.peso, row.altura)}</td>
                      <td className="py-3 px-6 text-left">{calculateCardiovascularRisk(row.edad, row.presionArterial, row.peso)}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg mt-4 p-4">
        <h2 className="text-xl font-bold mb-4">Explicación</h2>
        <div>
          {step === 0 && (
            <p>Comenzamos con un conjunto de características originales que describen a un paciente. La tabla muestra todos los datos disponibles.</p>
          )}
          {step === 1 && (
            <p>En la selección de características, elegimos las más relevantes para nuestro modelo de ML. Observe cómo la tabla ahora muestra solo las características seleccionadas.</p>
          )}
          {step === 2 && (
            <p>La extracción de características crea nuevas características basadas en las existentes, capturando información más compleja. En la tabla, hemos añadido el Índice de Masa Corporal (IMC) y un Riesgo Cardiovascular simulado.</p>
          )}
          {step === 3 && (
            <p>El conjunto final de características es más pequeño pero más informativo, lo que mejora el rendimiento del modelo y reduce el sobreajuste. La tabla final muestra cómo hemos transformado los datos originales en un conjunto más compacto y potencialmente más útil para el análisis.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureAnimation;
