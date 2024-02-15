// {
//   Q: "",
//   Answers: [
//     "",
//     "",
//     "",
//     ""
//   ],
//   A: 0, //A
// },

// FOR TESTING //
const chapter0 = {
  ChapterNumber: 0,
  ChapterTitle: "Format Test",
  Questions: [
    {
      Q: "Which of the following should a personal trainer do during the initial meeting with a new client?\n\nI. Perform a submaximal bike test to estimate the client's V̇O₂ max\n\nII. Have the client complete a medical history form.\n\nIII. Evaluate the client's level of exercise readiness.\n\nIV. Discuss the client's goals for his or her exercise program.",
      Answers: [
        "I and III only",
        "This is quite a long answer intended to make sure the formatting is fitting correctly and even with a long string.",
        "Muscles",
        "Bones",
      ],
      A: 0, //A
    },
    {
      Q: "",
      Answers: ["", "", "", ""],
      A: 0, //A
    },
    {
      Q: "",
      Answers: ["", "", "", ""],
      A: 0, //A
    },
  ],
};

const chapter1 = {
  ChapterNumber: 1,
  ChapterTitle:
    "Structure and Function of the Muscular, Nervous and Skeletal Systems",
  Questions: [
    {
      Q: "Aerobic ATP production within the cell occurs in which of the following cellular organelles?",
      Answers: [
        "mitochondria",
        "sarcoplasmic reticulum",
        "myofibril",
        "T-tubule",
      ],
      A: 0, //A
    },
    {
      Q: "Which of the following is the thick myofilament?",
      Answers: ["actin", "troponin", "myosin", "tropomyosin"],
      A: 2, //C
    },
    {
      Q: "Which of the following types of muscle action occurs when the muscle lengthens despite attempting to shorten?",
      Answers: ["concentric", "eccentric", "isometric", "isokinetic"],
      A: 1, //B
    },
    {
      Q: "Which of the following muscle fiber types has moderate oxidative and anaerobic capacity?",
      Answers: ["SO", "FOG", "FG", "slow-twitch"],
      A: 1, //B
    },
    {
      Q: "Which of the following branches of the nervous system is responsible for activating skeletal muscles?",
      Answers: ["sensory", "autonomic", "afferent", "somatic"],
      A: 3, //D
    },
  ],
};

const chapter2 = {
  ChapterNumber: 2,
  ChapterTitle: "Cardiorespiratory System and Gas Exchange",
  Questions: [
    {
      Q: "Which of the following is the correct sequence of structures that the blood travels through?",
      Answers: [
        "superior vena cava, right atrium, left atrium, left ventricle, aorta",
        "inferior vena cava, right atrium, right ventricle, pulmonary vein, left atrium",
        "pulmonary vein, pulmonary artery, left ventricle, left atrium, aorta",
        "superior vena cava, aorta, left atrium, right ventricle",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following are components of the Fick equation for oxygen uptake (V̇O₂)?\n\nI. heart rate\n\nII.systolic pressure\n\nIII. stroke volume\n\nIV. diastolic pressure",
      Answers: [
        "I and III only",
        "I and IV only",
        "II and III only",
        "II and IV only",
      ],
      A: 0, //A
    },
    {
      Q: "Gas exchange in the lungs occurs at which of the following sites?",
      Answers: ["capillary wall", "basement membrane", "bronchi", "alveoli"],
      A: 3, //D
    },
    {
      Q: "Cardiac output (Q̇) is a product of stroke volume (SV) and heart rate (HR). Which of the following equations represents stroke volume?",
      Answers: ["V̇O₂ - HR", "V̇O₂ - SV", "EDV - HR", "EDV - ESV"],
      A: 3, //D
    },
    {
      Q: "The heart's conduction pathway begins at which of the following sites?",
      Answers: ["AV node", "Purkinje fibers", "right ventrical", "SA node"],
      A: 3, //D
    },
  ],
};

const chapter3 = {
  ChapterNumber: 3,
  ChapterTitle: "Bioenergetics",
  Questions: [
    {
      Q: "Which of the following describes the process of fast glycolysis?\n\nI. a breakdown of glycogen\n\nII. its end product is converted to lactate\n\nIII. a breakdown of glucose\n\nIV. its end product is sent to the Krebs cycle",
      Answers: [
        "I, II, and III only",
        "I, II, and IV only",
        "II, III, and IV only",
        "I, III, and IV only",
      ],
      A: 0, //A
    },
    {
      Q: "Which of the following describes what a client would be doing to allow the oxidative system to contribute the greatest percentage toward total ATP production?",
      Answers: ["sitting quietly", "walking", "jogging", "sprinting"],
      A: 0, //A
    },
    {
      Q: "Which of the following energy systems is capable of producing the greatest amount (capacity) of ATP?",
      Answers: [
        "phosphagen",
        "fast glycolysis",
        "slow glycolysis",
        "oxidative",
      ],
      A: 3, //D
    },
    {
      Q: "Which of the following energy systems is capable of producing ATP at the greatest rate?",
      Answers: [
        "phosphagen",
        "fast glycolysis",
        "slow glycolysis",
        "oxidative",
      ],
      A: 0, //A
    },
  ],
};

const chapter4 = {
  ChapterNumber: 4,
  ChapterTitle: "Biomechanics",
  Questions: [
    {
      Q: "Which of the following exercise modes requires the client to produce the most power?",
      Answers: [
        "a 60kg weight lifted in 1 second",
        "a 60kg weight lifted in 0.1 seconds",
        "a 30 kg weight lifted in 1 second",
        "a 30 kg weight lifted in 0.1 seconds",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following is the best example of open chain exercise?",
      Answers: ["standing barbell curl", "push-up", "squat", "pull-up"],
      A: 0, //A
    },
    {
      Q: "Which of the following changes will increase concentric force production?",
      Answers: [
        "decreased rate coding",
        "decreased leverage over the joint range of motion",
        "increased contraction velocity",
        "increased physiological cross-sectional area",
      ],
      A: 3, //D
    },
    {
      Q: "Which of the following best describes the muscular control of the downward movement phase of the squat exercise?",
      Answers: [
        "the hip extensors, knee extensors, and ankle plantarflexors acting concentrically",
        "the hip flexors, knee flexors, and ankle dorsiflexors acting concentrically",
        "the hip extensors, knee extensors, and ankle plantarflexors acting eccentrically",
        "the hip flexors, knee flexors, and ankle dorsiflexors acting eccentrically",
      ],
      A: 2, //C
    },
  ],
};

const chapter5 = {
  ChapterNumber: 5,
  ChapterTitle: "Resistance Training Adaptations",
  Questions: [
    {
      Q: "Which of the following is most likely to occur during muscular fatigue?\n\nI. motor unit recruitment increases \n\nII. rate coding increases \n\nIII. muscle pH decreases \n\nIV. ATP stores increase",
      Answers: [
        "I and II only",
        "II and IV only",
        "I and IV only",
        "II and III only",
      ],
      A: 0, //A
    },
    {
      Q: "Which of the following is primarily responsible for activation of fast-twitch motor units?",
      Answers: [
        "increased speed demands",
        "increased force demands",
        "decreased speed demands",
        "decreased force demands",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following are the most influential training factors promoting increased hormonal responses?",
      Answers: [
        "higher volume, shorter rest periods, smaller muscle mass exercises",
        "higher volume, longer rest periods, larger muscle mass exercises",
        "higher volume, shorter rest periods, larger muscle mass exercises",
        "lower volume, shorter rest periods, larger muscle mass exercises",
      ],
      A: 2, //C
    },
    {
      Q: "Resistance exercise augments aerobic endurance performance by which of the following?",
      Answers: [
        "increased V̇O₂",
        "increased oxidative enzyme activity",
        "increased capillary density",
        "increased muscular strength and power",
      ],
      A: 3, //D
    },
  ],
};

const chapter6 = {
  ChapterNumber: 6,
  ChapterTitle:
    "Physiological Responses and Adaptations to Aerobic Endurance Training",
  Questions: [
    {
      Q: "A 35-year-old female began an exercise program four months ago in which she has been running on the treadmill four days per week. Which of the following describes the adaptations that are most likely to occur with this program?",
      Answers: [
        "an increase in maximal exercise HR and a decrease in capillary density",
        "an increase in resting SBP and decrease in maximal a-vO₂ difference",
        "an increase in mitochondrial density and a decrease in submaximal HR",
        "an increase in blood volume and a decrease in insulin sensitivity",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following changes in trained skeletal muscle is an adaptation to chronic aerobic exercise?",
      Answers: [
        "decreased mitochondria density",
        "increased concentration of aerobic enzymes",
        "increased cross-sectional area of type IIa fibers",
        "decreased capillary density",
      ],
      A: 1, //B,
    },
    {
      Q: "Which of the following is most likely to occur as a result of aerobic endurance overtraining?",
      Answers: [
        "decreased V̇O₂ max",
        "increased muscle glycogen stores",
        "increased body fat percentage",
        "decreased blood volume",
      ],
      A: 0, //A
    },
    {
      Q: "Which of the following measures decrease during an acute exercise bout?",
      Answers: [
        "rate-pressure product, stroke volume, mean arterial pressure, hematocrit",
        "oxygen consumption, a-vO₂ difference, systolic blood pressure, RER",
        "blood pH, blood flow to splanchnic region, plasma volume, insulin",
        "catecholamines, glucagon, stroke volume, tidal volume",
      ],
      A: 2, //C
    },
  ],
};

const chapter7 = {
  ChapterNumber: 7,
  ChapterTitle: "Nutrition in the Personal Training Setting",
  Questions: [
    {
      Q: "Taking into consideration REE, which of the following is the approximate daily caloric need of a 25-year-old, 125-pound (57 kg) female client who is moderately active?",
      Answers: [
        "1,333 kilocalories",
        "1,600 kilocalories",
        "2,000 kilocalories",
        "2,263 kilocalories",
      ],
      A: 3, //D
    },
    {
      Q: "An active male client lost 3 pounds (1.4 kg) during practice. How much fluid should he consume to replace sweat losses?",
      Answers: [
        "8 ounces per pound loss",
        "60 ounces",
        "16 ounces per pound loss",
        "40 ounces",
      ],
      A: 1, //B
    },
    {
      Q: "Approximately how much carbohydrate should an elite male cross country runner who weighs 150 pounds (68 kg) consume per day?",
      Answers: ["136 g", "340 g", "680 g", "1,360 g"],
      A: 2, //C
    },
    {
      Q: "Which of the following is the recommended minimum protein intake for an active client?",
      Answers: [
        "1.0 g/kg body weight",
        "0.83 g/kg body weight",
        "1.2 g/kg body weight",
        "2.0 g/kg body weight",
      ],
      A: 2, //C
    },
  ],
};

const chapter8 = {
  ChapterNumber: 8,
  ChapterTitle: "Exercise Psychology for the Personal Trainer",
  Questions: [
    {
      Q: "All of the following describe how exercise provides cognitive benefits EXCEPT",
      Answers: [
        "enhanced oxygen supply to the brain",
        "greater genetic variation",
        "improved neurotransmitter function",
        "heightened neural efficiency",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following is an example of an outcome goal?",
      Answers: [
        '"I want to do 60 sit-ups in 1 minute."',
        '"I want to do my best not to eat before going to bed tonight."',
        '"I want to be able to bench press more than my friend."',
        '"I want to lose 10 pounds of body fat."',
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following is an example of negative reinforcement used by a personal trainer with a client who just completed a month of consistently walking three times per week?",
      Answers: [
        `"Good job! Next month, you do not have to take the time to fill out your own walking workout card - I'll do it for you!"`,
        `"Good job! You won Walker of the Month!"`,
        `"Walking? I thought we talked about you riding the bike instead of walking!"`,
        `"Three times per week? It was supposed to be four times per week, so next month you won't be able to keep working out during your lunch hour."`,
      ],
      A: 0, //A
    },
    {
      Q: "On which of the following points along the self-determination continuum is a client who is highly intrinsically motivated?",
      Answers: ["introjected", "integrated", "identified", "amotivated"],
      A: 1, //B
    },
  ],
};

const chapter9 = {
  ChapterNumber: 9,
  ChapterTitle: "Client Consultation and Health Appraisal",
  Questions: [
    {
      Q: `Which of the following should a personal trainer do during the initial meeting with a new client?\n\nI. Perform a submaximal bike test to estimate the client's V̇O₂ max\n\nII. Have the client complete a medical history form.\n\nIII. Evaluate the client's level of exercise readiness.\n\nIV. Discuss the client's goals for his or her exercise program.`,
      Answers: [
        "I and II only",
        "III and IV only",
        "I, II, and III only",
        "II, III, and IV only",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following should be included in an informed consent?\n\nI. a summary of the client's testing results\n\nII. benefits associated with participation\n\nIII. the client's exercise goals\n\nIV. responsibilities of the client",
      Answers: [
        "I and III only",
        "II and IV only",
        "I, II, and III only",
        "II, III, and IV only",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following factors discovered at a preparticipation health appraisal screening reveal a client's risk of coronary artery disease?\n\nI. HDL: 33 mg/dl\n\nII. family history: uncle died of stroke at age 42\n\nIII. blood pressure: 128/88 mmHg; measured twice\n\nIV. quit smoking 60 days ago",
      Answers: [
        "I and III only",
        "II and IV only",
        "I and IV only",
        "II and III only",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following clients is in the highest risk stratification for coronary artery disease?",
      Answers: [
        "44-year-old male whose father died of a heart attack at 60 years of age",
        "46-year-old male with a serum cholesterol reading of 205 mg/dl",
        "48-year-old female with a BMI of 30",
        "50-year-old who has COPD",
      ],
      A: 3, //D
    },
    {
      Q: "Which of the following conditions would indicate an increased risk for sudden cardiac death?\n\nI. disability from heart disease in a close relative >50 years of age\n\nII. prior recognition of a heart murmur\n\nIII. sedentary lifestyle\n\nIV. unexplained shortness of breath and fatigue associated with exercise",
      Answers: [
        "I and III only",
        "II and IV only",
        "I and IV only",
        "II and III only",
      ],
      A: 1, //B
    },
  ],
};

const chapter10 = {
  ChapterNumber: 10,
  ChapterTitle: "Fitness Assessment Selection and Administration",
  Questions: [
    {
      Q: "Which one of the following tests used to estimate V̇O₂ max would likely be inappropriate for a 43-year-old sedentary male client who has not yet been cleared by his family physician for participation in a supervised exercise program?",
      Answers: [
        "Ȧstrand-Ryhming cycle ergometer test",
        "YMCA cycle ergometer test",
        "Rockport walking test",
        "1.5-mile (2.4 km) run",
      ],
      A: 3, //D
    },
    {
      Q: "A personal trainer performs hydrostatic weighing for a client. The client then proceeds to have the same hydrostatic weighing test performed under the same conditions a day later, but the body fat percentage is 10 points higher. In this case, the hydrostatic weighing performed by the personal trainer is",
      Answers: [
        "reliable.",
        "valid.",
        "valid and reliable.",
        "neither valid nor reliable.",
      ],
      A: 3, //D
    },
    {
      Q: "A new client has completed a YMCA cycle ergometer test, but upon completion of the test her personal trainer notices the machine was not properly calibrated prior to testing. Which of the following was affected by a lack of calibration?",
      Answers: [
        "objectivity",
        "intrarater reliability",
        "the standard error of measurement",
        "interrater objectivity",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following is a recommended sequence of tests that promotes the most accurate results when assessing general fitness?\n\nI. Rockport walking test\n\nII. sit-and-reach test\n\nIII. push-up test\n\nIV. skinfold measurements",
      Answers: [
        "I, II, II, IV",
        "IV, III, II, I",
        "I, III, II, IV",
        "IV, II, III, I",
      ],
      A: 3, //D
    },
  ],
};

const chapter11 = {
  ChapterNumber: 11,
  ChapterTitle: "Fitness Testing Protocols and Norms",
  Questions: [
    {
      Q: "A 40-year-old female client's resting blood pressure was 115/72 during the initial assessment. When measuring her blood pressure one month later, to what level of mercury (Hg) should the bladder be inflated?",
      Answers: ["115 mm", "125 mm", "135 mm", "150 mm"],
      A: 2, //C
    },
    {
      Q: "All of the following skinfold sites are appropriate for performing a three-site skinfold for a 45-year-old male client EXCEPT",
      Answers: ["chest.", "suprailium.", "abdomen.", "thigh."],
      A: 1, //B
    },
    {
      Q: "Calculate the estimated V̇O₂ max value for a 38-year-old male client who weighs 88 kg and ran 1.5 miles in 13:30.",
      Answers: [
        "34.5 ml • kg⁻¹ • min⁻¹",
        "36.2 ml • kg⁻¹ • min⁻¹",
        "39.9 ml • kg⁻¹ • min⁻¹",
        "41.5 ml • kg⁻¹ • min⁻¹",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following is an assessment of local muscular endurance for a 38-year-old female client?",
      Answers: [
        "bench press 35 pounds at 60 beats/min until failure",
        "12-minute run/walk",
        "Ȧstrand-Ryhming cycle ergometer test",
        "YMCA step test",
      ],
      A: 0, //A
    },
  ],
};

const chapter12 = {
  ChapterNumber: 12,
  ChapterTitle: "Flexibility, Body Weight, and Stability Ball Exercises",
  Questions: [
    {
      Q: "All of the following are appropriate activities to use as a warm-up EXCEPT",
      Answers: [
        "stationary cycling.",
        "jumping rope.",
        "dynamic flexibility.",
        "jogging.",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following pre-exercise activities has the HIGHEST transference to athletic performance?",
      Answers: [
        "PNF stretching",
        "specific warm-up",
        "static stretching",
        "general warm-up",
      ],
      A: 1, //B
    },
    {
      Q: "Incorporating stability ball training into the strength and conditioning programs of athletes has resulted in which of the following findings?\n\nI. improved transference to athletic performance\n\nII. negligible transference to athletic performance\n\nIII. enhanced core stability\n\nIV. reduced core stability",
      Answers: [
        "I and III only",
        "II and III only",
        "II and IV only",
        "I and IV only",
      ],
      A: 1, //B
    },
    {
      Q: "All of the following have been shown to be an advantage of stability ball training EXCEPT",
      Answers: [
        "reduced injury risk.",
        "increased heart rate response.",
        "enhanced maximal strength.",
        "improved performance on unstable surfaces.",
      ],
      A: 2, //C
    },
  ],
};

const chapter13 = {
  ChapterNumber: 13,
  ChapterTitle: "Resistance Training Exercise Techniques",
  Questions: [
    {
      Q: "Which of the following lower-body exercises is a single-joint exercise?",
      Answers: [
        "back squat",
        "front squat",
        "leg (knee) extension",
        "forward lunge",
      ],
      A: 2, //C
    },
    {
      Q: "All of the following exercises require one or more spotters EXCEPT",
      Answers: [
        "lying supine triceps extension.",
        "biceps curl (barbell).",
        "flat barbell bench press.",
        "back squat.",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following is the PRIMARY reason for using proper footwear while resistance training?",
      Answers: [
        "etiquette",
        "technique improvement",
        "safety",
        "equipment maintenance",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following handgrips is used in performing a power snatch exercise?",
      Answers: [
        "pronated with closed grip",
        "supinated with closed grip",
        "pronated with hook grip",
        "supinated with hook grip",
      ],
      A: 0, //A
    },
  ],
};

const chapter14 = {
  ChapterNumber: 14,
  ChapterTitle: "Cardiovascular Training Methods",
  Questions: [
    {
      Q: "Which of the following is correct regarding the amount of fluid that should be ingested for every pound of body weight lost during exercise?",
      Answers: ["one cup", "one gallon", "10 to 14 ounces", "20 to 24 ounces"],
      A: 3, //D
    },
    {
      Q: "Which of the following is the first action to perform when using a treadmill?",
      Answers: [
        "set the treadmill incline to 0°",
        "hold on to the handrails while straddling the belt",
        "walk/run toward the front part of the treadmill deck",
        "turn on the machine to a speed of no more than 1 mile per hour (0.6 km/h)",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following instructions should be given to a client for using a stair climber?",
      Answers: [
        `"Place your entire foot on the pedal to start, but allow the heels to lift off as each pedal rises."`,
        `"Lean forward slightly, especially as the workout becomes harder."`,
        `"Lock out the knees at the bottom of each step."`,
        `"Hold the handrails for balance if necessary."`,
      ],
      A: 3, //C
    },
    {
      Q: "Which of the following describes correct body position on a stationary bicycle?",
      Answers: [
        "With the ball of the foot on the upward pedal, the knee is above the height of the hips.",
        "With the heel of the foot on the downward pedal, the leg is straight.",
        "With the heel of the foot on the upward pedal, the knee is even with height of the hips.",
        "With the ball of the foot on the downward pedal, the leg is straight.",
      ],
      A: 1, //B
    },
  ],
};

const chapter15 = {
  ChapterNumber: 15,
  ChapterTitle: "Resistance Training Program Design",
  Questions: [
    {
      Q: "Which of the following exercise orders is recommended when using a push/pull exercise arrangement method?",
      Answers: [
        "bench press, shoulder press, lying triceps extension, biceps curl, and bent-over row",
        "shoulder press, biceps curl, lying triceps extension, bench press, bent-over row",
        "bent-over row, shoulder press, bench press, biceps curl, lying triceps extension",
        "bench press, bent-over row, shoulder press, biceps curl, lying triceps extension",
      ],
      A: 3, //D
    },
    {
      Q: `Which of the following is the load for the bench press exercise on a "moderately light day" if the client is performing sets of five repetitions and his 1RM is 200 pounds (91 kg)?`,
      Answers: [
        "174 to 165 pounds (79 to 75 kg)",
        "113 to 122 pounds (51 to 56 kg)",
        "157 to 148 pounds (71 to 67 kg)",
        "139 to 131 pounds (63 to 59 kg)",
      ],
      A: 3, //D
    },
    {
      Q: "Which of the following programs is ideal for an intermediate client targeting muscular strength with her training program?",
      Answers: [
        "3 sets of 10 repetitions",
        "5 sets of 15 repetitions",
        "5 sets of 5 repetitions",
        "1 set of 4 repetitions",
      ],
      A: 2, //C
    },
    {
      Q: "An intermediately-trained client was able to perform 17 repetitions during a 15RM test of the bench press exercise. Which of the following relative load adjustments would allow the client to achieve the desired 15 repetitions?",
      Answers: ["+5%", "+10%", "-10%", "-5%"],
      A: 0, //A
    },
    {
      Q: "Which of the following rest interval ranges is used for muscular hypertrophy training?",
      Answers: [
        "10 to 20 seconds",
        "30 to 90 seconds",
        "2 to 3 minutes",
        "4 to 6 minutes",
      ],
      A: 1, //B
    },
  ],
};

const chapter16 = {
  ChapterNumber: 16,
  ChapterTitle: "Aerobic Endurance Training Program Design",
  Questions: [
    {
      Q: "A client is preparing for his first half-marathon and wants to complete the 13.1-mile (21 km) distance in 2 hours. Which of the following would be an appropriate long slow distance workout?",
      Answers: [
        "cycling 13.1 miles (21 km) at a pace of 7 miles per hour (11.3 kph)",
        "stair climbing for 2 hours",
        "running 15 miles (24 km) at a pace of 5 miles per hour (8.0 kph)",
        "freestyle swimming for 1 hour",
      ],
      A: 2, //C
    },
    {
      Q: "The personal trainer is designing an aerobic exercise program for a 43-year-old client who has a resting heart rate of 75 beats/min. Using the Karvonen method, which of the following is the target heart rate range if the personal trainer assigns an intensity of 60% to 70% of the client's HRR?",
      Answers: [
        "106 to 123 beats/min",
        "136 to 146 beats/min",
        "123 to 137 beats/min",
        "154 to 165 beats/min",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following exercise modes would be most appropriate for a 52-year-old female client with no medical or physical contraindications whose goal is to ride in a 50-mile cycling event?",
      Answers: [
        "walking on a treadmill",
        "riding a bicycle",
        "using an elliptical machine",
        "using a rowing machine",
      ],
      A: 1, //B
    },
    {
      Q: "A sedentary 35-year-old client is morbidly obese and would like to lose weight. The personal trainer selected the semirecumbent bike as the exercise mode. Which of the following is an appropriate exercise program for the first exercise session?",
      Answers: [
        "three 5-minute bouts with rest in between at 50% to 65% HRR",
        "20 minutes continuous at 75% HRR",
        "25 minutes of intervals at 90% HRR and 70% HRR",
        "30 minutes of LSD at 65% HRR",
      ],
      A: 0, //A
    },
  ],
};

const chapter17 = {
  ChapterNumber: 17,
  ChapterTitle: "Plyometric and Speed Training",
  Questions: [
    {
      Q: "Which of the following exercises benefits the most from the advantage of the stretch shortening cycle (SSC)?",
      Answers: ["push press", "deadlift", "back squat", "front squat"],
      A: 0, //A
    },
    {
      Q: "Which of the following is a requirement to participate in a plyometric training program?",
      Answers: [
        "at least 18 years of age",
        "more than one year performing power exercises",
        "at least three months of general resistance training exercises",
        "less than 50 years of age",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following adjustments is most appropriate for a client having difficulty performing a depth jump correctly due to the amortization phase being too long?",
      Answers: [
        "Discontinue the depth jump.",
        "Have the client try the jump using just one leg.",
        "Focus on absorbing the landing.",
        "Decrease the height of the box.",
      ],
      A: 3, //D
    },
    {
      Q: "The personal trainer notices that a client takes short, choppy steps while sprinting. Which of the following types of training will help this client improve stride length the most?\n\nI. resisted sprinting\n\nII. assisted sprinting\n\nIII. technique training\n\nIV. plyometric training",
      Answers: [
        "I and III only",
        "II and IV only",
        "I, III, and IV only",
        "I, II, and III only",
      ],
      A: 2, //C
    },
  ],
};

const chapter18 = {
  ChapterNumber: 18,
  ChapterTitle: "Clients Who Are Preadolescent, Older, or Pregnant",
  Questions: [
    {
      Q: "Following eight weeks of regular strength training, a 10-year-old boy made significant gains in chest press and leg press performance. Which of the following is most responsible for his training-induced gains in muscle strength?",
      Answers: [
        "muscle hypertrophy",
        "muscle hyperplasia",
        "neural adaptations",
        "enhanced body composition",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following resistance training adaptations will lower the risk of cardiovascular disease in a 70-year-old client?\n\nI. reduced body fat\n\nII. decreased resting systolic blood pressure\n\nIII. improved endothelial function\n\nIV. decreased high-density lipoprotein cholesterol",
      Answers: [
        "I, II and III only",
        "I, II, and IV only",
        "I, III, and IV only",
        "II, III, and IV only",
      ],
      A: 0, //A
    },
    {
      Q: "Which of the following training protocols is the most appropriate goal for previously inactive older adults?",
      Answers: [
        "aerobic exercise only, five days per week",
        "resistance exercise only, four days per week",
        "resistance exercise four days per week and aerobic endurance exercise two days per week",
        "resistance exercise two days per week and aerobic endurance exercise three days per week",
      ],
      A: 3, //D
    },
    {
      Q: "Which of the following exercise recommendations is appropriate for a healthy pregnant client?\n\nI. Gradually increase to 30 minutes per day of accumulated physical activity on at least three days per week.\n\nII. Strength training for the major muscle groups can be performed provided a resistance that permits multiple repetitions (e.g., 12-15) is used.\n\nIII. Activities such as horseback riding, in-line skating, and outdoor cycling can be performed provided the exercise intensity is moderate.\n\nIV. Avoid exercise in the supine position after the second trimester.",
      Answers: [
        "I and IV only",
        "I and II only",
        "II and III only",
        "III and IV only",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following chest exercises would be most appropriate for women in their second trimester of pregnancy?",
      Answers: [
        "dumbbell bench presses",
        "standing cable crossovers",
        "dumbbell chest flys",
        "barbell bench presses",
      ],
      A: 1, //B
    },
  ],
};

const chapter19 = {
  ChapterNumber: 19,
  ChapterTitle: "Clients With Nutritional and Metabolic Concerns",
  Questions: [
    {
      Q: "Based on his calculated BMI, which of the following is the disease risk for a 69-inch (175 cm), 198-pound (90 kg) male client with a waist circumference of 41 inches (104 cm)?",
      Answers: ["no risk", "increased", "high", "very high"],
      A: 2, //C
    },
    {
      Q: "All of the following are dietary goals that can apply to all clients who are overweight EXCEPT",
      Answers: [
        "setting a weight loss goal of 10% of body weight over the first six months.",
        "changing food selections to decrease caloric and fat intake.",
        "aiming for a 1- to 2-pound (0.45-0.9 kg) weight loss per week.",
        "following a 1,200 kcal/day food plan.",
      ],
      A: 3, //D
    },
    {
      Q: "Which of the following are undesirable blood lipid levels?\n\nI. total cholesterol: 250 mg/dl\n\nII. triglycerides: 200 mg/dl\n\nIII. LDLs: 100 mg/dl\n\nIV. HDLs: 50 mg/dl",
      Answers: [
        "I and IV only",
        "I and II only",
        "II and III only",
        "III and IV only",
      ],
      A: 1, //B
    },
    {
      Q: "Which of the following describes a difference between type 1 and type 2 diabetes?",
      Answers: [
        "Only clients with type 1 diabetes can have gestational diabetes.",
        "Clients with type 1 diabetes are more prevalent.",
        "Clients with type 2 diabetes can produce insulin.",
        "Only clients with type 2 diabetes can receive exogenous insulin.",
      ],
      A: 2, //C
    },
  ],
};

const chapter20 = {
  ChapterNumber: 20,
  ChapterTitle: "Clients With Cardiovascular and Respiratory Conditions",
  Questions: [
    {
      Q: "A 44-year-old-male with history of high blood pressure (144/92) has never exercised before but would like to start an exercise program. His physician cleared him to participate. Which of the following is an example of the most appropriate beginning exercise intensity for this client?",
      Answers: [
        "treadmill walking at an RPE of 14",
        "back squat at 75% of 1RM for 10 repetitions",
        "elliptical trainer at 65% V̇O₂ max",
        "dumbbell bench press at 50% 1RM for 16 repetitions",
      ],
      A: 3, //D
    },
    {
      Q: "A 52-year-old-client had a heart attack three months ago and was recently cleared by his physician to begin a low-intensity exercise program. Which of the following combinations of exercise, intensity, and duration are most appropriate for this client?",
      Answers: [
        "stationary bicycle, RPE of 12, 15 minutes",
        "treadmill walking, 40% V̇O₂ max, 20 minutes",
        "stair stepper, 70% HR max, 25 minutes",
        "elliptical trainer, RPE of 8, 10 minutes",
      ],
      A: 1, //B
    },
    {
      Q: "A 63-year-old client with peripheral vascular disease describes significant pain when walking for 5 minutes or more. Which of the following programs would best help her increase the amount of time she is able to walk pain free?",
      Answers: [
        `Have the client "walk through" the pain for 2 minutes after the pain begins.`,
        `Decrease the duration to 2 minutes at the same intensity.`,
        `Have the client take a short rest break once the pain begins, and then continue walking until the pain returns.`,
        `Discontinue walking as a form of exercise since it is too painful.`,
      ],
      A: 2, //C
    },
    {
      Q: `A client with exercise-induced asthma has been performing primarily resistance training exercises for the past year. He now requests help in improving his "stamina." Which of the following methods of monitoring aerobic intensity should be used for this client?\n\nI. target heart rate\n\nII. sense of dyspnea\n\nIII. METs \n\nIV. RPE`,
      Answers: [
        "I and III only",
        "II and IV only",
        "I, II, and III only",
        "II, III, and IV only",
      ],
      A: 3, //D
    },
  ],
};

const chapter21 = {
  ChapterNumber: 21,
  ChapterTitle: "Clients With Orthopedic, Injury, and Rehabilitation Concerns",
  Questions: [
    {
      Q: "Both forward lumbar and abdominal flexion exercises would be contraindicated for someone who has a history of which of the following?",
      Answers: [
        "spondylolisthesis",
        "low back extensor strain",
        "posteriorly herniated disc",
        "spondylolysis",
      ],
      A: 2, //C
    },
    {
      Q: "A client who participates in recreational softball has indicated that she has dislocated her shoulder in the past. Which of the following exercises is most appropriate for this client?",
      Answers: [
        "rotator cuff strengthening",
        "push-up",
        "behind-the-neck lat pulldown",
        "overhead press",
      ],
      A: 0, //A
    },
    {
      Q: "A client who plays basketball has a lateral ankle sprain. Assuming that he is ready to begin functional activities, all of the following are appropriate progressions EXCEPT",
      Answers: [
        "balancing on floor with eyes closed, advancing to balancing with eyes open on an air pad.",
        "12-inch (30 cm) box jumps advancing to 18-inch (45 cm) box jumps.",
        "diagonal and lateral running drills advancing to straight-line jogging drills.",
        "forward lunges on floor advancing to lateral lunges onto a domed device.",
      ],
      A: 2, //C
    },
    {
      Q: "A 30-year-old client who is a runner is complaining of periodic knee pain. The personal trainer notices that her knee moves slightly medially when she runs. Which of the following exercises would be indicated, provided knee alignment with foot is maintained?",
      Answers: [
        "deep squats",
        "forward 6-inch (15 cm) step-ups",
        "full ROM open kinetic chain leg (knee) extensions",
        "stair running",
      ],
      A: 1, //B
    },
    {
      Q: "A 59-year-old male has successfully rehabilitated from a total hip arthroplasty. He is interested in doing cardiovascular exercises. All of the following are appropriate EXCEPT",
      Answers: [
        "swimming.",
        "stair stepping.",
        "step aerobics.",
        "stationary cycling.",
      ],
      A: 2, //C
    },
  ],
};

const chapter22 = {
  ChapterNumber: 22,
  ChapterTitle:
    "Clients With Spinal Cord Injury, Multiple Sclerosis, Epilepsy, and Cerebral Palsy",
  Questions: [
    {
      Q: "For reasons such as autonomic control of heart rate and varying amounts of active muscle mass, RPE is an appropriate method for monitoring aerobic exercise intensity in clients with which of the following?",
      Answers: [
        "spinal cord injury",
        "multiple sclerosis",
        "epilepsy",
        "cerebral palsy",
      ],
      A: 0, //A
    },
    {
      Q: "Your 38-year-old client diagnosed with multiple sclerosis is a civil engineer complaining of leg muscle fatigue while walking and climbing stairs at job sites. She performs 10 minutes of recumbent stepping, combined arm-leg bicycle ergometry, and upper body ergometry at a heart rate range of 90 to 100 beats/min. She also performs two sets of 10 repetitions of lat pulldowns, seated rows, knee extensions, and chest presses at 70% of 1RM. Which of the following activities should be added during the next exercise session?",
      Answers: [
        "jogging and jump squats",
        "rowing ergometry and seated hip adduction",
        "treadmill walking and leg presses",
        "jumping rope and box jumps",
      ],
      A: 2, //C
    },
    {
      Q: "The personal trainer has been working with a client on weight loss who has a history of partial, complex seizures for the past three months. Her recommended weight loss was 22 pounds (10 kg). Upon completing a repeat body composition test, the personal trainer finds that she has lost 9.9 pounds (4.5 kg). Body composition results show that she has lost 8.8 pounds (4 kg) of body fat and 1.1 pounds (0.5 kg) of lean body mass. Which of the following is the personal trainer's primary concern?",
      Answers: [
        "The rate of weight loss is too rapid.",
        "The weight loss may suggest she is dehydrated.",
        "The weight loss may increase the risk of antiseizure medication side effects.",
        "There are no particular concerns as a result of this weight loss.",
      ],
      A: 2, //C
    },
    {
      Q: "A client diagnosed with cerebral palsy has functional use of his legs. Which of the following modes of exercise requires the LEAST amount of supervision?",
      Answers: [
        "treadmill walking",
        "stairstepper",
        "stationary bicycle",
        "elliptical trainer",
      ],
      A: 2, //C
    },
  ],
};

const chapter23 = {
  ChapterNumber: 23,
  ChapterTitle: "Resistance Training for Clients Who Are Athletes",
  Questions: [
    {
      Q: "Which of the following is the most sport-specific resistance training exercise for a volleyball player?",
      Answers: [
        "push press",
        "lateral shoulder raise",
        "seated shoulder press",
        "leg press",
      ],
      A: 0, //A
    },
    {
      Q: "Which of the following is organized from shortest to longest?",
      Answers: [
        "mesocycle, microcycle, macrocycle",
        "macrocycle, microcycle, mesocycle",
        "microcycle, mesocycle, macrocycle",
        "microcycle, macrocycle, mesocycle",
      ],
      A: 2, //C
    },
    {
      Q: "Which of the following is the order of the phases of a periodized program?\n\nI. strength/power\n\nII. hypertrophy\n\nIII. active rest\n\nIV. competition\n\nV. strength",
      Answers: [
        "I, II, III, V, IV",
        "IV, III, II, I, V",
        "III, IV, II, V, I",
        "II, V, I, IV, III",
      ],
      A: 3, //D
    },
    {
      Q: "A personal trainer includes the back squat exercise in an athlete's linearly periodized resistance training program. What is the load for a medium training day if the athlete's 1RM is 400 pounds (182 kg) and the number of goal repetitions is four per set?",
      Answers: [
        "360 pounds (164 kg)",
        "325 pounds (148 kg)",
        "285 pounds (130 kg)",
        "255 pounds (116 kg)",
      ],
      A: 1, //B
    },
    {
      Q: "An athlete who is able to perform 225 pounds (102 kg) on the back squat exercise for a maximum of five repetitions would use which of the following if the workout called for him or her to perform back squats with 80% of his 5 RM?",
      Answers: [
        "5 repetitions with 225 pounds (102 kg)",
        "1 repetition with 225 pounds (102 kg)",
        "5 repetitions with 180 pounds (82 kg)",
        "1 repetition with 180 pounds (82 kg)",
      ],
      A: 2, //C
    },
  ],
};

const chapter24 = {
  ChapterNumber: 24,
  ChapterTitle: "Facility and Equipment Layout and Maintenance",
  Questions: [
    {
      Q: "A health and fitness facility has a total number of members of 3,000, and the facility's criterion for cardiovascular equipment is one cardiovascular machine for every four members. How many pieces of cardiovascular machines should the facility have based on the common practice used in the health and fitness industry? ",
      Answers: ["56", "62", "72", "81"],
      A: 1, //B
    },
    {
      Q: "Which of the following are appropriate guidelines for the use of mirrors in a fitness facility?\n\nI. 6 inches (15 cm) away from equipment\n\nII. 20 inches (51 cm) away from equipment\n\nIII. 6 inches (15 cm) above the floor\n\nIV. 20 inches (51 cm) above the floor",
      Answers: [
        "I and III only",
        "I and IV only",
        "II and III only",
        "II and IV only",
      ],
      A: 1, //B
    },
    {
      Q: "When organizing exercise equipment in a health and fitness facility, which of the following guidelines should the personal trainer follow?\n\nI. Place taller resistance training machines in the middle of a resistance training room for better visibility.\n\nII. Equipment for exercises that require spotters should be located away from windows, mirrors and doors.\n\nIII. The ends of all Olympics bars should be spaced 3 feet (91 cm) apart.\n\nIV. All resistance training machines and equipment must be spaced at least 3 feet (91 cm), preferably 4 feet (121 cm), apart.",
      Answers: [
        "I and III only",
        "I and IV only",
        "II and III only",
        "II and IV only",
      ],
      A: 2, //C
    },
    {
      Q: "What is the minimum ceiling height sufficient for overhead exercises?",
      Answers: [
        "7 feet (212 cm)",
        "9 feet (273 cm)",
        "11 feet (334 cm)",
        "12 feet (364 cm)",
      ],
      A: 3, //D
    },
  ],
};

const chapter25 = {
  ChapterNumber: 25,
  ChapterTitle: "Legal Aspects of Personal Training",
  Questions: [
    {
      Q: "The legal system decides personal injury and wrongful death cases in which of the following settings?",
      Answers: [
        "the criminal justice system",
        "the civil justice system, focusing on tort law",
        "the civil justice system, focusing on contract law",
        "the civil justice system, focusing on equity",
      ],
      A: 1, //B
    },
    {
      Q: "Personal trainers may lawfully and permissibly provide advice to clients in which of the following situations?",
      Answers: [
        "the use of exercise equipment",
        "the use of various exercises to treat client's medical conditions",
        "the use of particular exercises to lower a client's elevated blood pressure",
        "the use of medical procedures to prevent disease",
      ],
      A: 0, //A
    },
    {
      Q: "An assumption of risk or a waiver/release of liability may be used by personal trainers",
      Answers: [
        "in most states.",
        "only if authorized by statutory law.",
        "when approved by a judge prior to use.",
        "when the facility pays the participant to sign.",
      ],
      A: 0, //A
    },
    {
      Q: "Professional standards of practice for personal trainers may be used for which of the following?",
      Answers: [
        "to assist personal trainers in their delivery of service",
        "to help physicians provide diagnostic services for patients",
        "to qualify personal trainers to render physical therapy services for patients",
        "to qualify personal trainers to be licensed in particular states",
      ],
      A: 0, //A
    },
  ],
};

export const chapters = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
  chapter16,
  chapter17,
  chapter18,
  chapter19,
  chapter20,
  chapter21,
  chapter22,
  chapter23,
  chapter24,
  chapter25,
];
