import Component from '../Component.js';

class ResultItem extends Component {
  onRender(dom){
    
  }

  renderHTML(){
    const summary = this.props;

    return /*html*/ `
      <div class='summary'>
        <p class='title'>Study Title: ${summary.summaryTitle}</p>
        <p class='summary'>Summary: ${summary.publicSummary.entry}</p>
        <p class='type'>Study Type: ${summary.studyType}</p>
        <p class='year'>Year Published: ${summary.yearPublished}</p>
        <p class='population'>Population: ${summary.populationDesc.entry}</p>
        <p class='number-participants'>Number of Participants: ${summary.numParticipants.entry}</p>
        <p class='natural-therapy-category'>Natural Therapy Category: ${summary.naturalTherapyCategory.entry}</p>
        <p class='natural-therapy-description'>Natural Therapy Description: ${summary.naturalTherapyDesc.entry}</p>
        <p class='natural-therapy-name'>Natural Therapy Name: ${summary.naturalTherapyName.entry}</p>
        <p class='natural-therapy-components'>Natural Therapy Components: ${summary.naturalTherapyComponents.entry}</p>
        <p class='outcome-results'>Outcome Results: ${summary.outcomeResults.entry}</p>
        <p class='outcome-category'>Outcome Category: ${summary.outcomeCategory.entry}</p>
        <p class='conventional-treatment'>Conventional Treatment: ${summary.conventionalTreatment.entry}</p>
        <p class='conventional-treatment-agents'>Conventional Treatment Agents: ${summary.conventionalTreatmentAgents.entry}</p>
        <p class='cancer-status'>Cancer Status: ${summary.cancerStatus.entry}</p>
        <p class='cancer-type'>Cancer Type: ${summary.cancerType.entry}</p>
        <p class='tumor-type-tags'>Tumor Type Tags: ${summary.tumorTypeTags.entry}</p>
        <p class='pathology'>Pathology: ${summary.pathology.entry}</p>
      </div>
    `;
  }
}

export default ResultItem;
