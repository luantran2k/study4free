import grammarBg from "../../assets/images/grammar-bg.jpeg"
import grammar1 from "../../assets/images/grammar-1.jpg"
import grammar2 from "../../assets/images/grammar-2.jpg"
import grammar3 from "../../assets/images/grammar-3.jpg"
import grammar4 from "../../assets/images/grammar-4.jpg"
import { NavLink } from "react-router-dom"


const sectionItem = [
  { id: 1, title: 'A1-A2 grammar', to: '', des: "Are you a learner at A1 (elementary) or A2 (pre-intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons.", imgUrl: grammar1 },
  { id: 2, title: 'B1-B2 grammar', to: '', des: "Are you a learner at B1 (intermediate) or B2 (upper intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons.", imgUrl: grammar2 },
  { id: 3, title: 'C1 grammar', to: '', des: "Are you a learner at C1 (advanced) English level? In this section, you can improve your grammar with our clear and simple grammar lessons.", imgUrl: grammar3 },
  { id: 4, title: 'English grammar reference', to: '', des: "This grammar section explains English grammar in a clear and simple way. There are example sentences to show how the language is used and there are interactive exercises so you can practise what you learn.", imgUrl: grammar4 }
]

const webItem = [
  { id: 1, title: 'Go to lorem 1', to: '', },
  { id: 2, title: 'Go to lorem 2', to: '', },
  { id: 3, title: 'Go to lorem 3', to: '', },
]

const helpItem = [
  { id: 1, title: 'Free online English test', to: '', },
  { id: 2, title: 'Sign up for our newsletter', to: '', },
  { id: 3, title: 'Frequently asked questions', to: '', },
  { id: 1, title: 'Getting started', to: '', },
  { id: 2, title: 'House rules', to: '', },
]

const GrammarPage = () => {
  return (
    <div className="flex flex-col h-full relative mx-auto">
      <div className="w-full lg:mb-32 mb-5">
        <img src={grammarBg} className="w-full h-auto" />
      </div>
      <div className="bg-white lg:w-[600px] lg:py-8 lg:px-10 left-[15vw] lg:absolute 2xl:top-[400px] xl:top-[300px] lg:top-[200px] rounded-tr-3xl mb-5 lg:mb-0">
        <h5 className="text-[#23085a] font-bold text-4xl mb-5">
          Grammar
        </h5>
        <h6 className="text-3xl mb-3">Revise and practise your grammar to help you increase your confidence and improve your language level.</h6>
      </div>
      <div className="flex flex-row">
        <div className="lg:w-2/3 w-full px-2 md:px-0">
          <p className="mb-4 text-base sm:text-lg font-semibold">Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. The learning materials are organised into two sections, organised by English level.
            <br />
            <br />
            All learners, whatever their level, have questions and doubts about grammar as they're learning English. There is also a grammar reference which helps to explain the verb tenses and grammar rules in a clear and simple way.
            <br />
            <br />
            Decide which area of grammar you need help with today and choose a grammar point to work on. When you do the interactive exercises, you can see how well you've done. By revising and practising your grammar you will increase your confidence in English and improve your language level.
            <br />
            <br />
            Practising little and often is the best way to improve your grammar, so come back tomorrow to choose another grammar point to work on. Good luck!</p>
          <p className="mb-8 text-3xl font-bold text-[#23085a]">Choose a section</p>

          <div className="mb-20">
            {sectionItem.map(section => (
              <div className=" flex flex-row relative pb-10 sm:mb-10 mb-24" key={section.id}>
                <NavLink to={section.to} className="w-full">
                  <img src={section.imgUrl} className="h-full w-full sm:w-3/5" />
                </NavLink>
                <div className=" bg-white w-[90vw]  sm:w-[350px] lg:w-[400px] h-3/4 xl:w-[500px] p-6 lg:p-10 absolute bottom-[-70px] right-0 left-0 m-auto sm:m-0 sm:left-auto sm:bottom-0 sm:right-[100px] md:rounded-tl-3xl rounded-3xl">
                  <NavLink to={section.to} className="mb-1 lg:mb-3 block text-2xl font-bold text-[#23085a]">{section.title}</NavLink>
                  <p className="mb-4 xl:text-lg">
                    {section.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-4 text-3xl font-bold text-[#23085a]">Learn to use grammar correctly and confidently</p>
          <p className="mb-4 text-base sm:text-lg font-medium">Our online English classes feature lots of useful learning materials and activities to help you improve your understanding of grammar in a safe and inclusive learning environment.
            <br />
            Practise using grammar with your classmates in live group classes, get grammatical support from a personal tutor in one-to-one lessons or practise grammar by yourself at your own pace with a self-study course.
          </p>
        </div>


        <div className="w-1/3 hidden lg:block h-full relative">
          <div className="sticky flex flex-col top-0 gap-3">
            <div className="border-[10px] border-gray-200 p-6 rounded-tr-3xl rounded-bl-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
              {sectionItem.map(section => (
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#23085a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check_All"> <path id="Vector" d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001" stroke="#23085a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                  <NavLink key={section.id} to={section.to} className="text-md text-[#23085a] hover:underline hover:text-green-400">
                    {section.title}
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="border-[10px] border-gray-200 p-6 rounded-tl-3xl rounded-br-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
              <p className="text-[#23085a]  text-xl font-bold">Our websites</p>
              {webItem.map(section => (

                <div className="flex flex-row justify-center items-center gap-x-2">
                  <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#23085a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check_All"> <path id="Vector" d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001" stroke="#23085a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                  <NavLink key={section.id} to={section.to} className="text-md text-[#23085a] hover:underline hover:text-green-400">
                    {section.title}
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="border-[10px] border-gray-200 p-6 rounded-tr-3xl rounded-bl-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
              <p className="text-[#23085a]  text-xl font-bold">Help</p>
              {helpItem.map(section => (
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#23085a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check_All"> <path id="Vector" d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001" stroke="#23085a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                  <NavLink key={section.id} to={section.to} className="text-md text-[#23085a] hover:underline hover:text-green-400">
                    {section.title}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrammarPage;
