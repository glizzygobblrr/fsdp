// CampaignScheduler.js
import React, { useState } from 'react';
import '../styles/campaignScheduler.css';

const CampaignScheduler = () => {
  const [schedule, setSchedule] = useState({
    frequency: 'Daily',
    tvId: '',
    campaignId: '',
    date: '2024-04-17',
    startTime: '08:00',
    endTime: '09:00',
    color: '#2C87F2'
  });

  const handleChange = (e) => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    });
  };

  // Sample data - replace with your actual data
  const tvIds = ['tv553711', 'tv655563', 'tv919587', 'tv408961','tv001','tv002','tv468873','tv933456'];
  const campaignIds = ['Campaign001', 'Campaign002'];

  return (
    <div className="scheduler-container">
      <div className="scheduler-header">
        <h2>📅 Create Schedule</h2>
        <button className="close-button">×</button>
      </div>

      <p className="scheduler-subtitle">Fill in the data below to add a schedule</p>

      <div className="frequency-row">
        <select 
          name="frequency"
          value={schedule.frequency}
          onChange={handleChange}
          className="frequency-select"
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        <div className="color-container">
          <input
            type="color"
            name="color"
            value={schedule.color}
            onChange={handleChange}
            className="color-input"
          />
          <span>100%</span>
        </div>
      </div>
     
      <div className="input-group">
        <label>TV & Campaign ID</label>
        <div className="id-inputs">
          <select
            name="tvId"
            value={schedule.tvId}
            onChange={handleChange}
            className="id-select"
          >
            <option value="">Select TV ID</option>
            {tvIds.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
          <select
            name="campaignId"
            value={schedule.campaignId}
            onChange={handleChange}
            className="id-select"
          >
            <option value="">Select Campaign ID</option>
            {campaignIds.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>Date & Time</label>
        <div className="datetime-container">
          <input
            type="date"
            name="date"
            value={schedule.date}
            onChange={handleChange}
            className="date-input"
          />
          <div className="time-inputs">
            <input
              type="time"
              name="startTime"
              value={schedule.startTime}
              onChange={handleChange}
              className="time-input"
            />
            <span>-</span>
            <input
              type="time"
              name="endTime"
              value={schedule.endTime}
              onChange={handleChange}
              className="time-input"
            />
          </div>
        </div>
      </div>

      <div className="progress-bar" style={{ backgroundColor: schedule.color }} />

      <div className="button-container">
        <button className="cancel-button">Cancel</button>
        <button className="continue-button" style={{ backgroundColor: schedule.color }}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default CampaignScheduler;