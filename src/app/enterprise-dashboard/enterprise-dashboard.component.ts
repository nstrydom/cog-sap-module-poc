import { Component } from '@angular/core';

import { DemoStateService } from '../demo-state.service';

type SignalSeverity = 'high' | 'medium' | 'low';

interface JourneyMetric {
  title: string;
  score: number;
  detail: string;
}

interface CapabilitySignal {
  title: string;
  detail: string;
  severity: SignalSeverity;
}

interface OutcomeDiagnosis {
  function: string;
  roles: string[];
  failingJourneyStep: string;
  missingCapability: string;
  recommendedAction: string;
}

interface OutcomeDimension {
  key: string;
  title: string;
  score: number;
  risk: string;
  trend: string;
  journey: JourneyMetric[];
  capabilitySignals: CapabilitySignal[];
  diagnosis: OutcomeDiagnosis;
}

interface Scenario {
  key: string;
  title: string;
  label: string;
  summary: string;
  probabilityOfDelivery: number;
  fragilityIndex: number;
  primaryRisk: string;
  outcomes: OutcomeDimension[];
}

@Component({
  selector: 'app-enterprise-dashboard',
  templateUrl: './enterprise-dashboard.component.html',
  styleUrl: './enterprise-dashboard.component.scss',
  standalone: false
})
export class EnterpriseDashboardComponent {
  readonly scenarios: Scenario[] = [
    {
      key: 'commercial-scale-up',
      title: 'Commercial Scale-Up',
      label: 'Scenario 1',
      summary: 'Revenue is growing, but commercial design is not consistently converting that growth into quality margin.',
      probabilityOfDelivery: 74,
      fragilityIndex: 39,
      primaryRisk: 'Pricing discipline',
      outcomes: [
        {
          key: 'economic-engine',
          title: 'Economic Engine',
          score: 78,
          risk: 'Margin pressure',
          trend: '+4 pts',
          journey: [
            { title: 'Strategy alignment', score: 82, detail: 'Value pools are clear, but not translated into pricing authority at regional level.' },
            { title: 'Culture alignment', score: 74, detail: 'Volume urgency still wins over disciplined margin decisions.' },
            { title: 'Job design fit', score: 68, detail: 'Pricing accountability is spread across too many commercial roles.' },
            { title: 'Performance system strength', score: 72, detail: 'The dashboard tracks revenue, but not pricing decision quality.' },
            { title: 'Succession readiness', score: 70, detail: 'Only one successor is ready for a high-complexity pricing role.' },
            { title: 'Reward alignment', score: 64, detail: 'Incentives still reward volume more than revenue quality.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Strategic trade-off judgement is weak in regional pricing leadership.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Commercial directors own outcome accountability without matching pricing control.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'The pricing bench is too thin for multi-market complexity.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Commercial',
            roles: ['Regional Pricing Director', 'Commercial Director'],
            failingJourneyStep: 'Reward alignment',
            missingCapability: 'Strategic trade-off judgement',
            recommendedAction: 'Reassign pricing authority and rebalance incentive design in SuccessFactors Compensation.'
          }
        },
        {
          key: 'execution',
          title: 'Execution',
          score: 76,
          risk: 'Forecast variance',
          trend: '+2 pts',
          journey: [
            { title: 'Strategy alignment', score: 79, detail: 'Commercial targets are clear but local execution choices remain uneven.' },
            { title: 'Culture alignment', score: 77, detail: 'Escalation discipline is improving across regions.' },
            { title: 'Job design fit', score: 73, detail: 'Sales operations roles are clearer, but cross-functional handoffs still drag decisions.' },
            { title: 'Performance system strength', score: 75, detail: 'Execution metrics are stable, but leading indicators are not used enough.' },
            { title: 'Succession readiness', score: 72, detail: 'Bench is adequate for operating continuity.' },
            { title: 'Reward alignment', score: 71, detail: 'Reward structure supports cadence, but not enough collaboration.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Decision speed drops when execution requires finance and commercial coordination.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'Sales operations managers absorb escalation work that belongs higher up.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Execution rhythm depends on a small number of experienced managers.', severity: 'low' }
          ],
          diagnosis: {
            function: 'Sales Operations',
            roles: ['Sales Operations Manager', 'Commercial Finance Partner'],
            failingJourneyStep: 'Job design fit',
            missingCapability: 'Cross-functional decision integration',
            recommendedAction: 'Clarify commercial-finance decision routing and move escalations to the correct level.'
          }
        },
        {
          key: 'adaptability',
          title: 'Adaptability',
          score: 69,
          risk: 'Slow response',
          trend: '+1 pt',
          journey: [
            { title: 'Strategy alignment', score: 74, detail: 'Transformation goals are clear, but not embedded in frontline decision routines.' },
            { title: 'Culture alignment', score: 69, detail: 'The culture supports resilience but not fast experimentation.' },
            { title: 'Job design fit', score: 65, detail: 'Transformation roles lack authority for cross-market change.' },
            { title: 'Performance system strength', score: 66, detail: 'Learning metrics are weak relative to delivery metrics.' },
            { title: 'Succession readiness', score: 63, detail: 'Emerging-change roles do not yet have successor depth.' },
            { title: 'Reward alignment', score: 67, detail: 'Reward partially reinforces adaptive behavior.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Learning agility is not strong enough in transformation-critical roles.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Change leads are asked to influence enterprise outcomes without enterprise authority.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Adaptability depends on a few high-capability leaders.', severity: 'high' }
          ],
          diagnosis: {
            function: 'Transformation Office',
            roles: ['Change Portfolio Lead', 'Regional Transformation Manager'],
            failingJourneyStep: 'Culture alignment',
            missingCapability: 'Learning agility at enterprise scale',
            recommendedAction: 'Redesign transformation roles and update succession coverage for enterprise-change positions.'
          }
        },
        {
          key: 'capital-allocation',
          title: 'Capital Allocation',
          score: 73,
          risk: 'Investment quality',
          trend: '-1 pt',
          journey: [
            { title: 'Strategy alignment', score: 78, detail: 'Capital intent is clear, but approval logic remains fragmented.' },
            { title: 'Culture alignment', score: 71, detail: 'Challenge and debate are too weak at investment review level.' },
            { title: 'Job design fit', score: 68, detail: 'Decision rights do not always sit at the correct complexity level.' },
            { title: 'Performance system strength', score: 70, detail: 'Returns are visible, but decision quality is not predicted ahead of time.' },
            { title: 'Succession readiness', score: 67, detail: 'Capital-intensive roles have limited successor depth.' },
            { title: 'Reward alignment', score: 65, detail: 'Short-term targets distort long-horizon capital decisions.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Investment reviewers vary too much in systems judgement.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Some approvals are escalated too late, after structural risk is embedded.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Bench strength is weak for allocation-critical roles.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Finance',
            roles: ['Capital Committee Sponsor', 'Business Unit CFO'],
            failingJourneyStep: 'Reward alignment',
            missingCapability: 'Long-horizon strategic judgement',
            recommendedAction: 'Move investment thresholds to the right level and rebalance long-horizon incentives.'
          }
        },
        {
          key: 'alignment',
          title: 'Alignment',
          score: 81,
          risk: 'Interface drag',
          trend: '+5 pts',
          journey: [
            { title: 'Strategy alignment', score: 85, detail: 'Enterprise priorities are well understood.' },
            { title: 'Culture alignment', score: 83, detail: 'Leadership language is consistent across most functions.' },
            { title: 'Job design fit', score: 77, detail: 'Interface roles are improved but still overlap in places.' },
            { title: 'Performance system strength', score: 80, detail: 'Measures are consistent across the system.' },
            { title: 'Succession readiness', score: 78, detail: 'Key roles have visible successors.' },
            { title: 'Reward alignment', score: 79, detail: 'Incentives broadly support enterprise priorities.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Systems thinking still drops below executive level.', severity: 'low' },
            { title: 'Role misalignment', detail: 'Interface roles duplicate some decisions across functions.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'A small number of integrator roles carry too much load.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Enterprise Integration',
            roles: ['Business Partner Network', 'Cross-Functional PMO'],
            failingJourneyStep: 'Job design fit',
            missingCapability: 'Systems thinking across boundaries',
            recommendedAction: 'Tighten cross-functional role boundaries and target integrator capability in learning plans.'
          }
        }
      ]
    },
    {
      key: 'supply-chain-stability',
      title: 'Supply Chain Stability',
      label: 'Scenario 2',
      summary: 'Delivery reliability is slipping because role complexity, operating pressure, and leadership depth are not aligned.',
      probabilityOfDelivery: 68,
      fragilityIndex: 44,
      primaryRisk: 'Execution under pressure',
      outcomes: [
        {
          key: 'economic-engine',
          title: 'Economic Engine',
          score: 71,
          risk: 'Cost leakage',
          trend: '-2 pts',
          journey: [
            { title: 'Strategy alignment', score: 74, detail: 'Cost targets are clear, but operating trade-offs remain inconsistent.' },
            { title: 'Culture alignment', score: 71, detail: 'Pressure drives short-term fixes over stable value delivery.' },
            { title: 'Job design fit', score: 66, detail: 'Execution-critical roles are broader than their design implies.' },
            { title: 'Performance system strength', score: 69, detail: 'Cost is tracked, but root causes are not visible early enough.' },
            { title: 'Succession readiness', score: 63, detail: 'Few successors can absorb high-pressure delivery roles.' },
            { title: 'Reward alignment', score: 70, detail: 'Cost control is rewarded more than system resilience.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Operational judgement under volatility is inconsistent.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Local leaders are making calls beyond their designed decision span.', severity: 'high' },
            { title: 'Leadership risk', detail: 'Continuity depends on a small number of experienced operators.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Operations',
            roles: ['Plant Leader', 'Regional Supply Chain Manager'],
            failingJourneyStep: 'Job design fit',
            missingCapability: 'Complexity handling under pressure',
            recommendedAction: 'Redefine role spans and trigger resilience reviews in Performance & Goals.'
          }
        },
        {
          key: 'execution',
          title: 'Execution',
          score: 72,
          risk: 'Delivery variance',
          trend: '-3 pts',
          journey: [
            { title: 'Strategy alignment', score: 75, detail: 'Execution priorities are clear, but local routines are inconsistent.' },
            { title: 'Culture alignment', score: 73, detail: 'Escalation discipline differs by site.' },
            { title: 'Job design fit', score: 64, detail: 'Operational roles carry higher complexity than recognised.' },
            { title: 'Performance system strength', score: 69, detail: 'Lagging metrics dominate the dashboard.' },
            { title: 'Succession readiness', score: 62, detail: 'Critical roles have shallow successor coverage.' },
            { title: 'Reward alignment', score: 70, detail: 'Reward favors cost control over adaptive delivery.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Supply leaders are uneven at managing cross-functional complexity.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Supervisors hold decisions that belong at manager level.', severity: 'high' },
            { title: 'Leadership risk', detail: 'Leaders are stable in routine conditions but fragile under volatility.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Supply Chain',
            roles: ['Supply Chain Manager', 'Shift Supervisor'],
            failingJourneyStep: 'Succession readiness',
            missingCapability: 'Decision integration under volatility',
            recommendedAction: 'Strengthen succession cover and move high-complexity decisions to manager level.'
          }
        },
        {
          key: 'adaptability',
          title: 'Adaptability',
          score: 64,
          risk: 'Slow recovery',
          trend: '-1 pt',
          journey: [
            { title: 'Strategy alignment', score: 68, detail: 'Adaptation priorities are not translated into plant-level action.' },
            { title: 'Culture alignment', score: 66, detail: 'Teams respond, but not consistently learn from disruption.' },
            { title: 'Job design fit', score: 63, detail: 'Improvement roles lack reach across operations.' },
            { title: 'Performance system strength', score: 61, detail: 'Learning loops are weak after disruption events.' },
            { title: 'Succession readiness', score: 60, detail: 'Improvement-critical roles lack depth.' },
            { title: 'Reward alignment', score: 66, detail: 'The reward model does not reinforce adaptive behavior enough.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Learning agility is low in several operational leadership roles.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Continuous-improvement leaders are too narrowly scoped.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Operational resilience depends on a few experienced leaders.', severity: 'high' }
          ],
          diagnosis: {
            function: 'Continuous Improvement',
            roles: ['Improvement Lead', 'Operations Excellence Manager'],
            failingJourneyStep: 'Performance system strength',
            missingCapability: 'Applied learning agility',
            recommendedAction: 'Build post-event learning metrics into SAC and widen improvement-role authority.'
          }
        },
        {
          key: 'capital-allocation',
          title: 'Capital Allocation',
          score: 70,
          risk: 'Asset return',
          trend: '+1 pt',
          journey: [
            { title: 'Strategy alignment', score: 72, detail: 'Asset priorities are defined but local investments vary in quality.' },
            { title: 'Culture alignment', score: 69, detail: 'Challenge is inconsistent in maintenance-capex decisions.' },
            { title: 'Job design fit', score: 67, detail: 'Asset decisions are sometimes made too low in the structure.' },
            { title: 'Performance system strength', score: 68, detail: 'ROI is measured after the fact, not predicted before approval.' },
            { title: 'Succession readiness', score: 65, detail: 'Bench is shallow for high-judgement asset roles.' },
            { title: 'Reward alignment', score: 69, detail: 'Spend control still outweighs long-horizon asset quality.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Asset investment judgement varies materially across sites.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'Some asset calls sit below the required judgement level.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Only a small pool can assess complex capex decisions well.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Asset Management',
            roles: ['Asset Portfolio Manager', 'Plant Finance Lead'],
            failingJourneyStep: 'Strategy alignment',
            missingCapability: 'Systems judgement on asset return',
            recommendedAction: 'Centralise high-complexity capex approvals and refresh the asset decision framework.'
          }
        },
        {
          key: 'alignment',
          title: 'Alignment',
          score: 75,
          risk: 'Cross-site inconsistency',
          trend: '+2 pts',
          journey: [
            { title: 'Strategy alignment', score: 78, detail: 'Enterprise priorities are clear, but site translation is uneven.' },
            { title: 'Culture alignment', score: 76, detail: 'The operating language is improving across sites.' },
            { title: 'Job design fit', score: 71, detail: 'Some interface roles remain duplicated.' },
            { title: 'Performance system strength', score: 74, detail: 'Measures are mostly consistent, though not all leading indicators are shared.' },
            { title: 'Succession readiness', score: 73, detail: 'Coverage is visible, but not deep.' },
            { title: 'Reward alignment', score: 74, detail: 'Incentives are broadly aligned to enterprise execution.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Systems thinking drops between site and regional levels.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'Regional-site decision overlap still slows action.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Alignment depends on a few regional integrators.', severity: 'low' }
          ],
          diagnosis: {
            function: 'Regional Operations',
            roles: ['Regional Operations Director', 'Site Leadership Team'],
            failingJourneyStep: 'Job design fit',
            missingCapability: 'Systems thinking across sites',
            recommendedAction: 'Clarify regional-site decision boundaries and standardise interface roles.'
          }
        }
      ]
    },
    {
      key: 'capital-discipline',
      title: 'Capital Discipline',
      label: 'Scenario 3',
      summary: 'Return on invested capital is under pressure because decision rights, incentives, and leadership capability are misaligned.',
      probabilityOfDelivery: 66,
      fragilityIndex: 47,
      primaryRisk: 'Investment decision quality',
      outcomes: [
        {
          key: 'economic-engine',
          title: 'Economic Engine',
          score: 74,
          risk: 'Return erosion',
          trend: '-3 pts',
          journey: [
            { title: 'Strategy alignment', score: 79, detail: 'Value creation priorities are clear at board level.' },
            { title: 'Culture alignment', score: 70, detail: 'Challenge and accountability are weaker in investment forums.' },
            { title: 'Job design fit', score: 67, detail: 'Capital authority does not always match role complexity.' },
            { title: 'Performance system strength', score: 69, detail: 'Return measures are visible, but not decision-quality predictors.' },
            { title: 'Succession readiness', score: 65, detail: 'Few successors are ready for allocation-critical roles.' },
            { title: 'Reward alignment', score: 62, detail: 'Short-term target structures distort decision quality.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Capital judgement varies materially across decision forums.', severity: 'high' },
            { title: 'Role misalignment', detail: 'Decision rights are too widely distributed for investment complexity.', severity: 'high' },
            { title: 'Leadership risk', detail: 'The allocation bench is thin for long-horizon strategy roles.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Finance',
            roles: ['Capital Committee Sponsor', 'Business Unit CFO'],
            failingJourneyStep: 'Reward alignment',
            missingCapability: 'Long-horizon strategic judgement',
            recommendedAction: 'Restructure capital approval tiers and shift incentive logic toward return quality.'
          }
        },
        {
          key: 'execution',
          title: 'Execution',
          score: 69,
          risk: 'Delayed decisions',
          trend: '-2 pts',
          journey: [
            { title: 'Strategy alignment', score: 72, detail: 'Capital priorities are defined, but execution routes are cluttered.' },
            { title: 'Culture alignment', score: 69, detail: 'Escalation is slow in investment-related workflows.' },
            { title: 'Job design fit', score: 66, detail: 'Approval work sits across too many roles and committees.' },
            { title: 'Performance system strength', score: 67, detail: 'Decision-cycle time is not visible enough.' },
            { title: 'Succession readiness', score: 64, detail: 'Critical approver roles have limited backup.' },
            { title: 'Reward alignment', score: 68, detail: 'Execution incentives do not support decisive action.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Decision velocity drops when financial and operating judgments collide.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'Approval routing remains too committee-heavy.', severity: 'high' },
            { title: 'Leadership risk', detail: 'Execution continuity is weak when one or two approvers are absent.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Investment Governance',
            roles: ['Investment PMO Lead', 'Capital Review Committee'],
            failingJourneyStep: 'Job design fit',
            missingCapability: 'Decision velocity at the right level',
            recommendedAction: 'Collapse committee routing and assign clearer approval ownership in workflow.'
          }
        },
        {
          key: 'adaptability',
          title: 'Adaptability',
          score: 67,
          risk: 'Portfolio rigidity',
          trend: '+1 pt',
          journey: [
            { title: 'Strategy alignment', score: 71, detail: 'The strategic portfolio intent is clear, but not adaptable enough in practice.' },
            { title: 'Culture alignment', score: 68, detail: 'Investment decisions still favor certainty over adaptability.' },
            { title: 'Job design fit', score: 65, detail: 'Portfolio roles are designed for control more than adaptive judgment.' },
            { title: 'Performance system strength', score: 64, detail: 'Scenario planning is not tightly linked to talent capability.' },
            { title: 'Succession readiness', score: 63, detail: 'Successors are not yet ready for ambiguous portfolio trade-offs.' },
            { title: 'Reward alignment', score: 66, detail: 'The system does not reward adaptive portfolio management strongly enough.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Learning agility is not strong enough in several portfolio roles.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'Portfolio leaders hold control without sufficient adaptive authority.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Adaptive portfolio decisions depend on too few people.', severity: 'high' }
          ],
          diagnosis: {
            function: 'Strategy & Portfolio',
            roles: ['Portfolio Strategy Lead', 'Capital Planning Director'],
            failingJourneyStep: 'Performance system strength',
            missingCapability: 'Adaptive portfolio judgement',
            recommendedAction: 'Add scenario-led capability tracking and widen adaptive authority in portfolio roles.'
          }
        },
        {
          key: 'capital-allocation',
          title: 'Capital Allocation',
          score: 76,
          risk: 'Governance strain',
          trend: '+3 pts',
          journey: [
            { title: 'Strategy alignment', score: 81, detail: 'Capital direction is clear and broadly understood.' },
            { title: 'Culture alignment', score: 74, detail: 'Challenge quality is improving but not yet consistent.' },
            { title: 'Job design fit', score: 72, detail: 'High-value decisions are moving closer to the right roles.' },
            { title: 'Performance system strength', score: 75, detail: 'Decision quality is increasingly visible in reporting.' },
            { title: 'Succession readiness', score: 71, detail: 'Succession is visible but still not deep enough.' },
            { title: 'Reward alignment', score: 70, detail: 'Incentive design is improving against capital quality metrics.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Some reviewers still lack systems depth for complex capital choices.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'A few high-value decisions still route below the required judgement level.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Capital governance remains person-dependent in critical forums.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Capital Governance',
            roles: ['Capital Committee', 'Corporate Finance Lead'],
            failingJourneyStep: 'Culture alignment',
            missingCapability: 'Challenge quality in capital forums',
            recommendedAction: 'Strengthen decision challenge protocols and update reviewer capability requirements.'
          }
        },
        {
          key: 'alignment',
          title: 'Alignment',
          score: 72,
          risk: 'Portfolio disconnect',
          trend: '+2 pts',
          journey: [
            { title: 'Strategy alignment', score: 76, detail: 'The portfolio story is clear, though translation into roles is uneven.' },
            { title: 'Culture alignment', score: 71, detail: 'Decision challenge quality differs by forum.' },
            { title: 'Job design fit', score: 69, detail: 'Portfolio and finance roles still overlap in places.' },
            { title: 'Performance system strength', score: 70, detail: 'Enterprise-level portfolio metrics are visible but not integrated everywhere.' },
            { title: 'Succession readiness', score: 68, detail: 'Coverage exists but not at the required depth.' },
            { title: 'Reward alignment', score: 69, detail: 'Portfolio and finance incentives are not yet fully aligned.' }
          ],
          capabilitySignals: [
            { title: 'Capability gap', detail: 'Systems thinking across strategy and finance is inconsistent below executive level.', severity: 'medium' },
            { title: 'Role misalignment', detail: 'Portfolio and finance interface roles still duplicate some authority.', severity: 'medium' },
            { title: 'Leadership risk', detail: 'Alignment is fragile when key integrator roles are vacant.', severity: 'medium' }
          ],
          diagnosis: {
            function: 'Strategy & Finance Integration',
            roles: ['Strategy Partner', 'Corporate Finance Partner'],
            failingJourneyStep: 'Job design fit',
            missingCapability: 'Systems thinking across strategy and finance',
            recommendedAction: 'Redesign interface roles and target integrator capability in succession plans.'
          }
        }
      ]
    }
  ];

  selectedScenarioKey = 'commercial-scale-up';
  selectedOutcomeKey = 'economic-engine';

  constructor(public demo: DemoStateService) {}

  get selectedScenario(): Scenario {
    return this.scenarios.find((scenario) => scenario.key === this.selectedScenarioKey) ?? this.scenarios[0];
  }

  get selectedOutcome(): OutcomeDimension {
    return this.selectedScenario.outcomes.find((outcome) => outcome.key === this.selectedOutcomeKey) ?? this.selectedScenario.outcomes[0];
  }

  selectScenario(key: string): void {
    this.selectedScenarioKey = key;
    this.selectedOutcomeKey = this.selectedScenario.outcomes[0].key;
  }

  selectOutcome(key: string): void {
    this.selectedOutcomeKey = key;
  }

  get outcomeHealthLabel(): string {
    if (this.selectedScenario.probabilityOfDelivery >= 80) {
      return 'On track';
    }

    if (this.selectedScenario.probabilityOfDelivery >= 70) {
      return 'Watch';
    }

    return 'At risk';
  }

  getHealthClass(label: string): string {
    if (label === 'On track') {
      return 'status-good';
    }

    if (label === 'Watch') {
      return 'status-watch';
    }

    return 'status-alert';
  }

  getScoreClass(score: number): string {
    if (score >= 80) {
      return 'status-good';
    }

    if (score >= 70) {
      return 'status-watch';
    }

    return 'status-alert';
  }

  getSignalClass(severity: SignalSeverity): string {
    if (severity === 'high') {
      return 'signal-high';
    }

    if (severity === 'medium') {
      return 'signal-medium';
    }

    return 'signal-low';
  }
}
