import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

const DataCleaningAnimation = () => {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    { text: "Datos sin procesar", color: "bg-red-200" },
    { text: "Eliminar valores nulos", color: "bg-yellow-200" },
    { text: "Convertir tipos de datos", color: "bg-green-200" },
    { text: "Normalizar valores", color: "bg-blue-200" },
    { text: "Eliminar duplicados", color: "bg-purple-200" },
    { text: "Datos limpios", color: "bg-emerald-200" }
  ];

  useEffect(() => {
    if (isAnimating && !isPaused) {
      const timer = setTimeout(() => {
        if (step < steps.length - 1) {
          setStep(step + 1);
        } else {
          setIsAnimating(false);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, isAnimating, isPaused]);

  const startAnimation = () => {
    setStep(0);
    setIsAnimating(true);
    setIsPaused(false);
  };

  const pauseAnimation = () => {
    setIsPaused(true);
    setIsAnimating(false);
  };

  const resumeAnimation = () => {
    setIsPaused(false);
    setIsAnimating(true);
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setIsPaused(true);
    }
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      setIsPaused(true);
    }
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold mb-4">Limpieza de datos en Python</h2>
      <div className="flex items-center justify-center mb-4">
        {steps.map((s, index) => (
          <React.Fragment key={index}>
            <div className={`w-32 h-16 ${s.color} ${index <= step ? 'opacity-100' : 'opacity-30'} rounded flex items-center justify-center text-center p-2 transition-all duration-500`}>
              {s.text}
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className={`mx-2 ${index < step ? 'text-black' : 'text-gray-300'} transition-all duration-500`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={previousStep}
          disabled={step === 0 || isAnimating}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Atrás
        </button>
        {isAnimating ? (
          <button
            onClick={pauseAnimation}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Pausar
          </button>
        ) : (
          <button
            onClick={isPaused ? resumeAnimation : startAnimation}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isPaused ? 'Reanudar' : 'Iniciar animación'}
          </button>
        )}
        <button
          onClick={nextStep}
          disabled={step === steps.length - 1 || isAnimating}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Paso actual: {steps[step].text}</h3>
        <p className="mb-2">Código Python equivalente:</p>
        <pre className="bg-gray-100 p-2 rounded">
          {step === 0 && "# Cargar datos\nimport pandas as pd\ndf = pd.read_csv('datos.csv')"}
          {step === 1 && "# Eliminar valores nulos\ndf = df.dropna()"}
          {step === 2 && "# Convertir tipos de datos\ndf['columna'] = df['columna'].astype(int)"}
          {step === 3 && "# Normalizar valores\nfrom sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\ndf['columna'] = scaler.fit_transform(df[['columna']])"}
          {step === 4 && "# Eliminar duplicados\ndf = df.drop_duplicates()"}
          {step === 5 && "# Datos limpios\nprint(df.head())"}
        </pre>
      </div>
    </div>
  );
};

export default DataCleaningAnimation;