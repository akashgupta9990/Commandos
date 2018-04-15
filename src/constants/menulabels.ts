export class LabelsConstant {
    keywords: string[];
    name: string;
    class: string;
    disabled: boolean;
    blink: boolean;
}

export const MenuLabels: LabelsConstant[] = [
    { keywords: ['m_grey_large', 'a_grey_large', 'i_grey_large', 'n_grey_large', 'empty_image_grey_large', 'm_grey_large', 'e_grey_large', 'n_grey_large', 'u_grey_large'], name: 'main menu', disabled: false, blink: false, class: 'mainmenu_header' },
    { keywords: ['n_brown_small', 'e_brown_small', 'w_brown_small', 'empty_image_brown_small', 'g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small'], name: 'new game', disabled: false, blink: true, class: 'newgame' },
    { keywords: ['s_brown_small', 'a_brown_small', 'v_brown_small', 'e_brown_small', 'empty_image_brown_small', 'g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small'], name: 'save game', disabled: true, blink: true, class: 'savegame' },
    { keywords: ['l_brown_small', 'o_brown_small', 'a_brown_small', 'd_brown_small', 'empty_image_brown_small', 'g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small'], name: 'load game', disabled: false, blink: true, class: 'loadgame' },
    { keywords: ['o_brown_small', 'p_brown_small', 't_brown_small', 'i_brown_small', 'o_brown_small', 'n_brown_small', 's_brown_small'], name: 'options', disabled: false, blink: true, class: 'options' },
    { keywords: ['c_brown_small', 'r_brown_small', 'e_brown_small', 'd_brown_small', 'i_brown_small', 't_brown_small', 's_brown_small'], name: 'credits', disabled: false, blink: true, class: 'credits' },
    { keywords: ['h_brown_small', 'e_brown_small', 'l_brown_small', 'p_brown_small'], name: 'help', disabled: false, blink: true, class: 'help' },
    { keywords: ['q_brown_small', 'u_brown_small', 'i_brown_small', 't_brown_small', 'empty_image_brown_small', 'g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small'], name: 'quit game', disabled: false, blink: true, class: 'quitmenu' },
];

export const NewGameLabels: LabelsConstant[] = [
    { keywords: ['n_grey_large', 'e_grey_large', 'w_grey_large', 'empty_image_brown_small', 'g_grey_large', 'a_grey_large', 'm_grey_large', 'e_grey_large'], name: 'new game', disabled: false, blink: false, class: 'newgame_header' },
    { keywords: ['s_brown_small', 'i_brown_small', 'n_brown_small', 'g_brown_small', 'l_brown_small', 'e_brown_small', 'empty_image_brown_small', 'p_brown_small', 'l_brown_small', 'a_brown_small', 'y_brown_small', 'e_brown_small', 'r_brown_small'], name: 'user profile', disabled: false, blink: true, class: 'profile' },
    { keywords: ['m_brown_small', 'u_brown_small', 'l_brown_small', 't_brown_small', 'i_brown_small', 'p_brown_small', 'l_brown_small', 'a_brown_small', 'y_brown_small', 'e_brown_small', 'r_brown_small', 'empty_image_brown_small', 'g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small'], name: 'multiplayer game', disabled: false, blink: true, class: 'multiplayer' },
    { keywords: ['t_brown_small', 'u_brown_small', 't_brown_small', 'o_brown_small', 'r_brown_small', 'i_brown_small', 'a_brown_small', 'l_brown_small', 's_brown_small'], name: 'tutorials', disabled: false, blink: true, class: 'tutorials' },
    { keywords: ['r_brown_small', 'e_brown_small', 's_brown_small', 't_brown_small', 'a_brown_small', 'r_brown_small', 't_brown_small', 'empty_image_brown_small', 'm_brown_small', 'i_brown_small', 's_brown_small', 's_brown_small', 'o_brown_small', 'n_brown_small'], name: 'restart mission', disabled: true, blink: false, class: 'restart' },
    { keywords: ['l_brown_small', 'o_brown_small', 'a_brown_small', 'd_brown_small', 'empty_image_brown_small', 'q_brown_small', 'u_brown_small', 'i_brown_small', 'c_brown_small', 'k_brown_small', 'empty_image_brown_small', 's_brown_small', 'a_brown_small', 'v_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 'g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small'], name: 'load quick saved game', disabled: true, blink: false, class: 'loadquicksave' },
    { keywords: ['p_brown_small', 'a_brown_small', 's_brown_small', 's_brown_small', 'w_brown_small', 'o_brown_small', 'r_brown_small', 'd_brown_small'], name: 'password', disabled: false, blink: true, class: 'password' },
    { keywords: ['e_brown_small', 'x_brown_small', 'i_brown_small', 't_brown_small'], name: 'exit', disabled: false, blink: true, class: 'exit' }
];

export const LoadGameLabels: LabelsConstant[] = [
    { keywords: ['l_grey_large', 'o_grey_large', 'a_grey_large', 'd_grey_large', 'empty_image_brown_small', 'g_grey_large', 'a_grey_large', 'm_grey_large', 'e_grey_large'], name: 'load game', disabled: false, blink: false, class: 'loadgame_header' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'empty_image_brown_small', 'u_brown_small', 'n_brown_small', 'u_brown_small', 's_brown_small', 'e_brown_small', 'd_brown_small', 'empty_image_brown_small', 's_brown_small', 'l_brown_small', 'o_brown_small', 't_brown_small', 'empty_image_brown_small', 'hyphen_brown_small', 'hyphen_brown_small', 'hyphen_brown_small'], name: 'unsued slot', disabled: false, blink: true, class: 'unsuedslot' },
    { keywords: ['e_brown_small', 'x_brown_small', 'i_brown_small', 't_brown_small'], name: 'exit', disabled: false, blink: true, class: 'exit' }
];

export const OptionsLabels: LabelsConstant[] = [
    { keywords: ['o_grey_large', 'p_grey_large', 't_grey_large', 'i_grey_large', 'o_grey_large', 'n_grey_large', 's_grey_large'], name: 'options', disabled: false, blink: false, class: 'options_header' },
    { keywords: ['u_brown_small', 's_brown_small', 'e_brown_small', 'r_brown_small', 'empty_image_brown_small', 'p_brown_small', 'r_brown_small', 'o_brown_small', 'f_brown_small', 'i_brown_small', 'l_brown_small', 'e_brown_small', 'empty_image_brown_small'], name: 'user profile', disabled: false, blink: true, class: 'profile' },
    { keywords: ['s_brown_small', 'o_brown_small', 'u_brown_small', 'n_brown_small', 'd_brown_small', 'empty_image_brown_small', 'v_brown_small', 'o_brown_small', 'l_brown_small', 'u_brown_small', 'm_brown_small', 'e_brown_small'], name: 'sound', disabled: false, blink: true, class: 'vloume' },
    { keywords: ['audiobar', 'audioslider'], name: 'volume bar', disabled: false, blink: false, class: 'volumebar' },
    { keywords: ['v_brown_small', 'i_brown_small', 'd_brown_small', 'e_brown_small', 'o_brown_small', 'empty_image_brown_small', 'o_brown_small', 'p_brown_small', 't_brown_small', 'i_brown_small', 'o_brown_small', 'n_brown_small', 's_brown_small'], name: 'video options', disabled: false, blink: true, class: 'videos' },
    { keywords: ['g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small', 'empty_image_brown_small', 'p_brown_small', 'r_brown_small', 'e_brown_small', 'f_brown_small', 'e_brown_small', 'r_brown_small', 'e_brown_small', 'n_brown_small', 'c_brown_small', 'e_brown_small', 's_brown_small'], name: 'game preferences', disabled: false, blink: true, class: 'preferences' },
    { keywords: ['e_brown_small', 'x_brown_small', 'i_brown_small', 't_brown_small'], name: 'exit', disabled: false, blink: true, class: 'exit' }
];

// export const HelpLabels: LabelsConstant[] = [
//    { keywords: ['o_grey_large', 'p_grey_large', 't_grey_large', 'i_grey_large', 'o_grey_large', 'n_grey_large', 's_grey_large'], name: 'options', disabled: false, blink: true, class: 'options_header' },
//    { keywords: ['u_brown_small', 's_brown_small', 'e_brown_small', 'r_brown_small', 'empty_image_brown_small', 'p_brown_small', 'r_brown_small', 'o_brown_small', 'f_brown_small', 'i_brown_small', 'l_brown_small', 'e_brown_small', 'empty_image_brown_small'], name: 'user profile', disabled: false, blink: true, class: 'profile' },
//    { keywords: ['s_brown_small', 'o_brown_small', 'u_brown_small', 'n_brown_small', 'd_brown_small', 'empty_image_brown_small', 'v_brown_small', 'o_brown_small', 'l_brown_small', 'u_brown_small', 'm_brown_small', 'e_brown_small'], name: 'sound', disabled: false, blink: true, class: 'vloume' },
//    { keywords: ['empty_image_brown_small'], name: 'volume bar', disabled: false, blink: true, class: 'volumebar' },
//    { keywords: ['v_brown_small', 'i_brown_small', 'd_brown_small', 'e_brown_small', 'o_brown_small', 'empty_image_brown_small', 'o_brown_small', 'p_brown_small', 't_brown_small', 'i_brown_small', 'o_brown_small', 'n_brown_small', 's_brown_small'], name: 'video options', disabled: false, blink: true, class: 'videos' },
//    { keywords: ['g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small', 'empty_image_brown_small', 'p_brown_small', 'r_brown_small', 'e_brown_small', 'f_brown_small', 'e_brown_small', 'r_brown_small', 'e_brown_small', 'n_brown_small', 'c_brown_small', 'e_brown_small', 's_brown_small'], name: 'game preferences', disabled: false, blink: true, class: 'preferences' },
//    { keywords: ['e_brown_small', 'x_brown_small', 'i_brown_small', 't_brown_small'], name: 'exit', disabled: false, blink: true, class: 'exit' }
// ];

export const QuitGameLabels: LabelsConstant[] = [
    { keywords: ['q_grey_large', 'u_grey_large', 'i_grey_large', 't_grey_large', 'empty_image_brown_small', 'g_grey_large', 'a_grey_large', 'm_grey_large', 'e_grey_large'], name: 'options', disabled: false, blink: false, class: 'quit_header' },
    { keywords: ['a_brown_small', 'r_brown_small', 'e_brown_small', 'empty_image_brown_small', 'y_brown_small', 'o_brown_small', 'u_brown_small', 'empty_image_brown_small', 's_brown_small', 'u_brown_small', 'r_brown_small', 'e_brown_small', 'empty_image_brown_small', 'y_brown_small', 'o_brown_small', 'u_brown_small', 'empty_image_brown_small', 'w_brown_small', 'a_brown_small', 'n_brown_small', 't_brown_small', 'empty_image_brown_small', 't_brown_small', 'o_brown_small', 'empty_image_brown_small', 'q_brown_small', 'u_brown_small', 'i_brown_small', 't_brown_small', 'question_brown_small'], name: 'quit confirm', disabled: false, blink: true, class: 'quitconfirm' },
    { keywords: ['y_brown_small', 'e_brown_small', 's_brown_small'], name: 'exit_yes', disabled: false, blink: true, class: 'yes' },
    { keywords: ['n_brown_small', 'o_brown_small'], name: 'exit_no', disabled: false, blink: true, class: 'no' }
];

export const TutorialsLabels: LabelsConstant[] = [
    { keywords: ['t_grey_large', 'u_grey_large', 't_grey_large', 'o_grey_large', 'r_grey_large', 'i_grey_large', 'a_grey_large', 'l_grey_large', 's_grey_large'], name: 'tutorials', disabled: false, blink: false, class: 'tutorials_header' },
    { keywords: ['g_brown_small', 'a_brown_small', 'm_brown_small', 'e_brown_small', 'empty_image_brown_small', 'b_brown_small', 'a_brown_small', 's_brown_small', 'i_brown_small', 'c_brown_small', 's_brown_small'], name: 'game basics', disabled: false, blink: true, class: 'gamebasics' },
    { keywords: ['g_brown_small', 'r_brown_small', 'e_brown_small', 'e_brown_small', 'n_brown_small', 'empty_image_brown_small', 'b_brown_small', 'e_brown_small', 'r_brown_small', 'e_brown_small', 't_brown_small'], name: 'green beret', disabled: false, blink: true, class: 'greenberet' },
    { keywords: ['s_brown_small', 'n_brown_small', 'i_brown_small', 'p_brown_small', 'e_brown_small', 'r_brown_small'], name: 'sniper', disabled: false, blink: true, class: 'sniper' },
    { keywords: ['d_brown_small', 'i_brown_small', 'v_brown_small', 'e_brown_small', 'r_brown_small'], name: 'diver', disabled: false, blink: true, class: 'diver' },
    { keywords: ['s_brown_small', 'a_brown_small', 'p_brown_small', 'p_brown_small', 'e_brown_small', 'r_brown_small'], name: 'sapper', disabled: false, blink: true, class: 'sapper' },
    { keywords: ['d_brown_small', 'r_brown_small', 'i_brown_small', 'v_brown_small', 'e_brown_small', 'r_brown_small'], name: 'driver', disabled: false, blink: true, class: 'driver' },
    { keywords: ['s_brown_small', 'p_brown_small', 'y_brown_small'], name: 'spy', disabled: false, blink: true, class: 'spy' },
    { keywords: ['e_brown_small', 'x_brown_small', 'i_brown_small', 't_brown_small'], name: 'exit', disabled: false, blink: true, class: 'exit' }
];