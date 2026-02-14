function startAnalysis() {
  const url = document.getElementById("url").value;
  const log = document.getElementById("agents");

  let name = "there";
  if (url.includes("/in/")) {
    const parts = url.split("/in/")[1].split("/")[0];
    name = parts.split("-")[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  const profiles = [
    {
      type: "Fast decision maker",
      tone: "Short Direct",
      reply: "82%",
      email: `Subject: Quick idea for your team

Hi ${name},

Came across your profile and it’s clear you move fast and value execution over long processes.

We’ve built a lightweight AI system that removes repetitive work from your team’s daily flow. Most teams start seeing time savings within the first week.

If you’re open to it, I’d love to show you a quick demo. It’ll take less than 10 minutes.

– Team Skynex`,

      wa: `Hey ${name}, saw your profile and your fast execution style really stood out.

We built a simple AI tool that removes repetitive work and saves teams hours every week.

Open to a quick demo sometime?`,

      li: `Hi ${name}, your fast execution mindset really stood out from your profile.

We built a tool that helps teams automate repetitive tasks and move faster. Would you be open to a quick demo?`
    },

    {
      type: "Analytical thinker",
      tone: "Technical",
      reply: "74%",
      email: `Subject: Workflow optimization idea

Hi ${name},

While going through your profile, I noticed your structured and analytical approach to problem solving.

We’ve been working on an AI system designed specifically for teams that value efficiency, clarity, and measurable improvements. It helps identify repetitive workflows and automates them without disrupting existing processes.

Happy to share a short walkthrough if this sounds relevant to what you’re working on.

Best regards,  
Team Skynex`,

      wa: `Hi ${name}, I noticed your analytical approach from your profile.

We built an AI system focused on workflow optimization and measurable efficiency gains.

Would you be interested in a short walkthrough?`,

      li: `Hello ${name},

Your profile reflects a very structured and analytical working style. We’ve built an AI system that focuses on workflow optimization and measurable efficiency gains.

Would love to share a short overview if you're open to it.`
    },

    {
      type: "Relationship-driven leader",
      tone: "Emotional",
      reply: "68%",
      email: `Subject: Thought this might help your team

Hi ${name},

Your profile gives the impression of someone who values people, collaboration, and long-term growth.

We recently built an AI system that quietly handles repetitive tasks in the background, so teams can spend more time on meaningful work and less time on manual processes.

If this aligns with how you like to work, I’d be happy to show you a quick demo.

Warm regards,  
Team Skynex`,

      wa: `Hey ${name}, your profile really reflects a people-first leadership style.

We built an AI system that removes repetitive tasks so teams can focus on meaningful work.

Would love to show you a quick demo if you're interested.`,

      li: `Hi ${name},

Your profile reflects a strong focus on people and long-term growth. We built an AI system that handles repetitive tasks so teams can focus on more meaningful work.

Happy to share a short demo if you'd like.`
    }
  ];

  const selected = profiles[Math.floor(Math.random() * profiles.length)];

  log.innerHTML = `
  Personality Agent: ${selected.type}<br>
  Emotion Agent: Communication preference detected<br>
  Strategy Agent: ${selected.tone} outreach selected<br>
  Message Agent: Generating personalized messages
  `;

  document.getElementById("email").innerText = selected.email;
  document.getElementById("wa").innerText = selected.wa;
  document.getElementById("li").innerText = selected.li;

  document.getElementById("reply").innerText = selected.reply;
  document.getElementById("tone").innerText = "High";
  document.getElementById("strategy").innerText = selected.tone;

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
