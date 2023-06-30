let faq 
// array of FAQ is placed after the code 

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
  displayQuestions(faq);

  const questions = document.querySelectorAll('.question');

  // console.log(questions);

  questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {
      questions.forEach((curQuestion) => {
        if (curQuestion !== question) {
          curQuestion.classList.remove('show-text');
        }
      });
      question.classList.toggle('show-text');
    });
  });
});

// function to display questions

function displayQuestions(items) {
  let display = items.map(({ ques, answer }) => {
    return ` 
            <article class="question">
                <div class="question-title">
                    <P>${ques}</P>
                    <button type="button" class="question-btn">
                        <span class="plus-icon">
                            <i class="far fa-plus-square"></i>
                        </span>

                        <span class="minus-icon">
                            <i class="far fa-minus-square"></i>
                        </span>
                    </button>
                </div> 
                
                 <div class="question-text">
                    <p>${answer}</p>
                </div>
            </article>
          `;
  });
  display = display.join('');
  //   console.log(display);
  sectionCenter.innerHTML = display;
}


faq = [
  {
    ques: 'Is the TEDxHITKolkata event free to attend for all?',
    answer: 'TEDxHITKolkata Event is  completely free of cost.',
  },
  {
    ques: 'What is the process for selecting speakers for TEDx events?',
    answer:
      'We invite emerging luminaries to speak at one of our Talks after a thorough assessment.',
  },
  {
    ques: 'What is the difference between TED and TEDx',
    answer:
      'TED is the main organization that hosts conferences and events featuring speakers from various fields sharing their ideas and experiences. TEDx, on the other hand, refers to locally organized events that follow the same format and spirit as TED events but are independently organized by local communities. While TED events are curated by the main organization, TEDx events are curated by the local organizers.',
  },
  {
    ques: 'Will the TEDx event be recorded or livestreamed for those who cannot attend in person?',
    answer:
      'You are welcome to join us in person for this event, as it presents a chance to engage in an interactive session with the speaker. In case you are unable to attend in person, we will share the event on our social media channels for your convenience.',
  },
  {
    ques: `Are there any age restrictions for attending a TEDx event?`,
    answer: `Sure, you must be old enough to appreciate mind-blowing talks and innovative ideas! But in all seriousness, there are typically no age restrictions for attending a TEDx event, so everyone is welcome to join in on the fun and be inspired.`,
  },
  {
    ques: `What is the theme for this year's TEDx event ?`,
    answer: `Humanity 2.0: Breaking Boundaries`,
  },
  {
    ques: `Why should I attend TEDxHITKolkata?`,
    answer: `TEDxHITKolkata features speakers who are experts in their fields and have innovative ideas worth spreading. They can challenge you to think outside of the box, expand your perspective, and inspire you to take action in your personal and professional life.`,
  },
  {
    ques: `I am not a student of HITKolkata, can I attend the event?`,
    answer: `YES!`,
  },
];