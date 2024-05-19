import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const skills = [
  { name: 'SQL (SQL Server, MySQL)', level: 90 },
  { name: 'Python (Pandas, NumPy, TensorFlow, Scikit-Learn)', level: 85 },
  { name: 'Microsoft Power BI', level: 80 },
  { name: 'Tableau', level: 75 },
  { name: 'Excel (VLookup, Conditional Formatting, Pivot Tables)', level: 70 },
  { name: 'Google Sheets, Google BigQuery', level: 65 },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <Container>
      <h2 className="section-title">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <div className="skill">
              <h4 className="skill-name">{skill.name}</h4>
              <ProgressBar
                now={skill.level}
                label={`${skill.level}%`}
                variant={getProgressBarVariant(skill.level)}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const getProgressBarVariant = (level) => {
  if (level >= 80) return 'success';
  if (level >= 60) return 'warning';
  return 'danger';
};

export default Skills;
