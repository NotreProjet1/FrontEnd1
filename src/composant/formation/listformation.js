import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LessonList = ({ onSelectLesson }) => {
  const [levels, setLevels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Effectuez une requête API pour obtenir les niveaux disponibles
    axios.get('http://localhost:3000/levels')
      .then(response => setLevels(response.data))
      .catch(error => console.error(error));

    // Effectuez une requête API pour obtenir les catégories disponibles
    axios.get('http://localhost:3000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));

    // Effectuez une requête API pour obtenir les leçons (en fonction des filtres)
    axios.get(`http://localhost:3000/lessons?level=${selectedLevel}&category=${selectedCategory}`)
      .then(response => setLessons(response.data))
      .catch(error => console.error(error));
  }, [selectedLevel, selectedCategory]);

  return (
    <div>
      <h2>Filtrer les leçons</h2>

      {/* Filtrer par niveau */}
      <label>Niveau:
        <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
          <option value="">Tous les niveaux</option>
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </label>

      {/* Filtrer par catégorie */}
      <label>Catégorie:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Toutes les catégories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>

      {/* Liste des leçons */}
      <ul>
        {lessons.map(lesson => (
          <li key={lesson._id} onClick={() => onSelectLesson(lesson)}>
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
