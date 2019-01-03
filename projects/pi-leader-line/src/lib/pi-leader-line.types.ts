

export interface PiLeaderLineOptions {
    /**
     * The color of the leader line.
     * @default 'coral'
    */
    color?: string;
    /**
     * The width of the leader line, in pixels.
     * @default 4
     */
    size?: number;
    /**
     * Indicates how to draw the line.
     * @default PiLeaderLinePath.FLUID
     */
    path?: PiLeaderLinePath;
    /**
     * The string to indicate which side of the element the leader line connects.
     * @default PiLeaderLineSocket.AUTO
     */
    startSocket?: PiLeaderLineSocket;
    /**
     * The string to indicate which side of the element the leader line connects.
     * @default PiLeaderLineSocket.AUTO
     */
    endSocket?: PiLeaderLineSocket;
    /**
     * The force of gravity at a socket.
     * If a number is specified, the leader line is pulled in the direction of the socket. The number is pull strength.
     * If an Array that is coordinates [x, y] is specified, the leader line is pulled in the direction of the coordinates. The distance between the coordinates and [0, 0] is pull strength.
     * @default 'auto'
     */
    startSocketGravity?: 'auto' | number[] | number;
    /**
     * The force of gravity at a socket.
     * If a number is specified, the leader line is pulled in the direction of the socket. The number is pull strength.
     * If an Array that is coordinates [x, y] is specified, the leader line is pulled in the direction of the coordinates. The distance between the coordinates and [0, 0] is pull strength.
     * @default 'auto'
     */
    endSocketGravity?: 'auto' | number[] | number;
    /**
     * Indicates type of plug.
     * @default PiLeaderLinePlug.BEHIND
     */
    startPlug?: PiLeaderLinePlug;
    /**
     * Indicates type of plug.
     * @default PiLeaderLinePlug.ARROW1
     */
    endPlug?: PiLeaderLinePlug;
    /**
     * The color of the plug.
     * @default 'auto'
     */
    startPlugColor?: string;
    /**
     * The color of the plug.
     * @default 'auto'
     */
    endPlugColor?: string;
    /**
     * A multiplying factor of the size of a plug.
     * @default 1
     */
    startPlugSize?: number;
    /**
     * A multiplying factor of the size of a plug.
     * @default 1
     */
    endPlugSize?: number;
    /**
     * If true is specified, an outline of the leader line is enabled.
     * @default false
     */
    outline?: boolean;
    /**
     * The color of the outline of the leader line.
     * @default 'indianred'
     */
    outlineColor?: string;
    /**
     * A multiplying factor of the size of an outline of the leader line, it is greater than 0 and is less than or equal to 0.48.
     * @default 0.25
     */
    outlineSize?: number;
    /**
     * If true is specified, an outline of the plug is enabled.
     * @default false
     */
    startPlugOutline?: boolean;
    /**
     * If true is specified, an outline of the plug is enabled.
     * @default false
     */
    endPlugOutline?: boolean;
    /**
     * The color of the outline of the plug.
     * @default 'auto'
     */
    startPlugOutlineColor?: string;
    /**
     * The color of the outline of the plug.
     * @default 'auto'
     */
    endPlugOutlineColor?: string;
    /**
     * A multiplying factor of the size of an outline of the plug, it is greater than or equal to 1.
     * @default 1
     */
    startPlugOutlineSize?: number;
    /**
     * A multiplying factor of the size of an outline of the plug, it is greater than or equal to 1.
     * @default 1
     */
    endPlugOutlineSize?: number;
    /**
     * An additional label that is shown on the leader line.
     * @default ''
     */
    startLabel?: string;
    /**
     * An additional label that is shown on the leader line.
     * @default ''
     */
    middleLabel?: string;
    /**
     * An additional label that is shown on the leader line.
     * @default ''
     */
    endLabel?: string;
    /**
     * Enable the effect with specified Object that can have properties as the following options.
     * Or true to enable it with all default options.
     * @default false
     */
    dash?: boolean | PiLeaderLineDash;
    /**
     * Enable the effect with specified Object that can have properties as the following options.
     * Or true to enable it with all default options.
     * @default false
     */
    gradient?: boolean | PiLeaderLineGradient;
    /**
     * Enable the effect with specified Object that can have properties as the following options.
     * Or true to enable it with all default options.
     * @default false
     */
    dropShadow?: boolean | PiLeaderLineShadow;
}

export interface PiLeaderLineDash {
    /**
     * Length of drawn lines.
     * @default 'auto'
     */
    len?: 'auto' | number;
    /**
     * Gap between drawn lines.
     * @default 'auto'
     */
    gap?: 'auto' | number;
    /**
     * Enable the effect with specified Object that can have properties as the following options.
     * Or true to enable it with all default options.
     * @default false
     */
    animation?: boolean | PiLeaderLineAnimation;
}

export interface PiLeaderLineAnimation {
    /**
     * A number determining how long (milliseconds) the animation will run.
     * @default 1000
     */
    duration?: number;
    /**
     * An Array that is [x1, y1, x2, y2] as a "timing function" that indicates how to change the speed.
     * @default PiLeaderLineDashAnimationTiming.LINEAR
     */
    timing?: number[] | PiLeaderLineAnimationTiming;
}

export interface PiLeaderLineGradient {
    /**
     * The start color of the gradient.
     * @default 'auto'
     */
    startColor?: string;
    /**
     * The end color of the gradient.
     * @default 'auto'
     */
    endColor?: string;
}

export interface PiLeaderLineShadow {
    /**
     * The offset X of the drop shadow, in pixels.
     * @default 2
     */
    dx?: number;
    /**
     * The offset Y of the drop shadow, in pixels.
     * @default 4
     */
    dy?: number;
    /**
     * The standard deviation for the blur operation in the drop shadow.
     * @default 3
     */
    blur?: number;
    /**
     * The color of the drop shadow.
     * @default '#000'
     */
    color?: string;
    /**
     * A number ranging from 0 to 1 to indicate the transparency of the drop shadow.
     * @default 0.8
     */
    opacity?: number
}

export enum PiLeaderLinePath {
    STRAIGHT = 'straight',
    ARC = 'arc',
    FLUID = 'fluid',
    MAGNET = 'magnet',
    GRID = 'grid'
}

export enum PiLeaderLineSocket {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left',
    AUTO = 'auto'
}

export enum PiLeaderLinePlug {
    DISC = 'disc',
    SQUARE = 'square',
    ARROW1 = 'arrow1',
    ARROW2 = 'arrow2',
    ARROW3 = 'arrow3',
    HAND = 'hand',
    CROSSHAIR = 'crosshair',
    BEHIND = 'behind'
}

export enum PiLeaderLineAnimationTiming {
    ASE = 'ase',
    LINEAR = 'linear',
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out',
    EASE_IN_OUT = 'ease-in-out'
}

export enum PiLeaderLineShowEffectName {
    NONE = 'none',
    FADE = 'fade',
    DRAW = 'draw'
}
