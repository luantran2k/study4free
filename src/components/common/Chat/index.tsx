import { useRef, useState } from 'react';
import ChatImage from '../../../assets/icons/ChatImage';
import DeleteIcon from '../../../assets/icons/deleteIcon';
import MessageIcon from '../../../assets/icons/messageIcon';
import MinusIcon from '../../../assets/icons/minusIcon';
import PhoneIcon from '../../../assets/icons/phoneIcon';
import PlusIcon from '../../../assets/icons/plusIcon';

function Chat() {
  const refMessage = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [messageValue, setMessageValue] = useState<string>('');

  // const socket = io('http://localhost:3000');

  // const onSendMessage = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     try {
  //       console.log(refMessage.current.value);
  //       await socket.emit('send_msg', {
  //         message: refMessage.current.value,

  //         to: '6376f1cced1e5d49d84de006',
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  const [hiddenMessage, setHiddenMessage] = useState<boolean>(false);
  const [hiddenContactMethods, setHiddenContactMethods] =
    useState<boolean>(false);
  const [hiddenChat, setHiddenChat] = useState<boolean>(false);
  const handleHiddenMessage = () => {
    setHiddenMessage(true);
    setHiddenContactMethods(false);
  };

  const toggleContactMethod = () => {
    setHiddenMessage(true);
    setHiddenContactMethods(!hiddenContactMethods);
  };

  const openChat = () => {
    setHiddenChat(false);
  };

  const closeChat = () => {
    setHiddenChat(true);
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="50"
      data-aos-duration="500"
      data-aos-delay="3000"
      className="fixed bottom-10 right-3 z-10"
    >
      <div>
        <div className="cursor-pointer" onClick={toggleContactMethod}>
          <ChatImage />
        </div>
        <p
          className={`p-2 rounded-lg absolute text-white min-w-[400px] right-20 top-0 bg-black 
          before:block before:w-0 before:h-0 before:absolute before:-right-3 before:top-5
          before:border-t-[10px] before:border-t-solid before:border-t-transparent
          before:border-l-[20px] before:border-l-solid before:border-l-black
          before:border-b-[10px] before:border-b-solid before:border-b-transparent ${
            hiddenMessage && 'invisible'
          } transition-all`}
        >
          Hi, Study4Free is happy to assist you. Please select the connection
          method and submit the problem specifically that you need Study4Free's
          support!
          <div
            className="absolute -top-3 -left-2 bg-white rounded-[50%] text-black cursor-pointer"
            onClick={handleHiddenMessage}
          >
            <DeleteIcon />
          </div>
        </p>
        <div
          className={`absolute -top-48 -right-1 bg-[#f5f6fa] w-full flex flex-col items-center gap-5 text-primary text-[30px] rounded-3xl py-5 ${
            !hiddenContactMethods && 'hidden'
          }`}
        >
          <div
            className="absolute right-0 -top-2 bg-black rounded-[50%] text-white cursor-pointer"
            onClick={handleHiddenMessage}
          >
            <DeleteIcon />
          </div>
          <div className="p-4 bg-white rounded-[50%] cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
            <PhoneIcon />
          </div>
          <div
            className="p-4 bg-white rounded-[50%] cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all"
            onClick={openChat}
          >
            <MessageIcon />
          </div>
          {/* Chat content */}
          <div
            className={`flex flex-col flex-grow max-w-xl bg-white shadow-xl rounded-lg overflow-hidden absolute top-0 right-[110%] w-[300px] h-[250px] ${
              hiddenChat && 'hidden'
            }`}
          >
            <div className="border-[#ccc] border-b-[1px] p-1 text-black text-[20px] flex justify-end gap-2">
              <div className="bg-[#f5f5f5] p-2 rounded-[50%] cursor-pointer hover:bg-primary hover:text-white">
                <PlusIcon />
              </div>
              <div
                className="bg-[#f5f5f5] p-2 rounded-[50%] cursor-pointer hover:bg-primary hover:text-white"
                onClick={closeChat}
              >
                <MinusIcon />
              </div>
            </div>
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              <div className="flex w-full mt-2 space-x-3 max-w-xs">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
              </div>
              <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
            </div>

            <div className="bg-gray-300 p-4">
              <input
                className="flex items-center h-10 w-full rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
                value={messageValue}
                ref={refMessage}
                onChange={(e) => {
                  setMessageValue(e.target.value);
                }}
                // onKeyDown={onSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
