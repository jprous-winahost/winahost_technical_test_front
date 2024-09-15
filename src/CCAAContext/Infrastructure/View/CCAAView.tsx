import React, { useState, useEffect } from 'react';
import { CCAA } from '../../Domain/CCAA';
import { getAllCCAAFromJson } from '../../Application/UseCases/getAllCCAAUseCase';
import './CCAAView.css';

const CCAAView: React.FC = () => {
    const [ccaaList, setCCAAList] = useState<CCAA[]>([]);
    const [selectedCCAA, setSelectedCCAA] = useState<CCAA[]>([]);
    const [additionalSelectedCCAA, setAdditionalSelectedCCAA] = useState<CCAA[]>([]);
    
    useEffect(() => {
        const fetchCCAAData = async () => {
            const data: CCAA[] = getAllCCAAFromJson();
            setCCAAList(data);
        };
        fetchCCAAData();
    }, []);

    const handleCCAAClick = (ccaa: CCAA) => {
        if (selectedCCAA.some(c => c.code === ccaa.code)) {
            setSelectedCCAA(selectedCCAA.filter(c => c.code !== ccaa.code));
        } else {
            setSelectedCCAA([...selectedCCAA, ccaa]);
        }
    };

    const handleAdditionalSelect = (ccaa: CCAA) => {
        if (additionalSelectedCCAA.length >= 3 && !additionalSelectedCCAA.some(c => c.code === ccaa.code)) {
            alert('Solo puedes seleccionar un máximo de 3 comunidades');
            return;
        }

        if (additionalSelectedCCAA.some(c => c.code === ccaa.code)) {
            setAdditionalSelectedCCAA(additionalSelectedCCAA.filter(c => c.code !== ccaa.code));
        } else {
            setAdditionalSelectedCCAA([...additionalSelectedCCAA, ccaa]);
        }
    };

    return (
        <div className="ccaa-view">
            <div className="ccaa-buttons">
                {ccaaList.map(ccaa => (
                    <button
                        key={ccaa.code}
                        className={`ccaa-button ${selectedCCAA.some(c => c.code === ccaa.code) ? 'selected' : ''}`}
                        onClick={() => handleCCAAClick(ccaa)}
                    >
                        {ccaa.name}
                    </button>
                ))}
            </div>
            <div className="ccaa-list">
                <h3>Lista Seleccionada:</h3>
                <ul>
                    {selectedCCAA.map(ccaa => (
                        <li key={ccaa.code}>{ccaa.name}</li>
                    ))}
                </ul>
            </div>
            <div className="additional-selection">
                <h3>Selecciona hasta 3 adicionales:</h3>
                <div className="ccaa-buttons">
                    {ccaaList.map(ccaa => (
                        <button
                            key={ccaa.code}
                            className={`ccaa-button ${additionalSelectedCCAA.some(c => c.code === ccaa.code) ? 'additional-selected' : ''}`}
                            onClick={() => handleAdditionalSelect(ccaa)}
                        >
                            {ccaa.name}
                        </button>
                    ))}
                </div>
                <div className="ccaa-list">
                    <h4>Lista Adicional:</h4>
                    <ul>
                        {additionalSelectedCCAA.map(ccaa => (
                            <li key={ccaa.code}>{ccaa.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CCAAView;