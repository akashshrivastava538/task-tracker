import styled from 'styled-components';

// General App Container with Background Image
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6') no-repeat center center fixed;
  background-size: cover;
  font-family: Arial, sans-serif;
  color: #333;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Card for Forms
export const Card = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

// Form Heading
export const FormHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Input Styling
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

// Text Area Styling
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px; /* Adjust as necessary */
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical; /* Allows users to resize vertically */
  overflow: auto; /* Adds scroll if the content exceeds the height */
  max-width: 100%; /* Prevents overflow */

  @media (max-width: 768px) {
    height: 80px; /* Adjust height for mobile */
    padding: 8px;
    font-size: 14px;
  }
`;

// Select Styling
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f6f6f6;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

// Button Styling
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

// Sorting Container
export const SortingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center; // Center on mobile
    flex-direction: column; // Stack vertically
  }
`;

export const SortingSelect = styled.select`
  padding: 8px;
  margin-left: 10px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: #f6f6f6;
  color: #333;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px; // Space between items when stacked
    width: 100%; // Full width on mobile
  }
`;

// Task Container
export const TaskContainer = styled.div`
  width: 90%;
  max-width: 900px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%; // Full width on mobile
    padding: 15px;
  }
`;

// Task Table Styling
export const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f8f9fa;
`;

// Table Header
export const TableHeader = styled.th`
  padding: 15px;
  font-size: 18px;
  color: #ffffff;
  background-color: #007bff;
  border: 1px solid #dddddd;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px; // Smaller font on mobile
    padding: 10px; // Adjust padding for mobile
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #e9f3ff;
  }
`;

export const TableData = styled.td`
  padding: 12px;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px; // Smaller font on mobile
    padding: 10px; // Adjust padding for mobile
  }
`;

// Timer Button Styling
export const TimerButton = styled.button`
  padding: 5px 10px;
  background-color: #ff9800;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #fb8c00;
  }

  @media (max-width: 768px) {
    padding: 4px 8px; // Smaller padding on mobile
    font-size: 12px; // Smaller font on mobile
  }
`;

// Timer Display Styling
export const Timer = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ff5722;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 12px; // Smaller font on mobile
  }
`;

// Color Coding for Priority Levels
export const PriorityLabel = styled.span`
  font-weight: bold;
  color: ${(props) =>
    props.priority === 'High'
      ? '#e74c3c'
      : props.priority === 'Medium'
      ? '#f39c12'
      : '#2ecc71'};
`;

// Label Styling
export const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px; // Smaller font on mobile
  }
`;













