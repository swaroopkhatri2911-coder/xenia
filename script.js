function startAnalysis() {
  const url = document.getElementById("url").value;
  const log = document.getElementById("agents");

  // Extract name from URL
  let name = "there";
  if (url.includes("/in/")) {
    const parts = url.split("/in/")[1].split("/")[0];
    name = parts.split("-")[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  // Random personality logic
  const personalities = [
    { type: "Fast decision maker", tone: "Short Direct", reply: "82%" },
    { type: "Analytical thinker", tone: "Technical", reply: "74%" },
    { type: "Relationship-driven", tone: "Emotional", reply: "68%" }
  ];

  const selected = personalities[Math.floor(Math.random() * personalities.length)];

  log.innerHTML = `
  Personality Agent: Scanning communication tone...<br>
  Personality Agent: ${selected.type}<br>
  Emotion Agent: Growth and innovation focused<br>
  Strategy Agent: ${selected.tone} outreach selected<br>
  Message Agent: Generating multi-channel messages
  `;

  generateMessages(name, selected);
}

function generateMessages(name, profile) {

  document.getElementById("email").innerText =
`Subject: Quick idea for your workflow

Hi ${name},

I was going through your profile and noticed your ${profile.type.toLowerCase()} style of working.

We recently built an AI system that helps teams eliminate repetitive tasks and move faster without increasing workload.

Teams similar to yours are saving 6–8 hours every week using it.

Would you be open to a quick 10-minute demo sometime this week?

Best regards,  
Team Skynex`;

  document.getElementById("wa").innerText =
`Hey ${name}, I came across your profile and noticed your ${profile.type.toLowerCase()} approach.

We built an AI system that helps teams automate repetitive tasks and move faster.

Would love to show you a quick demo if you're interested.`;

  document.getElementById("li").innerText =
`Hi ${name},

I saw your profile and your ${profile.type.toLowerCase()} mindset stood out.

We’ve built an AI solution that helps teams automate repetitive workflows and improve speed.

Would you be open to a short demo?`;

  document.getElementById("reply").innerText = profile.reply;
  document.getElementById("tone").innerText = "High";
  document.getElementById("strategy").innerText = profile.tone;

  showTab("email");
}

function showTab(tab) {
  document.getElementById("email").style.display = "none";
  document.getElementById("wa").style.display = "none";
  document.getElementById("li").style.display = "none";
  document.getElementById(tab).style.display = "block";
}

function automation() {
  const box = document.getElementById("automation");
  box.innerHTML = `
  Automation Agent:
  - Lead stored in CRM
  - Message queued
  - Email scheduled
  - Campaign ready
  `;
}
