import 'baseui';

declare module 'baseui' {
    export interface Theme extends Theme {
        custom: {
            pageMaxWidth: string;
        };
    }
}
