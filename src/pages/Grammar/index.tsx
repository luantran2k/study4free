import grammarBg from '../../assets/images/grammar-bg.jpeg';
import grammar1 from '../../assets/images/grammar-1.jpg';
import grammar2 from '../../assets/images/grammar-2.jpg';
import grammar3 from '../../assets/images/grammar-3.jpg';
import item11 from '../../assets/images/grammar-1-item-1.jpg';
import item12 from '../../assets/images/grammar-1-item-2.jpg';
import item13 from '../../assets/images/grammar-1-item-3.jpg';
import item21 from '../../assets/images/grammar-2-item-1.jpg';
import item22 from '../../assets/images/grammar-2-item-2.jpg';
import item23 from '../../assets/images/grammar-2-item-3.jpg';
import item31 from '../../assets/images/grammar-3-item-1.jpg';
import item32 from '../../assets/images/grammar-3-item-2.jpg';
import item33 from '../../assets/images/grammar-3-item-3.jpg';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import React from 'react';

export const sectionItem = [
  {
    id: 1,
    title: 'A1-A2 grammar',
    to: 'a1-a2-grammar',
    des: 'Are you a learner at A1 (elementary) or A2 (pre-intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons.',
    imgUrl: grammar1,
    detailDes: `Are you a learner at <a href="" class="text-[#23085a] underline hover:text-fuchsia-500">A1 (elementary)</a> or <a class="text-[#23085a] underline hover:text-fuchsia-500" href="">A2 (pre-intermediate)</a> English level?
    <br></br>
    In this section you can improve your grammar with our clear and simple grammar lessons. Start with an exercise to test your understanding. Then, read the explanation to improve your grammar knowledge. Finally, test your understanding again to see if you have improved.
    <br></br>
Choose a grammar point and start improving your grammar today. Good luck!`,
    lessons: [
      {
        id: 'adj-prep',
        lesson: 'Adjectives and prepositions',
        descript:
          'Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you.',
        comment: 384,
        imgUrl: item11,
        to: '',
      },
      {
        id: 'adj-ed-ing',
        lesson: "Adjectives ending in '-ed' and '-ing'",
        descript:
          'Do you know the difference between bored and boring? Test what you know with interactive exercises and read the explanation to help you.',
        comment: 169,
        imgUrl: item12,
        to: '',
      },
      {
        id: 'a-an-the',
        lesson: "Articles: 'a', 'an', 'the'",
        descript:
          'Do you know how to use a, an and the? Test what you know with interactive exercises and read the explanation to help you.',
        comment: 193,
        imgUrl: item13,
        to: '',
      },
    ],
  },
  {
    id: 2,
    title: 'B1-B2 grammar',
    to: 'b1-b2-grammar',
    des: 'Are you a learner at B1 (intermediate) or B2 (upper intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons.',
    imgUrl: grammar2,
    detailDes: `Are you a learner at <a href="" class="text-[#23085a] underline hover:text-fuchsia-500">B1 (elementary)</a> or <a class="text-[#23085a] underline hover:text-fuchsia-500" href="">B2 (pre-intermediate)</a> English level?
    <br></br>
    In this section you can improve your grammar with our clear and simple grammar lessons. Start with an exercise to test your understanding. Then, read the explanation to improve your grammar knowledge. Finally, test your understanding again to see if you have improved.
    <br></br>
Choose a grammar point and start improving your grammar today. Good luck!`,
    lessons: [
      {
        id: 'adj',
        lesson: 'Adjectives: gradable and non-gradable',
        descript: `Do you know how to use adjectives in phrases like <span class="italic"> a bit cold, really cold</span> and <span class="italic">absolutely freezing</span>? Test what you know with interactive exercises and read the explanation to help you.`,
        comment: 51,
        imgUrl: item21,
        to: '',
      },
      {
        id: 'brit-ameri',
        lesson: 'British English and American English',
        descript:
          'Do you know any differences between British and American English? Test what you know with interactive exercises and read the explanation to help you.',
        comment: 53,
        imgUrl: item22,
        to: '',
      },
      {
        id: 'capital',
        lesson: 'Capital letters and apostrophes',
        descript:
          'Do you know how to use capital letters and apostrophes correctly? Test what you know with interactive exercises and read the explanation to help you.',
        comment: 58,
        imgUrl: item23,
        to: '',
      },
    ],
  },
  {
    id: 3,
    title: 'C1 grammar',
    to: 'c1-grammar',
    des: 'Are you a learner at C1 (advanced) English level? In this section, you can improve your grammar with our clear and simple grammar lessons.',
    imgUrl: grammar3,
    detailDes: `Are you a learner at <a class="text-[#23085a] underline hover:text-fuchsia-500" href="">C1 (advanced)</a> English level?
    <br></br>
    In this section you can improve your grammar with our clear and simple grammar lessons. Start with an exercise to test your understanding. Then, read the explanation to improve your grammar knowledge. Finally, test your understanding again to see if you have improved.
    <br></br>
Choose a grammar point and start improving your grammar today. Good luck!`,
    lessons: [
      {
        id: 'avoid-rep',
        lesson: 'Avoiding repetition in a text',
        descript: `Do you know how to use words like <span class="italic">this, that, such</span> and so to avoid repetition in a text? Read the explanation to find out and do the interactive exercises to practise.`,
        comment: 0,
        imgUrl: item31,
        to: '',
      },
      {
        id: 'ellip',
        lesson: 'Ellipsis',
        descript:
          'Do you know how to leave out words to make your English sound more natural? Test what you know about ellipsis with interactive exercises and read the explanation to help you.',
        comment: 1,
        imgUrl: item32,
        to: '',
      },
      {
        id: 'emphasis',
        lesson: 'Emphasis: cleft sentences, inversion and auxiliaries',
        descript:
          'Do you know how to add emphasis using cleft sentences, inversion or auxiliaries? Test what you know with interactive exercises and read the explanation to help you.',
        comment: 0,
        imgUrl: item33,
        to: '',
      },
    ],
  },
];

export const webItem = [
  { id: 1, title: 'Go to lorem 1', to: '' },
  { id: 2, title: 'Go to lorem 2', to: '' },
  { id: 3, title: 'Go to lorem 3', to: '' },
];

export const helpItem = [
  { id: 1, title: 'Free online English test', to: '' },
  { id: 2, title: 'Sign up for our newsletter', to: '' },
  { id: 3, title: 'Frequently asked questions', to: '' },
  { id: 1, title: 'Getting started', to: '' },
  { id: 2, title: 'House rules', to: '' },
];

const GrammarPage = () => {
  const param = useParams();

  return (
    <React.Fragment>
      {param.section ? (
        <Outlet />
      ) : (
        <div className="flex flex-col h-full relative">
          <figure className="w-full lg:mb-32 mb-5">
            <img src={grammarBg} className="w-full h-auto" alt="Grammar Background" />
          </figure>
          <div className="bg-white lg:w-[600px] lg:py-8 lg:px-10 left-[15vw] lg:absolute 2xl:top-[400px] xl:top-[300px] lg:top-[200px] rounded-tr-3xl rounded-bl-3xl mb-5 lg:mb-0 px-2 sm:px-0 container mx-auto">
            <h5 className="text- font-bold text-4xl mb-5">Grammar</h5>
            <h6 className="text-3xl mb-3">
              Revise and practise your grammar to help you increase your
              confidence and improve your language level.
            </h6>
          </div>
          <div className="flex flex-row container mx-auto mb-10">
            <article className="lg:w-2/3 w-full px-2 sm:px-0">
              <p className="mb-4 text-2xl ">
                Practise your English grammar with clear grammar explanations
                and practice exercises to test your understanding. The learning
                materials are organised into two sections, organised by English
                level.
                <br />
                <br />
                All learners, whatever their level, have questions and doubts
                about grammar as they're learning English. There is also a
                grammar reference which helps to explain the verb tenses and
                grammar rules in a clear and simple way.
                <br />
                <br />
                Decide which area of grammar you need help with today and choose
                a grammar point to work on. When you do the interactive
                exercises, you can see how well you've done. By revising and
                practising your grammar you will increase your confidence in
                English and improve your language level.
                <br />
                <br />
                Practising little and often is the best way to improve your
                grammar, so come back tomorrow to choose another grammar point
                to work on. Good luck!
              </p>
              <p className="mb-8 text-4xl font-bold text-[#23085a]">
                Choose a section
              </p>

              <div className="mb-20">
                {sectionItem.map((section) => (
                  <section
                    className=" flex flex-row relative pb-10 sm:mb-10 mb-24"
                    key={section.id}
                  >
                    <NavLink to={section.to} className="w-full">
                      <img
                        src={section.imgUrl}
                        className="h-full w-full sm:w-3/5"
                      />
                    </NavLink>
                    <div className=" bg-white w-[90vw]  sm:w-[350px] lg:w-[400px] h-3/4 xl:w-[500px] p-6 lg:p-10 absolute bottom-[-70px] right-0 left-0 m-auto sm:m-0 sm:left-auto sm:bottom-0 sm:right-[100px] md:rounded-tl-3xl rounded-3xl">
                      <NavLink
                        to={section.to}
                        className="mb-1 lg:mb-3 block text-3xl font-bold text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                      <p className="mb-4 xl:text-lg">{section.des}</p>
                    </div>
                  </section>
                ))}
              </div>
              <p className="mb-4 text-4xl font-bold text-[#23085a]">
                Learn to use grammar correctly and confidently
              </p>
              <p className="mb-4 text-2xl ">
                Our online English classes feature lots of useful learning
                materials and activities to help you improve your understanding
                of grammar in a safe and inclusive learning environment.
                <br />
                <br />
                Practise using grammar with your classmates in live group
                classes, get grammatical support from a personal tutor in
                one-to-one lessons or practise grammar by yourself at your own
                pace with a self-study course.
              </p>
            </article>

            <aside className="w-1/3 hidden lg:block relative">
              <div className="sticky flex flex-col top-0 gap-3">
                <div className="border-[10px] border-gray-200 p-6 rounded-tr-3xl rounded-bl-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
                  {sectionItem.map((section) => (
                    <section
                      key={`${section.title}-${section.id}`}
                      className="flex flex-row justify-center items-center gap-x-2"
                    >
                      <svg
                        width="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#23085a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="Interface / Check_All">
                            {' '}
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#23085a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <NavLink
                        to={section.to}
                        className="text-md text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                    </section>
                  ))}
                </div>
                <div className="border-[10px] border-gray-200 p-6 rounded-tl-3xl rounded-br-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
                  <p className="text-[#23085a]  text-xl font-bold">
                    Our websites
                  </p>
                  {webItem.map((section) => (
                    <section
                      key={`${section.title}-${section.id}`}
                      className="flex flex-row justify-center items-center gap-x-2"
                    >
                      <svg
                        width="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#23085a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="Interface / Check_All">
                            {' '}
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#23085a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <NavLink
                        to={section.to}
                        className="text-md text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                    </section>
                  ))}
                </div>
                <div className="border-[10px] border-gray-200 p-6 rounded-tr-3xl rounded-bl-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
                  <p className="text-[#23085a]  text-xl font-bold">Help</p>
                  {helpItem.map((section) => (
                    <section
                      key={`${section.title}-${section.id}`}
                      className="flex flex-row justify-center items-center gap-x-2"
                    >
                      <svg
                        width="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#23085a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="Interface / Check_All">
                            {' '}
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#23085a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <NavLink
                        key={section.id}
                        to={section.to}
                        className="text-md text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                    </section>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default GrammarPage;
