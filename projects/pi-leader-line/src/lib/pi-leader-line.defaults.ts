import { PiLeaderLineOptions, PiLeaderLinePath, PiLeaderLineSocket, PiLeaderLinePlug, PiLeaderLineDash, PiLeaderLineDashAnimation, PiLeaderLineDashAnimationTiming, PiLeaderLineGradient, PiLeaderLineShadow } from './pi-leader-line.types';

const DEFAULT_OPTIONS: PiLeaderLineOptions = {
    color: 'coral',
    size: 4,
    path: PiLeaderLinePath.FLUID,
    startSocket: PiLeaderLineSocket.AUTO,
    endSocket: PiLeaderLineSocket.AUTO,
    startSocketGravity: 'auto',
    endSocketGravity: 'auto',
    startPlug: PiLeaderLinePlug.BEHIND,
    endPlug: PiLeaderLinePlug.ARROW1,
    startPlugColor: 'auto',
    endPlugColor: 'auto',
    startPlugSize: 1,
    endPlugSize: 1,
    outline: false,
    outlineColor: 'indianred',
    outlineSize: 0.25,
    startPlugOutline: false,
    endPlugOutline: false,
    startPlugOutlineColor: 'auto',
    endPlugOutlineColor: 'auto',
    startPlugOutlineSize: 1,
    endPlugOutlineSize: 1,
    startLabel: '',
    middleLabel: '',
    endLabel: '',
    dash: false,
    gradient: false,
    dropShadow: false
}

const DEFAULT_DASH_OPTIONS: PiLeaderLineDash = {
    len: 'auto',
    gap: 'auto',
    animation: false
}

const DEFAULT_DASH_ANIMATION_OPTIONS: PiLeaderLineDashAnimation = {
    duration: 1000,
    timing: PiLeaderLineDashAnimationTiming.LINEAR
}

const DEFAULT_GRADIENT_OPTIONS: PiLeaderLineGradient = {
    startColor: 'auto',
    endColor: 'auto'
}

const DEFAULT_SHADOW_OPTIONS: PiLeaderLineShadow = {
    dx: 2,
    dy: 4,
    blur: 3,
    color: '#000',
    opacity: 0.8
}

export default class PiLeaderLineOptionsMerger {

    public static mergeWithDefaults(options: PiLeaderLineOptions): PiLeaderLineOptions {
        const mergedOptions: PiLeaderLineOptions = { ...DEFAULT_OPTIONS, ...options };
        mergedOptions.dash = this.mergeDashOptionsWithDefaults(mergedOptions.dash);
        mergedOptions.gradient = this.mergeGradientOptionsWithDefaults(mergedOptions.gradient);
        mergedOptions.dropShadow = this.mergeShadowOptionsWithDefaults(mergedOptions.dropShadow);

        return mergedOptions;
    }

    private static mergeDashOptionsWithDefaults(options: boolean | PiLeaderLineDash): boolean | PiLeaderLineDash {
        if (typeof options === 'boolean') {
            return options ? DEFAULT_DASH_OPTIONS : false;
        }
        const mergedOptions = { ...DEFAULT_DASH_OPTIONS, ...options };
        mergedOptions.animation = this.mergeDashAnimationOptionsWithDefaults(mergedOptions.animation);

        return mergedOptions;
    }

    private static mergeDashAnimationOptionsWithDefaults(options: boolean | PiLeaderLineDashAnimation): boolean | PiLeaderLineDashAnimation {
        if (typeof options === 'boolean') {
            return options ? DEFAULT_DASH_ANIMATION_OPTIONS : false;
        }
        return { ...DEFAULT_DASH_ANIMATION_OPTIONS, ...options };
    }

    private static mergeGradientOptionsWithDefaults(options: boolean | PiLeaderLineGradient): boolean | PiLeaderLineGradient {
        if (typeof options === 'boolean') {
            return options ? DEFAULT_GRADIENT_OPTIONS : false;
        }
        return { ...DEFAULT_GRADIENT_OPTIONS, ...options };
    }

    private static mergeShadowOptionsWithDefaults(options: boolean | PiLeaderLineShadow): boolean | PiLeaderLineShadow {
        if (typeof options === 'boolean') {
            return options ? DEFAULT_SHADOW_OPTIONS : false;
        }
        return { ...DEFAULT_SHADOW_OPTIONS, ...options };
    }
}
