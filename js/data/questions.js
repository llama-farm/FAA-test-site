// 76 Practice Questions
// Sources: 46 from FAA UAG Sample Questions + 30 from Comprehensive Study Guide
// correctIndex is 0-based (0=A, 1=B, 2=C)
const QUESTIONS = [
  // ===== UAG SAMPLE QUESTIONS (1-46) =====
  {
    id: "uag1",
    source: "UAG",
    question: "What are characteristics of a moist, unstable air mass?",
    options: ["Turbulence and showery precipitation.", "Poor visibility and smooth air.", "Haze and smoke."],
    correctIndex: 0,
    explanation: "Unstable air produces cumuliform clouds, turbulence, and showery precipitation.",
    category: "weather-effects",
    acsCode: "UA.III.B.K1d"
  },
  {
    id: "uag2",
    source: "UAG",
    question: "According to 14 CFR part 107, how may a remote pilot operate an unmanned aircraft in Class C airspace?",
    options: [
      "The remote pilot must have prior authorization from the Air Traffic Control (ATC) facility having jurisdiction over that airspace.",
      "The remote pilot must monitor the Air Traffic Control (ATC) frequency from launch to recovery.",
      "The remote pilot must contact the Air Traffic Control (ATC) facility after launching the unmanned aircraft."
    ],
    correctIndex: 0,
    explanation: "Part 107 requires prior ATC authorization to operate in Class B, C, D, or the surface area of Class E airspace.",
    category: "airspace",
    acsCode: "UA.I.B.K16"
  },
  {
    id: "uag3",
    source: "UAG",
    question: "According to 14 CFR part 107 the remote pilot in command (PIC) of a small unmanned aircraft planning to operate within Class C airspace",
    options: ["must use a visual observer.", "is required to file a flight plan.", "is required to receive ATC authorization."],
    correctIndex: 2,
    explanation: "Prior ATC authorization is required for operations in Class C airspace.",
    category: "airspace",
    acsCode: "UA.II.A.K1b"
  },
  {
    id: "uag4",
    source: "UAG",
    question: "What effect does high density altitude have on the efficiency of a UA propeller?",
    options: ["Propeller efficiency is increased.", "Propeller efficiency is decreased.", "Density altitude does not affect propeller efficiency."],
    correctIndex: 1,
    explanation: "Higher density altitude means thinner air, which reduces propeller efficiency.",
    category: "weather-effects",
    acsCode: "UA.III.B.K1a"
  },
  {
    id: "uag5",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 22, area 2.) At Coeur D'Alene which frequency should be used as a Common Traffic Advisory Frequency (CTAF) to monitor airport traffic?",
    options: ["122.05 MHz.", "135.075 MHz.", "122.8 MHz."],
    correctIndex: 2,
    explanation: "The CTAF frequency for Coeur D'Alene is 122.8 MHz as shown on the sectional chart.",
    category: "airports",
    acsCode: "UA.V.B.K6a",
    figureNote: "This question references Figure 22 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag6",
    source: "UAG",
    question: "Which technique should a remote pilot use to scan for traffic? A remote pilot should",
    options: [
      "systematically focus on different segments of the sky for short intervals.",
      "concentrate on relative movement detected in the peripheral vision area.",
      "continuously scan the sky from right to left."
    ],
    correctIndex: 0,
    explanation: "Systematic scanning of different sky segments for short intervals is the recommended technique.",
    category: "physiology",
    acsCode: "UA.I.B.K14a"
  },
  {
    id: "uag7",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 2.) If an unmanned airplane weighs 33 pounds, what approximate weight would the airplane structure be required to support during a 30° banked turn while maintaining altitude?",
    options: ["34 pounds.", "47 pounds.", "38 pounds."],
    correctIndex: 2,
    explanation: "At 30° bank, load factor is approximately 1.15G. 33 × 1.15 ≈ 38 pounds.",
    category: "loading",
    acsCode: "UA.IV.A.K1a",
    figureNote: "This question references Figure 2 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag8",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 23, area 3.) What is the floor of the Savannah Class C airspace at the shelf area (outer circle)?",
    options: ["1,300 feet AGL.", "1,300 feet MSL.", "1,700 feet MSL."],
    correctIndex: 1,
    explanation: "The shelf floor of Savannah Class C airspace at the outer circle is 1,300 feet MSL.",
    category: "airspace",
    acsCode: "UA.II.A.K1b",
    figureNote: "This question references Figure 23 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag9",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 20, area 3.) With ATC authorization, you are operating your small unmanned aircraft approximately 4 SM southeast of Elizabeth City Regional Airport (ECG). What hazard is indicated to be in that area?",
    options: [
      "High density military operations in the vicinity.",
      "Unmarked balloon on a cable up to 3,008 feet AGL.",
      "Unmarked balloon on a cable up to 3,008 feet MSL."
    ],
    correctIndex: 2,
    explanation: "The chart indicates an unmarked balloon on a cable up to 3,008 feet MSL in that area.",
    category: "airspace",
    acsCode: "UA.V.B.K6a",
    figureNote: "This question references Figure 20 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag10",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 21.) You have been hired by a farmer to use your small UA to inspect his crops. The area that you are to survey is in the Devil's Lake West MOA, east of area 2. How would you find out if the MOA is active?",
    options: [
      "Refer to the chart legend.",
      "This information is available in the Small UAS database.",
      "Refer to the Military Operations Directory."
    ],
    correctIndex: 0,
    explanation: "The chart legend provides information about MOA activity status and the controlling agency to contact.",
    category: "airspace",
    acsCode: "UA.II.A.K2",
    figureNote: "This question references Figure 21 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag11",
    source: "UAG",
    question: "The most comprehensive information on a given airport is provided by",
    options: [
      "the Chart Supplements U.S. (formerly Airport Facility Directory).",
      "Notices to Airmen (NOTAMS).",
      "Terminal Area Chart (TAC)."
    ],
    correctIndex: 0,
    explanation: "Chart Supplement U.S. is the most comprehensive source of airport information.",
    category: "airports",
    acsCode: "UA.V.B.K6b"
  },
  {
    id: "uag12",
    source: "UAG",
    question: "Identify the hazardous attitude or characteristic a remote pilot displays while taking risks in order to impress others?",
    options: ["Impulsivity.", "Invulnerability.", "Macho."],
    correctIndex: 2,
    explanation: "Macho is the hazardous attitude associated with taking risks to impress others.",
    category: "adm",
    acsCode: "UA.V.D.K4"
  },
  {
    id: "uag13",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 26, area 4.) You have been hired to inspect the tower under construction at 46.9N and 98.6W, near Jamestown Regional (JMS). What must you receive prior to flying your unmanned aircraft in this area?",
    options: ["Authorization from the military.", "Authorization from ATC.", "Authorization from the National Park Service."],
    correctIndex: 1,
    explanation: "The area near Jamestown Regional Airport requires ATC authorization for Part 107 operations.",
    category: "airspace",
    acsCode: "UA.V.B.K6a",
    figureNote: "This question references Figure 26 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag14",
    source: "UAG",
    question: '(Refer to FAA-CT-8080-2H, Figure 20, area 5.) How would a remote PIC "CHECK NOTAMS" as noted in the CAUTION box regarding the unmarked balloon?',
    options: [
      "By utilizing the B4UFLY mobile application.",
      "By contacting the FAA district office.",
      "By obtaining a briefing via an online source such as: 1800WXBrief.com."
    ],
    correctIndex: 2,
    explanation: "NOTAMs can be checked via online briefing sources such as 1800WXBrief.com.",
    category: "airspace",
    acsCode: "UA.II.B.K5",
    figureNote: "This question references Figure 20 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag15",
    source: "UAG",
    question: "When adapting crew resource management (CRM) concepts to the operation of a small UA, CRM must be integrated into",
    options: ["the flight portion only.", "all phases of the operation.", "the communications only."],
    correctIndex: 1,
    explanation: "CRM must be integrated into all phases of the operation, not just flight.",
    category: "crm",
    acsCode: "UA.V.D.K2"
  },
  {
    id: "uag16",
    source: "UAG",
    question: "You have been hired as a remote pilot by a local TV news station to film breaking news with a small UA. You expressed a safety concern and the station manager has instructed you to 'fly first, ask questions later.' What type of hazardous attitude does this attitude represent?",
    options: ["Machismo.", "Invulnerability.", "Impulsivity."],
    correctIndex: 1,
    explanation: "The 'fly first, ask questions later' attitude represents Invulnerability — the belief that nothing bad will happen.",
    category: "adm",
    acsCode: "UA.V.D.K4"
  },
  {
    id: "uag17",
    source: "UAG",
    question: "A local TV station has hired a remote pilot to operate their small UA to cover news stories. The remote pilot has had multiple near misses with obstacles on the ground and two small UAS accidents. What would be a solution for the news station to improve their operating safety culture?",
    options: [
      "The news station should implement a policy of no more than five crashes/incidents within 6 months.",
      "The news station does not need to make any changes; there are times that an accident is unavoidable.",
      "The news station should recognize hazardous attitudes and situations and develop standard operating procedures that emphasize safety."
    ],
    correctIndex: 2,
    explanation: "Recognizing hazardous attitudes and developing safety-focused SOPs is the proper approach.",
    category: "adm",
    acsCode: "UA.V.D.K1"
  },
  {
    id: "uag18",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 26, area 2.) While monitoring the Cooperstown CTAF you hear an aircraft announce that they are midfield left downwind to RWY 13. Where would the aircraft be relative to the runway?",
    options: ["The aircraft is East.", "The aircraft is South.", "The aircraft is West."],
    correctIndex: 0,
    explanation: "Left downwind for Runway 13 places the aircraft east of the runway.",
    category: "airports",
    acsCode: "UA.V.A.K3",
    figureNote: "This question references Figure 26 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag19",
    source: "UAG",
    question: "To avoid a possible collision with a manned airplane, you estimate that your small UA climbed to an altitude greater than 600 feet AGL. To whom must you report the deviation?",
    options: [
      "Air Traffic Control.",
      "The National Transportation Safety Board.",
      "Upon request of the Federal Aviation Administration."
    ],
    correctIndex: 2,
    explanation: "The RPIC must report the deviation upon request of the FAA.",
    category: "regulations",
    acsCode: "UA.V.C.K1"
  },
  {
    id: "uag20",
    source: "UAG",
    question: "When operating an unmanned airplane, the remote pilot should consider that the load factor on the wings may be increased any time",
    options: [
      "the CG is shifted rearward to the aft CG limit.",
      "the airplane is subjected to maneuvers other than straight-and-level flight.",
      "the gross weight is reduced."
    ],
    correctIndex: 1,
    explanation: "Load factor increases during maneuvers other than straight-and-level flight, such as turns.",
    category: "loading",
    acsCode: "UA.IV.A.K1a"
  },
  {
    id: "uag21",
    source: "UAG",
    question: "A stall occurs when the smooth airflow over the unmanned airplane's wing is disrupted and the lift degenerates rapidly. This is caused when the wing",
    options: ["exceeds the maximum speed.", "exceeds maximum allowable operating weight.", "exceeds its critical angle of attack."],
    correctIndex: 2,
    explanation: "A stall occurs when the wing exceeds its critical angle of attack.",
    category: "loading",
    acsCode: "UA.IV.A.K1b"
  },
  {
    id: "uag22",
    source: "UAG",
    question: 'Safety is an important element for a remote pilot to consider prior to operating an unmanned aircraft system. To prevent the final "link" in the accident chain, a remote pilot must consider which methodology?',
    options: ["Crew Resource Management.", "Safety Management System.", "Risk Management."],
    correctIndex: 2,
    explanation: "Risk Management methodology helps prevent the final link in the accident chain.",
    category: "adm",
    acsCode: "UA.V.D.K1"
  },
  {
    id: "uag23",
    source: "UAG",
    question: "You are a remote pilot for a co-op energy service provider. You are to use your UA to inspect power lines in a remote area 15 hours away from your home office. After the drive, fatigue impacts your abilities to complete your assignment on time. Fatigue can be recognized",
    options: ["easily by an experienced pilot.", "as being in an impaired state.", "by an ability to overcome sleep deprivation."],
    correctIndex: 1,
    explanation: "Fatigue is recognized as being in an impaired state that degrades performance.",
    category: "physiology",
    acsCode: "UA.V.E.K5"
  },
  {
    id: "uag24",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 21.) What airport is located approximately 47 (degrees) 40 (minutes) N latitude and 101 (degrees) 26 (minutes) W longitude?",
    options: ["Mercer County Regional Airport.", "Semshenko Airport.", "Garrison Airport."],
    correctIndex: 1,
    explanation: "Semshenko Airport is located at approximately those coordinates.",
    category: "airports",
    acsCode: "UA.V.B.K6a",
    figureNote: "This question references Figure 21 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag25",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 12.) What are the current conditions for Chicago Midway Airport (KMDW)?",
    options: [
      "Sky 700 feet overcast, visibility 1-1/2SM, rain.",
      "Sky 7,000 feet overcast, visibility 1-1/2SM, heavy rain.",
      "Sky 700 feet overcast, visibility 11, occasionally 2SM, with rain."
    ],
    correctIndex: 0,
    explanation: "The METAR for KMDW shows sky overcast at 700 feet, visibility 1.5 statute miles, with rain.",
    category: "weather-sources",
    acsCode: "UA.III.A.K2",
    figureNote: "This question references Figure 12 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag26",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 12.) The wind direction and velocity at KJFK is from",
    options: ["180° true at 4 knots.", "180° magnetic at 4 knots.", "040° true at 18 knots."],
    correctIndex: 0,
    explanation: "METAR winds are reported in degrees true. KJFK shows 18004KT — from 180° true at 4 knots.",
    category: "weather-sources",
    acsCode: "UA.III.A.K2",
    figureNote: "This question references Figure 12 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag27",
    source: "UAG",
    question: "According to 14 CFR part 107, what is required to operate a small UA within 30 minutes after official sunset?",
    options: ["Use of anti-collision lights.", "Must be operated in a rural area.", "Use of a transponder."],
    correctIndex: 0,
    explanation: "Anti-collision lights visible for 3 statute miles are required for operations during civil twilight (30 min before/after sunrise/sunset).",
    category: "regulations",
    acsCode: "UA.I.B.K9"
  },
  {
    id: "uag28",
    source: "UAG",
    question: "To ensure that the unmanned aircraft center of gravity (CG) limits are not exceeded, follow the aircraft loading instructions specified in the",
    options: [
      "Pilot's Operating Handbook or UAS Flight Manual.",
      "Aeronautical Information Manual (AIM).",
      "Aircraft Weight and Balance Handbook."
    ],
    correctIndex: 0,
    explanation: "Follow the manufacturer's operating handbook or flight manual for CG and loading instructions.",
    category: "loading",
    acsCode: "UA.IV.A.K1b"
  },
  {
    id: "uag29",
    source: "UAG",
    question: "According to 14 CFR part 107, who is responsible for determining the performance of a small unmanned aircraft?",
    options: ["Remote pilot-in-command.", "Manufacturer.", "Owner or operator."],
    correctIndex: 0,
    explanation: "The RPIC is responsible for determining the performance of the aircraft.",
    category: "performance",
    acsCode: "UA.I.B.K20"
  },
  {
    id: "uag30",
    source: "UAG",
    question: '(Refer to FAA-CT-8080-2H, Figure 59, area 2.) The chart shows a gray line with "VR1667, VR1617, VR1638, and VR1668." Could this area present a hazard to the operations of a small UA?',
    options: [
      "No, all operations will be above 400 feet.",
      "Yes, this is a Military Training Route from the surface to 1,500 feet AGL.",
      "Yes, the defined route provides traffic separation to manned aircraft."
    ],
    correctIndex: 1,
    explanation: "VR routes (Visual Routes) are Military Training Routes where military aircraft operate from the surface to 1,500 feet AGL at high speeds.",
    category: "airspace",
    acsCode: "UA.II.A.K2",
    figureNote: "This question references Figure 59 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag31",
    source: "UAG",
    question: "(Refer to FAA-CT-8080-2H, Figure 26.) What does the line of latitude at area 4 measure?",
    options: [
      "The degrees of latitude east and west of the Prime Meridian.",
      "The degrees of latitude north and south of the equator.",
      "The degrees of latitude east and west of the line that passes through Greenwich, England."
    ],
    correctIndex: 1,
    explanation: "Lines of latitude measure degrees north and south of the equator.",
    category: "airports",
    acsCode: "UA.V.B.K6a",
    figureNote: "This question references Figure 26 from FAA-CT-8080-2H testing supplement."
  },
  {
    id: "uag32",
    source: "UAG",
    question: "Under what condition should the operator of a small UA establish scheduled maintenance protocol?",
    options: [
      "When the manufacturer does not provide a maintenance schedule.",
      "UAS does not need a required maintenance schedule.",
      "When the FAA requires you to, following an accident."
    ],
    correctIndex: 0,
    explanation: "When the manufacturer doesn't provide a maintenance schedule, the operator should establish their own.",
    category: "maintenance",
    acsCode: "UA.V.F.K1"
  },
  {
    id: "uag33",
    source: "UAG",
    question: "According to 14 CFR part 107, the responsibility to inspect the small UAS to ensure it is in a safe operating condition rests with the",
    options: ["remote pilot-in-command.", "visual observer.", "owner of the small UAS."],
    correctIndex: 0,
    explanation: "The RPIC is responsible for inspecting the sUAS and ensuring safe operating condition.",
    category: "maintenance",
    acsCode: "UA.V.F.K2"
  },
  {
    id: "uag34",
    source: "UAG",
    question: "According to 14 CFR part 48, when would a small UA owner not be permitted to register it?",
    options: [
      "If the owner is less than 13 years of age.",
      "All persons must register their small UA.",
      "If the owner does not have a valid United States driver's license."
    ],
    correctIndex: 0,
    explanation: "Owners must be at least 13 years old to register a small UA under Part 48.",
    category: "regulations",
    acsCode: "UA.I.B.K1"
  },
  {
    id: "uag35",
    source: "UAG",
    question: "According to 14 CFR part 48, when must a person register a small UA with the Federal Aviation Administration?",
    options: [
      "All civilian small UAs weighing greater than .55 pounds must be registered regardless of its intended use.",
      "When the small UA is used for any purpose other than as a model aircraft.",
      "Only when the operator will be paid for commercial services."
    ],
    correctIndex: 0,
    explanation: "All civilian small UAs weighing more than 0.55 pounds must be registered, regardless of intended use.",
    category: "regulations",
    acsCode: "UA.I.B.K1"
  },
  {
    id: "uag36",
    source: "UAG",
    question: "Which is true regarding the presence of alcohol within the human body?",
    options: [
      "A small amount of alcohol increases vision acuity.",
      "Consuming an equal amount of water will increase the destruction of alcohol and alleviate a hangover.",
      "Judgment and decision-making abilities can be adversely affected by even small amounts of alcohol."
    ],
    correctIndex: 2,
    explanation: "Even small amounts of alcohol adversely affect judgment and decision-making abilities.",
    category: "physiology",
    acsCode: "UA.V.E.K2"
  },
  {
    id: "uag37",
    source: "UAG",
    question: "When using a small UA in a commercial operation, who is responsible for briefing the participants about emergency procedures?",
    options: ["The FAA inspector-in-charge.", "The lead visual observer.", "The remote PIC."],
    correctIndex: 2,
    explanation: "The remote PIC is responsible for briefing all participants about emergency procedures.",
    category: "emergency",
    acsCode: "UA.V.C.K1"
  },
  {
    id: "uag38",
    source: "UAG",
    question: "What are the characteristics of stable air?",
    options: [
      "Good visibility and steady precipitation.",
      "Poor visibility and steady precipitation.",
      "Poor visibility and intermittent precipitation."
    ],
    correctIndex: 1,
    explanation: "Stable air characteristics include poor visibility (haze/smoke trapped) and steady (not showery) precipitation.",
    category: "weather-effects",
    acsCode: "UA.III.B.K1c"
  },
  {
    id: "uag39",
    source: "UAG",
    question: "You have received an outlook briefing from flight service through 1800wxbrief.com. The briefing indicates you can expect a low-level temperature inversion with high relative humidity. What weather conditions would you expect?",
    options: [
      "Smooth air, poor visibility, fog, haze, or low clouds.",
      "Light wind shear, poor visibility, haze, and light rain.",
      "Turbulent air, poor visibility, fog, low stratus type clouds, and showery precipitation."
    ],
    correctIndex: 0,
    explanation: "A low-level temperature inversion with high humidity produces smooth air, poor visibility, fog, haze, or low clouds.",
    category: "weather-effects",
    acsCode: "UA.III.B.K1j"
  },
  {
    id: "uag40",
    source: "UAG",
    question: "When may a remote pilot reduce the intensity of an aircraft's lights during a night flight?",
    options: [
      "At no time may the lights of an sUAS be reduced in intensity at night.",
      "When a manned aircraft is in the vicinity of the sUAS.",
      "When it is in the interest of safety to dim the aircraft's lights."
    ],
    correctIndex: 2,
    explanation: "The RPIC may reduce the intensity of anti-collision lights when it is in the interest of safety, but may not extinguish them.",
    category: "regulations",
    acsCode: "UA.I.B.K25"
  },
  {
    id: "uag41",
    source: "UAG",
    question: "What must a person, who is manipulating the controls of a small unmanned aircraft, do if the standard remote identification fails during a flight?",
    options: [
      "Land the aircraft as soon as practicable.",
      "Notify the nearest FAA Air Traffic facility.",
      "Activate the aircraft's navigation lights."
    ],
    correctIndex: 0,
    explanation: "If standard Remote ID broadcasting fails during flight, the aircraft must be landed as soon as practicable.",
    category: "ops-over-people",
    acsCode: "UA.I.F.K1"
  },
  {
    id: "uag42",
    source: "UAG",
    question: "Where must a small unmanned aircraft's serial number be listed when using either standard remote identification or a broadcast module?",
    options: [
      "The aircraft's Document of Compliance.",
      "The manufacturer's Method of Compliance.",
      "The Certificate of Aircraft Registration."
    ],
    correctIndex: 2,
    explanation: "The serial number must be listed on the Certificate of Aircraft Registration.",
    category: "ops-over-people",
    acsCode: "UA.I.B.K1"
  },
  {
    id: "uag43",
    source: "UAG",
    question: "When preparing for a night flight, what should an sUAS pilot be aware of after assembling and conducting a preflight of an aircraft while using a bright flashlight or work light?",
    options: [
      "Once adapted to darkness, a person's eyes are relatively immune to bright lights.",
      "It takes approximately 30 minutes for a person's eyes to fully adapt to darkness.",
      "The person should use a flash light equipped with LED lights to facilitate their night vision."
    ],
    correctIndex: 1,
    explanation: "It takes approximately 30 minutes for eyes to fully adapt to darkness after bright light exposure.",
    category: "physiology",
    acsCode: "UA.V.E.K8"
  },
  {
    id: "uag44",
    source: "UAG",
    question: "To conduct Category 1 operations, a remote pilot in command must use a small unmanned aircraft that weighs",
    options: ["0.55 pounds or less.", "0.65 pounds or less.", "0.75 pounds or less."],
    correctIndex: 0,
    explanation: "Category 1 operations over people require an aircraft weighing 0.55 pounds or less.",
    category: "ops-over-people",
    acsCode: "UA.I.E.K3a"
  },
  {
    id: "uag45",
    source: "UAG",
    question: "Which Category of small unmanned aircraft must have an airworthiness certificate issued by the FAA?",
    options: ["4.", "3.", "2."],
    correctIndex: 0,
    explanation: "Category 4 is the only operations-over-people category that requires an FAA airworthiness certificate.",
    category: "ops-over-people",
    acsCode: "UA.I.E.K3d"
  },
  {
    id: "uag46",
    source: "UAG",
    question: "Your surveying company is a title sponsor for a race team at the Indianapolis 500. To promote your new aerial surveying department, you decide to video part of the race using a small UA. The FAA has issued a Temporary Flight Restriction (TFR) for the race in the area you plan to fly. In this situation",
    options: [
      "you may fly your drone in the TFR since your company is sponsoring a team at the race.",
      "the TFR applies to all aircraft; you may not fly in the area without a Certificate of Waiver or Authorization.",
      "flying your drone is allowed if you notify all non-participating people of the closed course UA operation."
    ],
    correctIndex: 1,
    explanation: "A TFR applies to all aircraft. You may not fly in the area without a Certificate of Waiver or Authorization.",
    category: "airspace",
    acsCode: "UA.II.A.K3"
  },

  // ===== PRACTICE QUESTIONS FROM STUDY GUIDE (47-76) =====
  {
    id: "sg1",
    source: "Study Guide",
    question: "You are flying a small UAS in the daytime at 350 feet AGL in Class G airspace. Visibility is 2 statute miles, clouds are 700 feet above your operating altitude, and you remain 2,500 feet horizontally from clouds. Is the flight legal under Part 107?",
    options: [
      "No — visibility is below the required 3 statute miles.",
      "Yes — all requirements are met in Class G airspace.",
      "No — cloud clearance is insufficient."
    ],
    correctIndex: 0,
    explanation: "The minimum flight visibility under Part 107 is 3 statute miles. At 2 SM, this flight is not legal.",
    category: "regulations"
  },
  {
    id: "sg2",
    source: "Study Guide",
    question: "You plan a mission 3 nautical miles from a towered airport, inside Class D airspace. What is the main additional approval you need before launch?",
    options: [
      "Prior ATC authorization.",
      "A Certificate of Waiver from the FAA.",
      "Permission from the airport manager."
    ],
    correctIndex: 0,
    explanation: "Part 107 requires prior ATC authorization to operate in Class D airspace.",
    category: "airspace"
  },
  {
    id: "sg3",
    source: "Study Guide",
    question: "Who is responsible for ensuring the aircraft is in a safe operating condition before flight?",
    options: ["The owner.", "The visual observer.", "The RPIC."],
    correctIndex: 2,
    explanation: "The RPIC is directly responsible for ensuring the aircraft is in safe operating condition.",
    category: "regulations"
  },
  {
    id: "sg4",
    source: "Study Guide",
    question: "A METAR shows BKN008 OVC012CB. What is the reported ceiling?",
    options: [
      "Broken at 800 feet AGL.",
      "Overcast at 1,200 feet AGL.",
      "800 feet with cumulonimbus clouds present."
    ],
    correctIndex: 0,
    explanation: "The ceiling is the lowest BKN or OVC layer. BKN008 = broken at 800 feet AGL. The CB indicates cumulonimbus.",
    category: "weather-sources"
  },
  {
    id: "sg5",
    source: "Study Guide",
    question: "A TAF includes FM1500 16015G25KT P6SM SCT040 BKN250. What does FM tell you?",
    options: [
      "A significant weather change beginning at 1500Z.",
      "A temporary fluctuation around 1500Z.",
      "Forecast conditions valid from midnight to 1500Z."
    ],
    correctIndex: 0,
    explanation: "FM means 'From' — a significant, rapid change beginning at the specified time (1500Z).",
    category: "weather-sources"
  },
  {
    id: "sg6",
    source: "Study Guide",
    question: "You hear an aircraft announce 'midfield left downwind runway 18.' What does this tell you operationally?",
    options: [
      "The aircraft is in the traffic pattern on the downwind leg for runway 18.",
      "The aircraft is on final approach for runway 18.",
      "The aircraft has departed runway 18 and is turning left."
    ],
    correctIndex: 0,
    explanation: "The aircraft is in the traffic pattern on the downwind leg, on the left side of runway 18 relative to landing direction.",
    category: "airports"
  },
  {
    id: "sg7",
    source: "Study Guide",
    question: "May you operate two automated drones simultaneously because they are on software flight plans?",
    options: [
      "Yes, if both are within VLOS.",
      "Yes, but only in Class G airspace.",
      "No — Part 107 prohibits operating more than one UA at the same time."
    ],
    correctIndex: 2,
    explanation: "Part 107 prohibits operating more than one unmanned aircraft at the same time, regardless of automation.",
    category: "regulations"
  },
  {
    id: "sg8",
    source: "Study Guide",
    question: "A farmer hires you to inspect crops in an MOA. Is an MOA automatically closed to you?",
    options: [
      "Yes — MOAs are restricted to military aircraft only.",
      "No — but it is a hazard area; determine activity status and use caution.",
      "Yes — you need FAA authorization to enter any MOA."
    ],
    correctIndex: 1,
    explanation: "MOAs are not prohibited airspace, but military training may be active. Determine status and use caution.",
    category: "airspace"
  },
  {
    id: "sg9",
    source: "Study Guide",
    question: "What weather is most consistent with a low-level temperature inversion and high humidity?",
    options: [
      "Smooth air, poor visibility, fog, haze, or low clouds.",
      "Turbulence, showery precipitation, good visibility.",
      "Gusty winds, broken clouds, moderate visibility."
    ],
    correctIndex: 0,
    explanation: "A temperature inversion traps moisture and pollutants, producing smooth air, poor visibility, fog, and haze.",
    category: "weather-effects"
  },
  {
    id: "sg10",
    source: "Study Guide",
    question: "What is the first practical effect of dehydration for many pilots?",
    options: [
      "Increased heart rate.",
      "Fatigue and degraded physical/mental performance.",
      "Tunnel vision."
    ],
    correctIndex: 1,
    explanation: "Dehydration causes fatigue, cramps, dizziness, and weakened cognitive performance.",
    category: "physiology"
  },
  {
    id: "sg11",
    source: "Study Guide",
    question: "You have a 33-pound fixed-wing unmanned airplane in a 30-degree bank while maintaining altitude. What happens to structural load?",
    options: [
      "Load factor stays at 1 G.",
      "Load factor increases above 1 G, so the wing must support more than 33 pounds.",
      "Load factor decreases because of the bank angle."
    ],
    correctIndex: 1,
    explanation: "In a banked turn, load factor increases. At 30° bank, the structure supports approximately 38 pounds for a 33-pound aircraft.",
    category: "loading"
  },
  {
    id: "sg12",
    source: "Study Guide",
    question: "Which answer best explains why high density altitude hurts performance?",
    options: [
      "The air is less dense, reducing aerodynamic and propulsive efficiency.",
      "The air is more dense, causing excessive drag.",
      "Higher temperatures increase battery voltage."
    ],
    correctIndex: 0,
    explanation: "High density altitude = thinner air, which reduces propeller efficiency and aerodynamic performance.",
    category: "performance"
  },
  {
    id: "sg13",
    source: "Study Guide",
    question: "The RPIC wants to fly at night. The aircraft has no anti-collision lighting. Is that acceptable if the mission is under 200 feet AGL?",
    options: [
      "Yes — below 200 feet AGL, lighting is not required.",
      "No — night operation requires anti-collision lighting visible for at least 3 statute miles.",
      "Yes — if operating in Class G airspace."
    ],
    correctIndex: 1,
    explanation: "Night operation always requires anti-collision lighting visible for at least 3 statute miles, regardless of altitude.",
    category: "regulations"
  },
  {
    id: "sg14",
    source: "Study Guide",
    question: "A client says, 'Ignore the safety concern and fly first.' What hazardous attitude does that push toward?",
    options: ["Resignation.", "Impulsivity.", "Anti-authority."],
    correctIndex: 1,
    explanation: "The pressure to 'do it now, worry later' represents Impulsivity — acting without thinking.",
    category: "adm"
  },
  {
    id: "sg15",
    source: "Study Guide",
    question: "Which operations-over-people category must have an airworthiness certificate?",
    options: ["Category 2.", "Category 3.", "Category 4."],
    correctIndex: 2,
    explanation: "Category 4 is the only category that requires an FAA airworthiness certificate under Part 21.",
    category: "ops-over-people"
  },
  {
    id: "sg16",
    source: "Study Guide",
    question: "A drone weighs 0.55 pounds or less and has no exposed rotating parts that would lacerate skin. What operations-over-people category does it qualify for?",
    options: ["Category 1.", "Category 2.", "Category 3."],
    correctIndex: 0,
    explanation: "Category 1 requires the aircraft to weigh 0.55 lb or less with no exposed lacerating parts.",
    category: "ops-over-people"
  },
  {
    id: "sg17",
    source: "Study Guide",
    question: "What should a pilot do if standard Remote ID fails during flight?",
    options: [
      "Continue the mission and report after landing.",
      "Land as soon as practicable.",
      "Switch to a backup broadcast module."
    ],
    correctIndex: 1,
    explanation: "If the aircraft stops broadcasting Remote ID message elements in flight, it must be landed as soon as practicable.",
    category: "ops-over-people"
  },
  {
    id: "sg18",
    source: "Study Guide",
    question: "You are in Class G airspace but only 1,000 feet horizontally from clouds. Visibility is 5 statute miles and you are 600 feet below the cloud base. Is the cloud clearance legal?",
    options: [
      "Yes — all requirements met.",
      "No — you need 2,000 feet horizontal separation from clouds.",
      "No — you need 1,500 feet horizontal separation from clouds."
    ],
    correctIndex: 1,
    explanation: "Part 107 requires 2,000 feet horizontal distance from clouds. At 1,000 feet, this is not legal.",
    category: "regulations"
  },
  {
    id: "sg19",
    source: "Study Guide",
    question: "Does the pilot or manufacturer submit a Declaration of Compliance for ordinary operations over people?",
    options: [
      "The pilot submits it before each flight.",
      "The aircraft's manufacturer/designer/modifier submits the DoC; the pilot verifies and uses compliant aircraft.",
      "The FAA issues it automatically with the Part 107 certificate."
    ],
    correctIndex: 1,
    explanation: "The manufacturer, designer, or modifier submits the Declaration of Compliance. The pilot only verifies and uses compliant aircraft.",
    category: "ops-over-people"
  },
  {
    id: "sg20",
    source: "Study Guide",
    question: "Which is more likely in unstable air: steady light rain or showery precipitation?",
    options: [
      "Steady light rain.",
      "Showery precipitation.",
      "Neither — unstable air does not produce precipitation."
    ],
    correctIndex: 1,
    explanation: "Unstable air produces cumuliform clouds and showery (intermittent) precipitation, not steady rain.",
    category: "weather-effects"
  },
  {
    id: "sg21",
    source: "Study Guide",
    question: "What is the lowest cloud layer that counts as a ceiling?",
    options: [
      "The lowest scattered (SCT) layer.",
      "The lowest broken (BKN) or overcast (OVC) layer.",
      "Any cloud layer below 5,000 feet."
    ],
    correctIndex: 1,
    explanation: "The ceiling is defined as the lowest broken or overcast layer, or vertical visibility into an obscuration.",
    category: "weather-sources"
  },
  {
    id: "sg22",
    source: "Study Guide",
    question: "You are 200 feet from a 500-foot tower and want to inspect near its top. How high may you operate under the structure exception?",
    options: [
      "400 feet AGL only.",
      "Up to 500 feet (the structure height).",
      "Up to 400 feet above the structure's uppermost limit, while within 400 feet laterally."
    ],
    correctIndex: 2,
    explanation: "The structure exception allows flight up to 400 feet above the structure's uppermost limit when within 400 feet laterally.",
    category: "regulations"
  },
  {
    id: "sg23",
    source: "Study Guide",
    question: "What publication gives the most comprehensive information on a given airport?",
    options: [
      "Sectional Aeronautical Chart.",
      "Chart Supplement U.S.",
      "Terminal Area Chart."
    ],
    correctIndex: 1,
    explanation: "The Chart Supplement U.S. (formerly Airport Facility Directory) provides the most comprehensive airport information.",
    category: "airports"
  },
  {
    id: "sg24",
    source: "Study Guide",
    question: "A person drank one beer 4 hours ago and says they feel fine. Can they act as RPIC?",
    options: [
      "Yes — they feel fine and are not impaired.",
      "No — Part 107 prohibits acting within 8 hours after drinking.",
      "Yes — one beer metabolizes in about 1 hour."
    ],
    correctIndex: 1,
    explanation: "The 8-hour 'bottle-to-throttle' rule prohibits acting as RPIC within 8 hours of consuming alcohol, regardless of how they feel.",
    category: "physiology"
  },
  {
    id: "sg25",
    source: "Study Guide",
    question: "What is the practical difference between Category 2 and Category 3 for operations over people?",
    options: [
      "Category 2 is for heavier drones; Category 3 is for lighter drones.",
      "Different injury thresholds (11 vs 25 ft-lb); Category 3 cannot operate over open-air assemblies.",
      "Category 3 requires an airworthiness certificate; Category 2 does not."
    ],
    correctIndex: 1,
    explanation: "Category 2 uses an 11 ft-lb threshold, Category 3 uses 25 ft-lb. Category 3 is more restricted and cannot operate over open-air assemblies.",
    category: "ops-over-people"
  },
  {
    id: "sg26",
    source: "Study Guide",
    question: "What kind of cloud is most dangerous to pilots and strongly associated with thunderstorms?",
    options: ["Stratus.", "Cumulus.", "Cumulonimbus."],
    correctIndex: 2,
    explanation: "Cumulonimbus clouds are associated with thunderstorms and present the most dangerous flying conditions.",
    category: "weather-effects"
  },
  {
    id: "sg27",
    source: "Study Guide",
    question: "A drone pilot is tired after a long drive and wants to launch quickly to stay on schedule. Which risk-management tool should catch that problem before launch?",
    options: ["3P model only.", "IMSAFE and PAVE.", "The aircraft checklist."],
    correctIndex: 1,
    explanation: "IMSAFE catches fatigue (the 'F'), and PAVE catches external pressure (the 'E') and pilot fitness (the 'P').",
    category: "adm"
  },
  {
    id: "sg28",
    source: "Study Guide",
    question: "You are operating near a nontowered airport. Even though you are not required to transmit, what extra step improves situational awareness?",
    options: [
      "File a flight plan with the FAA.",
      "Monitor the published frequency (CTAF) if available.",
      "Contact the nearest ARTCC."
    ],
    correctIndex: 1,
    explanation: "Monitoring the CTAF helps you understand what manned aircraft traffic is doing near the airport.",
    category: "radio"
  },
  {
    id: "sg29",
    source: "Study Guide",
    question: "What are the three stages of a thunderstorm in order?",
    options: [
      "Building, Peak, Declining.",
      "Cumulus, Mature, Dissipating.",
      "Formation, Active, Recovery."
    ],
    correctIndex: 1,
    explanation: "The three thunderstorm stages are: Cumulus (updrafts), Mature (worst hazards), and Dissipating (downdrafts dominate).",
    category: "weather-effects"
  },
  {
    id: "sg30",
    source: "Study Guide",
    question: "What must you report to the FAA within 10 days of a sUAS operation?",
    options: [
      "Any deviation from Part 107 rules.",
      "Serious injury, loss of consciousness, or property damage of at least $500.",
      "Any flight that exceeds 30 minutes in duration."
    ],
    correctIndex: 1,
    explanation: "You must report within 10 days: serious injury, loss of consciousness, or property damage (other than the sUAS) of at least $500.",
    category: "emergency"
  },
  // ===== ADDITIONAL QUESTIONS — REGULATIONS (heavy weight) =====
  {
    id: "r1", source: "Added", category: "regulations",
    question: "What is the maximum allowable weight for a small UAS under Part 107?",
    options: ["45 pounds.", "55 pounds.", "65 pounds."],
    correctIndex: 1,
    explanation: "Part 107 defines a small UAS as weighing less than 55 pounds at takeoff, including everything attached."
  },
  {
    id: "r2", source: "Added", category: "regulations",
    question: "Under Part 107, can the RPIC designate another person to manipulate the flight controls?",
    options: [
      "Yes — the RPIC may designate a person to manipulate the controls under the RPIC's supervision.",
      "No — only the RPIC may touch the controls.",
      "Yes — but only if the person holds a Part 107 certificate."
    ],
    correctIndex: 0,
    explanation: "The RPIC may allow another person to manipulate the controls, but the RPIC remains responsible and must be able to direct the flight."
  },
  {
    id: "r3", source: "Added", category: "regulations",
    question: "What is the minimum flight visibility required for Part 107 operations?",
    options: ["1 statute mile.", "3 statute miles.", "5 statute miles."],
    correctIndex: 1,
    explanation: "Part 107 requires a minimum flight visibility of 3 statute miles from the control station."
  },
  {
    id: "r4", source: "Added", category: "regulations",
    question: "How far must a small UAS remain below clouds under Part 107?",
    options: ["200 feet.", "500 feet.", "1,000 feet."],
    correctIndex: 1,
    explanation: "Part 107 requires at least 500 feet below clouds and 2,000 feet horizontally from clouds."
  },
  {
    id: "r5", source: "Added", category: "regulations",
    question: "Under Part 107, the RPIC must maintain what type of contact with the aircraft?",
    options: [
      "Radar contact at all times.",
      "Visual line of sight (VLOS) with unaided vision (other than corrective lenses).",
      "Telemetry contact via the ground control station."
    ],
    correctIndex: 1,
    explanation: "VLOS must be maintained at all times, using unaided vision other than corrective lenses."
  },
  {
    id: "r6", source: "Added", category: "regulations",
    question: "A visual observer is used during a Part 107 operation. Does the visual observer replace the RPIC's responsibility to maintain VLOS?",
    options: [
      "Yes — the visual observer's job is to maintain VLOS so the RPIC can focus on controls.",
      "No — a visual observer assists but does not replace the RPIC's VLOS requirement.",
      "Yes — but only if the VO holds a Part 107 certificate."
    ],
    correctIndex: 1,
    explanation: "A visual observer helps maintain awareness but does not replace the RPIC's VLOS obligation."
  },
  {
    id: "r7", source: "Added", category: "regulations",
    question: "Under Part 107, can a small UAS be operated at night without a waiver?",
    options: [
      "Yes — if the aircraft has anti-collision lights visible for 3 statute miles and the pilot meets training requirements.",
      "No — night operations always require a Part 107 waiver.",
      "Yes — but only if operating below 200 feet AGL."
    ],
    correctIndex: 0,
    explanation: "Under the updated Part 107 rules, night operations are permitted with anti-collision lighting and appropriate training."
  },
  {
    id: "r8", source: "Added", category: "regulations",
    question: "What is the maximum groundspeed allowed under Part 107?",
    options: ["60 mph.", "87 knots / 100 mph.", "120 knots."],
    correctIndex: 1,
    explanation: "Part 107 limits groundspeed to 87 knots (100 mph)."
  },
  {
    id: "r9", source: "Added", category: "regulations",
    question: "An RPIC wants to fly a drone to deliver a small package. Under standard Part 107 rules, which restriction applies to operating from a moving vehicle?",
    options: [
      "Operating from a moving vehicle is never permitted.",
      "It is permitted only over sparsely populated areas and not when carrying property for compensation.",
      "It is permitted anywhere as long as the RPIC maintains VLOS."
    ],
    correctIndex: 1,
    explanation: "Moving vehicle operations are allowed only over sparsely populated areas and not while transporting another person's property for compensation."
  },
  {
    id: "r10", source: "Added", category: "regulations",
    question: "Under Part 107, who has the final authority and responsibility for a flight?",
    options: ["The aircraft owner.", "The remote pilot in command.", "The visual observer."],
    correctIndex: 1,
    explanation: "The RPIC is directly responsible for and is the final authority as to the operation of the small UAS."
  },
  {
    id: "r11", source: "Added", category: "regulations",
    question: "How long after consuming alcohol must a person wait before acting as RPIC?",
    options: ["4 hours.", "8 hours.", "12 hours."],
    correctIndex: 1,
    explanation: "Part 107 (via Part 91) prohibits acting as RPIC within 8 hours of consuming alcohol."
  },
  {
    id: "r12", source: "Added", category: "regulations",
    question: "What is the maximum blood alcohol concentration allowed for an RPIC under Part 107?",
    options: ["0.02 percent.", "0.04 percent.", "0.08 percent."],
    correctIndex: 1,
    explanation: "The maximum BAC is 0.04 percent, adopted from Part 91."
  },
  {
    id: "r13", source: "Added", category: "regulations",
    question: "An RPIC discovers a mechanical issue during preflight. What should they do?",
    options: [
      "Fly the mission and address the issue after landing.",
      "Correct the issue before flight or do not fly.",
      "Report the issue to the FAA before flying."
    ],
    correctIndex: 1,
    explanation: "If an irregularity is found during preflight, it must be corrected before the aircraft is operated."
  },
  {
    id: "r14", source: "Added", category: "regulations",
    question: "Can a Part 107 RPIC carry hazardous material on a small UAS?",
    options: [
      "Yes, if properly packaged.",
      "Yes, with a waiver.",
      "No — hazardous material carriage is prohibited and cannot be waived."
    ],
    correctIndex: 2,
    explanation: "Carriage of hazardous material is prohibited and is not a waiverable rule under Part 107."
  },
  {
    id: "r15", source: "Added", category: "regulations",
    question: "What must a small UAS do when it encounters a manned aircraft?",
    options: [
      "Maintain its course and altitude.",
      "Yield the right of way.",
      "Climb to avoid the manned aircraft."
    ],
    correctIndex: 1,
    explanation: "Small UAS must yield the right of way to all aircraft and airborne vehicles."
  },
  {
    id: "r16", source: "Added", category: "regulations",
    question: "How often must a Remote Pilot Certificate holder complete recurrent aeronautical knowledge training?",
    options: [
      "Every 12 calendar months.",
      "Every 24 calendar months.",
      "Every 36 calendar months."
    ],
    correctIndex: 1,
    explanation: "Recurrent training must be completed within the previous 24 calendar months to exercise Part 107 privileges."
  },
  {
    id: "r17", source: "Added", category: "regulations",
    question: "Under Part 48, at what weight must a civilian small UA be registered?",
    options: [
      "Greater than 0.25 pounds.",
      "Greater than 0.55 pounds.",
      "Greater than 1 pound."
    ],
    correctIndex: 1,
    explanation: "All civilian small UAs weighing more than 0.55 pounds must be registered regardless of intended use."
  },
  {
    id: "r18", source: "Added", category: "regulations",
    question: "You are flying 390 feet AGL in Class G airspace with 4 miles visibility, 600 feet below clouds, and 2,100 feet horizontal from clouds. Is this legal?",
    options: [
      "Yes — all Part 107 requirements are met.",
      "No — altitude exceeds the 400-foot limit.",
      "No — horizontal cloud clearance is insufficient."
    ],
    correctIndex: 0,
    explanation: "All requirements are met: below 400 ft AGL, 3+ SM visibility, 500+ ft below clouds, 2,000+ ft horizontal from clouds."
  },
  {
    id: "r19", source: "Added", category: "regulations",
    question: "During an in-flight emergency, the RPIC may deviate from Part 107 rules. What must they do afterward?",
    options: [
      "File a written report with the NTSB within 24 hours.",
      "Report the deviation upon request of the FAA.",
      "Nothing — emergency deviations require no follow-up."
    ],
    correctIndex: 1,
    explanation: "If the FAA requests it, the RPIC must submit a written report explaining the emergency deviation."
  },
  {
    id: "r20", source: "Added", category: "regulations",
    question: "Under Part 107, can a person who is not a certificated remote pilot act as RPIC?",
    options: [
      "Yes, with any type of pilot certificate.",
      "No — only holders of a Remote Pilot Certificate with a small UAS rating may act as RPIC.",
      "Yes, if supervised by a certificated remote pilot."
    ],
    correctIndex: 1,
    explanation: "The RPIC must hold a Remote Pilot Certificate with a small UAS rating."
  },
  {
    id: "r21", source: "Added", category: "regulations",
    question: "When operating at civil twilight, what additional equipment is required?",
    options: [
      "No additional equipment beyond daytime requirements.",
      "Anti-collision lighting visible for at least 3 statute miles.",
      "A transponder broadcasting on 1200."
    ],
    correctIndex: 1,
    explanation: "Anti-collision lights visible for 3 SM are required during civil twilight (30 minutes before sunrise / after sunset) and at night."
  },
  {
    id: "r22", source: "Added", category: "regulations",
    question: "Under Part 107, can the anti-collision light be extinguished during night flight?",
    options: [
      "Yes, if the RPIC determines it is a distraction.",
      "No — it may be dimmed for safety but never extinguished.",
      "Yes, when operating below 200 feet AGL."
    ],
    correctIndex: 1,
    explanation: "The RPIC may reduce the intensity of anti-collision lights when safety requires it, but may not turn them off."
  },
  {
    id: "r23", source: "Added", category: "regulations",
    question: "Which of the following is NOT waiverable under Part 107?",
    options: [
      "Visual line of sight requirement.",
      "Operations over people.",
      "Prohibition on carrying hazardous materials."
    ],
    correctIndex: 2,
    explanation: "The prohibition on hazardous material carriage cannot be waived. VLOS and operations over people can be waived."
  },
  {
    id: "r24", source: "Added", category: "regulations",
    question: "What is the minimum age to register a small UA under Part 48?",
    options: ["13 years old.", "16 years old.", "18 years old."],
    correctIndex: 0,
    explanation: "A person must be at least 13 years old to register a small UA. The minimum age for a Remote Pilot Certificate is 16."
  },
  {
    id: "r25", source: "Added", category: "regulations",
    question: "An RPIC is operating under Part 107 when a medical condition begins to affect their ability to safely fly. What should they do?",
    options: [
      "Continue the flight but operate more cautiously.",
      "Hand the controls to the visual observer.",
      "Discontinue the flight — no operation if a physical/mental condition interferes with safe flight."
    ],
    correctIndex: 2,
    explanation: "Part 107 prohibits operating when a physical or mental condition would interfere with safe flight."
  },

  // ===== ADDITIONAL QUESTIONS — OPERATIONS (high weight) =====
  {
    id: "o1", source: "Added", category: "adm",
    question: "A remote pilot thinks 'It won't happen to me' when considering weather risks. Which hazardous attitude is this?",
    options: ["Macho.", "Invulnerability.", "Anti-authority."],
    correctIndex: 1,
    explanation: "Invulnerability is the attitude that accidents happen to others, not to you."
  },
  {
    id: "o2", source: "Added", category: "adm",
    question: "What is the antidote to the 'Anti-authority' hazardous attitude?",
    options: [
      "Taking chances is foolish.",
      "Follow the rules — they are usually right.",
      "It could happen to me."
    ],
    correctIndex: 1,
    explanation: "The antidote to Anti-authority ('Don't tell me') is 'Follow the rules. They are usually right.'"
  },
  {
    id: "o3", source: "Added", category: "adm",
    question: "What does the 'E' in PAVE stand for?",
    options: ["Equipment.", "External pressures.", "Emergencies."],
    correctIndex: 1,
    explanation: "PAVE = Pilot, Aircraft, enVironment, External pressures."
  },
  {
    id: "o4", source: "Added", category: "adm",
    question: "A remote pilot says 'What's the use? Nothing I do will help.' Which hazardous attitude is this?",
    options: ["Impulsivity.", "Resignation.", "Invulnerability."],
    correctIndex: 1,
    explanation: "Resignation is the feeling of helplessness. The antidote is 'I'm not helpless. I can make a difference.'"
  },
  {
    id: "o5", source: "Added", category: "adm",
    question: "What does the '3P' model stand for in aeronautical decision-making?",
    options: [
      "Plan, Prepare, Perform.",
      "Perceive, Process, Perform.",
      "Predict, Prioritize, Proceed."
    ],
    correctIndex: 1,
    explanation: "The 3P model: Perceive the hazard, Process the risk, Perform the mitigation."
  },
  {
    id: "o6", source: "Added", category: "physiology",
    question: "What does the 'F' in IMSAFE stand for?",
    options: ["Fear.", "Fatigue.", "Fitness."],
    correctIndex: 1,
    explanation: "IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion."
  },
  {
    id: "o7", source: "Added", category: "physiology",
    question: "How does stress affect a remote pilot's performance?",
    options: [
      "It sharpens decision-making under pressure.",
      "It can narrow attention, impair judgment, and reduce situational awareness.",
      "It has no measurable effect on experienced pilots."
    ],
    correctIndex: 1,
    explanation: "Stress narrows attention and impairs decision-making, increasing the risk of errors."
  },
  {
    id: "o8", source: "Added", category: "emergency",
    question: "When must a Part 107 accident be reported to the FAA?",
    options: [
      "Within 24 hours.",
      "Within 10 calendar days.",
      "Within 30 calendar days."
    ],
    correctIndex: 1,
    explanation: "Accidents resulting in serious injury, loss of consciousness, or $500+ property damage must be reported within 10 days."
  },
  {
    id: "o9", source: "Added", category: "emergency",
    question: "Which of the following would require filing an accident report with the FAA?",
    options: [
      "A minor scratch on a vehicle from a drone blade.",
      "A person losing consciousness after being struck by a small UAS.",
      "A drone that lands on a neighbor's lawn without damage."
    ],
    correctIndex: 1,
    explanation: "Loss of consciousness is one of the reportable thresholds under Part 107 accident reporting."
  },
  {
    id: "o10", source: "Added", category: "maintenance",
    question: "The manufacturer of your drone does not provide a maintenance schedule. What should you do?",
    options: [
      "No maintenance is needed since the manufacturer didn't require it.",
      "Establish your own scheduled maintenance protocol.",
      "Have the FAA assign a maintenance schedule."
    ],
    correctIndex: 1,
    explanation: "When the manufacturer doesn't provide a schedule, the operator should establish their own maintenance protocol."
  },
  {
    id: "o11", source: "Added", category: "maintenance",
    question: "Who is responsible for ensuring a small UAS is in a condition for safe flight?",
    options: ["The manufacturer.", "The remote PIC.", "The FAA."],
    correctIndex: 1,
    explanation: "The RPIC is responsible for ensuring the aircraft is in a condition for safe operation before each flight."
  },
  {
    id: "o12", source: "Added", category: "crm",
    question: "When should crew resource management (CRM) principles be applied to a drone operation?",
    options: [
      "Only during the flight phase.",
      "During all phases of the operation.",
      "Only during pre-flight briefing."
    ],
    correctIndex: 1,
    explanation: "CRM must be integrated into all phases: planning, briefing, flight, and post-flight."
  },
  {
    id: "o13", source: "Added", category: "adm",
    question: "A remote pilot who takes unnecessary risks to show skill to onlookers is displaying which attitude?",
    options: ["Impulsivity.", "Macho.", "Anti-authority."],
    correctIndex: 1,
    explanation: "Macho attitude involves taking risks to prove capability or impress others."
  },
  {
    id: "o14", source: "Added", category: "airports",
    question: "At a nontowered airport, what frequency do pilots use to announce their position and intentions?",
    options: ["Center frequency.", "CTAF.", "Emergency frequency 121.5."],
    correctIndex: 1,
    explanation: "CTAF (Common Traffic Advisory Frequency) is used for self-announcing at nontowered airports."
  },
  {
    id: "o15", source: "Added", category: "airports",
    question: "What does ATIS provide?",
    options: [
      "Air traffic control clearances.",
      "Automated recorded weather and airport information.",
      "Radar traffic advisories."
    ],
    correctIndex: 1,
    explanation: "ATIS (Automated Terminal Information Service) provides recorded weather and airport operational information."
  },
  {
    id: "o16", source: "Added", category: "radio",
    question: "What frequency is MULTICOM?",
    options: ["121.5 MHz.", "122.9 MHz.", "126.7 MHz."],
    correctIndex: 1,
    explanation: "MULTICOM 122.9 is used when no tower, FSS, or UNICOM frequency is available."
  },
  {
    id: "o17", source: "Added", category: "adm",
    question: "What methodology should a remote pilot use to prevent the final link in the accident chain?",
    options: ["Checklist management.", "Risk management.", "Time management."],
    correctIndex: 1,
    explanation: "Risk management helps identify and mitigate hazards, breaking the accident chain before the final link."
  },
  {
    id: "o18", source: "Added", category: "physiology",
    question: "What is hyperventilation, and how should it be treated?",
    options: [
      "Rapid breathing that lowers CO2; treat by slowing breathing rate.",
      "Shallow breathing that raises CO2; treat by breathing faster.",
      "Holding your breath during stress; treat by breathing normally."
    ],
    correctIndex: 0,
    explanation: "Hyperventilation is excessive breathing that lowers CO2. Treatment is to slow the breathing rate."
  },
  {
    id: "o19", source: "Added", category: "adm",
    question: "What does the 'A' in PAVE stand for?",
    options: ["Airspace.", "Aircraft.", "Altitude."],
    correctIndex: 1,
    explanation: "PAVE = Pilot, Aircraft, enVironment, External pressures."
  },
  {
    id: "o20", source: "Added", category: "physiology",
    question: "How long does it take for a person's eyes to fully adapt to darkness after exposure to bright light?",
    options: ["5 minutes.", "15 minutes.", "30 minutes."],
    correctIndex: 2,
    explanation: "It takes approximately 30 minutes for eyes to fully adapt to darkness after bright light exposure."
  },

  // ===== ADDITIONAL QUESTIONS — AIRSPACE (important weight) =====
  {
    id: "a1", source: "Added", category: "airspace",
    question: "Which classes of airspace require prior ATC authorization for Part 107 operations?",
    options: [
      "Class B, C, D, and the surface area of Class E designated for an airport.",
      "Class B and C only.",
      "All controlled airspace (A, B, C, D, E)."
    ],
    correctIndex: 0,
    explanation: "Part 107 requires prior ATC authorization for Class B, C, D, and Class E surface areas designated for an airport."
  },
  {
    id: "a2", source: "Added", category: "airspace",
    question: "What type of airspace is Class G?",
    options: ["Controlled.", "Uncontrolled.", "Restricted."],
    correctIndex: 1,
    explanation: "Class G is uncontrolled airspace. No ATC authorization is needed for Part 107 operations."
  },
  {
    id: "a3", source: "Added", category: "airspace",
    question: "A Prohibited Area (P-xxx) on a sectional chart means:",
    options: [
      "Flight is prohibited — no entry.",
      "Flight requires permission from the controlling agency.",
      "Military operations may be active."
    ],
    correctIndex: 0,
    explanation: "Prohibited areas allow no flight. This is the most restrictive type of special-use airspace."
  },
  {
    id: "a4", source: "Added", category: "airspace",
    question: "What is a Restricted Area (R-xxx) on a sectional chart?",
    options: [
      "An area where flight is always prohibited.",
      "An area with hazardous activities; permission needed from the controlling agency when active.",
      "A military training area with no restrictions on civilian aircraft."
    ],
    correctIndex: 1,
    explanation: "Restricted areas may contain hazardous activities. Permission from the controlling agency is needed when active."
  },
  {
    id: "a5", source: "Added", category: "airspace",
    question: "How is Class B airspace typically depicted on a sectional chart?",
    options: [
      "A solid blue line.",
      "A dashed magenta line.",
      "A segmented blue line."
    ],
    correctIndex: 0,
    explanation: "Class B airspace is depicted with solid blue lines and resembles an upside-down wedding cake."
  },
  {
    id: "a6", source: "Added", category: "airspace",
    question: "How is Class D airspace depicted on a sectional chart?",
    options: [
      "Solid magenta line.",
      "Dashed blue line (segmented).",
      "Solid blue line."
    ],
    correctIndex: 1,
    explanation: "Class D airspace is depicted with a segmented (dashed) blue line."
  },
  {
    id: "a7", source: "Added", category: "airspace",
    question: "A TFR (Temporary Flight Restriction) has been issued for a large sporting event. Can you fly your drone in the TFR area?",
    options: [
      "Yes, if you operate below 400 feet AGL.",
      "No — a TFR applies to all aircraft unless you have a Certificate of Waiver or Authorization.",
      "Yes, if you have a Part 107 certificate."
    ],
    correctIndex: 1,
    explanation: "TFRs apply to all aircraft. You may not fly in a TFR area without specific authorization."
  },
  {
    id: "a8", source: "Added", category: "airspace",
    question: "What type of chart marking indicates a Military Training Route (MTR)?",
    options: [
      "A gray line with VR or IR designations.",
      "A red shaded area.",
      "A blue circle around an airport."
    ],
    correctIndex: 0,
    explanation: "MTRs are shown as gray lines labeled with VR (Visual Routes) or IR (Instrument Routes) numbers."
  },
  {
    id: "a9", source: "Added", category: "airspace",
    question: "VR routes (e.g., VR1667) on a chart could present a hazard because:",
    options: [
      "They indicate restricted airspace closed to civilian aircraft.",
      "Military aircraft may operate at high speed from the surface to 1,500 feet AGL.",
      "They are areas of high commercial airline traffic."
    ],
    correctIndex: 1,
    explanation: "VR routes are Military Training Routes where military aircraft may fly fast and low, from the surface to 1,500 feet AGL."
  },
  {
    id: "a10", source: "Added", category: "airspace",
    question: "Shelf floors on a Class C or B airspace chart are typically shown in which unit?",
    options: ["Feet AGL.", "Feet MSL.", "Flight levels."],
    correctIndex: 1,
    explanation: "Airspace shelf floors and ceilings are normally shown in feet MSL, not AGL."
  },
  {
    id: "a11", source: "Added", category: "airspace",
    question: "What is an Alert Area on a sectional chart?",
    options: [
      "An area where no aircraft may fly.",
      "An area with high training volume or unusual activity requiring extra caution.",
      "An area with active military combat exercises."
    ],
    correctIndex: 1,
    explanation: "Alert areas indicate high training volume or unusual aerial activity. Extra caution is required."
  },
  {
    id: "a12", source: "Added", category: "airspace",
    question: "You are planning a flight near a Class E surface area designated for an airport. Do you need ATC authorization?",
    options: [
      "No — Class E never requires authorization.",
      "Yes — Class E surface areas at airports require prior ATC authorization under Part 107.",
      "Only if the airport has an operating control tower."
    ],
    correctIndex: 1,
    explanation: "Part 107 requires prior ATC authorization for Class E surface areas designated for airports."
  },
  {
    id: "a13", source: "Added", category: "airspace",
    question: "A Warning Area (W-xxx) on a chart is similar to a Restricted Area but is typically located where?",
    options: [
      "Over densely populated cities.",
      "Over international waters or beyond the U.S. coastline.",
      "At military bases inland."
    ],
    correctIndex: 1,
    explanation: "Warning areas are similar to restricted areas but are usually located over international waters."
  },
  {
    id: "a14", source: "Added", category: "airspace",
    question: "How should a Part 107 pilot determine if a MOA is currently active?",
    options: [
      "Check the chart legend for the controlling agency and contact them.",
      "MOAs are always active and must be avoided.",
      "No special action is needed — MOAs don't affect drones."
    ],
    correctIndex: 0,
    explanation: "The chart legend identifies the controlling agency for each MOA. Contact them to determine activity status."
  },
  {
    id: "a15", source: "Added", category: "airspace",
    question: "What is the difference between AGL and MSL?",
    options: [
      "AGL is measured from sea level; MSL is measured from ground level.",
      "AGL is measured from ground level; MSL is measured from mean sea level.",
      "They are the same measurement expressed differently."
    ],
    correctIndex: 1,
    explanation: "AGL (Above Ground Level) is height above the terrain. MSL (Mean Sea Level) is altitude referenced to sea level."
  },
  {
    id: "a16", source: "Added", category: "airspace",
    question: "Where should a Part 107 pilot check for Temporary Flight Restrictions (TFRs) before a flight?",
    options: [
      "The aircraft's operating manual.",
      "NOTAMs — available through sources like 1800WXBrief.com or the FAA NOTAM system.",
      "The local police department."
    ],
    correctIndex: 1,
    explanation: "TFRs are issued by NOTAM. Pilots should check NOTAMs through FAA sources before every flight."
  },
  {
    id: "a17", source: "Added", category: "airspace",
    question: "Class C airspace typically has a surface area and one or more shelf areas. What is the general shape?",
    options: [
      "A single cylinder from surface to 4,000 feet.",
      "An upside-down wedding cake with a surface area and outer shelves.",
      "A square box over the airport."
    ],
    correctIndex: 1,
    explanation: "Class C airspace has a surface area and shelf areas, forming a structure similar to an upside-down wedding cake."
  },
  {
    id: "a18", source: "Added", category: "airspace",
    question: "You want to fly your drone at 350 feet AGL directly over a 1,200-foot MSL airport that has Class D airspace. What do you need?",
    options: [
      "Nothing — Class D only requires authorization above 400 feet.",
      "Prior ATC authorization.",
      "A Certificate of Waiver from the FAA."
    ],
    correctIndex: 1,
    explanation: "Any Part 107 operation within Class D airspace requires prior ATC authorization, regardless of altitude."
  },
  {
    id: "a19", source: "Added", category: "airspace",
    question: "Lines of latitude on a sectional chart measure:",
    options: [
      "East and west of the Prime Meridian.",
      "North and south of the equator.",
      "Distance from the nearest airport."
    ],
    correctIndex: 1,
    explanation: "Lines of latitude (parallels) measure degrees north and south of the equator."
  },
  {
    id: "a20", source: "Added", category: "airspace",
    question: "Lines of longitude on a sectional chart measure:",
    options: [
      "North and south of the equator.",
      "East and west of the Prime Meridian.",
      "Altitude above sea level."
    ],
    correctIndex: 1,
    explanation: "Lines of longitude (meridians) measure degrees east and west of the Prime Meridian."
  },
  {
    id: "a21", source: "Added", category: "airspace",
    question: "You need to fly in Class B airspace. Under Part 107, what must you obtain first?",
    options: [
      "A special VFR clearance.",
      "Prior ATC authorization (e.g., via LAANC or DroneZone).",
      "An instrument rating."
    ],
    correctIndex: 1,
    explanation: "Prior ATC authorization is required for Part 107 operations in Class B airspace."
  },
  {
    id: "a22", source: "Added", category: "airspace",
    question: "What is LAANC?",
    options: [
      "A type of drone registration system.",
      "The Low Altitude Authorization and Notification Capability — a system for near-real-time airspace authorization.",
      "A weather reporting system for low altitudes."
    ],
    correctIndex: 1,
    explanation: "LAANC provides near-real-time airspace authorization for Part 107 operations in controlled airspace."
  },
  {
    id: "a23", source: "Added", category: "airspace",
    question: "An RPIC wants to operate in Class G airspace at 300 feet AGL with 4 miles visibility and proper cloud clearance. Is ATC authorization needed?",
    options: [
      "Yes — all airspace requires ATC authorization.",
      "No — Class G is uncontrolled and does not require ATC authorization.",
      "Only if within 5 miles of an airport."
    ],
    correctIndex: 1,
    explanation: "Class G is uncontrolled airspace. No ATC authorization is required for Part 107 operations."
  },
  {
    id: "a24", source: "Added", category: "airspace",
    question: "What does a magenta dashed line around an airport on a sectional chart typically indicate?",
    options: [
      "Class B airspace.",
      "Class E airspace beginning at the surface.",
      "Class D airspace."
    ],
    correctIndex: 1,
    explanation: "A magenta dashed line typically depicts a Class E surface area."
  },
  {
    id: "a25", source: "Added", category: "airspace",
    question: "What is a FRIA in the context of Remote ID?",
    options: [
      "A Flight Restriction Information Area.",
      "An FAA-Recognized Identification Area where drones without Remote ID may operate.",
      "A Federal Remote Identification Authority."
    ],
    correctIndex: 1,
    explanation: "FRIA = FAA-Recognized Identification Area. Drones without Remote ID equipment may fly within FRIA boundaries."
  },

  // ===== ADDITIONAL — OPS OVER PEOPLE & REMOTE ID =====
  {
    id: "op1", source: "Added", category: "ops-over-people",
    question: "Under Part 107, can you fly over non-participating people without meeting a Subpart D category?",
    options: [
      "Yes, if you are below 200 feet AGL.",
      "Yes, if the people are aware of the operation.",
      "No — you must meet a Subpart D category or a rule exception."
    ],
    correctIndex: 2,
    explanation: "You cannot operate over non-participating people unless they are under cover, in a vehicle, or the operation meets a Subpart D category."
  },
  {
    id: "op2", source: "Added", category: "ops-over-people",
    question: "What is the kinetic energy threshold for Category 2 operations over people?",
    options: ["11 foot-pounds.", "25 foot-pounds.", "50 foot-pounds."],
    correctIndex: 0,
    explanation: "Category 2 requires the aircraft not to cause injury at or above 11 foot-pounds kinetic energy upon impact."
  },
  {
    id: "op3", source: "Added", category: "ops-over-people",
    question: "Can a Category 3 drone be used for sustained flight over an open-air assembly of people?",
    options: [
      "Yes, with a DoC.",
      "No — Category 3 cannot operate over open-air assemblies.",
      "Yes, if the RPIC has a waiver."
    ],
    correctIndex: 1,
    explanation: "Category 3 specifically prohibits sustained flight over open-air assemblies of people."
  },
  {
    id: "op4", source: "Added", category: "ops-over-people",
    question: "What is a Means of Compliance (MoC) in the context of operations over people?",
    options: [
      "The method used to demonstrate the aircraft meets Category 2 or 3 injury-performance requirements.",
      "The pilot's operating checklist for flying over crowds.",
      "A type of insurance required for commercial drone operations."
    ],
    correctIndex: 0,
    explanation: "A Means of Compliance is the method used to show the aircraft meets the required injury-performance thresholds."
  },
  {
    id: "op5", source: "Added", category: "ops-over-people",
    question: "If an FAA-accepted Declaration of Compliance is rescinded, what happens?",
    options: [
      "Nothing — the aircraft can continue operating under the old DoC.",
      "The aircraft cannot be operated under that rescinded DoC while the rescission remains in effect.",
      "The pilot has 30 days to obtain a new DoC."
    ],
    correctIndex: 1,
    explanation: "If a DoC is rescinded, the aircraft cannot be operated under that category while the rescission is in effect."
  },
  {
    id: "op6", source: "Added", category: "ops-over-people",
    question: "Where must a small UA's serial number be listed when using standard Remote ID or a broadcast module?",
    options: [
      "On the Declaration of Compliance.",
      "On the Certificate of Aircraft Registration.",
      "On the pilot's Remote Pilot Certificate."
    ],
    correctIndex: 1,
    explanation: "The serial number must be listed on the Certificate of Aircraft Registration."
  },
  {
    id: "op7", source: "Added", category: "ops-over-people",
    question: "A drone pilot is operating a standard Remote ID-equipped drone in a FRIA. Must the pilot remain inside the FRIA boundaries?",
    options: [
      "No — standard Remote ID drones can fly anywhere.",
      "Yes — both the pilot and drone must remain inside the FRIA during the operation.",
      "Only the drone must stay inside; the pilot can be outside."
    ],
    correctIndex: 0,
    explanation: "A drone with standard Remote ID can fly anywhere (subject to other rules). FRIAs are specifically for drones WITHOUT Remote ID equipment."
  },

  // ===== ADDITIONAL — MIXED REGULATIONS & OPERATIONS =====
  {
    id: "m1", source: "Added", category: "regulations",
    question: "Is a flight plan required for Part 107 operations?",
    options: [
      "Yes — a flight plan must be filed with the FAA.",
      "No — Part 107 does not require filing a flight plan.",
      "Only for operations in controlled airspace."
    ],
    correctIndex: 1,
    explanation: "Part 107 does not require filing a flight plan."
  },
  {
    id: "m2", source: "Added", category: "regulations",
    question: "Can a Part 107 RPIC operate a small UAS over people who are inside a stationary covered vehicle?",
    options: [
      "No — all operations over people require a Subpart D category.",
      "Yes — people inside a stationary vehicle that provides reasonable protection are excepted from the rule.",
      "Only with a waiver."
    ],
    correctIndex: 1,
    explanation: "People under covered structures or inside stationary vehicles that offer reasonable protection are excepted from the operations-over-people rule."
  },
  {
    id: "m3", source: "Added", category: "regulations",
    question: "What must a Part 107 pilot do before each flight?",
    options: [
      "File a NOTAM.",
      "Assess the operating environment, check aircraft condition, and brief crew members.",
      "Obtain a weather briefing from ATC."
    ],
    correctIndex: 1,
    explanation: "Before each flight, assess the environment (weather, airspace, hazards), verify aircraft condition, and brief the crew."
  },
  {
    id: "m4", source: "Added", category: "regulations",
    question: "Under Part 107, what is the maximum altitude for a small UAS not near a structure?",
    options: ["200 feet AGL.", "400 feet AGL.", "500 feet AGL."],
    correctIndex: 1,
    explanation: "The normal maximum altitude under Part 107 is 400 feet AGL."
  },
  {
    id: "m5", source: "Added", category: "regulations",
    question: "Where must a small UA's registration number be displayed?",
    options: [
      "On the pilot's certificate.",
      "On the aircraft exterior or in a compartment accessible without tools.",
      "On the ground control station."
    ],
    correctIndex: 1,
    explanation: "The registration number must be on the aircraft exterior or accessible without tools (such as a battery compartment)."
  },
  {
    id: "m6", source: "Added", category: "regulations",
    question: "Can a Part 107 RPIC operate a small UAS beyond visual line of sight using only telemetry?",
    options: [
      "Yes, with a visual observer.",
      "No — VLOS must be maintained unless operating under an approved waiver.",
      "Yes, if operating in Class G airspace."
    ],
    correctIndex: 1,
    explanation: "VLOS must be maintained at all times. Beyond VLOS operations require an approved waiver."
  },
  {
    id: "m7", source: "Added", category: "airspace",
    question: "What is Class A airspace, and do Part 107 operations occur there?",
    options: [
      "Class A extends from 18,000 feet MSL to 60,000 feet; Part 107 operations do not occur there.",
      "Class A is at the surface around large airports; Part 107 pilots need ATC authorization.",
      "Class A is uncontrolled airspace above 10,000 feet."
    ],
    correctIndex: 0,
    explanation: "Class A airspace extends from 18,000 feet MSL to FL600. Part 107 drones operate well below this altitude."
  },
  {
    id: "m8", source: "Added", category: "regulations",
    question: "A small UAS has a total takeoff weight of 58 pounds. Can it be operated under Part 107?",
    options: [
      "Yes — Part 107 covers aircraft up to 60 pounds.",
      "No — Part 107 is limited to aircraft under 55 pounds at takeoff.",
      "Yes — with a special waiver for heavier aircraft."
    ],
    correctIndex: 1,
    explanation: "Part 107 applies to small UAS weighing less than 55 pounds at takeoff, including everything attached."
  },
  {
    id: "m9", source: "Added", category: "regulations",
    question: "Can a Part 107 RPIC operate a small UAS carelessly or recklessly?",
    options: [
      "Careless operation is acceptable if no one is hurt.",
      "No — careless or reckless operation is prohibited.",
      "Only in remote areas."
    ],
    correctIndex: 1,
    explanation: "Part 107 prohibits operating a small UAS in a careless or reckless manner so as to endanger life or property."
  },
  {
    id: "m10", source: "Added", category: "regulations",
    question: "Under Part 107, when may a remote pilot deviate from the regulations?",
    options: [
      "Whenever the RPIC determines it is safe.",
      "Only during an in-flight emergency that requires immediate action.",
      "When operating over unpopulated areas."
    ],
    correctIndex: 1,
    explanation: "The RPIC may deviate from Part 107 rules only to the extent necessary to meet an in-flight emergency."
  },

  // ===== EXAM FORMAT, BLUEPRINT & STRATEGY QUESTIONS =====
  {
    id: "s1", source: "Added", category: "regulations",
    question: "How many total questions are presented on the UAG knowledge test?",
    options: ["60.", "65.", "70."],
    correctIndex: 1,
    explanation: "The UAG test has 65 total questions: 60 scored and 5 unscored pilot/validation questions. You won't know which are unscored."
  },
  {
    id: "s2", source: "Added", category: "regulations",
    question: "What percentage of the UAG exam is devoted to Regulations (ACS Area UA.I)?",
    options: ["25%.", "36%.", "48%."],
    correctIndex: 2,
    explanation: "Regulations is 48% of the exam — nearly half. It's by far the highest-weight content area."
  },
  {
    id: "s3", source: "Added", category: "regulations",
    question: "Under the current UAG bulletin, approximately how many scored questions come from Regulations and Airspace combined?",
    options: ["About 25 of 60.", "About 41 of 60.", "About 50 of 60."],
    correctIndex: 1,
    explanation: "Regulations (48% = ~29) + Airspace (20% = ~12) = about 41 of 60 scored questions."
  },
  {
    id: "s4", source: "Added", category: "ops-over-people",
    question: "According to FAA quarterly statistics, which ACS code has been the most frequently missed on the UAG exam for multiple consecutive quarters?",
    options: [
      "UA.I.E.K13 — Declaration of Compliance (DoC).",
      "UA.II.A.K1 — Airspace classification.",
      "UA.III.B.K1 — Weather sources."
    ],
    correctIndex: 0,
    explanation: "DoC questions (UA.I.E.K13) have been the single most-missed item for 5+ consecutive quarters (2Q24 through 2Q25). Study Categories 1-4, MoC, DoC, and who submits them."
  },
  {
    id: "s5", source: "Added", category: "ops-over-people",
    question: "Who submits a Declaration of Compliance (DoC) to the FAA?",
    options: [
      "The remote pilot in command.",
      "The manufacturer, designer, or modifier of the aircraft.",
      "The FAA's Unmanned Aircraft Systems Office."
    ],
    correctIndex: 1,
    explanation: "The manufacturer/designer/modifier submits the DoC. The pilot's job is to verify the aircraft is on an FAA-accepted DoC and properly labeled."
  },
  {
    id: "s6", source: "Added", category: "ops-over-people",
    question: "What distinguishes Category 2 from Category 3 for operations over people?",
    options: [
      "Category 2 uses 11 ft-lb threshold; Category 3 uses 25 ft-lb and cannot fly over open-air assemblies.",
      "Category 2 requires airworthiness certification; Category 3 does not.",
      "Category 2 is for aircraft under 1 lb; Category 3 is for aircraft under 5 lb."
    ],
    correctIndex: 0,
    explanation: "Category 2 has an 11 ft-lb kinetic energy threshold, Category 3 has 25 ft-lb. Category 3 adds the restriction that it cannot fly over open-air assemblies."
  },
  {
    id: "s7", source: "Added", category: "ops-over-people",
    question: "A drone manufacturer has NOT submitted a Declaration of Compliance for their aircraft. Under what operations-over-people category can this drone operate?",
    options: [
      "Category 1, if it weighs 0.55 lb or less and has no exposed laceration-risk rotating parts.",
      "Category 2, if the pilot verifies it meets the 11 ft-lb threshold.",
      "Category 3, with an RPIC waiver."
    ],
    correctIndex: 0,
    explanation: "Category 1 doesn't require a DoC — just that the aircraft weighs ≤0.55 lb and has no exposed rotating parts that could lacerate skin. Categories 2 and 3 require an FAA-accepted DoC."
  },
  {
    id: "s8", source: "Added", category: "regulations",
    question: "What changed about the UAG test with the FAA's August 2025 announcement?",
    options: [
      "The subject matter changed significantly and new topics were added.",
      "The test format changed from multiple choice to practical demonstration.",
      "The subject matter didn't change, but the weighting/emphasis across content areas was updated."
    ],
    correctIndex: 2,
    explanation: "The FAA said the old blueprint would be obsolete after September 29, 2025. The subject matter stayed the same (use the ACS), but the emphasis/weighting changed (use the new bulletin)."
  },
  {
    id: "s9", source: "Added", category: "airspace",
    question: "What is the FAA testing supplement (FAA-CT-8080-2H)?",
    options: [
      "A study guide sold by the FAA for exam preparation.",
      "A booklet provided at the testing center containing charts, figures, legends, and diagrams referenced by figure-based exam questions.",
      "A software tool used by testing centers to administer the exam."
    ],
    correctIndex: 1,
    explanation: "The FAA testing supplement contains sectional chart excerpts, airport diagrams, legends, and other figures. It's provided at the testing center and is essential for answering chart-based questions."
  },
  {
    id: "s10", source: "Added", category: "airspace",
    question: "On a sectional chart, what does the fraction '80/25' inside a Class B boundary mean?",
    options: [
      "The airspace is 80 nautical miles wide and 25 nautical miles tall.",
      "The ceiling is 8,000 ft MSL and the floor is 2,500 ft MSL.",
      "The airspace is active from 0800 to 2500 Zulu."
    ],
    correctIndex: 1,
    explanation: "Class B shelf fractions show ceiling/floor in hundreds of feet MSL. 80/25 means ceiling at 8,000 ft MSL, floor at 2,500 ft MSL."
  },
  {
    id: "s11", source: "Added", category: "regulations",
    question: "After passing the UAG knowledge test, what must you do in IACRA?",
    options: [
      "File FAA Form 8710-13 to apply for your Remote Pilot Certificate.",
      "Schedule a practical flight test.",
      "Submit proof of drone insurance."
    ],
    correctIndex: 0,
    explanation: "After passing, return to IACRA and file FAA Form 8710-13 to complete your Remote Pilot Certificate application."
  },
  {
    id: "s12", source: "Added", category: "ops-over-people",
    question: "What are the required Remote ID broadcast elements?",
    options: [
      "Only the pilot's name and certificate number.",
      "Drone ID, location, altitude, velocity, control station location, time mark, and emergency status.",
      "Only GPS coordinates and battery level."
    ],
    correctIndex: 1,
    explanation: "Standard Remote ID must broadcast: drone ID (serial number or session ID), drone location, altitude, velocity, control station location, time mark, and emergency status."
  }
];

const QUESTION_CATEGORIES = {
  "regulations": "Regulations",
  "airspace": "Airspace & Charts",
  "weather-sources": "Weather Sources",
  "weather-effects": "Weather & Performance",
  "loading": "Aircraft Loading",
  "emergency": "Emergency Procedures",
  "crm": "CRM",
  "radio": "Radio Communications",
  "performance": "Aircraft Performance",
  "physiology": "Physiological Factors",
  "adm": "Decision-Making & ADM",
  "airports": "Airport Operations",
  "maintenance": "Maintenance & Preflight",
  "ops-over-people": "Ops Over People & Remote ID"
};
