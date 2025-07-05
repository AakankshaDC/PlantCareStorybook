
import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { plantData } from "./plantData.js";

export default function PlantCareStorybook() {
  const [index, setIndex] = useState(-1);

  const renderIndexPage = () => (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>📚 Plant Index</h1>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#2b6cb0' }}>
        {plantData.map((plant, i) => (
          <li
            key={plant.name}
            style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
            onClick={() => setIndex(i)}
          >
            {plant.name}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderPlantPage = () => {
    const currentPlant = plantData[index];
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        <Card>
          <CardContent>
            <img
              src={currentPlant.image}
              alt={currentPlant.name}
              style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{currentPlant.name}</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li><strong>Light:</strong> {currentPlant.light}</li>
              <li><strong>Water:</strong> {currentPlant.water}</li>
              <li><strong>Soil:</strong> {currentPlant.soil}</li>
              <li><strong>Fertilizer:</strong> {currentPlant.fertilizer}</li>
              <li><strong>Notes:</strong> {currentPlant.notes}</li>
            </ul>
          </CardContent>
        </Card>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button onClick={() => setIndex(index - 1)} disabled={index === -1}>
            ⬅️ Back
          </Button>
          <Button onClick={() => setIndex(index + 1 >= plantData.length ? -1 : index + 1)}>
            {index + 1 >= plantData.length ? "📚 Back to Index" : "Next ➡️"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      {index === -1 ? renderIndexPage() : renderPlantPage()}
    </div>
  );
}
