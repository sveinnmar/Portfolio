import React from 'react'
import "./SkillChart.css";

function SkillChart() {
    return (
        <div class="skill-bars">
            <div class="bar">
                <div class="info">
                    <span>HTML</span>
                </div>
                <div class="progress-line html">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>CSS</span>
                </div>
                <div class="progress-line css">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>ReactJS</span>
                </div>
                <div class="progress-line reactjs">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>JavaScript</span>
                </div>
                <div class="progress-line javascript">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>Python</span>
                </div>
                <div class="progress-line python">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                  <span>Java</span>
                </div>
                <div class="progress-line java">
                 <span></span>
              </div>
           </div>
        </div>
    )
}

export default SkillChart
