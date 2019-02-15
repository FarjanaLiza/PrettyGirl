import { trigger,transition, style, query, group, animate,animateChild} from "@angular/animations";


//basic

export const fader =
    trigger('routeAnimations', [
        transition('HomePage <=> AboutPage' ,[
            query(':enter, :leave' ,[
                style({
                    position:'absolute',
                    left:0,
                    width:'100%',
                    opacity:0,
                    transform:'scale(0) translateY(100%)',
                }),
            ]),
            query(':enter', [
                animate('600ms ease',
                style({
                    opacity:1,
                    transform:'scale(1) translateY(0)'
                })
                ),
            ])
        ])
    ]);
   

 /*  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('2000ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('2000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('2000ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('2000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);*/