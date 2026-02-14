function startAnalysis() {
  const log = document.getElementById("agents");

  log.innerHTML = "Initializing AI council...";

  setTimeout(() => {
    log.innerHTML += "<br>Personality Agent: Scanning communication tone...";
  }, 500);

  setTimeout(() => {
    log.innerHTML += "<br>Personality Agent: Fast decision maker detected";
  }, 1200);

  setTimeout(() => {
    log.innerHTML += "<br>Emotion Agent: Innovation-driven mindset";
  }, 1900);

  setTimeout(() => {
    log.innerHTML += "<br>Strategy Agent: Recommending short direct outreach";
  }, 2600);

  setTimeout(() => {
    log.innerHTML += "<br>Message Agent: Generating multi-channel messages";
  }, 3200);

  setTimeout(() => {
    generateMessages();
    speakResult();
  }, 4000);
}

function generateMessages() {
  document.getElementById("email").innerText =
`Subject: Quick idea to boost your team’s speed

Hi there,

I noticed your focus on fast execution and innovation. Our team built an AI automation system that helps teams eliminate repetitive tasks and move faster.

Companies using it are saving up to 6–8 hours per week.

Would you be open to a quick 10-minute demo?

Best,
Team Skynex`;

  document.getElementById("wa").innerText =
`Hey! Saw your profile and your fast execution mindset really stood out.

We built an AI system that saves teams hours every week by automating repetitive work.

Would love to show you a quick demo if you're interested.`;

  document.getElementById("li").innerText =
`Hi, I came across your profile and noticed your focus on rapid execution.

We’ve built a solution that helps teams automate repetitive tasks and move faster.

Would you be open to a short demo?`;

  document.getElementById("reply").innerText = "82%";
  document.getElementById("tone").innerText = "High";
  document.getElementById("strategy").innerText = "Short Direct";

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
  box.innerHTML = "Connecting to automation engine...";

  setTimeout(() => {
    box.innerHTML += "<br>Automation Agent: Lead stored in CRM";
  }, 700);

  setTimeout(() => {
    box.innerHTML += "<br>Automation Agent: Message queued";
  }, 1400);

  setTimeout(() => {
    box.innerHTML += "<br>Automation Agent: Email scheduled";
  }, 2100);

  setTimeout(() => {
    box.innerHTML += "<br>Automation Agent: Campaign ready";
  }, 2800);
}

function speakResult() {
  const msg = new SpeechSynthesisUtterance(
    "Analysis complete. Target is a fast decision maker. Strategy: short direct outreach."
  );
  speechSynthesis.speak(msg);
}
