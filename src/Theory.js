import React, { useState } from 'react';

const Theory = () => {
    const AccordionItem = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border-b border-gray-200">
                <button
                className="flex justify-between items-center w-full py-4 px-6 text-left font-semibold"
                onClick={() => setIsOpen(!isOpen)}
                >
                {title}
                <span>{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                <div className="py-4 px-6">
                    {children}
                </div>
                )}
            </div>
        );
    };
    return (
<div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4">Teoría de Limpieza de Datos</h3>
    <div className="border border-gray-200 rounded-lg">
        <AccordionItem title="¿Qué es la Limpieza de Datos?">
            <p>La limpieza de datos es un proceso fundamental en la ciencia de datos y análisis que asegura que los datos utilizados sean precisos, completos y adecuados para su análisis. Involucra la identificación y corrección de errores o inconsistencias en los datos, lo que permite que las predicciones y decisiones basadas en estos datos sean confiables y válidas.</p>
        </AccordionItem>

        <AccordionItem title="Técnicas Comunes de Limpieza de Datos">
            <p>Existen varias técnicas comunes en la limpieza de datos, cada una diseñada para abordar diferentes tipos de problemas en los datos:</p>
            <ul className="list-disc list-inside">
                <li><strong>Eliminación de duplicados:</strong> Esta técnica se utiliza para eliminar registros repetidos en un conjunto de datos, garantizando que cada registro sea único.</li>
                <li><strong>Imputación de valores:</strong> Se usa para manejar datos faltantes, reemplazando valores ausentes con estimaciones basadas en los datos disponibles.</li>
                <li><strong>Detección y manejo de valores atípicos:</strong> Identifica valores que se desvían significativamente del resto de los datos y decide si se deben corregir, eliminar o mantener.</li>
                <li><strong>Corrección de errores de formato:</strong> Asegura que los datos sigan un formato coherente, como las fechas en el mismo formato o los nombres escritos de manera uniforme.</li>
            </ul>
        </AccordionItem>

        <AccordionItem title="Manejo de Valores Faltantes">
            <p>Los valores faltantes son un problema común en los conjuntos de datos. Existen varias estrategias para manejar estos valores:</p>
            <ul className="list-disc list-inside">
                <li><strong>Eliminación de filas o columnas:</strong> Si la cantidad de datos faltantes es pequeña, puede ser más fácil eliminar las filas o columnas que contienen valores faltantes.</li>
                <li><strong>Imputación con la media o la mediana:</strong> Se reemplazan los valores faltantes por la media o la mediana de la columna, lo cual es útil cuando los datos son numéricos y distribuidos de manera uniforme.</li>
                <li><strong>Imputación basada en modelos:</strong> Utiliza modelos predictivos para estimar los valores faltantes basándose en las otras variables del conjunto de datos.</li>
            </ul>
        </AccordionItem>

        <AccordionItem title="Detección de Valores Atípicos">
            <p>La detección de valores atípicos es crucial para garantizar que los datos sean representativos. Los valores atípicos pueden distorsionar los resultados de los análisis si no se manejan adecuadamente. Algunas técnicas para detectarlos incluyen:</p>
            <ul className="list-disc list-inside">
                <li><strong>Gráficos de caja y bigotes (Boxplots):</strong> Una herramienta visual que muestra la distribución de los datos y resalta los valores atípicos.</li>
                <li><strong>Z-Score:</strong> Una métrica que indica cuántas desviaciones estándar se encuentra un valor con respecto a la media de los datos. Los valores con un Z-score alto o bajo son considerados atípicos.</li>
                <li><strong>Distancia de Mahalanobis:</strong> Una medida de la distancia entre un punto y una distribución, útil para identificar valores atípicos en datos multivariantes.</li>
            </ul>
        </AccordionItem>

        <AccordionItem title="Proceso de Limpieza de Datos">
            <p>El proceso de limpieza de datos incluye varias etapas clave:</p>
            <ol className="list-decimal list-inside">
                <li><strong>Inspección inicial:</strong> Examinar los datos para identificar problemas comunes, como valores faltantes o errores de formato.</li>
                <li><strong>Corrección de errores:</strong> Aplicar técnicas para corregir errores detectados, como la imputación de valores faltantes o la eliminación de duplicados.</li>
                <li><strong>Normalización de datos:</strong> Asegurar que los datos sigan un formato y escala coherentes.</li>
                <li><strong>Detección de valores atípicos:</strong> Identificar y manejar valores que se desvían significativamente del resto.</li>
                <li><strong>Verificación final:</strong> Revisar los datos una vez más para asegurar que estén limpios y listos para su análisis o modelado.</li>
            </ol>
            <p>Es importante destacar que la <strong>compresión de datos no es una etapa típica</strong> en el proceso de limpieza de datos. Aunque la compresión puede ser útil para reducir el tamaño del almacenamiento, no es parte del proceso estándar de limpieza y preparación de datos.</p>
        </AccordionItem>
    </div>
</div>
    );
};

export default Theory;