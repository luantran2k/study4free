import { useId, useState } from 'react';
import Parts from '../Parts';

export type SectionType = 'Listening' | 'Reading' | 'Writing' | 'Speaking';

type Props = {
  sections: { name: SectionType; id: string }[];
};

function Sections({ sections }: Props) {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const modalId = useId();

  return (
    <>
      <ul className="flex gap-2 list-style-none">
        {sections.map((section, index) => (
          <li
            className={`rounded-box px-4 py-2 cursor-pointer active:translate-y-1 transition-all ${
              section.name === currentSection.name
                ? 'bg-blue-500 text-white'
                : 'bg-base-200'
            } `}
            onClick={() => setCurrentSection(section)}
            key={section.name}
          >
            {sections[index].name}
          </li>
        ))}
      </ul>
      <Parts
        section={currentSection.name}
        modalId={modalId}
        sectionId={currentSection.id}
      />
    </>
  );
}

export default Sections;
