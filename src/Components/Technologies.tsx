import React, { use } from 'react';
import type { ITechnology } from '../Types/Technologies';


interface TechnologiesProps {
    techPromise: Promise<ITechnology[]>;
}

const Technologies = ({ techPromise}:TechnologiesProps) => {
    console.log(techPromise);
    const Technologies = use(techPromise);
    console.log(Technologies, "technologiesddd");
    return (
        <div>
            <>

            </>
        </div>
    );
};

export default Technologies;