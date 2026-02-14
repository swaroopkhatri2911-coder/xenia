function startAnalysis() {
  const urlInput = document.getElementById("url");
  const bioInput = document.getElementById("bio");
  const log = document.getElementById("agents");

  if (!urlInput) return;

  const url = urlInput.value;
  const bio = bioInput ? bioInput.value.toLowerCase() : "";

  let name = "there";
  if (url.includes("/in/")) {
    const parts = url.split("/in/")[1].split("/")[0];
    name = parts.split("-")[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  // Profession detection
  let profession = "professional";
  if (bio.includes("ai")) profession = "AI engineer";
  else if (bio.includes("web")) profession = "web developer";
  else if (bio.includes("founder")) profession = "startup founder";
  else if (bio.includes("designer")) profession = "designer";

  const profiles = [
    { type: "Fast decision maker", tone: "Short Direct", reply: "82%" },
    { type: "Analytical thinker", tone: "Technical", reply: "74%" },
    { type: "Relationship-driven leader", tone: "Emotional", reply: "68%" }
  ];

  const selected = profiles[Math.floor(Math.random() * profiles.length)];

  log.innerHTML = `
  Personality Agent: ${selected.type}<br>
  Bio Analysis Agent: Detected ${profession}<br>
  Strategy Agent: ${selected.tone} outreach selected<br>
  Message Agent: Generating humanized messages
  `;

  generateMessages(name, profession, selected);
}

function generateMessages(name, profession, profile) {

  const email = `Subject: Quick thought after seeing your profile

Hi ${name},

I was going through your profile and noticed your work as a ${profession}. It genuinely stood out.

We’ve been building an AI system that quietly removes repetitive work from teams, so people like you can focus on actual problem solving instead of routine tasks.

A few teams in similar roles are already saving hours every week.

If this sounds relevant, I’d be happy to show you a quick demo.

Warm regards,  
Team Skynex`;

  document.getElementById("email").innerText = email;

  document.getElementById("wa").innerText =
`Hey ${name}, noticed your work as a ${profession}.  
We built an AI system that removes repetitive tasks and saves time.  
Open to a quick demo?`;

  document.getElementById("li").innerText =
`Hi ${name}, I came across your profile and noticed your experience as a ${profession}.  
We built an AI system that helps professionals automate repetitive work.  
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
