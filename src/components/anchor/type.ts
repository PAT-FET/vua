import { Func } from 'mocha';

export interface AnchorTargetFn {
    (): HTMLElement
}

export interface AnchorThis{
    init:Function,
    handleHashChange:Function,
    handleScrollTo:Function,
    [key: string]: Function
}