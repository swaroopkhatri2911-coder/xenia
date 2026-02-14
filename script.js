function startAnalysis() {
  const url = document.getElementById("url").value;
  const bio = document.getElementById("bio").value.toLowerCase();
  const log = document.getElementById("agents");

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

  // Personality logic
  const personalities = [
    { type: "Fast decision maker", tone: "Short Direct", reply: "82%" },
    { type: "Analytical thinker", tone: "Technical", reply: "74%" },
    { type: "Relationship-driven leader", tone: "Emotional", reply: "68%" }
  ];

  const selected = personalities[Math.floor(Math.random() * personalities.length)];

  log.innerHTML = `
  Personality Agent: ${selected.type}<br>
  Bio Analysis Agent: Detected ${profession}<br>
  Strategy Agent: ${selected.tone} outreach selected<br>
  Message Agent: Generating humanized messages
  `;

  generateMessages(name, profession, selected);
  speakResult(name, profession, selected);
}

function generateMessages(name, profession, profile) {

  // 4 different email styles
  const emails = [

`Subject: Quick thought after seeing your profile

Hi ${name},

I was going through your profile and noticed your work as a ${profession}. It genuinely stood out because people in this space usually care deeply about speed, clarity, and execution.

We’ve been building an AI system that quietly removes repetitive work from teams, so people like you can focus on actual problem solving instead of routine tasks.

A few teams in similar roles are already saving hours every week.

If this sounds even slightly relevant, I’d be happy to show you a quick demo.

Warm regards,  
Team Skynex`,

`Subject: Idea that might fit your workflow

Hi ${name},

Your profile suggests you spend most of your time working as a ${profession}, and I imagine a good chunk of that time goes into repetitive processes.

We recently built a lightweight AI system designed exactly for professionals like you. It automates routine tasks in the background so your focus stays on creative or technical work.

Most teams start noticing a difference within the first week.

Would you be open to a short walkthrough sometime this week?

Best,  
Team Skynex`,

`Subject: Thought this might interest you

Hi ${name},

I came across your profile and your experience as a ${profession} caught my attention.

We’re building a system that helps people in similar roles automate repetitive parts of their workflow without changing the tools they already use.

It’s simple, fast to set up, and designed for teams that value efficiency.

If you’d like, I can share a quick demo and you can decide if it’s useful.

Regards,  
Team Skynex`,

`Subject: Small idea for your day-to-day workflow

Hi ${name},

After reading your profile, it looks like your role as a ${profession} probably involves a lot of repeated tasks alongside your core work.

We’ve built an AI system that handles those repetitive parts quietly in the background, so your team can move faster without extra effort.

It’s not a big, complicated platform—just a focused tool that saves time where it matters.

Happy to show you a quick demo if you’re curious.

Best wishes,  
Team Skynex`
  ];

  const email = emails[Math.floor(Math.random() * emails.length)];

  document.getElementById("email").innerText = email;

  document.getElementById("wa").innerText =
`Hey ${name}, I noticed your work as a ${profession}. 

We built a simple AI system that removes repetitive tasks from your workflow so you can focus on the important stuff.

Would you be open to a quick demo?`;

  document.getElementById("li").innerText =
`Hi ${name},

I came across your profile and noticed your experience as a ${profession}. We’ve built an AI system that helps professionals like you automate repetitive workflows and save time.

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

function speakResult(name, profession, profile) {
  const msg = new SpeechSynthesisUtterance(
    `Analysis complete. ${name} is a ${profession}. Recommended strategy: ${profile.tone}.`
  );
  speechSynthesis.speak(msg);
}
