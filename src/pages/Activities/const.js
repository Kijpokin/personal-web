import Codehew from '../../assets/acheivements/codehew.jpg'
import Toi from '../../assets/acheivements/toi10.jpg'
import Unesco from '../../assets/acheivements/unesco.jpg'

export const ACTIVITIES_CONFIGS = {
  activities: [
    {
      src: Unesco,
      position: '1st Runner Up',
      company: 'UNESCO-Microsoft hackathon for a culture of peace',
      date: 'April 2018',
      details:
        'Hackathon participants will create apps using lessons from the innovative teaching and learning materials that have been developed under the programme and that respond to the question: “How can we enjoy a culture of peace and come to understand history as a source of harmony based on shared histories rather than conflict ? ”',
    },
    {
      src: Codehew,
      position: 'Final Round Programming Contest',
      company: 'CodeHew Hackathon',
      date: 'January 2016',
      details:
        'The winner in activities and 13th rank of Total team, sponsored by Wongnai and Association Programming Thailand',
    },
    {
      src: Toi,
      position: 'Participate The Tenth Thailand Olympiad in Informatics',
      company: 'Ubonratchathani University',
      date: 'May 2014',
      details: `The Computer Olympics Contest (POSN) The details of the camp is studying about Data Structure and Algorithm Design for competitive programming.`,
    },
  ],
}
