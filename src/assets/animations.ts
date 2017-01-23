import { trigger, state, animate, style, transition } from '@angular/core';

export function headerAnimation(manualPos: string, manualDelay?: string) {
    return slideUpDown(manualPos, !manualDelay ? '400ms' : manualDelay);
}

function slideUpDown(position: string, delay?: string) {
    return trigger(
        'slideUpDown', [
            state('void', style({ position: `relative`, width: '100%' })),
            transition(
                // evde düzeltiriz
                ':enter', [
                    style({ position: 'inherit', transform: 'translateY(-20%)', opacity: 0 }),
                    animate(`300ms ${delay}`, style({ transform: 'translateY(0%)', opacity: 1 }))
                ]
            ),
            transition(
                ':leave', [
                    style({ transform: 'translateY(0%)', 'opacity': 1 }),
                    animate(`300ms`, style({ transform: 'translateY(-40%)', opacity: 0 })),
                ]
            )]
    );
}
