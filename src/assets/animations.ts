import { trigger, state, animate, style, transition } from '@angular/core';

export function headerAnimation() {
    return slideUpDown();
}

function slideUpDown() {
    return trigger(
        'slideUpDown', [
            state('void', style({ position: 'fixed', width: '100%' })),
            transition(
                ':enter', [
                    style({ transform: 'translateY(-20%)', opacity: 0}),
                    animate(`300ms 400ms`, style({ transform: 'translateY(0%)', opacity: 1}))
                ]
            ),
            transition(
                ':leave', [
                    style({ transform: 'translateY(0%)', 'opacity': 1}),
                    animate(`300ms`, style({ transform: 'translateY(-20%)', opacity: 0})),
                ]
            )]
    );
}
