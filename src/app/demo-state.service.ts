import { Injectable } from '@angular/core';

export type PillarId = 'design-right' | 'fill-right' | 'develop-right';

export interface ReportLink {
  code: string;
  label: string;
  path: string;
}

export interface Assessment {
  code: string;
  name: string;
  report: string;
  score: number;
  completedAt: string;
  status: 'Completed' | 'Analysing';
  insight: string;
  documents: ReportLink[];
}

export interface SolutionPillar {
  id: PillarId;
  title: string;
  shortLabel: string;
  colorClass: string;
  summary: string;
  capabilities: string[];
  individualImpact: string;
  teamImpact: string;
  organisationImpact: string;
  sapLinkage: string[];
}

export interface CapabilityScore {
  capability: string;
  pillarId: PillarId;
  score: number;
  whatItIs: string;
  resultInterpretation: string;
  mappedReports: string[];
}

export interface TimelineEvent {
  title: string;
  time: string;
  detail: string;
}

export interface KpiMetric {
  value: string;
  label: string;
  detail: string;
  tone: string;
}

export interface LifecycleStage {
  name: string;
  caption: string;
  active?: boolean;
}

export interface BusinessImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export interface EnterpriseHeatmapDimension {
  key: string;
  label: string;
}

export interface EnterpriseHeatmapRow {
  businessUnit: string;
  summary: string;
  scores: Record<string, number>;
}

export interface ExcoTakeaway {
  title: string;
  detail: string;
}

export interface CandidateOption {
  key: string;
  label: string;
}

export interface ResultsViewOption {
  key: string;
  label: string;
}

export interface FinalRecommendation {
  candidate: string;
  fit: number;
  culture: number;
  risk: string;
  teamImpact: string;
  readiness: string;
  status: string;
  confidenceModel: string;
  summary: string;
}

export interface CandidateProfile {
  key: string;
  name: string;
  intelligenceMetrics: KpiMetric[];
  assessments: Assessment[];
  capabilities: CapabilityScore[];
  timeline: TimelineEvent[];
  businessImpact: BusinessImpactMetric[];
  finalRecommendation: FinalRecommendation;
  stackUpVerdict: {
    designRight: string;
    fillRight: string;
    developRight: string;
    overall: string;
    financialLine: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DemoStateService {
  readonly reportsFolder = 'src/assets/reports';

  readonly pillars: SolutionPillar[] = [
    {
      id: 'design-right',
      title: 'Design right',
      shortLabel: 'Blue pillar',
      colorClass: 'pillar-design',
      summary: 'Clarify the role, shape the team, and align rewards before talent decisions are made.',
      capabilities: ['Role Intelligence', 'Team Architecture', 'Reward Intelligence'],
      individualImpact: 'Defines what the role requires before assessment, ensuring individual fit is anchored in role reality.',
      teamImpact: 'Ensures new roles are designed with a structurally sound team architecture.',
      organisationImpact: 'Guarantees defensible reward by tying pay to capability and protecting against pay-equity variance.',
      sapLinkage: [
        'SAP Compensation',
        'Reward Scaffold (capability-linked band placement, STI/LTI guardrails)'
      ]
    },
    {
      id: 'fill-right',
      title: 'Fill right',
      shortLabel: 'Green pillar',
      colorClass: 'pillar-fill',
      summary: 'Improve fit, culture alignment, and fragility detection before a candidate is placed.',
      capabilities: ['Fit Confidence', 'Culture Visibility', 'Fragility Detection'],
      individualImpact: 'Provides fit confidence for candidate placement and internal moves.',
      teamImpact: 'Instantly flags fragility alerts when an individual score drops below a pre-set threshold.',
      organisationImpact: 'Delivers better slates that hold and reduces mis-hire probability from ~50% to <17%.',
      sapLinkage: [
        'SAP Recruiting',
        'SAP Succession (Decision Summary with Fit/Culture/Risk)',
        'AI Summarization Pipeline (returns results to SAP)'
      ]
    },
    {
      id: 'develop-right',
      title: 'Develop right',
      shortLabel: 'Purple pillar',
      colorClass: 'pillar-develop',
      summary: 'Predict performance, readiness, and enterprise contribution after placement.',
      capabilities: ['Performance Prediction', 'Potential & Readiness', 'Enterprise Intelligence'],
      individualImpact: 'Clarifies potential and readiness for promotion and future roles by analysing cognitive depth.',
      teamImpact: 'Populates succession slate builders with confidence-rated slates and domino backfill suggestions.',
      organisationImpact: 'Enables the SAP HCM++ view with enterprise KPIs and seven-dimensional organisational heatmaps.',
      sapLinkage: [
        'SAP Performance',
        'SAP Succession',
        'SAP Analytics (Bench-strength indices, Mobility Heatmap, Talent Intelligence Hub)'
      ]
    }
  ];

  readonly requestBase = {
    solutionName: 'Managerial and Professional Roles',
    sapModule: 'SuccessFactors Recruiting',
    requisitionId: 'REQ-20481',
    vacancy: 'HR Manager',
    businessUnit: 'People and Culture',
    requester: 'Naledi Mokoena',
    purpose: 'Assessment for selection and placement',
    candidateType: 'Individual Assessment',
    solutionBundle: 'TalentLab auto-selected bundle',
    lifecycleNarrative: 'Acquire, assess, match, place, and track the right talent decision from inside SAP.'
  };

  readonly lifecycleStages: LifecycleStage[] = [
    { name: 'Acquire', caption: 'Recruiting demand enters SAP' },
    { name: 'Assess', caption: 'TalentLab bundle is triggered', active: true },
    { name: 'Match', caption: 'Role-fit and culture confidence are calculated' },
    { name: 'Place', caption: 'Decision-ready recommendation returns to SAP' },
    { name: 'Track', caption: 'Enterprise intelligence follows placement outcomes' }
  ];

  readonly candidateProfiles: CandidateProfile[] = [
    {
      key: 'elmien-toerien',
      name: 'Elmien Toerien',
      intelligenceMetrics: [
        {
          value: '83%',
          label: 'Overall Confidence',
          detail: 'Composite confidence model from the completed TalentLab bundle.',
          tone: 'stat-cyan'
        },
        {
          value: '3',
          label: 'Fragility Alerts',
          detail: 'Priority watch-outs surfaced across the hiring and team risk signals.',
          tone: 'stat-red'
        },
        {
          value: '71%',
          label: 'Succession Readiness',
          detail: 'Readiness confidence for medium-term progression after placement.',
          tone: 'stat-green'
        },
        {
          value: '81%',
          label: 'Culture Alignment',
          detail: 'Likely values alignment with the current business and team environment.',
          tone: 'stat-gold'
        }
      ],
      assessments: [
        {
          code: 'CPP',
          name: 'Cognitive Process Profile',
          report: 'CPP candidate profile',
          score: 94,
          completedAt: '2026-03-27 09:15',
          status: 'Completed',
          insight: 'Strong abstract reasoning, strategic pattern recognition, and learning agility.',
          documents: [{ code: 'CPP', label: 'CPP Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_CPP.pdf' }]
        },
        {
          code: 'VO',
          name: 'Value Orientations',
          report: 'VO motivator scan',
          score: 87,
          completedAt: '2026-03-27 09:24',
          status: 'Completed',
          insight: 'High alignment with service leadership, accountability, and stewardship.',
          documents: [{ code: 'VO', label: 'VO Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_VO.pdf' }]
        },
        {
          code: 'MP',
          name: 'Motivational Profile',
          report: 'MP energy drivers',
          score: 83,
          completedAt: '2026-03-27 09:31',
          status: 'Completed',
          insight: 'Motivated by team upliftment, autonomy, and building resilient routines.',
          documents: [{ code: 'MP', label: 'MP Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_MP.pdf' }]
        },
        {
          code: 'CCM',
          name: 'Contextualised Competency Mapping',
          report: 'CCM role-fit map',
          score: 89,
          completedAt: '2026-03-27 09:37',
          status: 'Completed',
          insight: 'Role requirements match candidate strengths in coordination, stakeholder care, and judgement.',
          documents: [{ code: 'CCM', label: 'CCM Full Report (PDF)', path: 'assets/reports/Toerien_Elmien_CCM.pdf' }]
        }
      ],
      capabilities: [
        { capability: 'Role Intelligence', pillarId: 'design-right', score: 91, whatItIs: 'Defines what the role actually demands — complexity, pressure, decision rights — before anyone is assessed.', resultInterpretation: 'Role architecture and decision span are a strong match to this candidate\'s current operating level and experience. The role is well-defined and the candidate\'s cognitive complexity aligns to its demands.', mappedReports: ['CCM', 'CPP'] },
        { capability: 'Team Architecture', pillarId: 'design-right', score: 84, whatItIs: 'Measures whether the candidate strengthens or weakens the team they\'re joining.', resultInterpretation: 'Likely to stabilise team cadence and provide complementary leadership to existing team members. Adds execution discipline the team currently lacks. No significant friction indicators.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Reward Intelligence', pillarId: 'design-right', score: 81, whatItIs: 'Links the candidate\'s capability profile to appropriate reward architecture for sustainable performance.', resultInterpretation: 'Capability profile supports senior leadership reward band. Motivation drivers align well with long-term incentive structures — recognition, purpose, and autonomy will sustain engagement more effectively than pure cash incentives.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fit Confidence', pillarId: 'fill-right', score: 88, whatItIs: 'Measures real cognitive capability, values alignment, and motivational fit — not self-reported skills.', resultInterpretation: 'Strong overall fit with the role. Cognitive complexity match shows headroom above role requirements. Values align with the target culture. Motivational profile supports the operating pace and stakeholder complexity of the role.', mappedReports: ['CCM', 'VO'] },
        { capability: 'Culture Visibility', pillarId: 'fill-right', score: 86, whatItIs: 'Measures whether the candidate\'s values and worldview align with the organisation\'s target culture.', resultInterpretation: 'Values align well with a people-first, high-trust culture orientation. Strong on collaboration and stewardship. Minor gap in competitive intensity — manageable in a results-oriented environment with supportive leadership.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fragility & Risk Detection', pillarId: 'fill-right', score: 24, whatItIs: 'Identifies risk of performance breakdown under the specific pressure conditions of this role.', resultInterpretation: 'LOW RISK — Low derailment probability. Monitor workload stretch during peak hiring seasons as the candidate\'s resilience, while adequate, shows some sensitivity to sustained ambiguity without structured milestones. Proactive check-ins recommended in first 6 months.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Performance Prediction', pillarId: 'develop-right', score: 90, whatItIs: 'Forecasts whether this person will deliver sustained performance — not a review of past activity.', resultInterpretation: 'Expected to ramp quickly and manage broad stakeholder demands effectively. Cognitive-role complexity match is strong with headroom. Execution style aligns with the role\'s operating cadence. Predicted trajectory: stable-to-improving over first 12 months.', mappedReports: ['CPP', 'CCM'] },
        { capability: 'Potential & Readiness', pillarId: 'develop-right', score: 89, whatItIs: 'Measures whether this person has capacity to grow beyond this role — or has reached their cognitive ceiling.', resultInterpretation: 'Ready now for the role with medium-term stretch toward senior executive leadership. Cognitive capacity shows room for one more complexity level. Learning agility supports accelerated development. Not at potential ceiling — this is a growth hire, not a terminal placement.', mappedReports: ['CPP', 'VO'] },
        { capability: 'Enterprise Intelligence', pillarId: 'develop-right', score: 85, whatItIs: 'Shows how this placement decision connects to broader organisational capability and strategic readiness.', resultInterpretation: 'This placement strengthens the Operations business unit\'s integrated readiness score and addresses a gap in execution leadership density. Comfortable linking people decisions to broader business outcomes. Contributes positively to the enterprise confidence index.', mappedReports: ['CPP', 'CCM', 'VO'] }
      ],
      timeline: [
        { title: 'SAP request created', time: '2026-03-27 08:55', detail: 'Recruiting workflow triggered TalentLab bundle selection from requisition metadata.' },
        { title: 'TalentLab bundle confirmed', time: '2026-03-27 09:02', detail: 'Purpose, candidate type, and role nomination aligned to Managerial and Professional Roles.' },
        { title: 'Assessments completed', time: '2026-03-27 09:37', detail: 'CPP, VO, MP, and CCM finished and raw report outputs returned.' },
        { title: 'AI summary returned to SAP', time: '2026-03-27 09:41', detail: 'Summary, heatmap scores, and recommendation posted back through the integration layer.' }
      ],
      businessImpact: [
        { value: '<17%', label: 'Mis-hire probability', detail: 'Reduced from roughly 50% industry average to below 17% through the 83% confidence model.' },
        { value: '$1.5M-$3.5M', label: 'Value preserved', detail: 'Estimated avoided mis-hire cost through better fit, lower fragility, and faster placement confidence.' },
        { value: '+12%', label: 'Team uplift', detail: 'Projected improvement in team stability and managerial effectiveness once placed.' }
      ],
      finalRecommendation: {
        candidate: 'Elmien Toerien',
        fit: 91,
        culture: 88,
        risk: 'Low',
        teamImpact: '+12%',
        readiness: 'Ready now',
        status: 'Recommend',
        confidenceModel: '83% confidence model',
        summary: 'Elmien Toerien demonstrates strong role fit for the HR Manager vacancy. The completed Cognadev assessment bundle indicates above-benchmark reasoning, people stewardship, and a low behavioural risk profile, with especially strong evidence in role intelligence and performance prediction.'
      },
      stackUpVerdict: {
        designRight: 'Design right: Role is well-defined and matched to this candidate\'s complexity level (91% role intelligence).',
        fillRight: 'Fill right: Strong fit with manageable risk — recommend placement (88% fit, 24% fragility).',
        developRight: 'Develop right: Growth hire with headroom — not at ceiling, will develop further (89% readiness, 90% performance prediction).',
        overall: 'Recommend: High confidence for sustained performance and future development potential.',
        financialLine: 'Estimated value of this decision: Placing this candidate with 88% fit confidence reduces mis-hire probability from ~50% (industry average) to <17%. Estimated cost avoided: $1.5M-$3.5M.'
      }
    },
    {
      key: 'jane-doe',
      name: 'Jane Doe',
      intelligenceMetrics: [
        {
          value: '68%',
          label: 'Overall Confidence',
          detail: 'Composite confidence model shows a more conditional placement decision.',
          tone: 'stat-gold'
        },
        {
          value: '5',
          label: 'Fragility Alerts',
          detail: 'More pronounced fragility markers surfaced across fit and workload resilience.',
          tone: 'stat-red'
        },
        {
          value: '63%',
          label: 'Succession Readiness',
          detail: 'Potential is visible, but development runway is required before stretch roles.',
          tone: 'stat-green'
        },
        {
          value: '74%',
          label: 'Culture Alignment',
          detail: 'Moderate values alignment with noticeable adaptation risk in a high-trust environment.',
          tone: 'stat-cyan'
        }
      ],
      assessments: [
        {
          code: 'CPP',
          name: 'Cognitive Process Profile',
          report: 'CPP candidate profile',
          score: 78,
          completedAt: '2026-03-27 10:12',
          status: 'Completed',
          insight: 'Solid reasoning base, but lower confidence when complexity escalates across competing priorities.',
          documents: [{ code: 'CPP', label: 'CPP Full Report (PDF)', path: 'assets/reports/Jane_Doe_CPP.pdf' }]
        },
        {
          code: 'VO',
          name: 'Value Orientations',
          report: 'VO motivator scan',
          score: 73,
          completedAt: '2026-03-27 10:19',
          status: 'Completed',
          insight: 'Values alignment is present, though less naturally anchored in stewardship and people-first leadership.',
          documents: [{ code: 'VO', label: 'VO Full Report (PDF)', path: 'assets/reports/Jane_Doe_VO.pdf' }]
        },
        {
          code: 'MP',
          name: 'Motivational Profile',
          report: 'MP energy drivers',
          score: 65,
          completedAt: '2026-03-27 10:27',
          status: 'Completed',
          insight: 'Motivation profile suggests stronger individual drive than team-coaching orientation at this stage.',
          documents: [{ code: 'MP', label: 'MP Full Report (PDF)', path: 'assets/reports/Jane_Doe_MP.pdf' }]
        },
        {
          code: 'CCM',
          name: 'Contextualised Competency Mapping',
          report: 'CCM role-fit map',
          score: 69,
          completedAt: '2026-03-27 10:34',
          status: 'Completed',
          insight: 'Role fit is partial, with stronger suitability for a narrower people-administration scope than a broad HR manager remit.',
          documents: [{ code: 'CCM', label: 'CCM Full Report (PDF)', path: 'assets/reports/Jane_Doe_CCM.pdf' }]
        }
      ],
      capabilities: [
        { capability: 'Role Intelligence', pillarId: 'design-right', score: 72, whatItIs: 'Defines what the role actually demands — complexity, pressure, decision rights — before anyone is assessed.', resultInterpretation: 'Role architecture is reasonably clear, but the candidate\'s current operating level is slightly below the full complexity of this HR Manager brief.', mappedReports: ['CCM', 'CPP'] },
        { capability: 'Team Architecture', pillarId: 'design-right', score: 66, whatItIs: 'Measures whether the candidate strengthens or weakens the team they\'re joining.', resultInterpretation: 'Would contribute operationally, though less likely to reshape team cadence or coach others immediately. Team contribution is positive but not strongly additive.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Reward Intelligence', pillarId: 'design-right', score: 70, whatItIs: 'Links the candidate\'s capability profile to appropriate reward architecture for sustainable performance.', resultInterpretation: 'A clearer performance framework and tangible incentives will matter more for sustained engagement than broad executive-style autonomy.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fit Confidence', pillarId: 'fill-right', score: 67, whatItIs: 'Measures real cognitive capability, values alignment, and motivational fit — not self-reported skills.', resultInterpretation: 'Fit is credible but not definitive for the full HR Manager brief. The candidate may perform better in a narrower operational role than in the full stakeholder scope of this placement.', mappedReports: ['CCM', 'VO'] },
        { capability: 'Culture Visibility', pillarId: 'fill-right', score: 74, whatItIs: 'Measures whether the candidate\'s values and worldview align with the organisation\'s target culture.', resultInterpretation: 'Likely to adapt, though not as naturally aligned to the current culture as the lead candidate. This can work with strong onboarding and supportive leadership.', mappedReports: ['VO', 'MP'] },
        { capability: 'Fragility & Risk Detection', pillarId: 'fill-right', score: 39, whatItIs: 'Identifies risk of performance breakdown under the specific pressure conditions of this role.', resultInterpretation: 'LOW TO MODERATE RISK — Fragility remains manageable, but resilience under sustained stakeholder load should be monitored more closely than for the lead candidate.', mappedReports: ['CPP', 'MP'] },
        { capability: 'Performance Prediction', pillarId: 'develop-right', score: 69, whatItIs: 'Forecasts whether this person will deliver sustained performance — not a review of past activity.', resultInterpretation: 'Expected performance is moderate, with more onboarding, scope-shaping, and performance support needed in the first 12 months.', mappedReports: ['CPP', 'CCM'] },
        { capability: 'Potential & Readiness', pillarId: 'develop-right', score: 64, whatItIs: 'Measures whether this person has capacity to grow beyond this role — or has reached their cognitive ceiling.', resultInterpretation: 'Shows potential, but reads more as develop-into-role than ready-now. Growth is possible, though likely at a slower pace and with more structure.', mappedReports: ['CPP', 'VO'] },
        { capability: 'Enterprise Intelligence', pillarId: 'develop-right', score: 61, whatItIs: 'Shows how this placement decision connects to broader organisational capability and strategic readiness.', resultInterpretation: 'Contribution is more role-bounded than enterprise-shaping at present. Positive for team delivery, but less likely to move wider organisational readiness in the short term.', mappedReports: ['CPP', 'CCM', 'VO'] }
      ],
      timeline: [
        { title: 'SAP request created', time: '2026-03-27 09:48', detail: 'Recruiting workflow triggered TalentLab bundle selection from requisition metadata.' },
        { title: 'TalentLab bundle confirmed', time: '2026-03-27 09:54', detail: 'Purpose, candidate type, and role nomination aligned to Managerial and Professional Roles.' },
        { title: 'Assessments completed', time: '2026-03-27 10:34', detail: 'CPP, VO, MP, and CCM finished and raw report outputs returned.' },
        { title: 'AI summary returned to SAP', time: '2026-03-27 10:39', detail: 'Summary, heatmap scores, and conditional recommendation posted back through the integration layer.' }
      ],
      businessImpact: [
        { value: '33%', label: 'Mis-hire probability', detail: 'Still materially better than an uninformed decision, but not at the confidence level of the lead candidate.' },
        { value: '$0.6M-$1.2M', label: 'Value preserved', detail: 'Lower preserved value because the placement would require more support, development, and tighter risk management.' },
        { value: '+4%', label: 'Team uplift', detail: 'Positive but narrower expected team impact in the first 12 months.' }
      ],
      finalRecommendation: {
        candidate: 'Jane Doe',
        fit: 67,
        culture: 74,
        risk: 'Moderate',
        teamImpact: '+4%',
        readiness: 'Develop into role',
        status: 'Conditional',
        confidenceModel: '68% confidence model',
        summary: 'Jane Doe presents a plausible but conditional fit for the HR Manager vacancy. The TalentLab bundle suggests she could succeed with tighter scope definition, structured support, and development investment, but the current evidence does not support as strong a placement recommendation as the lead candidate.'
      },
      stackUpVerdict: {
        designRight: 'Design right: Role is reasonably defined, but the candidate is a partial complexity match for the full brief.',
        fillRight: 'Fill right: Moderate fit with manageable but more visible risk — proceed only with support and scope clarity.',
        developRight: 'Develop right: Develop-into-role profile with some headroom, but not as strong a growth signal as the lead candidate.',
        overall: 'Conditional: Viable with support, but lower confidence for sustained performance than the lead candidate.',
        financialLine: 'Estimated value of this decision: Placing this candidate with 67% fit confidence improves the decision over an uninformed hire, but preserves less value than the lead candidate because additional support and risk management will be required.'
      }
    }
  ];

  readonly aiPrompt =
    'Summarise the uploaded Cognadev reports for the nominated candidate. Produce a hiring-oriented view with Fit, Culture, Risk, Team impact, readiness, and a concise recommendation for SAP.';

  readonly integrationNotes = [
    'SAP remains the orchestration layer that initiates the request and receives the completed summary back.',
    'TalentLab handles solution selection, candidate assessment flow, and structured report collection.',
    'The AI summarisation service sits after report completion and transforms raw report evidence into decision-ready SAP output.'
  ];

  readonly excoTakeaways: ExcoTakeaway[] = [
    {
      title: 'Outcomes, not modules',
      detail: 'The value comes from predictable people outcomes, using psychometric insight plus SAP workflow orchestration.'
    },
    {
      title: 'AI and integration story',
      detail: 'SAP orchestrates, TalentLab assesses, and the AI summarisation pipeline returns actionable scores and segments to SAP.'
    },
    {
      title: 'Financial linkage',
      detail: 'The 83% confidence model links talent decisions directly to preserved value, including $1.5M-$3.5M in avoided mis-hire cost.'
    }
  ];

  readonly enterpriseDimensions: EnterpriseHeatmapDimension[] = [
    { key: 'cognitive', label: 'Cognitive' },
    { key: 'culture', label: 'Culture' },
    { key: 'fragility', label: 'Fragility' },
    { key: 'execution', label: 'Execution' },
    { key: 'leadership', label: 'Leadership' },
    { key: 'roleFit', label: 'Role-Fit' },
    { key: 'integrated', label: 'Integrated' }
  ];

  readonly enterpriseHeatmap: EnterpriseHeatmapRow[] = [
    {
      businessUnit: 'People and Culture',
      summary: 'High fit and leadership coherence, but moderate execution pressure.',
      scores: { cognitive: 87, culture: 84, fragility: 33, execution: 76, leadership: 82, roleFit: 89, integrated: 85 }
    },
    {
      businessUnit: 'Commercial',
      summary: 'Strong execution energy with moderate culture inconsistency across regions.',
      scores: { cognitive: 79, culture: 68, fragility: 46, execution: 88, leadership: 73, roleFit: 81, integrated: 75 }
    },
    {
      businessUnit: 'Operations',
      summary: 'Solid stability and role-fit, with lower leadership bench depth.',
      scores: { cognitive: 74, culture: 77, fragility: 41, execution: 83, leadership: 62, roleFit: 86, integrated: 72 }
    },
    {
      businessUnit: 'Finance',
      summary: 'High precision and low fragility, with moderate enterprise collaboration opportunity.',
      scores: { cognitive: 85, culture: 79, fragility: 22, execution: 81, leadership: 71, roleFit: 84, integrated: 69 }
    }
  ];

  selectedCandidateKey = 'elmien-toerien';
  selectedResultsViewKey = 'elmien-toerien';

  isSubmitting = false;
  isSubmitted = false;

  get candidateOptions(): CandidateOption[] {
    return this.candidateProfiles.map((profile) => ({
      key: profile.key,
      label: profile.name
    }));
  }

  get candidateRecommendations(): FinalRecommendation[] {
    return this.candidateProfiles.map((profile) => profile.finalRecommendation);
  }

  get resultsViewOptions(): ResultsViewOption[] {
    return [
      ...this.candidateOptions,
      { key: 'team-overview', label: 'Team Overview' }
    ];
  }

  get activeCandidate(): CandidateProfile {
    return this.candidateProfiles.find((profile) => profile.key === this.selectedCandidateKey) ?? this.candidateProfiles[0];
  }

  get request() {
    return {
      ...this.requestBase,
      candidate: this.activeCandidate.name
    };
  }

  get intelligenceMetrics(): KpiMetric[] {
    return this.activeCandidate.intelligenceMetrics;
  }

  get assessments(): Assessment[] {
    return this.activeCandidate.assessments;
  }

  get allReportLinks(): ReportLink[] {
    return this.assessments.flatMap((assessment) => assessment.documents);
  }

  get capabilities(): CapabilityScore[] {
    return this.activeCandidate.capabilities;
  }

  get timeline(): TimelineEvent[] {
    return this.activeCandidate.timeline;
  }

  get businessImpact(): BusinessImpactMetric[] {
    return this.activeCandidate.businessImpact;
  }

  get finalRecommendation(): FinalRecommendation {
    return this.activeCandidate.finalRecommendation;
  }

  get selectedResultsProfile(): CandidateProfile | null {
    if (this.selectedResultsViewKey === 'team-overview') {
      return null;
    }

    return this.candidateProfiles.find((profile) => profile.key === this.selectedResultsViewKey) ?? this.activeCandidate;
  }

  get aggregateRecommendation(): FinalRecommendation {
    const recommendations = this.candidateRecommendations;
    const avgFit = Math.round(recommendations.reduce((sum, item) => sum + item.fit, 0) / recommendations.length);
    const avgCulture = Math.round(recommendations.reduce((sum, item) => sum + item.culture, 0) / recommendations.length);

    return {
      candidate: 'Team Overview',
      fit: avgFit,
      culture: avgCulture,
      risk: 'Mixed',
      teamImpact: '+8%',
      readiness: 'Portfolio view',
      status: 'Compare',
      confidenceModel: 'Portfolio comparison',
      summary: 'This requisition contains one high-confidence recommend profile and one conditional profile. The comparison makes the decision trade-off visible at a glance for hiring managers and Exco reviewers.'
    };
  }

  get displayedRecommendation(): FinalRecommendation {
    return this.selectedResultsProfile?.finalRecommendation ?? this.aggregateRecommendation;
  }

  get displayedResultsTitle(): string {
    return `${this.displayedRecommendation.candidate} -> ${this.requestBase.vacancy}`;
  }

  get displayedBusinessImpact(): BusinessImpactMetric[] {
    return this.selectedResultsProfile?.businessImpact ?? [
      { value: '2', label: 'Candidates compared', detail: 'One recommend profile and one conditional profile are currently attached to this requisition.' },
      { value: '88% vs 67%', label: 'Fit spread', detail: 'The lead candidate outperforms the secondary candidate materially on fit confidence.' },
      { value: '$1.5M-$3.5M', label: 'Top-end value preserved', detail: 'The lead recommendation carries the highest value preservation estimate for this requisition.' }
    ];
  }

  get displayedAllReportLinks(): ReportLink[] {
    return this.selectedResultsProfile?.assessments.flatMap((assessment) => assessment.documents) ?? this.candidateProfiles.flatMap((profile) => profile.assessments.flatMap((assessment) => assessment.documents));
  }

  get activeStackUpVerdict() {
    return this.activeCandidate.stackUpVerdict;
  }

  setSelectedCandidate(candidateKey: string): void {
    if (this.selectedCandidateKey === candidateKey) {
      return;
    }

    this.selectedCandidateKey = candidateKey;
    this.selectedResultsViewKey = candidateKey;
    this.isSubmitting = false;
    this.isSubmitted = false;
  }

  setSelectedResultsView(resultsViewKey: string): void {
    this.selectedResultsViewKey = resultsViewKey;

    if (resultsViewKey !== 'team-overview') {
      this.selectedCandidateKey = resultsViewKey;
    }
  }

  getCapabilitiesByPillar(pillarId: PillarId): CapabilityScore[] {
    return this.capabilities.filter((capability) => capability.pillarId === pillarId);
  }

  getPillar(pillarId: PillarId): SolutionPillar | undefined {
    return this.pillars.find((pillar) => pillar.id === pillarId);
  }

  getReportsForCapability(reportCodes: string[]): ReportLink[] {
    const unique = new Map<string, ReportLink>();

    this.assessments
      .filter((assessment) => reportCodes.includes(assessment.code))
      .flatMap((assessment) => assessment.documents)
      .forEach((document) => {
        unique.set(document.path, document);
      });

    return Array.from(unique.values());
  }

  isAlertCapability(score: number): boolean {
    return score >= 60;
  }

  isFragilityCapability(capability: CapabilityScore): boolean {
    return capability.capability.includes('Fragility');
  }

  getCapabilityCardClass(capability: CapabilityScore): string {
    if (!this.isFragilityCapability(capability)) {
      return '';
    }

    if (capability.score >= 60) {
      return 'capability-alert';
    }

    if (capability.score >= 40) {
      return 'capability-watch';
    }

    return 'capability-good';
  }

  getHeatClass(score: number): string {
    if (score >= 85) {
      return 'heat-high';
    }

    if (score >= 70) {
      return 'heat-good';
    }

    if (score >= 50) {
      return 'heat-watch';
    }

    return 'heat-alert';
  }

  submitToSap(): Promise<void> {
    if (this.isSubmitting || this.isSubmitted) {
      return Promise.resolve();
    }

    this.isSubmitting = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        resolve();
      }, 1600);
    });
  }
}
