import { fetchEveData, sortByName, sortByGroupName } from '@/utils';
import { esiSlugs } from '@/constants';
import { Skill, SkillsData } from '@/types';
import { names } from '@/data/names';
import { groups } from '@/data/groups';

interface CurrentSkillsProps {
  characterId: string;
}

interface ExtendedSkill extends Skill {
  skillName: string | number;
  skillGroup: string | number;
}

export default async function CurrentSkills({ characterId }: CurrentSkillsProps) {
  const data: SkillsData = await fetchEveData({
    slug: `${esiSlugs.character}${characterId}${esiSlugs.skills}`,
    authRequired: true
  });

  const MAX_SKILL_LEVEL = [1, 2, 3, 4, 5];

  const namedSkills: ExtendedSkill[] = data.skills.map((skill) => {
    const nameEntry = names[skill.skill_id];
    const skillName = nameEntry ? nameEntry.name : skill.skill_id;
    const skillGroup = nameEntry ? nameEntry.groupID : 'Unknown';
    return {
      ...skill,
      skillName,
      skillGroup
    } as ExtendedSkill;
  });

  const sortedSkills = sortByName(namedSkills);

  const groupedSkills = sortedSkills.reduce(
    (acc: { skillGroup: string; skills: ExtendedSkill[] }[], skill) => {
      const group = groups[skill.skillGroup];
      const groupName = group ? group.name : 'Unknown';

      const existingGroup = acc.find((g) => g.skillGroup === groupName);

      if (existingGroup) {
        existingGroup.skills.push(skill);
      } else {
        acc.push({
          skillGroup: groupName,
          skills: [skill]
        });
      }

      return acc;
    },
    []
  );

  const sortedGroups = sortByGroupName(groupedSkills);

  return (
    <>
      {sortedGroups.map((group) => {
        return (
          <div key={group.skillGroup} className="content-box my-4">
            <h2 className="font-bold">{group.skillGroup}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-16 p-4">
              {group.skills.map((skill) => {
                return (
                  <div key={skill.skill_id} className="flex w-full items-center justify-between">
                    <div>{skill.skillName}</div>
                    <div className="flex gap-1">
                      {MAX_SKILL_LEVEL.map((level) => {
                        return (
                          <div
                            key={level}
                            className={`w-3 h-3 border border-white ${
                              level <= skill.trained_skill_level ? 'bg-slate-400' : ''
                            }`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      ;
    </>
  );
}
