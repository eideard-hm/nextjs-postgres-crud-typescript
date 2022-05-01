export interface Tasks {
    id:          number;
    title:       string;
    description: string;
    created_on:  Date;
}


export interface Props {
    tasks: Tasks[]
}