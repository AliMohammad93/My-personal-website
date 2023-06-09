import React, {useContext} from "react";
import Skill from "./partials/Skill";
import OtherSkills from "./partials/OtherSkills";
import {LanguageContext} from "../../context/LanguageContext";
import {skills} from "./data/SkillData";
import {otherSkills} from "./data/OtherSkillsData";
import strings from "../../localization/languages";
const Skills: React.FC = () => {
    useContext(LanguageContext);
    return (
        <div className={'flex flex-col justify-center items-center py-10 px-1 w-ful'}>
            {skills.map((filed, index) => (
                <React.Fragment key={index}>
                    {filed?.title && (
                        <p className="text-2xl md:text-3xl font-bold text-white mt-14 m-6">
                            {strings.skills[filed.title as keyof typeof strings.skills]}
                        </p>)}
                    <div
                        className={'flex flex-row flex-wrap justify-center items-center items-stretch w-full md:space-x-4'}>
                        {filed.content.map((skill, index) => (
                            <Skill
                                key={index}
                                title={skill.title}
                                logo={skill.logo}
                                experience={strings.skills[skill.experience as keyof typeof strings.skills]}
                                including={skill.including}
                            />
                        ))}
                    </div>
                </React.Fragment>
            ))}
            <p className={'text-2xl md:text-3xl font-bold text-white mt-14 m-6'}>{strings.skills.otherSkills}</p>
            <div className={'flex flex-row  justify-center items-center items-stretch w-full md:space-x-4'}>
                <OtherSkills
                    skillsGroupArr={otherSkills.content}
                    logo={otherSkills.logo}/>
            </div>
        </div>
    )
}

export default Skills;
