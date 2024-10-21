import { fetchEveData } from '@/utils';
import { esiSlugs } from '@/constants';
import { SkillsData } from '@/types';
import { names } from '@/data/types';

interface CurrentSkillsProps {
  characterId: string;
}

export default async function CurrentSkills({ characterId }: CurrentSkillsProps) {
  const skills: SkillsData = await fetchEveData({
    slug: `${esiSlugs.character}${characterId}${esiSlugs.skills}`,
    authRequired: true
  });
  const MAX_SKILL_LEVEL = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-16 p-4 content-box mt-4">
        {skills.skills.map((skill) => {
          const nameEntry = names[skill.skill_id];
          const skillName = nameEntry ? nameEntry.name : skill.skill_id;
          return (
            // <div key={skill.skill_id} className="grid grid-cols-[auto,1fr]">
            <div key={skill.skill_id} className="flex w-full items-center justify-between">
              <div>{skillName}</div>
              <div className="flex gap-1">
                {MAX_SKILL_LEVEL.map((level) => {
                  return (
                    <div
                      key={level}
                      className={`w-3 h-3 border border-white ${
                        level <= skill.trained_skill_level && 'bg-white'
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </>
  );
}
