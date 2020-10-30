import React from "react"

function OtherURLItem({ url, icon, title }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
      <i className={`fab ${icon}`}></i> {title}
    </a>
  )
}

export default function TimelineItem({
  title,
  icon,
  description,
  toolsSkills,
  githubURL,
  otherURL,
  isRight,
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <i className={`fas ${icon} fa-align`}></i>
      </div>
      <div className={`timeline-content ${isRight ? "right" : null}`}>
        <h2>{title}</h2>
        <p>
          <br /> {description}
          <br />
          <br /> <b>Tools & Skills Used:</b> {toolsSkills}
        </p>
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <i className="fab fa-github"></i> Code & Write-up
        </a>
        {otherURL
          ? otherURL.map(data => {
              return (
                <OtherURLItem
                  key={data.title}
                  title={data.title}
                  url={data.url}
                  icon={data.icon}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}
