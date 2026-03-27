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
