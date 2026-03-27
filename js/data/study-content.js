// Study content extracted from FAA materials
// Ordered by ACS exam weight (highest ROI first)
// pdfPage = page number in remote_pilot_study_guide.pdf (accounting for front matter offset)
//
// ACS Weight Mapping:
//   UA.I  Regulations .............. 48%  (~29 questions)
//   UA.V  Operations ............... 25%  (~15 questions)
//   UA.II Airspace & Requirements .. 20%  (~12 questions)
//   UA.III Weather .................. 5%  (~3 questions)
//   UA.IV Loading & Performance ..... 2%  (~1 question)

const STUDY_TOPICS = [
  // =============================================
  // TIER 1 — REGULATIONS (ACS UA.I) — 48% of exam
  // Study these FIRST. Nearly half the test.
  // =============================================
  {
    id: "regulations",
    title: "Part 107 Regulations",
    pdfPage: 11,
    acs: "UA.I",
    weight: 48,
    tier: 1,
    tierLabel: "CRITICAL",
    studyTime: "Spend the most time here. This is ~29 of 60 questions.",
    content: `
      <h2>Part 107 Regulations</h2>
      <div class="study-callout"><strong>ACS Area UA.I &mdash; 48% of the exam (~29 questions).</strong> This is by far the highest-yield topic. Know the RPIC's responsibilities, operating limits, night rules, Remote ID, operations over people, and what can/cannot be waived.</div>
      <div class="study-callout" style="background:var(--red-pale);border-left-color:var(--red)"><strong>&#9888; Blueprint update:</strong> In August 2025, the FAA announced the old UAG test blueprint would become obsolete on September 29, 2025. The subject matter didn't change, but the weighting did. Older prep materials gave Weather 11-16% and Loading 7-11%. The current UAG bulletin sets Regulations at <strong>48%</strong> — nearly half the test. If your study materials treat all areas equally, they're using the old blueprint. <strong>Regulations + Airspace = ~41 of 60 scored questions.</strong> That's where the exam is won or lost.</div>

      <h3>The Remote Pilot in Command (RPIC)</h3>
      <ul>
        <li>Must be designated before or during the flight</li>
        <li>Directly responsible for and <strong>final authority</strong> as to the operation</li>
        <li>Must ensure the flight poses no undue hazard</li>
        <li>Must ensure compliance with all applicable regulations</li>
        <li>Must be able to direct the aircraft or the person manipulating the controls</li>
      </ul>
      <p><strong>Exam trap:</strong> Wrong answers often shift responsibility to the owner, manufacturer, or visual observer. Responsibility almost always lands on the RPIC.</p>

      <h3>Certificate Requirements</h3>
      <table>
        <tr><th>Item</th><th>Requirement</th></tr>
        <tr><td>Minimum age</td><td>16 years old</td></tr>
        <tr><td>Language</td><td>Read, speak, write, and understand English</td></tr>
        <tr><td>Exam</td><td>Pass the UAG knowledge test (60 questions, 2 hours, 70% to pass)</td></tr>
        <tr><td>Recency</td><td>Complete recurrent training within previous 24 calendar months</td></tr>
        <tr><td>Registration</td><td>Register each drone individually in DroneZone</td></tr>
      </table>

      <h3>Key Operating Rules</h3>
      <table>
        <tr><th>Rule</th><th>Limit</th></tr>
        <tr><td>Max takeoff weight</td><td>55 pounds</td></tr>
        <tr><td>Max groundspeed</td><td>100 mph (87 knots)</td></tr>
        <tr><td>Max altitude</td><td>400 feet AGL</td></tr>
        <tr><td>Structure exception</td><td>400 ft above structure if within 400 ft laterally</td></tr>
        <tr><td>Min visibility</td><td>3 statute miles</td></tr>
        <tr><td>Cloud clearance</td><td>500 ft below, 2,000 ft horizontal</td></tr>
        <tr><td>Alcohol</td><td>8 hours bottle-to-throttle, 0.04 BAC limit</td></tr>
      </table>

      <h3>Operations You Cannot Do</h3>
      <ul>
        <li>Operate from a moving aircraft</li>
        <li>Operate more than one UA at the same time</li>
        <li>Fly so close to another aircraft as to create a collision hazard</li>
        <li>Carry hazardous materials</li>
        <li>Operate carelessly or recklessly</li>
        <li>Operate while impaired</li>
      </ul>

      <h3>Moving Vehicle Operations</h3>
      <p>Operating from a moving land or water vehicle is allowed <strong>only</strong> over a sparsely populated area and not while transporting another person's property for compensation.</p>

      <h3>Night Operations</h3>
      <ul>
        <li>No longer requires a waiver (updated rules)</li>
        <li>Aircraft must have anti-collision lighting visible for at least <strong>3 statute miles</strong></li>
        <li>RPIC may reduce light intensity for safety, but <strong>may not extinguish</strong> them</li>
        <li>Civil twilight operations also require anti-collision lights</li>
      </ul>

      <h3>Waiverable Rules</h3>
      <p>The FAA can waive: moving-vehicle operation, anti-collision light requirement, VLOS, visual observer, multiple aircraft, yielding right of way, operation over people, and controlled-airspace authorization.</p>
      <p><strong>Not waiverable:</strong> Hazardous material carriage.</p>
      <p>To request a waiver, submit via the FAA DroneZone portal. Waivers are operation-specific — they don't grant blanket permission. Each waiver spells out conditions, limitations, and duration. The FAA evaluates whether your proposed mitigations adequately address the safety risk of deviating from the rule. Processing can take 90+ days, so plan well ahead.</p>

      <h3>Right of Way</h3>
      <p>Small UAS must <strong>yield right of way to all aircraft and airborne vehicles</strong>. This is absolute — there is no situation where a drone has priority over a manned aircraft. If you see or hear a manned aircraft, the correct action is always to maneuver clear or land. This includes helicopters, hot-air balloons, gliders, and any other airborne vehicle.</p>

      <h3>Visual Line of Sight (VLOS)</h3>
      <p>The RPIC must be able to see the drone <strong>with unaided vision</strong> (corrective lenses are fine, but binoculars, FPV goggles alone, or monitors do not satisfy VLOS). You need to be able to see the aircraft's position, altitude, attitude, and direction of flight — and also scan for traffic and hazards. A visual observer (VO) can help expand awareness, but the RPIC still must maintain their own VLOS capability unless operating under a waiver.</p>

      <h3>Registration & Marking</h3>
      <p>Every drone that weighs more than <strong>0.55 lb (250g)</strong> must be registered with the FAA through DroneZone. You'll receive a unique registration number that must be displayed on the aircraft — either on the exterior surface or in a battery compartment accessible without tools. Registration is valid for 3 years and costs $5. Recreational flyers and Part 107 pilots use the same registration system but different registration types.</p>
    `
  },
  {
    id: "ops-over-people",
    title: "Operations Over People & Remote ID",
    pdfPage: null,
    acs: "UA.I",
    weight: 48,
    tier: 1,
    tierLabel: "CRITICAL",
    studyTime: "Part of the 48% Regulations block. Modern test questions heavily feature this area.",
    content: `
      <h2>Operations Over People & Remote ID</h2>
      <div class="study-callout"><strong>ACS Area UA.I &mdash; Part of the 48% Regulations block.</strong> This newer topic is explicitly listed as its own ACS task. The older FAA study guide does not cover it. Do not skip it.</div>

      <h3>Default Rule</h3>
      <p>You may <strong>not</strong> operate over a person unless that person is directly participating, under a covered structure, inside a stationary vehicle, or the operation qualifies under Subpart D.</p>

      <h3>Operations Over People Categories</h3>
      <table>
        <tr><th>Category</th><th>Key Requirements</th></tr>
        <tr><td><strong>1</strong></td><td>Aircraft weighs <strong>0.55 lb or less</strong>; no exposed rotating parts that lacerate</td></tr>
        <tr><td><strong>2</strong></td><td>Meets <strong>11 ft-lb</strong> kinetic energy injury threshold; must have FAA-accepted DoC</td></tr>
        <tr><td><strong>3</strong></td><td>Meets <strong>25 ft-lb</strong> kinetic energy threshold; DoC required; <strong>cannot</strong> fly over open-air assemblies</td></tr>
        <tr><td><strong>4</strong></td><td>Requires <strong>airworthiness certificate</strong> under Part 21</td></tr>
      </table>

      <h3>Declaration of Compliance (DoC)</h3>
      <ul>
        <li>A <strong>Means of Compliance (MoC)</strong> = method to show the aircraft meets injury-performance requirements</li>
        <li>A <strong>Declaration of Compliance (DoC)</strong> = submission accepted by FAA identifying qualifying aircraft</li>
        <li>The <strong>manufacturer/designer/modifier</strong> submits the DoC, not the pilot</li>
        <li>The pilot verifies the aircraft is on an FAA-accepted DoC and properly labeled</li>
      </ul>

      <h3>Remote Identification (Remote ID)</h3>
      <ul>
        <li>Most drones must broadcast identifying and location information during flight</li>
        <li><strong>Standard Remote ID:</strong> Built into the drone</li>
        <li><strong>Broadcast module:</strong> Add-on path for some aircraft</li>
        <li><strong>FRIA:</strong> FAA-Recognized Identification Area where drones without Remote ID can fly (must stay inside boundaries)</li>
        <li>If Remote ID <strong>stops broadcasting in flight: land as soon as practicable</strong></li>
      </ul>

      <h3>Operations Over Moving Vehicles</h3>
      <ul>
        <li>Must meet the applicable category rule</li>
        <li>For Categories 1-3: must be within a closed/restricted-access site with notice, or must not maintain sustained flight over moving vehicles</li>
      </ul>

      <h3>Deeper Dive: Understanding the Category System</h3>
      <p>The Operations Over People categories exist because the FAA needed a way to balance risk with utility. A tiny 0.5 lb drone falling on someone is very different from a 50 lb drone. The categories create a graduated framework:</p>
      <ul>
        <li><strong>Category 1</strong> is the simplest — if your drone is under 0.55 lb and has no exposed rotating parts that could lacerate skin, you can fly over people without any special paperwork. Think small consumer drones like a DJI Mini.</li>
        <li><strong>Categories 2 &amp; 3</strong> use kinetic energy thresholds (11 ft-lb and 25 ft-lb respectively) to set maximum injury potential on impact. The manufacturer must test and submit a Declaration of Compliance proving the aircraft meets these thresholds. Category 3 adds the restriction that you <strong>cannot</strong> fly over open-air assemblies (concerts, sporting events, etc.).</li>
        <li><strong>Category 4</strong> is for larger, more capable aircraft that have an FAA airworthiness certificate — similar to manned aircraft certification. This is rare in current Part 107 operations.</li>
      </ul>
      <p><strong>&#128680; MOST-MISSED QUESTION ON THE EXAM:</strong> FAA quarterly stats show that DoC-related questions (ACS code UA.I.E.K13) have been the <strong>single most frequently missed item</strong> across five consecutive quarters (2Q24 through 2Q25). This is a flashing red sign. Know: who submits the DoC (manufacturer, not pilot), what a Means of Compliance is, the Category 2 vs 3 kinetic energy thresholds (11 vs 25 ft-lb), exposed rotating parts for Category 1, and that Category 3 cannot fly over open-air assemblies. If you study one thing extra, make it this.</p>
    `
  },

  // =============================================
  // TIER 2 — OPERATIONS (ACS UA.V) — 25% of exam
  // Study these SECOND. A quarter of the test.
  // =============================================
  {
    id: "adm",
    title: "Decision-Making & Judgment (ADM)",
    pdfPage: 59,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block (~15 questions). ADM questions are common.",
    content: `
      <h2>Aeronautical Decision-Making (ADM) & Judgment</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> The exam is full of "pilot judgment" questions. The FAA treats this as operational knowledge, not just common sense.</div>

      <h3>Hazardous Attitudes & Antidotes</h3>
      <table>
        <tr><th>Attitude</th><th>Characteristic</th><th>Antidote</th></tr>
        <tr><td><strong>Anti-authority</strong></td><td>"Don't tell me"</td><td>Follow the rules</td></tr>
        <tr><td><strong>Impulsivity</strong></td><td>"Do it quickly"</td><td>Not so fast, think first</td></tr>
        <tr><td><strong>Invulnerability</strong></td><td>"It won't happen to me"</td><td>It could happen to me</td></tr>
        <tr><td><strong>Macho</strong></td><td>"I can do it" / taking risks to impress</td><td>Taking chances is foolish</td></tr>
        <tr><td><strong>Resignation</strong></td><td>"What's the use?"</td><td>I can make a difference</td></tr>
      </table>

      <h3>PAVE Risk Assessment</h3>
      <ul>
        <li><strong>P</strong> - Pilot (health, currency, experience)</li>
        <li><strong>A</strong> - Aircraft (condition, equipment, capability)</li>
        <li><strong>V</strong> - enVironment (weather, airspace, terrain)</li>
        <li><strong>E</strong> - External pressures (schedule, client expectations)</li>
      </ul>

      <h3>3P Decision Model</h3>
      <ul>
        <li><strong>Perceive</strong> - Identify the hazard</li>
        <li><strong>Process</strong> - Evaluate the risk</li>
        <li><strong>Perform</strong> - Take action to mitigate</li>
      </ul>

      <h3>Risk Management</h3>
      <ul>
        <li>The accident chain: break any link to prevent the accident</li>
        <li>To prevent the "final link," use <strong>Risk Management</strong></li>
        <li>Recognize hazardous attitudes and develop standard operating procedures that emphasize safety</li>
      </ul>

      <h3>External Pressure Traps</h3>
      <p>When a client says "fly first, ask questions later" &mdash; this represents <strong>Invulnerability</strong> or external pressure pushing toward <strong>Impulsivity</strong>. The station manager telling you to ignore safety = dangerous external pressure.</p>

      <h3>Deeper Dive: How ADM Shows Up on the Exam</h3>
      <p>ADM questions on the Part 107 exam are scenario-based. They describe a situation and ask what the pilot should do — or which hazardous attitude a pilot is exhibiting. Here's how to approach them:</p>
      <ul>
        <li><strong>Identify the attitude first.</strong> If a pilot says "Rules are for other people" = Anti-authority. "Let's just get this done" = Impulsivity. "I've done this a hundred times, nothing will go wrong" = Invulnerability. "Watch this!" = Macho. "There's nothing I can do about it" = Resignation.</li>
        <li><strong>Then apply the antidote.</strong> The FAA wants you to recognize the attitude AND know the corrective response. The antidote is always the opposite mindset.</li>
        <li><strong>PAVE is your pre-flight risk tool.</strong> Before every flight, mentally walk through Pilot, Aircraft, enVironment, External pressures. If any element has elevated risk, mitigate or cancel.</li>
        <li><strong>The accident chain concept is key.</strong> The FAA believes most accidents result from a chain of poor decisions, not a single catastrophic failure. Breaking any one link in the chain prevents the accident. This means even small corrective actions matter.</li>
      </ul>
      <p><strong>Common exam scenario:</strong> A news station manager pressures a drone pilot to fly in deteriorating weather to capture footage for a deadline. The correct answer involves recognizing external pressure, applying the PAVE checklist, and making the go/no-go decision independent of schedule pressure.</p>
    `
  },
  {
    id: "physiology",
    title: "Physiological Factors",
    pdfPage: 53,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block. IMSAFE, fatigue, alcohol, and night vision questions.",
    content: `
      <h2>Physiological Factors Affecting Pilot Performance</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> Know IMSAFE, alcohol rules, fatigue recognition, and night vision adaptation.</div>

      <h3>IMSAFE Checklist</h3>
      <table>
        <tr><th>Letter</th><th>Meaning</th></tr>
        <tr><td>I</td><td>Illness</td></tr>
        <tr><td>M</td><td>Medication</td></tr>
        <tr><td>S</td><td>Stress</td></tr>
        <tr><td>A</td><td>Alcohol</td></tr>
        <tr><td>F</td><td>Fatigue</td></tr>
        <tr><td>E</td><td>Emotion</td></tr>
      </table>

      <h3>Key Physiological Issues</h3>
      <ul>
        <li><strong>Hyperventilation:</strong> Excessive breathing lowers CO2; causes dizziness, tingling. Treatment: slow breathing.</li>
        <li><strong>Fatigue:</strong> Reduces attention, communication, coordination. Major accident factor. Can be recognized as being in an impaired state.</li>
        <li><strong>Dehydration:</strong> Causes fatigue, cramps, dizziness, weakened cognition</li>
        <li><strong>Alcohol:</strong> Even small amounts reduce judgment, reaction time, vision, coordination</li>
      </ul>

      <h3>Vision & Night Flight</h3>
      <ul>
        <li>After bright light exposure, eyes need approximately <strong>30 minutes</strong> to fully adapt to darkness</li>
        <li>Using a bright flashlight during preflight disrupts night adaptation</li>
        <li>Scanning technique: systematically focus on different sky segments for short intervals</li>
      </ul>

      <h3>Scanning Technique</h3>
      <p>Systematically focus on different segments of the sky for short intervals. Scan roughly 30-degree segments, pause 2-3 seconds, overlap by about 10 degrees. Do not fixate on one source.</p>

      <h3>Deeper Dive: Why Physiology Matters for Drone Pilots</h3>
      <p>You might think "I'm on the ground, why does fatigue or alcohol matter?" The FAA's position is clear: drone pilots are pilots, and impaired judgment affects decision-making whether you're in the cockpit or on the ground.</p>
      <ul>
        <li><strong>Fatigue is the #1 hidden risk.</strong> Unlike alcohol, there's no breathalyzer for fatigue. The FAA expects you to self-assess using IMSAFE before every flight. Fatigue reduces your ability to notice traffic, react to emergencies, and maintain situational awareness — all critical for safe drone operations.</li>
        <li><strong>The 8-hour / 0.04 BAC rule</strong> means you cannot act as RPIC within 8 hours of consuming any alcohol, and your blood alcohol content must be below 0.04% at flight time. This is stricter than driving (0.08%) because aviation demands higher cognitive performance. Note: the FAA can require testing if they have reason to believe you're impaired.</li>
        <li><strong>Night vision adaptation</strong> takes about 30 minutes and is easily destroyed by bright white light. If you need to check something during a night operation, use a dim red light to preserve adaptation. This matters because you must be able to see the drone and scan for traffic — anti-collision lights only help if your eyes are adapted to the dark.</li>
        <li><strong>Hyperventilation</strong> is often triggered by stress (like a flyaway or lost link). The symptoms (dizziness, tunnel vision, tingling) can make a bad situation worse. The fix is simple: slow your breathing rate and breathe into a bag if available.</li>
      </ul>
    `
  },
  {
    id: "crm",
    title: "Crew Resource Management",
    pdfPage: 45,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block. CRM integration and visual observer roles.",
    content: `
      <h2>Crew Resource Management (CRM)</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> CRM questions test whether you understand team communication and resource use.</div>

      <h3>What is CRM?</h3>
      <p>Crew Resource Management is the effective use of all available resources (human, hardware, and information) to achieve safe and efficient flight operations.</p>

      <h3>CRM in Drone Operations</h3>
      <ul>
        <li>CRM must be integrated into <strong>all phases of the operation</strong> (not just flight)</li>
        <li>Brief the team and define roles clearly</li>
        <li>Ensure communication is clear between RPIC, visual observer, and other crew</li>
        <li>Use all available information sources</li>
      </ul>

      <h3>Visual Observer</h3>
      <ul>
        <li>Not required by regulation, but can assist the RPIC</li>
        <li>A visual observer does <strong>not replace</strong> the RPIC's VLOS requirement</li>
        <li>The VO helps maintain situational awareness, especially for traffic and obstacles</li>
      </ul>

      <h3>Deeper Dive: CRM for sUAS Operations</h3>
      <p>CRM originally came from manned aviation accident investigations, where the root cause was often miscommunication or poor teamwork — not mechanical failure. The same principles apply to drone operations, even though it may seem less critical with a crew of 1-3 people:</p>
      <ul>
        <li><strong>Briefing matters.</strong> Before every flight, brief your team on: the flight plan, emergency procedures, each person's role, communication protocol, and abort criteria. A quick 2-minute brief prevents confusion during the flight.</li>
        <li><strong>Communication protocol.</strong> Establish how you'll communicate. Will the VO call out "traffic north, low" or just "aircraft"? Standardized callouts prevent misunderstanding. The RPIC should acknowledge every traffic or hazard call.</li>
        <li><strong>The VO is not a co-pilot.</strong> A common exam trap: the VO assists the RPIC but does NOT need a Remote Pilot Certificate. However, the VO must be able to see the drone and communicate effectively with the RPIC. The VO cannot be the person manipulating the controls unless they are also qualified.</li>
        <li><strong>Anyone on the team can call an abort.</strong> Good CRM culture means the lowest-ranking team member should feel empowered to say "I think we should land." The RPIC has final authority, but should always consider crew input.</li>
      </ul>
    `
  },
  {
    id: "emergency",
    title: "Emergency Procedures",
    pdfPage: 43,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block. Know deviation authority and accident reporting.",
    content: `
      <h2>Emergency Procedures</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> Emergency authority, deviation reporting, and accident thresholds.</div>

      <h3>Preflight</h3>
      <ul>
        <li>Brief all crew members on emergency procedures <strong>before flight</strong></li>
        <li>If an irregularity is found during preflight, correct it before flying</li>
      </ul>

      <h3>In-Flight Emergency</h3>
      <ul>
        <li>In an emergency, the RPIC may <strong>deviate from Part 107 rules</strong> to the extent necessary to meet the emergency</li>
        <li>If the FAA requests it, the RPIC must send a report explaining the deviation</li>
      </ul>

      <h3>Accident Reporting</h3>
      <p>Report to the FAA within 10 days if the operation results in:</p>
      <ul>
        <li>Serious injury to any person</li>
        <li>Loss of consciousness</li>
        <li>Damage to any property (other than the sUAS) of at least $500</li>
      </ul>

      <h3>Altitude Deviation Reporting</h3>
      <p>If you deviate from altitude rules (e.g., climb above 400 ft AGL to avoid collision), report to the FAA upon request.</p>

      <h3>Deeper Dive: Emergency Authority & Reporting</h3>
      <p>The RPIC's emergency authority under Part 107 mirrors what manned pilots have under Part 91. In an emergency requiring immediate action, you can deviate from <em>any</em> Part 107 rule to the extent necessary. Key things to understand:</p>
      <ul>
        <li><strong>You don't need pre-approval.</strong> If a child runs toward your landing zone, you can climb above 400 ft to avoid them — even without ATC authorization. The emergency deviation authority is automatic.</li>
        <li><strong>Document everything.</strong> If the FAA asks for a report (and they may not), you must provide one. Write down what happened, what rules you deviated from, and why it was necessary. Having a written account prepared shortly after the event is good practice.</li>
        <li><strong>The $500 property damage threshold</strong> is for property <em>other than the drone itself</em>. If your $2,000 drone crashes but only damages itself, no report is required. If it damages a car windshield worth $500+, you must report within 10 calendar days.</li>
        <li><strong>"Serious injury"</strong> means requiring hospitalization. A minor scrape or bruise from a prop is not reportable; a broken bone or laceration requiring stitches is.</li>
        <li><strong>Loss of consciousness</strong> of any person triggers mandatory reporting, regardless of whether it's injury-related.</li>
      </ul>
    `
  },
  {
    id: "maintenance",
    title: "Maintenance & Preflight",
    pdfPage: 79,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block. Maintenance responsibility and preflight duties.",
    content: `
      <h2>Maintenance & Preflight Inspection Procedures</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> Who is responsible for maintenance and what the preflight covers.</div>

      <h3>Maintenance Responsibility</h3>
      <ul>
        <li>If the manufacturer provides a maintenance schedule, <strong>follow it</strong></li>
        <li>If no schedule is provided, <strong>establish your own</strong> scheduled maintenance protocol</li>
        <li>The RPIC is responsible for ensuring the aircraft is in safe operating condition</li>
      </ul>

      <h3>Preflight Inspection</h3>
      <ul>
        <li>Assess the operating environment: weather, airspace, restrictions, people/property, hazards</li>
        <li>Check that the aircraft is in condition for safe operation</li>
        <li>Ensure all crew members are briefed</li>
        <li>If operating over people (Subpart D), confirm the aircraft qualifies for the correct category</li>
      </ul>

      <h3>Condition for Safe Flight</h3>
      <p>The responsibility to inspect the small UAS and ensure it is in safe operating condition rests with the <strong>remote pilot-in-command</strong>.</p>

      <h3>Deeper Dive: Building a Preflight Routine</h3>
      <p>The FAA doesn't prescribe a specific preflight checklist for drones (unlike manned aircraft), but they expect you to have a systematic process. A thorough preflight covers three domains:</p>
      <ul>
        <li><strong>Aircraft inspection:</strong> Check the airframe for damage, cracks, or loose components. Verify propellers/rotors are secure and undamaged. Confirm battery charge level and health. Test control inputs (pitch, roll, yaw, throttle). Verify GPS lock and compass calibration. Check that the camera/payload is secure. Confirm Remote ID is broadcasting.</li>
        <li><strong>Environment assessment:</strong> Check current and forecast weather (METARs, TAFs, or aviation weather apps). Identify the airspace class and any restrictions (TFRs, NOTAMs). Survey the operating area for obstacles, power lines, people, and potential landing areas. Check for other air traffic — especially near airports.</li>
        <li><strong>Operational readiness:</strong> Brief all crew members. Confirm communication method and frequencies. Review emergency procedures. Ensure you have your Remote Pilot Certificate and drone registration. Verify LAANC authorization if in controlled airspace.</li>
      </ul>
      <p><strong>Exam tip:</strong> If a question asks "when should the RPIC determine the drone is safe for flight?" the answer is always <strong>before</strong> the flight, during preflight inspection — not during or after.</p>
    `
  },
  {
    id: "airports",
    title: "Airport Operations",
    pdfPage: 73,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block. Chart Supplement, traffic patterns, and radio awareness.",
    content: `
      <h2>Airport Operations</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> Airport types, information sources, traffic patterns, and lat/long.</div>

      <h3>Types of Airports</h3>
      <ul>
        <li><strong>Towered:</strong> Operating control tower manages traffic</li>
        <li><strong>Nontowered:</strong> No operating control tower; pilots self-announce on CTAF</li>
      </ul>

      <h3>Airport Information Sources</h3>
      <p>The <strong>most comprehensive</strong> information on a given airport is provided by the <strong>Chart Supplement U.S.</strong> (formerly Airport Facility Directory).</p>

      <h3>Antenna Towers</h3>
      <ul>
        <li>Towers are marked on sectional charts</li>
        <li>Guy wires extend outward and can be a hazard</li>
        <li>Towers may have lighting requirements</li>
      </ul>

      <h3>Latitude & Longitude</h3>
      <ul>
        <li><strong>Latitude:</strong> Measures degrees north and south of the equator (parallels)</li>
        <li><strong>Longitude:</strong> Measures degrees east and west of the Prime Meridian (meridians)</li>
        <li>Used to identify airport locations and navigation points</li>
      </ul>

      <h3>Deeper Dive: Understanding Traffic Patterns</h3>
      <p>Even though you're not flying a manned aircraft, understanding traffic patterns helps you predict where airplanes will be — which is critical for maintaining separation near airports:</p>
      <ul>
        <li><strong>Standard pattern is left-hand turns.</strong> Unless published otherwise, all turns in the traffic pattern are to the left. This means if you're near an airport, aircraft on downwind will be on the left side of the runway (when facing the landing direction).</li>
        <li><strong>Pattern altitude</strong> is typically 1,000 ft AGL for small aircraft. This is well above your 400 ft ceiling, but aircraft on approach (base and final legs) will be descending through your altitude range.</li>
        <li><strong>The five legs:</strong> Departure (climbing out after takeoff), Crosswind (turning 90° from departure), Downwind (parallel to runway, opposite direction), Base (turning toward the runway), Final (aligned with runway for landing). When a pilot announces "left base runway 27," you know they're turning toward the runway from the left side, descending, about to land on runway 27.</li>
        <li><strong>Why this matters for drone pilots:</strong> If you're operating near a nontowered airport, monitoring the CTAF lets you hear these position reports. You can then anticipate where manned aircraft are and ensure your drone stays well clear of their flight path.</li>
      </ul>
    `
  },
  {
    id: "radio",
    title: "Radio Communications",
    pdfPage: 47,
    acs: "UA.V",
    weight: 25,
    tier: 2,
    tierLabel: "HIGH",
    studyTime: "Part of the 25% Operations block. CTAF, UNICOM, ATIS, and traffic pattern calls.",
    content: `
      <h2>Radio Communication Procedures</h2>
      <div class="study-callout"><strong>ACS Area UA.V &mdash; Part of the 25% Operations block.</strong> Know the key frequencies and how to interpret traffic pattern calls.</div>

      <h3>Key Frequencies</h3>
      <table>
        <tr><th>Frequency</th><th>Purpose</th></tr>
        <tr><td>CTAF</td><td>Common Traffic Advisory Frequency (self-announce at nontowered)</td></tr>
        <tr><td>UNICOM</td><td>Often serves as CTAF at nontowered airports</td></tr>
        <tr><td>MULTICOM 122.9</td><td>Used when no tower, FSS, or UNICOM is available</td></tr>
        <tr><td>ATIS</td><td>Automated Terminal Information Service (recorded weather/info)</td></tr>
      </table>

      <h3>Part 107 Pilots & Radio</h3>
      <p>Part 107 pilots usually do not transmit on aviation frequencies in normal operations, but <strong>monitoring the published frequency (CTAF)</strong> improves situational awareness near airports.</p>

      <h3>Traffic Pattern Terminology</h3>
      <ul>
        <li><strong>Downwind:</strong> Leg parallel to runway, opposite landing direction</li>
        <li><strong>Base:</strong> Turning toward final</li>
        <li><strong>Final:</strong> Aligned with runway for landing</li>
        <li>"Midfield left downwind runway 13" = aircraft is on the left downwind side of runway 13</li>
      </ul>

      <h3>Deeper Dive: Radio & Frequencies for Drone Pilots</h3>
      <p>As a Part 107 pilot, you're not <em>required</em> to have a radio or communicate on aviation frequencies. But understanding these frequencies gives you a massive situational awareness advantage, especially near airports:</p>
      <ul>
        <li><strong>CTAF (Common Traffic Advisory Frequency):</strong> At nontowered airports, pilots self-announce their position and intentions on this frequency. Monitoring it tells you exactly where aircraft are in the pattern. The CTAF is listed in the Chart Supplement and on sectional charts (shown with a "C" in a circle next to the frequency).</li>
        <li><strong>ATIS (Automatic Terminal Information Service):</strong> A continuous recorded broadcast at towered airports giving current weather, active runway, NOTAMs, and other info. Each update gets a letter designation (Alpha, Bravo, Charlie...). Listening to ATIS before flying near a towered airport tells you wind direction, visibility, and which runway is active — all useful for predicting traffic flow.</li>
        <li><strong>UNICOM:</strong> At many nontowered airports, UNICOM and CTAF are the same frequency. UNICOM is operated by a fixed-base operator and can provide airport advisories (runway in use, winds, etc.).</li>
        <li><strong>MULTICOM 122.9:</strong> The "last resort" frequency. Used at airports with no tower, no FSS, and no UNICOM. If the Chart Supplement shows 122.9 for an airport, it means there's no ground-based service — pilots just self-announce.</li>
      </ul>
      <p><strong>Exam tip:</strong> If asked "what is the best source of information about a specific airport?" the answer is the <strong>Chart Supplement U.S.</strong> It contains frequencies, runway info, services, and much more.</p>
    `
  },

  // =============================================
  // TIER 3 — AIRSPACE (ACS UA.II) — 20% of exam
  // Study these THIRD. Chart-heavy questions.
  // =============================================
  {
    id: "airspace",
    title: "Airspace & Charts",
    pdfPage: 13,
    acs: "UA.II",
    weight: 20,
    tier: 3,
    tierLabel: "IMPORTANT",
    studyTime: "This is 20% of the exam (~12 questions). Many are chart-based. Practice reading figures.",
    content: `
      <h2>Airspace Classification & Charts</h2>
      <div class="study-callout"><strong>ACS Area UA.II &mdash; 20% of the exam (~12 questions).</strong> Many are chart-based and reference FAA figures. Know the airspace classes, ATC authorization requirements, and how to read sectional charts.</div>

      <h3>Airspace Classes</h3>
      <table>
        <tr><th>Class</th><th>Description</th><th>ATC Auth Required?</th></tr>
        <tr><td><strong>B</strong></td><td>Busiest airports, "upside-down wedding cake"</td><td>Yes</td></tr>
        <tr><td><strong>C</strong></td><td>Medium-busy towered airports with radar</td><td>Yes</td></tr>
        <tr><td><strong>D</strong></td><td>Smaller towered airports</td><td>Yes</td></tr>
        <tr><td><strong>E (surface)</strong></td><td>Class E surface area around an airport</td><td>Yes</td></tr>
        <tr><td><strong>E (other)</strong></td><td>Controlled, but not surface area</td><td>Not always</td></tr>
        <tr><td><strong>G</strong></td><td>Uncontrolled airspace</td><td>No</td></tr>
      </table>

      <h3>Special-Use Airspace</h3>
      <ul>
        <li><strong>Prohibited (P):</strong> No flight. Period.</li>
        <li><strong>Restricted (R):</strong> Hazardous activities; need permission from controlling agency if active</li>
        <li><strong>Warning (W):</strong> Like restricted but usually over water beyond coast</li>
        <li><strong>MOA:</strong> Military Operations Area; military training may be active</li>
        <li><strong>Alert Area:</strong> High training volume; use extra caution</li>
        <li><strong>TFR:</strong> Temporary Flight Restriction, issued by NOTAM; always check before flight</li>
        <li><strong>MTR / VR / IR:</strong> Military training routes; fast, low-flying military aircraft</li>
      </ul>

      <h3>Chart Reading Tips</h3>
      <ul>
        <li>Shelf floors and ceilings are usually in <strong>MSL</strong>, not AGL</li>
        <li>Don't confuse airport elevation, AGL, and MSL</li>
        <li>Blue segmented line = Class D; solid magenta/blue = Class B or C</li>
        <li>Fuzzy magenta or blue boundaries often relate to Class E bases</li>
      </ul>

      <h3>The FAA Testing Supplement (FAA-CT-8080-2H)</h3>
      <p>On the real exam, chart-based questions reference figures from the <strong>FAA Airman Knowledge Testing Supplement</strong> (FAA-CT-8080-2H). This booklet is provided at the testing center and contains sectional chart excerpts, airport diagrams, legends, and other graphics. You won't need to bring it — but you <strong>must</strong> be comfortable reading it. The FAA sample question packet uses the same figures. Practice with those before test day so you're not seeing sectional charts for the first time under the clock.</p>

      <h3>How to Attack a Chart Question</h3>
      <ol>
        <li>Identify the airport and airspace class around it</li>
        <li>Determine whether any shelf floor is in MSL and whether you're inside it</li>
        <li>Look for hazards: restricted areas, MOAs, military routes, towers, balloons</li>
        <li>Find the frequency or data source (CTAF, ATIS, Chart Supplement)</li>
      </ol>

      <h3>Latitude & Longitude</h3>
      <ul>
        <li><strong>Latitude:</strong> measures north/south of the equator</li>
        <li><strong>Longitude:</strong> measures east/west of the Prime Meridian</li>
      </ul>

      <h3>Deeper Dive: The "Wedding Cake" (Class B Airspace)</h3>
      <p>Class B airspace is called the "upside-down wedding cake" because of its layered, tiered shape on sectional charts. Understanding this shape is critical for chart-based exam questions:</p>
      <ul>
        <li><strong>The innermost ring</strong> (smallest circle) extends from the surface up to the top of the Class B (e.g., SFC to 10,000 ft MSL). This is directly over the major airport.</li>
        <li><strong>Outer rings</strong> are progressively larger circles with <em>higher floor altitudes</em>. For example, the second ring might start at 2,000 ft MSL, and the outermost ring at 5,000 ft MSL. This creates the "shelf" structure.</li>
        <li><strong>On the chart,</strong> the floors and ceilings are shown as fractions: <code>100/30</code> means the ceiling is 10,000 ft MSL and the floor is 3,000 ft MSL. The top number is the ceiling, bottom is the floor, both in hundreds of feet MSL.</li>
        <li><strong>Why this matters:</strong> If you're under a shelf (e.g., below 3,000 ft MSL but inside the outer ring's horizontal boundary), you might be in Class E or G — NOT Class B. But if you're inside the innermost ring at any altitude from surface up, you're in Class B.</li>
        <li><strong>ATC authorization is required</strong> for any Part 107 operation in Class B, C, D, or surface E airspace. Use LAANC (Low Altitude Authorization and Notification Capability) for near-real-time authorization, or apply manually via DroneZone for areas without LAANC coverage.</li>
      </ul>

      <h3>Deeper Dive: Reading Sectional Charts</h3>
      <p>Sectional charts are the most common source for exam questions. Here's how to systematically decode what you're looking at:</p>
      <ul>
        <li><strong>Airport symbols:</strong> A blue airport symbol means it has a control tower. A magenta symbol means it's nontowered. The runway layout is drawn inside the circle. If you see a star/asterisk, it indicates a rotating beacon for the airport.</li>
        <li><strong>Airspace boundaries:</strong> Solid blue lines = Class B. Solid magenta lines = Class C. Blue dashed lines = Class D. A faded magenta fill or shading around an airport often indicates Class E starting at the surface (used where there's an instrument approach but no tower).</li>
        <li><strong>Obstacles:</strong> Tall towers are shown with a small inverted triangle. The number next to it shows the MSL height, with the AGL height in parentheses. Lightning bolts on the symbol mean the tower is lit. Group obstacles show "UC" if under construction.</li>
        <li><strong>The magenta shaded area</strong> that covers much of the chart represents Class E airspace starting at 700 ft AGL (this is the most common Class E floor). Outside this shading, Class E typically starts at 1,200 ft AGL. This matters because below the Class E floor, you're in Class G (uncontrolled).</li>
        <li><strong>MSL vs. AGL:</strong> Airspace boundaries are in MSL. Drone altitude limits (400 ft) are in AGL. If the airport elevation is 500 ft MSL and you're at 400 ft AGL, you're at 900 ft MSL. If a Class B shelf floor is 2,000 ft MSL, you're well below it and not in Class B.</li>
        <li><strong>TFRs and NOTAMs</strong> are NOT printed on sectional charts — they're temporary. Always check NOTAMs before flight at 1800wxbrief.com or through an EFB app.</li>
      </ul>

      <h3>Deeper Dive: LAANC & Airspace Authorization</h3>
      <p>LAANC (Low Altitude Authorization and Notification Capability) revolutionized how drone pilots get airspace authorization:</p>
      <ul>
        <li><strong>What it does:</strong> Provides near-real-time authorization to fly in controlled airspace at or below published ceiling grids. Instead of waiting weeks for manual FAA approval, you can get authorization in seconds through approved apps (Aloft/Kittyhawk, AirMap, DJI, etc.).</li>
        <li><strong>How it works:</strong> The FAA publishes "UAS Facility Maps" that show maximum altitudes pre-approved for drone operations in grid cells around airports. If your planned altitude is at or below the grid ceiling, LAANC can auto-approve. If you need higher, you must apply manually.</li>
        <li><strong>Zero-ceiling grids:</strong> Some areas near runways have a 0 ft ceiling, meaning no LAANC authorization is available — you must apply manually through DroneZone, and approval is unlikely near active runways.</li>
        <li><strong>Authorization ≠ Communication:</strong> Having LAANC approval means you're authorized to be in the airspace. It does NOT mean ATC is watching you or providing separation from other aircraft. You must still see and avoid all traffic.</li>
      </ul>
    `
  },

  // =============================================
  // TIER 4 — WEATHER (ACS UA.III) — 5% of exam
  // Lower weight, but you still need these points.
  // =============================================
  {
    id: "weather-sources",
    title: "Aviation Weather Sources",
    pdfPage: 23,
    acs: "UA.III",
    weight: 5,
    tier: 4,
    tierLabel: "MODERATE",
    studyTime: "Weather is only 5% (~3 questions), but a missed METAR decode is an easy lost point.",
    content: `
      <h2>Aviation Weather Sources</h2>
      <div class="study-callout"><strong>ACS Area UA.III &mdash; 5% of the exam (~3 questions).</strong> Lower weight, but METAR/TAF decode questions are pass-or-fail &mdash; you either know the format or you don't. Worth a quick study.</div>

      <h3>METAR (Surface Weather Observation)</h3>
      <p>Read a METAR left to right:</p>
      <table>
        <tr><th>Element</th><th>Example</th><th>Meaning</th></tr>
        <tr><td>Station</td><td>KJFK</td><td>Airport identifier</td></tr>
        <tr><td>Date/Time</td><td>251953Z</td><td>25th day, 1953 Zulu (UTC)</td></tr>
        <tr><td>Wind</td><td>18004KT</td><td>From 180&deg; at 4 knots</td></tr>
        <tr><td>Visibility</td><td>1 1/2SM</td><td>1.5 statute miles</td></tr>
        <tr><td>Weather</td><td>+TSRA</td><td>Heavy thunderstorm rain</td></tr>
        <tr><td>Sky</td><td>BKN008 OVC012</td><td>Broken at 800ft, Overcast at 1200ft</td></tr>
        <tr><td>Temp/Dew</td><td>18/16</td><td>18&deg;C / 16&deg;C dew point</td></tr>
        <tr><td>Altimeter</td><td>A2992</td><td>29.92 inches Hg</td></tr>
      </table>
      <p><strong>Sky cover abbreviations:</strong> FEW (1-2 oktas), SCT (scattered, 3-4), BKN (broken, 5-7), OVC (overcast, 8)</p>
      <p><strong>Ceiling</strong> = the lowest BKN or OVC layer. Cloud bases are reported in hundreds of feet AGL.</p>

      <h3>TAF (Terminal Aerodrome Forecast)</h3>
      <ul>
        <li>Forecast for ~5 SM radius around an airport</li>
        <li>Usually valid 24-30 hours</li>
        <li><strong>FM</strong> = "From" (rapid significant change at given time)</li>
        <li><strong>TEMPO</strong> = temporary fluctuations</li>
        <li><strong>PROB30</strong> = 30% probability of specified weather</li>
      </ul>

      <h3>Convective SIGMETs (WST)</h3>
      <p>Issued for severe thunderstorms, tornadoes, and lines of thunderstorms. These indicate conditions dangerous to all aircraft.</p>

      <h3>Deeper Dive: Decoding METARs Step by Step</h3>
      <p>METAR decoding is a guaranteed exam topic. Let's break down a real example:</p>
      <p><code>METAR KORD 121856Z 22015G25KT 3SM +TSRA BKN015 OVC025 24/22 A2968 RMK AO2</code></p>
      <ul>
        <li><strong>KORD</strong> — Chicago O'Hare airport (K = continental US, ORD = O'Hare)</li>
        <li><strong>121856Z</strong> — 12th day of the month at 18:56 Zulu (UTC). All aviation times are in Zulu/UTC.</li>
        <li><strong>22015G25KT</strong> — Wind FROM 220° (southwest) at 15 knots, gusting to 25 knots. Wind direction is always where the wind is coming FROM, in degrees true.</li>
        <li><strong>3SM</strong> — Visibility is 3 statute miles. For Part 107, you need at least 3 SM to fly.</li>
        <li><strong>+TSRA</strong> — Heavy (+) thunderstorm (TS) rain (RA). Weather descriptors: - light, no symbol = moderate, + heavy. TS = thunderstorm, RA = rain, SN = snow, FG = fog, BR = mist, HZ = haze.</li>
        <li><strong>BKN015 OVC025</strong> — Broken clouds at 1,500 ft AGL, overcast at 2,500 ft AGL. Cloud heights in METARs are always AGL and in hundreds of feet. The CEILING is the lowest BKN or OVC layer = 1,500 ft. For Part 107, you need 500 ft below clouds.</li>
        <li><strong>24/22</strong> — Temperature 24°C, dew point 22°C. Close spread = high moisture, fog possible.</li>
        <li><strong>A2968</strong> — Altimeter setting 29.68 inches of mercury.</li>
        <li><strong>AO2</strong> — Automated station with precipitation discriminator.</li>
      </ul>
      <p><strong>Exam tip:</strong> When a question gives you a METAR and asks "can you fly under Part 107?" — check visibility (≥3 SM), cloud clearance (500 ft below, 2,000 ft horizontal), and general safety (thunderstorms = no-go).</p>

      <h3>Deeper Dive: Aviation Weather Sources</h3>
      <p>Know where to find weather information and what each source provides:</p>
      <ul>
        <li><strong>1800wxbrief.com</strong> — The FAA's official source for pre-flight weather briefings. You can get a Standard Briefing (full weather picture), Abbreviated Briefing (update to a previous briefing), or Outlook Briefing (planning ahead).</li>
        <li><strong>Aviation Weather Center (aviationweather.gov)</strong> — Graphical forecasts, AIRMETs, SIGMETs, current METARs and TAFs.</li>
        <li><strong>AIRMET vs SIGMET:</strong> AIRMETs warn of moderate conditions (moderate turbulence, mountain obscuration, IFR). SIGMETs warn of severe conditions (severe turbulence, icing, volcanic ash). Convective SIGMETs specifically cover severe thunderstorms and tornadoes.</li>
        <li><strong>Winds & Temperatures Aloft (FB)</strong> — Forecast winds at various altitudes. Less relevant for drone operations (usually at higher altitudes) but may appear on the exam.</li>
      </ul>
    `
  },
  {
    id: "weather-effects",
    title: "Weather Effects on Performance",
    pdfPage: 29,
    acs: "UA.III",
    weight: 5,
    tier: 4,
    tierLabel: "MODERATE",
    studyTime: "Part of the 5% Weather block. Stable vs unstable air and density altitude concepts.",
    content: `
      <h2>Effects of Weather on Performance</h2>
      <div class="study-callout"><strong>ACS Area UA.III &mdash; Part of the 5% Weather block.</strong> Stable vs unstable air, inversions, and density altitude are the most common weather question patterns.</div>

      <h3>Stable vs. Unstable Air</h3>
      <table>
        <tr><th>Unstable Air</th><th>Stable Air</th></tr>
        <tr><td>Cumuliform clouds</td><td>Stratiform clouds and fog</td></tr>
        <tr><td>Showery precipitation</td><td>Continuous/steady precipitation</td></tr>
        <tr><td>Turbulence / rough air</td><td>Smooth air</td></tr>
        <tr><td>Better visibility (except blowing obstructions)</td><td>Poor visibility in haze/smoke</td></tr>
      </table>

      <h3>Temperature, Dew Point & Inversions</h3>
      <ul>
        <li>When temp and dew point are close: air is near saturation; <strong>fog/low clouds likely</strong></li>
        <li>Temperature inversion = temp increases with altitude; traps haze/smoke/fog below</li>
        <li>Questions about poor visibility + smooth air + fog = stable air or inversion</li>
      </ul>

      <h3>Density Altitude</h3>
      <p><strong>Higher density altitude = worse performance.</strong> Hotter, higher elevation, more humid air = "thinner" air.</p>
      <ul>
        <li>Propeller/rotor efficiency <strong>decreases</strong></li>
        <li>Climb performance worsens</li>
        <li>Payload margin shrinks</li>
      </ul>

      <h3>Wind Shear & Microbursts</h3>
      <ul>
        <li>Wind shear = sudden change in wind speed/direction over short distance</li>
        <li>Low-level wind shear is especially dangerous near ground</li>
        <li>Microburst = most severe form of low-level wind shear</li>
        <li>Associated with: thunderstorms, frontal systems, inversions</li>
      </ul>

      <h3>Thunderstorm Stages</h3>
      <table>
        <tr><th>Stage</th><th>Characteristics</th></tr>
        <tr><td>Cumulus</td><td>Mainly updrafts; building cumulus is a warning</td></tr>
        <tr><td>Mature</td><td>Updrafts + downdrafts; worst hazards (turbulence, hail, lightning)</td></tr>
        <tr><td>Dissipating</td><td>Downdrafts dominate; storm weakens</td></tr>
      </table>
      <p><strong>For drone operations: avoid thunderstorms entirely.</strong></p>

      <h3>Deeper Dive: Density Altitude & Why It Matters</h3>
      <p>Density altitude is one of the trickiest weather concepts on the exam. Think of it this way: density altitude is what the air "feels like" to your aircraft in terms of performance.</p>
      <ul>
        <li><strong>Standard atmosphere:</strong> At sea level, standard temperature is 15°C (59°F) and pressure is 29.92" Hg. Density altitude equals pressure altitude in standard conditions.</li>
        <li><strong>Hot day = high density altitude.</strong> If you're at a 1,000 ft elevation airport and it's 100°F, the air is so thin that your drone performs as if it were at 3,000-4,000 ft. Less lift, less thrust, shorter flight time, reduced payload capacity.</li>
        <li><strong>Three factors increase density altitude:</strong> Higher temperature, higher elevation, higher humidity. All three make the air less dense. Denver on a hot summer day has significantly higher density altitude than Miami in winter.</li>
        <li><strong>Practical impact on drones:</strong> At high density altitude, propellers are less efficient (they're spinning in thinner air), motors work harder, batteries drain faster, and your max payload decreases. If your drone barely hovers with a heavy payload at sea level, it may not fly at all at 5,000 ft on a hot day.</li>
        <li><strong>The exam loves this pattern:</strong> "What happens to aircraft performance on a hot day at high elevation?" Answer: performance DECREASES in every measurable way.</li>
      </ul>

      <h3>Deeper Dive: Stable vs. Unstable Air in Practice</h3>
      <p>The stable/unstable distinction drives many exam questions. Here's a simple mental model:</p>
      <ul>
        <li><strong>Unstable air</strong> = air that wants to move vertically. It creates cumulus (puffy) clouds, turbulence, gusty winds, good visibility between storms, and showery (on-and-off) precipitation. Think of a hot summer afternoon with building thunderheads.</li>
        <li><strong>Stable air</strong> = air that resists vertical movement. It creates stratus (layered) clouds, smooth flight, poor visibility (haze/smoke get trapped), steady drizzle or continuous rain, and fog. Think of a gray, overcast morning with haze that won't lift.</li>
        <li><strong>Temperature inversions</strong> are the ultimate stable layer. Normally, temperature decreases with altitude. An inversion reverses this — warm air sits on top of cool air, acting like a lid. Pollution, smoke, and haze get trapped below the inversion, creating terrible visibility near the ground even though it might be clear above.</li>
        <li><strong>Exam pattern:</strong> "Smooth air, continuous rain, poor visibility" = stable air. "Turbulence, showery precipitation, cumuliform clouds" = unstable air. They'll mix and match these characteristics to test whether you understand the concept.</li>
      </ul>
    `
  },

  // =============================================
  // TIER 5 — LOADING & PERFORMANCE (ACS UA.IV) — 2% of exam
  // Lowest weight. Quick review is sufficient.
  // =============================================
  {
    id: "loading",
    title: "Aircraft Loading & Performance",
    pdfPage: 37,
    acs: "UA.IV",
    weight: 2,
    tier: 5,
    tierLabel: "LOW",
    studyTime: "Only 2% of the exam (~1 question). Quick review — don't over-invest here.",
    content: `
      <h2>Small Unmanned Aircraft Loading & Performance</h2>
      <div class="study-callout"><strong>ACS Area UA.IV &mdash; 2% of the exam (~1 question).</strong> Lowest weight area. A quick review of load factor, stalls, and CG is enough. Don't over-invest time here at the expense of Regulations and Operations.</div>

      <h3>Weight & Performance</h3>
      <p>Increased weight hurts performance in almost every phase: takeoff, climb, cruise, maneuverability, landing, and stall margin.</p>

      <h3>Center of Gravity (CG)</h3>
      <ul>
        <li>CG is where the aircraft balances</li>
        <li>If CG is outside allowed limits, control difficulty results</li>
        <li>Always follow the manufacturer's loading instructions or flight manual</li>
      </ul>

      <h3>Load Factor</h3>
      <ul>
        <li>Load factor = ratio of lift to weight, measured in Gs</li>
        <li>In turns, load factor <strong>increases with bank angle</strong></li>
        <li>At 60&deg; bank in a level turn: load factor = 2 Gs</li>
        <li>Wings must support more weight than the aircraft weighs during banked turns</li>
      </ul>

      <h3>Stalls & Angle of Attack</h3>
      <ul>
        <li>A stall occurs when the wing exceeds its <strong>critical angle of attack</strong></li>
        <li>Not merely caused by low airspeed</li>
        <li>Any aircraft can stall at any airspeed if angle of attack is high enough</li>
        <li>As load factor rises, stalling speed also rises</li>
      </ul>

      <h3>Determining Performance</h3>
      <ul>
        <li>The RPIC is responsible for determining the performance of the aircraft</li>
        <li>Consider manufacturer data, environmental conditions, and payload</li>
        <li>Higher temperature, altitude, and humidity all reduce performance (density altitude)</li>
      </ul>

      <h3>Deeper Dive: Load Factor & Stalls Explained</h3>
      <p>These concepts come from fixed-wing aerodynamics, but the FAA tests drone pilots on them. Here's the intuition:</p>
      <ul>
        <li><strong>Load factor in turns:</strong> When an aircraft banks to turn, it needs more lift to maintain altitude (because lift is now tilted, so only a portion acts against gravity). At a 30° bank, load factor is ~1.15G. At 45°, it's ~1.41G. At 60°, it doubles to 2G — meaning the wings must support twice the aircraft's weight. This matters because increased load factor means the stall speed increases too.</li>
        <li><strong>Stall = exceeding critical angle of attack.</strong> A wing stalls when the air can no longer flow smoothly over it because the angle between the wing and the oncoming air (angle of attack) is too steep. This can happen at ANY speed — a stall is not just "flying too slow." In a steep turn with high load factor, the stall speed is higher than in straight-and-level flight.</li>
        <li><strong>For multirotors:</strong> Multirotors don't have wings that stall in the traditional sense, but they can lose lift from settling-with-power (descending into their own downwash), lose control authority in aggressive maneuvers, or exceed motor capacity when overloaded.</li>
        <li><strong>Center of gravity (CG):</strong> If you mount a heavy camera or payload that shifts the CG outside the manufacturer's limits, the aircraft may become uncontrollable — it might pitch or roll uncontrollably, or the flight controller may not be able to compensate. Always follow the manufacturer's loading guidelines.</li>
      </ul>
    `
  }
];
