/// <reference types="react" />
import { ReactGoogleChartProps } from "./types";
export declare const ContextProvider: ({ children, value, }: {
    children: any;
    value: ReactGoogleChartProps;
}) => JSX.Element;
export declare const ContextConsumer: ({ render, }: {
    render: (context: ReactGoogleChartProps) => JSX.Element | null;
}) => JSX.Element;
