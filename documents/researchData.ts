export interface DataType {
  slug?: string;
  nameId: string;
  university: string;
  title: string;
  introduction: string;
  objective: string;
  methods: string;
  results: string;
  conclusion: string;
  keywords: string[];
  author: string[];
  supervisors: string[];
  coressponding: string[];
  poster: string;
  thumbnail: string;
}

const monash: DataType[] = [
  {
    nameId: 'hubert',
    university: 'Monash',
    title:
      'The Role of Complementary Medicine in Type 2 Diabetes: An Evidence-Based Study on the Clinical Efficacy of Chromium Picolinate',
    introduction:
      'Type 2 Diabetes mellitus (DM) is a chronic non-communicable disease that has been increasingly prevalent over the past decade, characterised by abnormally high levels of blood glucose due to insulin resistance. As a result, diabetic patients are faced with the risk of life threatening complications that may affect their quality of life. Therefore, the management of diabetes, both lifestyle modifications and pharmacological interventions, plays an important role in controlling their blood glucose levels. Complementary medicines have a large market, and many products are sold with claims of controlling blood glucose levels. One of the popular active ingredient is chromium picolinate, which is claimed to enhance insulin sensitivity and maintain healthy blood glucose levels. This study aims to evaluate the evidence on the clinical efficacy of chromium picolinate supplementation for controlling blood glucose levels in adults with type 2 DM.',
    objective: '',
    methods:
      'A systematic review based on the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) was conducted by identifying records from OVID Medline, Cochrane Central, and SCOPUS databases. Studies were included based on the eligibility criteria on the effectiveness of chromium picolinate supplementation as a complementary medicine in controlling blood glucose levels in adults with type 2 DM. Studies were included if they are RCTs with type 2 diabetic participants taking chromium picolinate as the intervention and have blood glucose level outcomes (either fasting, or postprandial, or both). The risk of bias was also assessed according to the Cochrane Collaboration’s tool for assessing risk of bias in randomised trials.',
    results:
      '8 randomized controlled trials (RCT) were included after satisfying the eligibility criteria. 3 studies reported both fasting and postprandial blood glucose levels while the remaining 5 only reported fasting blood glucose levels. 7 studies reported significant reduction in fasting blood glucose levels and 3 studies reported significant reduction in postprandial blood glucose levels after the intervention. 1 study did not report any significant impact of the chromium picolinate supplementation towards the fasting blood glucose levels. Based on the included studies, chromium picolinate is efficacious in controlling the blood glucose levels of type 2 diabetic patients.',
    conclusion:
      'Chromium picolinate may be effective in controlling the blood glucose levels of diabetic patients. However, the optimal dose and safety profile, both in short term and long-term use, are yet to be investigated further.',
    keywords: [],
    author: [
      'Fransesco Bernado Hubert Jonathan',
      'Basia Diug',
      'Jane Banaszak-Holl',
      'Arnie Clever',
    ],
    supervisors: [],
    coressponding: [
      'School of Public Health and Preventive Medicine',
      'Faculty of Medicine',
      'Nursing and Health Sciences',
    ],
    poster: './monash/images/F B Hubert Jonathan_Poster.pdf',
    thumbnail: './monash/thumbnails/F B Hubert Jonathan_Poster.png',
    slug: 'The-Role-of-Complementary-Medicine-in-Type-2-Diabetes:-An-Evidence-Based-Study-on-the-Clinical-Efficacy-of-Chromium-Picolinate',
  },
  {
    nameId: 'hanifasti',
    university: 'Monash',
    title:
      'Bridging The Learning Gap Between Cardiac Electrical Activity, Function',
    introduction:
      'The electrocardiogram (ECG) is an important tool to diagnose cardiovascular diseases. ECG interpretation is a core competency of medical graduates. Learning about the foundational knowledge behind the ECG, i.e. cardiac electrical activity and function, and correlating it to the ECG and its interpretation, can be challenging for students at the beginning of the medical course. Existing literature has focused on students’ ability in interpreting the ECG, and how continuous assessment using a computer-based simulation may improve their ECG interpretation skills. However, the challenges when first learning the foundational knowledge has received considerably less attention. This study aims to explore the perceptions of medical students and lecturers relating to the challenges when learning and teaching the foundational knowledge (e.g., anatomy, physiology, basic cardiac electrical activity and function and their application to ECGs), with the view of developing a computer-based learning simulation for the students.',
    objective: '',
    methods:
      'Seventy-seven first- and second-year medical students at Monash University were surveyed using an online questionnaire. The questionnaire contained open-ended questions and Likert scale items. Four multiple-choice quiz questions were in the student questionnaire to test basic understanding of relevant clinical skills and physiology content. Five academic staff participated in one-to-one interviews. Qualitative data was analysed using thematic analysis and descriptive analysis was used for the quantitative data.',
    results:
      'Three major themes emerged from the survey data and staff interviews around important considerations when developing a computer-based learning simulation focussing on the fundamentals of cardiac electrical activity, function and ECGs: learning content, learning experience, and technology. The survey revealed that >90% (n=70) of the students found it challenging to learn the fundamental concepts i.e. cellular physiology, anatomy-physiology-to-ECG interpretation correlation, clinical correlation, and knowledge application. All of the surveyed students (n=77) found ECG interpretation challenging to learn. Knowledge consolidation was found to be difficult for students, with some students admitting that they relied on memorising rather than understanding the extensive and complex learning content. This finding was reflected in discussions with lecturers, whereby it was emphasised that students struggle if they do not develop a deep understanding of the fundamental concepts. Lecturers reflected on the difficulty in teaching complex and visually dynamic content using relatively ‘static’ lecture slides. To address these challenges in learning and teaching, the idea of a computer-based learning simulation to enhance learning was valued by both students and lecturers. Student learning experience was perceived to be enhanced through sensory approaches (e.g sound, animations) and interactive activities, with technology that is accessible, user friendly, rich in information, and appealing. The results of the thematic and descriptive analyses were used to inform the development of a learning pathway for the generation of a computer learning simulation that is based on programmed learning logic, experiential learning, and the principles of (revised) Bloom’s taxonomy.',
    conclusion:
      'Currently, the existing, freely-available computer-based learning simulations are either too advanced for students at the beginning of medical course or require pre-existing knowledge, and do not align with the curriculum. No existing computer simulation is used for teaching at the beginning of the medical course at Monash University. Thus, there is a need for the development of a computer based learning simulation that can address the challenges in learning identified by staff and students, and is ‘early-learners-friendly’ for students embarking on their journey in medicine.',
    keywords: [],
    author: [
      'Fransesco Bernado Hubert Jonathan',
      'Basia Diug',
      'Jane Banaszak-Holl',
      'Arnie Clever',
    ],
    supervisors: ['Dr Marianne', 'Mr Bill Haigh'],
    coressponding: ['Rural Health'],
    poster: './monash/images/monash/Hanifasti Yasmin Arfiananda_Poster.pdf',
    thumbnail: './monash/thumbnails/Hanifasti Yasmin Arfiananda_Poster.png',
    slug: 'Bridging-The-Learning-Gap-Between-Cardiac-Electrical-Activity-Function',
  },
  {
    nameId: 'ihya',
    university: 'Monash',
    title: 'Anti-Fibrotic Therapy For Idiopathic Pulmonary Fibrosis',
    introduction:
      'Idiopathic pulmonary fibrosis (IPF) is a progressive interstitial lung disease, causing fibrosis of the lung, resulting in reduced lung function and decreased exercise tolerance, breathlessness and if left untreated can cause death. Previous treatments have shown little evidence of benefit and some evidence of harm. More recently, anti-fibrotic therapy including pirfenidone and nintedanib has shown efficacy and safety in this population',
    objective:
      'To summarise all the available randomised controlled trials regarding the efficacy and safety of anti-fibrotic therapy in those with IPF.',
    methods:
      'This meta-analysis was conducted according to Cochrane standards. We included randomised controlled trials which studied adults with IPF, excluding other ILDs, using an antifibrotic agent compared to placebo or any other treatment. Abstracts were screened to determine if they fit the participant and intervention inclusion criteria by two reviewers. Meta-analysis was conducted using forest plots to measure treatment effect and summary of GRADE level to assess the quality of evidence of studies. Risk of bias assessment was performed to assess quality of studies.',
    results:
      'A total of 3597 studies were retrieved, of which 10 studies were included in the final review. Of these 10 studies, five studies compared pirfenidone to a placebo, and five studies compared nintedanib to a placebo. Nintedanib was shown to prevent mortality (MD: 0.47, 95% CI: 0.28 to 0.8, moderate certainty evidence), whereas pirfenidone showed a non-significant trend to prevent mortality (MD: 0.74, 95% CI: 0.5 to 1.1, low level of certainty). Pirfenidone demonstrated an improvement in exercise tolerance (MD: 18.09, 95% CI: 1.13 to 35.06, high level of certainty), whereas nintedanib shown a non-significant trend to improve exercise tolerance (MD: 18, 95% CI: -14 to 50, low level of certainty). Both pirfenidone and nintedanib slowed a change in FVC % predicted (MD: 2.79; 95% CI: 0.87 to 4.71, high level of certainty) (MD: 2.86: 95% CI: 2.51 to 3.2, high level of certainty). Nintedanib was shown to reduce the change in FVC in ml (MD: 84, 95% CI: 57.52 to 111.23, high level of certainty), whereas pirfenidone showed a non-significant trend to improve FVC in ml (MD: 70, 95% CI: -8.87 to 148.87, low level of certainty).',
    conclusion:
      'This review demonstrated an overall benefit of pirfenidone and nintedanib as anti-fibrotic therapy for IPF in context of reducing FVC decline. Nintedanib showed a reduced chance of mortality and an increase in quality of life compared to the placebo. Pirfenidone showed an increase in exercise tolerance compared to the placebo with the risk of drug discontinuation due to adverse events. Future research should examine other anti-fibrotic drugs that reverse fibrosis with less harmful side effects, and in addition, examine patient centred outcomes.',
    keywords: [],
    author: ['Ihya Akbar'],
    supervisors: ['Dr Hayley Barnes'],
    coressponding: [
      'Department of Allergy',
      'Immunology and Respiratory Medicine',
      'Central Clinical',
    ],
    poster: './monash/images/Akbar_Ihya_ 32570457_Poster FIX.pdf',
    thumbnail: './monash/thumbnails/Akbar_Ihya_ 32570457_Poster FIX.png',
    slug: 'Anti-Fibrotic-Therapy-For-Idiopathic-Pulmonary-Fibrosis',
  },
  {
    nameId: 'irvan',
    university: 'Monash',
    title:
      'An analysis of Fluidigm Biomark Array data for placental inflammasomes in human idiopathic fetal growth restriction affected pregnancies',
    introduction:
      'Fetal growth restriction (FGR) is one of the major pregnancy complications resulting in maternal and perinatal mortality. It is commonly associated with placental insufficiency and exacerbated by placental inflammation. The novel inflammatory pathways governed by the multimeric inflammasomes in the pathogenesis of FGR are largely unknown.',
    objective:
      'The first aim was to analyse placental gene expression profiles for components of the inflammasome pathway and further quantification of mRNA of candidate inflammasomes was analysed using Real-Time PCR. The second aim was to correlate the inflammasomes gene expression profiles with maternal age, gestational age (pre-term vs term differences), fetal birth weight, placental weight, and birth weight to placental weight ratio.',
    methods:
      'Gene expression using the cycle threshold (CT) values were analysed by 2-ΔΔCT methodology for the inflammasomes including 7 danger-associated molecular patterns (DAMPs) genes (NLRP3, NLRC5, CASP1, CASP3, CASP8, NOD2, and NFκB1), 3 pathogen associated molecular patterns (PAMPs) genes (TLR2, TLR5, TLR6), 4 cytokines (IFNγ, IL-1β, IL-6, and IL-10), and 2 housekeeping genes (18S rRNA and GAPDH), which were measured using the Fluidigm BiomarkTM Array in third-trimester placental tissues with gestational age ranging from 27-40/41 weeks from FGR pregnancies (n=25) and gestation-matched uncomplicated control pregnancies (n=25). Further quantification relative to 18S rRNA was performed for the 7 DAMPs genes and 4 cytokines that were independently validated using Real-Time PCR. Statistical significances and gene expression correlations were performed in FGR and gestation-matched control pregnancies using GraphPad Prism V8.0.',
    results:
      'From the Fluidigm BiomarkTM Array, gene expression of all genes tested were present in both FGR and control placentae. From the independent validation data, mRNA expression for NLRP3, NLRC5, CASP1, CASP3, CASP8, NOD2, NFκB1, IFNγ, IL-1β, and IL 6 showed a significant increase in FGR compared with control pregnancies (n=25/group, p<0.001, Mann-Whitney U test). However, a significant decrease in the mRNA expression of the anti-inflammatory cytokine, IL-10 was found in FGR compared with control pregnancies (p<0.001, Mann-Whitney U test). Spearman’s correlation test in control pregnancies demonstrated a significant correlation between CASP1 and gestational age (r=0.662, p<0.001), birth weight (r=0.668, p<0.001), and placental weight (r=0.692, p<0.001), NOD2 and placental weight (r=0.456, p=0.022), and NLRP3 and birth weight to placental weight ratio (r=0.448, p=0.025). However, in FGR, a significant correlation was observed between CASP3 and gestational age (r=0.579, p=0.003), birth weight (r=0.651, p<0.001), and placental weight 11 (r=0.657, p<0.001) and NLRP3 and gestational age (r=0.558, p=0.004). NLRP3, CASP1, and CASP3 mRNA expression was significantly increased in term control and term FGR compared with pre-term control and pre-term FGR, respectively (p<0.001, Mann-Whitney U test). ',
    conclusion:
      'These results show that the placental gene expression for the components of the inflammasome pathway is differentially expressed in FGR compared with control pregnancies. Further protein expression analyses and functional studies of these genes are warranted to provide the molecular mechanisms of inflammasomes and cytokines in the aetiology of FGR.',
    keywords: [],
    author: ['Irvan Muhammad Alfian'],
    supervisors: ['Dr Padma Murthi', 'Prof Chrishan Samuel'],
    coressponding: [
      'Monash Biomedicine Discovery Institute Department of Pharmacology ',
    ],
    poster: './monash/images/Irvan Muhammad Alfian_Poster.pdf',
    thumbnail: './monash/thumbnails/Irvan Muhammad Alfian_Poster.png',
    slug: 'An-analysis-of-Fluidigm-Biomark-Array-data-for-placental-inflammasomes-in-human-idiopathic-fetal-growth-restriction-affected-pregnancies',
  },
  {
    nameId: 'kaven',
    university: 'Monash',
    title:
      'Continuation of Antithrombotic Use in Hand Surgery: An Analysis of Risks and Benefits ',
    introduction:
      'Antithrombotic medication continuation during surgery continues to be the subject of debate. The risk of bleeding complications must be weighed against the risk of thromboembolic events for each patient. The bleeding complications of antithrombotic patients undergoing surgery are discussed at length in many studies. However, few studies compare the effects of continuing vs discontinuing antithrombotic medication during hand surgery. As hand surgeries are considered to have relatively few bleeding complications compared to other surgeries, clinicians should consider whether to stop their patient’s antithrombotic medication. In essence, is the increase risk of bleeding complications preferable to the increased risk of thromboembolic episodes?',
    objective:
      'Using published studies, to determine the difference in bleeding complications when antithrombotic medication was continued or discontinuation. Additionally, to assess the efficacy of the WALANT technique versus tourniquets during hand surgery to control bleeding, complications rate and severity.',
    methods:
      'PRISMA method was used to conduct this systematic review, which resulted in the selection of 9 studies for data extraction. The extracted data were then arranged into a set of tables to compare the rate and severity of bleeding complications when antithrombotic medication was continued or not in hand surgery and reported in these studies. No statistical assessment of the combined studies was possible at this time.',
    results:
      'There was no apparent difference between the bleeding complication rates when antithrombotic medication was continued or not in hand surgery.',
    conclusion:
      'The continuation of antithrombotic medication does not pose a significant increase in bleeding complication risk in hand surgery. Furthermore, tourniquet and WALANT technique could be used to mitigate the risk of bleeding complications. However, the effectiveness of WALANT in comparison to tourniquet cannot be reliably determined due to the low number of study which included the WALANT technique. The results of this study can be used to aid a physician’s decision regarding the decision to continue antithrombotic medication or not during hand surgery.',
    keywords: [],
    author: ['Kaven Tannardi'],
    supervisors: [
      'Professor Warren Rozen',
      'Professor David-Hunter Smith',
      'Dr. Vicky Tobin',
    ],
    coressponding: ['Department of Surgery '],
    poster: './monash/images/Kaven Tannardi_Poster.pdf',
    thumbnail: './monash/thumbnails/Kaven Tannardi_Poster.png',
    slug: 'Continuation-of-Antithrombotic-Use-in-Hand-Surgery:-An-Analysis-of-Risks-and-Benefits',
  },
  {
    nameId: 'muhammad',
    university: 'Monash',
    title:
      'Shape Changes in the Dentate Nucleus in Individuals with Friedreich Ataxia Assessed Using Quantitative Susceptibility Mapping',
    introduction:
      'Friedreich ataxia (FRDA) is a progressive movement disorder and the most common inherited spinocerebellar disease, caused by an abnormal GAA trinucleotide multiplication in the FXN gene. Individuals with FRDA have nervous system pathology, which in the brain primarily impacts the dentate nucleus, leading to several clinical symptoms, including poor balance and uncoordinated movement. Currently, there is no validated treatment and measurement of the disease progression relies on clinical assessment. More sensitive and specific biomarkers of disease expression and progression of FRDA are required to improve treatment monitoring. Volume reduction of the dentate nucleus has been previously examined using a neuroimaging approach called quantitative susceptibility mapping (QSM). Investigations of the dentate nucleus in FRDA undertaken so far have only looked at the structure as a whole, but there is preliminary evidence that atrophy may be non uniform. Shape analysis provides a novel examination of dentate nucleus structure by measuring regionally-specific changes.',
    objective:
      'This study aimed to evaluate the regional shape changes in the dentate nucleus in individuals with FRDA relative to healthy controls. This study also aims to investigate the correlation between shape changes in the dentate nucleus and the clinical severity, disease duration, age at onset, and GAA repeat length among individuals with FRDA. ',
    methods:
      'This study uses a cross-sectional study design. The dentate nuclei were manually traced using QSM images from 51 people with FRDA and 47 healthy controls. Shape analysis of the dentate nucleus was conducted using a validated approach implemented in a publicly available toolbox (SPHARM-PDM). Between-group comparisons and correlational analyses of the shape changes with clinical data (clinical severity, disease duration, age at onset, and GAA repeat length) were performed, with false-discovery rate (FDR) corrections.',
    results:
      'Statistically significant shape changes relative to controls were found in the rostral and caudal portions in both the left and right dentate nuclei in the FRDA cohort (pFDR<0.05). Atrophy in the dentate nucleus correlated significantly with clinical severity and disease duration in a more limited area of the dorsal surface on the left dentate nucleus (pFDR<0.05). No statistically significant correlations with age at onset and GAA repeat length were found (pFDR>0.05).',
    conclusion:
      'Individuals with FRDA showed a heterogeneous pattern of regional shape changes in the dentate nucleus, which were associated with measures of disease progression. These regionally-specific changes in the dentate nucleus might provide a basis for disease progression markers that are able to more precisely monitor neurodegeneration in people with FRDA.',
    keywords: [],
    author: ['Muhammad Ikhsan Nur Karim'],
    supervisors: ['Dr. Ian Harding', 'Dr. Louisa Selvadurai', 'Dr. Will Khan'],
    coressponding: [
      'Department of Neuroscience Central Clinical School',
      'Alfred Hospital Monash University',
    ],
    poster: './monash/images/Muhammad Ikhsan Nur Karim_Poster.pdf',
    thumbnail: './monash/thumbnails/Muhammad Ikhsan Nur Karim_Poster.png',
    slug: 'Shape-Changes-in-the-Dentate-Nucleus-in-Individuals-with-Friedreich-Ataxia-Assessed-Using-Quantitative-Susceptibility-Mapping',
  },
  {
    nameId: 'mutiara',
    university: 'Monash',
    title:
      'A Systematic Scoping Review of Parenting Experiences and The Mental Health of Parents with ASD or Autistic Traits',
    introduction:
      'Autism Spectrum Disorder (ASD) is a neurodevelopmental disorder with main characteristics of impaired social and communication skill and restricted repetitive behaviors. They can also present sensory sensitivity and other co-occurring condition. The high heritability of ASD had been frequently observed and relatives of autistic individual may present milder autistic traits referred as Broader Autism Phenotype (BAP). Recent studies show that the prevalence of autism is increasing. This suggest that there will be higher number of adults with ASD and BAP, both diagnosed and undiagnosed. If adults with ASD and BAP become parents, their autistic traits may influence their parenting ability, family functioning, the child development, and mental health of the parent.',
    objective:
      'The aim of this study is to systematically map and summarized findings from studies on effect of parental ASD or BAP on parenting experience, mental wellbeing of parents, and the family functioning. The secondary aim is to locate the knowledge gap for possible future research.',
    methods:
      'his scoping review followed PRISMA Extension for Scoping Reviews (PRISMA-ScR). Database used in this study were MEDLINE, PsycINFO, Cochrane Library, EMBASE, and SCOPUS. Studies obtained were inputted into COVIDENCE software for title and abstract screening, followed by a full text screening. The findings were summarized in a narrative form.',
    results:
      '28 articles were included in this review: Carpita et al., 2019; Dissanayake et al., 2020; Duffett, 2017; Duvekot et al., 2016; Fujiwara et al., 2014; Gardner et al., 2016; S L Hartley et al., 2013, 2019; Sigan L Hartley et al., 2016; Hickey et al., 2019; Hirokawa et al., 2019; B Ingersoll & Hambrick, 2011; Brooke Ingersoll, 2011; Kellett, 2014; Lau et al., 2014; Piven & Palmer, 1999; Pohl et al., 2020; Pruitt et al., 2018; Rea et al., 2019; Rogers et al., 2017; E Rubenstein et al., 2017; Skiffer, 2014; Soke et al., 2019; Su et al., 2018; van Esch et al., 2018; D J van Steijn et al., 2015; D J Van Steijn et al., 2013; Daphne J van Steijn et al., 2014. 5 broad outcome themes were found associated with parental ASD and BAP: parent’s mental wellbeing, early parenthood experience, later parenthood experience, family dynamic and parent-child relationship.',
    conclusion:
      'ASD and BAP in parents had been reported to affected parents and their family in various ways, generally increasing the difficulty of parenting. There was limited father involvement compared to mother in the studies and only few studies had parents with ASD. Further research is needed to address the gaps in knowledge.',
    keywords: [],
    author: ['Mutiara Reka Ananda Putri'],
    supervisors: ['Professor Katrina Williams ', 'Dr Georgina Cox'],
    coressponding: ['Department of Paediatrics & Education Research'],
    poster: './monash/images/Mutiara Reka A P_Poster.pdf',
    thumbnail: './monash/thumbnails/Mutiara Reka A P_Poster.png',
    slug: 'A-Systematic-Scoping-Review-of-Parenting-Experiences-and-The-Mental-Health-of-Parents-with-ASD-or-Autistic-Traits',
  },
  {
    nameId: 'naura',
    university: 'Monash',
    title:
      'The Development of Liver Injury Despite Early Acetylcysteine Treatment in Paracetamol Overdose',
    introduction:
      'Paracetamol is a drug commonly taken for deliberate self-poisoning. Acetylcysteine is an effective antidote for paracetamol overdose. Recent studies reported that early administration of acetylcysteine may not fully prevent development of liver injury in some patients. We compared the incidence of acute liver injury (ALI) in patients receiving acetylcysteine within eight hours of ingestion between the two-bag acetylcysteine regimen (200 mg/kg over four hours, 100 mg/kg over 16 hours) and the three-bag regimen (150mg/kg over 1 hour, 50mg/kg over 4 hours, 100mg/kg over 16 hours).',
    objective: '',
    methods:
      'This retrospective cohort study compared the two-bag and three-bag acetylcysteine regimens. The two-bag and three-bag acetylcysteine regimen cohort data were obtained from patient records at Monash Health, Victoria, Australia (2009-2020), and compared to the three-bag acetylcysteine regimen data from the Canadian Acetaminophen Overdose Study (CAOS) database (1980-2005). The inclusion criteria were patients with acute single ingestion of paracetamol; normal aminotransferases (ALT or AST) on presentation; acetylcysteine administered within eight hours post-overdose; treatment decision based upon the adapted Rumack-Matthew nomogram. The primary outcome was development of ALI (defined as: peak aminotransferase >150 IU/L).',
    results:
      'At Monash Health, 191 patients were treated with the two-bag acetylcysteine regimen, and 180 patients with the three-bag regimen. The CAOS cohort provided 515 patients treated with the three-bag regimen. ALI developed in 1.6% (3/191) of the two-bag Monash Health group, 2.2% (4/180) of the three-bag Monash Health group (difference -0.6%, p 0.7), and 2.9% (15/515) of the three-bag CAOS group (difference compared to two-bag -1.3%, p 0.4). Hepatotoxicity developed in 0.5% (1 / 191) of patients treated with the two-bag regimen, 1.7% (3/180) in the Monash Health three-bag regimen and 1% (5/515) of the three-bag CAOS group. There were no statistically significant differences between groups.',
    conclusion:
      'ALI and hepatotoxicity were observed in a small, comparable percentage of patients despite early acetylcysteine administration using the two-bag and three-bag regimens. Repeating blood tests at the end of acetylcysteine treatment will identify these patients and indicate those requiring continuation of acetylcysteine infusion beyond 21 hours.',
    keywords: ['APAP', 'paracetamol', 'acute liver injury', 'hepatoxicity'],
    author: ['Naura Syafira', 'Andis Graudins', ' Mark Yarema', 'Anselm Wong'],
    supervisors: [],
    coressponding: [
      'Department of Medicine, School of Clinical Science at Monash Health, Monash University, Victoria, Australia,',
      'Faculty of Medicine, Universitas Indonesia, Special Capital Region of Jakarta, Indonesia,',
      'Monash Toxicology Unit, Dandenong Hospital, Monash Health, Victoria, Australia',
      'Poison and Drug Information Service, Alberta Health Services, Calgary, Alberta, Canada,',
      'Department of Emergency Medicine, University of Calgary, Calgary, Alberta, Canada,',
      'Austin Toxicology Unit, Austin Health, Victoria, Australia,',
      'Department of Critical Care, University of Melbourne, Victoria, Australia.',
    ],
    poster: './monash/images/Naura Syafira_Poster.pdf',
    thumbnail: './monash/thumbnails/Naura Syafira_Poster.png',
    slug: 'The-Development-of-Liver-Injury-Despite-Early-Acetylcysteine-Treatment-in-Paracetamol-Overdose',
  },
  {
    nameId: 'nicholas',
    university: 'Monash',
    title:
      'Mapping Gender Differences in Internet Gaming Disorder and Mental Health among University Students in Indonesia',
    introduction:
      'Internet gaming disorder (IGD) is the recurrent and persistent use of online games as indicated by symptoms of preoccupation, withdrawal, tolerance, uncontrollable behaviour, loss of interests in previous hobbies, and psychosocial problems. There were limited studies in South East Asia despite a growing trend towards more online gaming among young adults in that region. The purpose of this study was to explore gender differences in IGD among Indonesian university students and determine its association with mental health and motivations for playing online games.',
    objective: '',
    methods:
      'The study utilized a cross-sectional design on 432 Indonesians through the use of an online survey that consisted of the Internet Gaming Disorder Short-Form Questionnaire (IGDS9), the Problematic Online Gaming Questionnaire (POGQ), the Indonesian Online Game Addiction Questionnaire (IOGAQ), the Depression, Anxiety, and Stress Scale (DASS-21), and the Motives for Online Gaming Questionnaire (MOGQ). The inclusion criteria were Indonesian young adults. The exclusion criteria were non-Indonesians and Indonesians without informed consent. Chi-square and bivariate logistic regression tests were used to analyse the data.',
    results:
      'From 432 respondents, a majority of 302 (69.9%) respondents were male at the age of 25. Half of the respondents (50.5%) participated in some form of gaming daily and had an average playing time of three hours. The most played online game genre based on 374 respondents was First-person shooter (FPS) (30.2%) with the second most popular being Multiplayer online battle arena (MOBA) (24.6%). IGD was more prevalent among males (6.29%) than females (1.54%) based on the Chinese context IGDS9. Problematic gaming and online game addiction with mild addiction were also more prevalent among men as seen by the 83 (27.5%) and 324 (75%) respondents respectively. Bivariate analysis demonstrated that depression and stress were strongly associated with the IOGAQ (p<0.05) while stress was only strongly associated with the POGQ (p<0.05) and the IGDS9 had no strong associations with the DASS-21 variables. Gender was not strongly associated with depression, anxiety, or stress (p > 0.05). Men had a higher mean score for all MOGQ motives compared to women but only escape, competition, and recreation (p<0.05) were statistically significant. MMORPG had the highest mean score for the social, escape, coping, skill, fantasy and recreation motives while MOBA had the highest mean score for competition. Bivariate analysis established that the POGQ, IGDS9 had a strong association with the escape and competition motives (p<0.05) while the IOGAQ was strongly associated with escape and recreation (p<0.05). ',
    conclusion:
      'Gender differences included a higher prevalence of IGD among males than females for this sample of Indonesian young adults. Men were more motivated to play online games compared to women who preferred casual games. There were no gender differences in terms of mental health although IGD had a strong association with stress. The escape and competition motives were strong indicators of IGD.',
    keywords: [],
    author: ['Nicholas Sean'],
    supervisors: ['Dr Shalini Arunogiri'],
    coressponding: ['Central Clinical School'],
    poster: './monash/images/Nicholas Sean_Poster.pdf',
    thumbnail: './monash/thumbnails/Nicholas Sean_Poster.png',
    slug: 'Mapping-Gender-Differences-in-Internet-Gaming-Disorder-and-Mental-Health-among-University-Students-in-Indonesia',
  },
  {
    nameId: 'raysha',
    university: 'Monash',
    title:
      'Assessing Glymphatic Clearance in a Preclinical Model of Amyotrophic Lateral Sclerosis',
    introduction:
      'Neurodegenerative diseases are chronic and inexorable conditions characterized by the presence of insoluble aggregates of abnormally ubiquitinated and phosphorylated proteins. Transactive response DNA-binding protein 43 (TDP-43) is one such protein implicated in the neurodegenerative process and is a hallmark characteristic of amyotrophic lateral sclerosis (ALS). Following the discovery of the glymphatic system as a pathway to clear solutes and deliver metabolites, it has been suggested to contribute to both the initiation and progression of neurodegenerative diseases such as Alzheimer’s Disease (AD) with multiple lines of evident suggesting possible impairment of the glymphatic system in ALS',
    objective: '',
    methods:
      'This project assesses the function of the glymphatic system using an adult transgenic mouse model of ALS with overexpression of cytoplasmic human TDP-43 (hTDP-43∆NLS) that is suppressible by doxycycline (Dox). To evaluate for overall health and symptoms, mice were weighed and assessed for their sensorimotor coordination, balance, and stamina using the accelerating rotarod test at one- week post-Dox for the female cohort and one and three weeks post-Dox feeding for the male cohort. In-vivo DCE-MRI was performed using 9.4T/20 MRI with T1-w acquired utilizing the 3D FLASH sequence in the TDP-43 transgenic and littermate controls three weeks and one week after cessation of Dox feed corresponding to symptomatic and asymptomatic stages of the disease. The normalized signal increase over baseline was calculated at each time point using MATLAB to evaluate glymphatic clearance. TDP-43 immunohistological staining was performed on frozen sections to confirm TDP-43 pathology. ',
    results:
      'At three weeks post-Dox (symptomatic time point), DCE-MRI analysis showed reduced glymphatic clearance throughout the whole brain, limbic system, pons, and spinal cord of TDP-43 mice accompanied with body weight loss. At one week post-Dox (asymptomatic time point), DCE-MRI analysis also showed reduced glymphatic clearance in the whole brain, limbic system, pons, and spinal cord of TDP- 43 mice accompanied with increased expression of TDP-43.',
    conclusion:
      'These results highlight the potential of the glymphatic system involvement in disease pathology and as an important therapeutic target and potential biomarker of ALS susceptibility, severity, and prognosis. this study suggests that the glymphatic system is impaired at the symptomatic time point at the whole-brain level, limbic system, pons, and spinal cord. The finding that impaired glymphatic clearance is found in the limbic system may indicate the possibility of developing cognitive and metabolic changes, symptoms typically found in ALS. Importantly, pons and spinal cord impaired glymphatic clearance may indicate the possibility of developing motor impairments in later stages of ALS due to impaired glymphatic clearance that might promote the pathological TDP-43 spread along the corticospinal tract that possibly results in muscle paralysis. While the relationship between glymphatic clearance and disease progression remains to be elucidated, these results demonstrate that alterations in the glymphatic system occur early in the course of ALS, and worsens as the disease progresses and therefore could represent a therapeutic target in the treatment of ALS.',
    keywords: [],
    author: ['Raysha Farah'],
    supervisors: ['A/Prof. David Wright', 'Dr. Akram Zamani'],
    coressponding: ['Department of Neuroscience'],
    poster: './monash/images/Raysha Farah_Poster.pdf',
    thumbnail: './monash/thumbnails/Raysha Farah_Poster.png',
    slug: 'Assessing-Glymphatic-Clearance-in-a-Preclinical-Model-of-Amyotrophic-Lateral-Sclerosis',
  },
  {
    nameId: 'vinsensia',
    university: 'Monash',
    title:
      'Actions to Manage Mental Health Concerns during the COVID-19 Pandemic',
    introduction:
      'The COVID-19 pandemic has disrupted the way we live. Restrictions on gatherings and physically distancing from others have helped to reduce viral transmission, but these measures also result in many negative consequences. Changes in the nature of work have caused many people to either lose their jobs, be temporarily stood down from work, or adapt to remote-working arrangements. These changes can result in a deterioration in mental health, as work is an important determinant of health. Poor employment opportunities, increased uncertainty, and restrictions on everyday life may leave some people feeling helpless and unsettled, leading to increasing levels of anxiety and depression. This study explored the approaches people were taking to manage their mental health concerns throughout the COVID-19 pandemic, and sought to identify the characteristics of people who performed specific actions.',
    objective: '',
    methods:
      'This project is part of a larger national longitudinal cohort study that surveyed 2603 Australians who lost their jobs during the early stages of the pandemic. A control group was included consisting of people who remained working. Across three survey timepoints, between 27 April and 28 December 2020, summary statistics were calculated to summarise the prevalence of actions taken by people to manage mental health concerns. Actions were grouped into five higher order categories describing changes to diet and exercise, lifestyle, medications, alcohol consumption and drug use, and use of online resourced or telephone support lines. Binary regression models were calculated for each action category to determine the characteristics of the particular people who conducted the actions. Several demographic, employment, and pre-existing health covariates were included in models, in addition to current levels of distress, assessed using the 6-item Kessler psychological distress scale. ',
    results:
      'During 27 April to 26 July 2020, 78% of people reported making lifestyle changes during the prior months and 52% spoke to family or friends about their mental health concerns. Only 20% reported speaking to a health professional. Most people took multiple actions to manage their mental health during the pandemic, though the nature of actions taken depended on an individuals’ demographics, employment status and personal health. Overall, actions were more commonly taken by women, people who were out of work, those with pre-existing depression or people experiencing distress.',
    conclusion:
      'Behavioural actions to manage mental health concerns during the COVID-19 pandemic were common, as were conversations with friends or family members. Interventions to encourage the use of formal mental health supports are encouraged such as promoting accessible mental health supports in the workplace, and increasing mental health education for all workers. Supports and services should focus on reducing barriers to health care, particularly for people associated with commonly taking less help-seeking behaviour in general, and those experiencing high levels of distress. ',
    keywords: [
      'Psychological distress',
      'employment',
      'mental health',
      'COVID-19',
    ],
    author: ['Vinsensia Maharani Kanya Dhira Pradipta'],
    supervisors: ['Dr Daniel Griffiths ', 'Professor Alex Collie '],
    coressponding: ['School of Public Health and Preventive Medicine (SPHPM)'],
    poster: './monash/images/Poster_Vinsensia Maharani Kanya.pdf',
    thumbnail: './monash/thumbnails/Poster_Vinsensia Maharani Kanya.png',
    slug: 'Actions-to-Manage-Mental-Health-Concerns-during-the-COVID-19-Pandemic',
  },
  {
    nameId: 'viecky',
    university: 'Monash',
    title:
      'The Effect of Treatment of Sleep-Disordered Breathing on Sleep Quality in Children with Down Syndrome',
    introduction:
      'In children, sleep is at a lifetime maximum and is important for growth and development. However, sleep disordered breathing (SDB) which forms a spectrum from primary snoring (PS) to obstructive sleep apnoea (OSA) can cause sleep disruption. OSA affects 1%-6% of typically developing (TD) children and impacts on their daytime functioning. OSA is much more common in children with Down syndrome (DS) and affects up to 90% of children due to their unique craniofacial characteristics, reduced muscle tone, and obesity. Treatment of SDB in TD children has been found to be effective in improving SDB severity, but studies in children with DS remain limited. The current study aimed to assess changes in SDB severity and conventionally scored sleep macro-architecture, sleep micro-architecture assessed using spectral analysis which is a more sensitive measurement of sleep disruption in children with DS following treatment. We hypothesised that treatment of SDB would reduce SDB severity and improve sleep quality in children with DS. ',
    objective: '',
    methods:
      'Children with DS (n= 24) completed a follow up polysomnographic (PSG) study within 2 years of their baseline study. We investigated outcomes in two groups of children with DS, children who were treated (n= 9) following their baseline study and children who had no treatment (n= 15). Sleep quality was determined by sleep macro-architecture (time spent in different sleep states), sleep micro-architecture using EEG spectral analysis, and slow wave analysis (indicates sleep drive). SDB severity was measured using the obstructive apnoea hypopnea index (OAHI). We compared changes in SDB severity and sleep quality between children at baseline and follow up in both groups. SDB severity, sleep macro-architecture and sleep micro-architecture data between baseline and follow up for both groups were compared using the Wilcoxon signed rank test and Mann-Whitney U tests were used to compare data between treated and untreated groups at baseline and follow up. ',
    results:
      'The treated group at baseline had more severe OSA compared to the untreated group. OSA was significantly improved in children who were treated at follow up. There were no significant differences in sleep macro-architecture parameters from baseline to follow up in either the treated or untreated group. Children at follow up who had treatment had decreased SDB severity indicated by decreased OAHI. From sleep micro-architecture, differences were mostly found during NREM sleep compared to REM sleep. Children at baseline who were treated had lower theta, alpha, sigma, and beta power compared to the untreated group. However, the children who were treated had increased sigma power at follow up that indicates sleep improvement.',
    conclusion:
      'Treatment of SDB was found to be effective in reducing OSA severity in DS children with SDB. SDB treatment did not improve sleep macro-architecture. Increased sigma power during NREM sleep at follow up in children who received treatment suggests an increase of sleep spindles known to maintain sleep, which indicates improvement in sleep quality. The improvement of both sleep quality and SDB severity in children with DS following treatment will likely improve their quality of life.',
    keywords: [],
    author: ['Viecky Mirsa Putri Betavani '],
    supervisors: ['Professor Rosemary Horne', 'Dr Lisa Walter'],
    coressponding: ['Department of Paediatrics'],
    poster:
      './monash/images/Betavani_Viecky Mirsa Putri_32569998_Scientific Poster.pdf',
    thumbnail: './monash/thumbnails/Betavani_Viecky Mirsa Putri_32569998_Scientific Poster.png',
    slug: 'The-Effect-of-Treatment-of-Sleep-Disordered-Breathing-on-Sleep-Quality-in-Children-with-Down-Syndrome',
  },
  {
    nameId: 'yasmine',
    university: 'Monash',
    title:
      'Interventions for Parents of Children with Autism Spectrum Disorder (ASD): An Umbrella Review ',
    introduction:
      'Parents of children with ASD are prone to various mental health conditions such as, depression, anxiety disorder, high stress levels, and lower level of well-being or quality of life. These difficulties can arise for many reasons and at different times during their child’s life. The stress could come from the act of caregiving, isolation from peers, inability to communicate needs with clinicians and their support system, or inability to use healthy coping mechanisms. Parent intervention is needed to prevent and manage mental health problems so parents and their family can thrive.',
    objective:
      'This umbrella systematic review evaluated and synthesised published systematic reviews or meta-analyses reporting interventions for parents of children with ASD. This study is presented with two aims. The first to assess the effectiveness of parent interventions and the second to assess the quality of each included review.',
    methods:
      'This research uses established methods for umbrella systematic reviews and a qualitative approach for data synthesis',
    results:
      'We include 9 Systematic Reviews and Meta-Analyses, there are 6 Parent intervention with 6 different outcomes, the methods of intervention are conventional psychological therapies, such as Mindfulness (N =1467), Acceptance and Commitment Therapy (ACT) (N=168) ,Cognitive Behavioral Therapy (CBT) (N=309), Parent education (N=975), Parent Support Groups (N=124) and Psychointervention (N=909), were reported to have favorable outcomes. The quality of the reviews varied, with 4 reviews with high risk of bias, 4 reviews with a low risk of bias, this happens due to the heterogeneity and low data presented in each review. For mindfulness, for example, parental stress, depression and anxiety levels of parents were reduced. Reviews included interventions from high income countries such as the USA, Australia and the UK. Parent interventions were delivered under clinician supervision as hospital-based, home-delivered and online, for example with online forums.',
    conclusion:
      'Parents of children with ASD are likely to benefit from psychological interventions and support, with evidence emerging of reduced mental health problems and increased well-being and overall quality of life. However, because there is very little data presented right now, there is not enough evidence that is available to aid services development. These findings would be very beneficial in terms of finding the best setting and implementation of the intervention for parents of children with ASD.',
    keywords: [
      'Autism Spectrum Disorder',
      'Parent Intervention',
      'Parents of children with ASD',
      'Psychological therapies',
      'Mental health problems',
    ],
    author: ['Yasmine Syifa Nabila Budi'],
    supervisors: ['Prof. Katrina Williams', 'Dr.Georgina Cox'],
    coressponding: ['Department of Pediatrics, School of Clinical Sciences'],
    poster: './monash/images/Yasmine Syifa N.Budi_Poster.pdf',
    thumbnail: './monash/thumbnails/Yasmine Syifa N.Budi_Poster.png',
    slug: 'Interventions-for-Parents-of-Children-with-Autism-Spectrum-Disorder-(ASD):-An-Umbrella-Review',
  },
];

const newcastle: DataType[] = [
  {
    nameId: 'adrian',
    university: 'Newcastle',
    title:
      'Comparing Gene Expression and Pathways Between Human and Porcine Lung Models of Ex Vivo Lung Perfusion',
    introduction:
      'Lung transplantation is the only effective option for patients with end-stage lung  diseases when conservative treatments have failed, but there is a glaring discrepancy between the  availability and demand for suitable lung donors. The main cause of mortality post-transplantation  is ischaemia-reperfusion injury leading to primary graft dysfunction, characterised by complex  inflammatory processes. Ex vivo lung perfusion (EVLP) preserves, assesses, and reconditions  lungs that were initially deemed unsuitable for transplantation, thereby presenting a potential  solution.',
    objective:
      'Identify the differential genes and pathways expressed post EVLP in porcine lungs and  compare them with results from human EVLP models.',
    methods:
      'Porcine lung biopsies were procured from XVIVO Perfusion, sequenced by Newcastle  research group, validated using reverse transcription-PCR. Human microarray dataset was  obtained from public database, while human RNA-sequencing data was obtained from a  collaborating research group. Database for Annotation Database for Annotation, Visualization,  and Integrated Discovery online tool was used to perform pathway analysis. Statistical analysis  was done using R and GraphPad Prism 9.1.2.',
    results:
      'Upregulated KEGG pathways were related to immune processes in both models, while  Reactome pathways revealed the involvement of pathways related to cell survival and apoptosis. Three overlapping pathways in porcine and human were highlighted: tumour necrosis factor, nucleotide-binding and oligomerisation domain-like receptor, and nuclear factor-κB signalling  pathways.',
    conclusion:
      'The genes and pathways significantly expressed following EVLP are mostly involved  in immune processes. Comparative analysis between porcine and human models revealed overlaps. These findings support the use of EVLP as a method to increase the donor pool and to potentially  identify therapeutic targets.',
    keywords: [],
    author: ['Adrian P Karman','Jenny Gilmour','Simi Ali'],
    supervisors: [],
    coressponding: ['Translational and Clinical Research Institute', 'Faculty of Medical Sciences'],
    poster: './newcastle/images/Adrian Prasetya Karman_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Adrian Prasetya Karman_Poster.png',
    slug: '',
  },
  {
    nameId: 'wicaksono',
    university: 'Newcastle',
    title:
      'Association between sleep and mental health outcomes in the Newcastle Thousand Families Study',
    introduction: 
      'Sleep quality is a risk factor for poor mental health. However, there are  many subdomains of sleep quality and psychological well-being, and their association  have not been studied. Most existing studies also focused on younger cohorts, while none  studied the association in older cohorts.',
    objective:
      'The aim of this study was to determine the association and its strength between  overall sleep quality and general mental health, along with their subdomains in the  Newcastle Thousand Families Study cohort at age 60.',
    methods:
      'This is a cross-sectional analysis using 434 respondents from the cohort. Sleep  quality and psychological well-being were assessed with the Pittsburgh Sleep Quality  index (PSQI) and 28-item General health Questionnaire (GHQ-28). Linear regression was  conducted on global and subdomain scores. Multivariable linear regression was  performed on potential confounders: sex, socioeconomic status, smoking status, pack years smoked, chronic pain status, pain severity, and BMI.',
    results:
      'PSQI and GHQ scores were significantly associated (p<0.001). Most PSQI  subdomains were found to be significantly associated with GHQ, some subdomains had  larger coefficients. Adjusted linear regression coefficients suggest an increase in GHQ by  0.91 for every point increase in PSQI. Smoking was found to be a potential interaction  term and smokers had larger coefficients.',
    conclusion:
      'PSQI is significantly associated with GHQ scores. Significance was found  in both global and subdomain scores. Smoking is a possible interaction term in the  association. There is a lack of power when testing the domain “use of sleep medication”  and “severe depression and a conclusion cannot be made.',
    keywords: [],
    author: ['BA Wicaksono', 'MS Pearce', 'E Slack', 'L Hayes'],
    supervisors: [],
    coressponding: ['Faculty of Population Health Sciences'],
    poster: './newcastle/images/Brahmantyo Ardhi Wicaksono_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Brahmantyo Ardhi Wicaksono_Poster.png',
    slug: '',
  },
  {
    nameId: 'daniel',
    university: 'Newcastle',
    title:
      'Do angiographic characteristics of older patients with non-ST elevation myocardinal infarction differ across Scotland and England?',
    introduction: 
      'As the proportion of older people in the United Kingdom (UK) rises, so does the burden of non-ST elevation myocardial infarction (NSTEMI). Older NSTEMI- patients are often excluded from-studies, causing a-scarcity-of-evidence for determining optimal care in this population and thus a disproportionately high mortality. One lacking data is the angiographic characteristics of older NSTEMI patients in the United Kingdom.',
    objective:
      'Perform angiographic analysis of patients in the Older-Patients-With-Non-ST SEgmeNt-elevatIOn-myocaRdial-Infarction-Randomized-Interventional-TreAtment trial (SENIOR-RITA) across Scotland, North England, Midlands, and South England.',
    methods:
      'Angiographic data obtained from 31 sites were analysed using MEDIS- QAngioXA. Baseline parameters of disease extent, lesion complexity, and lesion dimensions were evaluated. Disease extent was scored comprehensively using the Synergy-Between-Percutaneous-Coronary Intervention-With-Taxus-and-Cardiac- Surgery (SYNTAX)-score. Post-procedural analysis was done for patients undergoing percutaneous-coronary-intervention (PCI). Comparison of means were done between regions and PCI vs. non-PCI groups',
    results:
      '185 patients were included in the final analysis. Most (41.1%) patients had single-vessel disease, followed by 29.7% without significant lesions. 60.2% fell into the ‘low’ baseline SYNTAX tertile. 91 (49.2%) patients underwent PCI and comparison with non-PCI patients revealed significantly worse parameters of disease extent (P<0.05) but non-PCI patients had significantly worse parameters of lesion complexity and stenosis severity. Pre-PCI lesion-diameter-and-area-stenosis was significantly higher in North and South England compared to Scotland or Midlands. All other-angiographic-parameters did not differ significantly between regions (P>0.05).',
    conclusion:
      'Most older NSTEMI patients had low disease extent and lesion complexity. Certain parameters of stenosis severity differed significantly between regions but other angiographic characteristics were similar across Scotland and England.',
    keywords: [],
    author: ['Daniel Edward Raharjo', 'Vijay Kunadian'],
    supervisors: [],
    coressponding: ['Cardiovascular Science in Health and Disease'],
    poster: './newcastle/images/Daniell Edward_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Daniell Edward_Poster.png',
    slug: '',
  },
  {
    nameId: 'edward',
    university: 'Newcastle',
    title:
      'Exploiting GALNT7 to improve the diagnosis and treatment of prostate cancer',
    introduction: 
      'Prostate cancer is currently the most common cancer in the UK. The prostate-specific antigen  (PSA) test is widely used to assist early detection, but its poor accuracy is a major drawback.  Moreover, advanced prostate cancer can develop drug resistance and metastasize. Altered  glycosylation is heavily linked to hallmarks of cancer. The glycosylation enzyme GalNAc  transferase 7 (GALNT7) was found to be upregulated in prostate cancer and could potentially be  exploited as a biomarker to improve diagnosis and treatment.',
    objective:
      'To validate the role of GALNT7 as a novel biomarker and investigate how it is implicated in  prostate cancer progression.',
    methods:
      'GALNT7 expression from patients’ tissue and blood samples was quantified using tissue  microarray (TMA) and sandwich enzyme-linked immunoassay (ELISA), respectively. The effect  of GALNT7 on cell proteome and transcriptome was assessed through proteomics and RNA sequencing using stable cell lines for GALNT7 overexpression and knockdown. These were  followed by bioinformatics and Western blot.',
    results:
      'GALNT7 is significantly upregulated in prostate cancer and offers better diagnostic accuracy than  PSA. GALNT7 appears to regulate the expression of key molecules implicated in tumorigenesis.  The mechanism by which GALNT7 facilitates prostate cancer progression may be by promoting  oxidative stress, as GALNT7 overexpression reduces levels of antioxidants which are important  for the NRF2-mediated oxidative stress response pathway.',
    conclusion:
      'High expression of GALNT7 in prostate cancer suggests that it can serve as a reliable biomarker.  GALNT7 overexpression is associated with prostate cancer progression, potentially due to its  disruption of the NRF2-mediated oxidative stress response pathway.',
    keywords: [],
    author: ['Edward Christopher Yo', 'Jennifer Munkley', 'Gerald Hysenaj', 'Emma Scott'],
    supervisors: [],
    coressponding: ['Biosciences Institute'],
    poster: './newcastle/images/Edward Christopher Yo_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Edward Christopher Yo_Poster.png',
    slug: '',
  },
  {
    nameId: 'eko',
    university: 'Newcastle',
    title:
      'Gene expression profiling of oesophageal adenocarcinoma Comparative analysis of oesophageal adenocarcinoma with and without Barrett’s metaplasia',
    introduction: 
      'Oesophageal adenocarcinoma without evidence of Barrett’s metaplasia (OACwoBE) has been reported to have different tumour characteristics and clinical outcomes than oesophageal adenocarcinoma with of Barrett’s metaplasia (OACwBE). However, little is known about possible differences in gene expression between the two types of cancer.',
    objective:
      'Assess molecular and functional differences between OACwoBE and OACwBE. Evaluate potential differences in immune response and expression of genes associated with epithelial mesenchymal plasticity.',
    methods:
      'Raw data from OACwoBE and OACwBE RNA-sequencing were analysed for differential expression with DESeq2 software. The differentially expressed genes (DEGs) identified were assessed for functional enrichment with ShinyGO. The raw data from OACwoBE and OACwBE RNA-sequencing were analysed for cell-type enrichment with xCELL and CibersortX software. DEGs were scrutinised manually to identify pro epithelial mesenchymal transition (EMT) genes listed in the dbEMT database.',
    results:
      'Two hundred and seventeen genes were differentially expressed between OACwoBE and OACwBE. Expression of 104 of these genes was higher, and of 113 genes was lower, in OACwoBE than in OACwBE. The former genes were associated functionally with anti-coagulant activities, invasive characteristics, and stronger immune responses. The latter genes were associated with neuron cell development. There was little evidence of any differences in predicted immune cell populations between OACwoBE and OACwBE. Four pro-EMT genes, FGF4; FGF5; GYS2 and CDH2, were expressed at higher levels in OACwoBE than OACwBE (Benjamini-Hocberg; p=0.003, p=0.01, p=0.03, p≤0.0005, respectively). No pro-EMT genes were expressed at higher level in OACwBE than OACwoBE.',
    conclusion:
      'OACwoBE is molecularly and functionally distinct from OACwBE',
    keywords: [],
    author: ['Eko Ngadiono', 'Felicity E. B. May', 'Dphil', 'Ananthakri Madhavan', 'MD'],
    supervisors: [],
    coressponding: ['Postgraduate student, Master of Research', 'Northern Institute for Cancer Research, Medical School'],
    poster: './newcastle/images/Eko Ngadiono_Poster1.pdf',
    thumbnail: './newcastle/thumbnails/Eko Ngadiono_Poster1.png',
    slug: '',
  },
  {
    nameId: 'felicitas',
    university: 'Newcastle',
    title:
      'Assessing the expression of lysosomal proteins in pancreatic islets in type 2 diabetes',
    introduction: 
      'Autophagy, a cellular recycling process, helps regulate pancreatic β-cell homeostasis. Impairment of this function has been observed in type 2 diabetes (T2D) and thought to occur secondary to lysosomal dysfunction, which leads to β-cell loss. Previous single-cell RNA- sequencing data analysis showed changes in lysosomal gene expression in T2D, however limited investigation has been done at a protein level.',
    objective:
      'To explore the expression of lysosomal proteins in tissue from control and T2D patients alongside markers of autophagic flux',
    methods:
      'BMI-age matched pancreatic tissues from human donors (n=10) were obtained from QUOD pancreatic biobank. Pancreatic tissues of db/db mouse model and non-BMI-age matched stained human pancreatic tissue images were obtained from previous studies. Immunofluorescent staining was performed on autophagy markers (p62 and light chain-3 (LC3)) and lysosomal proteins (Transcription factor EB (TFEB), lysosomal associated membrane protein-2 (LAMP2), cathepsin B and D). Images were collected through confocal microscopy and analysed with FIJI. Unpaired T-test was performed using GraphPad Prism.',
    results:
      'We observed a significant increase of p62 puncta in db/db mice and in T2D patients vs control, indicating autophagic flux dysregulation. An increase in LC3, LAMP2, cathepsin B and D puncta expression within insulin positive cells of T2D patients vs control was found, suggesting lysosomal clearance dysfunction.',
    conclusion:
      'The increased autophagic and lysosomal protein accumulation in T2D pancreatic islet indicates the presence of autophagic and lysosomal dysfunction which possibly contribute towards β-cell loss in T2D. This concept may improve understanding of T2D pathophysiology and provide a basis for future therapeutic approaches',
    keywords: [],
    author: ['Felicitas Tania Elvina', 'Catherine Arden'],
    supervisors: [],
    coressponding: ['Bioscience Institute'],
    poster: './newcastle/images/Felicitas Tania Elvina_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Felicitas Tania Elvina_Poster.png',
    slug: '',
  },
  {
    nameId: 'hannah',
    university: 'Newcastle',
    title:
      'Aortic Valve Development and Remodeling in the Human Embryo',
    introduction: 
      'Aortic valve promotes unidirectional blood flow to the whole body but is  commonly congenitally malformed. The underlying causes are studied from the structural  and molecular mechanisms that regulate mouse valve development, yet the findings are not  always translated to human. In particular, retinoic acid (RA) signalling genes are shown to be  highly and specifically expressed in human aortic valve, but their roles are undetermined.',
    objective:
      'To compare the morphogenesis of human and mouse developing aortic valves, and to  establish if RA signalling varies between the two.',
    methods:
      '',
    results:
      'Morphogenic changes were analysed in human (CS14-22) and mouse  (E11.5-18.5) embryos. The sequence of early cushion development was comparable, but the  duration of valve remodelling and maturation was relatively faster in mice. Measurement of leaflet and sinus length in human embryos demonstrated that leaflets did not elongate relative  to sinuses that significantly grew deeper. Two RA-signalling genes (CRBP1, CRABP2)  shown in human valves via spatial transcriptomics, and two RA-synthesising genes  (RALDH1, RALDH2) reported in mouse valves and important for cardiogenesis were traced.  RALDH2 was similarly found in epicardium, CRBP1 was observed in valve endocardium  with a slightly different distribution, CRABP2 was identified denser in human myocardium  and mouse aortic wall, RALDH1 was transiently detected in human valve cushion and  restricted to mouse epicardium.',
    conclusion:
      'Although valvulogenesis is comparable in human and mouse embryos, the  spatiotemporal control of its regulatory genes, such as those associated with RA signalling,  can be different. Therefore, translational aspect of mouse models should be cautiously  interpreted.',
    keywords: [],
    author: ['Hannah Soetjoadi', 'Prof. Deborah Henderson', 'Jasmin Turner', 'Lorraine Eley', 'Ahlam Alqahtani'],
    supervisors: [],
    coressponding: ['Biosciences Institute'],
    poster: './newcastle/images/Hannah_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Hannah_Poster.png',
    slug: '',
  },
  {
    nameId: 'igor',
    university: 'Newcastle',
    title:
      'ChondroTargets: Determining Regulators of Chondrogenesis',
    introduction: 
      'Cartilage is a smooth elastic tissue that is important for long bone formation and joint function. Cartilage is formed from a series of complex processes, chondrogenesis, that  starts from mesenchymal stem cells (MSCs). Multiple genes need to work in co-ordination to ensure that chondrogenesis is running properly. Such genes are SOX9, COL2A1, and ACAN.',
    objective:
      'To identify regulators of chondrogenesis and demonstrate their roles in the process.',
    methods:
      'RNA-seq and in-silico analysis were performed to identify the regulators of chondrogenesis. Gene expression mapping was done to predict novel regulators of chondrogenesis. A systematic literature review was performed to optimise the result of the in silico analysis. siRNA transfections on human bone marrow derived-MSCs were performed to  knockdown specific regulator genes and the consequences of the perturbation on chondrogenesis monitored by RT-qPCR by observing the expression of SOX9, COL2A1, and  ACAN. Lastly, a glycosaminoglycan assay was also done to investigate the result of the  knockdown.',
    results:
      'RNA-seq and in silico analysis identified around 5000 potential regulators of chondrogenesis. Of these SS18, HNRNPD and TUT4 were selected based on known functions  in regulating RNA stability. Knockdown of SS18 and HNRNPD in decreased the expression  of SOX9, COL2A1, and ACAN during MSC-chondrogenesis. Knockdown of TUT4 in  SW1353 chondrosarcoma cells increased the expression of microRNAs, miR-140-5p and miR 324-5p',
    conclusion:
      'Using gene expression mapping, we can identify the novel regulators of chondrogenesis. Knockdown of SS18 and HNRNPD supressed the expression of SOX9, COL2A1, and ACAN causing suppression of chondrogenesis. Looking at the result, TUT4  might regulate miRNAs strand selection.',
    keywords: [],
    author: ['Igor I. Wiguna', 'Dr. Jamie Soul', 'Dr. Matt J. Barter', 'Dan J. Hayman', 'Prof. David A. Young'],
    supervisors: [],
    coressponding: ['Skeletal Research Group', 'Biosciences Institute', 'International Centre for Life'],
    poster: './newcastle/images/Igor Ian Wiguna_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Igor Ian Wiguna_Poster.png',
    slug: '',
  },
  {
    nameId: 'jason',
    university: 'Newcastle',
    title:
      'Upregulation of miR-18a-5p in colony forming unit Hill’s as a biomarker of subclinical cardiovascular disease; study on type 1 diabetes and the effect of metformin.',
    introduction: 
      'Overexpression of miR-18a-5p was shown to be pro-atherogenic in animals,  whilst colony forming unit Hill’s (CFU-Hill’s) colonies have been suggested to serve as a  biomarker for vascular health. As type 1 diabetes mellitus (T1DM) offers a model of  subclinical cardiovascular disease (CVD), we investigated miR-18a-5p expression in CFU Hill’s colonies in T1DM, with additional intervention with metformin.',
    objective:
      'To explore the role of miR-18a-5p and the cardioprotective effect of metformin in  subclinical CVD.',
    methods:
      '29 T1DM patients without overt CVD and 20 matched controls were analysed.  Patients were administered with metformin for 8 weeks. We assayed miR-18a-5p, cytokines,  and vascular health markers using real-time quantitative polymerase chain reaction, Meso  Scale Discovery, and flow cytometry, respectively.',
    results:
      'MiR-18a-5p was upregulated in T1DM (p=0.008), whereas metformin downregulated  its expression (p=0.44). MiR-18a-5p was inversely correlated with CFU-Hill’s colonies,  CD34+, CD34+CD133+ cells, and positively with IL-10, CRP, VEGF-D, and thrombomodulin  (all p<0.05). Receiver operating characteristic curve analysis demonstrated upregulated miR 18a-5p defining subclinical CVD at HbA1c of 44.5 mmol/mol (AUC=0.888). Ingenuity  Pathway Analysis documented miR-18a-5p inhibiting insulin-like growth factor 1, estrogen  receptor 1, hypoxia inducible factor 1 subunit-α, cellular communication network factor 2, and  protein inhibitor of activated STAT3, whilst metformin activating these mRNAs via  transforming growth factor-β1 and VEGF.',
    conclusion:
      'We validated animal research on anti-angiogenic miR-18a-5p with several  therapeutic targets for future CVD therapies. Metformin’s cardioprotective effect was mediated  by the reversal of miR-18a-5p genes inhibition. Upregulated miR-18a-5p defined subclinical  CVD at pre-diabetes and may act as a sensitive biomarker of CVD.',
    keywords: [],
    author: ['Jason Phowira', ', Sherin Bakhashab', 'Jolanta Weaver'],
    supervisors: [],
    coressponding: ['Translational and Clinical Research Institute'],
    poster: './newcastle/images/Jason Phowira_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Jason Phowira_Poster.png',
    slug: '',
  },
  {
    nameId: 'josephine',
    university: 'Newcastle',
    title:
      'Using single cell RNA-Seq data to identify cell type transcriptome specific changes in response to application of retinotoxins',
    introduction: 
      '',
    objective:
      '',
    methods:
      '',
    results:
      '',
    conclusion:
      'Retinal degenerative diseases (RDD) are one of the most common causes of blindness  worldwide. Current methods to investigate RDDs utilize animal models. However, their  retinas are significantly different from human retina. Therefore, there is a need to discover  new approaches to model RDDs. Human induced pluripotent stem cells (hiPSCs) have  the potential to replace animal models. They can differentiate into retinal organoids, which  mimic retinogenesis and contain all the key retinal cell types. This study aims to utilize  single cell RNA sequencing data to identify changes in the transcriptome of retinal cell  types upon application of six retinotoxins (digoxin, sildenafil, thioridazine, methanol,  ethanol, and ketorolac). After differentiation of hiPSCs into retinal organoids, scRNA-seq  data was processed, and differentially expressed gene lists were generated. Core  analysis was done using Qiagen Ingenuity Pathway Analysis for each retinal cell type  (rods, cones, astrocytes, retinal ganglion cells, Muller glia cells), identifying target genes,  upstream regulator, and canonical pathways. In photoreceptors, genes related to stress  were upregulated while genes related with key function of the retina were downregulated.  Downregulation of key retinal genes led into dysfunction of Phototransduction process,  which manifests as clinical symptoms commonly seen in toxicity. While retinotoxins  induce the activation of astrocytes proven by upregulation of target genes. In RGCs,  survivability of the cells is decreased when affected by toxins. Lastly, in Muller glia cells,  genes (CCL2) and regulators (endocannabinoids) indicating inflammation are increased.  Transcriptome-specific changes identified are in concurrence with published literature  and obtained immunofluorescence data.',
    keywords: [],
    author: ['Josephine Defina Pujangga', 'Professor Majilinda Lako', 'Dr Birthe Hilgen', 'Dr Rachel Queen'],
    supervisors: [],
    coressponding: ['Bioscience Institute'],
    poster: './newcastle/images/Josephine Defina Pujangga_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Josephine Defina Pujangga_Poster.png',
    slug: '',
  },
  {
    nameId: 'muhammad',
    university: 'Newcastle',
    title:
      'Bioinformatic, Disease Linkage and Structural Analysis of Cyclin T2 (CCNT2) Y223A/F and Y224A/F Mutation as a Promising Anti-Cancer Drug Target Inhibition: A Computational Crystallographic & Experimental Approach',
    introduction: 
      'Cancer has become the world’s leading cause of death that triggers various drug  target discoveries, including Cyclin-dependent kinases (CDKs). The delicate balance between  cyclins, CDKs, and CKIs are essential for an orderly cell cycle. Cyclin T become an integral part  of P-TEFb that play an essential role in regulating various transcription process.',
    objective:
      'To investigate whether cyclin T2 has good potential as a target for a novel anti-cancer drug  through computational and experimental approach drug discovery.',
    methods:
      'Computational approaches were performed by utilizing various tools such as DepMap,  Chimera, CCP4MG, Coot, Jalview, and GROMACS. Meanwhile, experimental approaches were  conducted in structural biology and target validation & bioscience laboratory.',
    results:
      'Computationally, DepMap has shown 26 cell lines with CCNT2 gene  effects >0.50 & the top five gene co-dependencies were identified. The types of mutation that  become predominant were missense. 15 different datasets of Cyclin T2 have been successfully  refined using Coot and further used for MD simulation. Lastly, through CHIMERA & CCPI4MG,  several hotspot targets were identified which validate the potential of cyclin T2. Further, In the  structural biology laboratory, site-directed mutagenesis for Flag T2 Y223A/F, Flag T2 Y224 A/F,  T2 Y223 A/F, and T2 Y224 A/F were successfully cloned. In the target validation lab, four  different assays including XTT, SRB, BCA, & western blot were performed and the result was  AZD4573 causes significant inhibition towards SNU398 and MV4-11 cell lines.',
    conclusion:
      'Overall, functionally relevant sites on the surface of cyclin T2 can be targeted by  small molecules (fragments) as starting points for inhibitor development.',
    keywords: [],
    author: ['Muhammad Aligian Remifta Putra', 'Martin Noble', 'Jane Endicott'],
    supervisors: [],
    coressponding: ['Postgraduate School, Faculty of Medical Sciences', 'CRUK Newcastle Drug Discovery Unit, Center For Cancer'],
    poster: './newcastle/images/Muhammad Alifian Remifta Putra_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Muhammad Alifian Remifta Putra_Poster.png',
    slug: '',
  },
  {
    nameId: 'marcello',
    university: 'Newcastle',
    title:
      'Serum Gamma Glutamyl Transferase (GGT) as a Potential Prognostic Biomarker for Detrimental Neutrophils in Hepatocellular Carcinoma (HCC)',
    introduction: 
      'With increasing alcohol consumption and prevalence of obesity, the mortality of fatty  liver disease-associated hepatocellular carcinoma (HCC) has significantly risen.  Immuno- oncology therapies promoting anti-tumour T-cells have emerged, but with  limited success. Circulating neutrophils may suppress T-cells and are associated with  poor HCC outcomes. Biomarkers of detrimental tumour-associated neutrophils (TANs)  may guide treatment choices. Serum gamma-glutamyl transferase (GGT) is an indicator  of neutrophil-induced inflammation in fatty liver diseases.',
    objective:
      'To investigate the role of serum GGT as a prognostic biomarker that identifies  detrimental TANs in patients with fatty liver-associated HCC.',
    methods:
      'Serum GGT associations with clinicopathological data and outcomes of 300 Newcastle  HCC patients (2000-2017) were analysed retrospectively. GGT and CD66b+ neutrophils  expression were assessed immunohistochemically on liver biopsy tissues from 32 and  84 patients, respectively.',
    results:
      'Serum GGT - positively correlated with circulating neutrophils - was associated with  deteriorating performance status, advanced TNM stages, and portal vein thrombosis (PVT). Although typically expressed on the canalicular surface of hepatocytes, 31.3% of  HCC tissues displayed aberrant membranous and/or cytoplasmic GGT expression in  the intratumour and/or peritumour area. Aberrant cytoplasmic GGT was positively  associated with elevated peritumour neutrophils, which was associated with large  tumours and PVT. Furthermore, peritumour neutrophils positively correlated with  circulating neutrophils and serum GGT. High serum GGT and high peritumour to  intratumour neutrophils ratio were independently associated with poor overall survival.',
    conclusion:
      'Serum GGT is an independent poor prognostic indicator in patients with fatty liver associated HCC. It may also identify detrimental peritumour TANs, with a potential role  as a clinical biomarker guiding immuno-oncology therapies.',
    keywords: [],
    author: ['Marcello M Kadharusman','Misti McCain', 'Ruchi Shukla', 'Helen L Reeves'],
    supervisors: [],
    coressponding: ['Clinical and Translational Research Institute', 'Biosciences Institute'],
    poster: './newcastle/images/Marcello Mikhael Kadharusman_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Marcello Mikhael Kadharusman_Poster.png',
    slug: '',
  },
  {
    nameId: 'marshal',
    university: 'Newcastle',
    title:
      'Knowledge and Understanding of Lifestyle Factors Relating to Sarcopenia in United Kingdom Adults Aged 45 years and Over',
    introduction: 
      'Sarcopenia is a geriatric disease that is characterised by progressive and generalized  loss of muscle mass and strength. It leads to reduced quality of life and increases economic  burden. Therefore, increasing knowledge and awareness towards sarcopenia should be the main  focus to reduce the detrimental impacts caused by it.',
    objective:
      'To assess the current knowledge and understanding of lifestyle factors relating to  sarcopenia of people in the United Kingdom (UK) aged 45 years old and over, and the prevalence  of sarcopenia among the respondents.',
    methods:
      'A cross-sectional web-based survey was conducted on people aged 45 years old and  over in the UK. It contained questions on socio-demographical characteristics, knowledge,  attitudes and practices (KAP) towards sarcopenia and its prevention. Bloom’s modified cut-off  value of 70% was used to categorised respondent’s KAP into two levels: poor/negative and  good/positive. The Strength, Assistance with walking, rising from a chair, climbing stairs, and falls  (SARC-F) questionnaire was also adapted to assess how many respondents have high risk of  sarcopenia.',
    results:
      'Responses were collected from a total of 123 respondents. The median score for  knowledge was 50%; attitude was 80% and Practice was 75%. One out of six respondents were  at risk of sarcopenia based on the adapted SARC-F questionnaire. ',
    conclusion:
      'hese findings suggest that UK adults aged 45 years old and above demonstrate poor knowledge but positive attitudes and good practices towards sarcopenia and its prevention.  Further efforts to raise awareness is critical to improve knowledge of sarcopenia and its  prevention.',
    keywords: ['KAP', 'muscle', 'nutrition', 'physical activity', 'sarcopenia', 'prevention of sarcopenia'],
    author: ['Marshal Achmad Wachdin', 'Emma Stevenson', 'Wouter Peeters'],
    supervisors: [],
    coressponding: ['Population Health Sciences Institute'],
    poster: './newcastle/images/Marshal Achmad Wachdin_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Marshal Achmad Wachdin_Poster.png',
    slug: '',
  },
  {
    nameId: 'meuthia',
    university: 'Newcastle',
    title:
      'Exploring BRD4 as a Potential Target for Cancer Treatment using Computational and Experimental Approaches',
    introduction: 
      'BRD4 is ubiquitously expressed in human cells and has been implicated in the  promotion of gene transcription, including the driving oncogenes in tumour cells. The targeting  of BRD4 for cancer treatment has been a great interest in drug discovery since the discovery  of BRD4-NUT oncogene fusion in a rare and aggressive squamous cell carcinoma.',
    objective:
      'To critically examine BRD4 as an anti-cancer drug target, with in silico methods to  analyse the dependency of tumours on BRD4, to examine the likely druggability of the  protein, and in vitro experiments to examine chemical inhibition.',
    methods:
      'In silico tools including depmap.org, COSMIC-3D were utilised to analyse  dependency, sensitivity, and mutations of cancer cells. The mutations were then mapped onto  crystal structure using UCSF Chimera. MD simulation using gromacs were used to analyse the  binding of fragments that were priorly modelled in COOT and CCP4. SRB assay and Western  Blot were performed to analyse inhibition in tumour cells. ',
    results:
      'In silico bioinformatics analysis showed BRD4 as a common essential gene and  structural analysis show BRD4 has druggable binding pockets where fragments could stably  bind and are unlikely to be affected by known mutations. In vitro experiments demonstrated  loss of tumour cell proliferation upon BRD4 inhibition that could be mediated by loss of MYC  protein expression.',
    conclusion:
      'The complementary in silico and in vitro analysis of BRD4 suggested that it is a  promising target that is worth pursuing in the development of anti-cancer agent.',
    keywords: [],
    author: ['Meuthia Faralita Annisa'],
    supervisors: [],
    coressponding: [''],
    poster: './newcastle/images/Meuthia Faralita Annisa_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Meuthia Faralita Annisa_Poster.png',
    slug: '',
  },
  {
    nameId: 'priscilla',
    university: 'Newcastle',
    title:
      'Tracking treatment resistant clones in adult Acute Lymphoblastic Leukaemia',
    introduction: 
      'Acute lymphoblastic leukaemia (ALL) is a type of blood cancer marked by the malignant  transformation of lymphoid progenitor cells. The prognosis of ALL is excellent in children, but is  devastating in older adults. There is evidence that secondary genetic abnormalities can drive  treatment resistance and relapse. Tracking these abnormalities through treatment may lead to better  understanding of ALL genomics in older adults, which can be used to better stratify and manage ALL  in this population.',
    objective:
      'To identify variants in older adult ALL patients and track them through treatment ',
    methods:
      'Targeted sequencing incorporating Duplex Sequencing was performed on the serial samples  of 6 patients aged >50 years old. Variant calling (using VarScan), and variant annotation and filtering  (using VEP) were then performed to generate a list of candidate variants. These variants were then  tracked through treatment.',
    results:
      'A total of 34 single nucleotide variants were found in the patient cohort. The most common  alterations observed occurred in: RAS pathway (n=8), cell cycle (n=3), and epigenetic regulator (n=3).  Variant tracking results revealed 5 patterns in variant levels: 1) lost post induction (n=22), 2) decreased  but persisted in follow up samples (n=5), 3) unchanged (n=1), 4) increased (n=2), and 5) exclusive in  follow-up samples (n=4).',
    conclusion:
      'This study supports the use of paediatric-like intensive chemotherapy in older adult ALL  patient as it resulted in the clearance of both clonal and subclonal variants regardless of patient’s  risk group at diagnosis, provided that the level of toxicity can still be tolerated.',
    keywords: [],
    author: ['Priscilla Ardianto', 'Dr. Sarra Ryan', 'Dr. Richard Yim', 'Professor Anthony Moorman', 'Dr. Thomas Creasey'],
    supervisors: [],
    coressponding: ['Institute of Translational and Clinical Research'],
    poster: './newcastle/images/Priscilla Ardianto_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Priscilla Ardianto_Poster.png',
    slug: '',
  },
  {
    nameId: 'raya',
    university: 'Newcastle',
    title:
      'Vascular Pathology and Hippocampal Atrophy in Alzheimer’s Disease: Insights from the National Alzheimer’s Coordinating Centre Database',
    introduction: 
      'As the major cause of dementia, Alzheimer’s Disease (AD) is a massive healthcare challenge with  an ever-increasing burden. Failure of previous clinical trials has led to the urgency of expanding  our understanding of the AD pathogenesis from different perspectives. Increasing evidence  indicates that impairments in the cerebral vasculature contribute to the pathogenesis of  Alzheimer’s Disease (AD). A key symptom of AD is cognitive impairment and hippocampal  atrophy (HA) is believed to be a marker of cognitive decline.',
    objective:
      'This study aims to analyse the association between various vascular pathologies and degree of HA  in AD patients.',
    methods:
      'Data from the National Alzheimer’s Coordinating Center database was used in this study.  Inclusion criteria for the participants were: clinically diagnosed with AD, pathologically confirmed  with AD, and available data on HA severity. Chi-square (and Cramer’s V for effect size  interpretation), ANOVA and Kruskal-Wallis were performed for univariate analyses meanwhile  multivariate analyses were done using multiple regressions.',
    results:
      'Moderate-severe arteriolosclerosis (p=0.000), atherosclerosis of the circle of Willis (CoW,  p=0.002), cerebral amyloid angiopathy (p<0.001) and white matter rarefaction (p<0.001) are found  significantly higher in participants with higher HA severity. Using MRI, total cerebrum grey  matter volume, hippocampi volume and left middle temporal volume were associated with severity  of HA, with a decreasing trend in these volumes as severity of HA increases.',
    conclusion:
      'Four vascular pathologies were associated with HA severity and in particular atherosclerosis of  the CoW has biggest prediction power to HA severity.',
    keywords: [],
    author: ['Raya Makarim Penantian', 'Dr Yoshiki Hase', 'Prof Rajesh Kalaria'],
    supervisors: [],
    coressponding: ['Postgraduate Student, Master of Research', 'Neurovascular Research Group', 'Translational and Clinical Research Institute'],
    poster: './newcastle/images/Raya Makarim Penantian_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Raya Makarim Penantian_Poster.png',
    slug: '',
  },
  {
    nameId: 'safitri',
    university: 'Newcastle',
    title:
      'Investigation of Glial Changes in Dementia with Lewy Bodies',
    introduction: 
      'Dementia with Lewy bodies (DLB) is the second most common  neurodegenerative disease after Alzheimer’s disease (AD). The histopathological  hallmark of DLB is accumulation of Lewy bodies from aggregated α-synuclein.  Microglia and astrocytes are proposed to hold essential roles in initiation and  progression of DLB by regulating inflammation.',
    objective:
      'Investigating inflammatory changes in DLB by using specific protein markers  for astrocytes and microglia.',
    methods:
      'RNA-sequencing data from fusiform gyrus of control and DLB cases were  used to identify the differentially expressed genes and to be cross compared with  literature to find specific glial markers. Preexisting data and sixty brain samples of  control (23), AD (17), and DLB (20) cases were utilized for analysis with  immunohistochemistry, to determine glial size and density, western blot, and dot blot  to determine glial protein expression.',
    results:
      'Fusiform DEGs list indicated upregulation of inflammatory genes in DLB and  control cases. Specific glial markers were found upregulated for M2-micrgolia (LSP1,  HLA-DOA) and A1-astrocyte (C3). There was no significant correlation between  distribution of glial cells and DLB pathology. Astrocytes were found significantly  expressed and larger in size in disease groups (DLB, AD) compared to control.  Disease groups exhibited larger microglial size, but microglial protein expression  showed no remarkable difference.',
    conclusion:
      'In both DLB and AD, inflammatory changes may be mediated by  astrocytes rather than microglia. Further work will be required to investigate the role  of astrocytes in clinical progression and pathology of DLB.',
    keywords: [],
    author: ['Safitri Maulidina', 'Christopher Morris', 'Lina Patterson'],
    supervisors: [],
    coressponding: ['Institute for Ageing and Health'],
    poster: './newcastle/images/Safitri Maulidina_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Safitri Maulidina_Poster.png',
    slug: '',
  },
  {
    nameId: 'shefilyn',
    university: 'Newcastle',
    title:
      'Coping with effects of social isolation during the coronavirus disease (COVID-19) pandemic',
    introduction: 
      'Informal carers are vulnerable to loneliness, particularly those caring for people living  with dementia (PLWD). The COVID-19 pandemic significantly affected access to social support services,  which may have exacerbated pressures on informal carers. Government advice and support have been  limited by lack of evidence in this field.',
    objective:
      'To (i) compare carers’ wellbeing during the pandemic; (ii) understand the impact of COVID-19  on informal carers; (iii) identify challenges to care for PLWD and (iv) identify facilitators and coping  strategies employed by carers of PLWD during the pandemic.',
    methods:
      'This mixed methods study sampled carers of older adults with and without dementia from  a larger study involving a UK-wide online survey circulated between April-July 2020. Office of National  Statistics Wellbeing Scale (ONS4), Katz Index of Independence in Activities of Daily Living, and Lubben  Social Network Scale scores were assessed. Answers to open-ended questions were analysed using  thematic analysis. ',
    results:
      '281 participants were included in this study. Decrease in wellbeing (ONS4) scores was  observed during the pandemic (p<0.05), without significant difference between groups of carers.  Thematic analysis revealed increased perceived care burden, loss of respite, worsening of care  recipients’ symptoms and healthcare and essential service inaccessibility contributed to this decline.  Mindfulness and social connectedness were prominent coping strategies; technological devices and  internet connectivity facilitated coping and adapting care during the lockdown.',
    conclusion:
      'Social isolation during the COVID-19 pandemic negatively affected carer wellbeing.  Research should further explore carers’ experiences of isolation and coping to inform future  interventions and support services.',
    keywords: [],
    author: ['Shefilyn Widjaja', 'Marie Poole', 'John-Paul Taylor', 'Alan Thomas', 'Alison Yarnall', 'Ríona Mc Ardle', 'Rachael A Lawson'],
    supervisors: [],
    coressponding: ['Translational and Clinical Research Institute', 'Population Health Sciences Institute'],
    poster: './newcastle/images/Shefilyn Widjaja_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Shefilyn Widjaja_Poster.png',
    slug: '',
  },
  {
    nameId: 'vellia',
    university: 'Newcastle',
    title:
      'Identifying potential therapies for muscular dystrophies in the Wnt/Hh/Notch library',
    introduction: 
      'Muscular dystrophies are characterised by muscle fibre damage and replacement by  adipocytes and fibrosis. These characteristics result in progressive loss of muscle functionality and  muscle mass. Muscle replacement by adipocytes has been well documented for its association with  disease progression. Replacement of muscle fibres takes place due to fibro-adipogenic progenitor  cells (FAPs), which are muscle interstitial mesenchymal cells that differentiate into adipocytes and  fibrocytes in chronic damage. Its adipogenic differentiation is also influenced by signalling pathways  that intercalate with one another; the Wnt, Hedgehog, and Notch pathways. This study hypothesised  compounds from the Wnt/Hedgehog/Notch compound library can inhibit the adipogenic differentiation  of FAPs.',
    objective:
      'To identify pharmacological compounds that influence the Wnt/Hedgehog/Notch pathway to  inhibit the adipogenic differentiation of FAPs.',
    methods:
      '186 compounds were screened and tested in 3 different stages: high-throughput screening,  validation test in adipogenic and fibrogenic differentiation, and IC50 with viability assay. We used  human immortalised FAPs to test all compounds. Detection of adipogenic and fibrogenic differentiation  was done through its perilipin-I and collagen-I expression respectively, measured through In-Cell  Western Assay. Cell viability assay was conducted using PrestoBlueTM. The inter-relationships between treated FAPs and controls were analysed through Student’s t-test, one-way ANOVA, and  regression analysis.',
    results:
      'We identified 4 compounds that demonstrated ≥30% perilipin-I inhibition, no  fibrogenic promotion, and a noncytotoxic maximal inhibitory concentration: Bruceine D,  GSK-3 Inhibitor 1, Triptonide, and LH845.',
    conclusion:
      'The Wnt/Hedgehog/Notch pathway can modulate the adipogenic  differentiation of FAPs, both in inhibiting and promoting manner, implying their potential  as future strategies for muscular dystrophies.',
    keywords: [],
    author: ['Vellia Justian', 'Esther Fernández-Símón', 'Jordi Díaz-Manera'],
    supervisors: [],
    coressponding: ['John Walton Muscular Dystrophy Research Centre'],
    poster: './newcastle/images/Vellia Justian_Poster_.pdf',
    thumbnail: './newcastle/thumbnails/Vellia Justian_Poster_.png',
    slug: '',
  },
  {
    nameId: 'vincent',
    university: 'Newcastle',
    title:
      'CD4+CD28-CX3CR1+ T cells: the CMV-specific troublemakers in patients with myocardial infarction?',
    introduction: 
      'Complications following myocardial infarction (MI) are surprisingly high  despite successful reperfusion and optimisation of drug therapy, suggesting the contribution  of other mechanisms such as inflammation. There has been growing interest in investigating how immune cells influence inflammation in cardiovascular disease. Cytomegalovirus (CMV)  infection which drives expansion of cytotoxic T lymphocytes has been implicated in the  inflammatory process of vascular pathobiology in atherosclerosis preceding MI.',
    objective:
      'To elucidate how CMV serostatus affects leucocyte subsets in patients with MI (the  TACTIC trial) and in patients recovering from COVID-19 (the COVID-HEART study) by  investigating temporal dynamics and performing comparative subgroup analyses.',
    methods:
      'Peripheral whole blood samples obtained from TACTIC trial patients at three time  points and COVID-HEART study patients (single time point) were stained with fluorochrome labelled antibodies. Using multicolour flow cytometry (TruCount and 7-colour assays), we  conducted immunophenotypic characterisation and applied sequential gating to determine  the number of cells/µL and the percentage of their parent populations. CMV serostatus (CMV seropositive or CMV-seronegative) was determined by enzyme-linked immunosorbent assay.',
    results:
      'Longitudinal data of 67 TACTIC trial patients showed that monocyte and  neutrophils declined beyond 6 months. CD4+CD28-CX3CR1+ cells of CMV-seropositive  patients showed a striking difference compared with CMV-seronegative (~30-fold and ~48- fold higher in TACTIC trial and COVID-HEART study patients respectively; p<0.001).',
    conclusion:
      'Several factors influence the temporal changes in leucocyte subsets. Our results  suggest that specific cytotoxic CD4+CD28-CX3CR1+ T cells exclusively found in CMV seropositive patients with MI may play a crucial pathophysiological role through  CX3CL1/CX3CR1 interaction, aggravating inflammation which leads to future post-MI  complications.',
    keywords: [],
    author: ['Vincent Kharisma Wangsaputra', 'Ioakim Spyridopoulos'],
    supervisors: [],
    coressponding: ['Translational and Clinical Research Institute Faculty of Medical Sciences'],
    poster: './newcastle/images/Vincent Kharisma Wangsaputra_Poster.pdf',
    thumbnail: './newcastle/thumbnails/Vincent Kharisma Wangsaputra_Poster.png',
    slug: '',
  },
];

const melbourne: DataType[] = [
  {
    nameId: 'ananda',
    university: 'Melbourne',
    title:
      'Emergency Department Pre-planning for the Surge of Thunderstorm Asthma Patients: A Narrative Review',
    introduction: 
      'Thunderstorm asthma (TSA) is an event with increased cases of asthma symptoms which are preceded by thunderstorms within the surrounding area. Emergency departments (EDs) are often challenged following the event when a sudden surge of patients enter hospitals. Specific plans to mitigate the health impacts are critical. These plans should be prepared based on recent updates regarding the known effective responses to a TSA event. The aim of this narrative review is to describe the management of TSA across the globe, analyze the limitations of management, and address the potential implications for clinical care and further research.',
    objective:
      '',
    methods:
      'PubMed and Ovid MEDLINE were searched for articles published from 2001 to 2021 on TSA occurrence globally and surge capacity in disaster response planning and activities, focusing on EDs. The reference lists of all relevant articles were screened for additional relevant studies, including grey literature.',
    results:
      'All four domains of surge capacity (staff, stuff, space, and system) must be considered when preparing for a TSA disaster. Six reports from six countries (Canada, Iran, Qatar, Israel, Australia, and China) met the inclusion criteria for this study. Canada and China reported TSA patient characteristics meanwhile reports from Iran, Qatar, and Australia described how TSAs were managed during the day of the event. Two innovations that are applicable for TSA disaster planning include reverse triage and telemedicine -both of which showed potential in increasing surge capacity.',
    conclusion:
      'Although TSA epidemics have occurred several times globally, articles discussing the management are still minimal. It was reported that EDs were overwhelmed to provide the appropriate number of staff and space for treatment and triage. Pre-planning to maximize each domain of surge capacity is needed to manage future TSA epidemics. The use of reverse triage has been shown to increase surge capacity but still requires further research to be applied to the TSA epidemic. Technological developments should allow a new form of technology to assist TSA epidemic management.',
    keywords: [],
    author: ['Ananda Tony Stya Sekarmaji', 'Raja Yasmin Khalilah Fahmizal', 'Jonathan Knott'],
    supervisors: [],
    coressponding: ['Faculty of Medicini, Dentistry and Health Science', 'Fakultas Kedokteran, Universitas Indonesia', 'Department of Medical Education and Director of Emergency Research'],
    poster: './melbourne/images/Ananda Tony Satya Sekarmaji and Raja Yasmin Khalilah_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Ananda Tony Satya Sekarmaji and Raja Yasmin Khalilah_Poster.png',
    slug: '',
  },
  {
    nameId: 'arfi',
    university: 'Melbourne',
    title:
      'Risk Factors for Post-Cardiac Implantable Electronic Devices Procedure (CIED) Infections: A Systematic Review',
    introduction: 
      'Cardiac implantable electronic devices (CIED) help the patient with heart rate and rhythm problems. An increase in CIED procedure parallels an increase in CIED infection, one of the direct complications of CIED. This paper aims to review published articles about CIED infection (general, pocket infection, and systemic infection) and establish concrete evidence regarding the predictors and summarise other quality information.',
    objective:
      'The writers conducted a search strategy by using the OVID search engine for CIED and infection. A total of 882 identified journals was screened and filtered to only 26. COCHRANE risk of bias tool and Robbins-I scale was used to assess biases from the eligible studies.',
    methods:
      'Diabetes was seen significantly frequent in two systemic and two non-specific infection studies. The presence of respiratory failure was seen as a significant occurrence in one pocket, two systemic, and one general infection journals. As for heart failure, one systemic and three general studies proclaimed it as a significant predictor. Renal failure was a significant predictor in two systemic infections and two non-specific infections. From one pocket infection, two general, and two systemic infection studies, older patients, at the age of 66-75, have a higher frequency in acquiring post-CIED infection. An increased amount of previous CIED procedures, CIED upgrade, and CIED replacement were significantly associated with three pocket infections and five general infection studies. Other quality studies identified include: the significant reduction of infection rate using H2O2 applied antiseptic, lead enveloped bacteria, and the non-significance of warfarin continuation against heparin bridging infection rate.',
    results:
      'We saw a trend where CIED infection risk factors include organ malfunctions and previous CIED procedures. Systemic infection tends to appear on those with organ malfunction. Meanwhile, pocket infection frequently occurs on previous CIED procedures. We hypothesised that organ malfunction increases the risk of systemic infection post-CIED, and the heart’s increased exposure towards the external milieu increases the risk of pocket infection. Our next step is to create a concrete discussion chapter talking about the extracted results and pinpoint any clashing obtained information.',
    conclusion:
      '',
    keywords: [],
    author: ['Arfi Rabbani', 'Umar Abdul Hamid', 'Gareth Wynn'],
    supervisors: [],
    coressponding: ['Faculty of Medicine, University of Indonesia','Department of Cardiology, Melbourne Medical School', 'Department of Cardiology', 'Royal Melbourne Hospital'],
    poster: './melbourne/images/Arfi Rabbani & Umar Abdul Hamid_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Arfi Rabbani & Umar Abdul Hamid_Poster.png',
    slug: '',
  },
  {
    nameId: 'aulia',
    university: 'Melbourne',
    title:
      'The Effect of Communicating Genomic Cancer Risk Estimates on Risk-Reducing Behaviour in Primary Care Patients: A Systematic Review',
    introduction: 
      'Lifestyle modification as primary prevention act as long-term cancer protection,  whereas screening as part of secondary prevention reduces the burden of cancer by identifying an  asymptomatic population and provide recommendation for further detection and intervention. Genomic  cancer risk estimates is used to provide future risk estimations of developing cancer to target prevention  and is expected to result in behavioural changes to reduce the risk of developing cancer. However, it is  unclear how disclosing and communicating genomic cancer risk estimates can affect lifestyle and  screening behaviours in the population. This review aims to investigate the effects of communicating  genomic cancer risk estimates (compared to non-genetic or none) on lifestyle behaviors and screening  uptake in adults in the primary care settings.',
    objective:
      '',
    methods:
      'A systematic review was conducted in accordance with the PRISMA guidelines. Literature  searches were performed through Medline, Embase, PsycINFO, and Cochrane Central Register of  Controlled Trials. Interventional and observational studies involving genomic cancer risk estimates in  adult population and published in English were included. Risk of bias assessment was performed using  Cochrane RoB-2.0 and ROBINS-I. Outcome measures of lifestyle and screening behavioural changes  after receiving genomic cancer risk estimates were extracted and analysed.',
    results:
      'Initial search yielded a total of 5650 articles, and a total of two RCTs and seven non-RCT  studies met criteria for analysis. Sun protection behaviour changes were limited, but participants had  intentions to change their behaviour due to receiving genomic risk estimate. Likewise, studies had not  found participants to reduce or abstain from smoking, but some may have intention to quit smoking.  Studies were congruent with no changes to diet and physical activity. Similarly, cancer screening uptake  was not affected by communicating genomic risk estimates. Lastly, having intention to change behaviour  may not translate into actual behaviour change.',
    conclusion:
      'There was a lack of evidence and inconsistencies of result to conclude whether  disclosing and communicating genomic cancer risk estimate may affect changes in lifestyle and screening  behaviours. High-quality randomised controlled studies with large sample sizes should be performed in  the future to obtain larger statistical power.',
    keywords: ['cancer', 'genomic testing', 'risk estimates', 'lifestyle', 'screening'],
    author: ['Muhammad M. Wildani', 'Aulia R. Ardan', 'Paige Druce', 'Kristi Milley', 'Sibel Saya'],
    supervisors: [],
    coressponding: ['Centre for Cancer Research and Department of General Practice', 'Faculty of Medicine, Universitas Indonesia,'],
    poster: './melbourne/images/Aulia Rahman Ardan and Muhammad Maulana Wildani_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Aulia Rahman Ardan and Muhammad Maulana Wildani_Poster.png',
    slug: '',
  },
  {
    nameId: 'veronika',
    university: 'Melbourne',
    title:
      'Bleeding Risk from Anticoagulant Treatment in Patients with Cerebral Amyloid Angiopathy and Atrial Fibrillation: A Systematic Review',
    introduction: 
      'Cerebral Amyloid Angiopathy (CAA) is associated with an increased risk of  intracerebral hemorrhage. In patients with comorbid atrial fibrillation (AF), management with  anticoagulation can be problematic. To date the risk-benefit for administering anticoagulants for CAA  patients, especially with AF, has not been explored. This systematic review aims to appraise all  available literature regarding hemorrhage risk with anticoagulant medication in patients with CAA and  AF.',
    objective:
      '',
    methods:
      'We identified Publications related to the use of anticoagulants in CAA patients using  Medline (PubMed and OVID), and EMBASE databases. Screening was performed by two  independent reviewers. Inclusion criteria: (i) English; (ii) included a quantitative assessment of  anticoagulant use for CAA patients diagnosed using Boston Criteria or Modified Boston Criteria; (ii)  patients 18 years or above, and (iv) studies published after 1995.',
    results:
      '287 articles were screened and 6 met inclusion criteria. Mean age across all studies was  79 years old. ten-years mortality increased to over 75% of the cohort for two studies. One study  reported a non-significant increase in mortality rates with cumulative exposure to anticoagulants. In  another analysis, restarting anticoagulants following hemorrhage for patients with CAA was not  associated with a statistically significant difference in further bleeding compared with non-CAA  patients. There was considerable variability in the proportion of patients with hemorrhage in the  identified studies and with regard to outcome measures reported. HAS-BLED and CHA2DS2VASc  scores were not statistically significant in predicting mortality in one small retrospective cohort study. In all studies, the proportion of CAA patients with hypertension starting anticoagulation treatment was  >50% of the sample populations however outcomes measures were not adjusted for this variable ',
    conclusion:
      'Data relating to the association between CAA and hemorrhage risk with  anticoagulation are limited with considerable variability in outcome measures. The role of previous  hemorrhage and hypertension requires further evaluation in determining the contribution of  anticoagulation to the risk of hemorrhage and further studies in this area would be of value in guiding  clinical decision making.',
    keywords: [],
    author: ['Veronika Cendana Pinasthika Lawalata', 'Elizabeth Divina', 'Lauren Sanders1,2'],
    supervisors: [],
    coressponding: ['Department of Neuroscience'],
    poster: './melbourne/images/Elizabeth Divina & Veronika C P Lawalata_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Elizabeth Divina & Veronika C P Lawalata_Poster.png',
    slug: '',
  },
  {
    nameId: 'fathurohman',
    university: 'Melbourne',
    title:
      'The Blood of Newborns Comparison of Complete Blood Count (CBC) Reference Intervals (RIs) between Venous, Capillary, and Umbilical – Sourced Blood on Term Healthy Neonates: A Systematic Review',
    introduction: 
      'Neonatal complete blood count (CBC) reference intervals  (RIs) are crucial diagnostic parameters to support prompt clinical decisions. However, the  validity and usefulness of these RI(s) are affected by multiple factors, such as different blood  collection sites. This systematic review aims to evaluate the RI(s) in neonates across multiple  studies, in terms of their reliability and clinical usefulness while comparing the reported  RI(s) across different collection sites.',
    objective:
      '',
    methods:
      'A systematic review was conducted according to the Preferred Reporting Items  for Systematic Reviews and Meta-Analysis (PRISMA) guidelines. We searched published  papers in PUBMED, Ovid Medline, and CINAHL databases. Observational studies published  from January 2006 – 14th of February 2021 with CBC taken from either venous, capillary, or  umbilical cord blood from healthy, term infants (>36 weeks of gestation) during the first 28  days of life were included in this review and the National Heart, Lung, and Blood Institute  (NHLBI) quality assessment tool was used to assess the quality of studies.',
    results:
      'The search retrieved 672 studies and 43 underwent full text  screening. Fifteen studies were included, comprising of 14 cross-sectional studies and one  retrospective analysis study. In total, nine studies obtained blood from umbilical cord, one from  vein, one from capillary, and four studies unspecified. Different CBC RI(s) can be seen across  studies though not statistically analysed and became incomparable due to non-international  systems of Units (SI), different descriptive statistics, and unspecified collection sites. Further  potential causes for differences included timing of collection, cell counter analyser used, and  possible individual differences.',
    conclusion:
      'There is considerable variability in key aspects of studies reporting neonatal  CBC RI(s). Further studies are required to better understand the causes of differences between  values obtained by different studies. Clinicians need to consider site of blood collection,  analyser used, and patient population to determine which, if any, of the published reference  intervals are appropriate for determining normal in their patients and laboratory.',
    keywords: [],
    author: ['Visabella Rizky Triatmono', 'Fathurohman Ramadhan Hanif Bari Wahyudi', 'Paul Monagle'],
    supervisors: [],
    coressponding: ['Department of Paediatrics', 'Department of Hematolog', 'Faculty if Medicine'],
    poster: './melbourne/images/Fathurohman Ramadhan Hanif Bari Wahyudi and Visabella Rizky Triatmono_ Poster.pdf',
    thumbnail: './melbourne/thumbnails/Fathurohman Ramadhan Hanif Bari Wahyudi and Visabella Rizky Triatmono_ Poster.png',
    slug: '',
  },
  {
    nameId: 'florentina',
    university: 'Melbourne',
    title:
      'Recent Evidence on Sexual Dysfunction Interventions for Female Cancer Survivors: A Systematic Review',
    introduction: 
      'Cancer and its treatment negatively affect female sexual health and function. The  prevalence of female sexual dysfunction after cancer is between 33% and 43%, but only one in five women  seek care for their sexual problems. Numerous studies have addressed treatment options for sexual  dysfunction in women with cancer. This study will appraise recent evidence on sexual dysfunction  interventions in female cancer survivors.',
    objective:
      '',
    methods:
      'Comprehensive literature search using the electronic databases of MEDLINE, EMBASE,  PsycINFO, and Cochrane Central Register of Controlled Trials was conducted to identify studies published  between 2011-2021 with search terms of (“women”, “cancer”, “intervention”, “sexual dysfunction”). Quality  appraisals were done using RoB 2.0, ROBINS-I, and NOS assessment tools.',
    results:
      'Thirty-six studies were included for qualitative synthesis (13 RCTs, 19 uncontrolled trials, 4  cohort studies). Six studies were at low risk of bias. Topical interventions (vaginal gels or creams) were  able to alleviate vaginal dryness and dyspareunia, with intravaginal DHEA (6.5 mg) gel and testosterone  cream showing evidence of improved sexual function. Evidence for estriol-lactobacilli vaginal tablet was  unreliable due to a small-scale study. Psychoeducational therapy (internet-based CBT) studies typically  were at high risk of bias due to inability to blind participants, however all display significant improvements  on sexual function. Both laser therapy (fractional CO2 and erbium) and multimodal approach studies were  at concerning risk of bias, although they suggest beneficial effects on sexual function.',
    conclusion:
      'Most studies, particularly on laser therapy and multimodal approach, were small (10-70  participants), with serious to critical risk of bias. The most reliable evidence was from studies of DHEA and  testosterone vaginal gel, but in general, gels or creams were useful in reducing dyspareunia.  Pharmacological, psychoeducational, laser therapy, and multimodal approach demonstrated potential in  managing cancer-related sexual issues, but not enough high-quality trials to conclude its effectiveness.  Therefore, large-scale, double-blind, RCTs with long-period follow-up, at low risk of bias are needed for  these interventions.',
    keywords: [],
    author: ['Florentina Febrina', 'Ichsan F Triyoga', 'Michelle Peate', 'Jennifer L. Marino'],
    supervisors: [],
    coressponding: ['Department of Obstetric and Gynecology, Royal Women Hospital, Department of Paediatrics'],
    poster: './melbourne/images/Florentina Febrina and Ichsan Fauzi Triyoga_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Florentina Febrina and Ichsan Fauzi Triyoga_Poster.png',
    slug: '',
  },
  {
    nameId: 'Gde',
    university: 'Melbourne',
    title:
      'Comparison of clinical and functional outcomes between unicompartmental knee arthroplasty and high tibial osteotomy in patients with unicompartmental knee osteoarthritis: a systematic review', 
    introduction: 
      'Unicompartmental knee arthroplasty (UKA) and high tibial osteotomy (HTO)  provide less invasive surgical options compared to total knee arthroplasty, for patients with  unicompartmental knee osteoarthritis (OA). However, with an overlapping indication and unclear  differences in clinical outcomes, it remains unclear as to which procedure should be used in this  patient cohort. The purpose of this review isto compare UKA and HTO to determine if the clinical  outcomes favored either procedure',
    objective:
      '',
    methods:
      'The search strategy, according to PRISMA guidelines, was conducted on PubMed,  EMBASE, MEDLINE, and Cochrane up to February 2021. Randomized controlled trials (RCTs),  cohort studies, registry studies, and case-control studies comparing postoperative revision rate,  complication rate, range of motion, pain score, or functional score were included. Risk of bias  assessment were conducted using Cochrane risk of bias tool for RCTs and ROBINS I for non-RCTs.',
    results:
      'Eighteen studies were included in this review. Three studies were assessed as high,  serious, or critical risk of bias, thirteen studies demonstrated some concerns or were as assessed  as moderate risk of bias, and two studies were deemed low risk of bias. Most studies did not find  significant differences in revision rates, complication rates, pain scores, range of motion (ROM),  or function score. However, three studies reported that the mean function score within the first  six months of surgery were significantly better in UKA compared to HTO. Most studies were  limited by small sample sizes.',
    conclusion:
      'There was lack of evidence that UKA and HTO differ significantly in terms of long term clinical outcome, however there was some evidence of superior short term functional  outcomes for UKA. Both procedures provided satisfactory functional outcomes when correct  recommendations were followed. High-quality, adequately powered prospective studies are  recommended to reach a definitive conclusion regarding longer term outcomes.',
    keywords: [],
    author: ['Gde Ngurah Irfan Bhaskaraa', 'Nugrahiza Satryo Bimantoroa'],
    supervisors: ['Professor Michelle Dowsey'],
    coressponding: ['Department of Surgery'],
    poster: './melbourne/images/Gde Ngurah Irfan Bhaskara and Nugrahiza Satryo Bimantoro_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Gde Ngurah Irfan Bhaskara and Nugrahiza Satryo Bimantoro_Poster.png',
    slug: '',
  },
  {
    nameId: 'jonez',
    university: 'Melbourne',
    title:
      'Pre-Existing Neural Factors That Contribute to Dysmotility in Oesophageal Atresia: A Systematic Review',
    introduction: 
      'Oesophageal atresia (OA) is the most common type of congenital abnormality that occurs in the oesophagus. The exact mechanism of separation of the embryonic foregut into the oesophagus and trachea is not currently known. However, animal experimental studies have led to development of several morphological models to demonstrate the development of OA and tracheo-oesophageal fistula (TOF). Following surgical repair, patients born with OA may experience feeding difficulties including dysphagia, as a result of dysmotility. This systematic review aims to summarise the literature on this topic, to understand the neuronal and histological pathophysiological mechanisms of oesophageal dysmotility',
    objective:
      '',
    methods:
      'A comprehensive review using CINAHL, EMBASE, EBM, and PUBMED databases was conducted according to PRISMA protocol. Full-text articles written in English using both animal and human subjects and published prior to November 2020 were included.',
    results:
      'Eighteen studies were identified, comprising six animal studies, one cross-sectional study, and eleven case-control studies. Majority of the subjects in the study had OA with distal TOF, and were post-surgery, while animal models were using rats induced with Adriamycin. Using hematoxylin and eosin (H&E) stain and other immunohistochemical (IHC) staining, human studies showed a reduction of ganglia with smaller size compared to control and thickened fibers in the myenteric plexus. Furthermore, animal studies showed the abnormal distribution of nerve tissue and sparse ganglion. Additionally, there are also abnormalities in the muscle layer and neurotransmitter which may lead to abnormalities in the intrinsic nervous system of oesophageal motility.',
    conclusion:
      'This is the first study summarising the literature on neuronal factors contributing to oesophageal dysmotility in subjects with OA. We have found that the disruption in the intrinsic nervous system and the abnormality in myenteric plexus may contibute to dysmotility. However, the results need to be interpreted with care due to the high risk of bias in some studies. Further studies with more specific methodology may help in understanding the pathophysiology of dysmotility in OA patients.',
    keywords: [],
    author: ['Jonez E. A. Roring', 'Natasha Y. Situmorang', 'Sharman P. Tan Tanny', 'Warwick Teague'],
    supervisors: [],
    coressponding: ['Dept of Pediatrics, University'],
    poster: './melbourne/images/Jonez Estiven Alberto Roring & Natasha Yemima Situmorang_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Jonez Estiven Alberto Roring & Natasha Yemima Situmorang_Poster.png',
    slug: '',
  },
  {
    nameId: 'marco',
    university: 'Melbourne',
    title:
      'Adolescent Sleep Research in Low- and MiddleIncome Countries: A Scoping Review',
    introduction: 
      'Sleep problems and disorders in the adolescents are increasingly recognised as a  public health concern. Adolescent sleep patterns (e.g., sleep duration) are shaped by social,  environmental, economic, and cultural factors (e.g., school start times) which vary widely between  and within countries. For example, recent studies have shown social determinants (e.g., poverty)  contribute to paediatric sleep health disparities. However, most research has been conducted in high income countries. The aim of this scoping review was to understand the extent of peer-reviewed  evidence in relation to the prevalence of sleep problems and disorders for adolescents in low- and  middle-income countries (LMICs)',
    objective:
      '',
    methods:
      'We searched Ovid Medline, Ovid PsycINFO, and PubMed electronic databases using  free-text keywords and controlled terms related to 1) adolescents, 2) sleep, and 3) LMICs. Inclusion  criteria were peer-reviewed, primary studies in English that examined the population prevalence of  sleep problems and disorders in 10-24 year old adolescents from LMICs in the past decade (from  January 2011). 6,913 titles and abstracts, as well as 263 full-texts, were screened by two authors.  This was followed by data extraction from included studies. Study quality was not assessed.',
    results:
      'We identified 39 eligible studies from 29 LMICs. Asian countries were  most represented (89.7% of the studies), notably China (48.7%). Of 15 different sleep problems and  disorders, the most commonly reported were insufficient sleep duration (38.5%), insomnia disorder (15.4%) and restless leg syndrome (12.8%). There was heterogeneity in how sleep problems and  disorders were defined and measured across studies, requiring prevalence values to be interpreted  with caution.',
    conclusion:
      'More research is needed to determine the prevalence of adolescent sleep problems  and disorders in LMICs, particularly in Latin America and Africa, that uses consistent definitions and  measures.',
    keywords: [],
    author: ['Marco Tahir', 'Vincent Susanto', 'Monika Raniti PhD', 'Susan Sawyer MD'],
    supervisors: [],
    coressponding: ['Department of Paediatrics, Melbourne Medical School, University of Melbourne', 'Faculty of Medicine, Universitas Indonesia', 'Centre for Adolescent Health, Murdoch Childrens Research Institute & Royal Children’s Hospital'],
    poster: './melbourne/images/Marco Tahir and Vincent Susanto_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Marco Tahir and Vincent Susanto_Poster.png',
    slug: '',
  },
  {
    nameId: 'matthew',
    university: 'Melbourne',
    title:
      'Zapping Tumours: Irreversible Electroporation for Prostate Cancer: A Narrative Review',
    introduction: 
      'Although it can be lethal in its advanced stage, prostate cancer can be effectively  treated when it is localised. Traditionally, radical prostatectomy (RP) or radiotherapy (RT) was used to  treat all men with localised prostate cancer, however, this has significant risks of post treatment side  effects. Focal therapy has emerged as a potential form of treatment that can achieve similar oncological  outcomes to radical treatment while preserving functional outcomes and decreasing rates of adverse  effects. Irreversible electroporation (IRE) is one such form of focal therapy which utilizes pulsatile  electrical currents to ablate tissue. This modality of treatment is still in an early research phase with  studies have showing that IRE is a safe procedure that can offer good short-term oncological outcomes  and whilst carrying lower risk of poor functional outcomes. This review aims to summarize the latest  information available in the literature body about the implementation of IRE for prostate cancer.',
    objective:
      '',
    methods:
      'The review focuses on specific topics including IRE procedure, functional, oncological, and  imaging outcomes, and treatment complications. Google scholar, Medline and EMBASE databases  were searched to identify evidence suited to the topics. References published from 2011 to 2021 were  included in this review and relevant references were also identified from the studies and reviews found.',
    results:
      'Current literature demonstrates that IRE preserves functional outcomes at relatively high  rates in terms of urinary continence and erectile function preservation. IRE is also shown to have good  oncological outcomes, with low cancer recurrence rates post-treatment in low- to intermediate-risk  patients. Patients generally experience mild adverse effects after IRE, including mild haematuria,  dysuria, urinary tract infections and temporary incontinence.',
    conclusion:
      'So far, early studies have shown that IRE is a safe procedure that can offer good short term oncological outcomes and whilst carrying lower risk of poor functional outcomes compared to  radical treatment. Even so, larger comparative phase 3 trials are warranted to further investigate the  effects of IRE and to provide meaningful long-term data for these men.',
    keywords: [],
    author: ['Matthew Leonardo', 'Sean Ong', 'Thilakavathi Chengodu', 'Nathan Lawrentschuk'],
    supervisors: [],
    coressponding: ['University of Melbourne, Melbourne, Australia', 'Fakultas Kedokteran Universitas Indonesia, Jakarta, Indonesia', 'EJ Whitten Foundation Prostate Cancer Research Centre, Epworth HealthCare, Victoria, Australia', 'Department of Surgery, University of Melbourne, Victoria, Australia', 'Department of Urology, Royal Melbourne Hospital, Parkville, Australia'],
    poster: './melbourne/images/Poster_Matthew Leonardo.pdf',
    thumbnail: './melbourne/thumbnails/Poster_Matthew Leonardo.png',
    slug: '',
  },
  {
    nameId: 'pandu',
    university: 'Melbourne',
    title:
      'Risk of Cancer in Colorectal Cancer Patients with Lynch-like Syndrome and their Families: A Systematic Review',
    introduction: 
      'Lynch syndrome (LS) is a familial syndrome caused by germline mutations in DNA mismatch repair (MMR) genes. LS predisposes individuals to colorectal  cancer (CRC) and other cancers. Tumors with the same clinicopathological features as LS but  without germline MMR mutations are classified as Lynch-like syndrome (LLS). Limited  studies have examined cancer risks in LLS compared to cancer risks in LS and the general  population. This study aims to review all relevant studies about cancers risks in LLS patients  and their families.',
    objective:
      '',
    methods:
      'A systematic literature search examining cancer risks in LLS was performed.  Relevant studies published up until 11th February 2021 were identified from Medline,  Embase, Pubmed, and CINAHL databases and by reference and citation checking. Articles  were selected based on the predetermined eligibility criteria. Risk of bias was performed  using Joanna Briggs Institute Critical Appraisal Tools.',
    results:
      'In a total of 5 included studies, one study found the risk of CRC recurrence in LLS  patients with CRC was lower than LS patients. Two studies found the risk of LS-related  extracolonic cancers in LLS patients was lower than LS patients. One study found both CRC  and LS-related extracolonic cancer risks were higher in LLS patients than the general  population. Three studies found CRC risks in first degree relatives (FDR) of LLS patients  were lower than FDRs of LS patients and three studies found CRC cancer risks were higher  in FDRs of LLS patients than FDRs of the general population. Two studies found LS-related  extracolonic cancer risks were higher in FDRs of LLS patients compared with the general  population. The estimated age of CRC diagnosis in LLS patients was 30-50 years.',
    conclusion:
      'The risk of cancer in LLS patients and their families was generally higher than  cancer risks in the general population, but cancer risks were lower compared with LS patients  and their families. These findings may help inform cancer surveillance and clinical  management guidelines for LLS patients and their families.',
    keywords: [],
    author: ['Pandu Prasetyo Nugroho', 'Alyaa Ghozali', 'Jeanette Reece, PhD MPH'],
    supervisors: [],
    coressponding: ['Faculty of Medicine', 'Centre for Epidemiology and Biostatistics'],
    poster: './melbourne/images/Poster_Pandu Prasetyo Nugroho and Siti Alyaa Salma Ghozali.pdf',
    thumbnail: './melbourne/thumbnails/Poster_Pandu Prasetyo Nugroho and Siti Alyaa Salma Ghozali.png',
    slug: '',
  },
  {
    nameId: 'puti',
    university: 'Melbourne',
    title:
      'What are the mental health and psychosocial needs of children with complex colorectal conditions? – A systematic review',
    introduction: 
      'Complex colorectal conditions including Hirschsprung’s disease, anorectal malformations, and constipation, affects children’s everyday life worldwide. It can impact their physical  health and psychological well-being. For both children and their family, these disorders may lead to  difficulties adapting to a normal lifestyle as the disorders can lead to anxiety, depression, and stress.  This systematic review aims to determine how complex colorectal conditions may be detrimental to  children’s mental health and quality of life.',
    objective:
      '',
    methods:
      'A literature search was conducted through MEDLINE, EMBASE, PsycINFO, PubMed, and The Cochrane Library. Studies published between January 1991 and January 2021 on constipation,  Hirschsprung’s disease (HD), and/or anorectal malformations (ARM) of children aged 0-18 years, were  included in the search. Two authors independently screened the studies through Covidence. Quality  assessment was carried out using PEDro scale, Cochrane Risk of Bias tool, Newcastle-Ottawa Quality  Assessment Form, CASP, and JBI critical appraisal checklist.',
    results:
      'Thirty-two studies satisfied the inclusion criteria and were included in this review. Of  these, five had poor quality. Sixteen studies focused on constipation, eleven on Hirschsprung’s disease  (HD), and eight on anorectal malformation (ARM). The general trend found in seven studies was that  the quality of life of patients with constipation is impaired. Three studies found higher anxiety/depression scores in constipated children compared to controls. Emotional problems were also  higher in children with constipation compared to controls. Various outcomes were found in the quality  of life, anxiety/depression score, and/or emotional problems of children with Hirshsprung’s disease (HD) and anorectal malformations (ARM).',
    conclusion:
      'Strong conclusions could not be drawn due to the variety of methods used to diagnose  the conditions, as well as the range of assessment tools used. However, the general trend is that the quality of life of children with constipation is lower compared to control groups. Inconsistent results  were found in those with HD and ARM. Further studies should utilize a more common validated diagnosing method and assessment tool to accomplish more reliable and comparable results.',
    keywords: [],
    author: ['Puti Raykhan Rasyada Ralas', 'Veraldi Pita', 'Misel Trajanovska', 'Sebastian King'],
    supervisors: [],
    coressponding: ['Department of Paediatrics', 'Colorectal and Pelvic Reconstruction Service, The Royal Children’s Hospital', 'Surgical Research, Murdoch Children`s Research Institute', 'Department of Paediatric Surgery' ],
    poster: './melbourne/images/Puti Raykhan Rasyada Ralas & Veraldi Pita_Poster.pdf',
    thumbnail: './melbourne/thumbnails/Puti Raykhan Rasyada Ralas & Veraldi Pita_Poster.png',
    slug: '',
  },
]; 

export { monash, newcastle, melbourne };
