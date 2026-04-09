import { Component } from '@angular/core';

import {
  CandidateProfile,
  CapabilityScore,
  DemoStateService,
  FinalRecommendation,
  ReportLink,
  TimelineEvent
} from '../demo-state.service';

type ChainKey = 'execution' | 'job-design' | 'capability-gap';

interface ChainNode {
  key: ChainKey;
  title: string;
  detail: string;
  tone: 'good' | 'watch' | 'alert';
}

@Component({
  selector: 'app-sap-results',
  templateUrl: './sap-results.component.html',
  styleUrl: './sap-results.component.scss',
  standalone: false
})
export class SapResultsComponent {
  selectedChainKey: ChainKey = 'execution';

  constructor(public demo: DemoStateService) {}

  get profile(): CandidateProfile | null {
    return this.demo.selectedResultsProfile;
  }

  get recommendation(): FinalRecommendation {
    return this.demo.displayedRecommendation;
  }

  get reportLinks(): ReportLink[] {
    return this.demo.displayedAllReportLinks;
  }

  get timeline(): TimelineEvent[] {
    if (this.profile) {
      return this.profile.timeline;
    }

    return [
      { title: 'SAP request created', time: '2026-03-27 08:55', detail: 'Requisition opened with two candidate paths attached for comparison.' },
      { title: 'TalentLab bundle confirmed', time: '2026-03-27 09:02', detail: 'Both candidates were assessed against the same role and capability requirement.' },
      { title: 'Assessment evidence consolidated', time: '2026-03-27 10:34', detail: 'Returned report evidence was normalised into a comparison view.' },
      { title: 'Board reporting generated', time: '2026-03-27 10:39', detail: 'Enterprise reporting created a team overview with comparison risk and readiness signals.' }
    ];
  }

  get capabilityEvidence(): CapabilityScore[] {
    if (this.profile) {
      return this.profile.capabilities;
    }

    return [
      {
        capability: 'Role Intelligence',
        pillarId: 'design-right',
        score: 82,
        whatItIs: 'Comparison of role complexity fit across the candidate slate.',
        resultInterpretation: 'One candidate is a strong complexity match, while the second candidate is partially below the full role requirement.',
        mappedReports: ['CCM', 'CPP']
      },
      {
        capability: 'Fragility & Risk Detection',
        pillarId: 'fill-right',
        score: 32,
        whatItIs: 'Comparison of fragility across the candidate slate.',
        resultInterpretation: 'Portfolio fragility remains manageable overall, but the second candidate increases delivery risk if selected without support.',
        mappedReports: ['CPP', 'MP']
      },
      {
        capability: 'Potential & Readiness',
        pillarId: 'develop-right',
        score: 77,
        whatItIs: 'Comparison of readiness and growth potential across the slate.',
        resultInterpretation: 'The lead candidate is ready now with headroom, while the second candidate is a develop-into-role option.',
        mappedReports: ['CPP', 'VO']
      }
    ];
  }

  get probabilityOfExecutionSuccess(): number {
    return Math.round((this.recommendation.fit + this.recommendation.culture) / 2);
  }

  get organisationalFragilityIndex(): number {
    const fragility = this.capabilityEvidence.find((item) => item.capability.includes('Fragility'))?.score ?? 35;
    return fragility;
  }

  get successionReadiness(): number {
    const readiness = this.capabilityEvidence.find((item) => item.capability.includes('Readiness'))?.score ?? 65;
    return readiness;
  }

  getChainClass(score: number): string {
    if (score >= 80) {
      return 'status-good';
    }

    if (score >= 70) {
      return 'status-watch';
    }

    return 'status-alert';
  }

  get riskClass(): string {
    const normalised = this.recommendation.risk.toLowerCase();

    if (normalised.includes('low')) {
      return 'status-good';
    }

    if (normalised.includes('moderate') || normalised.includes('mixed')) {
      return 'status-watch';
    }

    return 'status-alert';
  }

  get crossLinkNodes(): ChainNode[] {
    const executionCapability = this.capabilityEvidence.find((item) => item.capability.includes('Performance Prediction')) ?? this.capabilityEvidence[0];
    const jobDesignCapability = this.capabilityEvidence.find((item) => item.capability.includes('Role Intelligence'));
    const fragilityCapability = this.capabilityEvidence.find((item) => item.capability.includes('Fragility'));

    return [
      {
        key: 'execution',
        title: 'Execution issue',
        detail: executionCapability?.resultInterpretation ?? 'Execution pressure is visible in the operating outcome.',
        tone: this.probabilityOfExecutionSuccess >= 80 ? 'good' : this.probabilityOfExecutionSuccess >= 70 ? 'watch' : 'alert'
      },
      {
        key: 'job-design',
        title: 'Job design misalignment',
        detail: jobDesignCapability?.resultInterpretation ?? 'Role design is not fully aligned to required complexity.',
        tone: (jobDesignCapability?.score ?? 0) >= 80 ? 'good' : (jobDesignCapability?.score ?? 0) >= 70 ? 'watch' : 'alert'
      },
      {
        key: 'capability-gap',
        title: 'Capability gap',
        detail: fragilityCapability?.resultInterpretation ?? 'Human capability signals explain the performance risk.',
        tone: this.organisationalFragilityIndex <= 30 ? 'good' : this.organisationalFragilityIndex <= 40 ? 'watch' : 'alert'
      }
    ];
  }

  get selectedChain(): ChainNode {
    return this.crossLinkNodes.find((node) => node.key === this.selectedChainKey) ?? this.crossLinkNodes[0];
  }

  selectChain(key: ChainKey): void {
    this.selectedChainKey = key;
  }

  getToneClass(tone: 'good' | 'watch' | 'alert'): string {
    if (tone === 'good') {
      return 'status-good';
    }

    if (tone === 'watch') {
      return 'status-watch';
    }

    return 'status-alert';
  }
}
