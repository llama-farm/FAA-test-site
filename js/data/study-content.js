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

      <h3>Right of Way</h3>
      <p>Small UAS must <strong>yield right of way to all aircraft and airborne vehicles</strong>.</p>
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
    `
  }
];
