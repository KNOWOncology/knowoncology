import Component from '../Component.js';

class ResultItem extends Component {
  onRender(dom){
    
  }

  renderHTML(){
    const summary = this.props;

    return /*html*/ `
      <div class='summary'>
        <p class='title'>Title: ${summary.summaryTitle}</p>
        <p class='year'>Year Published: ${summary.yearPublished}</p>
        <p class='type'>Study Type: ${summary.studyType}</p>
        <p class='summary'>Summary: ${summary.publicSummary.entry}</p>
        <p class='number-participants'>Number of Participants: ${summary.numParticipants.entry}</p>
        <p class='population'>Population: ${summary.populationDesc.entry}</p>
        <p class='cancer-type'>Cancer Type: ${summary.cancerType.entry}</p>
        <p class='stage'>Stage: ${summary.staging.entry}</p>
        <p class='tumor-type-tags'>Tumor Type: ${summary.tumorTypeTags.entry}</p>
        <p class='natural-therapy-types'>Natural Therapy Type: ${summary.naturalTherapyCategory.entry}</p>
        <p class='natural-therapy-description'>Natural Therapy Description: ${summary.naturalTherapyDesc.entry}</p>
        <p class='natural-therapy-name'>Natural Therapy Agents: ${summary.naturalTherapyName.entry}</p>
        <p class='natural-therapy-components'>Natural Therapy Components: ${summary.naturalTherapyComponents.entry}</p>
        <p class='conventional-treatment'>Conventional Treatment Type: ${summary.conventionalTreatment.entry}</p>
        <p class='conventional-treatment-agents'>Conventional Treatment Agents: ${summary.conventionalTreatmentAgents.entry}</p>
        <p class='interactions'>Interactions: ${summary.interactionsDesc.entry}</p>
        <p class='side-effects'>Side Effects: ${summary.sideEffectTags.entry}</p>
        <p class='adverse-events'>Adverse Events: ${summary.adverseEventsDesc.entry}</p>
        <p class='outcome-category'>Outcome Category: ${summary.outcomeCategory.entry}</p>
        <p class='outcome-results'>Outcome Results: ${summary.outcomeResults.entry}</p>
        <p class='outcome-description'>Outcome Description: ${summary.outcomesResultsDesc.entry}</p>
      </div>
    `;
  }
}

export default ResultItem;
