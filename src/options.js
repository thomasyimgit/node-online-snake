export const SNAKE_INIT_LENGTH = 5;

export const RIGHT = 'RIGHT';
export const UP = 'UP';
export const LEFT = 'LEFT';
export const DOWN = 'DOWN';

export const SEGMENT_WIDTH = 15;

export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 620;

export const OBSTACLE_SIZE = 45;
export const BOUNDARY_PROX = -0.9;
export const OBSTACLE_PROX = 1;
export const FOOD_FROM_OBSTACLE = 5;
export const OBSTACLE_FROM_OBSTACLE = 5;

export const ROWS = CANVAS_WIDTH / SEGMENT_WIDTH;
export const COLS = CANVAS_HEIGHT / SEGMENT_WIDTH;

export const MOVING_SPEED = 250; // 1000ms interval for setTimeout
export const ACCELERATING_SPEED = 400;

export const COLLISION_AUDIO = 'collision.mp3';
export const POWERUP_AUDIO = 'powerup.mp3';
export const POWERDOWN_AUDIO = 'powerdown.mp3';
export const AUDIO = [COLLISION_AUDIO, POWERUP_AUDIO, POWERDOWN_AUDIO];

// event
export const PLAY_COLLISION_SOUND = 'play_collision_sound';
export const PLAY_NORMAL_FOOD_SOUND = 'play_normal_food_sound';
export const PLAY_SPOILED_FOOD_SOUND = 'play_spoiled_food_sound';

export const END_GAME = 'end_game';
export const RESTART = 'restart';
export const RENDER = 'render';
export const TOGGLE_WAIT = 'toggle_wait';
export const CHANGE_DIRECTION = 'change_direction';
export const GET_SESSION_ID = 'get_session_id';

export const SPOILED_FOOD_TIMEOUT = 7000;
