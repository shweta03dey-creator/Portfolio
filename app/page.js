const experience = [
  { org: "IIT Guwahati, TIDF", role: "Research Intern", when: "Jun – Jul 2025", where: "Guwahati, Assam",
    points: ["Ran SCAPS-1D simulations on 2D perovskite solar cells and evaluated VOC, JSC, FF and efficiency.",
      "Published in Springer Nature (SN Applied Sciences)."], link: "#" },
  { org: "Assam Don Bosco University (NIELIT)", role: "VLSI Design Intern", when: "Jun – Jul 2024", where: "Guwahati, Assam",
    points: ["Completed a 100-hour VLSI internship using Cadence Virtuoso.", "Designed and simulated a Traffic Light Controller in VHDL."] },
  { org: "TechBooster", role: "Robotics & IoT Intern", when: "Jun – Jul 2023", where: "Guwahati, Assam",
    points: ["Designed 3+ IoT prototypes, including voice-activated lighting.", "Documented system requirements and user flows for each prototype."] },
  { org: "Sliced Pixel Studio", role: "Graphic Design Intern", when: "Jun – Jul 2023", where: "Guwahati, Assam",
    points: ["Produced banners and social media creatives in Photoshop, Illustrator and Figma."] },
];

// Optional per project: fit: "cover" and pos: "center top" to fill the box instead of showing the whole image
const projects = [
  { name: "Lung Anomaly Detection", kind: "lung", image: "/projects/lungs.jpeg", tag: "Final year project", stack: "Python, TensorFlow/Keras, CNN",
    text: "Two-stage CNN pipeline that classifies chest X-rays and CT scans into Pneumonia, TB and Pleural Effusion, with CLAHE preprocessing, Grad-CAM visualisation and per-class accuracy reports." },
  { name: "Obstacle Avoiding Car", kind: "car", image: "/projects/obstacle.jpeg", tag: "2025 – 2026", stack: "Arduino, Ultrasonic, IR sensors",
    text: "Two versions, one analog IR-based and one Arduino ultrasonic, built through iterative hardware design for real-time autonomous navigation." },
  { name: "Smart Irrigation System", kind: "irrigation", image: "/projects/irri.jpeg", tag: "2025", stack: "Arduino, Processing IDE, Sensors",
    text: "IoT irrigation system with real-time sensor monitoring and intelligent pump control, plus a GUI dashboard for live data and alerts." },
  { name: "Bynary Creative Website", kind: "web", image: "/projects/bynary.png", tag: "2025", stack: "HTML5, CSS3, Figma",
    text: "Responsive multi-page agency website built from Figma mockups with attention to visual hierarchy and cross-device behaviour." },
];

const skills = [
  ["Programming", "Python, VHDL, MATLAB, C, HTML5, CSS3, JavaScript"],
  ["EDA & Hardware", "Cadence Virtuoso, Xilinx ISE, LabView, Arduino IDE, SCAPS-1D"],
  ["ML & Data", "TensorFlow/Keras, CNN, Data Analysis, CLAHE, Grad-CAM"],
  ["Design", "Figma, Illustrator, Photoshop, Canva"],
  ["Core", "VLSI Design, CMOS, IoT, Signal Processing, Microcontrollers, System Design"],
  ["Other", "Git, GitHub, UI/UX, Content Writing, Leadership, Public Speaking"],
];

const S = { fill: "none", stroke: "#111", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" };
const B = "#2F5BEA";

function Thumb({ kind }) {
  return (
    <svg className="thumb-svg" viewBox="0 0 400 200" aria-hidden="true">
      {kind === "lung" && (<g {...S}>
        <path d="M150 50 C100 60 70 130 85 160 C100 175 140 165 160 140 Z" fill={B} fillOpacity=".25" />
        <path d="M250 50 C300 60 330 130 315 160 C300 175 260 165 240 140 Z" fill={B} fillOpacity=".25" />
        <path d="M200 30 V110 M200 110 L160 140 M200 110 L240 140" />
        <circle cx="120" cy="115" r="16" fill={B} stroke="none" opacity=".7" />
        <path d="M30 30 h20 M30 30 v20 M370 30 h-20 M370 30 v20 M30 170 h20 M30 170 v-20 M370 170 h-20 M370 170 v-20" />
      </g>)}
      {kind === "car" && (<g {...S}>
        <rect x="110" y="85" width="180" height="50" rx="8" fill="#fff" />
        <rect x="150" y="62" width="90" height="26" rx="6" fill={B} fillOpacity=".25" />
        <circle cx="150" cy="140" r="20" fill="#fff" /><circle cx="250" cy="140" r="20" fill="#fff" />
        <rect x="290" y="95" width="18" height="30" fill={B} />
        <path d="M325 90 q18 20 0 40 M345 80 q28 30 0 60 M365 70 q38 40 0 80" stroke={B} />
        <path d="M30 165 H370" strokeDasharray="2 10" />
      </g>)}
      {kind === "irrigation" && (<g {...S}>
        <path d="M80 40 C80 40 55 80 55 95 a25 25 0 0 0 50 0 C105 80 80 40 80 40Z" fill={B} fillOpacity=".4" />
        <path d="M105 130 H300 V100" /><rect x="285" y="60" width="30" height="40" fill="#fff" />
        <path d="M120 130 v25 M180 130 v25 M240 130 v25" />
        <rect x="320" y="110" width="50" height="60" fill="#fff" />
        <path d="M332 160 v-18 M345 160 v-30 M358 160 v-22" stroke={B} strokeWidth="6" />
      </g>)}
      {kind === "web" && (<g {...S}>
        <rect x="60" y="30" width="280" height="140" rx="8" fill="#fff" />
        <path d="M60 58 H340" /><circle cx="78" cy="44" r="4" fill="#111" /><circle cx="93" cy="44" r="4" fill={B} />
        <rect x="80" y="75" width="120" height="14" fill={B} stroke="none" />
        <path d="M80 105 H190 M80 120 H170" />
        <rect x="225" y="75" width="95" height="75" fill={B} fillOpacity=".25" />
      </g>)}
    </svg>
  );
}

function Traces() {
  return (
    <svg className="traces" viewBox="0 0 600 400" aria-hidden="true">
      <g className="trace-group">
        <path pathLength="1" d="M0 80 H140 L180 120 H330 L370 80 H600" />
        <path pathLength="1" d="M0 200 H90 L130 240 H260 L300 200 H420 L460 160 H600" />
        <path pathLength="1" d="M0 320 H200 L240 280 H380 L420 320 H600" />
        <path pathLength="1" d="M300 0 V60 L330 90 M300 400 V340 L270 310" />
      </g>
      <g className="pads">
        {[[140,80],[330,120],[370,80],[90,200],[260,240],[420,200],[460,160],[200,320],[380,280],[330,90],[270,310]].map(([x,y]) => (
          <circle key={x+"-"+y} cx={x} cy={y} r="6" />
        ))}
      </g>
      <rect className="chip" x="215" y="140" width="170" height="110" rx="6" />
      <text x="300" y="200" textAnchor="middle" className="chip-text">SD-ECE</text>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">Shweta Dey</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <Traces />
          <div className="hero-text">
            <span className="led" aria-hidden="true" />
            <p className="status">Open to embedded, VLSI and hardware roles</p>
            <h1>Shweta Dey</h1>
            <p className="lead">
              Electronics and Communication Engineer who designs chips, builds embedded systems and trains deep learning models.
              Published in Springer Nature through research at IIT Guwahati.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">See projects</a>
              <a className="btn" href="mailto:shweta03dey@gmail.com">Email me</a>
            </div>
          </div>
          <div className="frame">
            <div className="photo" role="img" aria-label="Photo of Shweta Dey">
              <span className="scan" aria-hidden="true" />
              <svg className="wave" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 20 Q25 0 50 20 T100 20 T150 20 T200 20 T250 20 T300 20 T350 20 T400 20" />
              </svg>
            </div>
            <span className="tag t1">VLSI</span>
            <span className="tag t2">IoT</span>
            <span className="tag t3">Embedded</span>
            <span className="tag t4">Deep learning</span>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="rail">
            {experience.map((e) => (
              <article className="entry" key={e.org}>
                <span className="via" aria-hidden="true" />
                <div className="entry-head">
                  <h3>{e.org}</h3>
                  <span className="when">{e.when} · {e.where}</span>
                </div>
                <p className="role">{e.role}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                {e.link && <a className="link" href={e.link}>View publication</a>}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="board" key={p.name}>
                <div className="thumb">
                  {p.image ? (
                    <>
                      <img className="bg" src={p.image} alt="" aria-hidden="true" />
                      <img
                        className="fg"
                        src={p.image}
                        alt={p.name}
                        style={{ objectFit: p.fit || "contain", objectPosition: p.pos || "center" }}
                      />
                    </>
                  ) : (
                    <Thumb kind={p.kind} />
                  )}
                </div>
                <div className="board-top"><span>{p.tag}</span></div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <p className="stack">{p.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map(([k, v]) => (
              <div className="skill" key={k}>
                <h3>{k}</h3>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section two">
          <div>
            <h2>Leadership</h2>
            <p className="strong">Core Team Member, GUenark 2026</p>
            <p>Institution's Innovation Council (IIC), GUIST. Led planning and execution of the institute's annual tech fest and coordinated schedules, logistics and stakeholders across departments.</p>
          </div>
          <div>
            <h2>Education</h2>
            <p className="strong">B.Tech, Electronics & Communication Engg.</p>
            <p>Gauhati University Institute of Science and Technology, 2022 – present. CGPA 9.21/10.</p>
            <p className="strong">Higher Secondary (Science)</p>
            <p>Vivekananda Kendra Vidyalaya (NEC), 2019 – 2021. 82%.</p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Margherita, Assam, India</p>
          <div className="actions">
            <a className="btn primary" href="mailto:shweta03dey@gmail.com">shweta03dey@gmail.com</a>
            <a className="btn" href="tel:+918011642025">+91 8011642025</a>
            <a className="btn" href="https://github.com/Shwetadey5">GitHub</a>
            <a className="btn" href="https://linkedin.com/in/Shwetadey5">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="foot">© 2026 Shweta Dey</footer>
    </>
  );
}