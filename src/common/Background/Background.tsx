import { Container, ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

import options from './options';

export const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particleLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const tsOptions: ISourceOptions = useMemo(() => options, []);

    if (init) {
        return <Particles id="tsparticles" particlesLoaded={particleLoaded} options={tsOptions} />;
    }

    return <></>;
};
