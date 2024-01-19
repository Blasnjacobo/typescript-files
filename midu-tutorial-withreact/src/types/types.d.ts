export interface Sub {
    nick: string
    subMonths: number
    avatar: string
    description?: string
}

export type FormReducerAction = {
    type: 'change_value',
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
        type: 'clear'
    }

export type SubsResponseFromApi = Array<{
    nick: string
    months: number
    profileUrl: string
    description: string
}>
